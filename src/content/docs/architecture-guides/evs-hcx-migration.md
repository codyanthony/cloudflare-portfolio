---
title: EVS HCX Migration & Connectivity
description: VMware HCX migration guide with private and public connectivity architecture options
---

This migration guide for Amazon Elastic VMware Service demonstrates VMware HCX deployment with private or public internet connectivity for workload migration to AWS. The guide addresses a dual-audience challenge: AWS architects need VMware HCX context, while VMware administrators need AWS networking guidance spanning VPC, Transit Gateway, AWS Direct Connect, Site-to-Site VPN, IPAM, and Elastic IP configuration. I worked with EVS product and engineering teams throughout 2024-2025 to develop the migration guide, performing in-depth cross-service research to document public internet connectivity as an alternative to private dedicated connections. The documentation strategy compares architectural trade-offs between connectivity options and surfaces Elastic IP association requirements upfront, addressing customer decision-making needs before deployment. This work shipped with the EVS HCX public connectivity feature launch in Q3 2025.

## Deliverables & Impact

**Documentation produced:**

- HCX migration workflow with connectivity architecture options
- Private connectivity architecture (AWS Direct Connect, Site-to-Site VPN)
- Public connectivity architecture with EIP association procedures
- Connectivity decision framework (comparison table)
- Network ACL and route table configuration guidance

**Customer success impact:** Enabled flexible migration paths (private or public connectivity) based on customer infrastructure and cost requirements

## Documentation Samples

**Live Documentation:**

