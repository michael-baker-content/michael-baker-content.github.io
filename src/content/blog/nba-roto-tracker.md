---
title: "Building the NBA Roto Tracker: A Flask and API Experiment"
description: "How I built and deployed a Flask app that pulls live NBA data from a third party API, and what I learned along the way."
pubDate: "2025-01-10"
repoUrl: "https://github.com/michael-baker-content/nba-roto-tracker"
tags: ["python", "flask", "api", "railway", "backend"]
featured: false
---

## Overview

This project started as a simple question: could I build a useful sports data tool using a public API and deploy it with minimal friction? The answer turned out to be yes, though the path there involved a few unexpected detours.

## Choosing the Stack

Flask made sense as a lightweight framework for this kind of API-driven app. There's no need for a heavy full stack framework when your primary job is fetching data, transforming it, and serving it to a frontend.

## Working with the API

The trickiest part of the project was handling rate limits and understanding the shape of the data returned by the API. NBA statistics data is deeply nested and requires some careful parsing to get into a usable format.

```python
def get_player_stats(player_id):
    response = requests.get(
        f"{BASE_URL}/players/{player_id}/stats",
        headers={"Authorization": f"Bearer {API_KEY}"}
    )
    return response.json()
```

## Deploying to Railway

Railway turned out to be a genuinely pleasant deployment experience. Connecting a GitHub repo and getting a live URL took under ten minutes.

## What I Would Do Differently

In hindsight, adding a caching layer early would have saved some headaches with API rate limits during development.
