# getcyril.dev

Marketing website for Cyril - Claude's intelligent cousin.

## Overview

This is the official marketing website for the Cyril framework, a multi-agent orchestration system built on Claude Code.

**Live Site:** https://getcyril.dev
**Main Repository:** https://github.com/3CH0xyz/Cyril-Dev

## Features

- **Modern Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design:** Mobile-first, fully responsive across all devices
- **Dark Theme:** Beautiful dark mode with gradient accents
- **Component Library:** Reusable, production-ready components
- **SEO Optimized:** Complete metadata, Open Graph tags, Twitter cards

## Structure

```
getcyril.dev/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with CTA
│   ├── AgentShowcase.tsx # 8 specialist agents grid
│   ├── FeatureGrid.tsx   # Feature cards
│   ├── HowItWorks.tsx    # 3-step timeline
│   ├── CodeExample.tsx   # Syntax-highlighted code
│   ├── CTASection.tsx    # Call to action
│   └── Footer.tsx        # Site footer
└── lib/
    └── constants.ts      # Centralized content

```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy

This site is designed for deployment on Vercel:

```bash
# Deploy to Vercel
vercel deploy --prod
```

## Design System

### Colors

- **Primary:** Indigo (#6366f1, #4f46e5, #4338ca)
- **Purple:** Purple (#8b5cf6, #7c3aed)
- **Background:** Gray scale (#0a0a0a, #1a1a1a, #2a2a2a)

### Typography

- **Font:** Inter (Google Fonts)
- **Headings:** Bold, 2xl-7xl
- **Body:** Regular, base-xl

### Components

All components use Tailwind CSS for styling:
- Responsive grid layouts
- Hover effects and transitions
- Gradient backgrounds
- Custom animations

## Content Management

All text content is centralized in `lib/constants.ts` for easy updates:

- Site configuration
- Agent descriptions
- Feature descriptions
- Code examples
- Links and URLs

## License

MIT License - see [LICENSE](LICENSE)

## Credits

Built with ❤️ by [3CH0](https://3ch0.dev)

Part of the [Cyril](https://github.com/3CH0xyz/Cyril-Dev) ecosystem.
