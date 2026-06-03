---
title: 'What I Am Building Now'
description: 'A tour through the projects I am developing, how they work, where they fit together, and the product challenges they are helping me explore.'
pubDate: '2026-06-02'
tags: ['projects', 'product', 'frontend', 'prototypes']
featured: true
---

I have been building a small ecosystem of web projects that are different on the surface, but connected underneath. Some are practical utilities. Some are publishing systems. Some are dashboards. Some are experiments in how to make complex information easier to understand.

The shared idea is this: I am interested in products that turn messy inputs into useful structure. A concert listing becomes a richer discovery workflow. A set of GitHub repos becomes a readable body of work. A learning idea becomes a course platform. A custom fantasy league becomes a dashboard instead of a spreadsheet.

Recently, the projects have also started to connect at the infrastructure level. Portfolio Deluxe is live on Vercel, the contact form is wired through Formspree, and the portfolio now has a small backend dashboard so I can edit core copy and case-study content without opening a code editor. That changes the portfolio from a static presentation layer into something closer to a working content product.

This post is a snapshot of what I am working on, how the pieces work, the newest features I have added, and the challenges that have made each project interesting.

## Portfolio Deluxe

Portfolio Deluxe is the hub for the rest of the work. It started as a fork of a polished React and Tailwind portfolio starter, but it has grown into something more specific: a candidate-focused portfolio with case studies, filters, project metadata, deployment-ready hosting, a direct contact form, and a small admin dashboard.

The interesting part is not just the visual redesign. The useful part is the content system underneath it. Project cards and case-study pages share structured data, which means the homepage, the filterable case-study index, and individual project pages can all stay in sync.

The newest feature is the backend dashboard. The public site can now load a saved content document from Vercel Blob at runtime. The admin route lets me edit homepage copy and case-study content in the browser and keep the live site current without making every copy tweak a code change.

## Bay Area Show Explorer

Bay Area Show Explorer is a local music discovery tool. At first glance, it is about concerts: who is playing, where they are playing, and what events are coming up. But the more interesting product problem is trust.

The app treats thin concert listings as the start of a review workflow instead of the final product. Records can be enriched, reviewed, and kept traceable back to sources. That creates a more careful discovery experience: automated where automation helps, but still honest about uncertainty.

## BakerLinks

BakerLinks is a free link-in-bio platform. The basic product category is familiar. The interesting question is how simple that workflow can be without feeling disposable.

The project uses Next.js, Vercel, and Supabase. That combination keeps the operational weight low while handling profiles and links without building every infrastructure piece from scratch. BakerLinks is more interesting when it stays focused on the first useful job: publish a clear public page quickly.

## Baker University

Baker University is a learning-platform experiment built in Next.js. It explores courses, lessons, rich text, math rendering, and editable learning content using Tiptap and KaTeX.

Learning products have a difficult balance to strike. They need structure, because learners need to understand where they are and what comes next. But they also need expressiveness, because lessons are not always simple blocks of text. The challenge is deciding what kind of learning platform this wants to be.

## This Blog

This blog exists because code repositories are not very good at explaining intent. A GitHub profile can show activity, languages, commits, and project names. But it rarely explains why something was built, what tradeoffs mattered, or what the project taught me. The blog adds that missing narrative layer.

In the overall system, the blog is the reflective layer. The portfolio gives a quick path into the work. The blog gives the work more room to breathe.

## Fantasy Basketball Dashboard

Fantasy Basketball Dashboard is a self-hosted dashboard for a custom fantasy sports competition built with Python, Flask, and Railway. The product pattern is broader than basketball: turn a competition that might live in spreadsheets and chat threads into a clear shared interface.

## The Larger Pattern

Looking across these projects, the pattern is clear to me now. I am building around a few recurring questions:

- How do you turn scattered information into useful structure?
- How do you make a prototype feel real enough to evaluate?
- How do you explain the decisions behind the work?
- How do you keep tools focused enough that they stay useful?
- How do you make content editable without losing control of the underlying system?

Portfolio Deluxe, Bay Area Show Explorer, BakerLinks, Baker University, the blog, and the smaller utilities all answer those questions from different angles. Together they are becoming more than a collection of repos. They are a practice: product thinking, frontend craft, writing, data structure, deployment, and content operations reinforcing each other.