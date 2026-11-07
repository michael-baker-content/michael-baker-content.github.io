# Portable handoff

Create `portfolio-handoff/<project-slug>/` outside publishing inputs:

```text
HANDOFF.md
content/<post-id>.md        # or .mdx; final-ready frontmatter
project-overview.md        # prose destined for overview field
project-entry.patch        # targeted projects.ts change when portfolio accessible
assets/                    # actual required assets only
professional-portfolio/    # optional case-study draft, targeted patch and saved-field proposal
```

Omit unused deliverables. For existing-post revisions include replacement drafts with original destination paths and review diffs. Never transfer an entire stale projects.ts as its replacement.

Use this manifest:

```markdown
# PROJECT portfolio handoff
Status: draft — awaiting editorial and publication approval
Source repository / revision:
Portfolio repository / base revision (or unavailable):
Interview decisions: audience, emphasis, deliverables, personal testimony, AI role
Professional portfolio repository / base revision / saved snapshot:
Portfolio adaptation decisions: audience, deliverables, review sequence, homepage placement

## Destination map
| Package file | Intended portfolio destination | Action |
| --- | --- | --- |
| content/POST.md | src/content/blog/POST.md | add or replace |
| project-overview.md + project-entry.patch | src/data/projects.ts, entry SLUG | targeted edit |
| assets/FILE | src/assets/FILE or public/PATH | copy and verify references |

## Evidence
| Claim | Source path/commit/lines or user statement | Period | Fact / opinion / interpretation | Open question |
| --- | --- | --- | --- | --- |

## Review
Central thread and purpose of each piece:
Older-article changes and substantive approval needed:
Existing tags / proposed tags and reasons, per piece:
Related project slug and exact blog IDs:
Assets included / requested, alt text, captions, rights:
Unsupported claims omitted / questions remaining:
Professional case-study and card changes / existing arguments to preserve or change:
Homepage order before / proposed after / displaced project / decision pending:
Repository defaults versus saved content conflicts and reconciliation plan:

## Validation and publication
Checks run, results, isolated staging location and preview findings:
Checks not run and reasons:
Approval status and remaining steps:
```

At import, recheck current schema and original files, reconcile base-revision drift, and resolve questions. Review drafts and diffs with Michael before moving them into publishing inputs. After explicit authorization, apply changes once, build, inspect pages, and report results. Push/deployment requires authorization covering that action. After transfer, remove the source package or mark it transferred with destination revision; future edits belong in the portfolio.

For professional portfolio deliverables, specify `michael-portfolio` as a separate destination from the Astro dev blog. Use the professional adapter to reconcile repository defaults and saved dashboard data; do not treat the transferable draft as a third permanent content source.
