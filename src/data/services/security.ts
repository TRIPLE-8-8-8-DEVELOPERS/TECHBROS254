
import { AlertTriangle, FileCheck, Lock, Shield, ShieldCheck, WifiOff, Network, Bug, Fingerprint } from "lucide-react";
import { ServiceDetail } from "./types";

export const securityServices: ServiceDetail[] = [
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: ShieldCheck,
    category: "Security",
    shortDescription: "Comprehensive protection against modern cyber threats with advanced security solutions and 24/7 monitoring.",
    description: [
      "Our enterprise-grade cybersecurity services provide multi-layered protection for your digital assets against evolving threats and vulnerabilities. We offer end-to-end security solutions including advanced threat detection, vulnerability management, security implementation, continuous monitoring, and rapid incident response.",
      "We take a proactive, defense-in-depth approach to cybersecurity, identifying and addressing potential vulnerabilities before they can be exploited. Our security operations center (SOC) monitors your systems 24/7/365, using advanced security information and event management (SIEM) technology to detect and respond to threats in real-time.",
      "From small businesses to large enterprises, we tailor our security solutions to match your specific industry requirements, compliance needs, risk profile, and budget constraints. We focus on implementing robust security measures while maintaining system performance and optimizing the user experience, ensuring that security enhances rather than hinders your business operations."
    ],
    image: "https://images.unsplash.com/photo-1614064548237-096ef3ff452b?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Advanced Threat Protection",
        description: "Next-generation antivirus, EDR, and XDR solutions to identify and neutralize sophisticated threats"
      },
      {
        title: "Vulnerability Management",
        description: "Continuous scanning, prioritization, and remediation of security vulnerabilities"
      },
      {
        title: "Cloud Security",
        description: "Specialized protection for cloud environments, applications, and data"
      },
      {
        title: "24/7 Security Monitoring",
        description: "Around-the-clock threat detection and response from our security operations center"
      },
      {
        title: "Security Awareness Training",
        description: "Comprehensive employee education programs to build a security-focused culture"
      },
      {
        title: "Incident Response",
        description: "Rapid and effective containment, investigation, and recovery from security incidents"
      }
    ],
    processSteps: [
      {
        title: "Security Assessment",
        description: "Comprehensive evaluation of your current security posture, controls, and vulnerabilities."
      },
      {
        title: "Threat Modeling",
        description: "Identifying potential threats specific to your business, data, and systems."
      },
      {
        title: "Security Strategy Development",
        description: "Creating a tailored security roadmap aligned with your business objectives and risk tolerance."
      },
      {
        title: "Implementation",
        description: "Deploying security controls, technologies, and procedures with minimal disruption."
      },
      {
        title: "Testing & Validation",
        description: "Rigorously testing security measures through penetration testing and red team exercises."
      },
      {
        title: "Continuous Monitoring",
        description: "Providing ongoing threat detection, security updates, and incident response capabilities."
      }
    ],
    technologies: [
      "Next-Gen Firewalls", 
      "Endpoint Protection", 
      "SIEM Solutions", 
      "Zero Trust Architecture", 
      "Threat Intelligence", 
      "Data Loss Prevention (DLP)", 
      "Identity & Access Management", 
      "Encryption", 
      "Cloud Security",
      "Managed Detection & Response (MDR)"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1510511336377-1a9d3abcbd3c?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&w=600&q=80"
    ],
    relatedServices: ["cloud-solutions", "it-consulting", "compliance-services"],
    subcategories: [
      {
        id: "network-security",
        slug: "network-security",
        title: "Network Security",
        description: "Comprehensive protection for your network infrastructure using advanced firewalls, intrusion detection systems, and network segmentation to prevent unauthorized access and cyber attacks.",
        icon: Network,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&w=600&q=80",
        features: [
          "Next-generation firewall implementation",
          "Intrusion detection/prevention systems (IDS/IPS)",
          "Network segmentation and micro-segmentation",
          "Secure SD-WAN solutions",
          "VPN and secure remote access",
          "Wireless network security"
        ],
        benefits: [
          "Prevent unauthorized network access",
          "Detect and block malicious traffic in real-time",
          "Reduce attack surface through network segmentation",
          "Secure data in transit across your network",
          "Comprehensive visibility into network traffic",
          "Protection against advanced persistent threats"
        ]
      },
      {
        id: "data-protection",
        slug: "data-protection",
        title: "Data Protection",
        description: "Enterprise-grade data security solutions including encryption, data loss prevention, access controls, and backup strategies to safeguard your organization's most valuable information assets.",
        icon: Lock,
        image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&w=600&q=80",
        features: [
          "Data classification and discovery",
          "Data loss prevention (DLP)",
          "Encryption for data at rest and in transit",
          "Database activity monitoring",
          "Secure backup and disaster recovery",
          "Digital rights management"
        ],
        benefits: [
          "Prevent unauthorized data access and exfiltration",
          "Meet regulatory compliance requirements",
          "Protect intellectual property and trade secrets",
          "Minimize risk of data breaches",
          "Maintain business continuity after incidents",
          "Build customer trust through data protection"
        ]
      },
      {
        id: "security-audits",
        slug: "security-audits",
        title: "Security Audits & Assessments",
        description: "Rigorous evaluation of your security posture through comprehensive audits, penetration testing, and vulnerability assessments to identify weaknesses before attackers can exploit them.",
        icon: FileCheck,
        image: "https://images.unsplash.com/photo-1614064642761-54893b236e90?auto=format&w=600&q=80",
        features: [
          "Vulnerability assessments",
          "Penetration testing (internal and external)",
          "Security architecture reviews",
          "Compliance gap analysis",
          "Social engineering assessments",
          "Security control effectiveness testing"
        ],
        benefits: [
          "Identify security weaknesses before attackers",
          "Validate effectiveness of security controls",
          "Test your security team's detection capabilities",
          "Meet regulatory audit requirements",
          "Prioritize security investments based on risk",
          "Improve overall security posture"
        ]
      },
      {
        id: "incident-response",
        slug: "incident-response",
        title: "Incident Response",
        description: "24/7 security incident detection, containment, and recovery services with forensic investigation capabilities to minimize damage and quickly restore normal operations.",
        icon: AlertTriangle,
        image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?auto=format&w=600&q=80",
        features: [
          "24/7 security monitoring and detection",
          "Rapid incident containment procedures",
          "Forensic investigation capabilities",
          "Malware analysis and remediation",
          "Crisis management support",
          "Post-incident recovery assistance"
        ],
        benefits: [
          "Minimize damage from security breaches",
          "Reduce incident response time",
          "Evidence preservation for potential legal action",
          "Learn from incidents to prevent recurrence",
          "Business continuity during security events",
          "Expert guidance during security crises"
        ]
      },
      {
        id: "endpoint-security",
        slug: "endpoint-security",
        title: "Endpoint Security",
        description: "Next-generation protection for all your endpoints (workstations, laptops, mobile devices) against malware, ransomware, and advanced threats using AI-powered detection and response.",
        icon: Fingerprint,
        image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?auto=format&w=600&q=80",
        features: [
          "Advanced anti-malware protection",
          "Endpoint detection and response (EDR)",
          "Device control and application whitelisting",
          "Host-based firewall and intrusion prevention",
          "Endpoint encryption",
          "Secure remote device management"
        ],
        benefits: [
          "Protect against ransomware and zero-day threats",
          "Rapid identification of compromised endpoints",
          "Control use of removable media and applications",
          "Prevent data loss from endpoints",
          "Centralized visibility and management",
          "Secure remote and hybrid work environments"
        ]
      },
      {
        id: "penetration-testing",
        slug: "penetration-testing",
        title: "Penetration Testing",
        description: "Authorized simulated attacks conducted by ethical hackers to identify and safely exploit vulnerabilities in your systems before malicious actors can discover them.",
        icon: Bug,
        image: "https://images.unsplash.com/photo-1633265486501-b404a9423e1c?auto=format&w=600&q=80",
        features: [
          "Web application penetration testing",
          "Network infrastructure testing",
          "Cloud environment security testing",
          "Mobile application security testing",
          "Social engineering simulations",
          "Red team exercises"
        ],
        benefits: [
          "Discover exploitable vulnerabilities",
          "Test your security team's detection capabilities",
          "Validate effectiveness of security controls",
          "Meet compliance and regulatory requirements",
          "Improve security awareness organization-wide",
          "Prioritize remediation efforts based on risk"
        ]
      },
      {
        id: "ddos-protection",
        slug: "ddos-protection",
        title: "DDoS Protection",
        description: "Advanced defense against distributed denial-of-service attacks with cloud-based mitigation, traffic scrubbing, and 24/7 monitoring to keep your online services available.",
        icon: WifiOff,
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&w=600&q=80",
        features: [
          "Cloud-based DDoS mitigation",
          "Traffic scrubbing and analysis",
          "Volumetric attack protection",
          "Application layer attack defense",
          "Bot detection and mitigation",
          "24/7 DDoS monitoring and response"
        ],
        benefits: [
          "Maintain business continuity during attacks",
          "Protect web applications and APIs",
          "Handle large-scale volumetric attacks",
          "Distinguish legitimate users from attackers",
          "Minimize performance impact during mitigation",
          "Rapid response to evolving attack vectors"
        ]
      }
    ]
  }
];

export default securityServices;
