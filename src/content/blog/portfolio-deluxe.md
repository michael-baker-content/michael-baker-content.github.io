---
title: 'Building Portfolio Deluxe'
description: 'How I turned a forked portfolio starter into a content system with case studies, a filterable project index, a contact form, and a small admin dashboard.'
pubDate: '2026-06-08'
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

Portfolio Deluxe started as a fork of `machadop1407/beautiful-react-tailwind-portfolio`, but the useful development work has been turning that starter into something more personal and more durable.

The original repo gave me a strong 1.0 shape: hero, navigation, skills, project cards, visual polish, and a contact path. That was enough to begin from, but not enough to explain the kind of work I am actually doing now. I needed the site to become less of a static portfolio page and more of a living system for presenting projects as evidence.

## How It Works

The project now uses structured project data to drive the homepage, the filterable case-study index, and each individual project page. Each case study carries metadata such as visibility, priority, category, status, tools, evidence, metrics, decisions, links, and narrative sections.

That structure lets the same project record appear in several different contexts without rewriting markup. A project can be shown on the homepage, filtered on `/case-studies`, opened at `/projects/:slug`, hidden as a draft, or moved up and down the priority order.

The newer backend layer adds a protected admin dashboard. The public app can load saved content from Vercel Blob, while the code still keeps safe defaults. That makes the portfolio editable without giving up the stability of versioned source content.

## Interesting Challenge

The biggest challenge has been separating three stories that kept overlapping:

- The story of the forked portfolio starter.
- The story of the visual theme experiments.
- The story of me as a candidate.

The 2.0 direction became clearer once those stories were allowed to live in different places. The homepage can focus on my candidate pitch. The Portfolio case study can explain the transformation from 1.0 starter to 2.0 system. The Taste page can speak more directly about judgment, content, and experience.

## What This Adds To The Larger Project

Portfolio Deluxe is the hub. It holds the case studies, points to the other apps, and gives the work a structure that can grow. It also demonstrates the same skills the portfolio claims: content modeling, frontend craft, deployment, admin workflows, and practical product judgment.

## Questions To Confirm

- Which screenshots should represent the original fork, the theme experiment, and the current 2.0 version?
- Should the Portfolio case study include a public comparison table of 1.0 versus 2.0 features?
- How much should the post name Codex as a collaborator versus keeping the emphasis on the product decisions?

One of the easiest ways for a portfolio to get boring is for the copy to keep proving the same point in the same way.

That was starting to happen in Portfolio Deluxe. The site had a strong underlying argument: my background is in content production, my current case studies show growing technical range, and the bridge between those two things is the real story. But because that argument mattered, it kept reappearing everywhere.

The result was not wrong. It was just too repetitive.

## The Main Redundancy

The biggest repeated idea was the professional-background bridge:

- 15+ years in content production.
- Work across agency, tech media, enterprise technology, and online education contexts.
- Experience with CMS/DAM publishing, localization, accessibility, QA, and review workflows.
- Current projects as public proof of technical growth.

All of that is important. But the homepage, candidate snapshot, Taste page, signal cards, capability cards, and footer were all circling the same pitch.

The fix was to let each area do a different job.

The homepage now introduces the bridge quickly. The candidate snapshot gives more concrete employer-type context. The Taste page carries the fuller persuasive argument. The capability cards turn the claim into evidence. That gives the reader forward motion instead of making them feel like they are rereading the same paragraph in different clothes.

## The "As A Case Study" Problem

The case-study pages had another pattern: too many sections ended by announcing what the case study proves.

That language is useful while drafting because it reminds me why the project belongs in the portfolio. But it can start to feel like scaffolding left on the building.

Phrases like this showed up too often:

- "As a case study, this shows..."
- "Why it matters..."
- "This demonstrates..."

The issue is not that those phrases are forbidden. The issue is that they describe the purpose of the writing instead of doing the writing.

So I replaced repeated "Why It Matters" headings with more specific section titles:

- `Editorial Use`
- `Learning System`
- `Small Platform`
- `Readable Work`
- `Operational Clarity`
- `Focused Scope`
- `Usable State`
- `Careful Utility`

Those headings tell the reader what is actually interesting about each project.

## Repeated Abstractions

Another thing I corrected was repeated abstraction. Words like "product," "content," "workflow," "technical," and "portfolio" were doing a lot of work across the site.

Those are not bad words. They are accurate. But when they appear too often, they stop feeling specific.

The edit was not to remove them completely. The goal was to replace repeated abstractions with concrete jobs:

- Instead of saying "product thinking" everywhere, name the actual problem: publishing flow, review queue, leaderboard state, or archive cleanup.
- Instead of saying "content system" repeatedly, explain the system: CMS/DAM publishing, source-of-truth decks, structured project records, admin editing.
- Instead of saying "technical growth" everywhere, show the artifacts: React dashboards, filters, forms, admin workflows, deployment.

Specificity makes the work feel more credible.

## The Portfolio Voice Problem

The homepage and Taste page also needed different voices.

The homepage should be polished and efficient. It should orient the reader and move them toward the work.

The Taste page can be more direct. It is where I can speak more plainly about the unusual combination I am trying to sell: seasoned content judgment, enterprise production habits, online education experience, and fast-growing frontend skill.

That distinction helped reduce repetition because the homepage no longer had to say everything. It just had to set up the path.

## What I Learned From The Pass

The best edit was not cutting for brevity alone. It was assigning each piece of copy a clearer job.

The homepage introduces.

The Taste page argues.

The capability cards provide evidence.

The case-study cards invite.

The project pages explain.

The blog posts can reflect.

Once those jobs are separate, the copy has less reason to repeat itself.

That is the larger lesson for this portfolio: structure is not only a design or code problem. It is an editorial problem. The reader should not have to work through the same claim five times to understand what I am offering.

Good content earns attention by moving.
