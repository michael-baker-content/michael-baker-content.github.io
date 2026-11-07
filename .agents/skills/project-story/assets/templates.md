# Draft templates

For professional portfolio updates, read `../references/professional-portfolio.md` and interview before adapting the approved dev-blog story. Use this review outline, then map approved copy to actual record fields rather than inventing a new schema:

- Audience and capability this case study should demonstrate.
- Project card: concise summary, supported evidence highlights, capability labels, image/alt text and links.
- Case study: problem, Michael's role and AI's contribution, specific decisions and tradeoffs, evidence of current results, limits and next steps.
- Existing arguments: preserve / revise after confirmation, with proposed diff.
- Homepage: feature decision pending, before/after initial four and proposed ordering.
- Delivery: repository field changes, saved-document field changes, snapshot/base revision, assets and review status.

Select only the requested deliverables. Save each as its own draft file. Replace bracketed prompts, confirm the date, add verified optional `repoUrl`, and remove instructions before review. Never copy this whole template file into a content collection.

## Current project overview → project-overview.md

```markdown
[Describe the current product, intended users, and what they can actually do.]

[Explain a concrete decision through the behavior it enables. Distinguish public, owner-management, and administrator experiences where relevant.]

[Develop Michael's confirmed personal interest or contribution and AI's role if part of the agreed emphasis. Connect another project only if supported.]

[State a verified current limitation or direction if useful; keep historical details in linked articles.]
```

Prepare a targeted `src/data/projects.ts` patch separately. The overview field receives plain paragraphs, not this Markdown file; see the adapter for conversion and other required metadata.

## Initial development post → content/building-PROJECT.md

```markdown
---
title: 'Building PROJECT'
description: 'REPLACE with a concrete summary of the original development story.'
pubDate: '2026-11-07'
tags: []
featured: false
---

[Open with Michael's confirmed original motivation or a concrete moment. Establish the period covered.]

[Explain the user problem and one or two decisions from that period through what users could actually do then.]

[Describe Michael's confirmed contribution, AI's involvement, testing, and a specific challenge or discovery. Do not invent learning.]

[Close with the state at that time. Link the current project at /projects/SLUG/ and a later account at /blog/FOLLOW-UP-ID/ if available. Include the verified live URL as a body link.]
```

## Follow-up → content/returning-to-PROJECT.md

```markdown
---
title: 'Returning to PROJECT'
description: 'REPLACE with a concrete summary of the changes and their significance.'
pubDate: '2026-11-07'
tags: []
featured: false
---

[Open with the confirmed reason for returning or an observed change. Link /blog/ORIGINAL-ID/ rather than repeating its introduction.]

[Describe the earlier state and verified changes. Explain a decision through its product effect and remaining limits.]

[Develop the agreed personal thread: what Michael enjoyed, learned, directed or tested. Describe AI's role accurately and separate owner management from privileged administration.]

[Connect another project if confirmed and useful. End with a supported current direction, not a promised outcome. Link /projects/SLUG/ and the verified live product where useful.]
```
