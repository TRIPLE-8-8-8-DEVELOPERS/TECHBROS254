
import { BarChart3, Globe, Mail, Megaphone, Search, Share2 } from "lucide-react";
import { ServiceDetail } from "./types";

export const marketingServices: ServiceDetail[] = [
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: BarChart3,
    category: "Marketing",
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
      {
        title: "Analytics & Reporting",
        description: "Comprehensive tracking and analysis of marketing performance"
      }
    ],
    processSteps: [
      {
        title: "Discovery & Analysis",
        description: "Understanding your business, audience, competitors, and current digital presence."
      },
      {
        title: "Strategy Development",
        description: "Creating a tailored marketing plan with specific goals and metrics."
      },
      {
        title: "Implementation",
        description: "Executing campaigns across selected digital channels."
      },
      {
        title: "Monitoring & Optimization",
        description: "Continuous tracking and refinement of campaign performance."
      },
      {
        title: "Reporting & Analysis",
        description: "Regular reports with insights and recommendations for improvement."
      },
      {
        title: "Strategy Refinement",
        description: "Evolving your marketing approach based on results and changing market conditions."
      }
    ],
    technologies: ["SEO Tools", "Google Ads", "Social Media Platforms", "Email Marketing Software", "Content Management Systems", "Analytics Platforms"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&w=600&q=80"
    ],
    relatedServices: ["web-development", "content-creation", "brand-strategy"],
    subcategories: [
      {
        id: "search-engine-optimization",
        slug: "search-engine-optimization",
        title: "Search Engine Optimization",
        description: "Improve your website's visibility in search engine results to drive more organic traffic and potential customers to your business.",
        icon: Search,
        image: "https://images.unsplash.com/photo-1571715696756-5000d9c2c115?auto=format&w=600&q=80"
      },
      {
        id: "social-media-marketing",
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Engage with your audience and build brand awareness through strategic content and campaigns across social media platforms.",
        icon: Share2,
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&w=600&q=80"
      },
      {
        id: "content-marketing",
        slug: "content-marketing",
        title: "Content Marketing",
        description: "Attract and retain customers through valuable, relevant content that establishes your brand as an industry authority.",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&w=600&q=80"
      },
      {
        id: "email-marketing",
        slug: "email-marketing",
        title: "Email Marketing",
        description: "Nurture leads and drive conversions with targeted, personalized email campaigns that deliver the right message at the right time.",
        icon: Mail,
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&w=600&q=80"
      },
      {
        id: "ppc-advertising",
        slug: "ppc-advertising",
        title: "PPC Advertising",
        description: "Drive immediate traffic and conversions with strategically targeted pay-per-click campaigns across search engines and social platforms.",
        icon: Megaphone,
        image: "https://images.unsplash.com/photo-1617131033266-46504630b5af?auto=format&w=600&q=80"
      }
    ]
  }
];
