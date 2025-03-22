
import { BarChartHorizontal, BrainCircuit, CircleDashed, Database, LineChart } from "lucide-react";
import { ServiceDetail } from "./types";

export const aiDataServices: ServiceDetail[] = [
  {
    id: "ai-machine-learning",
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
        id: "machine-learning",
        slug: "machine-learning",
        title: "Machine Learning",
        description: "Custom machine learning models and algorithms that enable your systems to learn from data and improve performance without explicit programming.",
        icon: BrainCircuit,
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&w=600&q=80",
        features: [
          "Supervised and unsupervised learning algorithms",
          "Feature engineering and selection",
          "Model training, tuning, and optimization",
          "Cross-validation and performance evaluation",
          "Ensemble methods for improved accuracy",
          "Deployment pipelines for production environments"
        ],
        benefits: [
          "Enhanced decision-making through data-driven insights",
          "Identification of patterns invisible to human analysis",
          "Automation of complex analytical tasks",
          "Improved accuracy and efficiency over time",
          "Scalable solution for handling large datasets",
          "Competitive advantage through predictive capabilities"
        ]
      },
      {
        id: "natural-language-processing",
        slug: "natural-language-processing",
        title: "Natural Language Processing",
        description: "AI systems that can understand, interpret, and generate human language, powering chatbots, sentiment analysis, and content generation.",
        icon: CircleDashed,
        image: "https://images.unsplash.com/photo-1655720828018-7467e7029825?auto=format&w=600&q=80",
        features: [
          "Text classification and sentiment analysis",
          "Entity recognition and relationship extraction",
          "Chatbot and conversational AI development",
          "Language generation and summarization",
          "Multilingual support and translation",
          "Document understanding and topic modeling"
        ],
        benefits: [
          "Automated customer support through intelligent chatbots",
          "Customer sentiment insights from reviews and feedback",
          "Content moderation at scale for social platforms",
          "Enhanced search capabilities with semantic understanding",
          "Automated content generation and summarization",
          "Improved accessibility through language translation"
        ]
      },
      {
        id: "data-analytics",
        slug: "data-analytics",
        title: "Data Analytics",
        description: "Advanced data analysis and visualization to extract actionable insights from your business data for better decision-making.",
        icon: BarChartHorizontal,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=600&q=80",
        features: [
          "Descriptive, diagnostic, predictive, and prescriptive analytics",
          "Custom dashboards and interactive visualizations",
          "Real-time analytics and monitoring",
          "Time series analysis and forecasting",
          "ETL pipelines for data processing",
          "Statistical modeling and hypothesis testing"
        ],
        benefits: [
          "Data-driven strategic decision making",
          "Identification of business opportunities and risks",
          "Operational efficiency improvements",
          "Customer behavior insights and segmentation",
          "Performance monitoring with actionable metrics",
          "Competitive intelligence and market analysis"
        ]
      },
      {
        id: "predictive-analytics",
        slug: "predictive-analytics",
        title: "Predictive Analytics",
        description: "Forecasting tools and models that analyze historical data to predict future outcomes and trends for proactive business planning.",
        icon: LineChart,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=600&q=80",
        features: [
          "Forecasting models for business metrics",
          "Churn prediction and customer lifetime value",
          "Demand forecasting and inventory optimization",
          "Risk assessment and fraud detection",
          "Maintenance prediction for equipment and systems",
          "Sales and revenue forecasting"
        ],
        benefits: [
          "Proactive decision-making ahead of market changes",
          "Reduced costs through optimized resource allocation",
          "Improved customer retention with early intervention",
          "Minimized risks through advanced warning systems",
          "Optimized inventory levels and supply chain",
          "More accurate budgeting and financial planning"
        ]
      },
      {
        id: "big-data",
        slug: "big-data",
        title: "Big Data Solutions",
        description: "Comprehensive infrastructure and tools to collect, store, process, and analyze large volumes of structured and unstructured data.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&w=600&q=80",
        features: [
          "Distributed computing frameworks (Hadoop, Spark)",
          "Data lake and data warehouse architecture",
          "Stream processing for real-time data",
          "NoSQL and NewSQL database implementation",
          "Data governance and compliance solutions",
          "Scalable infrastructure for petabyte-scale data"
        ],
        benefits: [
          "Ability to process massive datasets beyond traditional tools",
          "Integration of diverse data sources into unified insights",
          "Real-time analytics for time-sensitive decisions",
          "Cost-effective storage of historical and current data",
          "Scalable solution that grows with your data needs",
          "Comprehensive view of business operations and customers"
        ]
      }
    ]
  }
];
