
import { Cloud, Database, Server, Shield, Workflow } from "lucide-react";
import { ServiceDetail } from "./types";

export const infrastructureServices: ServiceDetail[] = [
  {
    id: 4,
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
        id: 401,
        slug: "aws-services",
        title: "AWS Services",
        description: "Comprehensive Amazon Web Services solutions for scalable, reliable, and secure cloud infrastructure and applications.",
        icon: Cloud,
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&w=600&q=80"
      },
      {
        id: 402,
        slug: "azure-services",
        title: "Azure Services",
        description: "Microsoft Azure consulting and implementation to leverage the full potential of Microsoft's enterprise-grade cloud computing platform.",
        icon: Server,
        image: "https://images.unsplash.com/photo-1614064642639-e398341ae7ea?auto=format&w=600&q=80"
      },
      {
        id: 403,
        slug: "cloud-migration",
        title: "Cloud Migration",
        description: "Seamless transition of your existing applications, databases, and IT infrastructure to optimal cloud environments with minimal disruption.",
        icon: Workflow,
        image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&w=600&q=80"
      },
      {
        id: 404,
        slug: "cloud-security",
        title: "Cloud Security",
        description: "Advanced cloud security solutions that protect your data, applications, and infrastructure from threats while maintaining compliance.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&w=600&q=80"
      },
      {
        id: 405,
        slug: "cloud-databases",
        title: "Cloud Databases",
        description: "Scalable, high-performance database solutions in the cloud for optimal data management, analytics, and business intelligence.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&w=600&q=80"
      }
    ]
  }
];
