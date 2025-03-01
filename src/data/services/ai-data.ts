
import { BarChartHorizontal, BrainCircuit, CircleDashed, Database, LineChart } from "lucide-react";
import { ServiceDetail } from "./types";

export const aiDataServices: ServiceDetail[] = [
  {
    id: 7,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    category: "AI & Data",
    shortDescription: "Predictive analytics, automation, and intelligent business solutions.",
    description: [
      "Our AI and Machine Learning services help businesses leverage the power of artificial intelligence to gain valuable insights, automate processes, and create intelligent products. We develop custom AI solutions that solve complex business problems and create competitive advantages.",
      "From predictive analytics and natural language processing to computer vision and recommendation systems, we implement a wide range of AI technologies tailored to your specific business needs. Our team of data scientists and machine learning engineers brings extensive experience in developing and deploying production-grade AI systems.",
      "We follow a practical approach to AI implementation, focusing on solutions that deliver measurable business value. We work closely with your team to identify the right use cases, develop proof-of-concepts, and scale to full implementation with careful attention to data quality, model performance, and ethical considerations."
    ],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&w=1200&q=80",
    keyFeatures: [
      {
        title: "Predictive Analytics",
        description: "Forecasting trends and outcomes based on historical data patterns"
      },
      {
        title: "Natural Language Processing",
        description: "Enabling systems to understand and interact using human language"
      },
      {
        title: "Computer Vision",
        description: "Image recognition and analysis for various business applications"
      },
      {
        title: "Recommendation Systems",
        description: "Personalized suggestions based on user behavior and preferences"
      },
      {
        title: "Process Automation",
        description: "Intelligent automation of repetitive tasks and complex workflows"
      },
      {
        title: "Data Mining",
        description: "Extracting valuable insights from large and complex datasets"
      }
    ],
    processSteps: [
      {
        title: "Problem Definition",
        description: "Identifying specific business challenges that AI can effectively address."
      },
      {
        title: "Data Assessment",
        description: "Evaluating available data sources, quality, and additional requirements."
      },
      {
        title: "Solution Design",
        description: "Designing the appropriate AI approach and technical architecture."
      },
      {
        title: "Model Development",
        description: "Creating and training machine learning models based on your data."
      },
      {
        title: "Testing & Validation",
        description: "Rigorously evaluating model accuracy, performance, and reliability."
      },
      {
        title: "Deployment & Monitoring",
        description: "Implementing AI solutions in production and ensuring ongoing performance."
      }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision", "Neural Networks", "Deep Learning"],
    showcaseImages: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?auto=format&w=600&q=80",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&w=600&q=80"
    ],
    relatedServices: ["custom-software-development", "data-analytics", "cloud-solutions"],
    subcategories: [
      {
        id: 701,
        slug: "machine-learning",
        title: "Machine Learning",
        description: "Custom machine learning models and algorithms that enable your systems to learn from data and improve performance without explicit programming.",
        icon: BrainCircuit,
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&w=600&q=80"
      },
      {
        id: 702,
        slug: "natural-language-processing",
        title: "Natural Language Processing",
        description: "AI systems that can understand, interpret, and generate human language, powering chatbots, sentiment analysis, and content generation.",
        icon: CircleDashed,
        image: "https://images.unsplash.com/photo-1655720828018-7467e7029825?auto=format&w=600&q=80"
      },
      {
        id: 703,
        slug: "data-analytics",
        title: "Data Analytics",
        description: "Advanced data analysis and visualization to extract actionable insights from your business data for better decision-making.",
        icon: BarChartHorizontal,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=600&q=80"
      },
      {
        id: 704,
        slug: "predictive-analytics",
        title: "Predictive Analytics",
        description: "Forecasting tools and models that analyze historical data to predict future outcomes and trends for proactive business planning.",
        icon: LineChart,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=600&q=80"
      },
      {
        id: 705,
        slug: "big-data",
        title: "Big Data Solutions",
        description: "Comprehensive infrastructure and tools to collect, store, process, and analyze large volumes of structured and unstructured data.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&w=600&q=80"
      }
    ]
  }
];
