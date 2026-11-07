---
name: project-story
description: Interview Michael Baker and develop evidence-based dev-blog stories, project overviews, portfolio case studies, and homepage update proposals, including portable draft handoffs.
---

# Project story

Read [portfolio conventions](references/portfolio.md) before drafting and recheck the destination schema when accessible. Use [templates](assets/templates.md) for the selected deliverables and the [handoff format](references/handoff.md) for review.

There are two destinations: the Astro dev blog and the professional portfolio at `https://michaelbaker.vercel.app/`. After the dev-blog project entry and articles are updated, continue with portfolio adaptation when requested. Read the [professional portfolio adapter](references/professional-portfolio.md) for that phase.

## 1. Discover

Before interviewing, read contributor instructions, the project entry, related articles, source project documentation, relevant implementation, and available change history. Report inaccessible sources rather than guessing. Establish implemented behavior, user roles, and the time period; documentation alone does not prove a feature shipped.

Keep an evidence ledger: claim, source path/commit/lines, period, and confidence. Separate verified facts, Michael's stated experiences/opinions, and interpretations needing confirmation. Flag contradictions. Never infer motivations, lessons, outcomes, usage, or uniqueness from features.

## 2. Interview

Michael prefers a substantial interview before content generation. Summarize known context, then ask focused questions in manageable rounds, following up on useful answers. Do not limit the interview to a few questions just to start drafting sooner. Skip answers already available; ask about changed views rather than requiring repeated background. Resolve the intended audience, narrative, personal contribution and deliverables before drafting prose, then briefly restate the agreed direction.

- What should the story emphasize, and who should it help or interest?
- Which deliverables: current overview, initial post, follow-up, or light historical edits?
- What did you enjoy, find difficult, or learn? Which specific moment illustrates it?
- What did AI do, and what did you direct, decide, implement, or test?
- What changed since the earlier post? Does this connect to another project or recurring interest?
- What should the professional case study demonstrate about you to an employer or client? How should its emphasis differ from the development story?
- Does the existing case study still reflect your views? Which arguments should remain, become secondary, or change? Confirm substantive changes before drafting them.
- Should this update include the case study, project card, capability labels, evidence highlights, screenshots, and links? Which pieces actually need changes?
- Should the updated project be featured on the homepage? If so, where should it sit, and what should move out of the initial selection? Offer a recommendation for discussion, not an automatic promotion.
- Should dev-blog and portfolio content receive separate reviews, or one coordinated review? Confirm the review sequence rather than assuming it.

Skip answered questions. Wait for missing personal testimony before writing it in first person; without answers, prepare an outline and open questions.

Michael uses both repository files and the portfolio dashboard. Do not ask him to select one as though they were mutually exclusive. Inspect repository defaults, saved content and live presentation; ask about conflicts and the intended update path when necessary.

Standing audience preferences: write for other builders, friends and colleagues, people who share the project's subject matter, and potential freelance opportunities. Michael is employed; attracting employers is secondary to appealing to an interested audience. Do not repeat these audience questions unless the particular assignment suggests a change. The Astro blog has no comments: do not frame its closing around starting an on-site discussion. Prefer relevant app, project and article links. The professional portfolio has a contact form, so an invitation to contact can be appropriate there. Michael likes its current structured case studies; retain the challenge/decisions/current state/next steps presentation rather than replacing it with an unstructured personal essay.

Michael describes development as a collaboration with Codex, which handles the heavy lifting in code. He stays connected through participation and decisions even when he does not read every line. Some decisions matter strongly to him; others do not. Default editorial emphasis is project additions and decision points, not the collaboration itself. Explain AI's role accurately when relevant without forcing it into every piece or attributing all implementation to Michael. Ask which decisions he cared about and why rather than assuming he personally chose every technical detail.

