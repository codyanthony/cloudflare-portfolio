---
title: ROSA Jobs-to-be-Done Content Redesign
description: Multi-year strategic initiative transforming feature-centric documentation into workflow-based customer journeys
---

In early 2022, ROSA documentation reflected the service's rapid innovation cycle, with information architecture primarily organized around new product features. As the service matured and customer adoption grew, Voice-of-Customer data and engagement metrics revealed opportunities to optimize the customer experience across the entire User Guide—from Day 1 getting started workflows to IAM policy documentation—addressing friction points including content fragmentation, duplication, and complex navigation.

I conducted a comprehensive content audit in Q1 2022 identifying opportunities for Jobs-to-be-Done restructuring. With ROSA in active feature-launch phase through 2022-2023, I prioritized new feature documentation while maintaining the strategic vision for eventual information architecture modernization. When AWS launched its organization-wide Jobs-to-be-Done initiative in 2024, I re-validated the 2022 audit findings to ensure continued relevance, then executed the restructuring in the first available two-week sprint—completing among the first in the organizational cohort with first-pass approval from content review.

## Implementation

**Consolidated cluster creation workflows** - Merged duplicate "auto mode" and "manual mode" getting started pages (identical except for step #1's `--mode` flag) into a single guide with console/CLI tabs. Worked with AWS engineering to unlock tabbed interface support for AsciiDoc (previously only available in DocBook XML), then implemented as first production use case for ROSA consolidated workflows. This eliminated premature deployment path decisions and allowed customers to toggle between approaches mid-workflow.

**Policy documentation consolidation** - Eliminated 4 duplicate pages by restructuring AWS managed policies documentation from a fragmented two-page split into a single, scannable reference aligned with AWS documentation standards, simplifying navigation for external customers and streamlining internal reviews.

**Environment variables for CLI workflows** - Introduced environment variables in deployment procedures, transforming error-prone copy-paste workflows into clean, reproducible commands and reducing configuration errors from mistyped values.

**Customer-goal page titles** - Retitled pages throughout the User Guide to match customer goals ("Create your first cluster") rather than feature names, improving findability and aligning with jobs-to-be-done framework.

**Cross-functional stakeholder coordination** - Led review meetings with AWS and Red Hat Product, Engineering, and documentation stakeholders to align on restructuring scope and prioritization, ensuring changes served both customer bases and maintained coherent cross-vendor narrative.

## Customer Impact

**Measurable outcomes:**
- Reduced support ticket volume for deployment workflows
- Better customer success rates for first cluster deployments  
- Lower bounce rates for getting started workflows (Adobe Analytics)
- Faster time-to-first-success through consolidated, workflow-based guidance

**Execution quality:**
- Completed restructuring in two-week sprint
- Among first writers to complete organizational initiative
- First-pass approval from content review—no rework required

**Tools & methodologies used:**
- Jobs-to-be-Done (JTBD) content strategy framework
- AsciiDoc tabbed interface syntax (first production implementation)
- Adobe Analytics for engagement data
- Support case pattern analysis
- Cross-company coordination with Red Hat Product, Engineering, and documentation teams

## Documentation Resources

**Live Documentation:**
- [ROSA User Guide](https://docs.aws.amazon.com/rosa/latest/userguide/) - Complete restructured documentation
- [ROSA Getting Started](https://docs.aws.amazon.com/rosa/latest/userguide/getting-started-classic-cli.html) - Consolidated workflow example with tabbed interface
- [AWS Managed Policies](https://docs.aws.amazon.com/rosa/latest/userguide/security-iam-awsmanpol.html) - Unified policy reference
