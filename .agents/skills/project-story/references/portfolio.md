# Portfolio conventions

Inspected 2026-11-07. Recheck `src/content.config.ts`, `src/data/projects.ts`, route consumers and deployment workflow before importing.

## Blog

Loader: `src/content/blog/**/*.{md,mdx}`. Required: string `title`, string `description`, `pubDate` coerced to Date. Optional: Date-coerced `updatedDate`, Astro image-helper `heroImage`, URL-string `repoUrl`, string-array `tags`, boolean `featured`.

Use quoted zero-padded ISO dates and YAML `true`/`false`, not `yes`. The parser treats `yes` as a string, incompatible with `z.boolean()`. `liveUrl` is absent from this schema; unknown properties are stripped. Preserve that value through a body link instead of assuming it survives frontmatter parsing.

Corrected supplied example (syntax demonstration, not an approved article):

```markdown
---
title: "Returning to BakerLinks: the work behind the profile"
description: "Revisiting an AI-assisted app, improving its management tools, and finding the most interesting work behind a simple public page."
pubDate: '2026-11-07'
tags: ['ai-assisted-development', 'maintenance', 'admin-ux', 'product-design', 'nextjs']
repoUrl: 'https://github.com/michael-baker-content/bakerlinks'
featured: true
---

[BakerLinks](https://bakerlinks.com)
```

`nextjs` exists; the other four example tags are proposals. Confirm `admin-ux` describes privileged administration rather than only profile-owner management.

There is no draft field/filter: homepage, blog, tag pages, routes and RSS consume all collection entries. `draft: true`, future dates and `featured: false` do not hide posts. Keep drafts outside `src/content/blog/`.

## Projects

There is **no project-page frontmatter**. `src/data/projects.ts` exports typed `Project[]`; `src/pages/projects/[slug].astro` renders it.

Required: `slug`, `name`, `description`, `repoUrl`, `tags`, `status` (`active`, `complete`, `learning`). Optional: `overview`, `image`, `liveUrl`, `startDate`, `lastUpdated`, `learningFocus`, `type` (`web-app`, `data-science`, `creative-coding`, `tool`, `learning-project`), `featured`, `blogPosts`.

`overview` is plain text rendered as paragraphs, not Markdown. Convert approved prose into safely escaped TypeScript text with `\n\n` breaks; no Markdown headings/links. Preserve unrelated entry fields. `blogPosts` uses exact blog IDs without extensions, selected by equality. Project dates are string metadata; existing `startDate` values use `YYYY-MM`.

`ProjectMedia.astro` passes `image` to Cloudinary as a public ID; arbitrary image URLs should not be assumed to work despite README's broad description. Placeholder IDs are not screenshots.

## Filenames, links, tags and assets

Preserve existing filenames and IDs, including underscores. Prefer lowercase hyphen-separated filenames for new posts; verify actual loader IDs. Prose links use `/projects/<slug>/` and `/blog/<post-id>/`. Tag routes use `/tags/<tag>` with exact values. Inspect current tag arrays before proposing new taxonomy; examples include `nextjs`, `supabase`, `publishing`, `product`, `codex`, `content-system`, `interface-design`, `workflow`.

Use Markdown for ordinary posts, MDX when components are needed. Component imports and local hero images must resolve relative to the final destination, not the staging folder. Public assets use root-relative URLs. Inspect existing Cloudinary embeds before using that pattern. Include actual assets or explicit requests, with alt text, captions and credits.

## Validation and deployment

`npm run build` is the configured content/schema/MDX compilation check and PR CI check; there is no separate test script. Stage intended files and project edits in an isolated portfolio copy to validate drafts without putting them into this checkout's publishing inputs. Inspect generated routes, dates, related posts, links and assets; build success alone does not verify external destinations or factual claims.

Pushes to `main` deploy to GitHub Pages; PR builds do not deploy. Do not push or deploy under drafting authorization.
