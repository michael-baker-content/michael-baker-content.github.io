---
title: 'Building the GitHub Repo Journal'
description: 'Why I built this blog, how it works, and what I have learned about the relationship between code and the writing that explains it.'
pubDate: '2026-06-02'
tags: ['astro', 'technical-writing', 'github-pages', 'portfolio']
---

This blog exists because repositories are not enough.

A GitHub profile can show activity. It can show languages, commits, stars, and project names. What it does not usually show is intent. It does not explain why a project exists, what decision mattered during development, what the tradeoffs were, or how the work fits into a larger arc of thinking.

The blog adds that missing narrative layer.

## Why Astro

Astro is a good fit for a content-first site that still needs flexibility. It generates static HTML by default, which keeps the site fast and the deployment simple. MDX support means posts can include React components alongside prose. The islands architecture means client-side JavaScript only loads where it is actually needed.

That last point matters for a blog that might include live p5.js sketches, interactive math figures, or embedded music patterns. You want those to work without making every page pay the cost of loading all of them.

## What This Blog Is For

The posts here are not tutorials and they are not documentation. They are closer to project retrospectives: what was this for, how does it work, what was difficult, and what would I do differently.

That is a different kind of writing from a README. A README explains how to use something. A retrospective explains why it exists and what it was like to build. Those are different questions, and the answers are often more useful to a reader trying to understand someone's thinking.

## The Technical Setup

The site is built on Astro's blog starter template, deployed to GitHub Pages via GitHub Actions. On top of that foundation the site adds MDX, KaTeX for math rendering, dual-theme syntax highlighting, view transitions, and client-side search. Images are hosted on Cloudinary. Interactive components — p5.js sketches, Mafs charts, Strudel embeds — are loaded as Astro or React components inside MDX posts.

The design uses a lime green accent with warm neutral backgrounds, with the Syne Bold font for headings. Dark mode follows system preference but can be overridden with a toggle.

## The Editorial Challenge

The main challenge is discipline. A repo writeup should not become a README with more adjectives. It should explain the project in plain terms: what problem it explores, how it works, why the technical choices fit, and what comes next.

That discipline is harder than it sounds. The temptation is to write defensively — to explain every decision before it can be questioned, to hedge every claim, to make the post feel thorough by making it long. The better post is usually shorter and more direct.

## How It Fits the Larger Work

In the overall system, this blog is the reflective layer. Portfolio Deluxe gives a fast path into the work. The blog gives each project more room to breathe. Together, they let someone see both the artifact and the reasoning behind it.

That relationship is what makes writing about the work worthwhile. The code and the writing are not separate. Each one makes the other more useful.