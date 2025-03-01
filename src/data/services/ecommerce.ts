
import { ShoppingCart, CreditCard, TrendingUp, Package, Store } from "lucide-react";
import { ServiceDetail } from "./types";

const ecommerceServices: ServiceDetail[] = [
  {
    id: "ecommerce-development",
    title: "E-commerce Development",
    slug: "ecommerce-development",
    category: "E-commerce",
    icon: ShoppingCart,
    shortDescription: "Custom e-commerce solutions tailored to your specific business needs and target audience.",
    description: "We create custom e-commerce platforms that help you sell products online efficiently. Our solutions are designed to provide a seamless shopping experience for your customers and easy management for your team.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "shopify-development",
        title: "Shopify Development",
        slug: "shopify-development",
        icon: Store,
        description: "Custom Shopify store development and theme customization",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80"
      },
      {
        id: "woocommerce-development",
        title: "WooCommerce Development",
        slug: "woocommerce-development",
        icon: Store,
        description: "WordPress-based e-commerce solutions with WooCommerce",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
      },
      {
        id: "magento-development",
        title: "Magento Development",
        slug: "magento-development",
        icon: Store,
        description: "Enterprise-level e-commerce solutions with Magento",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "payment-processing",
    title: "Payment Processing",
    slug: "payment-processing",
    category: "E-commerce",
    icon: CreditCard,
    shortDescription: "Secure payment gateway integration and processing solutions for your online store.",
    description: "We implement secure payment processing solutions that support multiple payment methods and currencies. Our integrations ensure a smooth checkout experience while maintaining the highest level of security.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6d5f2ed?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "payment-gateway-integration",
        title: "Payment Gateway Integration",
        slug: "payment-gateway-integration",
        icon: CreditCard,
        description: "Integration with popular payment gateways such as Stripe, PayPal, and Square",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
      },
      {
        id: "subscription-billing",
        title: "Subscription Billing",
        slug: "subscription-billing",
        icon: CreditCard,
        description: "Recurring billing solutions for subscription-based business models",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
      },
      {
        id: "multi-currency-support",
        title: "Multi-Currency Support",
        slug: "multi-currency-support",
        icon: CreditCard,
        description: "Support for international transactions with multiple currencies",
        image: "https://images.unsplash.com/photo-1521409859178-122d3193e3b4?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "ecommerce-marketing",
    title: "E-commerce Marketing",
    slug: "ecommerce-marketing",
    category: "E-commerce",
    icon: TrendingUp,
    shortDescription: "Strategies and tools to increase traffic, improve conversion rates, and grow your online sales.",
    description: "Our e-commerce marketing services help you attract more customers and increase sales. We use data-driven strategies to optimize your marketing efforts and maximize your ROI.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "seo-for-ecommerce",
        title: "SEO for E-commerce",
        slug: "seo-for-ecommerce",
        icon: TrendingUp,
        description: "Search engine optimization strategies specifically for online stores",
        image: "https://images.unsplash.com/photo-1571721795195-a2b7d27b2434?auto=format&fit=crop&q=80"
      },
      {
        id: "ppc-campaigns",
        title: "PPC Campaigns",
        slug: "ppc-campaigns",
        icon: TrendingUp,
        description: "Pay-per-click advertising campaigns on Google, Facebook, and Instagram",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        slug: "email-marketing",
        icon: TrendingUp,
        description: "Automated email campaigns to nurture leads and increase customer retention",
        image: "https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    id: "order-fulfillment",
    title: "Order Fulfillment",
    slug: "order-fulfillment",
    category: "E-commerce",
    icon: Package,
    shortDescription: "End-to-end order management and fulfillment solutions to streamline your operations.",
    description: "We implement order fulfillment solutions that automate and streamline your order processing workflow. Our systems help you manage inventory, process orders efficiently, and provide a better customer experience.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "inventory-management",
        title: "Inventory Management",
        slug: "inventory-management",
        icon: Package,
        description: "Real-time inventory tracking and management across multiple channels",
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
      },
      {
        id: "shipping-integration",
        title: "Shipping Integration",
        slug: "shipping-integration",
        icon: Package,
        description: "Integration with shipping carriers for automated label generation and tracking",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80"
      },
      {
        id: "returns-management",
        title: "Returns Management",
        slug: "returns-management",
        icon: Package,
        description: "Streamlined returns processing and customer service solutions",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80"
      }
    ]
  }
];

export default ecommerceServices;
