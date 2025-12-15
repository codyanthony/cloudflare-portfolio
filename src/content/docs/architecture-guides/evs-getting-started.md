---
title: EVS Network Architecture & Getting Started
description: Technical architecture and deployment guide for hybrid cloud infrastructure
---

This architecture and deployment guide for Amazon Elastic VMware Service documents complex networking requirements for deploying VMware Cloud Foundation on AWS infrastructure. The guide addresses a dual-audience challenge: AWS cloud architects need VMware context, while VMware administrators need AWS networking guidance. I worked with Product leadership to transparently document architectural constraints, including boot volume encryption limitations, securing engineering commitment for post-GA improvements while setting accurate customer expectations.

## Deliverables & Impact

**Documentation produced:**
- Network architecture guidance (BGP routing, VPC Route Server configuration)
- Security boundary documentation (network ACLs vs. security groups)
- Step-by-step deployment procedures with constraint documentation
- Prerequisites and architectural limitations with business impact considerations

**Tools & formats used:**
- AWS documentation platform (AsciiDoc)
- Network architecture diagrams
- Cross-references to VMware and AWS documentation

**Customer success impact:**
- Transparent constraint documentation preventing compliance mismatches
- Clear BGP routing requirements reducing deployment failures
- Dual-audience approach serving both AWS and VMware administrators
- Accurate expectations set upfront reducing support escalations

## Documentation Samples

**PDF Snapshot:** [Download EVS Architecture Guide Sample](/Cody_Anthony_Sample_1_Technical_Procedure_EVS_Architecture.pdf)

