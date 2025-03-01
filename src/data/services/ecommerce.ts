
import { ShoppingCart, ShoppingBag, CreditCard, DollarSign } from "lucide-react";
import { ServiceDetail } from "./types";

export const ecommerceServices: ServiceDetail[] = [
  {
    id: 6,
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    category: "E-commerce",
    shortDescription: "Custom e-commerce platforms and solutions to help you sell online.",
    description: [
      "Our e-commerce solutions are designed to help businesses of all sizes establish and grow their online presence. We create custom, secure, and scalable online stores that offer seamless user experiences across all devices.",
      "From small businesses to large enterprises, we build e-commerce platforms tailored to your specific needs, whether you're selling physical products, digital goods, or services. Our solutions integrate with payment gateways, shipping providers, and other third-party services to streamline your operations.",
      "We focus on creating intuitive, conversion-optimized storefronts that engage your customers and drive sales, while also providing robust back-end systems for inventory management, order processing, and customer relationship management."
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&w=1200&q=80",
    subcategories: [
      {
        id: 601,
        slug: "online-store-development",
        title: "Online Store Development",
        description: "Custom online store design and development with seamless checkout experiences.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=600&q=80"
      },
      {
        id: 602,
        slug: "payment-gateway-integration",
        title: "Payment Gateway Integration",
        description: "Secure payment processing solutions for your e-commerce business.",
        icon: CreditCard,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&w=600&q=80"
      },
      {
        id: 603,
        slug: "marketplace-development",
        title: "Marketplace Development",
        description: "Multi-vendor marketplace platforms with advanced features and customizations.",
        icon: ShoppingCart,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&w=600&q=80"
      },
      {
        id: 604,
        slug: "subscription-commerce",
        title: "Subscription Commerce",
        description: "Recurring billing and subscription management systems for your business.",
        icon: DollarSign,
        image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&w=600&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Custom Design",
        description: "Unique and branded storefronts that reflect your business identity"
      },
      {
        title: "Mobile Optimization",
        description: "Responsive design that works flawlessly across all devices"
      },
      {
        title: "Secure Payments",
        description: "PCI-compliant payment processing to protect customer data"
      },
      {
        title: "Inventory Management",
        description: "Real-time tracking and management of product inventory"
      },
      {
        title: "Order Processing",
        description: "Streamlined workflow for handling orders from placement to fulfillment"
      },
      {
        title: "Customer Accounts",
        description: "User registration, profiles, and order history tracking"
      }
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "Understanding your business, products, and e-commerce needs."
      },
      {
        title: "Strategy",
        description: "Developing a comprehensive plan for your online store."
      },
      {
        title: "Design",
        description: "Creating intuitive and conversion-focused user interfaces."
      },
      {
        title: "Development",
        description: "Building your e-commerce platform with secure and scalable code."
      },
      {
        title: "Testing",
        description: "Ensuring functionality, usability, and security across all aspects."
      },
      {
        title: "Launch",
        description: "Going live with your new e-commerce solution."
      },
      {
        title: "Support",
        description: "Providing ongoing maintenance and optimization services."
      }
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Solutions", "React", "Node.js", "PHP", "MongoDB", "PostgreSQL"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1613905780946-26b73b6f6e11?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&w=600&q=80"
    ],
    relatedServices: ["web-development", "mobile-app-development", "digital-marketing"]
  }
];
