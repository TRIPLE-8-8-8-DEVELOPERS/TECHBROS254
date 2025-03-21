import {
  BarChart3,
  LineChart,
  TrendingUp,
  PieChart,
  Briefcase,
  GanttChartSquare,
  Clock,
  BookOpen,
  Terminal,
  Bot,
  GitFork,
  Signal,
  AlertCircle,
  BarChart4,
  Smartphone,
  Wallet
} from "lucide-react";
import { ServiceDetail } from "./types";

export const forexServices: ServiceDetail[] = [
  {
    id: "forex-trading",
    slug: "forex-trading",
    title: "Forex Trading Solutions",
    icon: TrendingUp,
    shortDescription: "Comprehensive forex trading platforms and tools to help traders maximize their potential in the foreign exchange market.",
    description: [
      "Our forex trading solutions provide traders with powerful tools and platforms to navigate the complex foreign exchange market with confidence.",
      "From beginner-friendly interfaces to advanced algorithmic trading capabilities, we offer customized solutions that cater to traders of all experience levels.",
      "With real-time market data, advanced charting tools, and seamless execution, our forex trading solutions help you make informed decisions and execute trades efficiently."
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    category: "Forex Trading",
    subcategories: [
      {
        id: "forex-platforms",
        slug: "trading-platforms",
        title: "Custom Trading Platforms",
        description: "Tailor-made trading platforms designed to meet your specific trading needs and strategies.",
        icon: Terminal,
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80"
      },
      {
        id: "forex-algorithms",
        slug: "trading-algorithms",
        title: "Algorithmic Trading Systems",
        description: "Sophisticated algorithmic trading systems that execute trades based on pre-defined strategies and market conditions.",
        icon: Bot,
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80"
      },
      {
        id: "forex-signals",
        slug: "trading-signals",
        title: "Trading Signal Services",
        description: "Expert signal services that provide timely trade recommendations based on technical and fundamental analysis.",
        icon: Signal,
        image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&q=80"
      },
      {
        id: "forex-risk",
        slug: "risk-management",
        title: "Risk Management Tools",
        description: "Advanced risk management tools to protect your capital and optimize your trading performance.",
        icon: AlertCircle,
        image: "https://images.unsplash.com/photo-1613843433065-819a04a47faf?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Real-time Market Data",
        description: "Access to real-time pricing, charts, and market news for informed decision-making."
      },
      {
        title: "Advanced Trading Tools",
        description: "Technical analysis indicators, drawing tools, and customizable dashboards."
      },
      {
        title: "Seamless Execution",
        description: "Fast and reliable trade execution with minimal slippage."
      },
      {
        title: "Multi-device Compatibility",
        description: "Trade from anywhere using desktop, web, and mobile platforms."
      }
    ],
    processSteps: [
      {
        title: "Requirements Analysis",
        description: "We analyze your trading style, goals, and requirements to design a solution that fits your needs."
      },
      {
        title: "Custom Development",
        description: "Our team develops a tailored trading solution with the features and capabilities you need."
      },
      {
        title: "Testing and Optimization",
        description: "Rigorous testing and optimization to ensure reliability, performance, and accuracy."
      },
      {
        title: "Deployment and Training",
        description: "Seamless deployment with comprehensive training and support to help you get the most out of your trading system."
      }
    ],
    technologies: [
      "MetaTrader 4/5 Integration",
      "C++",
      "Python",
      "TensorFlow",
      "TradingView",
      "REST APIs",
      "WebSockets",
      "Docker",
      "AWS",
      "Machine Learning"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1642543348745-268b5ed7d8e7?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["technical-analysis", "market-research", "trading-education"]
  },
  {
    id: "technical-analysis",
    slug: "technical-analysis",
    title: "Technical Analysis Solutions",
    icon: LineChart,
    shortDescription: "Advanced technical analysis tools and indicators to identify trading opportunities and market trends.",
    description: [
      "Our technical analysis solutions provide traders with powerful tools to analyze price movements, identify trends, and spot trading opportunities.",
      "With customizable indicators, pattern recognition algorithms, and automated analysis tools, we help traders make data-driven decisions and develop effective trading strategies.",
      "Whether you're a technical analyst, day trader, or swing trader, our solutions offer the depth and flexibility needed to gain an edge in the forex market."
    ],
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80",
    category: "Forex Trading",
    subcategories: [
      {
        id: "custom-indicators",
        slug: "custom-indicators",
        title: "Custom Technical Indicators",
        description: "Tailor-made technical indicators designed to match your specific trading methodology and requirements.",
        icon: BarChart4,
        image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80"
      },
      {
        id: "pattern-recognition",
        slug: "pattern-recognition",
        title: "Pattern Recognition Systems",
        description: "Advanced systems that automatically identify chart patterns and provide actionable trading signals.",
        icon: GanttChartSquare,
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
      },
      {
        id: "backtesting",
        slug: "backtesting",
        title: "Strategy Backtesting Tools",
        description: "Comprehensive backtesting tools to evaluate and refine your trading strategies using historical data.",
        icon: Clock,
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Comprehensive Indicator Library",
        description: "Access to a wide range of standard and advanced technical indicators."
      },
      {
        title: "Multi-timeframe Analysis",
        description: "Analyze market conditions across multiple timeframes simultaneously."
      },
      {
        title: "Automated Pattern Detection",
        description: "Automatic identification of chart patterns and potential trade setups."
      },
      {
        title: "Custom Alerting System",
        description: "Customizable alerts for price movements, indicator crossovers, and pattern formations."
      }
    ],
    technologies: [
      "Python",
      "R",
      "TradingView Pine Script",
      "MetaTrader MQL",
      "Pandas",
      "NumPy",
      "TA-Lib",
      "Machine Learning",
      "Neural Networks",
      "Cloud Computing"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["forex-trading", "market-research", "trading-education"]
  },
  {
    id: "market-research",
    slug: "market-research",
    title: "Forex Market Research",
    icon: PieChart,
    shortDescription: "Comprehensive market research and analysis to help traders understand market dynamics and make informed decisions.",
    description: [
      "Our forex market research services provide traders with in-depth analysis and insights into global currency markets and economic conditions.",
      "From fundamental analysis of economic indicators to sentiment analysis and intermarket correlations, we offer the research tools and data needed to develop a comprehensive market view.",
      "With regular reports, real-time news analysis, and expert commentary, our market research services help traders stay ahead of market developments and identify profitable trading opportunities."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    category: "Forex Trading",
    subcategories: [
      {
        id: "fundamental-analysis",
        slug: "fundamental-analysis",
        title: "Fundamental Analysis Tools",
        description: "Tools and services for analyzing economic indicators, central bank policies, and geopolitical events.",
        icon: Briefcase,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
      },
      {
        id: "sentiment-analysis",
        slug: "sentiment-analysis",
        title: "Market Sentiment Analysis",
        description: "Advanced tools to gauge market sentiment through social media, news, and positioning data.",
        icon: BarChart3,
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Economic Calendar",
        description: "Comprehensive calendar of economic events and data releases with expected impact assessments."
      },
      {
        title: "Central Bank Monitoring",
        description: "Analysis of central bank policies, statements, and their potential impact on currency markets."
      },
      {
        title: "Intermarket Analysis",
        description: "Tools to analyze correlations between forex, commodities, equities, and fixed-income markets."
      },
      {
        title: "Geopolitical Risk Assessment",
        description: "Evaluation of geopolitical developments and their potential impact on currency markets."
      }
    ],
    technologies: [
      "Natural Language Processing",
      "Sentiment Analysis Algorithms",
      "Big Data Analytics",
      "Machine Learning",
      "Time Series Analysis",
      "Statistical Models",
      "API Integrations",
      "Cloud-based Data Processing"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599658880077-e9d7a7e8cf6d?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["forex-trading", "technical-analysis", "trading-education"]
  },
  {
    id: "trading-education",
    slug: "trading-education",
    title: "Forex Trading Education",
    icon: BookOpen,
    shortDescription: "Comprehensive educational resources and training programs to help traders develop their skills and knowledge.",
    description: [
      "Our forex trading education services provide traders with the knowledge, skills, and resources needed to navigate the complex world of currency trading.",
      "From beginner-friendly courses to advanced strategy development workshops, we offer comprehensive educational programs designed to help traders at all levels improve their trading results.",
      "With a focus on practical skills, risk management, and psychological aspects of trading, our educational services aim to develop well-rounded traders capable of consistent success in the forex market."
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    category: "Forex Trading",
    subcategories: [
      {
        id: "trading-courses",
        slug: "trading-courses",
        title: "Online Trading Courses",
        description: "Structured online courses covering all aspects of forex trading from basic concepts to advanced strategies.",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
      },
      {
        id: "trading-mentorship",
        slug: "trading-mentorship",
        title: "One-on-One Mentorship",
        description: "Personalized mentorship programs with experienced traders to accelerate your trading development.",
        icon: GitFork,
        image: "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Structured Learning Path",
        description: "Progressive curriculum designed to build trading knowledge and skills systematically."
      },
      {
        title: "Practical Exercises",
        description: "Hands-on exercises and simulations to apply trading concepts in realistic market scenarios."
      },
      {
        title: "Live Trading Sessions",
        description: "Observe experienced traders analyze markets and execute trades in real-time."
      },
      {
        title: "Trading Psychology Training",
        description: "Guidance on developing the mental discipline and emotional control needed for successful trading."
      }
    ],
    technologies: [
      "LMS Platforms",
      "Video Conferencing",
      "Trading Simulators",
      "Interactive Charting Tools",
      "Performance Analytics",
      "Mobile Learning Apps"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["forex-trading", "technical-analysis", "market-research"]
  }
];

export default forexServices;
