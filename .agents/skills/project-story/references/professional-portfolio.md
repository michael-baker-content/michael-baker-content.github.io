# Professional portfolio adapter

Destination: `https://michaelbaker.vercel.app/`; repository: `https://github.com/michael-baker-content/michael-portfolio`. Michael confirmed this was renamed from `portfolio-deluxe`. The inspected local checkout is `C:/Users/Michael/Documents/Apps/Portfolio`; its remote still used the older name. Verify revision freshness before applying changes; do not assume the rename proves the checkout is current.

These observations come from the local implementation and live homepage/BakerLinks case study inspected on 2026-11-07. Recheck instructions and implementation at use time.

## Content and presentation

- `src/data/projects.js`: structured project records drive cards and case studies. Inspect the specific record and sanitizer before writing a patch. Fields include summary, problem, outcome, role, timeline, collaborators, tools, decisions, sections, next steps and links; preserve unrelated data.
- `src/data/projectCapabilities.js`: capability group mappings are maintained in code, separately from dashboard content.
- `src/data/profile.js`: profile and homepage copy; change only when agreed.
- `src/lib/contentModel.js` and `src/lib/sanitizeContent.js`: normalization, saved/default merging and validation. Some incomplete or legacy fields can be restored from defaults.
- `src/pages/HomePage.jsx`: initially displays the first four listed projects, sorted by ascending `priority`. A `stage` value alone does not select the initial four. Discuss before/after order and displaced project when proposing promotion.
- `visibility: 'hidden'` excludes lists but leaves direct case-study routes accessible. It is not draft privacy. Stage proposals outside runtime content inputs.
- Case studies use `/projects/<slug>`; the index is `/case-studies`. Keep this site's slugs separate from the Astro site's slugs and IDs.

## Repository and dashboard reconciliation

Michael uses both editing routes. Production can load a saved JSON document from Vercel Blob through `/api/content`; local Vite normally uses repository defaults. Saved fields generally override defaults, subject to normalization. A code deployment alone may leave the visible copy unchanged.

Before preparing updates, inspect the repository defaults and current public presentation. Retrieve a current saved-content snapshot through the documented `npm run content:pull` read/export workflow when accessible, or use an existing dashboard JSON export. Do not reveal credentials or read private environment files for editorial discovery. If saved content is unavailable, mark reconciliation pending rather than claiming repository edits will update production.

Compare all three representations and record conflicts. Propose targeted repository changes and the corresponding saved-document field updates, based on the same approved copy; do not create independently maintained variants. Avoid overwriting the full saved document from stale defaults. Re-fetch before an authorized save to preserve intervening edits. Dashboard saves, repository deployment and editorial approval are distinct actions; obtain authorization covering publication before making live changes.

## Deliverables and checks

Editorial defaults confirmed by Michael: appeal to other builders, friends and colleagues, subject-matter peers, and potential freelance clients; employer appeal is secondary. Keep the existing structured case-study presentation. Adapt the emphasis within that structure to make the work interesting and understandable, without inventing commercial outcomes. The portfolio contact form can support a relevant invitation to get in touch; the Astro blog has no comments and should not invite an on-site discussion. Contact need not be the closing goal of every case study.

Focus on additions and decision points rather than making Codex collaboration the story. Codex handles much of the code; describe Michael's actual direction and choices without implying he wrote every line. For BakerLinks, the current direction is usefulness to people, not competition or market differentiation. Revise the current case study accordingly through a reviewable proposal while preserving earlier articles' historical perspective. Either a coordinated or separate editorial review is acceptable.

After the dev-blog update, use its approved narrative and evidence as input, then complete the portfolio interview before generating adapted copy. Select deliverables with Michael: case-study draft, project-card changes, evidence highlights, capability mappings, real screenshots/assets, blog links and homepage ordering proposal. Existing claims are material to discuss, not automatically endorsed testimony.

Prepare a `professional-portfolio/` section within the handoff, containing a review draft, targeted repository patch, and saved-content field change proposal when applicable. Identify destination repository, record slug, exact field names, snapshot/base revision, and before/after ordering. Include asset paths and real source files only. Keep everything staged pending review; a hidden project entry is not sufficient.

Run `npm test` and `npm run build` in the portfolio when changes are applied or staged for validation. Inspect the case study, card, initial homepage selection and expanded project list at wide/narrow widths. Check capability labels, evidence claims, links, assets and saved-content/default parity. Report unavailable checks honestly. Do not run API write tests against production or save the dashboard as part of validation.
