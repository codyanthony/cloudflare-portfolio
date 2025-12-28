# Portfolio Project Context & Progress

**Last Updated:** December 27, 2025
**Status:** 2 of 5 case studies complete

---

## Project Overview

Building a **Senior Technical Writer portfolio site** using Astro Starlight for a **Cloudflare interview presentation**. The goal is to demonstrate ability to build with the same tech stack Cloudflare uses (Astro + MDX with React components) on their infrastructure.

### Tech Stack

- **Framework:** Astro v5.6.1 with Starlight v0.37.1
- **Hosting:** Cloudflare Pages (via `@astrojs/cloudflare` adapter)
- **Interactivity:** React v19.2.3 components
- **Backend:** Cloudflare Pages Functions (`functions/api/`)
- **Visitor Counter:** Serverless counter using Cloudflare KV (implemented)

### Repository

- GitHub: `https://github.com/codyanthony/cloudflare-portfolio.git`
- Current commit: `9b9fb63cf832fa5afdb9e43a1d1de10b1bcffde7`

---

## Completed Work

### ✅ Foundation Documents

1. **ux_design_portfolio_tips_19.pdf** - Google UX design rules for portfolio submissions
   - Sets requirements and standards for UX-focused portfolio to be reviewed by UX teams(3-5 case studies, include role and impact for each case study, include visuals, use problem/solution structure)

1. **PORTFOLIO_STYLE_GUIDE.md** - Comprehensive guide to avoid AI-generated prose
   - Prohibits: dramatic language (crisis, critical), em dashes, "from scratch" overuse
   - Focuses on: natural human voice, concrete specifics, varied sentence structure
   - Includes confidentiality rules (no internal metrics, team names, exact dates)

1. **PORTFOLIO_DESIGN_PRINCIPLES.md** - Content strategy framework
   - Case study structure template
   - Emphasis on customer impact over internal process
   - Story-driven narrative approach

### ✅ Case Study 1: ROSA HCP Console Integration

**File:** `src/content/docs/console-ux/rosa-hcp-console-integration.mdx`

**Summary:** Demonstrates console UX integration for Red Hat OpenShift Service on AWS (ROSA) Hosted Control Planes. Shows embedded collaboration with console dev team, contract selection wizard, and help panel development.

**Key Elements:**

- Problem: Console team lacked documentation writer for ROSA HCP launch
- Solution: Embedded in console dev team, weekly workshops
- Impact: Contract selection wizard, help panels, integrated console + docs
- Screenshots: rosa-get-started.png, rosa-contracts-hcp.png, rosa-contract-wizard.png, rosa-help-panel.png

**Status:** COMPLETE and approved

### ✅ Case Study 2: EVS Day 1 Deployment Experience

**File:** `src/content/docs/console-ux/evs-day1-deployment.mdx`

**Summary:** Integrated console UX and deployment documentation for Amazon Elastic VMware Service. Focus on DNS validation friction identified during public preview and coordinated console/docs fixes.

**Key Elements:**

- Problem: Day 1 deployment friction; DNS validation caused majority deployment failures
- Solution: Coordinated console (help panels, validation) + documentation improvements
- Work: 28 help panels, console UI text, deployment docs from private preview through GA
- Impact: Reduced deployment failures, enabled self-service for VMware admins

**Screenshots:**

- evs-get-started.png (console start page)
- evs-dns-hostnames.png (hostname configuration problem)
- evs-dns-help-panel-1.png (help panel solution)
- evs-dns-contraint-text.png (validation error enforcement)
- evs-network-config-help-panel.png (VLAN subnet complexity)

**Critical Revisions Applied:**

- Fixed product definition: EVS is "AWS service enabling VMware workload migration" NOT "hybrid cloud product"
- Market context: Broadcom VMware licensing price increases drove demand for cloud-based alternatives
- Removed dramatic language: "crisis"→"issue", removed "critical"
- "From scratch" used sparingly (once in opening)
- DNS narrative flow: continuous focused story, not interrupted by broad content
- CardGrid: customer-focused outcomes only (no internal process metrics)

**Status:** COMPLETE and approved

---

## Remaining Work

### 3 More Case Studies to Create

1. **ROSA JTBD Redesign** (Systems & Strategy)
   - File: `src/content/docs/systems-strategy/rosa-jtbd-redesign.md` (exists, needs review/revision)
   - Topic: Jobs-to-be-done restructuring of ROSA documentation
   - Focus: IA overhaul from feature-centric to workflow-based

2. **EVS API Documentation** (API Documentation category)
   - File: `src/content/docs/api-documentation/evs-createenvironment.md` (exists, needs review/revision)
   - Topic: CreateEnvironment API reference
   - Focus: Complex parameter documentation for VMware VCF deployment

3. **Console & API Design Principles** (Architecture/Process category)
   - File: `src/content/docs/console-ux/console-api-design.md` (exists, needs review/revision)
   - Topic: Embedded collaboration approach and design feedback
   - Focus: How early API/console participation prevents content debt

### Additional Polish Needed

- Final portfolio-wide review for consistency
- Ensure all case studies follow same narrative structure
- Verify all screenshots are properly captioned
- Test visitor counter functionality
- Final Cloudflare Pages deployment

---

## Key Style Patterns (From Completed Work)

### Opening Paragraph Structure

- Introduce project + define what product IS in one sentence
- Connect market/business context
- Describe your role as "integrated components" of experience
- End with launch milestone

**Example (EVS):**
"This project demonstrates integrated console UX and deployment documentation for Amazon Elastic VMware Service, an AWS platform that enables enterprises to migrate VMware-based workloads to the cloud without re-architecting applications. I created console UI text, 28 help panels, and deployment documentation from scratch as integrated components of a unified Day 1 experience, shipping on schedule with EVS's general availability launch in Q3 2025."

