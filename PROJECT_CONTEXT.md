# Portfolio Project Context & Progress

**Last Updated:** December 28, 2025
**Status:** 5 of 6 case studies complete

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

### ✅ Case Study 3: ROSA Day 1 Experience (Prerequisites Automation)

**File:** `src/content/docs/console-ux/rosa-prerequisites-automation.mdx`

**Summary:** Automated prerequisite validation and getting started documentation for Red Hat OpenShift Service on AWS (ROSA). Demonstrates parallel console and documentation development to reduce enablement friction.

**Key Elements:**

- Problem: Manual prerequisite verification across multiple consoles + documentation gap on docs.aws.amazon.com
- Solution: Automated prerequisite page in console + comprehensive AWS-native getting started docs
- Work: UI text, 6 help panels for console, getting started documentation for AWS ROSA User Guide
- Impact: Eliminated manual verification, created AWS-native enablement path, improved time-to-first-cluster

**Screenshots:**

- rosa-prereq-get-started.png (prerequisite page in console with automated validation)
- rosa-prereq-service-quotas-hp.png (Service Quotas help panel)
- rosa-prereq-verify-hp.png (verification help panel)

**Key Patterns Applied:**

- Summary approach (not verbatim UI text) - let screenshots show actual text
- Consolidated sections focused on concrete improvements
- Collaboration context embedded in Impact section (not separate process section)
- Mirrored EVS structure for consistency

**Status:** COMPLETE and approved

### ✅ Case Study 4: Cross-Service Service Quotas Integration Strategy

**File:** `src/content/docs/console-ux/cross-service-service-quotas.mdx`

**Summary:** Leveraging ROSA operational learnings to influence EVS Service Quotas implementation strategy, preventing customer friction and support overhead patterns.

**Key Elements:**

- Problem: EVS planning custom SQ logic similar to ROSA (risking operational overhead)
- Solution: Cross-service knowledge sharing influenced strategic shift toward standard API integration + thoughtful quota defaults
- Timeline: Q1 2025 (Public Preview Planning)
- Impact: Multi-faceted approach (API integration + quota defaults) improved customer self-service and reduced anticipated support overhead

**Screenshots:**

- rosa-prereq-get-started.png (existing - shows ROSA custom logic pattern)
- evs-service-quotas-validation.png (new - shows EVS validation approach)

**Key Patterns Applied:**

- Diplomatic ROSA framing (reasonable launch choice, service maturation)
- All impacts tied to customer experience (not internal metrics)
- No redundancy between Challenge and Strategic Influence sections
- Shows HOW influence happened (facilitation, reframing, data-driven advocacy)

**Status:** COMPLETE and approved

### ✅ Case Study 5: HCX API Design Collaboration

**File:** `src/content/docs/console-ux/evs-hcx-api-design.mdx`

**Summary:** Upstream product influence during EVS HCX feature API design. Advocated for extensible architecture aligned with AWS API standards.

**Key Elements:**

- Problem: EVS planning single-purpose API design for HCX elastic IP association
- Solution: Surfaced parallel VPC work, raised backward compatibility concerns, advocated for AWS API standards alignment
- Timeline: Q1-Q3 2025 (Foundation → Influence → Launch)
- Impact: Team adopted extensible API architecture; feature shipped September 2025

**Visuals:**

- Text-only case study (no screenshots/code examples)
- Generic architectural descriptions (no specific internal API names)
- Demonstrates strategic influence over technical implementation

**Key Patterns Applied:**

- Q1 collaboration foundation embedded in Strategic Influence section
- Shows HOW influence happened (standards-based advocacy, trade-off discussions)
- Q3 launch validation demonstrates follow-through
- Consistent with other case study structures

**Status:** COMPLETE and approved

---

### ✅ Landing Page: Design Influence & Upstream Collaboration

**File:** `src/content/docs/console-ux/console-api-design.mdx`

**Summary:** Overview page demonstrating upstream embedded collaboration approach across ROSA and EVS projects. Links to all 5 completed case studies with impact summaries.

**Status:** COMPLETE - All case study links updated

---

## ⚠️ IN PROGRESS: Architecture & Deployment Guides

**Status:** RESTART REQUIRED - Previous attempts deleted due to fundamental misunderstandings

### What Was Attempted (Dec 28, 2025)

Attempted to create two architecture guide pages:

1. **ROSA Cluster Architecture & Deployment Patterns** (`rosa-architecture-deployment.md`)
2. **EVS HCX Migration Architecture & Connectivity Patterns** (`evs-hcx-migration.md`)

**Why It Failed:**

1. ❌ **Hallucinated content not in source documentation:**
   - Added VMware features never documented (e.g., "replication-assisted vMotion")
   - Made up technical details (/27 recommended sizing when /28 is actual requirement)
   - Added port numbers and configuration details not in published docs
   - Created opinionated decision frameworks not present in neutral AWS docs

2. ❌ **Wrong content type:**
   - Created comprehensive architecture REFERENCE material
   - Should have curated deployment PROCEDURES from published docs
   - Focused on explaining architecture instead of showing deployment steps

3. ❌ **Wrong category scope:**
   - Included console UX work and product design story
   - That content belongs in Console UX category
   - Architecture guides should focus on DOCUMENTATION DELIVERABLES only

### Critical Requirements for Next Attempt

**ROSA Architecture & Deployment Page:**

✅ **Source:** Curate ONLY from "Getting Started with ROSA HCP"

