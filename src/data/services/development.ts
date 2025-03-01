
import { Code, Globe, Smartphone } from "lucide-react";
import { ServiceDetail } from "./types";

export const developmentServices: ServiceDetail[] = [
  {
    id: 1,
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: Code,
    category: "Development",
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
    category: "Development",
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
    category: "Development",
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
  }
];
