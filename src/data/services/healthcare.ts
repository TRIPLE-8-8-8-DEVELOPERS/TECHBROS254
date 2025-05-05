
import { Heart, Activity, Building, Stethoscope, Database, LineChart } from "lucide-react";
import { ServiceDetail } from "./types";

export const healthcareServices: ServiceDetail[] = [
  {
    id: "healthcare-solutions",
    slug: "healthcare-solutions",
    title: "Healthcare Technology",
    icon: Heart,
    category: "Healthcare",
    shortDescription: "Specialized digital solutions for healthcare providers, insurers, and life sciences organizations.",
    description: [
      "Our healthcare technology services help organizations across the healthcare ecosystem leverage digital innovation to improve patient outcomes, optimize operations, and reduce costs. We understand the unique challenges and regulatory requirements of the healthcare industry.",
      "From electronic health records (EHR) integration and telemedicine platforms to patient engagement apps and healthcare analytics, we develop secure, compliant solutions that address specific healthcare needs. Our expertise spans across provider, payer, and life sciences sectors.",
      "We prioritize security, compliance, and interoperability in all our healthcare solutions, ensuring that they meet HIPAA requirements and integrate seamlessly with existing healthcare systems. Our goal is to help healthcare organizations deliver better care through technology."
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "HIPAA Compliance",
        description: "Ensuring all solutions meet healthcare privacy and security regulations"
      },
      {
        title: "EHR Integration",
        description: "Seamless connection with electronic health record systems"
      },
      {
        title: "Telehealth Solutions",
        description: "Virtual care platforms for remote patient consultations"
      },
      {
        title: "Patient Engagement",
        description: "Digital tools to enhance patient communication and education"
      },
      {
        title: "Healthcare Analytics",
        description: "Data-driven insights for clinical and operational improvements"
      },
      {
        title: "Medical IoT",
        description: "Connected medical device solutions for remote monitoring"
      }
    ],
    processSteps: [
      {
        title: "Requirements Analysis",
        description: "Understanding specific healthcare workflows and compliance needs."
      },
      {
        title: "Solution Architecture",
        description: "Designing secure, scalable architecture for healthcare applications."
      },
      {
        title: "Compliance Planning",
        description: "Incorporating security measures and regulatory requirements."
      },
      {
        title: "Development & Integration",
        description: "Building solutions that integrate with existing healthcare systems."
      },
      {
        title: "Testing & Validation",
        description: "Rigorous testing for functionality, security, and compliance."
      },
      {
        title: "Deployment & Support",
        description: "Controlled implementation and ongoing maintenance."
      }
    ],
    technologies: ["FHIR", "HL7", "DICOM", "EHR Systems", "Telehealth Platforms", "Healthcare Analytics", "Medical IoT"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1631563019676-dade0dbfd3c5?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software", "ai-machine-learning", "cybersecurity"],
    subcategories: [
      {
        id: "telemedicine-platforms",
        slug: "telemedicine-platforms",
        title: "Telemedicine Platforms",
        description: "Secure, user-friendly virtual care solutions that connect patients with healthcare providers remotely.",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&w=600&q=80",
        features: [
          "HD video consultations with screen sharing capabilities",
          "Electronic prescription management",
          "Secure messaging and file sharing",
          "Patient queue management",
          "Integrated scheduling and appointment reminders",
          "Medical record access during consultations"
        ],
        benefits: [
          "Improved access to healthcare for remote patients",
          "Reduced patient travel time and costs",
          "Decreased no-show rates and cancellations",
          "Efficient provider time management",
          "Lower overhead costs compared to in-person visits",
          "Ability to serve patients during public health emergencies"
        ]
      },
      {
        id: "healthcare-analytics",
        slug: "healthcare-analytics",
        title: "Healthcare Analytics",
        description: "Advanced data analytics solutions that help healthcare organizations improve clinical outcomes and operational efficiency.",
        icon: LineChart,
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&w=600&q=80",
        features: [
          "Clinical outcome analytics and predictive modeling",
          "Population health management dashboards",
          "Operational efficiency and resource utilization analysis",
          "Cost and revenue analytics for financial optimization",
          "Patient journey and experience analytics",
          "Regulatory compliance and quality reporting"
        ],
        benefits: [
          "Data-driven clinical decision making",
          "Early identification of at-risk patients",
          "Optimized staffing and resource allocation",
          "Reduced readmission rates and improved outcomes",
          "Enhanced revenue cycle management",
          "Streamlined regulatory reporting and compliance"
        ]
      },
      {
        id: "medical-iot",
        slug: "medical-iot",
        title: "Medical IoT",
        description: "Connected healthcare device solutions for remote patient monitoring and improved care delivery.",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1551419762-4a3d998f6292?auto=format&w=600&q=80",
        features: [
          "Wearable health monitoring devices integration",
          "Real-time patient vital sign monitoring",
          "Automated alert systems for critical conditions",
          "Medication adherence tracking solutions",
          "Hospital equipment tracking and management",
          "Smart facility management for healthcare settings"
        ],
        benefits: [
          "Continuous monitoring of chronic conditions",
          "Early intervention for deteriorating patients",
          "Reduced hospital readmissions",
          "Enhanced patient independence and quality of life",
          "Improved medication compliance",
          "Operational efficiency through asset tracking"
        ]
      },
      {
        id: "ehr-integration",
        slug: "ehr-integration",
        title: "EHR Integration",
        description: "Seamless integration with electronic health record systems to streamline clinical workflows and data exchange.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&w=600&q=80",
        features: [
          "FHIR and HL7 standards-based integration",
          "Bi-directional data synchronization",
          "Custom API development for legacy systems",
          "Single sign-on implementation",
          "Clinical decision support integration",
          "Custom EHR module development"
        ],
        benefits: [
          "Elimination of duplicate data entry",
          "Comprehensive 360° patient view",
          "Streamlined clinical workflows",
          "Improved data accuracy and consistency",
          "Enhanced care coordination across providers",
          "Reduced administrative burden on clinical staff"
        ]
      },
      {
        id: "hospital-management",
        slug: "hospital-management",
        title: "Hospital Management Systems",
        description: "Comprehensive solutions for managing hospital operations, patient care, and administrative functions.",
        icon: Building,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&w=600&q=80",
        features: [
          "Patient admission, discharge, and transfer management",
          "Billing and revenue cycle management",
          "Inventory and pharmacy management",
          "Staff scheduling and workforce management",
          "Operating room and procedure scheduling",
          "Regulatory compliance and reporting"
        ],
        benefits: [
          "Streamlined hospital operations and workflows",
          "Improved patient throughput and reduced wait times",
          "Enhanced resource utilization and cost control",
          "Better coordination between departments",
          "Data-driven administrative decision making",
          "Consistent regulatory compliance and reporting"
        ]
      }
    ]
  }
];