**Live Documentation:**
- [Getting started with Amazon Elastic VMware Service](https://docs.aws.amazon.com/evs/latest/userguide/getting-started.html)
- [Amazon EVS Architecture Overview](https://docs.aws.amazon.com/evs/latest/userguide/architecture.html)

---

:::note[Author's Note for Portfolio Review]
The full Amazon EVS deployment workflow includes administrative configuration for DNS, NTP, and licensing. This sample has been curated to focus exclusively on the Network Architecture and Security Boundary configurations. I selected this excerpt to demonstrate my role in defining cross-service architectural constraints (such as BGP routing dependencies) and documenting platform security limitations—specifically regarding boot volume encryption—to address customer compliance questions proactively.
:::

---

## EVS Architecture Overview

![EVS Consolidated Domain Architecture](/evs-consolidated-domain-architecture.png)

Amazon EVS deploys a consolidated domain architecture that combines AWS networking infrastructure with VMware Cloud Foundation components. The diagram above illustrates the complete architecture, showing the NSX overlay network (T-0 and T-1 gateways) connecting to logical network segments where customer workloads run, alongside VCF management appliances (NSX Manager, vCenter Server, SDDC Manager, VMware Cloud Builder). The lower section shows the Amazon EVS networks layer, including VTEP networks, management networks, vMotion network, NSX Edge uplink networks, and vSAN network—all running across distributed ESXi hosts provisioned as Amazon EC2 instances.

**Related Architecture Documentation:**
- [Amazon EVS Architecture Overview](https://docs.aws.amazon.com/evs/latest/userguide/architecture.html) - Complete architectural details
- [Migrate workloads using HCX](https://docs.aws.amazon.com/evs/latest/userguide/migrate-evs-hcx.html) - HCX connectivity architectures

---

## Getting started with Amazon Elastic VMware Service

:::caution[Important]
To get started as simply and quickly as possible, this topic specifies the minimum requirements for Amazon EVS environment creation. Before creating these resources, review the following prerequisites and architectural constraints:

**Network Planning:** Plan out your IP address space and DNS record setup. You cannot change the IP addressing scheme after deployment.

**VCF Version:** Amazon EVS only supports VCF version 5.2.1.x at this time. You should familiarize yourself with VCF 5.2.1 requirements. For more information, see the VCF 5.2.1 release notes.

**Boot Volume Encryption:** Amazon EVS hosts do not support encryption for the Amazon EBS boot volume at this time. Ensure this limitation meets your data residency and compliance requirements before creating an environment.
:::

---

## Network infrastructure: dynamic routing

### Set up a VPC Route Server instance with endpoints and peers

Amazon EVS uses Amazon VPC Route Server to enable BGP-based dynamic routing to your VPC underlay network. You must specify a route server that shares routes to at least two route server endpoints in the service access subnet. The peer ASN configured on the route server peers must match, and the peer IP addresses must be unique.

:::caution[Important]
Your environment deployment fails if you don't meet these Amazon EVS requirements for VPC Route Server configuration:

- You must configure at least two route server endpoints in the service access subnet.
- When configuring Border Gateway Protocol (BGP) for the Tier-0 gateway, the VPC Route Server peer ASN value must match the NSX Edge peer ASN value.
- When creating the two route server peers, you must use a unique IP address from the NSX uplink VLAN for each endpoint. These two IP addresses will be assigned to the NSX edges during Amazon EVS environment deployment.
- When enabling Route Server propagation, you must ensure that all route tables being propagated have at least one explicit subnet association. BGP route advertisement fails if propagated route tables do not have an explicit subnet association.
  :::

For more information about setting up VPC Route Server, see the [Route Server get started tutorial](https://docs.aws.amazon.com/vpc/latest/routeserver/what-is-route-server.html).

---

## Security architecture: layer 2 isolation

### Create a network ACL to control Amazon EVS VLAN subnet traffic

Amazon EVS uses a network access control list (ACL) to control traffic to and from Amazon EVS VLAN subnets.

:::caution[Important]
EC2 security groups do not function on elastic network interfaces that are attached to Amazon EVS VLAN subnets. To control traffic to and from Amazon EVS VLAN subnets, you must use a network access control list.
:::

For more information, see [Create a network ACL for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) in the Amazon VPC User Guide.

If you plan to configure HCX internet connectivity, ensure that the network ACL rules that you configure allow the necessary inbound and outbound connections for HCX components. For more information about HCX port requirements, see the [VMware HCX User Guide](https://docs.vmware.com/en/VMware-HCX/index.html).

---

## Service implementation: environment configuration

### Create an Amazon EVS environment

:::note[Author's Note for Portfolio Review]
Steps 1–5 (licensing & host configuration) omitted for brevity.
:::

**Step 6: Configure networks and connectivity**

On the **Configure networks and connectivity** page, do the following:

a. **For HCX connectivity requirements**, select whether you want to use HCX with private connectivity or over the internet.

b. **For VPC**, choose the VPC that you previously created.

c. **(For HCX internet connectivity only) For HCX network ACL**, choose which network ACL your HCX VLAN will be associated with.

:::caution[Important]
We strongly recommend that you create a custom network ACL dedicated to the HCX VLAN. For more information, see [Create a network ACL to control Amazon EVS VLAN subnet traffic](#security-architecture-layer-2-isolation).
:::

d. **For Service access subnet**, choose the private subnet that was created when you created the VPC.

e. **For Security group (optional)**, you can choose up to two security groups that control communication between the Amazon EVS control plane and VPC. Amazon EVS uses the default security group if no security group is chosen.

:::note
Ensure that the security groups that you choose provide connectivity to your DNS servers and Amazon EVS VLAN subnets.
:::

f. **Under Management connectivity**, enter the CIDR blocks to be used for the Amazon EVS VLAN subnets. For **HCX uplink VLAN CIDR block**, if configuring a public HCX VLAN, you must specify a CIDR block with a netmask length of exactly `/28`. Amazon EVS throws a validation error if any other CIDR block size is specified for the public HCX VLAN. For a private HCX VLAN and all other VLANs CIDR blocks, the minimum netmask length that you can use is `/28` and the maximum is `/24`.

:::caution[Important]
Amazon EVS VLAN subnets can only be created during Amazon EVS environment creation, and cannot be modified after the environment is created. You must ensure that the VLAN subnet CIDR blocks are properly sized before creating the environment. You will not be able to add VLAN subnets after the environment is deployed. For more information, see [Amazon EVS networking considerations](https://docs.aws.amazon.com/evs/latest/userguide/networking-considerations.html).
:::

g. **Under Expansion VLANs**, enter the CIDR blocks for additional Amazon EVS VLAN subnets that can be used to expand VCF capabilities within Amazon EVS, such as enabling NSX Federation.

h. **Under Workload/VCF connectivity**, enter the CIDR block for the NSX uplink VLAN, and choose two VPC Route Server peer IDs that peer to Route Server endpoints over the NSX uplink.

i. Choose **Next**.
