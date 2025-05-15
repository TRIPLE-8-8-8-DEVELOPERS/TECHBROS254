
import { 
  Code, 
  PenTool, 
  Server, 
  Database, 
  BarChart, 
  Users, 
  Laptop, 
  Shield, 
  Briefcase, 
  Brain, 
  LineChart, 
  Bitcoin, 
  MessageSquare, 
  HeartPulse, 
  GraduationCap, 
  ShoppingBag, 
  FileSpreadsheet, 
  Clock, 
  Building,
  Microscope,
  FileText,
  Headphones,
  Settings,
  LayoutGrid,
  MoveRight,
  Bot,
  Smartphone,
  Globe,
  DollarSign,
  PieChart
} from "lucide-react";

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  level: "Entry" | "Mid" | "Senior" | "Lead";
  salary: string;
  posted: string;
  slug: string;
  image?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  applicationProcess?: string[];
}

export const jobPositions: JobPosition[] = [
  // Original job positions
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    level: "Senior",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    slug: "senior-frontend-developer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format",
    description: "We're seeking an experienced Frontend Developer to create exceptional user experiences. You'll work with our product and design teams to build responsive, performant web applications using modern JavaScript frameworks.",
    responsibilities: [
      "Develop new user-facing features using React, TypeScript, and related technologies",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with back-end developers to integrate front-end components with server-side logic",
      "Participate in code reviews and mentor junior developers"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Advanced knowledge of React, TypeScript, and modern JavaScript",
      "Experience with state management solutions (Redux, Context API, etc.)",
      "Understanding of responsive design principles and cross-browser compatibility",
      "Familiarity with testing frameworks like Jest and React Testing Library",
      "Experience with build tools like Webpack, Vite, or Create React App"
    ],
    benefits: [
      "Competitive salary with annual performance-based bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible work arrangements with hybrid options",
      "Professional development budget for conferences and courses",
      "Regular team events and company retreats"
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    salary: "$90,000 - $110,000",
    posted: "1 week ago",
    slug: "ux-ui-designer",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format",
    description: "Join our design team to create intuitive, user-centered designs that drive engagement and satisfaction. Work closely with product managers and developers to bring your designs to life in our digital products.",
    responsibilities: [
      "Create user flows, wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing to inform design decisions",
      "Collaborate with developers to ensure proper implementation of designs",
      "Establish and maintain design systems and component libraries",
      "Stay up-to-date with UX trends and best practices",
      "Present design concepts and gather feedback from stakeholders"
    ],
    requirements: [
      "3-5 years of experience in UX/UI design",
      "Proficiency with design tools like Figma, Sketch, or Adobe XD",
      "Understanding of user-centered design principles and methodologies",
      "Experience creating responsive designs for web and mobile applications",
      "Portfolio demonstrating your design process and problem-solving skills",
      "Excellent communication and collaboration abilities"
    ]
  },
  // Additional job positions
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    salary: "$130,000 - $160,000",
    posted: "3 days ago",
    slug: "devops-engineer",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format",
    description: "We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes. You'll be responsible for ensuring our systems are reliable, secure, and scalable.",
    responsibilities: [
      "Design and implement cloud infrastructure using AWS, Azure, or GCP",
      "Create and maintain CI/CD pipelines for automated testing and deployment",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and compliance measures",
      "Collaborate with development teams to improve deployment workflows",
      "Automate routine operational tasks using infrastructure as code"
    ],
    requirements: [
      "5+ years of experience in DevOps or similar roles",
      "Strong knowledge of cloud services (AWS, Azure, or GCP)",
      "Experience with containerization technologies like Docker and Kubernetes",
      "Familiarity with infrastructure as code tools (Terraform, CloudFormation)",
      "Understanding of CI/CD tools and methodologies",
      "Scripting skills in Python, Bash, or similar languages"
    ]
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    level: "Lead",
    salary: "$140,000 - $170,000",
    posted: "5 days ago",
    slug: "product-manager",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format",
    description: "Lead the development of innovative products that solve real customer problems. You'll work at the intersection of business, technology, and user experience to define product strategy and roadmap.",
    responsibilities: [
      "Define product vision, strategy, and roadmap based on market research and customer needs",
      "Gather and prioritize product requirements and user stories",
      "Lead cross-functional teams to deliver features and products",
      "Analyze user feedback and metrics to inform product decisions",
      "Communicate product plans and updates to stakeholders",
      "Work closely with engineering, design, and marketing teams"
    ],
    requirements: [
      "7+ years of experience in product management",
      "Track record of successfully launching and scaling products",
      "Strong analytical skills and data-driven decision making",
      "Excellent communication and presentation abilities",
      "Experience with agile methodologies and project management tools",
      "Understanding of software development processes"
    ]
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    salary: "$110,000 - $140,000",
    posted: "2 weeks ago",
    slug: "data-scientist",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format",
    description: "Join our data team to extract insights from complex data sets and build models that power key business decisions. You'll work with large datasets to solve challenging problems and deliver actionable insights.",
    responsibilities: [
      "Develop machine learning models to address business problems",
      "Process, clean, and validate data from various sources",
      "Perform exploratory data analysis to discover patterns and insights",
      "Create visualizations and reports to communicate findings",
      "Collaborate with engineering teams to implement models in production",
      "Research and implement new approaches to improve results"
    ],
    requirements: [
      "3-5 years of experience in data science or related field",
      "Proficiency in Python, R, or similar languages for data analysis",
      "Experience with machine learning frameworks like TensorFlow or PyTorch",
      "Strong understanding of statistics and experimental design",
      "Familiarity with SQL and database concepts",
      "Experience with data visualization tools"
    ]
  },
  {
    id: 6,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    level: "Mid",
    salary: "$100,000 - $130,000",
    posted: "4 days ago",
    slug: "full-stack-developer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format",
    description: "We're looking for a versatile Full Stack Developer who can work across our entire technology stack. You'll develop both client and server-side applications, implement features, and maintain code quality.",
    responsibilities: [
      "Develop responsive web applications using modern frontend frameworks",
      "Build and maintain server-side logic and APIs",
      "Work with databases and optimize queries for performance",
      "Implement security and data protection measures",
      "Collaborate with team members on architecture decisions",
      "Troubleshoot and fix bugs across the application stack"
    ],
    requirements: [
      "3-5 years of experience in full stack development",
      "Strong knowledge of JavaScript/TypeScript and frontend frameworks (React, Vue, etc.)",
      "Experience with backend technologies (Node.js, Python, Java, etc.)",
      "Familiarity with database systems (SQL and NoSQL)",
      "Understanding of web security and performance optimization",
      "Experience with version control systems like Git"
    ]
  },
  {
    id: 7,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Full-time",
    level: "Mid",
    salary: "$80,000 - $100,000",
    posted: "1 week ago",
    slug: "marketing-specialist",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&auto=format"
  },
  {
    id: 8,
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    salary: "$85,000 - $105,000",
    posted: "3 days ago",
    slug: "customer-success-manager",
    image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=600&auto=format"
  },
  {
    id: 9,
    title: "Backend Developer (Python)",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    level: "Senior",
    salary: "$125,000 - $155,000",
    posted: "1 day ago",
    slug: "backend-developer-python",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&auto=format"
  },
  {
    id: 10,
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    salary: "$110,000 - $135,000",
    posted: "5 days ago",
    slug: "mobile-developer-react-native",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format"
  },
  {
    id: 11,
    title: "Technical Writer",
    department: "Product",
    location: "Boston, MA (Hybrid)",
    type: "Full-time",
    level: "Mid",
    salary: "$85,000 - $105,000",
    posted: "1 week ago",
    slug: "technical-writer",
    image: "https://images.unsplash.com/photo-1571721795195-a2d50c404584?w=600&auto=format"
  },
  {
    id: 12,
    title: "QA Engineer",
    department: "Engineering",
    location: "Denver, CO",
    type: "Full-time",
    level: "Mid",
    salary: "$90,000 - $115,000",
    posted: "3 days ago",
    slug: "qa-engineer",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format"
  },
  {
    id: 13,
    title: "Project Coordinator",
    department: "Operations",
    location: "Portland, OR",
    type: "Full-time",
    level: "Entry",
    salary: "$65,000 - $80,000",
    posted: "2 weeks ago",
    slug: "project-coordinator",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&auto=format"
  },
  {
    id: 14,
    title: "IT Support Specialist",
    department: "IT",
    location: "Chicago, IL",
    type: "Full-time",
    level: "Entry",
    salary: "$60,000 - $75,000",
    posted: "1 week ago",
    slug: "it-support-specialist",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&auto=format"
  },
  {
    id: 15,
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    salary: "$150,000 - $180,000",
    posted: "4 days ago",
    slug: "machine-learning-engineer",
    image: "https://images.unsplash.com/photo-1501159599941-ebb35cd39d35?w=600&auto=format"
  },
  {
    id: 16,
    title: "Finance Manager",
    department: "Finance",
    location: "New York, NY",
    type: "Full-time",
    level: "Lead",
    salary: "$130,000 - $160,000",
    posted: "6 days ago",
    slug: "finance-manager",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format"
  },
  {
    id: 17,
    title: "HR Specialist",
    department: "HR",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    salary: "$75,000 - $95,000",
    posted: "2 weeks ago",
    slug: "hr-specialist",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&auto=format"
  },
  {
    id: 18,
    title: "Content Creator",
    department: "Marketing",
    location: "Los Angeles, CA",
    type: "Part-time",
    level: "Entry",
    salary: "$30 - $45 per hour",
    posted: "3 days ago",
    slug: "content-creator",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=600&auto=format"
  },
  {
    id: 19,
    title: "Cloud Architect",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    level: "Lead",
    salary: "$160,000 - $200,000",
    posted: "1 week ago",
    slug: "cloud-architect",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format"
  },
  {
    id: 20,
    title: "Sales Representative",
    department: "Sales",
    location: "Dallas, TX",
    type: "Full-time",
    level: "Mid",
    salary: "$70,000 - $100,000 + Commission",
    posted: "5 days ago",
    slug: "sales-representative",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format"
  },
  // New additional job positions
  {
    id: 21,
    title: "Blockchain Developer",
    department: "Engineering",
    location: "Miami, FL",
    type: "Full-time",
    level: "Senior",
    salary: "$140,000 - $170,000",
    posted: "2 days ago",
    slug: "blockchain-developer",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format",
    description: "Join our blockchain team to develop decentralized applications and smart contracts. You'll work on cutting-edge blockchain technologies and help shape the future of our Web3 initiatives.",
    responsibilities: [
      "Design and implement smart contracts and blockchain-based solutions",
      "Develop secure and efficient decentralized applications (dApps)",
      "Integrate blockchain technologies with existing systems",
      "Optimize smart contracts for gas efficiency and security",
      "Stay up-to-date with emerging blockchain standards and technologies",
      "Collaborate with cross-functional teams to deliver blockchain solutions"
    ],
    requirements: [
      "4+ years of software development experience with 2+ years in blockchain development",
      "Experience with Ethereum, Solidity, and Web3.js",
      "Knowledge of blockchain consensus mechanisms and cryptography",
      "Understanding of DeFi protocols and tokenomics",
      "Strong JavaScript/TypeScript skills for frontend integration",
      "Experience with testing frameworks for smart contracts"
    ]
  },
  {
    id: 22,
    title: "AI Research Scientist",
    department: "Engineering",
    location: "Boston, MA",
    type: "Full-time",
    level: "Senior",
    salary: "$150,000 - $190,000",
    posted: "1 week ago",
    slug: "ai-research-scientist",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format",
    description: "We're seeking an AI Research Scientist to advance our machine learning capabilities and develop novel algorithms for natural language processing, computer vision, and recommendation systems."
  },
  {
    id: 23,
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Washington, DC",
    type: "Full-time",
    level: "Mid",
    salary: "$100,000 - $130,000",
    posted: "3 days ago",
    slug: "cybersecurity-analyst",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format",
    description: "Help protect our company's digital assets by identifying vulnerabilities, responding to security incidents, and implementing best practices for information security."
  },
  {
    id: 24,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    salary: "$110,000 - $140,000",
    posted: "6 days ago",
    slug: "growth-marketing-manager",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format"
  },
  {
    id: 25,
    title: "React Native Developer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    level: "Mid",
    salary: "$100,000 - $130,000",
    posted: "4 days ago",
    slug: "react-native-developer",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format"
  },
  {
    id: 26,
    title: "Healthcare Solutions Architect",
    department: "Healthcare",
    location: "Chicago, IL",
    type: "Full-time",
    level: "Lead",
    salary: "$140,000 - $170,000",
    posted: "1 week ago",
    slug: "healthcare-solutions-architect",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format"
  },
  {
    id: 27,
    title: "E-commerce Specialist",
    department: "Ecommerce",
    location: "Seattle, WA",
    type: "Full-time",
    level: "Mid",
    salary: "$90,000 - $115,000",
    posted: "2 weeks ago",
    slug: "ecommerce-specialist",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format"
  },
  {
    id: 28,
    title: "Educational Content Developer",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    salary: "$80,000 - $100,000",
    posted: "5 days ago",
    slug: "educational-content-developer",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=600&auto=format"
  },
  {
    id: 29,
    title: "Financial Analyst",
    department: "Finance",
    location: "New York, NY",
    type: "Full-time",
    level: "Mid",
    salary: "$95,000 - $120,000",
    posted: "3 days ago",
    slug: "financial-analyst",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format"
  },
  {
    id: 30,
    title: "Technical Recruiter",
    department: "HR",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Mid",
    salary: "$85,000 - $110,000",
    posted: "1 week ago",
    slug: "technical-recruiter",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format"
  },
];
