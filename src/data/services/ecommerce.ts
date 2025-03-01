
import { ShoppingCart } from "lucide-react";
import { ServiceDetail } from "./types";

export const ecommerceServices: ServiceDetail[] = [
  {
    id: 6,
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    category: "E-commerce",
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
  }
];
