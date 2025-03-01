
import { LineChart } from "lucide-react";
import { ServiceDetail } from "./types";

export const consultingServices: ServiceDetail[] = [
  {
    id: 5,
    slug: "it-consulting",
    title: "IT Consulting",
    icon: LineChart,
    category: "Consulting",
    shortDescription: "Strategic guidance for digital transformation and tech infrastructure optimization.",
    description: [
      "Our IT consulting services provide strategic technology guidance to help businesses leverage digital solutions to achieve their goals. We work closely with your team to understand your business challenges, identify opportunities for improvement, and develop technology roadmaps that align with your objectives.",
      "Our experienced consultants bring industry-specific expertise and a deep understanding of emerging technologies to provide valuable insights and practical recommendations. Whether you're planning a digital transformation initiative, implementing new systems, or optimizing existing infrastructure, we provide the strategic direction needed for success.",
      "We take a holistic approach to IT consulting, considering not just technology but also people, processes, and business objectives. Our recommendations are pragmatic, focused on delivering measurable business value, and designed to be implemented successfully within your organization."
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Digital Transformation",
        description: "Strategic guidance for adopting digital technologies to transform your business"
      },
      {
        title: "Technology Assessment",
        description: "Comprehensive evaluation of your current IT landscape and capabilities"
      },
      {
        title: "Strategic Planning",
        description: "Development of technology roadmaps aligned with business objectives"
      },
      {
        title: "Vendor Selection",
        description: "Objective assistance in choosing the right technology partners and solutions"
      },
      {
        title: "Process Optimization",
        description: "Identification of opportunities to streamline operations using technology"
      },
      {
        title: "Change Management",
        description: "Strategies for successful technology adoption across your organization"
      }
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "Understanding your business, challenges, objectives, and current technology landscape."
      },
      {
        title: "Assessment",
        description: "Evaluating your IT infrastructure, applications, processes, and capabilities."
      },
      {
        title: "Strategy Development",
        description: "Creating a tailored technology roadmap with clear recommendations and priorities."
      },
      {
        title: "Solution Design",
        description: "Developing detailed specifications for recommended technology solutions."
      },
      {
        title: "Implementation Support",
        description: "Providing guidance and oversight during the execution of recommendations."
      },
      {
        title: "Review & Refinement",
        description: "Measuring outcomes and adjusting strategies based on results and feedback."
      }
    ],
    technologies: ["Digital Transformation", "Process Automation", "Cloud Strategy", "Data Analytics", "IT Governance", "Enterprise Architecture"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1600880292-0b7de84388bd?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&w=600&q=80"
    ],
    relatedServices: ["digital-strategy", "cloud-solutions", "cybersecurity"]
  }
];
