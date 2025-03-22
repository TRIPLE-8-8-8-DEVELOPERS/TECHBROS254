
import { Brush, Layers, Palette, Smartphone, Monitor, Image, Text } from "lucide-react";
import { ServiceDetail } from "./types";

export const designServices: ServiceDetail[] = [
  {
    id: "ux-ui-design",
    slug: "ux-ui-design",
    title: "UX/UI Design",
    icon: Palette,
    category: "Design",
    shortDescription: "User-centered design solutions that enhance user experience and drive engagement.",
    description: [
      "Our UX/UI design services focus on creating intuitive, engaging, and user-friendly digital experiences. We combine aesthetic appeal with functional design to develop interfaces that delight users and achieve business objectives.",
      "From initial research and wireframing to high-fidelity prototypes and final designs, our design process is comprehensive and collaborative. We work closely with stakeholders to understand user needs, business goals, and technical constraints.",
      "Our designs are not just beautiful—they're strategic, accessible, and optimized for conversion. We incorporate best practices, conduct usability testing, and iterate based on feedback to ensure that the final product delivers exceptional user experiences."
    ],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "User Research",
        description: "Understanding user needs, behaviors, and motivations through various research methods"
      },
      {
        title: "Information Architecture",
        description: "Organizing and structuring content for optimal user navigation and findability"
      },
      {
        title: "Wireframing & Prototyping",
        description: "Creating low and high-fidelity representations of user interfaces"
      },
      {
        title: "Visual Design",
        description: "Crafting aesthetically pleasing interfaces that reflect brand identity"
      },
      {
        title: "Interaction Design",
        description: "Designing how users interact with your product to create intuitive experiences"
      },
      {
        title: "Usability Testing",
        description: "Evaluating designs with real users to identify improvements"
      }
    ],
    processSteps: [
      {
        title: "Discovery & Research",
        description: "Understanding your business, users, and competitors to inform design decisions."
      },
      {
        title: "Information Architecture",
        description: "Organizing content and functionality in a logical, user-friendly structure."
      },
      {
        title: "Wireframing",
        description: "Creating skeletal outlines of key screens and user flows."
      },
      {
        title: "Visual Design",
        description: "Applying brand elements, color schemes, and visual hierarchy to interfaces."
      },
      {
        title: "Prototyping",
        description: "Building interactive models to simulate user experience and gather feedback."
      },
      {
        title: "Testing & Refinement",
        description: "Evaluating designs with users and iterating based on insights."
      }
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Adobe Creative Suite", "Axure RP", "UsabilityHub"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&w=600&q=80"
    ],
    relatedServices: ["web-development", "mobile-development", "digital-marketing"],
    subcategories: [
      {
        id: "ux-research",
        slug: "ux-research",
        title: "UX Research",
        description: "In-depth user research to understand behaviors, needs, and motivations to create data-driven design solutions.",
        icon: Text,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&w=600&q=80",
        features: [
          "User interviews and contextual inquiry",
          "Usability testing with real users",
          "Persona development and user journey mapping",
          "Heuristic evaluation of existing interfaces",
          "A/B testing for design validation",
          "Analytics integration and data interpretation"
        ],
        benefits: [
          "Data-driven design decisions that reduce risk",
          "Deeper understanding of user needs and pain points",
          "Prioritized features based on actual user value",
          "Reduced development costs by fixing issues early",
          "Increased user satisfaction and retention",
          "Evidence-based approach to design improvements"
        ]
      },
      {
        id: "mobile-app-design",
        slug: "mobile-app-design",
        title: "Mobile App Design",
        description: "Crafting intuitive and engaging mobile app interfaces optimized for both iOS and Android platforms.",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&w=600&q=80",
        features: [
          "Platform-specific design patterns (iOS/Android)",
          "Gesture-based interaction design",
          "Adaptive layouts for different device sizes",
          "Offline-first experience design",
          "Motion design and micro-interactions",
          "Accessibility compliance for mobile"
        ],
        benefits: [
          "Higher user engagement and retention rates",
          "Reduced learning curve with intuitive interfaces",
          "Brand consistency across mobile platforms",
          "Improved app store ratings with better UX",
          "Lower development costs with clear design specs",
          "Competitive advantage in the mobile market"
        ]
      },
      {
        id: "web-design",
        slug: "web-design",
        title: "Web Design",
        description: "Creating responsive, conversion-focused websites that deliver outstanding user experiences across all devices.",
        icon: Monitor,
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&w=600&q=80",
        features: [
          "Responsive design for all screen sizes",
          "Conversion-optimized landing pages",
          "Accessible web interfaces (WCAG compliance)",
          "SEO-friendly information architecture",
          "Cross-browser compatibility testing",
          "Performance-optimized visual elements"
        ],
        benefits: [
          "Increased conversion rates and lead generation",
          "Improved search engine visibility",
          "Reduced bounce rates with engaging designs",
          "Consistent experience across all devices",
          "Broader audience reach with accessible design",
          "Strengthened brand identity and recognition"
        ]
      },
      {
        id: "design-systems",
        slug: "design-systems",
        title: "Design Systems",
        description: "Development of comprehensive design systems that ensure consistency across all digital touchpoints.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&w=600&q=80",
        features: [
          "Component libraries and pattern collections",
          "Design tokens for colors, typography, and spacing",
          "Documentation and usage guidelines",
          "Versioning and change management",
          "Integration with development workflows",
          "Shared design language across teams"
        ],
        benefits: [
          "Faster design and development cycles",
          "Consistent user experience across products",
          "Reduced design debt and maintenance costs",
          "Improved collaboration between design and development",
          "Scalable design approach for growing products",
          "Easier onboarding for new team members"
        ]
      },
      {
        id: "ui-animation",
        slug: "ui-animation",
        title: "UI Animation & Micro-interactions",
        description: "Creating subtle animations and micro-interactions that enhance usability and bring interfaces to life.",
        icon: Brush,
        image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&w=600&q=80",
        features: [
          "State transition animations",
          "Interactive feedback animations",
          "Loading state and progress indicators",
          "Scroll-based animations and parallax effects",
          "Animated illustrations and icons",
          "Performance-optimized motion design"
        ],
        benefits: [
          "Enhanced user engagement and delight",
          "Improved usability through visual feedback",
          "Stronger perceived performance and reduced wait anxiety",
          "Differentiated product experience from competitors",
          "More intuitive navigation and interaction",
          "Reinforced brand personality through motion"
        ]
      }
    ]
  }
];
