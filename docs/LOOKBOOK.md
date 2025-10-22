# getcyril.dev Lookbook

**Visual Component Library & Style Showcase**

**Version:** 1.0
**Last Updated:** 2025-10-22
**Live Site:** https://getcyrildev.vercel.app

> This lookbook showcases every component, pattern, and visual element used in getcyril.dev's dark mode design with the Glass-Bottom-Boat Effect.

---

## 📖 Table of Contents

1. [Background & Atmosphere](#background--atmosphere)
2. [Typography](#typography)
3. [Buttons & CTAs](#buttons--ctas)
4. [Cards & Containers](#cards--containers)
5. [Agent Showcase](#agent-showcase)
6. [Code Examples](#code-examples)
7. [Terminal Windows](#terminal-windows)
8. [Navigation](#navigation)
9. [Features Grid](#features-grid)
10. [Color Swatches](#color-swatches)

---

## 🌌 Background & Atmosphere

### Pure Black Base
```
Color: #000000
Use: Main page background
Effect: Creates maximum contrast for glassmorphism
```

**Visual:** Solid black fills the entire viewport

### Glass-Bottom-Boat Effect

**Frosted Glass Page Overlay**
```css
backdrop-filter: blur(40px) saturate(150%);
```
**Effect:** Everything viewed through thick frosted glass

**Background Orbs (9 total)**
- **Sizes:** 700px, 800px, 850px, 900px, 950px
- **Colors:** Subtle desaturated tints (orange, purple, teal, amber, emerald, indigo, blue, lime, warm)
- **Motion:** Slow undulating animations (12-20s)
- **Blur:** 32px (blur-2xl), 40px (blur-3xl)

**Component Location:** `/components/BackgroundOrbs.tsx`

**Visual Description:**
```
┌─────────────────────────────────────┐
│ Frosted Glass Overlay (40px blur)  │
│ ┌─────────────────────────────────┐ │
│ │   🌫️  Large Orb (950px)         │ │
│ │      rgba(85,70,65,0.45)        │ │
│ │      Slow drift animation       │ │
│ │                                 │ │
│ │  🌫️  Medium Orb (750px)         │ │
│ │     rgba(70,65,85,0.4)          │ │
│ │     Float animation             │ │
│ └─────────────────────────────────┘ │
│  Black Background (#000)            │
└─────────────────────────────────────┘
```

**Animation Types:**
- **floatSlow (15s):** Gentle movement, slight scaling
- **floatSlower (18s):** Very slow with rotation
- **float (12s):** Standard undulation
- **drift (20s):** Large-scale translation

---

## ✍️ Typography

### Headings

**Hero (4xl - 61px)**
```tsx
<h1 className="text-4xl md:text-7xl font-bold text-white">
  Meet Cyril: Claude's Intelligent Cousin
</h1>
```
**Visual:** Extra large, bold, pure white (#f5f5f5)
**Use Case:** Hero headlines, landing page titles

**Section (3xl - 49px)**
```tsx
<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
  8 Specialist Agents
</h2>
```
**Visual:** Large, bold, section headers
**Use Case:** Main section titles

**Subsection (2xl - 39px)**
```tsx
<h3 className="text-2xl font-semibold text-white">
  Architect
</h3>
```
**Visual:** Medium-large, subsection headers
**Use Case:** Component titles, feature headings

### Body Text

**Standard Body (base - 16px)**
```tsx
<p className="text-base text-dark-text-secondary leading-relaxed">
  Cyril orchestrates 8 specialized AI agents...
</p>
```
**Color:** #d0d0d0 (82% white)
**Line Height:** 1.6 (optimal readability)
**Use Case:** Paragraph text, descriptions

**Small Body (sm - 13px)**
```tsx
<p className="text-sm text-dark-text-muted">
  Last updated: 2025-10-22
</p>
```
**Color:** #a0a0a0 (63% white)
**Use Case:** Captions, metadata, labels

### Code & Monospace

**Inline Code**
```tsx
<code className="font-mono text-cyril-orange bg-white/5 px-2 py-1 rounded">
  npm install cyril
</code>
```
**Color:** Orange accent on dark background
**Use Case:** Terminal commands, code snippets

**Code Block**
```tsx
<pre className="font-mono text-sm text-dark-text p-4 bg-dark-surface rounded-lg overflow-x-auto">
  <code>{codeString}</code>
</pre>
```
**Background:** Dark surface (#1a1a1a)
**Use Case:** Multi-line code examples

---

## 🔘 Buttons & CTAs

### Primary Button (Orange)

**Default State**
```tsx
<button className="bg-cyril-orange hover:bg-cyril-orange-light
                   active:bg-cyril-orange-dark
                   text-white font-medium px-6 py-3 rounded-lg
                   transition-all duration-200
                   shadow-lg hover:shadow-xl">
  Get Started
</button>
```

**Visual States:**
- **Default:** `#d97757` (Cyril orange)
- **Hover:** `#e08862` (Lighter orange) + shadow increase
- **Active:** `#c86847` (Darker orange)
- **Disabled:** `opacity-50 cursor-not-allowed`

**Use Case:** Primary actions, CTAs, important buttons

### Secondary Button (Ghost)

```tsx
<button className="border-2 border-white/20 hover:border-white/40
                   hover:bg-white/5
                   text-white font-medium px-6 py-3 rounded-lg
                   transition-all duration-200">
  View Documentation
</button>
```

**Visual:** Transparent with border, subtle hover
**Use Case:** Secondary actions, navigation links

### Icon Button

```tsx
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20
                   flex items-center justify-center
                   transition-colors duration-200">
  <Icon className="w-5 h-5" />
</button>
```

**Visual:** Circular or square, glass background
**Use Case:** Close buttons, actions in cards

---

## 🎴 Cards & Containers

### Standard Glass Card

```tsx
<div
  className="bg-white/10 border border-white/10 rounded-lg p-6
             hover:bg-white/15 transition-all duration-300"
  style={{
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  }}
>
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-dark-text-secondary">Card description goes here...</p>
</div>
```

**Visual:**
```
┌────────────────────────────────┐
│ ░░░ Frosted Glass (24px blur) │
│                                │
│  Card Title                    │
│  Card description goes here... │
│                                │
│ Border: white/10               │
└────────────────────────────────┘
```

**States:**
- **Default:** 10% white bg, 10% white border
- **Hover:** 15% white bg, smooth transition
- **Active:** Slight scale increase (optional)

**Use Cases:** Feature cards, agent cards, content blocks

### Elevated Card (More Prominent)

```tsx
<div
  className="bg-white/15 border border-white/20 rounded-lg p-8
             shadow-2xl"
  style={{
    backdropFilter: 'blur(32px)',
    WebkitBackdropFilter: 'blur(32px)',
  }}
>
  {/* Content */}
</div>
```

**Difference:** Higher opacity (15% vs 10%), stronger border, larger padding
**Use Cases:** Hero cards, highlighted content, modal dialogs

### Compact Card (Smaller)

```tsx
<div className="bg-white/10 border border-white/10 rounded-md p-4"
     style={{ backdropFilter: 'blur(24px)' }}>
  <span className="text-sm font-medium">Compact content</span>
</div>
```

**Difference:** `rounded-md` (8px), smaller padding (p-4)
**Use Cases:** List items, tags, chips

---

## 🤖 Agent Showcase

### Agent Card Pattern

Each agent uses its unique brand color for the icon background.

**Example: Architect Agent**
```tsx
<div
  className="group bg-white/10 border border-white/10 rounded-lg p-6
             hover:border-purple-500/50 hover:bg-white/15
             transition-all duration-300 cursor-pointer"
  style={{
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  }}
>
  {/* Agent icon */}
  <div
    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center
               transition-transform duration-300 group-hover:scale-110"
    style={{ background: '#8B5CF6' }}  {/* Purple for Architect */}
  >
    <svg className="w-6 h-6 text-white">
      {/* Blueprint icon */}
    </svg>
  </div>

  <h3 className="text-xl font-semibold mb-2">Architect</h3>
  <p className="text-dark-text-secondary mb-4">
    Designs scalable system architecture and makes technology decisions
  </p>

  <div className="flex gap-2">
    <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">
      System Design
    </span>
    <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">
      Microservices
    </span>
  </div>
</div>
```

**Visual Hierarchy:**
```
┌──────────────────────────────────┐
│ ┌────┐                           │
│ │ 🏗️ │ (Purple icon bg)          │
│ └────┘                           │
│                                  │
│ Architect                        │
│ Designs scalable system...       │
│                                  │
│ [System Design] [Microservices]  │
└──────────────────────────────────┘
```

**Interaction:**
- **Hover:** Border changes to agent color (purple-500/50), card lifts slightly
- **Icon Animation:** Scales to 110% on hover
- **Cursor:** Pointer to indicate clickable

**Agent Color Reference:**
| Agent | Color | Hex |
|-------|-------|-----|
| Architect | Purple | #8B5CF6 |
| Researcher | Amber | #F59E0B |
| Implementer | Teal | #14B8A6 |
| Reviewer | Sky Blue | #0EA5E9 |
| Tester | Lime | #84CC16 |
| Debugger | Orange | #FB923C |
| Deployer | Emerald | #10B981 |
| Documenter | Indigo | #6366F1 |

**Component Location:** `/components/AgentShowcase.tsx`

---

## 💻 Code Examples

### Syntax-Highlighted Code Block

**Pattern Used:**
```tsx
<div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden">
  {/* Code content */}
  <pre className="p-6 overflow-x-auto">
    <code className="font-mono text-sm">
      <span className="text-syntax-keyword">const</span>{" "}
      <span className="text-syntax-function">greet</span> ={" "}
      <span className="text-syntax-string">"Hello World"</span>
    </code>
  </pre>
</div>
```

**Syntax Colors:**
```css
--syntax-keyword: #d97757;  /* Orange - keywords (const, function, etc.) */
--syntax-string: #4ade80;   /* Green - strings */
--syntax-comment: #616161;  /* Gray - comments */
--syntax-function: #60a5fa; /* Blue - function names */
```

**Visual:**
```
┌────────────────────────────────────┐
│ const greet = "Hello World";       │
│   └───┘       └────────────┘       │
│  Orange         Green               │
└────────────────────────────────────┘
```

**Component Location:** `/components/CodeExample.tsx`

---

## 🖥️ Terminal Windows

### macOS-Style Terminal

**Full Pattern:**
```tsx
<div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden">
  {/* Terminal chrome (macOS style) */}
  <div className="flex items-center gap-2 px-4 py-3 bg-dark-bg border-b border-dark-border">
    <div className="w-3 h-3 rounded-full bg-terminal-red" />
    <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
    <div className="w-3 h-3 rounded-full bg-terminal-green" />
    <span className="ml-4 text-xs text-dark-text-muted font-mono">
      terminal
    </span>
  </div>

  {/* Terminal content */}
  <div className="p-6 font-mono text-sm">
    <div className="flex items-start gap-2">
      <span className="text-cyril-orange">$</span>
      <span className="text-dark-text">npm install cyril</span>
    </div>
    <div className="mt-2 text-dark-text-secondary">
      ✔ Installing dependencies...
    </div>
  </div>
</div>
```

**Visual:**
```
┌──────────────────────────────────────┐
│ ● ● ●  terminal                      │ ← Chrome bar
├──────────────────────────────────────┤
│ $ npm install cyril                  │ ← Command
│ ✔ Installing dependencies...         │ ← Output
│                                      │
└──────────────────────────────────────┘
```

**Colors:**
- Red dot: `#ff5f57`
- Yellow dot: `#ffbd2e`
- Green dot: `#28ca42`
- Prompt ($): Orange accent
- Text: White/secondary white

**Use Cases:** Installation instructions, CLI examples, command output

---

## 🧭 Navigation

### Main Navigation Bar

```tsx
<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
     style={{
       backdropFilter: 'blur(24px)',
       WebkitBackdropFilter: 'blur(24px)',
       background: 'rgba(0, 0, 0, 0.7)',
     }}>
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-cyril-orange">Cyril</span>
    </div>

    {/* Nav links */}
    <div className="flex items-center gap-6">
      <a href="#features"
         className="text-dark-text hover:text-cyril-orange transition-colors">
        Features
      </a>
      <a href="#agents"
         className="text-dark-text hover:text-cyril-orange transition-colors">
        Agents
      </a>
      <a href="#docs"
         className="text-dark-text hover:text-cyril-orange transition-colors">
        Docs
      </a>
    </div>

    {/* CTA */}
    <button className="bg-cyril-orange hover:bg-cyril-orange-light px-4 py-2 rounded-lg">
      Get Started
    </button>
  </div>
</nav>
```

**Behavior:**
- **Fixed Position:** Stays at top of page
- **Frosted Glass:** Blur effect with semi-transparent background
- **Hover States:** Links turn orange, buttons lighten

---

## 🗂️ Features Grid

### 3-Column Feature Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature) => (
    <div
      key={feature.id}
      className="bg-white/10 border border-white/10 rounded-lg p-6
                 hover:bg-white/15 transition-all duration-300"
      style={{
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-cyril-orange/20
                     flex items-center justify-center mb-4">
        <feature.Icon className="w-5 h-5 text-cyril-orange" />
      </div>

      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-sm text-dark-text-secondary">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

**Visual Layout:**
```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ 🎯      │  │ ⚡      │  │ 🔒      │
│ Feature │  │ Feature │  │ Feature │
│ 1       │  │ 2       │  │ 3       │
└─────────┘  └─────────┘  └─────────┘
┌─────────┐  ┌─────────┐  ┌─────────┐
│ 🚀      │  │ 📊      │  │ 🛡️      │
│ Feature │  │ Feature │  │ Feature │
│ 4       │  │ 5       │  │ 6       │
└─────────┘  └─────────┘  └─────────┘
```

**Responsive:**
- **Mobile (< 768px):** 1 column
- **Tablet (768-1024px):** 2 columns
- **Desktop (> 1024px):** 3 columns

**Component Location:** `/components/FeatureGrid.tsx`

---

## 🎨 Color Swatches

### Primary Palette

**Brand Color:**
```
┌─────────┬─────────┬─────────┐
│ Default │ Light   │ Dark    │
├─────────┼─────────┼─────────┤
│ #d97757 │ #e08862 │ #c86847 │
│ (Hover) │ (Light) │ (Press) │
└─────────┴─────────┴─────────┘
```

**Background System:**
```
┌──────────┬──────────┬──────────┐
│ Page BG  │ Surface  │ Border   │
├──────────┼──────────┼──────────┤
│ #000000  │ #1a1a1a  │ #2a2a2a  │
│ (Black)  │ (Dark)   │ (Subtle) │
└──────────┴──────────┴──────────┘
```

**Text Hierarchy:**
```
┌──────────┬───────────┬──────────┐
│ Primary  │ Secondary │ Muted    │
├──────────┼───────────┼──────────┤
│ #f5f5f5  │ #d0d0d0   │ #a0a0a0  │
│ (95%)    │ (82%)     │ (63%)    │
└──────────┴───────────┴──────────┘
```

### Agent Colors

**Full Spectrum:**
```
Architect    Researcher   Implementer  Reviewer
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ #8B5CF6 │  │ #F59E0B │  │ #14B8A6 │  │ #0EA5E9 │
│ Purple  │  │ Amber   │  │ Teal    │  │ Sky     │
└─────────┘  └─────────┘  └─────────┘  └─────────┘

Tester       Debugger     Deployer     Documenter
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ #84CC16 │  │ #FB923C │  │ #10B981 │  │ #6366F1 │
│ Lime    │  │ Orange  │  │ Emerald │  │ Indigo  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
```

### Glass Effect Opacity Scale

**Card Backgrounds (white overlay):**
```
Default      Hover        Elevated
┌─────────┐  ┌─────────┐  ┌─────────┐
│ 10%     │  │ 15%     │  │ 15-20%  │
│ bg/10   │  │ bg/15   │  │ bg/15   │
└─────────┘  └─────────┘  └─────────┘
```

**Borders (white overlay):**
```
Default      Hover        Elevated
┌─────────┐  ┌─────────┐  ┌─────────┐
│ 10%     │  │ 20%     │  │ 20-30%  │
│ border/ │  │ border/ │  │ border/ │
│   10    │  │   20    │  │   20    │
└─────────┘  └─────────┘  └─────────┘
```

---

## 🎭 State Variations

### Hover States

**Card Hover:**
- Background: 10% → 15% white
- Border: 10% → 20% white (if colored border)
- Transform: translateY(-2px) (optional lift)
- Shadow: Increase shadow (optional)

**Button Hover:**
- Orange button: #d97757 → #e08862
- Ghost button: border 20% → 40% white, bg 0% → 5%
- Shadow: lg → xl

**Link Hover:**
- Color: #f5f5f5 → #d97757 (white → orange)
- Underline: Fade in (optional)

### Active/Pressed States

**Button Press:**
- Orange button: #d97757 → #c86847 (darker)
- Scale: scale(0.98) (slight shrink)

**Card Click:**
- Border: Temporarily highlight with agent color
- Scale: scale(0.99) (very subtle)

### Disabled States

**Button Disabled:**
```tsx
<button className="opacity-50 cursor-not-allowed" disabled>
  Disabled Button
</button>
```

**Input Disabled:**
```tsx
<input className="opacity-40 cursor-not-allowed bg-white/5" disabled />
```

---

## 📐 Layout Examples

### Hero Section Layout

```
┌────────────────────────────────────────┐
│                                        │
│         (Orbs undulating beneath)     │
│                                        │
│     ┌──────────────────────────┐     │
│     │   Meet Cyril: Claude's   │     │
│     │   Intelligent Cousin     │     │
│     │                          │     │
│     │  Orchestrates 8 AI       │     │
│     │  agents for development  │     │
│     │                          │     │
│     │  [Get Started] [Docs]    │     │
│     └──────────────────────────┘     │
│                                        │
└────────────────────────────────────────┘
```

**Key Features:**
- Centered content
- Max width constraint (max-w-6xl)
- Vertical centering (min-h-screen flex)
- Generous spacing (py-20, px-6)

### Agent Grid Layout

```
Mobile (1 col)    Tablet (2 cols)    Desktop (3 cols)
┌─────────┐      ┌─────┐ ┌─────┐     ┌────┐ ┌────┐ ┌────┐
│ Agent 1 │      │ Agt │ │ Agt │     │Agt1│ │Agt2│ │Agt3│
├─────────┤      │  1  │ │  2  │     ├────┤ ├────┤ ├────┤
│ Agent 2 │      ├─────┤ ├─────┤     │Agt4│ │Agt5│ │Agt6│
├─────────┤      │ Agt │ │ Agt │     ├────┤ ├────┤ ├────┤
│ Agent 3 │      │  3  │ │  4  │     │Agt7│ │Agt8│ │    │
└─────────┘      └─────┘ └─────┘     └────┘ └────┘ └────┘
```

### Content Section Layout

```
┌────────────────────────────────────────┐
│            Section Title                │
│       (Centered, large heading)        │
│                                        │
│          Description text              │
│     (Centered, max-w-2xl, muted)       │
│                                        │
│  ┌─────────────────────────────────┐  │
│  │                                 │  │
│  │     Section Content             │  │
│  │     (Grid, flex, or custom)     │  │
│  │                                 │  │
│  └─────────────────────────────────┘  │
└────────────────────────────────────────┘
```

**Spacing:**
- Section padding: `py-20` (top/bottom)
- Content max-width: `max-w-6xl mx-auto`
- Title margin: `mb-4`
- Description margin: `mb-12`

---

## 🔍 Usage Guidelines

### When to Use Glass Cards

✅ **Good Use Cases:**
- Feature highlights
- Agent cards
- Content blocks
- Modal dialogs
- Elevated panels

❌ **Avoid Using For:**
- Very small elements (< 100px width)
- High-density data tables (use solid backgrounds)
- Primary navigation (use less transparent overlay)

### When to Use Orange Accent

✅ **Good Use Cases:**
- Primary CTA buttons
- Active navigation items
- Links
- Syntax highlighting (keywords)
- Brand elements (logo, headers)

❌ **Avoid Using For:**
- Large background areas
- Body text
- Decorative elements (orbs use desaturated tints)

### Animation Best Practices

✅ **Do:**
- Use subtle animations (< 300ms for interactions)
- Respect `prefers-reduced-motion`
- Animate transforms and opacity (GPU-accelerated)
- Use ease-out for enter animations

❌ **Don't:**
- Animate layout properties (width, height, margin)
- Create infinite spinning animations for UI elements
- Use animations > 500ms for interactions
- Distract from content with excessive motion

---

## 🚀 Quick Copy Patterns

### Complete Glass Card with Content

```tsx
<div
  className="bg-white/10 border border-white/10 rounded-lg p-6
             hover:bg-white/15 transition-all duration-300"
  style={{
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  }}
>
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg bg-cyril-orange flex items-center justify-center flex-shrink-0">
      <span className="text-xl">🎯</span>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Feature Title</h3>
      <p className="text-sm text-dark-text-secondary">
        Feature description explaining the benefit and value proposition.
      </p>
    </div>
  </div>
</div>
```

### Complete Agent Card

```tsx
<div
  className="group bg-white/10 border border-white/10 rounded-lg p-6
             hover:border-purple-500/50 hover:bg-white/15
             transition-all duration-300 cursor-pointer"
  style={{
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
  }}
>
  <div
    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center
               transition-transform duration-300 group-hover:scale-110"
    style={{ background: '#8B5CF6' }}
  >
    <svg className="w-6 h-6 text-white" /* icon */ />
  </div>

  <h3 className="text-xl font-semibold mb-2">Architect</h3>
  <p className="text-dark-text-secondary mb-4">
    Designs scalable system architecture and makes technology decisions
  </p>

  <div className="flex flex-wrap gap-2">
    <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">
      System Design
    </span>
    <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300">
      Microservices
    </span>
  </div>
</div>
```

### Complete Terminal Window

```tsx
<div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden">
  <div className="flex items-center gap-2 px-4 py-3 bg-dark-bg border-b border-dark-border">
    <div className="w-3 h-3 rounded-full bg-terminal-red" />
    <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
    <div className="w-3 h-3 rounded-full bg-terminal-green" />
    <span className="ml-4 text-xs text-dark-text-muted font-mono">terminal</span>
  </div>

  <div className="p-6 font-mono text-sm space-y-2">
    <div className="flex items-start gap-2">
      <span className="text-cyril-orange">$</span>
      <span className="text-dark-text">npm install cyril</span>
    </div>
    <div className="text-dark-text-secondary">
      ✔ Installing dependencies...
    </div>
  </div>
</div>
```

---

## 📚 Related Resources

- **Design Bible:** `DESIGN_BIBLE.md` (comprehensive design system)
- **Glass-Bottom-Boat Pattern:** `GLASS_BOTTOM_BOAT_PATTERN.md` (technical implementation)
- **Live Site:** https://getcyrildev.vercel.app
- **Tailwind Config:** `/tailwind.config.ts`
- **Components:** `/components/*.tsx`

---

**Lookbook v1.0**
**Last Updated:** 2025-10-22
**All patterns tested and deployed ✅**
