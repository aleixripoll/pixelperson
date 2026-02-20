# Pixelperson

A simple Astro blog with a masonry theme. The main page lists all posts with cover images in a responsive column layout.

## Setup

```bash
cd pixelperson
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Structure

- **Main page** (`/`) – Masonry grid of posts with cover image, title, date, and excerpt.
- **Post pages** (`/blog/[slug]/`) – Full post with optional cover image and markdown content.

## Adding posts

Add a new folder under `src/content/blog/`, for example `src/content/blog/my-post/`:

1. Create `index.md` with frontmatter:

```yaml
---
title: "My post"
description: "Short description."
pubDate: 2025-03-01
image: ./cover.svg
---

Your markdown content here.
```

2. Add a cover image in the same folder (e.g. `cover.svg` or `cover.png`) and reference it as `image: ./cover.svg` in the frontmatter. If you omit `image`, the main page will show a placeholder with the first letter of the title.

## Build

```bash
npm run build
npm run preview
```
