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

Requires Node.js 22.22.0 or newer. The repo is named `yourusername.github.io` for GitHub Pages root URL hosting.

### Local development

This repository already contains the application; no scaffolding is needed.

```powershell
npm ci
npm run dev
```

Open the local URL printed by Astro (normally http://localhost:4321).

```powershell
npm run build
npm run preview
```

Cloudinary defaults to the site's existing public account. To override it, copy
`.env.example` to `.env` and change `PUBLIC_CLOUDINARY_CLOUD_NAME`.
The cloud name is public, not an API credential.

### Deployment and checks

Pushes to `main` deploy through `.github/workflows/deploy.yml`.
GitHub Pages must use **GitHub Actions** as its source. Pull requests run a
separate build check and do not deploy. The optional Cloudinary repository
secret overrides the default account during deployment.

Generated `.astro/`, `dist/`, and `node_modules/` files are not tracked.

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
npm install @astrojs/markdown-remark remark-math rehype-katex katex
```

Import `unified` from `@astrojs/markdown-remark` and pass the plugins to the processor in `astro.config.mjs`:

```javascript
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

markdown: {
    processor: unified({
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    }),
},
```

Note: the older `markdown.remarkPlugins` and `markdown.rehypePlugins` top-level keys are deprecated as of Astro 6.4 and will be removed in Astro 8.0.

The KaTeX stylesheet is bundled from the installed package in `BaseHead.astro`:

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

## Maintenance notes

Astro 7 uses the explicit unified Markdown processor to preserve remark/rehype
math rendering, and `compressHTML: true` preserves the earlier whitespace behavior.

As of 2026-10-15, npm audit reports five low-severity entries in the KaTeX
dependency chain (GHSA-238p-pmpm-9mq7), with no moderate, high, or critical entries.
The remaining fix requires updates beyond the math libraries' declared KaTeX
ranges. Do not use `npm audit fix --force`: its proposed downgrades would remove
existing math-library functionality. Recheck when compatible releases are available.
