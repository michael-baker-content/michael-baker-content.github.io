---
title: 'Building BakerLinks'
description: 'How I built a free link-in-bio platform focused on simple publishing, hosted data, and clean public profile pages — and why restraint is the interesting design challenge.'
pubDate: '2026-06-02'
tags: ['nextjs', 'supabase', 'publishing', 'product']
---

BakerLinks is a free link-in-bio platform. The category is familiar: a person creates a profile page and adds links they want to share. The interesting question is how simple that workflow can be without feeling disposable.

## Why This Project

Link-in-bio tools have become infrastructure for a lot of online publishing. They solve a real problem: social platforms often only let you share one URL, and a link-in-bio page is the standard workaround. The category is crowded, but most tools drift toward the same set of traps: paywalled features, heavy customization options that make the product feel overwhelming, and analytics dashboards that most users will never look at.

The interesting design constraint is making something that stays useful by staying simple.

## The Stack

The project uses Next.js for the app and public profile pages, Supabase for the hosted backend, Tailwind for interface styling, and Vercel for deployment. That combination keeps the operational weight low. Supabase handles the backend shape — authentication, database, storage — without requiring me to build every infrastructure piece from scratch. Vercel makes public deployment straightforward and keeps profile pages fast.

Next.js keeps the profile pages and the management interface in the same product system, which matters for consistency and for keeping the codebase maintainable as the product grows.

## The Restraint Problem

The most interesting design challenge is knowing what not to build.

Link-in-bio tools can easily drift into feature accumulation: custom themes, analytics, link scheduling, monetization options, team features, and premium tiers. Each individual feature might be useful to some users. Together, they turn a simple publishing tool into a product that requires onboarding.

BakerLinks is more useful if it keeps the first version focused: create a profile, add links, get a public page. That is the job. Adding features before that job is done well is a way to avoid the harder work of making the simple version excellent.

The free model reinforces this. If the promise is a free publishing tool, the basic usefulness cannot be hidden behind a paywall. That constraint helps keep the product priorities honest.

## What Connects This to the Larger Work

BakerLinks fits the larger portfolio because it is another publishing system. The recurring question across my projects is: how do you help someone turn scattered material into a public-facing structure that feels organized, useful, and theirs?

The portfolio answers that for professional work. The blog answers that for technical writing. BakerLinks answers that for the simple case: here are the things I want people to find.