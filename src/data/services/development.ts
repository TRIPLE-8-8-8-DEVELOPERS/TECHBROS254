
import { Code, Code2, Globe, Smartphone, Wrench } from "lucide-react";
import { ServiceDetail } from "./types";

const developmentServices: ServiceDetail[] = [
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    category: "Development",
    icon: Globe,
    shortDescription: "Custom web applications tailored to your business needs using the latest technologies.",
    description: ["Our web development team specializes in building custom web applications that are fast, secure, and scalable. Whether you need a dynamic website, a business portal, or a complex web-based system, we have the expertise to deliver solutions tailored to your unique business objectives.From interactive dashboards and custom CMS platforms to complex e-commerce systems and enterprise web solutions, our team ensures secure data handling, optimized performance, and a seamless digital experience. Partner with us to turn your ideas into powerful digital products that drive business growth."],
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "frontend-development",
        title: "Frontend Development",
        slug: "frontend-development",
        icon: Code,
        description: "Modern, responsive user interfaces built with React, Vue, or Angular",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80",
        features: [
          "Responsive design for all devices and screen sizes",
          "Interactive UI/UX with modern JavaScript frameworks",
          "State management with Redux, Context API, or Vuex",
          "Performance optimization for faster load times",
          "Progressive Web App (PWA) capabilities",
          "Accessible interfaces compliant with WCAG standards"
        ],
        benefits: [
          "Improved user engagement and conversion rates",
          "Consistent experience across all platforms",
          "Reduced bounce rates with fast-loading interfaces",
          "Better SEO performance with optimized code",
          "Future-proof applications that scale with your business",
          "Inclusive design that reaches all potential users"
        ]
      },
      {
        id: "backend-development",
        title: "Backend Development",
        slug: "backend-development",
        icon: Code2,
        description: "Robust and scalable server-side solutions with Node.js, Python, or Java",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
        features: [
          "RESTful API development for seamless front-end integration",
          "Database design and optimization (SQL and NoSQL)",
          "Authentication and authorization systems",
          "Microservices architecture for modular applications",
          "Real-time data processing with WebSockets",
          "Automated testing and CI/CD pipeline integration"
        ],
        benefits: [
          "Robust infrastructure that handles high traffic loads",
          "Secure data management and protection",
          "Scalable architecture that grows with user demand",
          "Reduced development time with modern frameworks",
          "Lower maintenance costs with well-architected systems",
          "Improved data integrity and reliability"
        ]
      },
      {
        id: "fullstack-development",
        title: "Full-Stack Development",
        slug: "fullstack-development",
        icon: Code,
        description: "End-to-end web application development covering both frontend and backend",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80",
        features: [
          "Complete application development from UI to database",
          "Unified tech stack for seamless integration",
          "End-to-end testing and quality assurance",
          "DevOps integration for continuous deployment",
          "Performance optimization across the entire stack",
          "Cross-platform compatibility and responsive design"
        ],
        benefits: [
          "Faster development cycles with unified team approach",
          "Consistent implementation of business logic",
          "Streamlined communication and fewer integration issues",
          "Comprehensive solution optimized for your specific needs",
          "Long-term maintainability with consistent coding standards",
          "Single point of contact for entire application lifecycle"
        ]
      }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    slug: "mobile-development",
    category: "Development",
    icon: Smartphone,
    shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
    description: ["We build high-performance mobile applications that provide a seamless user experience across all devices. Our team specializes in both native and cross-platform development."],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "ios-development",
        title: "iOS Development",
        slug: "ios-development",
        icon: Smartphone,
        description: "Native iOS applications built with Swift for iPhone and iPad",
        image: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?auto=format&fit=crop&q=80",
        features: [
          "Native UI components for optimal performance",
          "Swift and SwiftUI for modern iOS development",
          "Core Data integration for efficient data management",
          "Apple ecosystem integration (Apple Pay, HealthKit, etc.)",
          "Push notification implementation",
          "Biometric authentication (Face ID, Touch ID)"
        ],
        benefits: [
          "Superior performance on Apple devices",
          "Seamless integration with iOS ecosystem",
          "Enhanced user experience following Apple design guidelines",
          "Better App Store optimization opportunities",
          "Higher user retention with platform-specific features",
          "Future-proof applications with Swift language"
        ]
      },
      {
        id: "android-development",
        title: "Android Development",
        slug: "android-development",
        icon: Smartphone,
        description: "Native Android applications built with Kotlin or Java",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80",
        features: [
          "Material Design implementation for modern UI",
          "Kotlin-first development for concise, safer code",
          "Jetpack Compose for declarative UI development",
          "Room database for efficient local data storage",
          "Background processing with WorkManager",
          "Integration with Google services (Maps, Firebase, etc.)"
        ],
        benefits: [
          "Optimized performance across Android device ecosystem",
          "Wider market reach with Android's global user base",
          "Enhanced user engagement with platform-specific features",
          "Seamless integration with Google services",
          "Adaptive design for diverse screen sizes and formats",
          "Lower development costs for certain business models"
        ]
      },
      {
        id: "cross-platform-development",
        title: "Cross-Platform Development",
        slug: "cross-platform-development",
        icon: Smartphone,
        description: "Efficient multi-platform apps built with React Native or Flutter",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
        features: [
          "Single codebase for iOS and Android platforms",
          "React Native or Flutter framework implementation",
          "Near-native performance with optimized rendering",
          "Code sharing between mobile and web applications",
          "Custom native module integration when needed",
          "Hot reloading for faster development cycles"
        ],
        benefits: [
          "Faster time-to-market for multi-platform launches",
          "Reduced development and maintenance costs",
          "Consistent user experience across platforms",
          "Easier updates and feature parity management",
          "Smaller team requirements for multi-platform support",
          "Leveraging existing web development skills"
        ]
      }
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    slug: "custom-software",
    category: "Development",
    icon: Wrench,
    shortDescription: "Bespoke software solutions designed to address your specific business challenges.",
    description: ["We create custom software solutions that automate processes, improve efficiency, and help your business grow. Our development process ensures your software is maintainable and scalable."],
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "enterprise-applications",
        title: "Enterprise Applications",
        slug: "enterprise-applications",
        icon: Wrench,
        description: "Large-scale software solutions for enterprise-level businesses",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
        features: [
          "Microservices architecture for scalability",
          "Integration with existing enterprise systems (ERP, CRM, etc.)",
          "Advanced security protocols and compliance",
          "High-availability and fault-tolerant design",
          "Business intelligence and reporting dashboards",
          "Role-based access control and user management"
        ],
        benefits: [
          "Improved operational efficiency and productivity",
          "Consolidation of disparate business systems",
          "Real-time data visibility across departments",
          "Enhanced decision-making with integrated analytics",
          "Reduced operational costs through automation",
          "Competitive advantage with custom workflows"
        ]
      },
      {
        id: "saas-development",
        title: "SaaS Development",
        slug: "saas-development",
        icon: Wrench,
        description: "Cloud-based software as a service solutions with subscription models",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        features: [
          "Multi-tenant architecture for serving multiple clients",
          "Subscription and billing management systems",
          "Scalable cloud infrastructure (AWS, Azure, GCP)",
          "User onboarding and self-service capabilities",
          "Usage analytics and customer insights",
          "API-first design for integration capabilities"
        ],
        benefits: [
          "Recurring revenue streams with subscription model",
          "Rapid scaling to meet market demand",
          "Lower customer acquisition costs",
          "Valuable customer usage data and insights",
          "Continuous delivery of improvements",
          "Global reach with cloud deployment"
        ]
      },
      {
        id: "legacy-system-modernization",
        title: "Legacy System Modernization",
        slug: "legacy-system-modernization",
        icon: Wrench,
        description: "Upgrading outdated systems with modern technologies and architectures",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        features: [
          "Comprehensive system analysis and assessment",
          "Incremental migration with minimal disruption",
          "Data migration and transformation",
          "API layer development for legacy integration",
          "Modern user interface implementation",
          "Cloud migration and infrastructure modernization"
        ],
        benefits: [
          "Reduced maintenance costs and technical debt",
          "Improved security and compliance",
          "Enhanced system performance and reliability",
          "Better integration with modern tools and platforms",
          "Improved user experience and productivity",
          "Extended lifespan of business-critical systems"
        ]
      }
    ]
  }
];

export default developmentServices;
