
import { Cloud, Database, Server, Shield, Workflow } from "lucide-react";
import { ServiceDetail } from "./types";

export const infrastructureServices: ServiceDetail[] = [
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: Cloud,
    category: "Infrastructure",
    shortDescription: "Secure cloud integration, migration, and optimization services for your business.",
    description: [
      "Our cloud solutions help businesses leverage the power of cloud computing for improved scalability, cost-efficiency, and operational agility. We offer comprehensive cloud services including migration, integration, optimization, and managed cloud services tailored to your specific needs.",
      "Our expertise spans across major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. We help you select the right cloud infrastructure and services based on your business requirements, security needs, and budget considerations.",
      "From simple cloud storage solutions to complex multi-cloud architectures, we ensure a smooth transition to the cloud with minimal disruption to your operations. Our focus is on creating secure, scalable, and cost-effective cloud environments that drive innovation and business growth."
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Cloud Migration",
        description: "Smooth transition of applications and data to the cloud with minimal disruption"
      },
      {
        title: "Multi-Cloud Strategy",
        description: "Optimized use of multiple cloud platforms based on specific requirements"
      },
      {
        title: "Cloud-Native Development",
        description: "Applications built specifically to leverage cloud capabilities"
      },
      {
        title: "Cost Optimization",
        description: "Strategic resource allocation to maximize ROI from cloud investments"
      },
      {
        title: "Security & Compliance",
        description: "Robust security measures ensuring data protection and regulatory compliance"
      },
      {
        title: "Disaster Recovery",
        description: "Comprehensive backup and recovery solutions for business continuity"
      }
    ],
    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating your current infrastructure and defining cloud migration objectives."
      },
      {
        title: "Strategy Development",
        description: "Creating a detailed cloud roadmap tailored to your business needs."
      },
      {
        title: "Architecture Design",
        description: "Designing optimal cloud architecture for performance, security, and cost-efficiency."
      },
      {
        title: "Migration & Implementation",
        description: "Executing the migration with minimal disruption to ongoing operations."
      },
      {
        title: "Testing & Optimization",
        description: "Ensuring all systems function correctly and are optimized for the cloud environment."
      },
      {
        title: "Ongoing Management",
        description: "Providing continuous monitoring, maintenance, and optimization services."
      }
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CloudFormation", "Lambda", "S3", "EC2"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1451187522-43269d4ea984?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1504639725-87deedd944c3?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software-development", "cybersecurity", "it-consulting"],
    subcategories: [
      {
        id: "aws-services",
        slug: "aws-services",
        title: "AWS Services",
        description: "Comprehensive Amazon Web Services solutions for scalable, reliable, and secure cloud infrastructure and applications.",
        icon: Cloud,
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&w=600&q=80",
        features: [
          "EC2 instance deployment and management",
          "S3 storage implementation and optimization",
          "RDS database configuration and administration",
          "Lambda serverless function development",
          "EKS/ECS container orchestration",
          "CloudFormation infrastructure as code"
        ],
        benefits: [
          "Scalable infrastructure that grows with your business",
          "Pay-as-you-go pricing for cost optimization",
          "Global reach through AWS regions and edge locations",
          "High availability and fault tolerance",
          "Enterprise-grade security and compliance",
          "Reduced IT overhead with managed services"
        ]
      },
      {
        id: "azure-services",
        slug: "azure-services",
        title: "Azure Services",
        description: "Microsoft Azure consulting and implementation to leverage the full potential of Microsoft's enterprise-grade cloud computing platform.",
        icon: Server,
        image: "https://images.unsplash.com/photo-1614064642639-e398341ae7ea?auto=format&w=600&q=80",
        features: [
          "Azure Virtual Machines deployment and scaling",
          "Azure App Service for web applications",
          "Azure SQL Database implementation",
          "Azure Functions serverless computing",
          "Azure Active Directory integration",
          "Azure DevOps implementation"
        ],
        benefits: [
          "Seamless integration with Microsoft ecosystem",
          "Hybrid cloud capabilities with Azure Arc",
          "Enterprise-level security and compliance",
          "Advanced analytics and AI capabilities",
          "Simplified licensing through existing Microsoft agreements",
          "Global infrastructure with regional data residency options"
        ]
      },
      {
        id: "cloud-migration",
        slug: "cloud-migration",
        title: "Cloud Migration",
        description: "Seamless transition of your existing applications, databases, and IT infrastructure to optimal cloud environments with minimal disruption.",
        icon: Workflow,
        image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&w=600&q=80",
        features: [
          "Discovery and assessment of existing infrastructure",
          "Workload analysis and cloud readiness evaluation",
          "Migration strategy development (rehost, refactor, rearchitect)",
          "Data migration and validation",
          "Cut-over planning and execution",
          "Post-migration optimization"
        ],
        benefits: [
          "Reduced capital expenditure on hardware",
          "Improved scalability and business agility",
          "Enhanced disaster recovery capabilities",
          "Modernized infrastructure and applications",
          "Minimized disruption during transition",
          "Future-proofed technology stack"
        ]
      },
      {
        id: "cloud-security",
        slug: "cloud-security",
        title: "Cloud Security",
        description: "Advanced cloud security solutions that protect your data, applications, and infrastructure from threats while maintaining compliance.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&w=600&q=80",
        features: [
          "Identity and access management (IAM)",
          "Cloud network security and micro-segmentation",
          "Data encryption for storage and transit",
          "Security assessment and vulnerability scanning",
          "Compliance monitoring and reporting",
          "Security automation and orchestration"
        ],
        benefits: [
          "Comprehensive protection of cloud workloads",
          "Regulatory compliance for industry standards",
          "Reduced risk of data breaches and exfiltration",
          "Consistent security posture across environments",
          "Real-time threat detection and remediation",
          "Scalable security that grows with your cloud infrastructure"
        ]
      },
      {
        id: "cloud-databases",
        slug: "cloud-databases",
        title: "Cloud Databases",
        description: "Scalable, high-performance database solutions in the cloud for optimal data management, analytics, and business intelligence.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&w=600&q=80",
        features: [
          "Relational database configuration and optimization",
          "NoSQL database implementation for specialized workloads",
          "Data warehousing solutions for analytics",
          "Database migration and modernization",
          "High availability and disaster recovery setup",
          "Performance monitoring and tuning"
        ],
        benefits: [
          "Elastic scaling to handle varying workloads",
          "Reduced administrative overhead with managed services",
          "Improved availability and reliability",
          "Cost optimization through right-sizing",
          "Enhanced security and compliance",
          "Simplified backup and disaster recovery"
        ]
      }
    ]
  }
];
