---
title: 'Building Baker University'
description: 'A learning-platform experiment exploring course structure, rich lesson editing, and technical content support — and what online art education taught me about building for attention.'
pubDate: '2026-06-02'
tags: ['nextjs', 'tiptap', 'katex', 'learning-platform', 'typescript']
---

Baker University is a learning-platform experiment. It brings together my interest in online education, structured content, rich authoring, and modern frontend development. The core question is not just how to display lessons. The question is how to give learning material a usable shape.

## The Stack

The project is built with Next.js, React, TypeScript, Tailwind, Tiptap, and KaTeX. Those tools point to the product ambition.

Tiptap suggests richer lesson authoring than plain text or Markdown. KaTeX makes mathematical notation possible. Next.js and TypeScript provide a foundation that can grow toward course navigation, publishing, or learner progress tracking. The combination gives the project room to develop in several directions without committing too early to a single path.

## Structure and Expressiveness

Learning products need both structure and expressiveness, and those two requirements pull in different directions.

Too little structure and learners get lost. They do not know where they are, what comes next, or how to orient themselves in the material. Too much structure and the material becomes rigid. Lessons that should breathe feel like they are being forced through a template.

The authoring system has the same tension. It needs enough power to create rich lessons — embedding a formula, linking to an example, including an image — but not so much complexity that writing a lesson becomes its own obstacle. The right tool for lesson authoring disappears when it is working well.

## What Online Art Education Taught Me

My background in online art education makes this project especially personal. Teaching art online is harder than it sounds. A lot of what makes art instruction valuable is tacit: the ability to look at work in progress and explain what is working, what is not, and why. That kind of feedback is difficult to capture in text and harder still to scale.

But the structural problems are the same as any learning platform: how do you sequence material so that later lessons build on earlier ones? How do you make critique legible? How do you help a learner see what matters without doing the seeing for them?

Those questions are product design questions as much as they are pedagogical ones. The interface is not neutral. The way lessons are structured, navigated, and presented shapes what learners are able to do with the material.

## The Open Questions

The challenge for Baker University is deciding what kind of learning platform it wants to be. Better course navigation, better authoring tools, learner progress tracking, and public course publishing are all meaningful next steps. Each one implies a different product center.

For now, the value of the project is that it gives me a place to explore the relationship between content structure and interface design. Learning products are never just content. They are systems for attention.