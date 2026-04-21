# michael-baker-content

A personal blog and project portfolio built with [Astro](https://astro.build), hosted on GitHub Pages at [michael-baker-content.github.io](https://michael-baker-content.github.io).

Posts go in depth on projects from the companion [GitHub profile](https://github.com/michael-baker-content), covering web development, data science, creative coding, and design tooling.

---

## Features

- MDX blog posts with content collections
- Dark/light mode with system preference detection and manual toggle
- Client-side search on blog and tags index pages
- Tags system with per-tag pages
- Projects portfolio with dedicated project pages
- View transitions between pages
- Dual-theme syntax highlighting (light and dark)
- GitHub Actions deployment to GitHub Pages
- RSS feed

---

## Basic setup

Requires Node.js 22+. The repo is named `yourusername.github.io` for GitHub Pages root URL hosting.

### Scaffold

Since the Astro blog template scaffolder won't write into a non-empty directory (the cloned repo has a README and `.gitignore`), scaffold into a temp folder and move the files up:

```bash
npm create astro@latest temp-astro -- --template blog
Move-Item temp-astro\* . -Force
Move-Item temp-astro\.* . -Force
Remove-Item temp-astro
```

### Install and configure

```bash
npm install @astrojs/mdx
```

`astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://yourusername.github.io',
    integrations: [mdx(), sitemap()],
});
```

### Deploy

In the repo on GitHub, set **Settings → Pages → Source** to **GitHub Actions**, then add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

### Post frontmatter

```markdown
---
title: 'Your Post Title'
description: 'Short description for SEO and listings.'
pubDate: '2025-01-15'
tags: ['tag1', 'tag2']
repoUrl: 'https://github.com/yourusername/your-repo'
featured: true
---
```

---

## Full setup

Optional integrations for math rendering, image hosting, and content-specific embeds.

### Dual-theme syntax highlighting

Add to `astro.config.mjs`:

```javascript
markdown: {
    shikiConfig: {
        themes: { light: 'min-light', dark: 'github-dark' },
        defaultColor: false,
    },
},
```

Add to `global.css`:

```css
pre > code span { color: var(--shiki-light) !important; }
[data-theme='dark'] pre > code span { color: var(--shiki-dark) !important; }
@media (prefers-color-scheme: dark) {
    :root:not([data-theme='light']) pre > code span { color: var(--shiki-dark) !important; }
}
```

### KaTeX math rendering

```bash
npm install remark-math rehype-katex katex
```

Add to `astro.config.mjs`:

```javascript
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
},
```

Add to `BaseHead.astro`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
```

Use `$...$` for inline and `$$...$$` for display math. For complex LaTeX in MDX containing curly braces, create a `Math.astro` component that accepts the formula as a string prop to avoid MDX parsing conflicts.

### Cloudinary image hosting

1. Add your cloud name to `.env`: `PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name`
2. Add `PUBLIC_CLOUDINARY_CLOUD_NAME` as a GitHub Actions repository secret
3. Pass it to the build step in `deploy.yml`:

```yaml
- run: npm run build
  env:
    PUBLIC_CLOUDINARY_CLOUD_NAME: ${{ secrets.PUBLIC_CLOUDINARY_CLOUD_NAME }}
```

Create `src/components/CloudinaryImage.astro` to generate optimized Cloudinary URLs with `f_auto,q_auto` transforms and a 2x srcset. Accepts `publicId`, `alt`, `width`, `height`, `caption`, and `bare` props. Use `bare={true}` inside cards to render a plain `<img>` without the figure wrapper.

### Mafs interactive math figures

```bash
npm install @astrojs/react react react-dom mafs
```

Add `react()` to integrations in `astro.config.mjs`. Create `src/components/MafsChart.jsx` with preset functions and a `MutationObserver` on `data-theme` for dark/light mode awareness. Always use `client:load` when embedding in MDX.

Available presets: `normalDistribution`, `sine`, `cosine`, `quadratic`, `cubic`.

### p5.js live sketches

Place sketch files in `public/sketches/` as ES modules exporting a default function that receives a `p` instance. Use `p.canvas.parentElement.offsetWidth` in `setup` and `windowResized` to fill the container responsively.

Create `src/components/P5Sketch.astro` which loads p5.js from the Cloudflare CDN and dynamically imports the sketch file. Accepts `src`, `height`, and `caption` props.

### Strudel live coding

Create `src/components/StrudelEmbed.astro` which URL-encodes the pattern and embeds the Strudel REPL via iframe. Accepts `code`, `height`, and `caption` props.

---

## Project data

Defined in `src/data/projects.ts`:

| Field | Type | Required |
|-------|------|----------|
| `slug` | string | Yes |
| `name` | string | Yes |
| `description` | string | Yes |
| `repoUrl` | string | Yes |
| `tags` | string[] | Yes |
| `status` | `active` \| `complete` \| `learning` | Yes |
| `image` | string (image URL or hosting public ID) | No |
| `overview` | string | No |
| `liveUrl` | string | No |
| `startDate` | string | No |
| `lastUpdated` | string | No |
| `learningFocus` | string | No |
| `type` | `web-app` \| `data-science` \| `creative-coding` \| `tool` \| `learning-project` | No |
| `featured` | boolean | No |
| `blogPosts` | string[] | No |

Featured projects appear on the homepage. `blogPosts` contains post IDs that render as related posts on the project's dedicated page.

---

## Content schema

| Field | Type | Required |
|-------|------|----------|
| `title` | string | Yes |
| `description` | string | Yes |
| `pubDate` | date | Yes |
| `updatedDate` | date | No |
| `heroImage` | image | No |
| `repoUrl` | URL string | No |
| `tags` | string[] | No |
| `featured` | boolean | No |

---

## License

MIT
