---
title: 'Building Portfolio Deluxe'
description: 'How I turned a forked portfolio starter into a content system with case studies, a filterable project index, a contact form, and a small admin dashboard.'
pubDate: '2026-06-02'
repoUrl: 'https://github.com/michael-baker-content/portfolio-deluxe'
liveUrl: 'https://michaelbaker.vercel.app'
tags: ['react', 'vite', 'tailwind', 'vercel', 'content-system']
---

Portfolio Deluxe started as a fork of a polished React and Tailwind portfolio starter. The original repo gave a strong starting shape: hero section, navigation, skills display, project cards, visual polish, and a contact path. That was enough to begin from, but not enough to explain the kind of work I am actually doing.

The development work has been turning that starter into something more personal and more durable.

## The Content System

The project now uses structured project data to drive the homepage, the filterable case-study index, and each individual project page. Each case study carries metadata: visibility, priority, category, status, tools, evidence, metrics, decisions, links, and narrative sections.

That structure lets the same project record appear in several different contexts without rewriting markup. A project can be shown on the homepage, filtered on the case studies page, opened at its own URL, hidden as a draft, or moved up and down the priority order. The content and the display are separated, which means updating the content does not require touching the layout.

## Going Live

Getting the site onto Vercel forced a useful pass over deployment details: Vite build output, SPA route fallbacks, environment variables, and the difference between local defaults and production configuration. The site now supports direct visits to routes like the case studies page, individual project pages, and the admin dashboard.

## The Admin Dashboard

The newest meaningful feature is the backend dashboard. The public app still has code defaults, but it can now load a saved content document from Vercel Blob at runtime. The admin route lets me edit homepage copy and case-study content in the browser, save through a Vercel Function, and keep the live site current without making every copy tweak a deployment.

That creates a useful tension. I want the dashboard to make editing easier, but I do not want to lose the discipline of versioned content. The current approach treats Vercel Blob as the live content source and the repo data as a fallback. The next challenge is deciding how often live edits should be pulled back into Git.

## The Contact Form

Instead of listing placeholder email addresses, the site now has a Formspree-backed contact form with context fields: the person's role, their general location, and whether they are interested in a particular case study. That turns contact into a product surface. A good contact form should not just transmit a message — it should help the conversation start in the right place.

## The Hardest Content Challenge

The biggest challenge has been separating three stories that kept overlapping: the story of the forked starter, the story of the visual theme experiments, and the story of me as a candidate. The 2.0 direction became clearer once those stories were allowed to live in different places. The homepage focuses on the candidate pitch. The Portfolio case study explains the transformation from starter to system.