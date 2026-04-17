---
title: "Generative Art with p5.js: My First Experiments"
description: "Exploring creative coding through p5.js, from simple geometric patterns to animation and interactivity."
pubDate: "2025-02-03"
tags: ["javascript", "p5js", "creative-coding", "animation", "art"]
---

## Why Creative Coding

There is something uniquely satisfying about writing code whose output is visual and immediate. p5.js lowers the barrier to that experience significantly — you can have something moving on screen within minutes.

## Starting Simple

My first sketches were simple geometric patterns. Circles, grids, and noise fields. The Perlin noise functions built into p5.js are particularly useful for creating organic-feeling motion.

```javascript
function draw() {
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      let n = noise(x * 0.01, y * 0.01, frameCount * 0.005);
      let angle = n * TWO_PI * 2;
      stroke(255, 100);
      line(x, y, x + cos(angle) * 10, y + sin(angle) * 10);
    }
  }
}
```

## Adding Interactivity

One of p5.js's strengths is how easily you can tie visuals to mouse or keyboard input. Making sketches respond to the viewer changes them from animations into experiences.

## Next Steps

I want to explore combining p5.js with Strudel for audio-reactive visuals — having sound drive the parameters of a generative sketch is something I find genuinely exciting.
