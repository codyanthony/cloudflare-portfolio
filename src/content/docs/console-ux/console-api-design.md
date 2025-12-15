---
title: Console & API Design
description: Upstream product influence shaping developer and console experience before documentation
---

Throughout my work on ROSA and Amazon EVS, I embedded with product and engineering teams early in development cycles to influence console UX, API design, and product decisions before documentation plans were finalized. This upstream participation allowed me to act as a customer experience advocate in design discussions, surface friction points before they became documentation challenges, and contribute cross-service insights that informed integration strategies. By treating documentation as product feedback rather than a downstream task, I helped shape experiences that reduced customer friction and operational overhead.

## Product Design Influence

### EVS Service Quotas Integration Strategy

EVS team was evaluating Service Quotas integration approaches for the console experience. I had an opportunity to contribute cross-service perspective from ROSA's implementation to inform their integration strategy decisions.

I shared operational learnings from ROSA's Service Quotas implementation, explaining how standard Service Quotas API integration enables automated quota validation and reduces manual support burden. During discussions with EVS Sr PMs, I facilitated conversations on integration approach tradeoffs and proposed standard Service Quotas integration leveraging AWS-managed automation.

The team adopted the standard Service Quotas integration strategy, enabling automated quota checks that eliminate manual request triage for the service team and reduce deployment friction for customers.

### EVS API Design Collaboration

EVS team was designing new HCX feature APIs, and I participated in design reviews as documentation representative and customer experience advocate to ensure alignment with AWS API standards.

During technical discussions, I surfaced parallel VPC development work that could inform HCX API architecture and contributed to conversations on extensible API design patterns. I facilitated discussions on backward compatibility considerations and the benefits of designing APIs that could accommodate future functionality beyond the initial use case.

The team adopted an extensible API architecture aligned with AWS API standards, preventing future backward compatibility constraints while providing broader utility to customers.

### ROSA Contract Flow Cost Presentation

ROSA team was redesigning the contract purchasing experience for improved customer clarity, and I participated in bi-weekly UX design reviews to contribute documentation and customer UX perspective.

I proposed reorganizing cost information as a read-only receipt format with table structure and logical sequencing to improve scannability. I developed clearer label language based on customer mental models.

The UX designer incorporated the receipt-style cost presentation into the purchasing flow, improving cost transparency for customers. 

### Additional Design Contributions

**Network prerequisites visibility** - Advocated for surfacing VPC Route Server requirements on first screen rather than buried in navigation, preventing mid-deployment validation errors.

**Terminology consistency** - Standardized usage of Amazon EVS VLAN terminology across EVS written assets and dependent service docs, ensuring clarity for both VMware and AWS audiences across console, API, and documentation surfaces.

**Parameter naming clarity** - Influenced parameter names like `serviceAccessSubnetId` to make purpose self-evident without requiring paragraph explanations.

**Validation constraint documentation** - Ensured CIDR block size limits (`/28` to `/24`) documented in parameter descriptions, not just error messages, enabling correct planning upfront.

**Error message improvements** - Replaced vague errors like "Invalid CIDR block" with specific guidance: "CIDR block must be between /28 and /24."

**Mutual exclusivity documentation** - Identified parameters that couldn't be used together (e.g., `dedicatedHostId` and `placementGroupId`) for upfront API documentation.

## Documentation & UX Deliverables

**Console microcopy:**
- Help text for console form fields explaining prerequisites and validation rules
- Error messages providing actionable guidance for validation failures
- Tooltips clarifying complex networking concepts (BGP routing, VPC Route Server, Service Quotas)
- Field labels aligning terminology across console, API, and documentation
- UI text for console pages, error states, and status messages
- Help panels for complex workflows and configuration steps

**API documentation:**
- Parameter naming reviews for consistency with AWS patterns
- Validation requirement specifications preventing trial-and-error
- Error response structures including affected fields and resolution guidance
- Parameter descriptions used in SDK documentation and CLI help text
- API architecture recommendations aligned with AWS standards

## Customer Impact

These collaborative efforts demonstrated measurable outcomes across both services:

- **Operational efficiency:** Standard Service Quotas integration eliminated future manual request triage, reducing support burden
- **API quality:** Extensible architecture aligned with AWS standards prevented technical debt and future refactoring
- **UX transparency:** Receipt-style cost presentation improved customer understanding of pricing in purchasing flows
- **Cross-service learning:** ROSA operational insights informed EVS integration decisions, accelerating development

By embedding early in product development, I influenced upstream decisions that prevented downstream documentation challenges and improved customer experience.

**Tools & methodologies used:**
- Weekly UX design sessions with product, design, and development teams
- Figma mockup review and design feedback
- Cross-service operational insights (ROSA → EVS knowledge transfer)
- Customer experience advocacy in API and console design discussions
- Technical review coordination with product and engineering stakeholders
