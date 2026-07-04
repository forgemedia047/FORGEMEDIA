# Forgemedia — Landing Page (Next.js)

Production-ready marketing site: Next.js 14 (App Router) + React + TypeScript + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

Add a real `public/og-image.jpg` (1200×630) before deploying — referenced in `app/layout.tsx` metadata.

## Folder structure

```
forgemedia/
├─ app/
│  ├─ layout.tsx        # Fonts, global metadata (SEO/OG/Twitter), JSON-LD schema, page chrome
│  ├─ page.tsx           # Composes all sections in order
│  └─ globals.css        # Tailwind directives + the few effects Tailwind can't express (grain, grid mask)
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx       # Sticky nav, glass backdrop on scroll
│  │  ├─ Footer.tsx       # Sitemap + socials
│  │  └─ StickyCta.tsx    # Mobile-only sticky CTA bar
│  │
│  ├─ sections/           # One file per landing page section — see Sections Required in brief
│  │  ├─ Hero.tsx
│  │  ├─ SocialProof.tsx
│  │  ├─ Process.tsx
│  │  ├─ Services.tsx
│  │  ├─ WhyChooseUs.tsx
│  │  ├─ Results.tsx
│  │  ├─ Testimonials.tsx
│  │  ├─ Faq.tsx
│  │  └─ FinalCta.tsx
│  │
│  └─ ui/                 # Reusable primitives used across multiple sections
│     ├─ Reveal.tsx        # Scroll-triggered fade-up wrapper (Framer Motion whileInView)
│     ├─ MagneticButton.tsx# CTA button w/ magnetic cursor pull + glow
│     ├─ Counter.tsx       # Animated number counter (stats, metrics)
│     ├─ GlassCard.tsx     # Base glassmorphic surface, optional 3D tilt
│     ├─ Eyebrow.tsx       # Small uppercase kicker label
│     ├─ Spotlight.tsx     # Fixed cursor-follow radial glow layer
│     └─ icons.tsx         # Inline SVG icon set (no extra icon library needed)
│
├─ tailwind.config.ts     # Design tokens: colors, fonts, custom keyframes (floaty, marquee, gridDrift)
├─ postcss.config.js
├─ tsconfig.json
└─ package.json
```

## Why this architecture

- **One component = one job.** Every section is a self-contained file with its own copy/data array at
  the top, so editing headline copy or adding a testimonial never means hunting through a monolith.
- **`ui/` primitives carry the motion system.** `Reveal`, `MagneticButton`, `Counter`, and `GlassCard`
  encapsulate every animation pattern in the brief (fade-up, magnetic buttons, number counters, hover
  glow/tilt) once, so new sections reuse them instead of re-implementing animation logic.
- **Design tokens live in `tailwind.config.ts`**, not scattered inline hexes — changing the palette or
  fonts later is a one-file change.
- **Metadata and JSON-LD are centralized in `app/layout.tsx`**, following Next.js App Router conventions,
  so search engines and social platforms get consistent data on every route you add later.
- **Accessibility is built-in, not bolted on**: skip link, `aria-expanded` on the FAQ, focus-visible
  outlines, and a global `prefers-reduced-motion` override in `globals.css`.

## Extending

- Wire the CTA buttons (`MagneticButton href="#final-cta"`, the final CTA button) to your real booking
  tool (Calendly, Cal.com, HubSpot meetings) by swapping the `href` for the embed/booking URL, or replace
  the `<a>` in `MagneticButton` with a modal trigger.
- Replace the placeholder testimonial/result data at the top of `Testimonials.tsx` and `Results.tsx` with
  real client data as case studies come in.
- Add `/app/sitemap.ts` and `/app/robots.ts` (Next.js native SEO routes) before launch.
