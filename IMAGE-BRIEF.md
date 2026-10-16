# Images that earn their place

The site should show what Michael makes, how he makes decisions, and the real-world interests behind the work. Use authentic screenshots and photographs. Keep the homepage's geometric animation as original artwork; it does not need a stock-photo replacement.

## Priority capture list

| Priority | Picture | What to show | Placement and crop |
| --- | --- | --- | --- |
| 1 | Sketchlet in use | An actual drawing in progress, with the prompt and drawing tools visible. Choose a lively, imperfect doodle that makes participation feel inviting. | Homepage and project index; 16:10, ideally at least 1600 × 1000. Keep the canvas central and labels legible. |
| 2 | Baker Parks interface | A real park detail screen showing how a visitor finds useful information. Include accessibility information if it exists in the current interface; don't stage unimplemented features. | Project case study; full-width desktop screenshot plus a separate mobile capture. Pair with the existing Bayview Park trail photo. |
| 3 | Michael's portrait | A natural, informal portrait near a window, at a workspace, or outdoors. A relaxed expression and an uncluttered setting. | About page; 4:5 portrait, ideally 1200 × 1500 or larger, with room around the head for cropping. |
| 4 | Sketchlet tool detail | Two or three actual strokes showing a meaningful difference between tools, or a short recording of a tool being refined. | Inside a process article. Preserve the real interface; annotate the specific behavior discussed. A still image should work without playback. |
| 5 | Mike's List review workflow | The review or enrichment interface where a human resolves an ambiguous event or artist record. | Case study about the limits of automation. Caption the decision that still needs a person. Use safe sample records if needed. |
| 6 | A process improvement | A small, honest before-and-after of a workflow: the old steps beside the simpler process, or an actual backend/admin screen. | Supporting article illustrating Michael's interest in making tasks easier. Describe the benefit; don't invent time savings. |

## What is already in the layout

- Baker Parks uses the existing Cloudinary image `Bayview_Park_005_vut9ha`. It provides real-world context; it does not demonstrate the interface by itself.
- Sketchlet and other projects with `placeholder-*` image IDs use labeled, code-generated graphic studies. They are explicitly placeholders, not fictional product screenshots.
- The About page has a labeled portrait placeholder, with no invented likeness.
- Article pages do not receive filler images just to occupy space. Add a picture where it explains or demonstrates something in the text.

## Replacing placeholders

Project images are set in `src/data/projects.ts`. Replace a project's `image` value with its real Cloudinary public ID. `ProjectMedia.astro` automatically renders real IDs; values beginning with `placeholder-` use the graphic treatment. The shared component supplies imagery for homepage selections, the project index, and project pages.

For a portrait, replace the `.portrait` placeholder in `src/pages/about.astro` with the selected image and a descriptive alt attribute. Preserve the layout's portrait crop on desktop and check the mobile crop separately.

Before choosing a screenshot, check that it reflects the current application and contains no account details or private records. Keep screenshots crisp, avoid decorative device frames that shrink the interface, and write a caption explaining what the reader should notice. Confirm photo attribution and reuse rights for any new material.

## Useful captions to develop

- Sketchlet: what the daily prompt asks, and which tool behavior the image demonstrates.
- Baker Parks: which visitor question the screen answers; identify the park in the accompanying photograph.
- Mike's List: why the selected record could not be resolved reliably by automation.
- Workflow comparison: which step was removed or simplified and how that changed the work.
