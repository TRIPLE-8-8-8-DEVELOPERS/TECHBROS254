
import { AlertTriangle, FileCheck, Lock, Shield, ShieldCheck } from "lucide-react";
import { ServiceDetail } from "./types";

export const securityServices: ServiceDetail[] = [
  {
    id: 8,
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: ShieldCheck,
    category: "Security",
    shortDescription: "Advanced security solutions to safeguard your business assets and data.",
    description: [
      "Our cybersecurity services provide comprehensive protection for your digital assets against evolving threats and vulnerabilities. We offer end-to-end security solutions including risk assessment, security implementation, monitoring, and incident response.",
      "We take a proactive approach to cybersecurity, identifying and addressing potential vulnerabilities before they can be exploited. Our team of security experts stays current with the latest threats and security technologies to ensure your systems remain protected in an ever-changing threat landscape.",
      "From small businesses to large enterprises, we tailor our security solutions to match your specific industry requirements, compliance needs, and risk profile. We focus on implementing robust security measures while maintaining system performance and user experience."
    ],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Security Assessment",
        description: "Comprehensive evaluation of your security posture and potential vulnerabilities"
      },
      {
        title: "Penetration Testing",
        description: "Simulated attacks to identify and address security weaknesses"
      },
      {
        title: "Security Architecture",
        description: "Design and implementation of robust security frameworks"
      },
      {
        title: "Data Protection",
        description: "Encryption and access controls to safeguard sensitive information"
      },
      {
        title: "Compliance Management",
        description: "Ensuring adherence to industry regulations and security standards"
      },
      {
        title: "Incident Response",
        description: "Rapid and effective response to security breaches and threats"
      }
    ],
    processSteps: [
      {
        title: "Security Assessment",
        description: "Evaluating your current security posture and identifying potential risks."
      },
      {
        title: "Threat Modeling",
        description: "Identifying potential threats specific to your business and systems."
      },
      {
        title: "Security Planning",
        description: "Developing a comprehensive security strategy and roadmap."
      },
      {
        title: "Implementation",
        description: "Deploying security controls, tools, and procedures."
      },
      {
        title: "Testing & Validation",
        description: "Verifying the effectiveness of security measures through various tests."
      },
      {
        title: "Monitoring & Management",
        description: "Providing ongoing security monitoring, updates, and incident response."
      }
    ],
    technologies: ["Endpoint Protection", "Network Security", "Cloud Security", "Identity Management", "Encryption", "SIEM", "Vulnerability Scanning", "Penetration Testing"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1510511336377-1a9d3abcbd3c?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&w=600&q=80"
    ],
    relatedServices: ["cloud-solutions", "it-consulting", "compliance-services"],
    subcategories: [
      {
        id: 801,
        slug: "network-security",
        title: "Network Security",
        description: "Protect your organization's network infrastructure against unauthorized access, misuse, and cyber attacks with advanced security solutions.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&w=600&q=80"
      },
      {
        id: 802,
        slug: "data-protection",
        title: "Data Protection",
        description: "Comprehensive data security solutions including encryption, access controls, and backup strategies to safeguard your sensitive information.",
        icon: Lock,
        image: "https://images.unsplash.com/photo-1614064643083-5dc8ed0b6cc0?auto=format&w=600&q=80"
      },
      {
        id: 803,
        slug: "security-audits",
        title: "Security Audits & Assessments",
        description: "Thorough evaluation of your security posture to identify vulnerabilities, compliance gaps, and areas requiring improvement.",
        icon: FileCheck,
        image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?auto=format&w=600&q=80"
      },
      {
        id: 804,
        slug: "incident-response",
        title: "Incident Response",
        description: "Rapid detection, investigation, and recovery from security breaches to minimize damage and restore normal operations quickly.",
        icon: AlertTriangle,
        image: "https://images.unsplash.com/photo-1616066026363-e76972c8a7c7?auto=format&w=600&q=80"
      }
    ]
  }
];
