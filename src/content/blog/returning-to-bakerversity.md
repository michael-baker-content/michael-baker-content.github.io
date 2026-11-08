---
title: 'Returning to Bakerversity: building the authoring experience'
description: 'Using a technical course to develop responsive editing, presentation, and content-management workflows in my LMS prototype.'
pubDate: '2026-11-07'
repoUrl: 'https://github.com/michael-baker-content/bakerversity'
tags: ['nextjs', 'tiptap', 'content-system', 'workflow']
featured: true
---

I am updating several of my projects while I have the bandwidth. For [Bakerversity](/projects/bakerversity/), much of the work has happened in the administration interface, where I spend my time building and adapting a course.

[My earlier post](/blog/building-bakerversity/) explored the relationship between course structure and expressive lessons. Since then, the authoring tools have become a much larger part of the project. There is now a complete set of course pages, including quizzes and exams, to use those tools on.

## Material to work with

I worked with Gemini to establish the structure and focus of a localization-engineering course. The initial material was more advanced than an introductory class, so we worked backward: what would someone need to study before taking that course? We developed an outline for that earlier class and generated the material from it.

That gave me content to interpret and adapt while concentrating on presentation and workflow. I am an editor more than a writer, and a content manager more than an editor. Having worked in online education, I know how a course is structured. This project gives me a place to apply that experience to the tools used to build one.

Markdown provides a common format between the generated material and Bakerversity’s import tools, but this is not a cut-and-paste operation. The editor converts imported material into structured content. I still have to adapt the material and decide how to present it. Some recurring patterns also influenced the tools: I adapted callout styles to terms Gemini used in its templates.

## The interface where I spend my time

Responsive website design is one of my passions. It is unlikely that someone would author this kind of technical course on a phone, but the administration panel is the interface I use, and it has received much of the project’s development attention.

The range of lesson content adds variables for the design to accommodate. Code, formulas, images, and other components each bring their own presentation needs. I also enjoy having light and dark themes. Those choices matter throughout the editing interface and the reader’s view.

Mathematics is a good example of the interaction work involved. A formula needs to move gracefully between rendered notation, selection as an object, editable LaTeX text, and a menu with varied options. Getting those transitions to work gracefully is challenging. Supporting LaTeX means designing the interaction around it as well as rendering the result.

## Managing a course as it changes

The surrounding workflow has grown alongside the editor. Lessons, course pages, and assessments share a course sequence. A course asset library lets an author reuse files and images, with defaults for captions and alternative text that can be adjusted for each placement.

Drafts are separate from published content. Saved-draft lesson previews let an author inspect a lesson before publishing it, and revision history provides earlier versions to load for review. Recovery downloads preserve structured edits when needed. These are practical parts of managing material that is still changing.

Course authoring and platform administration have different boundaries. Instructors can create courses and edit their own. Administrators can work across courses and use additional site-wide tools. Enrollment belongs to the learner experience and does not grant editing permission.

Codex handles much of the code in our collaboration. My involvement centers on the product, editorial decisions, and using and testing the interfaces. Gemini’s contribution is separate: the course structure and source material I am adapting.

## What the prototype demonstrates today

All planned pages have content I consider satisfactory for this stage, including quizzes and exams. A signed-in user can work through the class and see course progress in their profile.

There is still a lot to do. I have checked whether the content generally makes sense and is formatted correctly while adapting it. I have not yet approached the whole class as a learner or shown it to anyone else. Those are different kinds of evidence, and I do not have them yet.

For now, I want someone exploring the course to focus on what the site can do. The content provides a working example of the platform, with adaptation and review still underway. Bakerversity remains in active development alongside my other projects.

[Explore Bakerversity](https://bakerversity.vercel.app) or see the [current project overview](/projects/bakerversity/).
