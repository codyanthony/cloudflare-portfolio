# Portfolio Design Principles

## Purpose

This document codifies the strategic design thinking and principles applied across all portfolio content. Use this when creating or expanding any portfolio section (Console UX, API Documentation, Architecture Guides, Documentation Systems, User Documentation).

## Technical Requirements

**Portfolio Platform:** Astro with Starlight template

**File Format:** All case studies and portfolio pages **MUST use `.mdx` format, NOT `.md`**

**Why .mdx is required:**

- **JSX component support:** Starlight components (Aside, Card, CardGrid, LinkCard, Tabs) only work in .mdx files
- **Import statements:** The `import` line for components must be processed (hidden), which only happens in .mdx
- **Markdown in components:** Markdown formatting (`**bold**`, links, etc.) inside JSX components only renders in .mdx files
- **React integration:** Any custom React components require .mdx

**Using .md instead of .mdx will cause:**

- Import statements visible as text on page
- Aside/Card/LinkCard components not rendering (blank sections)
- Markdown formatting showing as literal asterisks
- Components displaying as raw code instead of rendered output

**File naming convention:** `case-study-name.mdx` (not `.md`)

## Core Philosophy

### Docs-as-Product Mindset

Content demonstrates understanding that customers view documentation as a central component of unified product experience, not a separate afterthought. Console UI, API documentation, and user guides work together to support customer success at every stage of their journey.

**Key principles:**

- Design console UI text and documentation in parallel, not sequentially
- Maintain terminology consistency across all surfaces (console, API, docs)
- Consider complete customer workflow, not isolated touchpoints
- Help content links to detailed documentation; documentation reflects console flows
- Changes to one surface require evaluating impact on others

### User-Centered Design Language

Portfolio content reflects human-centered design thinking through language that demonstrates customer empathy, design process transparency, and outcome focus.

**Demonstrate through:**

- "Customers struggled with..." vs "The system had issues with..."
- "Designed UI text to reduce cognitive load" vs "Wrote UI text"
- "Iterative refinement through UX reviews" vs "Created final design"
- "Addressed pain points customers raised in support tickets" vs "Improved documentation"

### Cross-Functional Collaboration Emphasis

Technical writing at senior levels involves partnership with Product, UX, Engineering, and customer-facing teams. Portfolio content should make collaboration visible and demonstrate how it improved outcomes.

**Show collaboration through:**

- Naming roles collaborated with (PM, UX Designer, Console Dev, SAs, Support)
- Describing collaboration mechanisms (weekly design workshops, review cycles)
- Explaining how collaboration shaped decisions (UX feedback influenced design)
- Demonstrating stakeholder management across organizational boundaries

---

## Google UX Portfolio Compliance

### Requirements Checklist

Google's UX portfolio guidance requires demonstrating:

- [x] **3-5 case studies** showing range of experience and skills
- [x] **End-to-end process** from problem through solution
- [x] **Clear problem statement** articulating user need
- [x] **Your specific role** and contributions
- [x] **Cross-functional collaboration** with other roles
- [x] **Impact and outcomes** of your work
- [x] **Visuals + explanations** showing your process
- [x] **Self-explanatory** without presenter

### How We Meet Requirements

**Range of Experience:** Case studies span Console UX, documentation systems, API influence, and cross-company collaboration

**End-to-End Process:** Each case study follows: Challenge → Approach → Design Process → Solution → Impact

**Clear Problems:** Every case study starts with customer pain point or business need

**Role Clarity:** First-person narrative with specific actions ("I designed," "I led," "I coordinated")

**Collaboration:** Named partners, described mechanisms (weekly workshops), explained outcomes

**Impact:** Process efficiency improvements, customer experience outcomes, business enablement

**Visuals:** Console screenshots showing your UI text work, diagrams where appropriate

**Self-Explanatory:** Structure enables understanding without presenter walkthrough

---

## Universal Principles (Apply to ALL Content)

### Page Opening Structure

Every case study page must follow this exact sequence to provide immediate context and proper visual hierarchy:

**Required Opening Sequence:**

