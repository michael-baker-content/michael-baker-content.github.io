---
title: 'Building and Deploying This Blog with Astro'
description: 'A walkthrough of how I built this site — from scaffolding an Astro project to deploying on GitHub Pages, and the features I added along the way.'
pubDate: '2026-06-02'
repoUrl: 'https://github.com/michael-baker-content/michael-baker-content.github.io'
tags: ['astro', 'mdx', 'github-pages', 'javascript', 'css']
featured: false
---

This site is the first project I am writing about in depth — which feels appropriate since building it was itself a significant learning experience. This post covers the full arc from initial scaffold to the finished site you are reading now.

## Why Astro

The goal was a blog that would serve as a companion to my GitHub repos — somewhere to go in depth on projects rather than just link to code. I wanted full control over the output, good support for technical content like code blocks and math equations, and a deployment pipeline that would get out of the way.

Astro fit well. It generates static HTML by default, has first-class MDX support, and deploys cleanly to GitHub Pages via a GitHub Actions workflow. The islands architecture means client-side JavaScript only loads where it is actually needed, which matters when you are embedding live sketches and interactive components.

## Scaffolding and Deployment

The project started from Astro's blog starter template. Since the GitHub repo was not empty when I scaffolded, I had to work around the scaffolder's refusal to write into a non-empty directory — the fix was scaffolding into a temp folder and moving the files up.

Deployment to GitHub Pages required a GitHub Actions workflow and setting the repo's Pages source to GitHub Actions rather than a branch. The workflow installs Node 22, runs `npm run build`, and uploads the `dist` folder as a Pages artifact. Every push to `main` triggers a deploy.

## Content Features

MDX is the format for all posts — it is Markdown with the ability to import and render React or Astro components inline. This is what makes the interactive embeds possible.

KaTeX handles math rendering via `remark-math` and `rehype-katex`. Equations are written as standard LaTeX. For complex expressions in MDX that contain curly braces, a small `Math.astro` wrapper component accepts the formula as a string prop to avoid MDX's JSX parser conflicting with LaTeX syntax.

Syntax highlighting uses Astro's built-in Shiki with dual themes — `min-light` for light mode and `github-dark` for dark mode. With `defaultColor: false`, Shiki outputs both themes' colors as CSS custom properties on each token, and CSS rules map those to the current theme based on the `data-theme` attribute set by the toggle.

## Interactive Embeds

Three reusable components handle live content embedded in posts:

**P5Sketch** loads p5.js from a CDN and dynamically imports a sketch file from `public/sketches/`. The sketch exports a default function that receives a p5 instance.

**MafsChart** wraps the Mafs React library for interactive mathematical figures. Since functions cannot be passed as props through MDX with `client:load`, the component defines preset functions internally and selects between them via a `type` prop. A `MutationObserver` watches the `data-theme` attribute so the chart colors update when you toggle the theme.

**StrudelEmbed** URL-encodes a Strudel pattern and embeds the Strudel REPL as an iframe.

## Design

The site uses a warm gray palette in light mode and near-black in dark mode, with lime green as the accent color. The Syne font is used for headings and the site title. The homepage has three colored bands — hero green, projects green, and posts green — that correspond to the background colors used on the projects and blog pages.

The hero and featured post sections have ambient animated backgrounds built with p5.js — slow drifting polygon shapes in the hero and drifting thread lines in the featured section. Both are disabled when `prefers-reduced-motion` is set or on mobile.

## Image Hosting

Images are served from Cloudinary rather than committed to the repo. A `CloudinaryImage` component generates optimized URLs with `f_auto` and `q_auto` transforms, serving WebP or AVIF depending on browser support.

## What I Would Do Differently

The main thing I underestimated was how much CSS specificity and scoping would require attention as the site grew. I also added several interactive features without a clear content plan for each. Having a post ready to go alongside each feature would have been a better workflow.