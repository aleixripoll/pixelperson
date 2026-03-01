import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/content/blog");
const outPath = path.join(process.cwd(), "public/search-index.json");

const index = [];

const years = fs.readdirSync(blogDir).filter((f) => {
  const p = path.join(blogDir, f);
  return fs.statSync(p).isDirectory() && /^\d{4}$/.test(f);
});

for (const year of years.sort()) {
  const yearPath = path.join(blogDir, year);
  const slugs = fs.readdirSync(yearPath).filter((f) => {
    const p = path.join(yearPath, f);
    return fs.statSync(p).isDirectory();
  });
  for (const slug of slugs) {
    const mdPath = path.join(yearPath, slug, "index.md");
    if (!fs.existsSync(mdPath)) continue;
    const raw = fs.readFileSync(mdPath, "utf8");
    const titleMatch = raw.match(/^title:\s*["']?([^"'\n]+)["']?\s*$/m);
    const descMatch = raw.match(/^description:\s*["']?([^"'\n]+)["']?\s*$/m);
    const title = titleMatch ? titleMatch[1].trim() : slug;
    const description = descMatch ? descMatch[1].trim() : "";
    index.push({ title, description, slug: `${year}/${slug}` });
  }
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(index), "utf8");
console.log("Wrote search-index.json with", index.length, "posts.");
