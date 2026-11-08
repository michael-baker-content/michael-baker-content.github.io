---
title: 'A front door for what I’m building'
description: 'Reviewing my projects, simplifying the portfolio, and working out how case studies and development posts can support each other.'
pubDate: '2026-11-07'
repoUrl: 'https://github.com/michael-baker-content/michael-portfolio'
tags: ['content-system', 'interface-design', 'workflow']
featured: false
---

Updating [my portfolio](https://michaelbaker.xyz) became a fairly big process of looking through almost everything I’m building. Each project needed at least a little attention: what does it do now, what deserves priority, and how should I introduce it to someone who has never seen it?

The homepage now starts with “A collection of things I’m building.” That collection includes drawing games, a parks guide, publishing tools, dashboards, and hobby utilities. I enjoy learning about databases and APIs, building interfaces, and connecting those pieces into working applications. The portfolio needs to give that range a shape someone else can explore.

I also want it to have sensible priorities for a recruiter-facing site. I already have a job, but professional presentation still matters. Someone looking at my work should be able to understand my background in content, publishing, and web production, then see what I’m doing with that experience. Curious developers, potential collaborators, and people with freelance work should have a way in, too.

## Reviewing the collection

My [earlier portfolio post](/blog/portfolio-deluxe/) covered the move from a starter template to a site with structured case studies and editing tools. This pass involved looking more closely at the material those tools hold.

A project description can fall behind while the application keeps changing. Several of these projects have had another round of work, and the useful thing to show now may be different from what interested me when I first wrote about them.

BakerLinks is one example. The basic public page is still a place to share links, but my [recent post](/blog/returning-to-bakerlinks/) spends more time on the profile and style panels. Those are the interfaces I enjoy working on. With Bakerversity, the [authoring experience](/blog/returning-to-bakerversity/) has become a larger part of the story as I’ve worked with actual course material.

Looking across the projects meant deciding what deserved attention today, while leaving room for the earlier accounts of how they started.

## Fewer choices at the entrance

Project browsing now has three shared themes: Data and APIs, Design and interaction, and Content and publishing. We removed the crowded category dropdown and niche feature tags from the browsing interface while keeping detailed search.

That feels much better to me. The projects still have their individual subjects and technical details, but those details don’t all need to be navigation choices. Someone can start with a broad interest or search for a particular project, topic, or tool.

The galleries give the project pages another way to explain the work. They include individual screenshots and selected desktop/mobile comparisons in a slideshow, with arrows and thumbnails to move between views. The comparisons are deliberately paired images. For example, the Sketchlet drawing workspace shows tools beside the canvas on desktop and beneath it in the portrait layout.

Those images let me point to an interface decision more concretely. They show captured browser views; they don’t establish physical-device testing or tell me whether someone else finds the application easier to use.

## Two sites with different jobs

The difference between this Astro site and the portfolio is instructive. They cover related work, but their structures support different kinds of reading.

The portfolio organizes the current presentation of a project: its introduction, screenshots, decisions, and state. This blog gives me room to return to a project over time. An initial post and a later update can both be relevant without needing to become one continually rewritten account.

This Astro site already supports associating multiple posts with a project. The opportunity is to use those connections more deliberately as the work changes. A case study can orient someone, and a development post can spend time on a particular decision or an unresolved problem. The newer BakerLinks and Bakerversity posts are useful companions to their original accounts.

Creating more connections between the sites is still ongoing work. I need to keep checking which posts remain relevant and where a newer account would help. The portfolio review has given me reasons to revisit the writing as well as the applications.

## Keeping the front door current

The portfolio uses React, Vite, and Tailwind, with an owner editing dashboard and content stored in Vercel Blob. Saved dashboard content can override repository defaults. That means deploying a change to the code and updating the public copy require separate attention. A revised introduction in the repository is only part of the job if saved content still supplies an older version.

I bought michaelbaker.xyz through Vercel and assigned it to Production. Public links and the content-download script now use that address. It gives this collection a home while the projects and their descriptions continue to change.

Codex handles much of the implementation in our collaboration. My part includes reviewing the projects, deciding what deserves priority, and working through how to present them. This pass brought a lot of that editorial work together.

The open question is how to keep the portfolio and blog useful to each other as more projects receive updates. For now, the portfolio is the place to get oriented, and these posts are where I can take more time with the work behind it.
