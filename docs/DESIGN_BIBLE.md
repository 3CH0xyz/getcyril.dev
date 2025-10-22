# getcyril.dev Design Bible

**Version:** 1.0
**Last Updated:** 2025-10-22
**Status:** Production ✅
**Live Site:** https://getcyrildev.vercel.app

---

## 🎨 Design Philosophy

**Core Aesthetic:** Professional, sophisticated AI/developer tool with Anthropic/Claude inspiration

**Visual Identity:**
- Dark-mode first (pure black #000000 background)
- Subtle, refined glass morphism (frosted glass effects)
- Glass-Bottom-Boat Effect (looking through frosted glass at undulating orbs)
- Orange accent color (#d97757) replacing previous teal
- Minimalist, content-focused layout

**Emotional Tone:**
- Professional but not corporate
- Technical but approachable
- Sophisticated but not pretentious
- Calm and focused (not energetic/playful)

---

## 🎨 Color System

### Primary Colors

```css
/* Dark Mode Background System */
--dark-bg: #0f0f0f;        /* Main background */
--dark-surface: #1a1a1a;    /* Elevated surfaces */
--dark-border: #2a2a2a;     /* Borders and dividers */

/* Pure black for absolute background */
background: #000000;
```

### Brand Colors

```css
/* Primary: Orange (Cyril Brand) */
--cyril-orange: #d97757;      /* Primary brand color */
--cyril-orange-light: #e08862; /* Hover states */
--cyril-orange-dark: #c86847;  /* Pressed states */

/* Legacy teal removed - orange is now the sole primary */
```

### Text Colors

```css
--dark-text: #f5f5f5;           /* Primary text (95% white) */
--dark-text-secondary: #d0d0d0; /* Secondary text (82% white) */
--dark-text-muted: #a0a0a0;     /* Muted text (63% white) */
```

### Agent Colors (Preserved from original system)

```css
--agent-architect: #8B5CF6;    /* Purple */
--agent-researcher: #F59E0B;   /* Amber */
--agent-implementer: #14B8A6;  /* Teal */
--agent-reviewer: #0EA5E9;     /* Sky Blue */
--agent-tester: #84CC16;       /* Lime */
--agent-debugger: #FB923C;     /* Orange */
--agent-deployer: #10B981;     /* Emerald */
--agent-documenter: #6366F1;   /* Indigo */
```

### Semantic Colors

```css
--success: #10B981;  /* Emerald green */
--warning: #F59E0B;  /* Amber */
--error: #EF4444;    /* Red */
--info: #3B82F6;     /* Blue */
```

### Terminal Chrome (macOS style)

```css
--terminal-red: #ff5f57;
--terminal-yellow: #ffbd2e;
--terminal-green: #28ca42;
```

### Glass-Bottom-Boat Orb Colors

**Subtle desaturated tints for background orbs:**

```css
/* These create depth without being distracting */
--orb-orange: rgba(85, 70, 65, 0.45);   /* Warm tint */
--orb-purple: rgba(70, 65, 85, 0.4);    /* Cool tint */
--orb-teal: rgba(50, 75, 75, 0.45);     /* Cool tint */
--orb-amber: rgba(80, 72, 60, 0.4);     /* Warm tint */
--orb-emerald: rgba(52, 75, 70, 0.45);  /* Cool tint */
--orb-indigo: rgba(65, 68, 85, 0.4);    /* Cool tint */
--orb-blue: rgba(55, 70, 80, 0.35);     /* Cool tint */
--orb-lime: rgba(65, 75, 60, 0.4);      /* Warm tint */
--orb-warm: rgba(75, 68, 65, 0.3);      /* Warm tint */
```

**Color Discovery Spectrum:**
```
Too Colorful          Just Right          Too Gray
rgb(217,119,87)  →   rgb(85,70,65)   →   rgb(45,55,65)
Opacity: 70%          Opacity: 45%         Opacity: 25%
```

---

## 📐 Typography

### Font Stacks

```css
/* Sans Serif (UI, body text) */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;

/* Monospace (code, technical content) */
font-family: "Fira Code", "JetBrains Mono", "SF Mono", Monaco,
             "Cascadia Code", Consolas, "Courier New", monospace;
```

### Type Scale (1.25 ratio)

```css
font-size: 0.64rem;  /* 10px - xs */
font-size: 0.8rem;   /* 13px - sm */
font-size: 1rem;     /* 16px - base */
font-size: 1.25rem;  /* 20px - md */
font-size: 1.563rem; /* 25px - lg */
font-size: 1.953rem; /* 31px - xl */
font-size: 2.441rem; /* 39px - 2xl */
font-size: 3.052rem; /* 49px - 3xl */
font-size: 3.815rem; /* 61px - 4xl */
```

### Line Heights

```css
line-height: 1.1;  /* 4xl headings */
line-height: 1.2;  /* 2xl-3xl headings */
line-height: 1.3;  /* xl headings */
line-height: 1.4;  /* lg headings, xs labels */
line-height: 1.5;  /* md headings, sm text */
line-height: 1.6;  /* base body text (optimal readability) */
```

---

## 🌌 Glass-Bottom-Boat Effect

**See also:** `GLASS_BOTTOM_BOAT_PATTERN.md` for complete technical implementation

### Visual Description

Creates the impression of looking through thick frosted glass at colorful, undulating shapes beneath dark water.

### Implementation

**Background Orbs (z-index: -10):**
- 9 large gradient orbs (700-950px diameter)
- Subtle desaturated color tints (rgb 50-85 range)
- Slow floating animations (12-20s duration)
- 32-40px blur (blur-2xl, blur-3xl)

**Page Overlay (z-index: 0):**
```css
backdrop-filter: blur(40px) saturate(150%);
-webkit-backdrop-filter: blur(40px) saturate(150%);
```

**Card Glassmorphism:**
```css
background: rgba(255, 255, 255, 0.10);
border: 1px solid rgba(255, 255, 255, 0.10);
backdrop-filter: blur(24px);
-webkit-backdrop-filter: blur(24px);
```

**Hover State:**
```css
background: rgba(255, 255, 255, 0.15);
```

### Animation Speeds

```css
animation: floatSlow 15s ease-in-out infinite;
animation: floatSlower 18s ease-in-out infinite;
animation: float 12s ease-in-out infinite;
animation: drift 20s ease-in-out infinite;
```

**Staggered delays:** 0s, 2s, 3s, 4s, 5s, 7s, 8s

---

## 📏 Spacing System

**Base unit:** 4px (0.25rem)

```css
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-5: 1.25rem;  /* 20px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-10: 2.5rem;  /* 40px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
--spacing-20: 5rem;    /* 80px */
--spacing-24: 6rem;    /* 96px */
--spacing-32: 8rem;    /* 128px */
```

---

## 🔲 Border Radius

```css
border-radius: 3px;   /* sm - tight elements */
border-radius: 6px;   /* default - most UI */
border-radius: 8px;   /* md - cards */
border-radius: 12px;  /* lg - large containers */
```

---

## 🎭 Component Patterns

### Glass Card (Standard)

```tsx
<div
  className="bg-white/10 border border-white/10 rounded-lg p-6
             hover:bg-white/15 transition-all duration-300"
  style={{
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  }}
>
  {/* Content */}
</div>
```

### Terminal Window

```tsx
<div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden">
  {/* Terminal chrome (3 dots) */}
  <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-border">
    <div className="w-3 h-3 rounded-full bg-terminal-red" />
    <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
    <div className="w-3 h-3 rounded-full bg-terminal-green" />
  </div>

  {/* Terminal content */}
  <div className="p-6 font-mono text-sm">
    {/* Code */}
  </div>
</div>
```

### CTA Button (Primary)

```tsx
<button
  className="bg-cyril-orange hover:bg-cyril-orange-light
             active:bg-cyril-orange-dark
             text-white font-medium px-6 py-3 rounded-lg
             transition-all duration-200
             shadow-lg hover:shadow-xl"
>
  Get Started
</button>
```

### Agent Card

```tsx
<div
  className="group bg-white/10 border border-white/10 rounded-lg p-6
             hover:border-[{agent-color}]/50 hover:bg-white/15
             transition-all duration-300 cursor-pointer"
  style={{
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  }}
>
  {/* Agent icon with color */}
  <div
    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center
               transition-transform duration-300 group-hover:scale-110"
    style={{ background: `{agent-color}` }}
  >
    {/* Icon */}
  </div>

  <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
  <p className="text-dark-text-secondary">{agent.description}</p>
</div>
```

---

## 🖼️ Layout Patterns

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center justify-center px-6 py-20">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      {/* Hero headline */}
    </h1>
    <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
      {/* Subheadline */}
    </p>
    <div className="flex gap-4 justify-center">
      {/* CTA buttons */}
    </div>
  </div>
</section>
```

### Feature Grid (3-column)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature) => (
    <div key={feature.id} className="glass-card">
      {/* Feature content */}
    </div>
  ))}
</div>
```

### Content Section (Standard)

```tsx
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 text-center">{section.title}</h2>
    <p className="text-xl text-dark-text-secondary mb-12 text-center max-w-2xl mx-auto">
      {section.description}
    </p>

    {/* Section content */}
  </div>
</section>
```

---

## ⚡ Animation & Motion

### Principles

1. **Subtle over flashy** - Animations should enhance, not distract
2. **Consistent timing** - Use standard duration values
3. **Purpose-driven** - Every animation should serve UX
4. **Respect reduced motion** - Honor `prefers-reduced-motion`

### Standard Durations

```css
transition-duration: 150ms;  /* Quick interactions (hover states) */
transition-duration: 200ms;  /* Button presses, tooltips */
transition-duration: 300ms;  /* Card hovers, modals */
transition-duration: 500ms;  /* Page transitions */
```

### Easing Functions

```css
transition-timing-function: ease-out;     /* Standard (elements entering) */
transition-timing-function: ease-in;      /* Elements exiting */
transition-timing-function: ease-in-out;  /* Smooth oscillations */
```

### Background Orb Animations

**See:** `tailwind.config.ts` for complete keyframe definitions

```css
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  .animate-float-slow,
  .animate-float-slower,
  .animate-float,
  .animate-drift {
    animation: none !important;
  }
}
```

---

## 🌐 Browser Support

### Target Browsers

- Chrome/Edge 76+ (backdrop-filter support)
- Safari 14+
- Firefox 103+

### Fallbacks

```css
/* Solid background if backdrop-filter not supported */
@supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
  .glassmorphism {
    background-color: rgba(26, 26, 26, 0.9);
  }
}
```

---

## ♿ Accessibility

### Color Contrast

**All text meets WCAG AA standards (4.5:1 minimum):**
- White text (#f5f5f5) on black (#000000): 19.6:1 ✅
- Secondary text (#d0d0d0) on black: 14.2:1 ✅
- Orange (#d97757) on black: 4.8:1 ✅

### Motion Sensitivity

- Respects `prefers-reduced-motion: reduce`
- Orb animations disabled for users with motion sensitivity
- Essential functionality never depends on animation

### Keyboard Navigation

- All interactive elements keyboard-accessible
- Visible focus indicators (outline with orange accent)
- Logical tab order

### Screen Reader Support

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`)
- Alt text for all images
- ARIA labels where needed

---

## 🛠️ Tailwind v4 Gotchas

### Custom Utilities Don't Auto-Generate

**Problem:** Custom gradient classes like `bg-gradient-radial` don't work

**Solution:** Use inline styles

```tsx
// ❌ Doesn't work in Tailwind v4
<div className="bg-gradient-radial from-orange/40 to-transparent" />

// ✅ Use inline CSS
<div style={{
  background: 'radial-gradient(circle, rgba(217, 119, 87, 0.4) 0%, transparent 70%)'
}} />
```

### Backdrop-Filter Utilities

**Problem:** `backdrop-blur-xl` classes not generated

**Solution:** Inline style with WebKit prefix

```tsx
// ❌ Doesn't work reliably
<div className="backdrop-blur-xl" />

// ✅ Use inline style
<div style={{
  backdropFilter: 'blur(40px)',
  WebkitBackdropFilter: 'blur(40px)',
}} />
```

---

## 📚 Related Documentation

- **Glass-Bottom-Boat Pattern:** `GLASS_BOTTOM_BOAT_PATTERN.md` (complete technical guide)
- **Lookbook:** `LOOKBOOK.md` (visual component showcase)
- **Tailwind Config:** `/tailwind.config.ts` (color system, animations)
- **Components:** `/components/*.tsx` (React implementations)

---

## 🚀 Quick Reference

**Primary Color:** #d97757 (Orange)
**Background:** #000000 (Pure black)
**Glass Blur:** 24px (cards), 40px (page overlay)
**Border Radius:** 6px (default), 8px (cards)
**Orb Sizes:** 700-950px
**Animation Speed:** 12-20s
**Font Stack:** System fonts (-apple-system, etc.)

---

**Design Bible v1.0**
**Last Updated:** 2025-10-22
**Status:** Production ✅
