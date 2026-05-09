---
title: "Launching the BakerLinks Platform"
description: "This new app allows users to create a link-in-bio profile"
pubDate: "2026-05-09"
repoUrl: "https://github.com/michael-baker-content/bakerlinks"
tags: ["nextjs", "vercel", "supabase", "react", "auth", "platform"]
featured: true
---

# I Built a Link-in-Bio Platform in a Few Weeks — Here's What I Learned

A few weeks ago I decided it was time to starting showing off some of the projects I've been working on. I didn't have a link-in-bio page and decided to get started making one.

As I began to explore the process, it dawned on me that I could scale this to allow other people to make their own pages as well. This presented a perfect opportunity to practice some of what I've learned recently about authenticating users and working with database content.

So I built my own. It's called [BakerLinks](https://bakerlinks.com).

---

## What It Does

BakerLinks lets you create a customizable profile page at `bakerlinks.com/username` that you can share as a single link anywhere — Instagram bio, Twitter, email signature, wherever. You add your links, customize the look, and optionally add an About page with markdown content.

The feature set I landed on:

- **Link management** — add, edit, reorder (drag or tap), show/hide
- **6 themes** — Electric, Neon, Earthy, Light, Pastel, and a fully custom theme with a color picker
- **2 layouts** — Card (background image at top, content below) and Immersive (full-screen background, frosted glass content panel)
- **About page** — optional second tab with markdown support, restricted rendering (no links or images)
- **Social icons** — 18 platforms, reorderable, positioned above or below links
- **Click analytics** — time-series charts and per-link bar charts
- **Auth** — email/password, Google OAuth, GitHub OAuth
- **Profile preview** — live preview panel in the dashboard while editing

---

## The Stack

I kept the stack boring in the best way:

- **Next.js 16** (App Router) with React 19 and TypeScript
- **Tailwind CSS** for styling
- **Supabase** for Postgres, auth, row-level security, and file storage
- **Vercel** for hosting
- **Resend** for transactional email
- **@dnd-kit** for drag-and-drop
- **recharts** for analytics charts
- **@uiw/react-md-editor** for the markdown editor
- **marked** for markdown parsing

Nothing exotic. The interesting challenges came from product decisions, not infrastructure choices.

---

## Interesting Technical Decisions

### Themes vs Layouts

Early on I had one concept — "themes" — that tried to do everything. Color, structure, typography all in one object. It got messy fast.

I eventually separated them into two orthogonal concerns:

- **Theme** — colors, typography, border styles
- **Layout** — structural arrangement of content

Any theme works with any layout. This made the code much cleaner and made the product more flexible. Adding a new layout doesn't touch the theme system and vice versa.

### The Custom Theme Problem

Built-in themes use Tailwind utility classes like `bg-[#0a0a0f]` and `text-white/50`. These work great at build time. Custom themes, where colors are chosen at runtime by users, can't use this approach — Tailwind only includes classes it finds at build time.

The solution was to generate a `ThemeConfig` object from user-chosen hex values and apply everything as inline styles when a custom theme is active. Every component checks for `theme.customColors` and falls back to inline styles if present. It's a bit verbose but it works correctly.

```tsx
const c = theme.customColors

<h1
  className={`font-display text-2xl font-bold ${c ? '' : theme.textHeading}`}
  style={c ? { color: c.textHeading } : {}}
>
```

### Markdown Rendering

The About page lets users write markdown, but I didn't want to let them embed arbitrary links or images — that would make it a vector for phishing and would undermine the purpose of the links tab. I used a custom `marked` renderer that strips links, images, and raw HTML:

```tsx
marked.use({
  renderer: {
    link() {
      return "";
    },
    image() {
      return "";
    },
    html() {
      return "";
    },
  },
});
```

The raw markdown is stored separately from the rendered HTML so the editor always shows the original source.

### Password Reset Token Handling

Supabase's password reset flow sends a token in the URL hash fragment — not a query parameter. Hash fragments don't go to the server, so you can't handle them in a Next.js route handler. The reset page has to handle it client-side:

```tsx
useEffect(() => {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = hashParams.get("access_token");
  const type = hashParams.get("type");

  if (accessToken && type === "recovery") {
    supabase.auth
      .setSession({
        access_token: accessToken,
        refresh_token: hashParams.get("refresh_token") ?? "",
      })
      .then(({ error }) => {
        if (error) setError(error.message);
        else setReady(true);
      });
  }
}, []);
```

This tripped me up for longer than I'd like to admit.

### Click Analytics

I track clicks two ways — a `clicks` integer on each link for quick totals, and a `link_click_events` table with timestamps for time-series charts. The events table has RLS policies that allow public inserts (so visitors don't need to be authenticated) but only the link owner can read their own events.

---

## What I'd Do Differently

**Start with the data model.** I added columns to the profiles table several times as features evolved — `layout`, `about_enabled`, `about_title`, `about_content`, `about_markdown`, `custom_theme`. Each migration was simple, but thinking more carefully upfront would have saved some refactoring.

**Design mobile first.** The dashboard was designed desktop-first and adapted to mobile afterward. Some interactions — like drag-to-reorder — don't translate well to touch screens. I added up/down buttons as a fallback, but building for touch first would have produced a better result.

**Separate the editor state earlier.** The dashboard originally had one big component managing all state. It grew to 800+ lines before I refactored it into smaller components. The refactor went smoothly, but it would have been cleaner to design the component boundaries upfront.

---

## What Surprised Me

**RLS is genuinely great.** Supabase's row-level security means I never have to write `WHERE user_id = auth.uid()` in application code — the database enforces it automatically. It makes it nearly impossible to accidentally expose one user's data to another.

**The custom theme was harder than expected.** The color picker itself was easy. Making all the colors actually apply correctly across every component in every layout took much longer. Hover states in particular — you can't do them with inline styles, so I ended up with a JavaScript-based hover state using `onMouseEnter`/`onMouseLeave` for custom theme elements.

**The landing page matters.** I spent a lot of time on the product and not much on the landing page. When I finally put real effort into it — three scroll-snap screens, animated gradient background, mini phone mockups showing the features — it started to feel like a real product rather than a side project.

---

## What's Next

- More layouts (Minimal, Split)
- Custom domains
- End-to-end tests with Playwright
- Link scheduling (show/hide links on a date range)

The codebase is at [github.com/michael-baker-content/bakerlinks](https://github.com/michael-baker-content/bakerlinks) and the live site is at [bakerlinks.com](https://bakerlinks.com). Happy to answer questions about any of the implementation details.