Operational preference: Michael prefers running terminal commands himself and limiting Codex integrations with third-party sites. During this workflow, supply commands with their purpose and have him run them by default; use available read-only file inspection for discovery. Do not independently run terminal commands or third-party integrations unless the session explicitly authorizes that action. When checks are user-run, report their results only when supplied, otherwise mark them pending. Draft files and reviewable local patches remain appropriate within the requested scope.

Michael has no strong preference for separate versus coordinated editorial reviews. Choose a practical sequence and explain it; do not repeatedly ask him to select a review format. Continue to require publication authorization.

Updated BakerLinks direction: focus on making a useful site that people want to use and benefit from. Competition and differentiation are not the central concern. This supersedes the older market-focused case-study emphasis and the precedent's emphasis on AI collaboration. His enjoyment of backend work remains known testimony, but use it only where it supports the current story. Propose substantive revisions as a reviewable draft; do not portray this newer view as his original historical position.

For BakerLinks assignments, read the [current interview brief](references/bakerlinks-brief.md) before asking follow-up questions. Its testimony may supersede claims in older copy; verify implementation separately.

BakerLinks precedent: Michael chose building and maintaining a real app with AI assistance as the emphasis. He said backend development is his favorite part, especially feature-rich profile panels and administrative experiences, connecting several projects. This is testimony, not evidence of particular shipped features or a mandatory theme for every story. Its deliverables were a current overview, companion return-to-project post, light edits preserving the original's history, and suggested tags for each.

## 3. Develop the narrative

Choose a coherent central thread grounded in evidence and answers. Write in Michael's first-person voice, using concrete, straightforward language. Connect technical decisions to product behavior and user experience. Distinguish owner-facing management from administrator-only tools. Describe AI's actual contribution alongside Michael's direction, decisions, and testing.

Keep pieces complementary: overview = current product; initial post = original period and decisions; follow-up = what changed and why returning mattered. Link rather than repeat. Avoid generic promotion and feature lists disguised as personal stories.

The professional case study adapts approved facts and testimony to the agreed audience: problem, contribution, decisions, evidence, current limits and direction. It is not a copy of the blog post. Project cards and homepage highlights summarize that same supported account. Never infer a quantified result or strategic lesson merely because a case-study field invites one.

Remove duplicated passages and unfinished notes in proposed edits. Preserve original chronology and dates; label later additions explicitly. Ask before substantively changing an existing article's argument or voice. Prepare reviewable replacements or diffs rather than overwriting published articles during drafting.

## 4. Produce draft files

Generate actual Markdown/MDX files using the adapter and templates, with final destination paths, filenames, frontmatter, tags, and links. Project overviews here require Markdown prose plus a targeted TypeScript entry patch, because projects are not a Markdown collection. Preserve unrelated metadata.

Stage drafts outside publication inputs. Use existing tags when appropriate; explain proposed new tags. Identify useful supporting screenshots/assets and their purpose, but never invent them or their URLs. For work in another repository, create one transferable handoff package. The portfolio remains the publication source of truth; the source package is temporary, not a second maintained content collection.

## 5. Validate and review

- Facts: claims trace to evidence; opinions and interpretations are distinguished; unsupported claims excluded or flagged.
- Voice: concrete first person, accurate AI role, owner/admin distinction, no invented learning or uniqueness.
- Frontmatter: correct schema, date/boolean types, confirmed date, intentional tags and stable IDs.
- Links: exact related blog IDs and project slugs; destinations exist; external links checked when accessible.
- Assets: real files/IDs, valid paths, alt text/captions, rights/credits and sensitive information reviewed.
- Editorial: complementary pieces, no duplicates or drafting notes, consistent historical context; substantive changes approved.
- Validation: build staged content in an isolated portfolio copy, then inspect rendered pages, metadata, links and assets. Report exactly what was checked and limitations. A build of the unchanged portfolio does not validate outside drafts.

Present drafts and older-article diffs with changed files, tag suggestions, evidence gaps, assets needed, check results, and remaining publication steps. Keep drafts staged until Michael explicitly authorizes publication. Drafting authorization does not authorize moving files into publishing inputs, pushing to main, or deploying.
