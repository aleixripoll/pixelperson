import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://aleixripoll.github.io",
  base: "/pixelperson/",
  image: {
    // Smaller output: AVIF/WebP and reduced quality to cut file size
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: { limitInputPixels: false },
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          content: [{ type: "text", value: " #" }],
          properties: { ariaHidden: true, tabIndex: -1, className: ["anchor-link"] },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});