- [Migrate workloads to Amazon EVS using VMware HCX](https://docs.aws.amazon.com/evs/latest/userguide/migrate-evs-hcx.html)
- [Configure HCX public internet connectivity](https://docs.aws.amazon.com/evs/latest/userguide/evs-env-hcx-internet-access.html)

---

:::note[Author's Note for Portfolio Review]
The complete HCX migration documentation includes VMware-specific configuration (DNS, NTP, licensing, vSphere distributed port group setup) and optional features (HCX WAN Optimization, Mobility Optimized Networking). This sample focuses on:

- AWS networking architecture decisions (private vs public connectivity comparison)
- Year-long cross-service research depth (VPC, IPAM, Service Quotas, EIPs, Transit Gateway, Direct Connect, Site-to-Site VPN, VMware HCX)
- Elastic IP association workflow for public connectivity
- Architectural trade-off documentation for customer decision-making

I selected the AWS CLI path for EIP management to demonstrate API-first workflows. Console procedures are available in the full documentation.
:::

---

## HCX connectivity options

You can migrate workloads to Amazon EVS using private connectivity with AWS Direct Connect or Site-to-Site VPN connection, or using public connectivity.

Depending on your situation and connectivity options, you may prefer to use public or private connectivity with HCX. For example, some sites may have private connectivity with greater performance consistency, but lower throughput due to VPN encryption or limited link speeds. Likewise, you may have high throughput public internet connectivity that has more variance in performance. With Amazon EVS, you have the choice to use whichever connectivity option works best for you.

The following table compares the differences between HCX private and public connectivity.

| Aspect                 | Private connectivity                                                                                                                                                                                                                                | Public connectivity                                                                                                                                                                                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Overview**           | Uses only private connections within the VPC. You can optionally use AWS Direct Connect or Site-to-Site VPN with a transit gateway for external network connectivity.                                                                               | Uses public internet connectivity with Elastic IP addresses, enabling migrations without a dedicated private connection.                                                                                                                                                                                   |
| **Best suited for**    | • Time-sensitive vMotion operations<br>• Large-scale migrations<br>• Applications sensitive to latency/jitter<br>• High-volume data transfers<br>• Organizations with existing AWS Direct Connect/AWS Site-to-Site VPN                              | • Locations without AWS Direct Connect/AWS Site-to-Site VPN<br>• Cost-sensitive projects                                                                                                                                                                                                                   |
| **Key benefits**       | • Consistent low-latency connectivity<br>• Dedicated bandwidth allocation<br>• More reliable network performance<br>• Default HCX encryption can be disabled for private environments to optimize performance<br>• No public IP management required | • Faster setup than private connectivity<br>• Cost-effective for smaller migrations                                                                                                                                                                                                                        |
| **Key considerations** | • More complex initial setup<br>• Higher upfront infrastructure costs<br>• Longer implementation timeline<br>• No direct internet connectivity for any HCX component                                                                                | • More variable network performance<br>• Bandwidth limitations are possible<br>• Higher latency than private connectivity<br>• Each component requires a dedicated Elastic IP address allocated from the public IPAM pool<br>• EIP associations enable direct internet connectivity for each HCX component |

:::caution[Important]
HCX internet-based migration is generally not recommended for:

- Applications sensitive to network jitter or latency.
- Time-critical vMotion operations.
- Large-scale migrations with strict performance requirements.

For these scenarios, we recommend using HCX private connectivity. A private dedicated connection offers more reliable performance compared to internet-based connections.
:::

## HCX private connectivity architecture

The HCX private connectivity solution integrates several components:

**Amazon EVS network components:**

- Uses only private VLAN subnets for secure communication, including a private HCX VLAN.
- Supports network ACLs for traffic control.
- Supports dynamic BGP propagation of routes through a private VPC route server.

**AWS managed network transit options for on-premises connectivity:**

- **AWS Direct Connect + AWS Transit Gateway** enables you to connect your on-premises network to Amazon EVS over a private dedicated connection. For more information, see [AWS Direct Connect + AWS Transit Gateway](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway.html).
- **AWS Site-to-Site VPN + AWS Transit Gateway** enables you to connect your on-premises network to Amazon EVS over an encrypted IPsec VPN tunnel. For more information, see [AWS Site-to-Site VPN + AWS Transit Gateway](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-transit-gateway-vpn.html).

## HCX public internet connectivity architecture

### HCX networking requirements and DNAT

HCX has specific networking constraints that affect how you set up public internet access.

HCX does not support Destination Network Address Translation (DNAT). Instead, HCX requires the uplink network to be routable with a default gateway IP address.

Amazon EVS VLAN subnets include a default gateway IP address like other VPC subnets. However, these subnets are always private subnets, even when you use CIDR blocks outside the RFC1918 address range.

### Enabling HCX internet connectivity

To enable internet connectivity without DNAT, Amazon EVS uses a specific CIDR configuration approach:

- **Internet routable CIDR requirement:** Amazon EVS requires an internet routable CIDR that matches your HCX VLAN subnet CIDR.
- **IPAM allocation:** Amazon EVS uses a public IPAM-allocated CIDR with a minimum netmask length of /28 as the internet routable CIDR.
- **VPC configuration:** You must manually add the public IPAM-allocated CIDR to your VPC as a secondary VPC CIDR.
- **VLAN subnet deployment:** After IPAM and VPC are configured, you can use the public IPAM-allocated CIDR in the HCX VLAN subnet during Amazon EVS deployment.
- **Elastic IP configuration:** Amazon EVS requires the following configuration:
  - **Allocate Elastic IPs:** You allocate Elastic IPs from the IPAM allocated CIDR. You must allocate at least two Elastic IP addresses (EIPs) from the IPAM pool for the HCX Manager and HCX Interconnect (HCX-IX) appliances. Allocate an additional Elastic IP address for each HCX network appliance that you need to deploy.
  - **Associate with VLAN:** You associate each Elastic IP that you want to use with an HCX appliance to the HCX VLAN subnet. Use the Amazon EVS console or AWS CLI for this association.
  - **Configure gateway address:** The first usable address from the CIDR becomes the gateway address that you configure in your HCX appliance.
  - **Traffic routing:** Traffic for each associated Elastic IP routes directly to the destination HCX appliance with the same IP address, without DNAT.

For steps to configure HCX with internet connectivity for Amazon EVS environment deployment, see [Setting up Amazon Elastic VMware Service](https://docs.aws.amazon.com/evs/latest/userguide/setting-up.html) and [Getting started with Amazon Elastic VMware Service](https://docs.aws.amazon.com/evs/latest/userguide/getting-started.html).

### Operation considerations

- The HCX public VLAN CIDR block must have a /28 netmask length.
- EIPs can be associated with or disassociated from the HCX public VLAN after deployment using the Amazon EVS console or AWS CLI, but they must be from the same IPAM pool.
- Each EIP association has its own unique association ID.
- You can have up to 13 EIPs from a public IPAM pool associated with the /28 HCX public VLAN. You cannot associate the first two EIPs or the last EIP from the public IPAM-allocated CIDR block with the HCX public VLAN subnet. These EIPs are reserved as network, default gateway, and broadcast addresses. Amazon EVS throws a validation error if you attempt to associate these EIPs with the VLAN.

### Security considerations

- Network access control lists (ACLs) still apply to traffic flowing through the HCX public VLAN subnet.
- Security group rules do not apply to traffic on HCX public VLAN subnets. Use network ACLs for traffic control.

:::caution[Important]
If you are connecting over the internet, associating an Elastic IP address with a VLAN provides direct internet access to all resources on that VLAN. Ensure that you have appropriate network access control lists configured to restrict access as needed for your security requirements.
:::

## Associate an Elastic IP address with HCX VLAN

### Prerequisites

Ensure that you have the following:

- Elastic IP address is allocated from the Amazon-owned public IPAM pool.
- Amazon EVS environment is already created.

### Associate EIP using AWS CLI

To associate an Elastic IP address with a VLAN, use the example `associate-eip-to-vlan` command.

- `environment-id` - The ID of your Amazon EVS environment.
- `vlan-name` - Must be `hcx`. Amazon EVS only supports EIP association with the HCX VLAN at this time.
- `allocation-id` - The allocation ID of the Elastic IP address.

```bash
aws evs associate-eip-to-vlan \
  --environment-id "env-xxxxxxxxxx" \
  --vlan-name "hcx" \
  --allocation-id "eipalloc-xxxxxxxxxxxxxxxxx"
```

The command returns details about the VLAN, including the new EIP association:

```json
{
  "vlan": {
    "vlanId": 80,
    "cidr": "198.51.100.0/28",
    "availabilityZone": "us-east-2c",
    "functionName": "hcx",
    "subnetId": "subnet-xxxxxxxxxxxxxxxxx",
    "createdAt": "2025-08-22T23:42:16.200000+00:00",
    "modifiedAt": "2025-08-23T13:42:28.155000+00:00",
    "vlanState": "CREATED",
    "stateDetails": "VLAN successfully created",
    "eipAssociations": [
      {
        "associationId": "eipassoc-xxxxxxxxxxxxxxxxx",
        "allocationId": "eipalloc-xxxxxxxxxxxxxxxxx",
        "ipAddress": "198.51.100.2"
      }
    ],
    "isPublic": true,
    "networkAclId": "acl-xxxxxxxxxxxxxxxxx"
  }
}
```

The `eipAssociations` array shows the new association, including:

- `associationId` - The unique ID for this EIP association, used for disassociation.
- `allocationId` - The allocation ID of the associated Elastic IP address.
- `ipAddress` - The IP address assigned to the VLAN.

Repeat the step to associate additional EIPs. You can have up 13 EIPs associated with the HCX public VLAN.

:::caution[Important]
HCX public internet connectivity fails if you do not associate at least two EIPs from the IPAM pool with an HCX public VLAN subnet.
:::

## Disassociate an Elastic IP address from HCX VLAN

### Prerequisites

Ensure that you have the following:

- Amazon EVS environment is already created.
- EIP is associated with the Amazon EVS environment.

### Disassociate EIP using AWS CLI

To disassociate an Elastic IP address from a VLAN, use the example `disassociate-eip-from-vlan` command.

- `environment-id` - The ID of your Amazon EVS environment.
- `vlan-name` - Must be `hcx`. Amazon EVS only supports EIP association with the HCX VLAN at this time.
- `association-id` - The association ID of the EIP association to remove.

:::caution[Important]
Disassociating EIPs may cause a loss of internet connectivity for appliances that use public VLAN subnets.
:::

```bash
aws evs disassociate-eip-from-vlan \
  --environment-id "env-xxxxxxxxxx" \
  --vlan-name "hcx" \
  --association-id "eipassoc-xxxxxxxxxxxxxxxxx"
```

The command returns details about the VLAN with the EIP association removed:

```json
{
  "vlan": {
    "vlanId": 80,
    "cidr": "198.51.100.0/28",
    "availabilityZone": "us-east-2c",
    "functionName": "hcx",
    "subnetId": "subnet-xxxxxxxxxxxxxxxxx",
    "createdAt": "2025-08-22T23:42:16.200000+00:00",
    "modifiedAt": "2025-08-23T13:48:49.846000+00:00",
    "vlanState": "CREATED",
    "stateDetails": "VLAN successfully created",
    "eipAssociations": [],
    "isPublic": true,
    "networkAclId": "acl-xxxxxxxxxxxxxxxxx"
  }
}
```

The empty `eipAssociations` array confirms that the Elastic IP address has been successfully disassociated from the VLAN.

## Verify HCX configuration

Essential verification steps:

1. **Check HCX VLAN network ACL association** - Use VPC console or AWS CLI to verify VLAN associated with network ACL. For more information, see [Create a network ACL to control Amazon EVS VLAN subnet traffic](https://docs.aws.amazon.com/evs/latest/userguide/getting-started.html#getting-started-create-nacl-vlan-traffic).

2. **Check route table explicit association** - Verify all EVS VLAN subnets explicitly associated with route table (not implicit main route table). For HCX public VLAN, you must have an associated public route table with an internet gateway as the target.

3. **Check EIP associations** - Use `aws evs list-environment-vlans` to verify EIPs associated with HCX VLAN.

4. **Create vSphere distributed port group** - Configure port group with HCX VLAN ID in vSphere Client. For more information, see [Add a Distributed Port Group](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/vsphere-networking-8-0/basic-networking-with-vnetwork-distributed-switches/dvport-groups/add-a-distributed-port-group.html) in the VMware vSphere documentation.

Optional HCX features referenced in full documentation:

- **HCX WAN Optimization** for internet-based migrations to improve performance over high-latency connections.
- **HCX Mobility Optimized Networking (MON)** for selective routing to optimize traffic flows for migrated workloads.

For complete verification and VMware-specific HCX setup, see [VMware HCX Troubleshooting](https://techdocs.broadcom.com/us/en/vmware-cis/hcx/vmware-hcx/4-10/vmware-hcx-user-guide-4-10/vmware-hcx-troubleshooting.html) in the VMware HCX User Guide.
