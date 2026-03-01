import { getCollection } from "astro:content";

export const PAGE_SIZE = 12;

export async function getSortedPosts() {
  const all = await getCollection("blog");
  return [...all].sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
}
