
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
    description: ["We create custom e-commerce platforms that help you sell products online efficiently. Our solutions are designed to provide a seamless shopping experience for your customers and easy management for your team."],
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "shopify-development",
        title: "Shopify Development",
        slug: "shopify-development",
        icon: Store,
        description: "Custom Shopify store development and theme customization",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
        features: [
          "Custom theme development and design",
          "Third-party app integration and customization",
          "Custom Shopify app development",
          "Migration from other platforms to Shopify",
          "Performance optimization for faster loading",
          "Multi-currency and multi-language setup"
        ],
        benefits: [
          "Quick time-to-market with proven e-commerce platform",
          "Scalable solution that grows with your business",
          "Built-in security and PCI compliance",
          "Mobile-optimized shopping experience",
          "Extensive app ecosystem for added functionality",
          "Reliable hosting with 99.9% uptime guarantee"
        ]
      },
      {
        id: "woocommerce-development",
        title: "WooCommerce Development",
        slug: "woocommerce-development",
        icon: Store,
        description: "WordPress-based e-commerce solutions with WooCommerce",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80",
        features: [
          "Custom WooCommerce theme development",
          "Plugin customization and extension development",
          "Payment gateway integration",
          "Subscription and membership functionality",
          "Product catalog optimization",
          "SEO-friendly architecture implementation"
        ],
        benefits: [
          "Complete ownership and control of your platform",
          "Lower ongoing costs with open-source solution",
          "Seamless integration with WordPress content",
          "Highly customizable shopping experience",
          "Flexible product management for complex catalogs",
          "Strong community support and regular updates"
        ]
      },
      {
        id: "magento-development",
        title: "Magento Development",
        slug: "magento-development",
        icon: Store,
        description: "Enterprise-level e-commerce solutions with Magento",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80",
        features: [
          "Custom Magento theme and extension development",
          "B2B e-commerce functionality implementation",
          "Multi-store setup and management",
          "Performance optimization for large catalogs",
          "Integration with ERP and CRM systems",
          "Advanced inventory and warehouse management"
        ],
        benefits: [
          "Enterprise-grade solution for complex business needs",
          "Powerful product management for large catalogs",
          "Advanced B2B functionality and account management",
          "Sophisticated marketing and promotion capabilities",
          "Robust security features for enterprise data",
          "Scalable architecture for high-volume stores"
        ]
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
    description: ["We implement secure payment processing solutions that support multiple payment methods and currencies. Our integrations ensure a smooth checkout experience while maintaining the highest level of security."],
    image: "https://images.unsplash.com/photo-1580519542036-c47de6d5f2ed?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "payment-gateway-integration",
        title: "Payment Gateway Integration",
        slug: "payment-gateway-integration",
        icon: CreditCard,
        description: "Integration with popular payment gateways such as Stripe, PayPal, and Square",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
        features: [
          "Seamless integration with multiple payment providers",
          "PCI DSS compliance implementation",
          "Tokenization for secure payment processing",
          "Real-time fraud detection and prevention",
          "Customized checkout experience",
          "Transaction reporting and reconciliation tools"
        ],
        benefits: [
          "Increased conversion rates with smooth checkout",
          "Reduced cart abandonment with trusted payment options",
          "Lower risk of fraud and chargebacks",
          "Enhanced customer trust with secure processing",
          "Global reach with multi-currency support",
          "Streamlined financial reconciliation process"
        ]
      },
      {
        id: "subscription-billing",
        title: "Subscription Billing",
        slug: "subscription-billing",
        icon: CreditCard,
        description: "Recurring billing solutions for subscription-based business models",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
        features: [
          "Flexible subscription plan management",
          "Automated recurring billing and invoicing",
          "Dunning management for failed payments",
          "Customer self-service portal for subscriptions",
          "Free trial and freemium model support",
          "Proration and subscription changes handling"
        ],
        benefits: [
          "Predictable revenue streams with recurring billing",
          "Reduced churn through automated retry logic",
          "Improved customer lifetime value",
          "Enhanced cash flow management",
          "Simplified revenue recognition for accounting",
          "Scalable solution for growing subscription businesses"
        ]
      },
      {
        id: "multi-currency-support",
        title: "Multi-Currency Support",
        slug: "multi-currency-support",
        icon: CreditCard,
        description: "Support for international transactions with multiple currencies",
        image: "https://images.unsplash.com/photo-1521409859178-122d3193e3b4?auto=format&fit=crop&q=80",
        features: [
          "Real-time currency conversion",
          "Local payment method support by region",
          "Dynamic pricing in local currencies",
          "Tax and VAT compliance for global transactions",
          "Multi-language checkout experience",
          "Currency-specific reporting and analytics"
        ],
        benefits: [
          "Expanded global market reach",
          "Increased conversion rates in international markets",
          "Enhanced customer experience for global users",
          "Simplified international tax compliance",
          "Reduced currency conversion fees for customers",
          "Improved financial forecasting with currency reporting"
        ]
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
    description: ["Our e-commerce marketing services help you attract more customers and increase sales. We use data-driven strategies to optimize your marketing efforts and maximize your ROI."],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "seo-for-ecommerce",
        title: "SEO for E-commerce",
        slug: "seo-for-ecommerce",
        icon: TrendingUp,
        description: "Search engine optimization strategies specifically for online stores",
        image: "https://images.unsplash.com/photo-1571721795195-a2b7d27b2434?auto=format&fit=crop&q=80",
        features: [
          "Product page SEO optimization",
          "Category page structure and optimization",
          "Structured data implementation for rich snippets",
          "Duplicate content management",
          "Mobile optimization for e-commerce",
          "Site speed improvement for better rankings"
        ],
        benefits: [
          "Increased organic traffic and product visibility",
          "Higher rankings for product-related searches",
          "Improved click-through rates with rich snippets",
          "Lower customer acquisition costs than paid channels",
          "Long-term sustainable traffic growth",
          "Better user experience leading to higher conversions"
        ]
      },
      {
        id: "ppc-campaigns",
        title: "PPC Campaigns",
        slug: "ppc-campaigns",
        icon: TrendingUp,
        description: "Pay-per-click advertising campaigns on Google, Facebook, and Instagram",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
        features: [
          "Google Shopping campaign management",
          "Social media advertising for products",
          "Retargeting campaigns for cart abandonment",
          "Dynamic product ads implementation",
          "Keyword research and competitive analysis",
          "A/B testing of ad creative and landing pages"
        ],
        benefits: [
          "Immediate traffic and visibility for new products",
          "Highly targeted campaigns based on user intent",
          "Measurable ROI with advanced attribution",
          "Flexible budget control and optimization",
          "Increased conversions through strategic retargeting",
          "Data-driven insights for product development"
        ]
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        slug: "email-marketing",
        icon: TrendingUp,
        description: "Automated email campaigns to nurture leads and increase customer retention",
        image: "https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?auto=format&fit=crop&q=80",
        features: [
          "Abandoned cart recovery emails",
          "Personalized product recommendations",
          "Customer segmentation and targeting",
          "Automated welcome and onboarding sequences",
          "Post-purchase follow-up and review requests",
          "Re-engagement campaigns for inactive customers"
        ],
        benefits: [
          "Higher conversion rates from abandoned carts",
          "Increased repeat purchases and customer loyalty",
          "Improved customer lifetime value",
          "Cost-effective marketing channel with high ROI",
          "Enhanced product discovery through recommendations",
          "Valuable customer feedback through review generation"
        ]
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
    description: ["We implement order fulfillment solutions that automate and streamline your order processing workflow. Our systems help you manage inventory, process orders efficiently, and provide a better customer experience."],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "inventory-management",
        title: "Inventory Management",
        slug: "inventory-management",
        icon: Package,
        description: "Real-time inventory tracking and management across multiple channels",
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
        features: [
          "Multi-location inventory tracking",
          "Automated stock level alerts and reordering",
          "Barcode and QR code scanning systems",
          "Inventory forecasting and demand planning",
          "Bundle and kitting functionality",
          "Supplier and purchase order management"
        ],
        benefits: [
          "Reduced stockouts and overselling issues",
          "Lower inventory holding costs with optimized levels",
          "Improved cash flow with better inventory turnover",
          "Enhanced customer satisfaction with accurate availability",
          "Streamlined warehouse operations and picking",
          "Data-driven purchasing decisions"
        ]
      },
      {
        id: "shipping-integration",
        title: "Shipping Integration",
        slug: "shipping-integration",
        icon: Package,
        description: "Integration with shipping carriers for automated label generation and tracking",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
        features: [
          "Multi-carrier shipping rate comparison",
          "Automated label generation and printing",
          "Order tracking and delivery notifications",
          "International shipping documentation",
          "Shipping rules and logic customization",
          "Dimensional weight calculation and optimization"
        ],
        benefits: [
          "Reduced shipping costs with rate shopping",
          "Faster order processing and fulfillment",
          "Enhanced customer experience with tracking updates",
          "Fewer errors in shipping label generation",
          "Simplified international shipping compliance",
          "Scalable solution for growing order volumes"
        ]
      },
      {
        id: "returns-management",
        title: "Returns Management",
        slug: "returns-management",
        icon: Package,
        description: "Streamlined returns processing and customer service solutions",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80",
        features: [
          "Self-service return portal for customers",
          "Automated return authorization and label generation",
          "Return reason tracking and analysis",
          "Refund and store credit processing",
          "Restocking and inventory update automation",
          "Quality control inspection workflow"
        ],
        benefits: [
          "Improved customer satisfaction with easy returns",
          "Reduced customer service workload",
          "Valuable insights from return reason analytics",
          "Faster processing of returns and refunds",
          "Better inventory management of returned items",
          "Reduced operational costs for returns handling"
        ]
      }
    ]
  }
];

export default ecommerceServices;