1. **Frontmatter** (title, description)
2. **Import statement** (Starlight components - hidden after rendering)
3. **Introductory paragraphs** (1-2 paragraphs before any components)
4. **"At a Glance" Aside box** (scannable bullet summary)
5. **First screenshot or hero image** (if visually representative)
6. **"The Challenge" section** (detailed problem statement)

#### Introductory Paragraphs (Required)

Every case study must start with 1-2 paragraphs providing immediate context before the "At a Glance" box. This orients readers and provides essential framing.

**Include these elements:**

- **What:** Project name and type (console UX, API documentation, architecture guide, etc.)
- **Brief context:** Problem or opportunity that prompted the work
- **Your role:** High-level description of your contribution
- **When:** Timeline or date range (Q2 2023, 6-month project, etc.)
- **Collaboration:** Key partners if essential to understanding scope

**Purpose:** Readers shouldn't have to hunt for basic context. The intro provides orientation before diving into structured content.

**Example (Console UX project):**

> This project demonstrates integrated console UX and documentation design for ROSA with hosted control planes (HCP), a new Red Hat OpenShift deployment model launched in Q2 2023. I designed console UI text and comprehensive user documentation in parallel, treating them as components of a unified product experience.
>
> The project required close collaboration with AWS and Red Hat product teams to standardize terminology, design console workflows for a new AWS Marketplace billing model, and ensure consistency across AWS console, Red Hat console, and documentation surfaces.

**Example (Documentation Systems project):**

> This project established AWS's first continuously maintained AsciiDoc documentation package and defined conversion standards adopted across multiple services. Over 18 months, I architected the XML-to-AsciiDoc modernization program for ROSA documentation, then scaled the approach to EKS and Special Regions teams.
>
> The modernization addressed two critical needs: reducing contribution barriers for partner teams and preparing documentation for AI-assisted customer use. I built AI-assisted transformation tooling using Claude-powered automation with human validation, cutting conversion cycles from days to hours while maintaining compliance review requirements.

**What NOT to include in intro:**

- Detailed problem statement (save for "The Challenge" section)
- Step-by-step process details (save for "My Approach" section)
- Specific deliverables (save for main content sections)
- Outcomes and metrics (save for "Impact & Outcomes" section)

**Writing style:** Direct, informative, conversational. Think of it as the elevator pitch for the project.

---

### Case Study Structure

**Standard Content Sections:**

1. **Introductory paragraphs** (context and orientation - see above)
2. **At a Glance** (scannable summary using Aside component)
3. **The Challenge** (problem statement + context)
4. **My Approach** (process + collaboration methodology)
5. **Designing the [Console Experience / API / Documentation]** (deliverables + process)
6. **Impact & Outcomes** (measurable results)
7. **Key Takeaways** (learnings applicable beyond this project)

**Optional sections based on content type:**

- Tabs for state progressions (console states, before/after)
- CardGrid for categorized deliverables
- LinkCard for published work references

### Content Design Principles

**Demonstrate, Don't Just Describe:**

- Show before/after where possible
- Use concrete examples over vague claims ("reduced from 10 steps to 5 steps" not "simplified workflow")
- Quantify outcomes when available ("smooth UX approval" vs "approved")
- Let work speak through visuals and links to published content

**Integrated Product Thinking:**

- Console + API + Documentation presented as unified customer experience
- Emphasize how deliverables work together across surfaces
- Show understanding of complete customer journey
- Highlight cross-surface terminology consistency

**Impact-Focused Storytelling:**

- Always tie work to customer or business outcomes
- Process serves the story, not vice versa
- Outcomes over activities ("enabled faster deployment" vs "wrote documentation")
- Specific over impressive ("approved in first review" vs "highly successful")

### Writing Style Reference

All content must follow `/PORTFOLIO_STYLE_GUIDE.md`:

- No em dashes or informal hyphens for dramatic breaks
- Minimal lists (only when significantly improving readability)
- No negative dramatic openings ("This wasn't just...")
- Natural human prose, not AI-generated patterns
- Active voice, varied sentence structures
- Specific details over vague adjectives

---

## Content-Type Specific Guidelines

### Console UX Projects

**Visual Requirements:** **Images REQUIRED** (3-4 carefully selected console screenshots per case study)

**What to Demonstrate:**

