
export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  description: string[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  mainImage: string;
  images: {
    url: string;
    caption?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    avatar?: string;
  };
  nextProject?: string;
  prevProject?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "financial-app-redesign",
    title: "Financial App Redesign",
    category: "Mobile App",
    client: "GlobalBank Inc.",
    year: "2023",
    role: "UX/UI Design, Mobile Development",
    description: [
      "GlobalBank approached us to completely redesign their aging mobile banking application, which was suffering from poor user experience, outdated design, and limited functionality.",
      "We conducted extensive user research, competitive analysis, and stakeholder interviews to understand pain points and opportunities for improvement. Based on our findings, we created a comprehensive redesign strategy focusing on intuitive navigation, modern aesthetics, and enhanced security features.",
      "The result was a complete transformation of their mobile banking experience, with a clean, modern interface that significantly improved user satisfaction and engagement. The new app featured biometric authentication, personalized financial insights, and streamlined transaction flows."
    ],
    challenge: "The existing banking app had poor user ratings (2.1/5) and high abandonment rates. Users complained about complicated workflows, slow performance, and missing features compared to competitors. The bank was losing customers to more tech-savvy competitors.",
    solution: "We implemented a complete UX overhaul using a user-centered design approach. The new interface used intuitive gestures, personalized dashboards, and progressive disclosure of information. We rebuilt the app using React Native for cross-platform consistency and improved performance.",
    results: [
      "User satisfaction ratings increased from 2.1/5 to 4.7/5 within three months of launch",
      "Mobile banking adoption increased by 34% among existing customers",
      "Transaction volume through the app increased by 47%",
      "Customer support calls related to app usage decreased by 62%"
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Node.js", "Firebase", "Figma"],
    mainImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format", 
        caption: "Dashboard and account overview screens" 
      },
      { 
        url: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&auto=format", 
        caption: "Transaction history and details interface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?w=800&auto=format", 
        caption: "Payment and transfer workflows" 
      },
      { 
        url: "https://images.unsplash.com/photo-1605602562881-468f097040c3?w=800&auto=format", 
        caption: "Financial insights and budgeting features" 
      }
    ],
    testimonial: {
      quote: "TechBros completely transformed our digital banking experience. The redesigned app has not only delighted our existing customers but has become a significant competitive advantage in attracting new clients.",
      author: "Sarah Johnson",
      position: "Chief Digital Officer, GlobalBank Inc.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format"
    },
    nextProject: "e-commerce-platform",
    prevProject: "digital-marketing-dashboard"
  },
  {
    id: 2,
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    category: "Web Development",
    client: "Modern Furnishings Co.",
    year: "2023",
    role: "Full-stack Development, E-commerce Strategy",
    description: [
      "Modern Furnishings Co., a premium furniture retailer, needed to transition from their brick-and-mortar focus to an omnichannel approach with a sophisticated e-commerce platform that would showcase their high-end products and provide a seamless shopping experience.",
      "We developed a custom e-commerce solution that emphasized beautiful product photography, intuitive navigation, and a frictionless checkout process. The platform included advanced features like augmented reality furniture placement, custom furniture configuration, and integrated delivery scheduling.",
      "The platform successfully translated the premium in-store experience to digital, with immersive product presentations and personalized customer journeys that significantly increased online sales and expanded their market reach."
    ],
    challenge: "The client needed to digitize their premium furniture shopping experience without losing the high-touch, customized service their customers expected. Their existing website was brochure-ware with no e-commerce capabilities, and they were losing market share to online-first competitors.",
    solution: "We developed a custom e-commerce platform built on Next.js with a headless CMS for content management. The solution included interactive 3D product models, AR room visualization, custom furniture configuration tools, and integrated white-glove delivery scheduling.",
    results: [
      "Online sales grew to represent 42% of total revenue within the first year",
      "Average order value increased by 28% compared to in-store purchases",
      "Customer acquisition cost decreased by 35% compared to traditional channels",
      "Geographic market expanded from regional to national, with sales in 47 states"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Shopify API", "Three.js", "WebAR"],
    mainImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format", 
        caption: "Homepage and featured collections" 
      },
      { 
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format", 
        caption: "Product detail pages with 3D visualization" 
      },
      { 
        url: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&auto=format", 
        caption: "Furniture customization interface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1561069934-eee225952461?w=800&auto=format", 
        caption: "Checkout and delivery scheduling workflow" 
      }
    ],
    testimonial: {
      quote: "TechBros didn't just build us an online store - they created a digital showroom that captures the essence of our brand and products. The AR features and custom configuration tools have been game-changers for our business.",
      author: "Michael Chen",
      position: "Founder & CEO, Modern Furnishings Co.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format"
    },
    nextProject: "healthcare-management-system",
    prevProject: "financial-app-redesign"
  },
  {
    id: 3,
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    category: "Software Development",
    client: "Integrated Care Network",
    year: "2022",
    role: "Enterprise Software Development, Healthcare IT",
    description: [
      "Integrated Care Network, a growing healthcare provider with multiple facilities, was struggling with fragmented systems that created information silos, administrative inefficiencies, and challenges in providing coordinated patient care across locations.",
      "We developed a comprehensive healthcare management system that integrated patient records, scheduling, billing, inventory management, and reporting into a unified platform. The system was designed with strict adherence to HIPAA regulations and included role-based access controls to ensure data security.",
      "The implementation transformed their operations, creating a connected ecosystem that streamlined workflows, reduced administrative overhead, and improved the quality of patient care through better information access and coordination."
    ],
    challenge: "The client operated five facilities using different legacy systems that couldn't share information effectively. This led to duplicate data entry, billing errors, scheduling conflicts, and challenges in tracking patient care across facilities. Compliance reporting was manual and time-consuming.",
    solution: "We developed a custom, HIPAA-compliant healthcare management system with centralized patient records, integrated scheduling and billing, inventory management, and comprehensive reporting. The system included secure patient portals, provider dashboards, and automated compliance reporting.",
    results: [
      "Administrative staff time spent on data entry reduced by 65%",
      "Billing accuracy improved by 43%, resulting in faster reimbursements",
      "Cross-facility referral processing time decreased from 3 days to same-day",
      "Compliance reporting time reduced from 40 hours/month to 4 hours/month"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "FHIR/HL7", "Docker", "Kubernetes", "Azure Cloud"],
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format", 
        caption: "Patient management dashboard" 
      },
      { 
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format", 
        caption: "Scheduling and resource allocation interface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format", 
        caption: "Clinical documentation system" 
      },
      { 
        url: "https://images.unsplash.com/photo-1537434096881-12ecd09b818e?w=800&auto=format", 
        caption: "Analytics and reporting module" 
      }
    ],
    testimonial: {
      quote: "The integrated system developed by TechBros has fundamentally changed how we operate. Our staff can now focus on patient care instead of paperwork, and the improved coordination between our facilities has significantly enhanced the quality of care we provide.",
      author: "Dr. Lisa Rivera",
      position: "Medical Director, Integrated Care Network",
      avatar: "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=200&auto=format"
    },
    nextProject: "real-time-analytics-dashboard",
    prevProject: "e-commerce-platform"
  },
  {
    id: 4,
    slug: "real-time-analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    category: "Data Visualization",
    client: "AdMetrics",
    year: "2022",
    role: "Data Engineering, Frontend Development",
    description: [
      "AdMetrics, a digital advertising agency, needed a comprehensive solution to monitor campaign performance across multiple platforms in real-time and provide their clients with accessible, actionable insights from complex advertising data.",
      "We developed a sophisticated analytics dashboard that aggregated data from multiple advertising platforms (Google Ads, Facebook, Instagram, LinkedIn, TikTok) and visualized key performance indicators in an intuitive interface. The system processed millions of data points hourly to provide real-time performance metrics.",
      "The dashboard became a powerful client-facing tool that differentiated AdMetrics from competitors, with interactive visualizations, custom reporting, and automated alerts that improved campaign optimization and client satisfaction."
    ],
    challenge: "The client managed campaigns across multiple platforms, each with its own reporting interface. Analysts spent 15+ hours per week manually compiling data for client reports. Real-time performance monitoring was impossible, leading to delayed optimizations and missed opportunities.",
    solution: "We built a real-time analytics platform using a modern data stack that integrated with advertising APIs, processed and normalized the data, and presented it through an interactive dashboard. The system included anomaly detection, trend analysis, and automated reporting features.",
    results: [
      "Reduced reporting preparation time by 93% (from 15 hours to 1 hour per week)",
      "Improved campaign performance by enabling optimizations within hours instead of days",
      "Increased client retention rate from 76% to 92% year-over-year",
      "Enabled agency to handle 40% more campaigns without increasing analyst headcount"
    ],
    technologies: ["Python", "Airflow", "React", "Redux", "D3.js", "BigQuery", "Snowflake", "WebSockets", "Kafka"],
    mainImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format", 
        caption: "Multi-channel performance overview" 
      },
      { 
        url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format", 
        caption: "Real-time campaign analytics" 
      },
      { 
        url: "https://images.unsplash.com/photo-1510511336377-1a9d3abcbd3c?w=800&auto=format", 
        caption: "Custom client reporting module" 
      },
      { 
        url: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=800&auto=format", 
        caption: "Anomaly detection and alerts interface" 
      }
    ],
    testimonial: {
      quote: "The real-time dashboard TechBros built has been transformative for our agency. Not only has it dramatically improved our internal efficiency, but it's also become a powerful sales tool. Clients love the transparency and insights it provides.",
      author: "David Park",
      position: "CEO, AdMetrics",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format"
    },
    nextProject: "supply-chain-management",
    prevProject: "healthcare-management-system"
  },
  {
    id: 5,
    slug: "supply-chain-management",
    title: "Supply Chain Management",
    category: "Enterprise Solution",
    client: "Global Logistics International",
    year: "2021",
    role: "Enterprise Software Development, Supply Chain Consulting",
    description: [
      "Global Logistics International, a multinational logistics provider, needed to modernize their supply chain management systems to improve visibility, reduce delays, and enhance decision-making across their complex global operations.",
      "We developed an end-to-end supply chain management platform that provided real-time tracking, predictive analytics, automated documentation, and integration with partner systems. The solution incorporated IoT sensors for physical asset tracking, blockchain for secure documentation, and AI for demand forecasting and route optimization.",
      "The implementation transformed their operations, providing unprecedented visibility across the supply chain, reducing delays and exceptions, and enabling data-driven decision making that significantly improved efficiency and customer satisfaction."
    ],
    challenge: "The client managed a complex global supply chain with limited visibility between stages, resulting in inventory discrepancies, shipping delays, and excessive manual coordination. Legacy systems couldn't integrate with partner platforms, creating information gaps and compliance risks.",
    solution: "We developed an integrated supply chain platform with IoT-enabled tracking, blockchain-secured documentation, and AI-powered forecasting and optimization. The system provided end-to-end visibility, automated customs documentation, and predictive analytics for proactive exception management.",
    results: [
      "Reduced order-to-delivery time by 23% through improved coordination and proactive exception management",
      "Decreased inventory carrying costs by 17% through better forecasting and visibility",
      "Reduced customs documentation errors by 94%, minimizing clearance delays",
      "Improved on-time delivery rate from 82% to 96%, enhancing customer satisfaction"
    ],
    technologies: ["Java", "Spring", "React", "GraphQL", "MongoDB", "Kubernetes", "IoT", "Blockchain (Hyperledger)", "TensorFlow"],
    mainImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&auto=format", 
        caption: "Global shipment tracking dashboard" 
      },
      { 
        url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format", 
        caption: "Inventory management and forecasting" 
      },
      { 
        url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format", 
        caption: "Route optimization and logistics planning" 
      },
      { 
        url: "https://images.unsplash.com/photo-1565935027310-546b088a71d1?w=800&auto=format", 
        caption: "Blockchain-secured documentation system" 
      }
    ],
    testimonial: {
      quote: "TechBros delivered a solution that has truly transformed our operations. The end-to-end visibility and predictive capabilities have given us a competitive edge in an industry where timing and reliability are everything.",
      author: "James Rodriguez",
      position: "COO, Global Logistics International",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format"
    },
    nextProject: "secure-banking-portal",
    prevProject: "real-time-analytics-dashboard"
  },
  {
    id: 6,
    slug: "secure-banking-portal",
    title: "Secure Banking Portal",
    category: "Cybersecurity",
    client: "First National Trust",
    year: "2021",
    role: "Security Architecture, Full-stack Development",
    description: [
      "First National Trust needed to replace their outdated online banking portal with a modern, secure platform that would protect sensitive financial data while providing an intuitive user experience for their increasingly digital customer base.",
      "We developed a state-of-the-art banking portal with multi-layered security architecture, including advanced encryption, multi-factor authentication, behavioral analytics, and real-time fraud detection. The system was designed with security-first principles while maintaining ease of use.",
      "The new portal significantly enhanced the bank's digital capabilities while protecting customer data through multiple security layers. The solution successfully balanced rigorous security measures with an intuitive user experience, resulting in high adoption rates and positive feedback."
    ],
    challenge: "The client's legacy banking portal had security vulnerabilities and usability issues. They needed a solution that would meet strict regulatory requirements (PCI-DSS, FFIEC) and protect against evolving cyber threats while providing a modern, user-friendly experience.",
    solution: "We architected a secure banking portal with defense-in-depth approach: end-to-end encryption, risk-based authentication, continuous transaction monitoring, and secure API architecture. The system included behavioral biometrics, anomaly detection, and secure communication channels.",
    results: [
      "Achieved zero security breaches since implementation (2+ years)",
      "Reduced fraudulent transaction attempts by 76% through enhanced detection",
      "Increased digital banking adoption by 34% among previous non-digital customers",
      "Passed regulatory security audits with zero high-priority findings"
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL", "AWS", "OAuth 2.0", "OpenID Connect", "SHA-256", "AES-256", "Behavioral Analytics"],
    mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format", 
        caption: "Secure login and authentication system" 
      },
      { 
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format", 
        caption: "Account management dashboard" 
      },
      { 
        url: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&auto=format", 
        caption: "Secure transaction processing interface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&auto=format", 
        caption: "Security settings and monitoring" 
      }
    ],
    testimonial: {
      quote: "Security was our primary concern in this project, and TechBros delivered a solution that exceeded our expectations. The multi-layered security approach gives us confidence, while our customers appreciate the intuitive interface.",
      author: "Robert Chambers",
      position: "CISO, First National Trust",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format"
    },
    nextProject: "financial-app-redesign",
    prevProject: "supply-chain-management"
  }
];
