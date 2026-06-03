---
title: 'Building Notion Archive Cleaner'
description: 'How I built a small utility for cleaning UUID-appended filenames from Notion exports — and what a narrow tool taught me about product thinking at small scale.'
pubDate: '2026-06-02'
tags: ['javascript', 'python', 'notion', 'utility', 'workflow']
---

Notion Archive Cleaner is a small utility for a small but real problem: Notion exports often include auto-appended UUIDs that make filenames harder to read.

When you export a Notion workspace, every page filename gets a UUID appended to it. A page called "Project Notes" becomes "Project Notes a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5.md". That is fine for Notion's internal purposes, but it makes the exported archive difficult to navigate, publish, or hand off to anyone else.

## Why This Is a Real Problem

Archive readability matters more than it might seem. People export Notion workspaces for several reasons: to keep a local backup, to migrate to a different tool, to publish content somewhere, or to hand a client their own material. In all of those cases, the file structure should not feel hostile.

A UUID appended to every filename is not a disaster, but it is persistent friction. Every time you open the archive, you have to read past the noise to get to the signal. Over a large workspace, that adds up.

## The Technical Approach

The project focuses on cleaning exported archive names by removing the appended UUIDs and making the resulting file structure more human-readable. The value is repeatability: instead of manually renaming files one by one, the utility turns a fragile cleanup job into a process that can be run reliably.

The challenge is caution. A file cleanup script needs to think about more than string manipulation. It needs to consider name collisions — what happens when two pages have the same title and the UUID was the only thing distinguishing them. It needs to handle nested folders and linked assets. It needs to be careful about paths that include special characters or whitespace.

## What Small Utilities Teach You

This project is a reminder that product thinking applies at small scale too. A tool can be simple and still need to respect the user's data. It can be narrow and still require careful design decisions about edge cases and failure modes.

Not every useful product needs to become a platform. Sometimes the right answer is a focused tool that removes one recurring annoyance. The value is not in the ambition of the scope. It is in the reliability of the execution within a narrow scope.

That is a useful constraint to practice with.