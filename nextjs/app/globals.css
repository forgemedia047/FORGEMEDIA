@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ease: cubic-bezier(0.16, 0.84, 0.36, 1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #000000;
  color: #ffffff;
  font-family: var(--font-inter), sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-space-grotesk), sans-serif;
  letter-spacing: -0.02em;
}

::selection {
  background: #ffffff;
  color: #000000;
}

/* Scroll reveal base state — animated via Framer Motion whileInView in components,
   this class remains for any non-JS fallback / progressive enhancement */
.reveal-fallback {
  opacity: 1;
}

/* Grain overlay */
.grain {
  position: fixed;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  opacity: 0.035;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.hero-grid-bg {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, black 20%, transparent 75%);
  mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, black 20%, transparent 75%);
}

a:focus-visible,
button:focus-visible,
[role="button"]:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