### Challenge Section Structure

1. What the product enables (customer goal)
2. Market context (why customers needed it)
3. Specific friction points with concrete details
4. Technical complexity (bulleted list showing depth)

### Narrative Flow Best Practice

- **Problem → Solution → Broader Context** (not Problem → Broad → Solution → Broad)
- Keep focused stories continuous
- Provide broader project scope AFTER telling the main story
- DNS section in EVS is good example: focused DNS story first, then "Complete Console Scope" section

### Impact Section Structure

- **Customer Impact paragraph** (narrative form)
- **CardGrid with 4 customer-focused outcomes** (visual highlights)
- NO internal process metrics in CardGrid (no "Smooth Approvals" or "Strategic Enablement")
- Focus on: deployment success, self-service, reduced friction, knowledge bridging

---

## Critical Rules to Follow

### Product Definitions

- **ROSA:** "Red Hat OpenShift Service on AWS" - managed OpenShift clusters
- **ROSA HCP:** "Hosted Control Planes" - AWS-managed control plane, customer manages workers
- **EVS:** "Amazon Elastic VMware Service" - AWS service enabling VMware workload migration (NOT "hybrid cloud product")
- **VCF:** "VMware Cloud Foundation" - VMware's software stack

### Prohibited Language

- ❌ Dramatic: crisis, critical, crucial, vital, essential, pivotal
- ❌ AI tells: comprehensive, robust, seamless, innovative, strategic
- ❌ Overused: "from scratch" (max 1-2 times per case study)
- ❌ Em dashes for dramatic effect
- ❌ "This wasn't just..." negative openings
- ❌ Transition word overload: additionally, furthermore, moreover

### Confidential Information

- ❌ Specific business metrics ("16% success rate")
- ❌ Team member full names (use "EVS PM" not "Kiran Sundar")
- ❌ Internal org structure
- ❌ Meeting scheduling details ("Monday 9:45-10:45am")
- ✅ Product launch quarters when publicly announced
- ✅ General timeframes (Q2 2025, 2024-2025)

### Screenshot Best Practices

- Always include descriptive captions explaining what screenshot shows
- Use screenshots to SHOW the problem AND solution
- Don't include before/after unless you have actual before state
- Caption format: _Descriptive caption explaining the visual_

---

## File Structure

```
src/content/docs/
├── index.mdx                          # Landing page
├── about.md                           # About/summary
├── contact.md                         # Contact info
├── colophon.md                        # Site details
├── systems-strategy.md                # Category landing
├── console-ux/
│   ├── console-api-design.md          # Case study 5 (needs work)
│   ├── evs-day1-deployment.mdx        # ✅ Case study 2 (COMPLETE)
│   └── rosa-hcp-console-integration.mdx # ✅ Case study 1 (COMPLETE)
├── systems-strategy/
│   └── rosa-jtbd-redesign.md          # Case study 3 (needs work)
├── api-documentation/
│   └── evs-createenvironment.md       # Case study 4 (needs work)
└── architecture-guides/
    └── evs-getting-started.md         # Writing sample (reference only)

public/
├── evs-*.png                          # EVS screenshots
├── rosa-*.png                         # ROSA screenshots
├── Cody_Anthony_Resume.pdf            # Resume
└── Cody_Anthony_Sample_*.pdf          # Writing samples
```

---

## Next Steps

1. **Review existing rosa-jtbd-redesign.md** - Apply style guide rules, revise for natural prose
2. **Review existing evs-createenvironment.md** - API reference case study
3. **Review existing console-api-design.md** - Process/principles case study
4. **Final portfolio review** - Consistency check across all case studies
5. **Deployment verification** - Test on Cloudflare Pages

---

## Important Notes for Continuation

1. **Always read style guide** before making content suggestions
2. **User prefers tighter, more cohesive prose** - avoid choppy disconnected sentences
3. **Focus stories on customer impact** - not internal process or business strategy
4. **Product definitions matter** - get them right (EVS is NOT "hybrid cloud product")
5. **Natural human voice** - should sound like explaining to a colleague, not corporate announcement
6. **Context matters** - Broadcom VMware licensing drove EVS demand, Red Hat collaboration shaped ROSA
7. **Specific > Vague** - "28 help panels" not "comprehensive help system"
8. **Let actions speak** - don't need adjectives when you have concrete examples

---

## Success Criteria

Portfolio should demonstrate:

- ✅ Technical depth (complex networking, API design, cross-service integration)
- ✅ Customer empathy (understanding deployment friction, knowledge gaps)
- ✅ Collaboration skills (embedded workshops, cross-functional alignment)
- ✅ Strategic thinking (VOC loops, documentation as product feedback)
- ✅ Same tech stack as Cloudflare (Astro + MDX + React components)
- ✅ Professional prose (natural human voice, not AI-generated)

---

## Resume Key Points (For Case Study Context)

**AWS Experience (Apr 2022 - Present):**

- ROSA and Amazon EVS from private preview through GA
- XML→AsciiDoc modernization (ROSA first continuously maintained AsciiDoc package)
- VOC-informed documentation roadmaps
- Embedded with Product/Engineering/UX for upstream improvements
- Built launch readiness systems and cross-functional cadences

**Previous Experience:**

- Pluralsight/A Cloud Guru (Sep 2020 - Apr 2022): Cloud/DevOps learning content
- Contract Technical Writer (Jan 2018 - Sep 2020): SaaS/cloud documentation

**Education:**

- B.A. English (cum laude) - Truman State University
- Content Strategy Specialization - Northwestern University
