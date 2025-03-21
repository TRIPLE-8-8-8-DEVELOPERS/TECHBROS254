
import {
  Bitcoin,
  BarChart3,
  LineChart,
  Code,
  PieChart,
  Shield,
  Wallet,
  BookOpen,
  Coins,
  Network,
  Lock,
  Factory,
  Fingerprint,
  FileCode,
  BarChart4,
  Smartphone,
  BookText
} from "lucide-react";
import { ServiceDetail } from "./types";

export const cryptoServices: ServiceDetail[] = [
  {
    id: "crypto-trading",
    slug: "crypto-trading",
    title: "Cryptocurrency Trading Solutions",
    icon: Bitcoin,
    shortDescription: "Advanced cryptocurrency trading platforms and tools to navigate the dynamic digital asset market.",
    description: [
      "Our cryptocurrency trading solutions provide traders and investors with powerful tools to navigate the volatile and fast-paced digital asset market.",
      "From intuitive trading interfaces to advanced algorithmic systems, we deliver solutions that enable efficient execution, real-time market data, and comprehensive portfolio management.",
      "Whether you're a retail trader or an institutional investor, our cryptocurrency trading solutions help you capitalize on opportunities across centralized and decentralized exchanges."
    ],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80",
    category: "Cryptocurrency",
    subcategories: [
      {
        id: "exchange-integration",
        slug: "exchange-integration",
        title: "Exchange Integration Solutions",
        description: "Seamless integration with major cryptocurrency exchanges for unified trading and portfolio management.",
        icon: Network,
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80"
      },
      {
        id: "crypto-algorithms",
        slug: "crypto-algorithms",
        title: "Crypto Trading Algorithms",
        description: "Sophisticated algorithmic trading systems designed specifically for cryptocurrency markets.",
        icon: Code,
        image: "https://images.unsplash.com/photo-1566711293561-dd9ea56a2b61?auto=format&fit=crop&q=80"
      },
      {
        id: "defi-trading",
        slug: "defi-trading",
        title: "DeFi Trading Tools",
        description: "Specialized tools for trading and yield farming across decentralized finance protocols.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80"
      },
      {
        id: "crypto-portfolio",
        slug: "portfolio-management",
        title: "Portfolio Management Systems",
        description: "Comprehensive portfolio tracking and management solutions for digital asset investors.",
        icon: Wallet,
        image: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Multi-Exchange Trading",
        description: "Trade across multiple exchanges from a single interface."
      },
      {
        title: "Advanced Order Types",
        description: "Access to a wide range of order types including conditional and algorithmic orders."
      },
      {
        title: "Real-time Market Data",
        description: "Up-to-the-second price data, order book visualization, and trading activity."
      },
      {
        title: "Secure Asset Management",
        description: "Secure storage and management of digital assets with comprehensive security features."
      }
    ],
    processSteps: [
      {
        title: "Requirements Assessment",
        description: "We analyze your trading requirements, exchange preferences, and security needs."
      },
      {
        title: "Custom Development",
        description: "Our team develops a tailored trading solution that meets your specific requirements."
      },
      {
        title: "Integration & Testing",
        description: "Seamless integration with exchanges and rigorous testing to ensure reliability and performance."
      },
      {
        title: "Deployment & Support",
        description: "Smooth deployment with ongoing support and updates to adapt to the evolving crypto market."
      }
    ],
    technologies: [
      "Exchange APIs",
      "WebSocket Connections",
      "Smart Contracts",
      "EVM Compatibility",
      "Blockchain Nodes",
      "High-Performance Databases",
      "Python",
      "Node.js",
      "Rust",
      "React/Vue.js"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["blockchain-development", "crypto-security", "crypto-research"]
  },
  {
    id: "blockchain-development",
    slug: "blockchain-development",
    title: "Blockchain Development",
    icon: Coins,
    shortDescription: "Custom blockchain solutions, smart contracts, and decentralized applications for businesses and enterprises.",
    description: [
      "Our blockchain development services help businesses leverage distributed ledger technology to build innovative solutions and transform their operations.",
      "From smart contract development to full-scale decentralized applications (dApps), we provide end-to-end blockchain development services across multiple platforms and protocols.",
      "With expertise in public and private blockchains, our team delivers secure, scalable, and efficient solutions that address real-world business challenges."
    ],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
    category: "Cryptocurrency",
    subcategories: [
      {
        id: "smart-contracts",
        slug: "smart-contracts",
        title: "Smart Contract Development",
        description: "Design and development of secure and efficient smart contracts for various blockchain platforms.",
        icon: FileCode,
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80"
      },
      {
        id: "dapp-development",
        slug: "dapp-development",
        title: "Decentralized Application Development",
        description: "End-to-end development of decentralized applications with intuitive user interfaces.",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1658218085086-34700a8391c5?auto=format&fit=crop&q=80"
      },
      {
        id: "token-development",
        slug: "token-development",
        title: "Token Development & Integration",
        description: "Creation and integration of utility tokens, security tokens, and NFTs for your business.",
        icon: Coins,
        image: "https://images.unsplash.com/photo-1629884615266-843ee19b2b26?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Cross-Chain Development",
        description: "Development across multiple blockchain platforms including Ethereum, Solana, Polkadot, and more."
      },
      {
        title: "Gas Optimization",
        description: "Optimize smart contracts for efficiency and minimal transaction costs."
      },
      {
        title: "Security-First Approach",
        description: "Rigorous security practices and audits to ensure robust and secure blockchain solutions."
      },
      {
        title: "Scalable Architecture",
        description: "Design and implementation of scalable blockchain architectures for high-performance applications."
      }
    ],
    technologies: [
      "Solidity",
      "Rust",
      "Go",
      "JavaScript/TypeScript",
      "Ethereum",
      "Solana",
      "Polkadot",
      "Avalanche",
      "IPFS",
      "Layer 2 Solutions"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1642543348745-268b5ed7d8e7?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["crypto-trading", "crypto-security", "defi-development"]
  },
  {
    id: "crypto-security",
    slug: "crypto-security",
    title: "Cryptocurrency Security",
    icon: Shield,
    shortDescription: "Comprehensive security solutions to protect digital assets and blockchain infrastructure from threats and vulnerabilities.",
    description: [
      "Our cryptocurrency security services provide robust protection for digital assets, exchanges, and blockchain infrastructure against sophisticated threats and vulnerabilities.",
      "From security audits and penetration testing to secure wallet development and custody solutions, we offer comprehensive security services tailored to the unique challenges of the cryptocurrency ecosystem.",
      "With a team of blockchain security experts and a proactive approach to security, we help businesses and individuals safeguard their digital assets and maintain trust in their blockchain operations."
    ],
    image: "https://images.unsplash.com/photo-1561539580-536b62ca8bea?auto=format&fit=crop&q=80",
    category: "Cryptocurrency",
    subcategories: [
      {
        id: "security-audits",
        slug: "security-audits",
        title: "Smart Contract Audits",
        description: "Comprehensive audits to identify vulnerabilities and security issues in smart contract code.",
        icon: Lock,
        image: "https://images.unsplash.com/photo-1563986768494-7fc182f242f5?auto=format&fit=crop&q=80"
      },
      {
        id: "custody-solutions",
        slug: "custody-solutions",
        title: "Digital Asset Custody Solutions",
        description: "Secure storage and management solutions for digital assets with institutional-grade security.",
        icon: Wallet,
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80"
      },
      {
        id: "kyc-aml",
        slug: "kyc-aml",
        title: "KYC/AML Compliance Systems",
        description: "Compliance systems to meet regulatory requirements for cryptocurrency operations.",
        icon: Fingerprint,
        image: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Vulnerability Assessment",
        description: "Thorough assessment of blockchain applications to identify security vulnerabilities."
      },
      {
        title: "Secure Key Management",
        description: "Advanced key management solutions for secure storage and transaction signing."
      },
      {
        title: "Anti-Fraud Systems",
        description: "Systems to detect and prevent fraudulent activities in cryptocurrency operations."
      },
      {
        title: "Compliance Framework",
        description: "Frameworks to ensure compliance with evolving cryptocurrency regulations."
      }
    ],
    technologies: [
      "Hardware Security Modules",
      "Multi-signature Technology",
      "Zero-Knowledge Proofs",
      "Secure MPC",
      "Cold Storage Solutions",
      "Blockchain Analysis Tools",
      "Formal Verification",
      "Penetration Testing"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605258375722-baa2a2333181?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["blockchain-development", "crypto-trading", "crypto-research"]
  },
  {
    id: "crypto-research",
    slug: "crypto-research",
    title: "Cryptocurrency Research & Analysis",
    icon: BarChart4,
    shortDescription: "In-depth research and analysis of cryptocurrency markets, projects, and trends to inform investment decisions.",
    description: [
      "Our cryptocurrency research and analysis services provide investors and businesses with actionable insights into digital asset markets, blockchain projects, and industry trends.",
      "From fundamental analysis of blockchain protocols to technical analysis of cryptocurrency markets, we offer comprehensive research to help you navigate the complex and rapidly evolving cryptocurrency landscape.",
      "With a team of experienced analysts and data scientists, we deliver objective, data-driven research that cuts through the noise and helps you make informed decisions in the cryptocurrency space."
    ],
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80",
    category: "Cryptocurrency",
    subcategories: [
      {
        id: "project-analysis",
        slug: "project-analysis",
        title: "Blockchain Project Analysis",
        description: "Comprehensive evaluation of blockchain projects, tokens, and protocols for investment potential.",
        icon: PieChart,
        image: "https://images.unsplash.com/photo-1621501103258-d8f65c497070?auto=format&fit=crop&q=80"
      },
      {
        id: "market-intelligence",
        slug: "market-intelligence",
        title: "Crypto Market Intelligence",
        description: "Real-time market intelligence and analysis of cryptocurrency trends and movements.",
        icon: LineChart,
        image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&q=80"
      },
      {
        id: "regulatory-analysis",
        slug: "regulatory-analysis",
        title: "Regulatory Analysis",
        description: "Analysis of cryptocurrency regulations and their impact on markets and projects.",
        icon: BookText,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
      }
    ],
    keyFeatures: [
      {
        title: "Tokenomics Analysis",
        description: "In-depth analysis of token economics, distribution, and utility."
      },
      {
        title: "Technical Research",
        description: "Technical analysis of cryptocurrency prices and market trends."
      },
      {
        title: "On-Chain Analytics",
        description: "Analysis of blockchain data to identify trends and investor behavior."
      },
      {
        title: "Industry Reports",
        description: "Comprehensive reports on cryptocurrency sectors and emerging trends."
      }
    ],
    technologies: [
      "Data Science",
      "Machine Learning",
      "Natural Language Processing",
      "Blockchain Analytics",
      "Graph Analysis",
      "Statistical Modeling",
      "Sentiment Analysis",
      "Predictive Analytics"
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568234928966-359c35dd8c25?auto=format&fit=crop&q=80"
    ],
    relatedServices: ["crypto-trading", "blockchain-development", "crypto-security"]
  }
];

export default cryptoServices;
