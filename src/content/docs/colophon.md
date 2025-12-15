---
title: About This Site
description: How this portfolio was built and why the tech stack matters
---

*This page explains the technical decisions behind this portfolio site.*

## Tech Stack Overview

This portfolio demonstrates modern documentation infrastructure using **Astro + Starlight**, the same framework powering leading developer documentation sites. I chose this stack to show practical understanding of docs-as-code workflows, component-based architecture, and edge deployment.

### Framework: Astro + Starlight

**Version:** Astro v5.6 with Starlight v0.37

Astro's **islands architecture** ships zero JavaScript by default, loading interactive components only when needed with client directives. This architectural approach solves a fundamental docs-platform challenge: balancing rich interactivity with fast page loads.

**Why Islands Architecture Matters:**

Modern documentation isn't just static text—it's an interactive product. Developers expect embedded API playgrounds, live code editors, and real-time validation tools. Traditional static site generators can't support this interactivity, while full React frameworks create performance problems as documentation scales to thousands of pages.

Islands architecture provides the best of both worlds:
- **Fast builds**: Static HTML generation
- **Selective interactivity**: React components hydrate only where needed
- **SEO-friendly**: Content loads as HTML, not requiring JavaScript

This approach mirrors how technical documentation evolved from pure static sites (fast but limited) to React-heavy frameworks (interactive but slow) to modern hybrid architectures that deliver both speed and functionality.

### React Components

**Library:** React v19.2 with `@astrojs/react` integration

The visitor counter widget demonstrates React component integration with proper hydration:

```jsx
// Component uses client:load directive for immediate hydration
<VisitorCounter client:load />
```

**Hydration Control:**

- Astro ships static HTML by default
- React components hydrate only when `client:*` directive specified
- Without directive, you get static HTML only (no interactivity)
- This selective approach prevents "hydration tax" as sites scale

### Cloudflare Pages

**Hosting:** Deployed via `@astrojs/cloudflare` adapter

This portfolio runs on Cloudflare's edge network, demonstrating:

- **Hybrid rendering**: Static pages with server-side API routes
- **Edge deployment**: Content served from 300+ global locations
- **Zero cold starts**: Serverless function architecture

**Deployment Configuration:**

```javascript
// astro.config.mjs
export default defineConfig({
  output: "hybrid", // SSR for API routes, static for content
  adapter: cloudflare(),
});
```

### Cloudflare Pages Functions

**Backend:** Serverless API in `functions/api/` directory

The visitor counter backend runs as a Cloudflare Pages Function:

```javascript
// functions/api/visitor-count.js
export async function onRequest(context) {
  const { request, env } = context;
  const kv = env.VISITOR_COUNT; // KV binding

  // GET/POST logic for visitor tracking
}
```

**Architecture Benefits:**

- Automatic routing (file-based API endpoints)
- Environment variable access via `env` binding
- No server configuration or container management

### Cloudflare Workers KV

**Storage:** Key-value data store for visitor counter persistence

The visitor count survives deployments using Cloudflare KV:

```json
// wrangler.jsonc
{
  "kv_namespaces": [
    {
      "binding": "VISITOR_COUNT",
      "id": "YOUR_KV_NAMESPACE_ID"
    }
  ]
}
```

**Why KV for This Use Case:**

- **Global replication**: Counter accessible from any edge location
- **Eventual consistency**: Acceptable for visitor metrics
- **Low latency**: Sub-millisecond reads
- **Persistence**: Survives deployments and restarts

**Alternative Considerations:**

- **Durable Objects** would provide strong consistency but unnecessary here
- **D1 (SQLite)** would enable complex queries but overkill for simple counter
- **KV is optimal** for this read-heavy, eventually-consistent use case

## Why This Tech Stack?

### Strategic Alignment with Modern Documentation

Documentation platforms face unique challenges that general-purpose frameworks don't solve:

**The Docs-as-App Problem:**

Modern developer documentation isn't a library of static books—it's an interactive product. Developers expect to click buttons in documentation to make live API calls, validate tokens, and test configurations without leaving the page.

Traditional documentation formats (AsciiDoc, reStructuredText) excel at complex static text but can't natively render interactive components. They're designed for publishing, not for building applications.

**The Performance-Interactivity Tradeoff:**

Pure static site generators (Hugo, Jekyll) are fast but limited. Full React frameworks (Gatsby, Next.js) enable rich interactivity but create performance problems as documentation scales:

- Build times explode to 45-60+ minutes for large doc sets
- "Hydration tax" slows initial page loads
- Writers wait hours to see typo fixes published

Astro's islands architecture solves this by allowing selective interactivity without framework overhead.

### Documentation as Code

This portfolio practices modern documentation workflows:

**Version Control:**
- Documentation in Git with full history
- Pull request reviews for content changes
- Branch-based development workflows

**Automated Deployment:**
- Infrastructure as code (Wrangler config)
- Continuous deployment on Git push
- Reproducible builds and environments

**Component Reusability:**
- Shared UI components across pages
- Consistent design system
- DRY principle for documentation elements

### Developer Experience Focus

Building with the platform you're documenting provides critical insights:

- Understanding deployment workflows informs better tutorials
- Experiencing API limitations shapes documentation strategy
- Debugging edge cases reveals customer pain points

This hands-on experience translates to more accurate, helpful documentation.

## Content Strategy Decisions

**Markdown + MDX:**

- Standard Markdown for most content
- MDX for interactive components (visitor counter)
- Starlight's built-in components (Card, CardGrid, callouts)

**Information Architecture:**

- Experience-first navigation
- Projects demonstrating measurable impact
- Writing samples with live documentation links
- Technical decisions explained (this page)

**Accessibility & Performance:**

- Semantic HTML from Starlight templates
- Minimal JavaScript (only visitor counter hydrates)
- Edge deployment for global low latency
- Responsive design for all screen sizes

## Development Workflow

### Local Development

```bash
npm run dev          # Development server
npm run build        # Production build
npx wrangler pages deploy dist  # Deploy to edge
```

### AI-Assisted Development

This portfolio was built using **Claude + Cline** (AI coding assistant), demonstrating:

- Modern documentation workflow with AI assistance
- Human-in-the-loop validation of generated code
- Practical AI integration aligned with my AWS projects

The same approach I used for AWS's documentation modernization:

1. AI generates initial structure
2. Human reviews and refines
3. Testing validates functionality
4. Version control tracks changes

This workflow accelerates development while maintaining quality through human oversight.

## Source Code

This portfolio is built in the open. View the source:

**Repository:** [github.com/codyanthony/cloudflare-portfolio](https://github.com/codyanthony/cloudflare-portfolio)
