---
title: "Building Cine2Helper to Find Connections Between Movies"
description: "I built a Next app that uses API data from TMDB."
pubDate: "2026-04-26"
repoUrl: "https://github.com/michael-baker-content/cine2helper"
tags: ["nextjs", "vercel", "api", "react", "movies", "tmdb"]
featured: false
---

## Overview

My journey to learn more about web development is progressing well. I've started to produce some websites that I think are cool enough to actually host and highlight on [my GitHub profile](https://github.com/michael-baker-content). This one is a companion app for a popular web game for movie lovers.

In [Cine2Nerdle Battle](https://www.cinenerdle2.app/battle), you compete with other players to make connections between movies and actors. In Battle 2.0, you can equip "kits" that affect the win conditions of the game. For example, if you are very familiar with the films of Emma Stone, you can equip an Emma Stone win condition. If you play the required number of Emma Stone films during a match, you win the game. Each season of Battle 2.0 involves a new set of win conditions that you can equip in your kit.

![Screenshot from Polygon of a Battle 2.0 match](https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/01/Screenshot-2025-01-28-152723.png)

The more I played Battle 2.0, the more I found myself wishing for a way to easily find connections between movies and actors that are involved in this season's winning conditions.

## Learning Next.js

I've recently been working through the front-end web development track on Scrimba.com, which includes coursework in React and Next.js. Now I'm at the stage putting together projects on Github to demonstrate what I've learned.

This is the first Next.js project that I've deployed, and also the first project I've deployed on Vercel. To make things a little easier on myself, I've utilized Claude.ai to work throught the deployment process. I've learned that a site that works fine locally does not necessarily work on the live web. I have ample experience in building sketches of websites and serving them on my local network, but deploying sites on the web involves many challenges that local development does not prepare you for.

Sometimes I think I am getting ahead of myself in working with Next when I still have a lot to learn about React, or that I should learn more JavaScript before I dive into React. That said, I've learned a lot from this project

## Working with TMDB

You're probably familiar with IMDb, the web's primary source for information about movies and television, but maybe not as familiar with [The Movie Database](https://www.themoviedb.org/) (TMDB). TMDB offers free access to their API for non-commercial use, while IMDb only provides such access commercially.

Another reason I chose to work with this API is that it is the API used by Cine2Nerdle. This ensures that film data I retrieve has the same categorization, keywords, and so on.

Of course, working with the API is not without its challenges. One of the main hurdles I faced was dealing with a win condition that involves Academy Award winning films. TMDB does not offer an API endpoint for awards data, so I had to use Wikipedia and other web resources to identify award-winning films.

## My Friend Claude

I don't have much experience using AI coding assistants, as I generally prefer to try to figure things out on my own. While it's possible that I could have created this site without using a coding companion, there is no doubt that using Claude made the process much faster. Knowing myself, I would have gotten stuck on some detail that might have derailed me for hours, days, or weeks.

Of course, ol' Claude is not without his quirks. Some of his design choices leave a bit to be desired, and he constantly loses track of big picture issues while working on smaller problems.

## Further Development

I can imagine a lot of ways to continue developing this site. The vast majority of movies and actors are nowhere to be found on Cine2Helper, as it is focused entirely on films and actors involved in this season's Battle 2.0 win conditions. It will not help you if you choose the "Random Genre" win condition, for example.

It also is not comprehensive. One of the win conditions this season is Service the Fans, which asks users to play films that have sequels, in sequence. To win, you might play _Lethal Weapon_, then _Bad Boys 2_, then _Cars 3_, then _Scream 4_, then _Scary Movie 5_. But _Cine2Nerdle_ also allows _Ocean's Thirteen_ as a third film in a series, and you can also play _Texasville_ as a sequel since it's the follow-up to _The Last Picture Show_. In other words, finding films that fulfill this particular challenge involves much more than just writing the perfect query.

## Building an Algorithm

The site as presently constructed takes some shortcuts in achieving its goals. I've assembled a library of JavaScript files for each of the season's win conditions; the site compares those files for overlap. The comparison logic is only as comprehensive as the files are. Compare that structure to a site like [Oracle of Bacon](https://oracleofbacon.org/), which you can use to find the shortest path between any two actors. To create something like that, you need a pretty sophisticated algorithm, and you need to invest in your database infrastructure. I've been researching adjacency lists, bipartite graphs, breadth-first search algorithms, graph database management systems like Neo4j, and many other things that beyond my current skill level.

## Conclusion

Despite all this, I'm pretty happy with the result I've come up with here. I have a working site that reliably works with API data, is responsive, and provides utility to its intended audience. I hope you'll give it a spin and let me know what you think. And if it sparks some interest, perhaps you might fork the repo and make something even better.
