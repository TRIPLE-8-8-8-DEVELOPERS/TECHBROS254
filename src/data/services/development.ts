import { Code, Code2, Globe, Smartphone, Wrench } from "lucide-react";
import { ServiceDetail } from "./types";

export const developmentServices: ServiceDetail[] = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    icon: Globe,
    category: "Development",
    shortDescription: "Custom websites and web applications designed for your unique business needs.",
    description: [
      "Our web development services provide custom-built, scalable, and high-performing websites and web applications tailored to your specific business needs. From simple brochure sites to complex web applications, we leverage modern technologies and best practices to create solutions that drive business growth.",
      "We follow a collaborative approach to web development, working closely with you throughout the process to ensure the final product aligns with your vision and objectives. Our development process emphasizes clean code, thorough testing, and seamless deployment to deliver high-quality web solutions.",
      "Our experienced development team stays current with the latest technologies and techniques to build websites and applications that not only look great but also offer exceptional user experience, performance, and security."
    ],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Responsive Design",
        description: "Websites that adapt perfectly to all devices and screen sizes"
      },
      {
        title: "Performance Optimization",
        description: "Fast-loading pages that provide an excellent user experience"
      },
      {
        title: "Content Management",
        description: "Easy-to-use systems for updating and managing content"
      },
      {
        title: "Custom Functionality",
        description: "Tailored features that address your specific business requirements"
      },
      {
        title: "Integration Capabilities",
        description: "Seamless connection with third-party services and APIs"
      },
      {
        title: "SEO Best Practices",
        description: "Built-in optimization for better search engine visibility"
      }
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "Understanding your business, goals, and requirements for the website."
      },
      {
        title: "Planning",
        description: "Developing site architecture, wireframes, and project roadmap."
      },
      {
        title: "Design",
        description: "Creating visual mockups and UI/UX designs for approval."
      },
      {
        title: "Development",
        description: "Building the website with clean, efficient code."
      },
      {
        title: "Testing",
        description: "Ensuring quality across devices, browsers, and use cases."
      },
      {
        title: "Deployment",
        description: "Launching the website and providing ongoing support."
      }
    ],
    technologies: ["React", "Angular", "Vue.js", "Node.js", "PHP", "Ruby on Rails", "WordPress", "HTML5", "CSS3", "JavaScript"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&w=600&q=80"
    ],
    relatedServices: ["mobile-app-development", "ui-ux-design", "e-commerce-development"],
    subcategories: [
      {
        id: 101,
        slug: "frontend-development",
        title: "Frontend Development",
        description: "Creating beautiful, responsive, and interactive user interfaces that engage your visitors and deliver exceptional user experiences.",
        icon: Code,
        image: "https://images.unsplash.com/photo-1581092335878-8c338f11637f?auto=format&w=600&q=80"
      },
      {
        id: 102,
        slug: "backend-development",
        title: "Backend Development",
        description: "Building robust, scalable server-side applications and APIs that power your web platforms with high performance and reliability.",
        icon: Code2,
        image: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&w=600&q=80"
      },
      {
        id: 103,
        slug: "full-stack-development",
        title: "Full-Stack Development",
        description: "End-to-end web development combining frontend and backend expertise to create complete, cohesive, and powerful web applications.",
        icon: Wrench,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&w=600&q=80"
      },
      {
        id: 104,
        slug: "progressive-web-apps",
        title: "Progressive Web Apps",
        description: "Developing fast, reliable web applications that work offline and provide a native app-like experience to boost engagement and conversion rates.",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&w=600&q=80"
      }
    ]
  },
  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    category: "Development",
    shortDescription: "Native and cross-platform mobile apps for iOS and Android devices.",
    description: [
      "Our mobile app development services create innovative and engaging mobile applications for iOS and Android platforms. We offer end-to-end mobile app development, from concept and design to development, testing, and deployment.",
      "We build native mobile apps using platform-specific technologies like Swift for iOS and Kotlin for Android, as well as cross-platform apps using frameworks like React Native and Flutter. Our mobile app development process focuses on creating intuitive user interfaces, seamless user experiences, and robust functionality.",
      "Whether you need a consumer-facing app, an enterprise mobile solution, or a game, our experienced mobile app developers can bring your vision to life. We follow agile development methodologies to ensure flexibility, transparency, and timely delivery."
    ],
    image: "https://images.unsplash.com/photo-1556075798-4825df14b14b?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Native App Development",
        description: "High-performance apps built specifically for iOS and Android"
      },
      {
        title: "Cross-Platform Development",
        description: "Code reuse across platforms for faster development and cost savings"
      },
      {
        title: "UI/UX Design",
        description: "Intuitive interfaces that provide a seamless user experience"
      },
      {
        title: "API Integration",
        description: "Seamless connection with backend systems and third-party services"
      },
      {
        title: "Push Notifications",
        description: "Real-time updates and engagement with users"
      },
      {
        title: "App Store Submission",
        description: "Guidance and support for app store approval and launch"
      }
    ],
    processSteps: [
      {
        title: "Ideation",
        description: "Brainstorming and defining the app concept and features."
      },
      {
        title: "Design",
        description: "Creating wireframes, mockups, and UI/UX designs."
      },
      {
        title: "Development",
        description: "Coding the app using appropriate technologies and frameworks."
      },
      {
        title: "Testing",
        description: "Thoroughly testing the app for functionality, performance, and security."
      },
      {
        title: "Deployment",
        description: "Publishing the app to app stores and providing ongoing support."
      },
      {
        title: "Marketing",
        description: "Promoting the app to reach the target audience and drive downloads."
      }
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Objective-C", "Java", "Ionic", "Xamarin"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1589145789875-5a80e1a996ea?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1599809275671-d594cd535961?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1584394432314-9c09b4489235?auto=format&w=600&q=80"
    ],
    relatedServices: ["web-development", "ui-ux-design", "digital-marketing"],
    subcategories: [
      {
        id: 201,
        slug: "ios-app-development",
        title: "iOS App Development",
        description: "Crafting high-performance, intuitive apps for iPhones and iPads using Swift and Objective-C.",
        icon: Code,
        image: "https://images.unsplash.com/photo-1584394432314-9c09b4489235?auto=format&w=600&q=80"
      },
      {
        id: 202,
        slug: "android-app-development",
        title: "Android App Development",
        description: "Building scalable, feature-rich apps for Android devices using Kotlin and Java.",
        icon: Code2,
        image: "https://images.unsplash.com/photo-1599809275671-d594cd535961?auto=format&w=600&q=80"
      },
      {
        id: 203,
        slug: "cross-platform-development",
        title: "Cross-Platform Development",
        description: "Developing apps that run seamlessly on both iOS and Android using frameworks like React Native and Flutter.",
        icon: Wrench,
        image: "https://images.unsplash.com/photo-1555059780-9e1759781908?auto=format&w=600&q=80"
      }
    ]
  },
  {
    id: 3,
    slug: "e-commerce-development",
    title: "E-commerce Development",
    icon: Code,
    category: "Development",
    shortDescription: "Custom e-commerce platforms with secure payment gateways and inventory management.",
    description: [
      "Our e-commerce development services provide custom-built online stores tailored to your specific business needs. We offer end-to-end e-commerce solutions, from platform selection and design to development, integration, and ongoing support.",
      "We work with leading e-commerce platforms like Shopify, Magento, and WooCommerce, as well as custom-built solutions using technologies like React and Node.js. Our e-commerce development process focuses on creating secure, scalable, and user-friendly online stores that drive sales and customer satisfaction.",
      "Whether you're launching a new online store or migrating from an existing platform, our experienced e-commerce developers can help you create a successful online business. We focus on implementing best practices for product presentation, shopping cart functionality, payment processing, and order management."
    ],
    image: "https://images.unsplash.com/photo-1517842067-bc650b2f3734?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Custom Design",
        description: "Unique store designs that reflect your brand identity"
      },
      {
        title: "Product Management",
        description: "Easy-to-use systems for adding, updating, and managing products"
      },
      {
        title: "Shopping Cart",
        description: "Seamless and secure shopping cart functionality"
      },
      {
        title: "Payment Gateway Integration",
        description: "Secure integration with leading payment processors"
      },
      {
        title: "Order Management",
        description: "Efficient systems for processing and fulfilling orders"
      },
      {
        title: "SEO Optimization",
        description: "Built-in optimization for better search engine visibility"
      }
    ],
    processSteps: [
      {
        title: "Planning",
        description: "Defining your e-commerce goals, target audience, and product catalog."
      },
      {
        title: "Design",
        description: "Creating visual mockups and UI/UX designs for your online store."
      },
      {
        title: "Development",
        description: "Building the e-commerce platform with secure and scalable code."
      },
      {
        title: "Integration",
        description: "Integrating payment gateways, shipping providers, and other third-party services."
      },
      {
        title: "Testing",
        description: "Thoroughly testing the store for functionality, security, and performance."
      },
      {
        title: "Launch",
        description: "Launching the online store and providing ongoing support."
      }
    ],
    technologies: ["Shopify", "Magento", "WooCommerce", "React", "Node.js", "PHP", "MySQL", "Stripe", "PayPal"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1563010890-a66818b94982?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1555863252-2949c7f94d37?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1591076482639-3169ac9925b3?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1559056104-d94497461978?auto=format&w=600&q=80"
    ],
    relatedServices: ["web-development", "ui-ux-design", "digital-marketing"],
    subcategories: [
      {
        id: 301,
        slug: "shopify-development",
        title: "Shopify Development",
        description: "Custom Shopify store development and theme customization to create a unique online shopping experience.",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1622542487434-e0a314690043?auto=format&w=600&q=80"
      },
      {
        id: 302,
        slug: "magento-development",
        title: "Magento Development",
        description: "Enterprise-level e-commerce solutions with Magento, offering scalability and advanced features for large online businesses.",
        icon: Code2,
        image: "https://images.unsplash.com/photo-1591076482639-3169ac9925b3?auto=format&w=600&q=80"
      },
      {
        id: 303,
        slug: "woocommerce-development",
        title: "WooCommerce Development",
        description: "Customizable e-commerce solutions with WordPress and WooCommerce, ideal for small to medium-sized businesses.",
        icon: Wrench,
        image: "https://images.unsplash.com/photo-1559056104-d94497461978?auto=format&w=600&q=80"
      }
    ]
  }
];
