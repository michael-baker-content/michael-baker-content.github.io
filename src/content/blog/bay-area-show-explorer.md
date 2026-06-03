---
title: 'Building Show Explorer'
description: 'How I turned thin concert listings into a reviewable music discovery workflow — and what I learned about trust, ambiguity, and data quality along the way.'
pubDate: '2026-06-02'
repoUrl: 'https://github.com/michael-baker-content/bay-area-music-calendar'
# liveUrl: 'https://sfcalendar.netlify.app'
tags: ['javascript', 'music', 'entertainment', 'data-quality']
---

Bay Area Show Explorer started from a familiar local-discovery problem: concert listings are useful, but they are thin. They tell you what is happening, but they often do not explain who the artist is, whether they are local, where to support them, or how trustworthy the imported data is.

The project became more interesting when I stopped thinking of it as only a calendar and started thinking of it as a review workflow.

## The Core Problem With Concert Data

Local music listings come from a lot of different sources. Venues post their own calendars. Aggregators scrape or import from ticketing platforms. Individual artists publish on social media. Each source has its own format, its own level of completeness, and its own definition of what counts as accurate.

When you combine those sources, you get a mix of confirmed, plausible, and wrong information sitting side by side with no indication of which is which. A useful discovery tool needs to be honest about that situation rather than papering over it with confident-looking display.

## Treating Listings as Leads

The app separates artists, venues, and events into different data concerns. A show listing can point to an event, but artist and venue records can carry richer context: source links, enrichment notes, and review states.

That separation matters because it lets the app treat imported listings as leads rather than finished truth. A record can be imported, flagged for review, enriched with additional context, and marked as confirmed — or marked as uncertain and kept in a review queue without polluting the rest of the experience.

## The Ambiguity Problem

The hardest challenge has been ambiguity. Artist names collide. A name that seems specific turns out to be shared by three different acts in three different cities. Venue data can be incomplete or inconsistent across sources. Search results can look plausible and still be wrong.

The app has to make room for unresolved matches. A good data product does not only add more information. It also explains what is known, what is guessed, and what still needs judgment. That is a harder design problem than it sounds, because the natural impulse in a product interface is to resolve uncertainty by picking an answer, even when the right answer is to leave the question open.

## What I Learned

The bigger lesson from this project is that useful data products are not just about aggregation. They are about surfacing the quality of what you have aggregated. Showing a concert listing without showing how confident you are in the listing is a different product than one that makes that confidence visible.

That is the more interesting product direction: not just more events, but a clearer map of what you know and what you are still figuring out.