- UI text design (status messages, button labels, help text, error messages)
- Help panel content and integration strategy
- Design process and collaboration with UX/PM/Dev teams
- Terminology standardization across companies (if applicable)
- Console workflow optimization

**Screenshot Strategy:**

- Show YOUR UI text and help content, not generic console views
- Multiple states if applicable (not enabled → in progress → enabled)
- Help panels with visible content you authored
- Workflow screens showing complete customer journey
- Annotations highlighting your contributions (optional)

**Collaboration Emphasis:**

- Weekly design workshops with PM, UX Designer, Console Developer
- UX review participation (Fit n' Finish, UX Sign Off)
- Iterative refinement through design cycles
- Stakeholder alignment across functions

**Evidence of Work:**

- Console screenshots showing your UI text
- Links to live console (if publicly accessible with note about access requirements)
- Published help panel content
- Before/after comparisons of UI improvements

**Case Study Structure:**

1. **Challenge:** Console UX problem, billing integration, workflow complexity
2. **Approach:** Design collaboration process, cross-functional workshops
3. **Designing the Console Experience:** UI text development, help content, iterative refinement
4. **Impact:** UX review outcomes, launch success, customer adoption

---

### API Documentation Projects

**Visual Requirements:** **Images NOT REQUIRED.** API documentation is terminal/code-based and doesn't rely on visual UI design.

**Use visuals only when:**

- Architectural diagrams clarify complex service interactions
- Sequence diagrams explain API call flows
- Data structure visualizations aid understanding
- System integration diagrams show dependencies
- **NOT for decorative purposes**

**What to Demonstrate:**

- Technical accuracy through well-documented request/response examples
- Parameter validation rules and constraints
- Error response patterns with resolution guidance
- Authentication and authorization flows
- Edge case handling and troubleshooting

**Code Examples Over Screenshots:**

- Request/response examples with annotations
- Parameter descriptions showing your work
- Error message improvements (text comparison, before/after)
- Validation rules and constraints
- SDK integration examples

**Collaboration Emphasis:**

- Design reviews with engineering teams
- API standards alignment (AWS API standards, company guidelines)
- Cross-service consistency discussions
- Developer experience advocacy in design decisions

**Evidence of Work:**

- Links to published API reference pages
- Code examples from your documentation
- Before/after of parameter descriptions you improved
- Error message enhancements you designed
- API design decisions you influenced

**Case Study Structure:**

1. **Challenge:** API design problem, documentation gap, developer friction
2. **Approach:** Collaboration with engineering, standards research, developer needs analysis
3. **Designing the API Experience:** Parameter descriptions, examples, error handling, design influence
4. **Impact:** Developer adoption metrics, support ticket reduction, API usage patterns

**Developer Experience Focus:**

- Clear error messages with actionable resolution paths
- Consistent naming conventions across endpoints
- Self-documenting parameter names reducing explanation needs
- Comprehensive troubleshooting sections
- Examples showing common use cases

---

### User Documentation Projects (Guides, Quickstarts, How-Tos)

**Visual Requirements:** **Images SELECTIVE.** Use visuals when demonstrating IA improvements or workflow reorganization.

**Include screenshots when:**

- Showing information architecture redesign (before/after TOC comparison)
- Demonstrating content reorganization improving findability
- Workflow visualization shows customer journey improvements
- Step reduction visualization (complex → simplified workflow)
- Jobs-to-be-Done content restructuring

**Skip screenshots for:**

- Standard deployment guides without IA innovation
- Routine content updates or accuracy corrections
- Style improvements without structural changes
- When links to published docs are sufficient

**What to Demonstrate:**

- Information architecture design and customer workflow alignment
- Content reorganization based on user research
- Navigation improvements enhancing discoverability
- Content consolidation reducing duplication
- Voice of customer integration into content strategy

**Collaboration Emphasis:**

- Voice of customer data from Support, SAs, customer feedback
- Product team partnership understanding roadmap
- Solution architects providing deployment pattern insights
- Cross-functional review cycles ensuring accuracy

**Evidence of Work:**

- Links to published documentation with context on what you improved
- IA diagrams showing before/after TOC structure (if significant redesign)
- Workflow visualizations showing journey improvements
- Metrics: support ticket reduction, improved page engagement, customer feedback

**Case Study Structure:**

1. **Challenge:** Content findability issues, workflow complexity, customer confusion
2. **Research:** VOC data analysis, support ticket patterns, page analytics
3. **My Approach:** IA redesign, content audit, jobs-to-be-done mapping, stakeholder alignment
4. **Solution:** Reorganized structure, consolidated content, workflow-based paths
5. **Impact:** Time-to-first-success improvements, support ticket reduction, engagement metrics

**Focus Areas:**

- Jobs-to-be-done content organization
- Customer journey mapping across content
- Workflow-based IA vs feature-based
- Prerequisites surfaced appropriately
- Troubleshooting integration at relevant decision points

---

### Documentation Systems Projects

**Visual Requirements:** **Images STRATEGIC.** Use when showing process improvements, metrics, or system architecture.

**What to Demonstrate:**

- Process improvement and organizational scalability
- Tool chain decisions and implementation
- Quality and efficiency metrics
- Cross-team enablement and adoption
- Infrastructure modernization rationale

**Useful Visuals:**

- Process flow diagrams (before/after)
- Adoption metrics over time
- System architecture diagrams
- Conversion statistics
- Tool chain integrations

**Collaboration Emphasis:**

- Organizational change management
- Cross-team adoption strategies
- Leadership engagement securing resources
- Engineering partnership for tooling
- Documentation of reusable processes

**Evidence of Work:**

- Links to processes/runbooks you created
- Adoption metrics across teams
- Conversion statistics (if applicable)
- Training materials developed
- Organizational impact metrics

**Case Study Structure:**

1. **Challenge:** Scalability problem, process inefficiency, quality inconsistency
2. **Approach:** Research, stakeholder analysis, pilot program design
3. **Solution:** New process/tool/format, enablement materials, rollout strategy
4. **Impact:** Adoption rates, efficiency gains, quality improvements, organizational reach

---

## Content Type Comparison Matrix

| Aspect                  | Console UX                            | API Documentation                        | User Documentation                     | Documentation Systems                       |
| ----------------------- | ------------------------------------- | ---------------------------------------- | -------------------------------------- | ------------------------------------------- |
| **Visuals Required?**   | Yes (3-4 screenshots)                 | No (code examples primary)               | Selective (only if demonstrating IA)   | Strategic (metrics, processes)              |
| **Primary Evidence**    | Console screenshots, UI text          | Code examples, API reference links       | Published guide links, IA diagrams     | Process docs, adoption metrics              |
| **Collaboration Focus** | PM, UX, Console Dev                   | Engineering, Product, API architects     | Product, SAs, Support, Customers       | Leadership, Cross-team writers, Engineering |
| **Impact Metrics**      | UX review success, launch on schedule | Developer adoption, API usage            | Support tickets, time-to-success       | Adoption rates, efficiency gains            |
| **Key Demonstrations**  | UI design, help content, workflows    | Technical accuracy, developer experience | IA, findability, workflow optimization | Scalability, process improvement            |

---

## Starlight Component Usage

### When to Use Each Component

**Aside (tip variant for "At a Glance"):**

```mdx
<Aside type="tip" title="At a Glance">
  - **Challenge:** Brief problem statement - **My Role:** Your role in project -
  **Timeline:** Dates or duration - **Team:** Key collaborators - **Impact:**
  Primary outcome
</Aside>
```

**Use for:** Scannable project summary at top of case study
**Don't use for:** Content that belongs in main narrative flow

**Card & CardGrid (for deliverables or outcomes):**

```mdx
<CardGrid>
  <Card title="Deliverable Name" icon="icon-name">
    Brief description of what you created
  </Card>
</CardGrid>
```

**Use for:** Multiple related items needing visual separation and scannability
**Don't use for:** Content that flows better as prose or simple lists

**Tabs (for state progressions or comparison):**

```mdx
<Tabs>
  <TabItem label="Before">Initial state or approach</TabItem>
  <TabItem label="After">Improved state or outcome</TabItem>
</Tabs>
```

**Use for:** Console state progressions, before/after comparisons, multiple workflow paths
**Don't use for:** Content users need to see simultaneously

**LinkCard (for published work references):**

```mdx
<LinkCard
  title="Page Title"
  description="What this page demonstrates"
  href="https://docs.example.com/page"
/>
```

**Use for:** Published documentation, API references, live work examples
**Don't use for:** Simple inline links that work fine in prose

### Component Strategy

Use components when they:

- Add visual value improving scannability
- Separate conceptually distinct items
- Enable comparison or progression visualization
- Provide structured navigation to external work

**Don't use components to:**

- Dress up content that works better as prose
- Create artificial visual variety
- Force structure on naturally flowing content
- Add decoration without functional purpose

---

## Review Checklist

Before publishing any portfolio content, verify:

### Strategic

- [ ] Demonstrates user-centered design thinking
- [ ] Shows complete problem → solution → impact narrative
- [ ] Clear role identification and specific contributions
- [ ] Cross-functional partnership evident
- [ ] Measurable outcomes or qualitative improvements articulated

### Structural

- [ ] Follows appropriate case study structure for content type
- [ ] Visual hierarchy enables scanning (headers, white space, components)
- [ ] Images placed contextually near relevant text
- [ ] Components used strategically, not decoratively
- [ ] Links to published work accessible and functional

### Content

- [ ] Natural human prose per PORTFOLIO_STYLE_GUIDE.md
- [ ] Specific examples over vague claims
- [ ] Active voice predominates
- [ ] Varied sentence structures (not formulaic)
- [ ] Appropriate detail level (thorough but scannable)

### Visual

- [ ] Console screenshots show your UI text/help content (if console project)
- [ ] Code examples demonstrate technical rigor (if API project)
- [ ] IA diagrams show improvements (if user docs with structural changes)
- [ ] 3-4 well-selected images per console case study
- [ ] Captions explain what images demonstrate
- [ ] Links visible and accessible (not hidden in images)

---

## Adaptation Guidelines for Future Content

When adding new portfolio sections:

### 1. Start with Google Checklist

Ensure you can demonstrate:

- Clear user problem or business need
- Your end-to-end process from discovery to delivery
- Your specific role and impact
- Cross-functional collaboration
- Measurable outcomes

### 2. Choose Appropriate Visuals

Select based on what best shows your work:

- **Console UX:** Console screenshots showing your UI text
- **API Docs:** Code examples, architectural diagrams if needed
- **User Docs:** IA diagrams if restructuring, otherwise links suffice
- **Systems:** Process flows, adoption metrics, architecture

### 3. Apply Writing Style

Follow `/PORTFOLIO_STYLE_GUIDE.md` for natural human prose

### 4. Use Components Strategically

Match component to content need:

- Aside for "At a Glance" summary
- Cards for multiple related deliverables
- Tabs for state progressions or comparisons
- LinkCards for external work references
- Plain prose when formatting doesn't add value

### 5. Show Integrated Thinking

Demonstrate how deliverables work together in customer experience:

- Console UI terminology matches documentation language
- API descriptions inform SDK documentation
- Help content links to detailed user guides
- Documentation reflects actual console/API workflows

---

## Examples of Integrated Product Thinking

### Console + Documentation Integration

**Instead of:**

> "I created console UI text and also wrote documentation."

**Show integration:**

> "I designed console UI text and documentation in parallel, treating them as components of a unified product experience. Console help panels linked to detailed documentation. Documentation reinforced terminology introduced in console UI. Both guided customers through the same workflow with consistent language."

### API + Documentation Integration

**Instead of:**

> "I documented the API and wrote SDK guides."

**Show integration:**

> "API parameter descriptions I wrote appeared in SDK documentation and CLI help text. Error messages provided actionable guidance with links to troubleshooting documentation. API design reviews included discussing how changes would affect documentation and developer experience."

### Cross-Surface Consistency

**Instead of:**

> "I ensured consistency."

**Show how:**

> "Weekly coordination with console, API, and docs teams ensured terminology consistency. When console introduced 'hosted control planes' naming, I updated API descriptions and documentation to match. Customers encountered the same language whether using console, CLI, or reading docs."

---

**Remember:** This framework adapts to different content types while maintaining consistent quality and strategic thinking across your entire portfolio.
