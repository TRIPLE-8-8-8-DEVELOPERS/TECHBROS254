
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
    description: "Our web development team creates custom web applications that are fast, secure, and scalable. We use the latest web technologies to ensure your application is future-proof.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "frontend-development",
        title: "Frontend Development",
        slug: "frontend-development",
        icon: Code,
        description: "Modern, responsive user interfaces built with React, Vue, or Angular",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80"
      },
      {
        id: "backend-development",
        title: "Backend Development",
        slug: "backend-development",
        icon: Code2,
        description: "Robust and scalable server-side solutions with Node.js, Python, or Java",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
      },
      {
        id: "fullstack-development",
        title: "Full-Stack Development",
        slug: "fullstack-development",
        icon: Code,
        description: "End-to-end web application development covering both frontend and backend",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80"
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
    description: "We build high-performance mobile applications that provide a seamless user experience across all devices. Our team specializes in both native and cross-platform development.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "ios-development",
        title: "iOS Development",
        slug: "ios-development",
        icon: Smartphone,
        description: "Native iOS applications built with Swift for iPhone and iPad",
        image: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?auto=format&fit=crop&q=80"
      },
      {
        id: "android-development",
        title: "Android Development",
        slug: "android-development",
        icon: Smartphone,
        description: "Native Android applications built with Kotlin or Java",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80"
      },
      {
        id: "cross-platform-development",
        title: "Cross-Platform Development",
        slug: "cross-platform-development",
        icon: Smartphone,
        description: "Efficient multi-platform apps built with React Native or Flutter",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
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
    description: "We create custom software solutions that automate processes, improve efficiency, and help your business grow. Our development process ensures your software is maintainable and scalable.",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "enterprise-applications",
        title: "Enterprise Applications",
        slug: "enterprise-applications",
        icon: Wrench,
        description: "Large-scale software solutions for enterprise-level businesses",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
      },
      {
        id: "saas-development",
        title: "SaaS Development",
        slug: "saas-development",
        icon: Wrench,
        description: "Cloud-based software as a service solutions with subscription models",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
      },
      {
        id: "legacy-system-modernization",
        title: "Legacy System Modernization",
        slug: "legacy-system-modernization",
        icon: Wrench,
        description: "Upgrading outdated systems with modern technologies and architectures",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      }
    ]
  }
];

export default developmentServices;
