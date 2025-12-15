---
title: ROSA Jobs-to-be-Done Content Redesign
description: Information architecture overhaul transforming feature-centric documentation into workflow-based customer journeys
---

In early 2022, ROSA documentation reflected the service's rapid innovation cycle, with information architecture primarily organized around new product features. As the service matured and customer adoption grew, Voice-of-Customer data and engagement metrics revealed opportunities to optimize the Day 1 getting started experience. The documentation evolution spanned the ROSA User Guide—from getting started procedures to policy references—presenting an opportunity for comprehensive restructuring aligned with emerging jobs-to-be-done best practices.

I spent Q1 2022 conducting a ROSA content audit to establish a modernization plan. The audit, informed by support case patterns and engagement telemetry, identified opportunities for improvement: streamlining getting started workflows, enhancing CLI reproducibility, consolidating policy documentation, and reorganizing content around customer goals. When AWS launched its organization-wide initiative to migrate documentation from a feature-centric model to a JTBD model, I had already mapped the restructuring strategy based on VOC data and was positioned to execute immediately.

## Implementation

**Consolidated cluster creation workflows** - Merged duplicate "auto mode" and "manual mode" getting started pages (identical except for step #1's `--mode` flag) into a single guide with console/CLI tabs, eliminating premature deployment path decisions and allowing customers to toggle between approaches mid-workflow.

**Environment variables for CLI** - Introduced environment variables in deployment procedures, transforming error-prone copy-paste workflows into clean, reproducible commands and reducing configuration errors from mistyped values.

**Unified policy reference** - Restructured AWS managed policies documentation for ROSA from a confusing two-page split into a single, scannable reference aligned with AWS documentation standards, simplifying navigation for external customers and facilitating more streamlined internal reviews. 

**Customer-goal page titles** - Retitled pages throughout the User Guide to match customer goals ("Create your first cluster") rather than feature names, improving findability and aligning with jobs-to-be-done framework.

**Red Hat coordination** - Maintained regular coordination with Red Hat technical writers to ensure IA changes complemented their parallel documentation, providing a coherent cross-vendor narrative regardless of which documentation set customers accessed.

## Customer Impact

Support ticket patterns shifted after the restructure, demonstrating measurable improvements across multiple metrics:

- **Reduced support ticket volume** for deployment workflows
- **Better customer success rates** for first cluster deployments  
- **Lower bounce rates** for getting started workflows (Adobe Analytics)
- **Faster time-to-first-success** through consolidated, workflow-based guidance

**Tools & methodologies used:**
- Jobs-to-be-Done (JTBD) content strategy framework
- Adobe Analytics for engagement data
- Support case pattern analysis
- Cross-company coordination with Red Hat technical writers

## Documentation Resources

**Live Documentation:**
- [ROSA User Guide](https://docs.aws.amazon.com/rosa/latest/userguide/) - Complete restructured documentation
- [ROSA Getting Started](https://docs.aws.amazon.com/rosa/latest/userguide/getting-started-classic-cli.html) - Consolidated workflow example
- [AWS Managed Policies](https://docs.aws.amazon.com/rosa/latest/userguide/security-iam-awsmanpol.html) - Unified policy reference
