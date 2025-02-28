
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Calendar,
  DollarSign, 
  CheckCircle, 
  Briefcase, 
  Send, 
  Upload, 
  User, 
  Mail, 
  Phone,
  File
} from "lucide-react";
import { toast } from "sonner";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  level: "Entry" | "Mid" | "Senior" | "Lead";
  salary: string;
  posted: string;
  slug: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
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
    overview: "We are looking for a Senior Frontend Developer to join our Engineering team. In this role, you will be responsible for building and maintaining high-quality web applications using modern frontend technologies. You will work closely with designers, product managers, and other developers to deliver exceptional user experiences.",
    responsibilities: [
      "Develop and maintain responsive web applications using React, TypeScript, and other modern frontend technologies",
      "Collaborate with designers to implement pixel-perfect, responsive designs",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and ensure code quality, organization, and automation",
      "Mentor junior developers and contribute to team growth",
      "Stay up-to-date with emerging trends and technologies in frontend development"
    ],
    requirements: [
      "5+ years of professional experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with state management (Redux, Context API, etc.)",
      "Solid understanding of web fundamentals (HTML, CSS, HTTP, etc.)",
      "Experience with responsive design and cross-browser compatibility",
      "Familiarity with testing frameworks (Jest, React Testing Library, etc.)",
      "Bachelor's degree in Computer Science or related field, or equivalent practical experience"
    ],
    preferred: [
      "Experience with Next.js, GraphQL, and Tailwind CSS",
      "Contributions to open-source projects",
      "Experience with CI/CD pipelines",
      "Knowledge of accessibility standards and best practices",
      "Experience with performance optimization techniques"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Generous paid time off policy",
      "Modern office with snacks and beverages"
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
    overview: "We are seeking a talented UX/UI Designer to create amazing user experiences. The ideal candidate will have a strong portfolio showcasing their design skills and a passion for creating intuitive, user-centered digital experiences.",
    responsibilities: [
      "Create user-centered designs by understanding business requirements, user feedback, and research",
      "Design flows, prototypes, and high-fidelity mockups for websites and applications",
      "Collaborate with product managers and engineers to define and implement innovative solutions",
      "Conduct user research and evaluate user feedback",
      "Create wireframes, storyboards, user flows, and process flows to effectively communicate design ideas",
      "Present and defend designs and key decisions to stakeholders"
    ],
    requirements: [
      "3+ years of experience as a UX/UI Designer",
      "Strong portfolio showcasing design projects",
      "Proficiency in design tools such as Figma, Adobe XD, or Sketch",
      "Solid understanding of user-centered design principles",
      "Experience with designing responsive websites and applications",
      "Excellent visual design skills with sensitivity to user-system interaction",
      "Ability to collaborate effectively with cross-functional teams"
    ],
    preferred: [
      "Experience with design systems",
      "Knowledge of HTML/CSS/JavaScript",
      "Familiarity with animation and interaction design",
      "Experience with user testing methodologies",
      "Understanding of accessibility standards"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Generous paid time off policy",
      "Home office setup allowance"
    ]
  },
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
    overview: "We're looking for a skilled DevOps Engineer to help build and maintain our cloud infrastructure. You will work closely with our development and operations teams to automate processes, improve reliability, and ensure scalability of our systems.",
    responsibilities: [
      "Design, implement, and maintain CI/CD pipelines",
      "Manage cloud infrastructure using Infrastructure as Code (IaC)",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and ensure compliance",
      "Collaborate with developers to improve deployment processes",
      "Automate routine operational tasks",
      "Participate in on-call rotation to ensure system reliability"
    ],
    requirements: [
      "4+ years of experience in DevOps or Site Reliability Engineering",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with containerization technologies (Docker, Kubernetes)",
      "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
      "Experience with CI/CD tools (Jenkins, GitHub Actions, CircleCI)",
      "Strong scripting skills (Bash, Python)",
      "Understanding of networking, security, and system administration"
    ],
    preferred: [
      "Experience with monitoring and logging tools (Prometheus, Grafana, ELK stack)",
      "Knowledge of database administration",
      "Experience with microservices architecture",
      "Familiarity with serverless computing",
      "Certifications in relevant cloud platforms"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Generous paid time off policy",
      "Modern office with snacks and beverages"
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
    overview: "We are looking for an experienced Product Manager to join our product team. You will be responsible for the product planning and execution throughout the Product Lifecycle, including gathering and prioritizing product requirements, defining the product vision, and working closely with engineering, design, and marketing to deliver winning products.",
    responsibilities: [
      "Define the product strategy and roadmap",
      "Gather and manage product requirements",
      "Work closely with engineering teams to deliver features",
      "Represent the voice of the customer and ensure products meet market needs",
      "Analyze market trends and competition",
      "Define and monitor key metrics for product success",
      "Communicate product plans and vision to stakeholders"
    ],
    requirements: [
      "5+ years of product management experience, preferably in SaaS or B2B products",
      "Track record of successful product launches",
      "Strong analytical skills and data-driven decision making",
      "Excellent communication and presentation skills",
      "Ability to understand technical concepts and communicate with engineering teams",
      "Experience with agile development methodologies",
      "Bachelor's degree in Business, Computer Science, or related field"
    ],
    preferred: [
      "MBA or advanced degree",
      "Experience with product management tools (Jira, Aha!, ProductBoard)",
      "Background in technology or engineering",
      "Experience with user research and usability testing",
      "Understanding of UX design principles"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Generous paid time off policy",
      "Modern office with snacks and beverages"
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
    overview: "We are seeking a skilled Data Scientist to analyze complex data sets, build predictive models, and develop data-driven solutions. You will work with cross-functional teams to identify opportunities and solve business problems using data science techniques.",
    responsibilities: [
      "Analyze large datasets to extract actionable insights",
      "Build and deploy machine learning models",
      "Collaborate with product and engineering teams to implement data-driven features",
      "Develop data visualization tools and dashboards",
      "Design and evaluate experiments to measure the impact of product changes",
      "Communicate findings to technical and non-technical stakeholders",
      "Stay current with the latest developments in data science and machine learning"
    ],
    requirements: [
      "3+ years of experience in data science or related field",
      "Proficiency in Python and data analysis libraries (pandas, NumPy, scikit-learn)",
      "Experience with machine learning techniques and algorithms",
      "Strong SQL skills and experience working with large datasets",
      "Knowledge of statistical analysis and experimental design",
      "Ability to communicate complex findings in a clear, actionable manner",
      "Master's degree or PhD in Computer Science, Statistics, or related field"
    ],
    preferred: [
      "Experience with deep learning frameworks (TensorFlow, PyTorch)",
      "Knowledge of big data technologies (Spark, Hadoop)",
      "Familiarity with cloud platforms (AWS, GCP, Azure)",
      "Experience with A/B testing",
      "Publications in relevant academic journals or conferences"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and fully remote work",
      "Professional development budget",
      "Generous paid time off policy",
      "Home office setup allowance"
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
    overview: "We are looking for a Full Stack Developer to join our growing engineering team. You will work on both frontend and backend development, building and maintaining features across our entire stack. This is an opportunity to work on challenging projects and grow your skills across the full development stack.",
    responsibilities: [
      "Develop and maintain features across the full stack (frontend and backend)",
      "Write clean, maintainable, and efficient code",
      "Design and implement database schemas",
      "Build reusable components and libraries",
      "Optimize applications for performance and scalability",
      "Collaborate with cross-functional teams",
      "Participate in code reviews and contribute to engineering best practices"
    ],
    requirements: [
      "3+ years of full stack development experience",
      "Proficiency in JavaScript/TypeScript and at least one backend language (Node.js, Python, Java, etc.)",
      "Experience with modern frontend frameworks (React, Angular, or Vue)",
      "Knowledge of database systems (SQL and NoSQL)",
      "Familiarity with version control systems (Git)",
      "Understanding of web fundamentals (HTTP, REST APIs, HTML, CSS)",
      "Bachelor's degree in Computer Science or equivalent practical experience"
    ],
    preferred: [
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Understanding of CI/CD pipelines",
      "Experience with microservices architecture",
      "Familiarity with testing frameworks"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and hybrid work model",
      "Professional development budget",
      "Generous paid time off policy",
      "Modern office with snacks and beverages"
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
    overview: "We are seeking a Marketing Specialist to help drive our marketing initiatives and grow our brand presence. The ideal candidate will have a mix of creative and analytical skills, with experience in digital marketing channels and content creation.",
    responsibilities: [
      "Plan and execute marketing campaigns across multiple channels",
      "Create engaging content for our website, blog, and social media",
      "Manage email marketing campaigns and newsletters",
      "Analyze marketing data and metrics to optimize campaigns",
      "Collaborate with design team on marketing materials",
      "Stay up-to-date with digital marketing trends",
      "Support the broader marketing team with various initiatives"
    ],
    requirements: [
      "3+ years of experience in digital marketing or related field",
      "Proven track record of successful marketing campaigns",
      "Experience with marketing automation tools and CRM systems",
      "Strong copywriting and content creation skills",
      "Familiarity with SEO and SEM principles",
      "Analytical mindset and ability to derive insights from data",
      "Bachelor's degree in Marketing, Communications, or related field"
    ],
    preferred: [
      "Experience in B2B SaaS marketing",
      "Proficiency with graphic design tools",
      "Knowledge of marketing analytics platforms",
      "Experience with video production",
      "HubSpot or similar marketing certification"
    ],
    benefits: [
      "Competitive salary and bonus opportunities",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and hybrid work model",
      "Professional development budget",
      "Generous paid time off policy",
      "Modern office with snacks and beverages"
    ]
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
    overview: "We are looking for a Customer Success Manager to ensure our customers achieve their goals using our products. You will be responsible for building and maintaining relationships with customers, understanding their needs, and helping them maximize the value of our solutions.",
    responsibilities: [
      "Serve as the primary point of contact for a portfolio of customers",
      "Develop and maintain strong relationships with key stakeholders",
      "Conduct regular check-ins and business reviews with customers",
      "Monitor customer health metrics and identify at-risk accounts",
      "Collaborate with Sales, Product, and Support teams to address customer needs",
      "Drive product adoption and usage through training and education",
      "Identify upsell and cross-sell opportunities within existing accounts"
    ],
    requirements: [
      "3+ years of experience in customer success, account management, or similar role",
      "Strong interpersonal and communication skills",
      "Ability to understand technical concepts and explain them to non-technical users",
      "Experience with CRM systems and customer success tools",
      "Problem-solving mindset and ability to navigate complex customer situations",
      "Data-driven approach to measuring customer success",
      "Bachelor's degree in Business, Communications, or related field"
    ],
    preferred: [
      "Experience in SaaS or technology industry",
      "Knowledge of customer success methodologies",
      "Background in project management",
      "Experience with creating and delivering customer training",
      "Familiarity with our industry or related technologies"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible working hours and fully remote work",
      "Professional development budget",
      "Generous paid time off policy",
      "Home office setup allowance"
    ]
  }
];

const JobDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobPosition | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: null as File | null,
    portfolio: "",
    linkedin: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Find the job by slug
    const foundJob = jobPositions.find(j => j.slug === slug);
    
    if (foundJob) {
      setJob(foundJob);
      setIsLoaded(true);
      window.scrollTo(0, 0);
    } else {
      toast.error("Job position not found");
      navigate("/careers");
    }
  }, [slug, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.resume) {
      toast.error("Please upload your resume");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your application was submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: null,
        portfolio: "",
        linkedin: ""
      });
      setIsSubmitting(false);
      
      // Redirect to careers page after submission
      setTimeout(() => {
        navigate("/careers");
      }, 2000);
    }, 1500);
  };
  
  if (!job) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-tech-50 via-tech-100 to-tech-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link 
              to="/careers" 
              className="inline-flex items-center text-tech-600 hover:text-tech-700 mb-6 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to All Positions
            </Link>
            
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 text-tech-800">{job.title}</h1>
                  <p className="text-tech-600 font-medium text-lg mb-4">{job.department}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-1.5 bg-tech-200 text-tech-700 text-sm font-medium rounded-full">
                    {job.level} Level
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-tech-500" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2 text-tech-500" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign size={18} className="mr-2 text-tech-500" />
                  <span>{job.salary}</span>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a 
                  href="#apply-now" 
                  className="px-6 py-3 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium inline-flex items-center"
                >
                  Apply Now
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Link copied to clipboard!");
                  }} 
                  className="px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-tech-300 transition-all duration-300 font-medium"
                >
                  Share Job
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>{job.overview}</p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-tech-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Basic Qualifications</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-tech-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Preferred Qualifications</h2>
                <ul className="space-y-3">
                  {job.preferred.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-tech-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-tech-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center mb-10 pt-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <div className="px-4 text-gray-500 font-medium">Apply for this Position</div>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              
              {/* Application Form */}
              <div id="apply-now" className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Apply for {job.title}</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-200 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-200 focus:border-transparent"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-200 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV* (PDF, DOCX)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          onChange={handleFileChange}
                          required
                          accept=".pdf,.docx"
                          className="hidden"
                        />
                        <label 
                          htmlFor="resume" 
                          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tech-200 focus:border-transparent transition-colors"
                        >
                          <Upload size={18} className="text-gray-400 mr-2" />
                          <span className="text-gray-500">
                            {formData.resume ? formData.resume.name : "Click to upload"}
                          </span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Letter (PDF, DOCX)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="coverLetter"
                          name="coverLetter"
                          onChange={handleFileChange}
                          accept=".pdf,.docx"
                          className="hidden"
                        />
                        <label 
                          htmlFor="coverLetter" 
                          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tech-200 focus:border-transparent transition-colors"
                        >
                          <File size={18} className="text-gray-400 mr-2" />
                          <span className="text-gray-500">
                            {formData.coverLetter ? formData.coverLetter.name : "Click to upload"}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio URL
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-200 focus:border-transparent"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-200 focus:border-transparent"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-tech-400 text-white rounded-lg hover:bg-tech-500 transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Jobs Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Similar Positions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobPositions
                .filter(j => j.id !== job.id && j.department === job.department)
                .slice(0, 3)
                .map((relatedJob) => (
                  <Link 
                    key={relatedJob.id}
                    to={`/careers/${relatedJob.slug}`}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:border-tech-200 hover:shadow-md transition-all duration-300 group block"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold group-hover:text-tech-500 transition-colors">{relatedJob.title}</h3>
                        <p className="text-tech-500 font-medium text-sm">{relatedJob.department}</p>
                      </div>
                      <span className="inline-block px-2 py-1 bg-tech-50 text-tech-600 text-xs font-medium rounded-full">
                        {relatedJob.level}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin size={14} className="mr-1 text-gray-400" />
                      {relatedJob.location}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Posted {relatedJob.posted}</span>
                      <span className="text-tech-500 text-sm font-medium flex items-center">
                        View Details
                        <ArrowRight size={14} className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/careers"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full hover:border-tech-300 transition-all duration-300 font-medium"
              >
                View All Open Positions
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
