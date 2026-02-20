import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aleixripoll.github.io",
  base: "/pixelperson/",
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
