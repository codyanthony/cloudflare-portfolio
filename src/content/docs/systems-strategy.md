---
title: Documentation Systems & Strategy
description: Infrastructure modernization and scalable documentation frameworks
---

Beyond individual deliverables, I've led documentation infrastructure initiatives that enable self-service authoring, improve content quality at scale, and prepare documentation systems for emerging AI workflows.

## AsciiDoc Modernization Program

**2022-Present:** Multi-year initiative pioneering documentation format modernization

In **mid-2022**, I began pioneering documentation format modernization to lower contribution barriers and position documentation infrastructure for emerging AI workflows. Starting with ROSA, I established an early continuously maintained AsciiDoc implementation and drove organizational scaling through strategic solutions tailored to each team's needs: enabling EKS to accept external open source contributions, pioneering self-service models ensuring business continuity for teams without dedicated writer support, and leveraging AI-assisted workflows to scale modernization needs while ensuring strict compliance requirements are met for regulated regions documentation.

### ROSA Foundation (2022)

ROSA required close collaboration with external Red Hat technical writers. I researched and proposed AsciiDoc adoption over the standard format, recognizing that a markdown-like source format would lower barriers for contributions from a wider variety of contributors, both human and AI.

I established ROSA's AsciiDoc implementation and created a framework enabling safe contribution from product managers and engineers. This foundation work proved sustainable—ROSA has remained continuously maintained in AsciiDoc format since adoption. The lessons learned from ROSA informed conversion standards that were later adopted by other teams.

### Cross-Service Expansion (2024)

The ROSA framework demonstrated scalability potential. Beginning in **Q2 2024**, I influenced EKS adoption of AsciiDoc and provided strategic and implementation support for their transition through conversion testing, troubleshooting workshops, and authoring best practices documentation. 

In **June 2024**, I collaborated with AWS engineering to implement XML entity support for AsciiDoc, enabling reuse of standard AWS entities like region.arn across converted documentation. Following EKS's adoption, the team reported contributor participation increased to 25%, demonstrating the format's effectiveness in lowering contribution barriers.

I led conversion of six SAP on AWS guides to AsciiDoc in **Q1 2025**, establishing a self-service documentation model enabling SAP service team to maintain content independently, reducing documentation team dependencies while preserving quality through review gates.

### Regulated Regions Modernization (2025)

In **Q3 2025**, I converted AWS Secret Region User Guide, served as primary contributor to AWS Top Secret Region User Guide conversion, and led AWS GovCloud User Guide conversion to AsciiDoc, processing 296+ files and establishing reusable processes for future conversions. 

To accelerate these conversions while maintaining quality, I developed AI-assisted Python transformation scripts using Claude coding assistant, including a custom XML entity to AsciiDoc attribute conversion pipeline that preserves shared content post-conversion, enabling shared content reuse across AsciiDoc packages. This automation reduced conversion cycles from days to hours while preserving human-in-the-loop validation for compliance requirements and technical accuracy.

The tooling and processes I developed from this work have been adopted by platform engineering teams and other writers, who continue building on this foundation to improve conversion processes across the organization.

### Impact

**Measurable outcomes:**
- EKS contributor participation increased to 25% post-AsciiDoc adoption
- Automation tooling reduces conversion time from days to hours
- Framework voluntarily adopted across multiple service teams
- Self-service models established reducing documentation team dependencies
- Successfully converted: ROSA guide (2022), 6 SAP guides (2025), 3 regulated region guides (2025), contributed to EKS conversion (2024)

**Strategic positioning:**
- Documentation infrastructure prepared for AI-assisted workflows
- Lightweight format more accessible to LLM processing
- Faster iteration cycles through simplified markup
- Quality maintained through automated validation and review gates
- Foundation enabling continued organizational adoption

**Tools & technologies:**
- AsciiDoc lightweight markup format
- Python transformation scripts for automated conversion
- Claude AI coding assistant
- Git-based docs-as-code workflows

### Sample availability

Detailed project documentation and strategy artifacts available on request. 

## Related Documentation Work

**Jobs-to-be-Done content strategy** - Applied JTBD frameworks to [ROSA content redesign](/architecture-guides/rosa-jtbd-redesign/) and [EVS documentation architecture](/architecture-guides/evs-getting-started/).

**Self-service documentation systems** - Defined contribution runbooks and review gates enabling safe non-writer publishing for SAP on AWS and other partner teams.

**Launch readiness frameworks** - Created intake processes, roadmaps, and cross-functional coordination systems ensuring documentation delivery aligned with release timelines.
