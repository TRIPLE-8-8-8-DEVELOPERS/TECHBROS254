import { Code, Globe, Smartphone, Cloud, LineChart, ShieldCheck, ShoppingCart, BrainCircuit, BarChart3, Database, Server, Search, Layers, Palette, FileCode, Terminal, Users, MessageSquare, BookOpen, Headphones } from "lucide-react";

export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  icon: any; // LucideIcon
  shortDescription: string;
  description: string[];
  image: string;
  category: string;
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  processSteps?: {
    title: string;
    description: string;
  }[];
  technologies?: string[];
  showcaseImages?: string[];
  relatedServices?: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 1,
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: Code,
    category: "Development", // Add category
    shortDescription: "Scalable, high-performance applications tailored to your business needs and goals.",
    description: [
      "At TechBros, we specialize in developing custom software solutions that perfectly align with your business requirements and objectives. Our expert team of developers, architects, and analysts work collaboratively to create robust, scalable, and secure applications that drive efficiency and growth.",
      "We follow a comprehensive approach to software development, starting with a thorough analysis of your business needs, followed by detailed planning, agile development, rigorous testing, and ongoing support and maintenance. This ensures that the final product not only meets but exceeds your expectations.",
      "Our custom software solutions are designed to address specific business challenges, streamline processes, and provide a competitive edge in your industry. Whether you need to automate workflows, integrate disparate systems, or build a completely new application from scratch, we have the expertise to deliver exceptional results."
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Tailored Solutions",
        description: "Software precisely designed to address your specific business needs"
      },
      {
        title: "Scalability",
        description: "Applications that grow alongside your business without performance issues"
      },
      {
        title: "Enhanced Efficiency",
        description: "Streamlined processes and automated workflows for improved productivity"
      },
      {
        title: "Integration Capabilities",
        description: "Seamless connections with existing systems and third-party applications"
      },
      {
        title: "Data Security",
        description: "Robust security measures to protect sensitive information"
      },
      {
        title: "User-Friendly Design",
        description: "Intuitive interfaces that enhance user adoption and satisfaction"
      }
    ],
    processSteps: [
      {
        title: "Discovery & Analysis",
        description: "We begin by understanding your business, challenges, and objectives to define clear requirements."
      },
      {
        title: "Planning & Architecture",
        description: "Our team creates a detailed roadmap and technical architecture for your software solution."
      },
      {
        title: "Development",
        description: "Using agile methodologies, we develop your software iteratively with regular progress updates."
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing ensures your software is bug-free, secure, and meets all requirements."
      },
      {
        title: "Deployment",
        description: "We carefully implement your software into your environment with minimal disruption."
      },
      {
        title: "Support & Maintenance",
        description: "Ongoing assistance and updates keep your software performing optimally long-term."
      }
    ],
    technologies: ["C#", "Java", "Python", "Node.js", "React", "Angular", "AWS", "Azure", "SQL", "NoSQL"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&w=600&q=80"
    ],
    relatedServices: ["web-development", "mobile-app-development", "cloud-solutions"]
  },
  {
    id: 2,
    slug: "web-development",
    title: "Web Development",
    icon: Globe,
    category: "Development", // Add category
    shortDescription: "Professional, responsive, and high-converting websites and web applications.",
    description: [
      "Our web development services deliver stunning, functional websites that elevate your brand and drive business results. We combine cutting-edge technology with creative design to create web experiences that engage visitors and convert them into customers.",
      "Every website we build is responsive, ensuring optimal performance across all devices. We focus on creating intuitive user interfaces backed by robust functionality, whether you need a corporate website, e-commerce platform, or a complex web application.",
      "Performance optimization is at the core of our web development process. We ensure your website loads quickly, ranks well in search engines, and provides seamless navigation for users. Our development team stays updated with the latest technologies and best practices to deliver modern, future-proof web solutions."
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Responsive Design",
        description: "Websites that look and function perfectly on all devices and screen sizes"
      },
      {
        title: "SEO Optimization",
        description: "Built-in search engine optimization for improved visibility and ranking"
      },
      {
        title: "Fast Loading Speed",
        description: "Performance-optimized code for quick page loading and enhanced user experience"
      },
      {
        title: "Content Management",
        description: "User-friendly CMS solutions that make content updates simple"
      },
      {
        title: "E-commerce Integration",
        description: "Secure shopping carts, payment processing, and inventory management"
      },
      {
        title: "Analytics Setup",
        description: "Integrated tracking tools to monitor performance and user behavior"
      }
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "We explore your business goals, target audience, and specific requirements."
      },
      {
        title: "Planning & Wireframing",
        description: "Creating the blueprint of your website's structure and user flow."
      },
      {
        title: "Design",
        description: "Developing visual mockups that align with your brand identity."
      },
      {
        title: "Development",
        description: "Building the functional website with clean, optimized code."
      },
      {
        title: "Testing & QA",
        description: "Rigorous testing across devices, browsers, and user scenarios."
      },
      {
        title: "Launch & Support",
        description: "Deploying your website and providing ongoing maintenance."
      }
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "PHP", "WordPress", "Shopify", "Node.js", "MongoDB"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software-development", "e-commerce-solutions", "digital-marketing"]
  },
  {
    id: 3,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    category: "Development", // Add category
    shortDescription: "Cross-platform and native app solutions for seamless mobile experiences.",
    description: [
      "Our mobile app development services create powerful, intuitive applications that engage users and extend your brand's reach. We develop for both iOS and Android platforms, ensuring your app reaches the widest possible audience with a consistent user experience.",
      "We specialize in both native and cross-platform development approaches, choosing the right technology based on your specific requirements, timeline, and budget. Our team has extensive experience with the latest mobile frameworks and best practices for building high-performance apps.",
      "From concept to launch and beyond, we guide you through the entire app development journey. We focus on creating intuitive user interfaces, implementing robust functionality, and ensuring seamless integration with existing systems. Post-launch, we provide ongoing support and updates to keep your app current and competitive."
    ],
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Native & Cross-Platform",
        description: "Expert development for iOS, Android, or both using the most suitable frameworks"
      },
      {
        title: "Intuitive UX/UI",
        description: "User-centric design that enhances engagement and satisfaction"
      },
      {
        title: "Offline Functionality",
        description: "Apps that work even when users don't have internet access"
      },
      {
        title: "Push Notifications",
        description: "Engage users with timely, relevant notifications"
      },
      {
        title: "Secure Authentication",
        description: "Multiple secure login options including biometric and social media integration"
      },
      {
        title: "Analytics Integration",
        description: "Track user behavior and app performance for continuous improvement"
      }
    ],
    processSteps: [
      {
        title: "Concept & Strategy",
        description: "Defining your app's purpose, target audience, and core features."
      },
      {
        title: "Wireframing & Design",
        description: "Creating the visual blueprint and user experience flow."
      },
      {
        title: "Development",
        description: "Building your app with clean, optimized code and regular progress demos."
      },
      {
        title: "Testing",
        description: "Rigorous quality assurance across devices, operating systems, and user scenarios."
      },
      {
        title: "Deployment",
        description: "Publishing your app to the App Store, Google Play, or private distribution."
      },
      {
        title: "Maintenance & Updates",
        description: "Ongoing support, performance monitoring, and feature enhancements."
      }
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "GraphQL", "REST APIs", "OAuth", "Push Notifications"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software-development", "web-development", "ux-ui-design"]
  },
  {
    id: 4,
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: Cloud,
    category: "Infrastructure", // Add category
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
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software-development", "cybersecurity", "it-consulting"]
  },
  {
    id: 5,
    slug: "it-consulting",
    title: "IT Consulting",
    icon: LineChart,
    category: "Consulting", // Add category
    shortDescription: "Strategic guidance for digital transformation and tech infrastructure optimization.",
    description: [
      "Our IT consulting services provide strategic technology guidance to help businesses leverage digital solutions to achieve their goals. We work closely with your team to understand your business challenges, identify opportunities for improvement, and develop technology roadmaps that align with your objectives.",
      "Our experienced consultants bring industry-specific expertise and a deep understanding of emerging technologies to provide valuable insights and practical recommendations. Whether you're planning a digital transformation initiative, implementing new systems, or optimizing existing infrastructure, we provide the strategic direction needed for success.",
      "We take a holistic approach to IT consulting, considering not just technology but also people, processes, and business objectives. Our recommendations are pragmatic, focused on delivering measurable business value, and designed to be implemented successfully within your organization."
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Digital Transformation",
        description: "Strategic guidance for adopting digital technologies to transform your business"
      },
      {
        title: "Technology Assessment",
        description: "Comprehensive evaluation of your current IT landscape and capabilities"
      },
      {
        title: "Strategic Planning",
        description: "Development of technology roadmaps aligned with business objectives"
      },
      {
        title: "Vendor Selection",
        description: "Objective assistance in choosing the right technology partners and solutions"
      },
      {
        title: "Process Optimization",
        description: "Identification of opportunities to streamline operations using technology"
      },
      {
        title: "Change Management",
        description: "Strategies for successful technology adoption across your organization"
      }
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "Understanding your business, challenges, objectives, and current technology landscape."
      },
      {
        title: "Assessment",
        description: "Evaluating your IT infrastructure, applications, processes, and capabilities."
      },
      {
        title: "Strategy Development",
        description: "Creating a tailored technology roadmap with clear recommendations and priorities."
      },
      {
        title: "Solution Design",
        description: "Developing detailed specifications for recommended technology solutions."
      },
      {
        title: "Implementation Support",
        description: "Providing guidance and oversight during the execution of recommendations."
      },
      {
        title: "Review & Refinement",
        description: "Measuring outcomes and adjusting strategies based on results and feedback."
      }
    ],
    technologies: ["Digital Transformation", "Process Automation", "Cloud Strategy", "Data Analytics", "IT Governance", "Enterprise Architecture"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&w=600&q=80"
    ],
    relatedServices: ["digital-strategy", "cloud-solutions", "cybersecurity"]
  },
  {
    id: 6,
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    category: "E-commerce", // Add category
    shortDescription: "Custom online stores, marketplace integration, and payment solutions.",
    description: [
      "Our e-commerce solutions help businesses establish and grow their online sales channels with custom-built online stores that deliver exceptional shopping experiences. We develop robust, scalable e-commerce platforms that drive conversions and build customer loyalty.",
      "From small boutique shops to large enterprise retailers, we tailor our e-commerce solutions to match your specific business model, product range, and customer expectations. Our solutions include custom-built platforms, optimized implementations of leading e-commerce systems, and specialized integrations with existing business systems.",
      "We focus on creating intuitive shopping experiences with seamless checkout processes, robust product management, and comprehensive analytics. Our e-commerce platforms are designed to be secure, scalable, and easily manageable, allowing you to focus on growing your business."
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Custom Online Stores",
        description: "Tailored e-commerce solutions that reflect your brand and business requirements"
      },
      {
        title: "Mobile Optimization",
        description: "Responsive designs that provide excellent shopping experiences across all devices"
      },
      {
        title: "Secure Payment Processing",
        description: "Integration with multiple payment gateways with robust security measures"
      },
      {
        title: "Inventory Management",
        description: "Real-time stock tracking and automated inventory management"
      },
      {
        title: "Order Fulfillment",
        description: "Streamlined processes for order management and shipping integration"
      },
      {
        title: "Marketing Tools",
        description: "Built-in features for promotions, discounts, and customer engagement"
      }
    ],
    processSteps: [
      {
        title: "Requirements Analysis",
        description: "Understanding your business model, products, and e-commerce objectives."
      },
      {
        title: "Platform Selection",
        description: "Recommending the best e-commerce platform based on your specific needs."
      },
      {
        title: "Design & UX",
        description: "Creating an engaging, conversion-focused shopping experience."
      },
      {
        title: "Development",
        description: "Building your store with all required features and integrations."
      },
      {
        title: "Testing",
        description: "Comprehensive testing of functionality, performance, and security."
      },
      {
        title: "Launch & Growth Support",
        description: "Deploying your store and providing ongoing optimization services."
      }
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Solutions", "Payment Gateways", "CRM Integration", "ERP Integration"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&w=600&q=80"
    ],
    relatedServices: ["web-development", "digital-marketing", "custom-software-development"]
  },
  {
    id: 7,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    category: "AI & Data", // Add category
    shortDescription: "Predictive analytics, automation, and intelligent business solutions.",
    description: [
      "Our AI and Machine Learning services help businesses leverage the power of artificial intelligence to gain valuable insights, automate processes, and create intelligent products. We develop custom AI solutions that solve complex business problems and create competitive advantages.",
      "From predictive analytics and natural language processing to computer vision and recommendation systems, we implement a wide range of AI technologies tailored to your specific business needs. Our team of data scientists and machine learning engineers brings extensive experience in developing and deploying production-grade AI systems.",
      "We follow a practical approach to AI implementation, focusing on solutions that deliver measurable business value. We work closely with your team to identify the right use cases, develop proof-of-concepts, and scale to full implementation with careful attention to data quality, model performance, and ethical considerations."
    ],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Predictive Analytics",
        description: "Forecasting trends and outcomes based on historical data patterns"
      },
      {
        title: "Natural Language Processing",
        description: "Enabling systems to understand and interact using human language"
      },
      {
        title: "Computer Vision",
        description: "Image recognition and analysis for various business applications"
      },
      {
        title: "Recommendation Systems",
        description: "Personalized suggestions based on user behavior and preferences"
      },
      {
        title: "Process Automation",
        description: "Intelligent automation of repetitive tasks and complex workflows"
      },
      {
        title: "Data Mining",
        description: "Extracting valuable insights from large and complex datasets"
      }
    ],
    processSteps: [
      {
        title: "Problem Definition",
        description: "Identifying specific business challenges that AI can effectively address."
      },
      {
        title: "Data Assessment",
        description: "Evaluating available data sources, quality, and additional requirements."
      },
      {
        title: "Solution Design",
        description: "Designing the appropriate AI approach and technical architecture."
      },
      {
        title: "Model Development",
        description: "Creating and training machine learning models based on your data."
      },
      {
        title: "Testing & Validation",
        description: "Rigorously evaluating model accuracy, performance, and reliability."
      },
      {
        title: "Deployment & Monitoring",
        description: "Implementing AI solutions in production and ensuring ongoing performance."
      }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision", "Neural Networks", "Deep Learning"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software-development", "data-analytics", "cloud-solutions"]
  },
  {
    id: 8,
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: ShieldCheck,
    category: "Security", // Add category
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
    relatedServices: ["cloud-solutions", "it-consulting", "compliance-services"]
  },
  {
    id: 9,
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: BarChart3,
    category: "Marketing", // Add category
    shortDescription: "SEO, social media, PPC, and content marketing for business growth.",
    description: [
      "Our digital marketing services help businesses increase their online visibility, attract qualified leads, and convert them into loyal customers. We develop comprehensive digital marketing strategies tailored to your specific business goals, target audience, and competitive landscape.",
      "From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation, we leverage various digital channels to create a cohesive online presence that drives results. Our data-driven approach ensures that marketing efforts are continuously optimized for maximum ROI.",
      "We believe in transparent reporting and clear communication, providing regular insights into campaign performance and actionable recommendations for improvement. Our goal is to be a true marketing partner, helping you navigate the complex digital landscape and achieve sustainable business growth."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Search Engine Optimization",
        description: "Improving organic visibility and rankings on search engines"
      },
      {
        title: "Pay-Per-Click Advertising",
        description: "Strategic ad campaigns on Google, Bing, and other platforms"
      },
      {
        title: "Social Media Marketing",
        description: "Engaging content and campaigns across relevant social platforms"
      },
      {
        title: "Content Marketing",
        description: "Valuable, relevant content that attracts and engages your target audience"
      },
      {
        title: "Email Marketing",
        description: "Personalized email campaigns that nurture leads and drive conversions"
      },