- URL: https://docs.aws.amazon.com/rosa/latest/userguide/getting-started-hcp.html
- This is the strategically meaningful flow (ROSA classic is deprecated 2025)

✅ **Content Type:** Deployment procedures (step-by-step), NOT architecture reference

✅ **Exact Wording:** Must use EXACT wording from published docs - no additions, no paraphrasing

✅ **Look and Feel:** Mirror structure and tone of live AWS documentation

✅ **Focus:** Documentation deliverables (Getting Started guide, procedures, constraint documentation)

✅ **Architecture:** Brief intro ONLY if it helps orient readers to deployment steps

**EVS HCX Migration Page:**

✅ **Source:** Curate from published EVS HCX documentation

- Getting Started: https://docs.aws.amazon.com/evs/latest/userguide/getting-started.html
- HCX Migration: https://docs.aws.amazon.com/evs/latest/userguide/migrate-evs-hcx.html
- HCX Public Connectivity: https://docs.aws.amazon.com/evs/latest/userguide/evs-env-hcx-internet-access.html

✅ **Content Type:** Deployment procedures for HCX connectivity options

✅ **Exact Wording:** Must use EXACT wording from published docs

✅ **Focus:** Documentation deliverables showing year-long cross-service research (VPC, IPAM, Service Quotas, EIPs, Transit Gateway, Direct Connect, Site-to-Site VPN, VMware HCX)

### Quarterly Context (For Opening Paragraphs)

**ROSA HCP (Q2 2023):**

- Launch: May 24, 2023
- Worked with AWS/Red Hat leadership to standardize "ROSA with hosted control planes" terminology
- Customer friction: VPC configuration mismatches discovered late in deployment workflow
- Documentation strategy: Surface architecture requirements upfront to reduce deployment failures

**EVS HCX (Q2-Q3 2025):**

- Launch: September 18, 2025
- Year-long development spanning 8+ AWS services
- In-depth research across VPC, IPAM, Service Quotas, EIPs, VLANs, Transit Gateway, Direct Connect, Site-to-Site VPN, VMware HCX
- Delivered Getting Started rewrite, Migration guide, HCX public connectivity page, API Reference updates

### Page Structure (Follow EVS Getting Started Pattern)

1. **Opening context paragraph** (150-200 words)
   - What documentation deliverable is (Getting Started guide, Migration guide, etc.)
   - Dual-audience challenge or cross-service complexity
   - Your documentation strategy (upfront constraints, connectivity patterns, etc.)
   - Brief mention of quarterly context

2. **Deliverables & Impact section**
   - Documentation produced: List actual pages/guides
   - Tools used: AWS CLI, consoles, etc.
   - Formats: AsciiDoc, etc.
   - Customer success impact: One sentence

3. **Documentation Samples section**
   - Links to live published docs
   - PDF download if applicable

4. **Author's Note** (in callout box)
   - Explains what was curated from full documentation set
   - Why these sections selected
   - What they demonstrate about your documentation work

5. **Curated Procedures** (main body)
   - Section headers matching source documentation
   - Actual console wizard steps with form fields
   - Important/Caution boxes quoted from source
   - Constraint documentation as published

### What NOT to Include

❌ Console UX design work (that's in Console UX category)
❌ API design influence (that's in Console UX category)  
❌ Product development timeline/story (told elsewhere)
❌ Comprehensive architecture explanations
❌ Opinionated decision frameworks ("Choose X when...")
❌ Content not in published external documentation
❌ Technical details you didn't actually document

### Files Needed

- Create: `/home/cody-anthony/portfolio-startlight/src/content/docs/architecture-guides/rosa-architecture-deployment.md`
- Create: `/home/cody-anthony/portfolio-startlight/src/content/docs/architecture-guides/evs-hcx-migration.md`
- Sidebar already updated in `astro.config.mjs` (no changes needed)

---

## Remaining Work

### Additional Polish Needed

- Final portfolio-wide review for consistency
- Ensure all case studies follow same narrative structure
- Verify all screenshots are properly captioned
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
├── index.mdx                                    # Landing page
├── about.md                                     # About/summary
├── contact.md                                   # Contact info
├── colophon.md                                  # Site details
├── systems-strategy.md                          # Category landing
├── console-ux/
│   ├── console-api-design.mdx                   # Case study overview (landing page)
│   ├── cross-service-service-quotas.mdx         # ✅ Case study 4 (COMPLETE)
│   ├── evs-day1-deployment.mdx                  # ✅ Case study 2 (COMPLETE)
│   ├── evs-hcx-api-design.mdx                   # ✅ Case study 5 (COMPLETE)
│   ├── rosa-hcp-console-integration.mdx         # ✅ Case study 1 (COMPLETE)
│   └── rosa-prerequisites-automation.mdx        # ✅ Case study 3 (COMPLETE)
├── systems-strategy/
│   └── rosa-jtbd-redesign.md                    # Case study (needs work)
├── api-documentation/
│   └── evs-createenvironment.md                 # Case study (needs work)
└── architecture-guides/
    └── evs-getting-started.md                   # Writing sample (reference only)

public/
├── evs-*.png                                    # EVS screenshots
├── rosa-*.png                                   # ROSA screenshots
├── evs-service-quotas-validation.png            # EVS SQ validation
├── Cody_Anthony_Resume.pdf                      # Resume
└── Cody_Anthony_Sample_*.pdf                    # Writing samples
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
