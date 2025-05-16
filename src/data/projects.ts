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
        url: "https://images.unsplash.com/photo-1537434096881-12ecd09b8187?w=800&auto=format", 
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
  },
  {
    id: 7,
    slug: "ai-powered-chatbot",
    title: "AI-Powered Customer Service Chatbot",
    category: "AI & Machine Learning",
    client: "RetailX",
    year: "2023",
    role: "AI Development, Natural Language Processing",
    description: [
      "RetailX, a major e-commerce retailer, wanted to enhance customer support efficiency while maintaining a personalized customer experience. They needed a solution that could handle common inquiries 24/7 while seamlessly escalating complex issues to human agents.",
      "We developed an AI-powered chatbot using advanced natural language processing and machine learning techniques. The chatbot was designed to understand context, maintain conversation history, and learn from interactions to continuously improve its responses.",
      "The solution integrated with their existing CRM and order management systems, allowing customers to check order status, initiate returns, and get product recommendations without human intervention."
    ],
    challenge: "The client was experiencing a 43% increase in customer service inquiries due to business growth, but struggled to scale their support team effectively. Customer wait times were increasing, and satisfaction scores were declining. They needed a scalable solution that maintained their reputation for excellent customer service.",
    solution: "We built a custom, AI-powered chatbot using GPT-4 for natural language understanding, with fine-tuning on retail-specific data. The system was integrated with their order management and CRM systems, allowing for personalized customer interactions with real-time data access.",
    results: [
      "Reduced first response time from 15 minutes to instant for 68% of inquiries",
      "Decreased human agent load by 54%, allowing them to focus on complex issues",
      "Improved customer satisfaction scores from 72% to 89% for chat support",
      "Generated $2.3M in additional sales through AI-powered product recommendations"
    ],
    technologies: ["Python", "TensorFlow", "GPT-4", "React", "Node.js", "Redis", "Docker", "AWS Lambda"],
    mainImage: "https://images.unsplash.com/photo-1581092921461-7d6720245ef2?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=800&auto=format", 
        caption: "Chatbot interface on various devices" 
      },
      { 
        url: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&auto=format", 
        caption: "Agent handoff workflow" 
      },
      { 
        url: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&auto=format", 
        caption: "Analytics dashboard" 
      },
      { 
        url: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=800&auto=format", 
        caption: "Training and improvement workflow" 
      }
    ],
    testimonial: {
      quote: "The AI chatbot TechBros developed has transformed our customer service operations. Not only has it significantly reduced wait times and operational costs, but it's also contributed directly to our bottom line through smart product recommendations.",
      author: "Jennifer Morris",
      position: "VP of Customer Experience, RetailX",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format"
    },
    nextProject: "iot-smart-manufacturing",
    prevProject: "secure-banking-portal"
  },
  {
    id: 8,
    slug: "iot-smart-manufacturing",
    title: "IoT Smart Manufacturing Platform",
    category: "Software Development",
    client: "Precision Industries",
    year: "2023",
    role: "IoT Development, Industrial Software Engineering",
    description: [
      "Precision Industries, a manufacturer of aerospace components, needed to modernize their factory operations to improve efficiency, reduce waste, and maintain their competitive edge in a highly regulated industry.",
      "We developed a comprehensive IoT platform that connected their manufacturing equipment, tracked materials, monitored environmental conditions, and provided real-time analytics on production efficiency and quality control.",
      "The system leveraged edge computing for real-time monitoring and decision-making, with cloud integration for analytics, reporting, and digital twin simulation of manufacturing processes."
    ],
    challenge: "The client operated a high-precision manufacturing facility with legacy equipment that lacked connectivity. They experienced 8% production waste and had limited visibility into bottlenecks. They needed to modernize without disrupting ongoing production or compromising quality in their highly regulated industry.",
    solution: "We designed a multi-layered IoT platform with non-invasive sensors retrofitted to existing equipment, edge gateways for real-time monitoring, and a cloud platform for analytics. The system included predictive maintenance, material tracking, and quality control automation with digital twin modeling.",
    results: [
      "Reduced manufacturing waste by 62%, saving $3.1M annually",
      "Decreased unplanned equipment downtime by 78%",
      "Improved production throughput by 24% without additional capital investment",
      "Enhanced regulatory compliance with automated documentation and traceability"
    ],
    technologies: ["Python", "C++", "MQTT", "Node.js", "React", "PostgreSQL", "TensorFlow", "Azure IoT Hub", "Docker"],
    mainImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1582828633619-4ed05228c006?w=800&auto=format", 
        caption: "Factory floor monitoring system" 
      },
      { 
        url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format", 
        caption: "Equipment monitoring interface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?w=800&auto=format", 
        caption: "Quality control dashboard" 
      },
      { 
        url: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=800&auto=format", 
        caption: "Digital twin simulation" 
      }
    ],
    testimonial: {
      quote: "The IoT platform developed by TechBros has revolutionized our manufacturing operations. We've not only improved efficiency and reduced waste, but we've gained unprecedented visibility into our processes that helps us continuously improve.",
      author: "Richard Stephens",
      position: "Chief Operations Officer, Precision Industries",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format"
    },
    nextProject: "vr-training-platform",
    prevProject: "ai-powered-chatbot"
  },
  {
    id: 9,
    slug: "vr-training-platform",
    title: "VR Training Platform",
    category: "Software Development",
    client: "SafetyFirst Industries",
    year: "2022",
    role: "VR Development, Learning Management Systems",
    description: [
      "SafetyFirst Industries, a company specializing in industrial safety training, wanted to transform their traditional training programs into immersive virtual reality experiences to improve engagement, knowledge retention, and practical skill development.",
      "We developed a comprehensive VR training platform that simulated high-risk industrial environments and scenarios, allowing trainees to practice emergency responses and safety procedures in a realistic but completely safe virtual environment.",
      "The platform included a content management system for creating and modifying scenarios, a learning management system for tracking progress and certification, and analytics for measuring effectiveness and identifying areas for improvement."
    ],
    challenge: "The client's traditional training methods were costly, logistically complex, and had knowledge retention issues. They needed a scalable solution that could realistically simulate dangerous scenarios without risk, while providing objective assessment of trainee performance and compliance tracking.",
    solution: "We developed a VR training platform using Unity3D with high-fidelity scenarios for hazardous environments. The platform included haptic feedback for equipment operation, natural interaction patterns, and realistic consequence simulation, with an integrated LMS for tracking and certification.",
    results: [
      "Improved knowledge retention by 78% compared to traditional methods",
      "Reduced training time by 47% while improving competency scores",
      "Decreased training costs by 64% through reduced equipment and facility needs",
      "Enabled the client to expand their training business to new geographic markets"
    ],
    technologies: ["Unity3D", "C#", "Oculus SDK", "WebGL", "Node.js", "MongoDB", "WebRTC", "AWS"],
    mainImage: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=1200&auto=format",
    images: [
      { 
        url: "https://images.unsplash.com/photo-1626387346567-68d9613822b1?w=800&auto=format", 
        caption: "VR training in progress" 
      },
      { 
        url: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&auto=format", 
        caption: "Scenario creation interface" 
      },
      { 
        url: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?w=800&auto=format", 
        caption: "Training analytics dashboard" 
      },
      { 
        url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format", 
        caption: "VR equipment setup" 
      }
    ],
    testimonial: {
      quote: "The VR training platform has completely transformed how we deliver safety training. Our clients are seeing dramatic improvements in knowledge retention and practical skills, while significantly reducing their training costs and time-to-competency.",
      author: "Amanda Torres",
      position: "Training Director, SafetyFirst Industries",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format"
    },
    nextProject: "smart-agriculture-platform",
    prevProject: "iot-smart-manufacturing"
  },
  {
    id: 10,
    slug: "smart-agriculture-platform",
    title: "Smart Agriculture Platform",
    category: "IoT & Data Science",
    client: "AgroTech Solutions",
    year: "2024",
    role: "IoT Development, Data Analytics",
    description: [
      "AgroTech Solutions wanted to help farmers optimize crop yields and resource usage by leveraging IoT sensors and data analytics.",
      "We built a platform that collects real-time data from soil sensors, weather stations, and drones, providing actionable insights for irrigation, fertilization, and pest control.",
      "The system features a mobile dashboard for farmers, automated alerts, and AI-driven recommendations to maximize productivity and sustainability."
    ],
    challenge: "Farmers lacked real-time visibility into field conditions, leading to inefficient resource use and lower yields. They needed a scalable, easy-to-use solution for data-driven agriculture.",
    solution: "We deployed a network of IoT sensors and integrated them with a cloud-based analytics platform. The solution provides predictive analytics, automated irrigation control, and mobile access for farmers.",
    results: [
      "Increased crop yields by 22% in the first season",
      "Reduced water usage by 31% through smart irrigation",
      "Decreased fertilizer costs by 18%",
      "Enabled early detection of pest outbreaks, reducing crop loss"
    ],
    technologies: ["IoT Sensors", "Python", "Node.js", "React Native", "AWS", "TensorFlow", "Django"],
    mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "IoT sensors in the field" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format", caption: "Mobile dashboard for farmers" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Drone-based crop monitoring" },
      { url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&auto=format", caption: "Automated irrigation system" }
    ],
    testimonial: {
      quote: "The smart agriculture platform has empowered our farmers to make data-driven decisions, resulting in higher yields and more sustainable practices.",
      author: "Samuel Kimani",
      position: "CEO, AgroTech Solutions",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "blockchain-supply-chain",
    prevProject: "vr-training-platform"
  },
  {
    id: 11,
    slug: "blockchain-supply-chain",
    title: "Blockchain Supply Chain Transparency",
    category: "Blockchain & Logistics",
    client: "TransGlobal Logistics",
    year: "2024",
    role: "Blockchain Development, Supply Chain Consulting",
    description: [
      "TransGlobal Logistics needed to improve transparency and traceability in their international supply chain.",
      "We implemented a blockchain-based system that records every transaction and shipment event, providing an immutable audit trail accessible to all stakeholders.",
      "The platform includes real-time tracking, automated compliance checks, and secure document management."
    ],
    challenge: "The client faced frequent disputes and delays due to lack of transparency and trust between supply chain partners.",
    solution: "We built a Hyperledger-based blockchain platform with smart contracts for automated verification and dispute resolution, integrated with IoT tracking devices.",
    results: [
      "Reduced shipment disputes by 87%",
      "Improved customs clearance speed by 29%",
      "Increased partner trust and collaboration",
      "Enabled end-to-end traceability for high-value goods"
    ],
    technologies: ["Hyperledger", "Node.js", "React", "IoT", "AWS", "GraphQL"],
    mainImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=800&auto=format", caption: "Blockchain shipment tracking" },
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format", caption: "Supply chain dashboard" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "Smart contract verification" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Secure document management" }
    ],
    testimonial: {
      quote: "The blockchain platform has brought unprecedented transparency to our supply chain, reducing disputes and building trust with our partners.",
      author: "Linda Mensah",
      position: "COO, TransGlobal Logistics",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format"
    },
    nextProject: "financial-app-redesign",
    prevProject: "smart-agriculture-platform"
  },
  {
    id: 12,
    slug: "edtech-learning-platform",
    title: "EdTech Learning Platform",
    category: "Education Technology",
    client: "BrightFuture Academy",
    year: "2024",
    role: "Full-stack Development, UX/UI Design",
    description: [
      "BrightFuture Academy wanted to create an interactive online learning platform for K-12 students, featuring adaptive learning paths and gamified assessments.",
      "We developed a web and mobile platform with personalized dashboards, real-time progress tracking, and integrated video lessons.",
      "The system supports teacher-student messaging, parental monitoring, and AI-driven content recommendations."
    ],
    challenge: "The client needed a scalable, engaging solution to support remote and hybrid learning, with robust analytics for teachers and parents.",
    solution: "We built a React/Node.js platform with a custom LMS, adaptive quizzes, and gamification features, deployed on AWS for scalability.",
    results: [
      "Student engagement increased by 41%",
      "Test scores improved by 19% after 6 months",
      "Teacher workload for grading reduced by 32%",
      "Parental satisfaction scores rose to 92%"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript", "Socket.io", "Figma"],
    mainImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&auto=format", caption: "Student dashboard" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Interactive lesson interface" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Gamified quiz results" },
      { url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&auto=format", caption: "Teacher analytics dashboard" }
    ],
    testimonial: {
      quote: "The EdTech platform has made learning fun and effective for our students, and the analytics tools are invaluable for our teachers and parents.",
      author: "Grace Njeri",
      position: "Principal, BrightFuture Academy",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "energy-management-system",
    prevProject: "blockchain-supply-chain"
  },
  {
    id: 13,
    slug: "energy-management-system",
    title: "AI Energy Management System",
    category: "AI & Sustainability",
    client: "EcoGrid Solutions",
    year: "2024",
    role: "AI Development, IoT Integration",
    description: [
      "EcoGrid Solutions needed a smart system to optimize energy consumption in commercial buildings using AI and IoT sensors.",
      "We built a platform that monitors real-time energy usage, predicts peak demand, and automates HVAC and lighting controls for efficiency.",
      "The dashboard provides actionable insights, cost savings reports, and sustainability metrics for building managers."
    ],
    challenge: "Clients struggled with high energy costs and lacked visibility into usage patterns across multiple facilities.",
    solution: "We integrated IoT sensors with a cloud-based AI engine for predictive analytics and automated control, accessible via a web dashboard.",
    results: [
      "Reduced energy costs by 27% in the first year",
      "Lowered carbon footprint by 18%",
      "Improved occupant comfort and productivity",
      "Enabled compliance with new sustainability regulations"
    ],
    technologies: ["Python", "TensorFlow", "IoT", "React", "Node.js", "AWS", "Grafana"],
    mainImage: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?w=800&auto=format", caption: "Energy usage dashboard" },
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format", caption: "IoT sensors in commercial building" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format", caption: "Automated HVAC control" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Sustainability analytics" }
    ],
    testimonial: {
      quote: "The AI energy management system has delivered significant cost savings and helped us meet our sustainability goals.",
      author: "Peter Otieno",
      position: "CTO, EcoGrid Solutions",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "telemedicine-app",
    prevProject: "edtech-learning-platform"
  },
  {
    id: 14,
    slug: "telemedicine-app",
    title: "Telemedicine & Virtual Care App",
    category: "Healthcare Technology",
    client: "CareConnect Health",
    year: "2024",
    role: "Mobile Development, Cloud Integration",
    description: [
      "CareConnect Health wanted to expand access to healthcare with a secure, user-friendly telemedicine app for patients and providers.",
      "We developed a HIPAA-compliant mobile app with video consultations, appointment scheduling, e-prescriptions, and integrated health records.",
      "The platform supports real-time chat, push notifications, and analytics for providers to track patient outcomes."
    ],
    challenge: "The client needed a scalable, secure solution to support remote care and reduce in-person visits during and after the pandemic.",
    solution: "We built a React Native app with secure video, encrypted messaging, and cloud-based health record integration, deployed on AWS.",
    results: [
      "Increased patient access to care by 38%",
      "Reduced no-show rates by 21%",
      "Improved provider efficiency and satisfaction",
      "Enabled remote monitoring for chronic conditions"
    ],
    technologies: ["React Native", "Node.js", "AWS", "WebRTC", "TypeScript", "PostgreSQL", "Twilio"],
    mainImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&auto=format", caption: "Telemedicine video call" },
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "Appointment scheduling interface" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format", caption: "E-prescription workflow" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Provider analytics dashboard" }
    ],
    testimonial: {
      quote: "The telemedicine app has made healthcare more accessible and convenient for our patients, while streamlining workflows for our providers.",
      author: "Dr. Amina Hassan",
      position: "Medical Director, CareConnect Health",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "smart-retail-analytics",
    prevProject: "energy-management-system"
  },
  {
    id: 15,
    slug: "smart-retail-analytics",
    title: "Smart Retail Analytics Platform",
    category: "AI & Data Science",
    client: "Retail Insights Ltd.",
    year: "2024",
    role: "AI Development, Data Visualization",
    description: [
      "Retail Insights Ltd. wanted to help brick-and-mortar stores compete with e-commerce by leveraging in-store analytics and AI.",
      "We built a platform that uses computer vision and IoT sensors to track customer movement, optimize store layouts, and provide real-time sales insights.",
      "The dashboard offers predictive analytics, heatmaps, and automated inventory alerts for store managers."
    ],
    challenge: "Traditional retail lacked actionable data on customer behavior, leading to missed sales opportunities and inefficient layouts.",
    solution: "We deployed edge AI cameras and sensors, integrated with a cloud analytics platform, to deliver real-time insights and recommendations.",
    results: [
      "Increased sales conversion by 17%",
      "Reduced out-of-stock incidents by 28%",
      "Improved customer dwell time by 22%",
      "Enabled data-driven merchandising decisions"
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "IoT", "AWS", "OpenCV"],
    mainImage: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=800&auto=format", caption: "In-store analytics dashboard" },
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format", caption: "Customer heatmap visualization" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "AI-powered inventory alerts" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Store layout optimization" }
    ],
    testimonial: {
      quote: "The analytics platform has given us a competitive edge and transformed how we manage our stores.",
      author: "Emily Carter",
      position: "COO, Retail Insights Ltd.",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "remote-work-platform",
    prevProject: "telemedicine-app"
  },
  {
    id: 16,
    slug: "remote-work-platform",
    title: "Remote Work Collaboration Platform",
    category: "Software Development",
    client: "CollabSuite",
    year: "2024",
    role: "Full-stack Development, Cloud Integration",
    description: [
      "CollabSuite needed a secure, scalable platform for distributed teams to collaborate in real time.",
      "We built a web and mobile app with video conferencing, document sharing, task management, and integrated chat.",
      "The platform features end-to-end encryption, SSO, and integrations with popular productivity tools."
    ],
    challenge: "Remote teams struggled with fragmented tools and security concerns, impacting productivity.",
    solution: "We developed a unified platform with robust security, seamless integrations, and a user-friendly interface.",
    results: [
      "Improved team productivity by 31%",
      "Reduced IT overhead by 24%",
      "Increased user adoption across global offices",
      "Enhanced data security and compliance"
    ],
    technologies: ["React", "Node.js", "WebRTC", "AWS", "TypeScript", "OAuth 2.0", "MongoDB"],
    mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format", caption: "Team video call interface" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format", caption: "Document collaboration tools" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Task management dashboard" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Integrated chat and notifications" }
    ],
    testimonial: {
      quote: "CollabSuite has unified our remote teams and made collaboration seamless, secure, and enjoyable.",
      author: "Rajesh Patel",
      position: "CTO, CollabSuite",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "smart-city-dashboard",
    prevProject: "smart-retail-analytics"
  },
  {
    id: 17,
    slug: "smart-city-dashboard",
    title: "Smart City IoT Dashboard",
    category: "IoT & Data Visualization",
    client: "City of Nairobi",
    year: "2024",
    role: "IoT Integration, Data Engineering",
    description: [
      "The City of Nairobi wanted a centralized dashboard to monitor and manage urban infrastructure in real time.",
      "We integrated data from traffic sensors, environmental monitors, and public safety systems into a single platform.",
      "The dashboard provides live maps, alerts, and analytics for city officials and emergency responders."
    ],
    challenge: "City departments operated in silos, making it hard to respond quickly to incidents and optimize resources.",
    solution: "We built a scalable IoT platform with real-time data ingestion, visualization, and automated alerting.",
    results: [
      "Reduced incident response time by 36%",
      "Improved air quality monitoring and reporting",
      "Enabled data-driven traffic management",
      "Enhanced public safety coordination"
    ],
    technologies: ["React", "Node.js", "IoT", "AWS", "Mapbox", "Kafka", "Grafana"],
    mainImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format", caption: "City dashboard overview" },
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format", caption: "Live traffic monitoring" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "Environmental sensor data" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Public safety alerts" }
    ],
    testimonial: {
      quote: "The smart city dashboard has transformed how we manage urban infrastructure and respond to emergencies.",
      author: "Jane Wambui",
      position: "Chief Innovation Officer, City of Nairobi",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "fintech-api-platform",
    prevProject: "remote-work-platform"
  },
  {
    id: 18,
    slug: "fintech-api-platform",
    title: "FinTech API Platform",
    category: "FinTech",
    client: "PayLink Solutions",
    year: "2024",
    role: "API Development, Security Engineering",
    description: [
      "PayLink Solutions needed a secure, developer-friendly API platform for payments, KYC, and compliance.",
      "We built a suite of REST and GraphQL APIs with robust authentication, rate limiting, and detailed documentation.",
      "The platform supports instant payments, identity verification, and regulatory reporting for fintech partners."
    ],
    challenge: "Fintech startups struggled to integrate payments and compliance quickly due to fragmented APIs and security risks.",
    solution: "We delivered a unified API gateway with developer portal, sandbox environment, and 24/7 monitoring.",
    results: [
      "Reduced partner onboarding time by 60%",
      "Achieved 99.99% API uptime",
      "Passed all regulatory audits with zero critical findings",
      "Enabled rapid launch of new fintech products"
    ],
    technologies: ["Node.js", "GraphQL", "TypeScript", "AWS", "OAuth 2.0", "PostgreSQL", "Swagger"],
    mainImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format", caption: "API developer portal" },
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format", caption: "API analytics dashboard" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "KYC and compliance workflow" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Payment integration examples" }
    ],
    testimonial: {
      quote: "The API platform has accelerated our growth and made compliance a breeze for our partners.",
      author: "Carlos Mendez",
      position: "Head of Product, PayLink Solutions",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "e-learning-mobile-app",
    prevProject: "smart-city-dashboard"
  },
  {
    id: 19,
    slug: "e-learning-mobile-app",
    title: "E-Learning Mobile App",
    category: "Education Technology",
    client: "LearnOnTheGo",
    year: "2024",
    role: "Mobile Development, UX/UI Design",
    description: [
      "LearnOnTheGo wanted a mobile-first e-learning app for professional development and certification.",
      "We designed and built an app with interactive video lessons, quizzes, progress tracking, and offline access.",
      "The app features gamification, push notifications, and integration with major LMS platforms."
    ],
    challenge: "Busy professionals needed flexible, engaging learning tools that work on any device, anywhere.",
    solution: "We delivered a cross-platform app with seamless user experience and robust analytics for learners and administrators.",
    results: [
      "User engagement increased by 44%",
      "Course completion rates improved by 27%",
      "Reduced support tickets by 35%",
      "Enabled rapid rollout of new courses"
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "AWS", "Firebase", "Figma"],
    mainImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format", caption: "Mobile learning dashboard" },
      { url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&auto=format", caption: "Interactive video lessons" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Gamified quiz results" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Progress tracking and analytics" }
    ],
    testimonial: {
      quote: "The e-learning app has made professional development accessible and fun for our users.",
      author: "Fatima Noor",
      position: "CEO, LearnOnTheGo",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "financial-app-redesign",
    prevProject: "fintech-api-platform"
  },
  {
    id: 20,
    slug: "digital-twin-factory",
    title: "Digital Twin Factory Simulation",
    category: "Industry 4.0",
    client: "FutureFab Corp.",
    year: "2024",
    role: "Simulation Engineering, IoT Integration",
    description: [
      "FutureFab Corp. wanted to optimize their manufacturing processes using digital twin technology for real-time simulation and predictive maintenance.",
      "We developed a platform that mirrors factory operations in a virtual environment, integrating live data from IoT sensors and machinery.",
      "The system enables scenario testing, downtime prediction, and process optimization without disrupting actual production."
    ],
    challenge: "The client needed to reduce unplanned downtime and improve process efficiency, but lacked a safe way to test changes in a live environment.",
    solution: "We built a digital twin platform using real-time data ingestion, 3D visualization, and AI-driven analytics for predictive maintenance and optimization.",
    results: [
      "Reduced unplanned downtime by 40%",
      "Improved process efficiency by 18%",
      "Enabled rapid scenario testing for process changes",
      "Lowered maintenance costs by 22%"
    ],
    technologies: ["Unity3D", "C#", "IoT", "Node.js", "React", "Azure Digital Twins", "TensorFlow"],
    mainImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Digital twin simulation dashboard" },
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format", caption: "3D factory visualization" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "Predictive maintenance analytics" },
      { url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=800&auto=format", caption: "Live IoT data integration" }
    ],
    testimonial: {
      quote: "The digital twin platform has revolutionized our approach to process improvement and maintenance.",
      author: "Helena Schmidt",
      position: "Operations Director, FutureFab Corp.",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "ai-legal-assistant",
    prevProject: "e-learning-mobile-app"
  },
  {
    id: 21,
    slug: "ai-legal-assistant",
    title: "AI Legal Document Assistant",
    category: "AI & LegalTech",
    client: "LexiLaw Solutions",
    year: "2024",
    role: "AI Development, NLP Engineering",
    description: [
      "LexiLaw Solutions needed an AI-powered assistant to help lawyers draft, review, and analyze legal documents efficiently.",
      "We built a web app that uses NLP to extract key clauses, suggest edits, and flag compliance risks in contracts and filings.",
      "The platform integrates with document management systems and supports secure collaboration between legal teams."
    ],
    challenge: "Manual document review was time-consuming and error-prone, increasing risk and reducing productivity for legal teams.",
    solution: "We developed an AI assistant using GPT-4 and custom legal models for clause extraction, risk detection, and smart suggestions.",
    results: [
      "Reduced contract review time by 55%",
      "Improved compliance accuracy by 31%",
      "Enabled faster turnaround for client deliverables",
      "Lowered legal research costs"
    ],
    technologies: ["Python", "GPT-4", "React", "Node.js", "MongoDB", "Azure", "NLP"],
    mainImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "AI contract review interface" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format", caption: "Clause extraction dashboard" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Compliance risk alerts" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Team collaboration tools" }
    ],
    testimonial: {
      quote: "The AI assistant has dramatically improved our document review process and reduced risk for our clients.",
      author: "Markus Weber",
      position: "Managing Partner, LexiLaw Solutions",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "green-building-platform",
    prevProject: "digital-twin-factory"
  },
  {
    id: 22,
    slug: "green-building-platform",
    title: "Green Building Management Platform",
    category: "Sustainability & IoT",
    client: "EcoBuild Africa",
    year: "2024",
    role: "IoT Integration, Sustainability Analytics",
    description: [
      "EcoBuild Africa wanted a platform to monitor and optimize energy, water, and waste in commercial buildings for sustainability certification.",
      "We developed a dashboard that aggregates sensor data, tracks resource usage, and provides actionable recommendations for LEED compliance.",
      "The system supports automated reporting, real-time alerts, and benchmarking across multiple properties."
    ],
    challenge: "Building managers lacked real-time insights into resource consumption and struggled to meet sustainability targets.",
    solution: "We built an IoT-enabled analytics platform with customizable dashboards and automated compliance reporting.",
    results: [
      "Reduced energy usage by 19%",
      "Improved water efficiency by 23%",
      "Enabled LEED Gold certification for 7 properties",
      "Lowered operational costs by 15%"
    ],
    technologies: ["React", "Node.js", "IoT", "AWS", "Grafana", "PostgreSQL"],
    mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format", caption: "Building sustainability dashboard" },
      { url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=800&auto=format", caption: "Resource usage analytics" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "LEED compliance tracking" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Automated reporting tools" }
    ],
    testimonial: {
      quote: "The platform has made it easy to track and improve our sustainability performance across all our buildings.",
      author: "Naomi Wanjiku",
      position: "Sustainability Manager, EcoBuild Africa",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "mobile-banking-app",
    prevProject: "ai-legal-assistant"
  },
  {
    id: 23,
    slug: "mobile-banking-app",
    title: "Next-Gen Mobile Banking App",
    category: "FinTech & Mobile",
    client: "UrbanBank",
    year: "2024",
    role: "Mobile Development, UX/UI Design",
    description: [
      "UrbanBank wanted a modern mobile app to attract younger customers and offer innovative digital banking features.",
      "We designed and built an app with instant account opening, budgeting tools, card controls, and integrated rewards.",
      "The app features biometric login, real-time notifications, and seamless integration with digital wallets."
    ],
    challenge: "The bank's legacy app was outdated and lacked features expected by digital-native customers.",
    solution: "We delivered a React Native app with a modern UI, robust security, and a scalable backend for rapid feature rollout.",
    results: [
      "Doubled new account signups in 6 months",
      "Increased app store rating from 2.8 to 4.8",
      "Reduced support calls by 39%",
      "Boosted card transaction volume by 26%"
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "AWS", "Firebase", "Figma"],
    mainImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format", caption: "Mobile banking dashboard" },
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format", caption: "Budgeting and analytics tools" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "Card controls and rewards" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Biometric login interface" }
    ],
    testimonial: {
      quote: "The new app has set a benchmark for digital banking in our market and delighted our customers.",
      author: "Brian Ochieng",
      position: "Head of Digital, UrbanBank",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "ai-powered-hr-platform",
    prevProject: "green-building-platform"
  },
  {
    id: 24,
    slug: "ai-powered-hr-platform",
    title: "AI-Powered HR & Recruitment Platform",
    category: "AI & HRTech",
    client: "TalentMatch Africa",
    year: "2024",
    role: "AI Development, Platform Engineering",
    description: [
      "TalentMatch Africa needed a platform to streamline recruitment and talent management using AI-driven matching and analytics.",
      "We built a web app that automates candidate screening, interview scheduling, and performance tracking for HR teams.",
      "The system features AI-powered job matching, diversity analytics, and seamless integration with HRIS platforms."
    ],
    challenge: "Manual recruitment processes were slow and biased, leading to missed talent and inefficiencies.",
    solution: "We delivered an AI platform with smart candidate ranking, automated workflows, and real-time analytics for better hiring decisions.",
    results: [
      "Reduced time-to-hire by 48%",
      "Improved candidate diversity by 21%",
      "Increased hiring manager satisfaction",
      "Lowered recruitment costs by 27%"
    ],
    technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS", "MongoDB"],
    mainImage: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=800&auto=format", caption: "AI-powered candidate matching" },
      { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format", caption: "Recruitment analytics dashboard" },
      { url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&auto=format", caption: "Automated interview scheduling" },
      { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&auto=format", caption: "Performance tracking tools" }
    ],
    testimonial: {
      quote: "The AI platform has transformed our recruitment process and helped us build stronger, more diverse teams.",
      author: "Lilian Muthoni",
      position: "HR Director, TalentMatch Africa",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "digital-twin-factory",
    prevProject: "mobile-banking-app"
  },
  {
    id: 25,
    slug: "agritech-drone-monitoring",
    title: "AgriTech Drone Monitoring System",
    category: "Agriculture & AI",
    client: "AgroVision Ltd.",
    year: "2025",
    role: "AI Engineering, IoT Integration",
    description: [
      "AgroVision Ltd. sought to improve crop monitoring and yield prediction using drone imagery and AI analytics.",
      "We developed a system that collects aerial imagery, processes it with computer vision models, and delivers actionable insights to farmers.",
      "The platform supports real-time alerts for pest detection, irrigation needs, and crop health assessment."
    ],
    challenge: "Manual crop monitoring was inefficient and often missed early signs of disease or water stress.",
    solution: "We integrated drone data with AI models for automated, large-scale crop analysis and reporting.",
    results: [
      "Increased yield prediction accuracy by 32%",
      "Reduced manual labor costs by 40%",
      "Enabled early pest and disease detection",
      "Improved resource allocation for irrigation and fertilization"
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS", "DJI SDK"],
    mainImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format", caption: "Drone crop monitoring" },
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "AI-powered crop health analysis" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Irrigation insights dashboard" },
      { url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&auto=format", caption: "Pest detection alerts" }
    ],
    testimonial: {
      quote: "The drone monitoring system has transformed our approach to precision agriculture.",
      author: "Samuel Kiptoo",
      position: "CTO, AgroVision Ltd.",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "remote-patient-monitoring",
    prevProject: "ai-hr-platform"
  },
  {
    id: 26,
    slug: "remote-patient-monitoring",
    title: "Remote Patient Monitoring Platform",
    category: "Healthcare & IoT",
    client: "HealthLink Africa",
    year: "2025",
    role: "IoT Engineering, Cloud Development",
    description: [
      "HealthLink Africa needed a solution for continuous patient monitoring outside hospital settings.",
      "We built a platform that collects data from wearable devices, analyzes it in real time, and alerts clinicians to anomalies.",
      "The system supports secure patient portals and integrates with EHR systems for seamless care coordination."
    ],
    challenge: "Hospitals faced high readmission rates due to lack of post-discharge monitoring.",
    solution: "We enabled remote monitoring with IoT devices and cloud analytics, reducing unnecessary hospital visits.",
    results: [
      "Reduced readmission rates by 22%",
      "Improved patient engagement and outcomes",
      "Enabled early intervention for at-risk patients",
      "Enhanced clinician workflow efficiency"
    ],
    technologies: ["IoT", "React", "Node.js", "Azure", "FHIR API", "Python"],
    mainImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&auto=format", caption: "Wearable health monitoring" },
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "Patient dashboard" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Clinician alert system" },
      { url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&auto=format", caption: "EHR integration" }
    ],
    testimonial: {
      quote: "Remote monitoring has empowered our patients and improved care quality.",
      author: "Dr. Amina Hassan",
      position: "Chief Medical Officer, HealthLink Africa",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "smart-logistics-platform",
    prevProject: "agritech-drone-monitoring"
  },
  {
    id: 27,
    slug: "smart-logistics-platform",
    title: "Smart Logistics Optimization Platform",
    category: "Logistics & AI",
    client: "TransMove Logistics",
    year: "2025",
    role: "AI Engineering, Data Science",
    description: [
      "TransMove Logistics wanted to optimize fleet management and delivery routes using AI and real-time data.",
      "We developed a platform that ingests GPS, traffic, and order data, then uses machine learning to optimize routes and schedules.",
      "The dashboard provides live tracking, predictive ETAs, and automated exception handling."
    ],
    challenge: "Inefficient routing led to high fuel costs and missed delivery windows.",
    solution: "We implemented AI-driven route optimization and real-time fleet analytics, reducing operational costs.",
    results: [
      "Reduced fuel costs by 18%",
      "Improved on-time delivery rate to 97%",
      "Lowered carbon emissions",
      "Enhanced customer satisfaction"
    ],
    technologies: ["Python", "React", "Node.js", "AWS", "Mapbox API", "PostgreSQL"],
    mainImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format", caption: "Fleet tracking dashboard" },
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "AI route optimization" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Predictive ETA analytics" },
      { url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&auto=format", caption: "Exception management tools" }
    ],
    testimonial: {
      quote: "The platform has made our logistics operations smarter and more sustainable.",
      author: "James Otieno",
      position: "Logistics Manager, TransMove Logistics",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "virtual-event-platform",
    prevProject: "remote-patient-monitoring"
  },
  {
    id: 28,
    slug: "virtual-event-platform",
    title: "Virtual Event & Conference Platform",
    category: "Events & SaaS",
    client: "EventSphere",
    year: "2025",
    role: "Full Stack Development, Video Streaming",
    description: [
      "EventSphere needed a scalable platform for hosting virtual conferences, expos, and networking events.",
      "We built a SaaS platform with live video, breakout rooms, sponsor booths, and attendee engagement tools.",
      "The system supports ticketing, analytics, and integrations with major CRM and marketing tools."
    ],
    challenge: "Existing solutions lacked customization and robust networking features for large-scale events.",
    solution: "We delivered a modular, cloud-based platform with advanced video and engagement features.",
    results: [
      "Hosted events with 10,000+ attendees",
      "Increased attendee engagement by 45%",
      "Enabled real-time analytics for organizers",
      "Improved sponsor ROI"
    ],
    technologies: ["React", "Node.js", "AWS", "WebRTC", "Stripe API", "MongoDB"],
    mainImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format", caption: "Virtual event main stage" },
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "Breakout networking rooms" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Sponsor booth interface" },
      { url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&auto=format", caption: "Live analytics dashboard" }
    ],
    testimonial: {
      quote: "Our virtual events now rival in-person experiences, thanks to this platform.",
      author: "Linda Njeri",
      position: "CEO, EventSphere",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "edtech-content-platform",
    prevProject: "smart-logistics-platform"
  },
  {
    id: 29,
    slug: "edtech-content-platform",
    title: "EdTech Content Delivery Platform",
    category: "Education & SaaS",
    client: "LearnX Africa",
    year: "2025",
    role: "Platform Engineering, Content Management",
    description: [
      "LearnX Africa wanted a robust platform for delivering interactive educational content to schools and learners.",
      "We built a scalable SaaS solution with multimedia lessons, quizzes, progress tracking, and teacher dashboards.",
      "The platform supports offline access, adaptive learning, and integration with national curricula."
    ],
    challenge: "Many schools lacked reliable tools for digital content delivery and student engagement.",
    solution: "We delivered a cloud-based platform with offline sync and adaptive learning features for diverse learning environments.",
    results: [
      "Improved student engagement by 38%",
      "Enabled content access in low-connectivity areas",
      "Enhanced teacher productivity",
      "Supported 50,000+ active learners"
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB", "SCORM API", "TypeScript"],
    mainImage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&auto=format",
    images: [
      { url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format", caption: "Interactive lesson interface" },
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format", caption: "Teacher dashboard" },
      { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format", caption: "Student progress tracking" },
      { url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&auto=format", caption: "Offline content access" }
    ],
    testimonial: {
      quote: "The platform has made digital learning accessible and engaging for our students.",
      author: "Grace Wambui",
      position: "Head of Curriculum, LearnX Africa",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&auto=format"
    },
    nextProject: "digital-twin-factory-simulation",
    prevProject: "virtual-event-platform"
  }
];
