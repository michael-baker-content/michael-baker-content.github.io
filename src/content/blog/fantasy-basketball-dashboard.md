---
title: 'Building the Fantasy Basketball Dashboard'
description: 'How I built a self-hosted dashboard for a custom fantasy sports competition using Python, Flask, and Railway — and what I learned about translating rules into data models.'
pubDate: '2026-06-02'
repoUrl: 'https://github.com/michael-baker-content/nba-roto-tracker'
liveUrl: 'https://nba-roto-tracker.up.railway.app'
tags: ['python', 'flask', 'railway', 'dashboard', 'api']
---

Fantasy Basketball Dashboard is a self-hosted app for a custom fantasy sports competition. The domain is basketball, but the product pattern is broader: take a competition that might otherwise live in spreadsheets and chat threads, then make its state visible and inspectable.

## Why Build This

Custom fantasy leagues have a coordination problem. The standings exist somewhere, the rosters exist somewhere else, and the scoring logic lives in someone's head or a shared document that is always slightly out of date. The goal was to give the league a single source of truth: a dashboard where anyone could check the state of the competition at any time without asking someone else to run the numbers.

## How It Works

The project uses Python, Flask, a database layer that runs locally with SQLite and in production with PostgreSQL on Railway. The main product surfaces are leaderboard views, roster and participant pages, and the scoring logic that ties them together.

The database has to translate league concepts into durable records: teams, players, rosters, categories, standings, and update timing. That translation is where most of the interesting work happens. Fantasy sports formats have a lot of edge cases, and if those cases are not modeled clearly from the start, the dashboard becomes just another place to argue about the numbers rather than resolve them.

## The Technical Approach

Flask made sense as a lightweight framework. The primary job is fetching data, transforming it against the league rules, and serving the result — there is no need for a heavier full-stack framework when the data flow is that directional.

Railway was a genuinely smooth deployment experience. Connecting the GitHub repo, setting the environment variables, and getting a live URL was a quick process. The platform handles the operational details that would otherwise take time away from the actual product work.

## The Interesting Challenge

The challenge is translating rules into a product. That sounds straightforward, but custom fantasy formats often have informal rules that made perfect sense in conversation and become surprisingly difficult to model in a database schema.

The discipline the project enforced was this: if a rule cannot be expressed clearly enough to write a query against it, it is not clear enough to be a rule. That feedback loop between the data model and the league rules made both better.

The dashboard is not only a display layer. It is part of the league's operating system. When the standings are in the app, the app becomes the authority. That raises the stakes for accuracy in a useful way.

## What I Would Do Differently

Adding a caching layer early would have saved some friction with API rate limits during development. I also underestimated how much time goes into edge-case handling once real data starts flowing — the first few weeks of a season surface a lot of situations the schema did not anticipate.

## What Is Next

The next meaningful improvement would be a scoring audit trail: a way to see not just the current standings but how they changed after each scoring update. That would make the dashboard more trustworthy and more interesting to use throughout the season.

Fantasy Basketball Dashboard is a self-hosted app for a custom fantasy sports competition. The domain is basketball, but the product pattern is broader: take a competition that might otherwise live in spreadsheets and chat threads, then make its state visible.

The app is about clarity. Who is ahead? Why? What roster details explain the leaderboard? What data supports the standings?

## How It Works

The project uses Python, Flask, a database layer that can run locally with SQLite, and PostgreSQL in production on Railway.

The main product surfaces are leaderboard views, roster or participant pages, and scoring logic. The database has to translate league concepts into durable records: teams, players, rosters, categories, standings, and update timing.

## Interesting Challenge

The interesting challenge is translating rules into a product.

Custom fantasy formats often have edge cases. If the rules are not modeled clearly, the dashboard becomes just another place to argue about the numbers. The app needs to make the state inspectable enough that people can trust what they are seeing.

That means the dashboard is not only a display layer. It is part of the league's operating system.

## How It Fits The Larger Project

This case study expands the portfolio beyond frontend presentation. It shows backend modeling, deployment, data transformation, and dashboard thinking.

It also fits the larger theme of the portfolio: make complex state easier to understand at the moment someone needs it.

## Questions To Confirm

- What exact fantasy format and scoring rules does the app support?
- Does the app currently pull from `nba-api` live, periodically, or through manual updates?
- Which leaderboard or roster screenshot best explains the product?
