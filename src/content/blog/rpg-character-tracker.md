---
title: 'Building the RPG Character Tracker'
description: 'How I approached dynamic character management for Pathfinder 2E — and what dense tabletop rules taught me about interface design for complex state.'
pubDate: '2026-06-02'
tags: ['javascript', 'ttrpg', 'pathfinder-2e', 'interface-design']
---

RPG Character Tracker is a dynamic character-management tool for rules-heavy tabletop systems. It started from Pathfinder 2E, which gives the project a useful constraint: the rules are dense enough that a static sheet can become friction during play.

## The Problem With Static Character Sheets

Pathfinder 2E characters have a lot of numbers. Many of those numbers are derived from other numbers. A character's attack bonus depends on their proficiency rank, their ability score modifier, and any situational bonuses or penalties that apply. Their armor class depends on their armor, their dexterity, their training level, and a handful of other factors.

On a static sheet, you calculate those values once and write them down. During play, you look them up. That works until something changes — a spell adds a bonus, a condition imposes a penalty, a level-up improves a proficiency — and suddenly the numbers on the sheet are wrong.

A dynamic tracker can keep those relationships live. When something changes, the affected values update. That removes a category of errors and a category of mental overhead.

## The Design Challenge

The hard part is choosing the right amount of automation. Full rules coverage for Pathfinder 2E would be an enormous project. The rules fill several large books and include hundreds of special cases. Trying to model all of it would take longer than any session of play the tool might serve.

Too little automation and the tool does not justify itself over a paper sheet. The useful middle is identifying the moments where dynamic calculation removes real friction and stopping there.

The product should help the table, not become another rulebook to manage.

## Interface Design for Dense State

What this project taught me is that interface design for dense state is a distinct problem from interface design for simple state. When a lot of values are related and frequently referenced, the challenge is not just displaying them. It is organizing them so that the information a player needs is close at hand without making the full state feel overwhelming.

That pattern appears across a lot of products that are not games. Medical records, financial dashboards, logistics tools — anywhere that the underlying state is complex and the user needs to act on it quickly. The design questions are similar even when the domains are very different.

## What Is Next

The most useful next step is better organization around play-facing workflows rather than character-creation workflows. During a session, a player needs to quickly check their attack bonus, track hit points and conditions, and reference a few key abilities. That is a different interface than the one you use when you are building a character at the start of a campaign.