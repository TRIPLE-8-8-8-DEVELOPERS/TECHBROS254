
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building,
  Briefcase,
  Users,
  GraduationCap,
  CheckCircle,
  Send,
  FileText,
  ArrowRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Tooltip } from "../components/ui/tooltip";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";

// Import the job data from Careers page
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
  image?: string;
}

// This is the same job data as in Careers.tsx
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format"
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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format"
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
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format"
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
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format"
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format"
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
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format"
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
  }
];

// Add job descriptions for each position
const jobDescriptions: Record<string, {
  overview: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  benefits: string[];
}> = {
  "senior-frontend-developer": {
    overview: "We're looking for an experienced Frontend Developer who is passionate about building intuitive and responsive web applications. You'll work with our product and design teams to implement new features and improve existing ones.",
    responsibilities: [
      "Develop and maintain high-quality frontend code for our web applications",
      "Collaborate with designers to translate wireframes and mockups into responsive interfaces",
      "Optimize applications for maximum speed and scalability",
      "Implement responsive design and ensure cross-browser compatibility",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and mentor junior developers"
    ],
    requirements: [
      "5+ years of experience with frontend development",
      "Proficiency in React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, MobX, etc.)",
      "Strong knowledge of HTML5, CSS3, and responsive design principles",
      "Familiarity with RESTful APIs and GraphQL",
      "Experience with testing frameworks like Jest and React Testing Library"
    ],
    preferred: [
      "Experience with Next.js or similar frameworks",
      "Knowledge of CI/CD pipelines and DevOps practices",
      "Contributions to open-source projects",
      "Experience with design systems and component libraries",
      "Knowledge of accessibility standards and best practices"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Home office stipend"
    ]
  },
  "ux-ui-designer": {
    overview: "We are seeking a talented UX/UI Designer to join our growing design team. In this role, you will create engaging and intuitive user experiences for our web and mobile applications.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with product managers and engineers to define and implement new features",
      "Design intuitive user flows and interactions",
      "Maintain and evolve our design system",
      "Stay up-to-date with the latest design trends and best practices"
    ],
    requirements: [
      "3+ years of experience in UX/UI design for digital products",
      "Proficiency in design tools like Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating your design process and solutions",
      "Experience with responsive web design and mobile app design",
      "Knowledge of user-centered design principles",
      "Excellent communication and collaboration skills"
    ],
    preferred: [
      "Experience with design systems",
      "Basic understanding of HTML, CSS, and JavaScript",
      "Experience with motion design and animations",
      "Knowledge of accessibility standards",
      "Experience in a fast-paced startup environment"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Creative and collaborative work environment",
      "Latest design tools and resources"
    ]
  },
  "devops-engineer": {
    overview: "We're looking for a skilled DevOps Engineer to help us build and maintain our cloud infrastructure. You'll work closely with our development team to automate deployment processes and ensure the reliability and scalability of our systems.",
    responsibilities: [
      "Design, implement and maintain CI/CD pipelines",
      "Manage and optimize our cloud infrastructure (AWS/GCP)",
      "Implement infrastructure as code using tools like Terraform or CloudFormation",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and ensure compliance",
      "Collaborate with development teams to improve deployment processes"
    ],
    requirements: [
      "4+ years of experience in DevOps or SRE roles",
      "Strong knowledge of Linux/Unix systems administration",
      "Experience with containerization technologies (Docker, Kubernetes)",
      "Proficiency in scripting languages (Python, Bash, etc.)",
      "Experience with monitoring tools and log management systems",
      "Knowledge of networking concepts and security protocols"
    ],
    preferred: [
      "AWS/GCP certifications",
      "Experience with database administration",
      "Knowledge of microservices architecture",
      "Experience with configuration management tools (Ansible, Chef, Puppet)",
      "Understanding of security best practices in cloud environments"
    ],
    benefits: [
      "Competitive compensation",
      "Comprehensive health coverage",
      "Flexible work schedule",
      "Professional certification opportunities",
      "Home office stipend",
      "Regular team-building events"
    ]
  },
  "product-manager": {
    overview: "We're seeking an experienced Product Manager to lead the development of our key products. You'll drive product strategy, work with cross-functional teams, and deliver outstanding user experiences.",
    responsibilities: [
      "Define and communicate product vision and strategy",
      "Gather and prioritize product requirements",
      "Create detailed product roadmaps",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competitor activities",
      "Collect and analyze user feedback to inform product decisions"
    ],
    requirements: [
      "5+ years of experience in product management",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Experience with agile methodologies",
      "Data-driven approach to decision making",
      "Bachelor's degree in Business, Computer Science, or related field"
    ],
    preferred: [
      "Experience in the tech or SaaS industry",
      "Knowledge of user experience design principles",
      "Technical background or understanding of software development",
      "MBA or other advanced degree",
      "Experience with product analytics tools"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health benefits",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Family-friendly policies"
    ]
  },
  "data-scientist": {
    overview: "Join our data team to help derive insights from our growing data assets. You'll build models, develop algorithms, and collaborate with teams across the company to drive data-informed decisions.",
    responsibilities: [
      "Develop machine learning models to solve complex business problems",
      "Process, clean, and verify the integrity of data used for analysis",
      "Create data visualizations and reports for stakeholders",
      "Identify trends and opportunities for business growth",
      "Collaborate with engineering team to implement models into production",
      "Stay up-to-date with the latest developments in data science and machine learning"
    ],
    requirements: [
      "3+ years of experience in data science or analytics",
      "Proficiency in Python and data analysis libraries (Pandas, NumPy, etc.)",
      "Experience with machine learning frameworks (TensorFlow, PyTorch, scikit-learn)",
      "Strong statistics and mathematics background",
      "Experience with data visualization tools",
      "Advanced degree in Computer Science, Statistics, or related field"
    ],
    preferred: [
      "Experience with big data technologies (Spark, Hadoop)",
      "Knowledge of SQL and database systems",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Published research or contributions to open-source projects",
      "Industry experience in our business domain"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health and wellness programs",
      "Flexible working arrangements",
      "Continuing education allowance",
      "Regular team offsites",
      "Collaborative and innovative work environment"
    ]
  },
  "full-stack-developer": {
    overview: "We're seeking a versatile Full Stack Developer to work on both frontend and backend aspects of our web applications. You'll collaborate with our product and design teams to deliver seamless user experiences.",
    responsibilities: [
      "Develop and maintain features across the entire stack",
      "Write clean, testable, and efficient code",
      "Design and implement database schemas",
      "Build reusable code and libraries for future use",
      "Collaborate with cross-functional teams to define and ship new features",
      "Optimize applications for maximum speed and scalability"
    ],
    requirements: [
      "3+ years of experience in full stack development",
      "Proficiency in frontend technologies (React, JavaScript, HTML, CSS)",
      "Experience with backend frameworks (Node.js, Express, or similar)",
      "Knowledge of database systems (SQL and NoSQL)",
      "Understanding of RESTful APIs and microservices",
      "Familiarity with version control systems (Git)"
    ],
    preferred: [
      "Experience with TypeScript",
      "Knowledge of cloud services (AWS, GCP, Azure)",
      "Understanding of CI/CD pipelines",
      "Experience with testing frameworks",
      "Knowledge of security best practices"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible working hours",
      "Professional development opportunities",
      "Remote work options"
    ]
  },
  // Add more job descriptions for other positions
  "marketing-specialist": {
    overview: "We are looking for a creative and data-driven Marketing Specialist to join our marketing team. You'll help develop and execute marketing campaigns across various channels to drive brand awareness and customer acquisition.",
    responsibilities: [
      "Plan and execute marketing campaigns across digital channels",
      "Create engaging content for social media, email, and website",
      "Analyze campaign performance and provide recommendations",
      "Collaborate with design team to create marketing materials",
      "Manage our social media presence",
      "Stay up-to-date with digital marketing trends"
    ],
    requirements: [
      "2+ years of experience in digital marketing",
      "Strong understanding of various marketing channels (social, email, content)",
      "Experience with marketing analytics tools",
      "Excellent written and verbal communication skills",
      "Creative mindset with attention to detail",
      "Bachelor's degree in Marketing, Communications, or related field"
    ],
    preferred: [
      "Experience with marketing automation platforms",
      "Knowledge of SEO/SEM principles",
      "Experience with paid advertising campaigns",
      "Basic design skills (Canva, Photoshop)",
      "Experience in B2B marketing"
    ],
    benefits: [
      "Competitive compensation",
      "Comprehensive benefits package",
      "Flexible work schedule",
      "Professional development opportunities",
      "Collaborative and fast-paced work environment",
      "Employee discount program"
    ]
  },
  // Add descriptions for all other jobs following the same pattern
};

// Create a generic job description for positions that don't have specific ones
const genericJobDescription = {
  overview: "Join our team at TechBros and be part of a dynamic and innovative company that's changing the industry. We offer a collaborative environment where you can grow your skills and advance your career.",
  responsibilities: [
    "Collaborate with cross-functional teams to achieve company goals",
    "Contribute to the development and implementation of new ideas",
    "Stay current with industry trends and best practices",
    "Participate in regular team meetings and brainstorming sessions",
    "Document processes and maintain accurate records",
    "Represent the company professionally to clients and partners"
  ],
  requirements: [
    "Relevant experience in the field",
    "Strong problem-solving abilities",
    "Excellent communication and interpersonal skills",
    "Ability to work independently and as part of a team",
    "Detail-oriented with good organizational skills",
    "Bachelor's degree in relevant field or equivalent experience"
  ],
  preferred: [
    "Advanced degree or specialized certification",
    "Experience in a fast-paced startup environment",
    "Knowledge of relevant tools and technologies",
    "Project management experience",
    "Industry-specific knowledge"
  ],
  benefits: [
    "Competitive salary and benefits package",
    "Health, dental, and vision insurance",
    "401(k) retirement plan with company match",
    "Flexible working arrangements",
    "Professional development opportunities",
    "Collaborative and innovative work culture"
  ]
};

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the job based on the slug in the URL
  const job = jobPositions.find((job) => job.slug === jobId);
  
  // Get job description or use generic if not found
  const jobDesc = job ? (jobDescriptions[job.slug] || genericJobDescription) : genericJobDescription;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (!job) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Job Not Found</h1>
            <p className="text-gray-600 mb-8">
              The job position you're looking for doesn't exist or may have been removed.
            </p>
            <Link 
              to="/careers" 
              className="inline-flex items-center px-6 py-3 bg-tech-400 text-white rounded-lg hover:bg-tech-500 transition-all duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Careers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "Your application has been successfully submitted! We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
      });
      
      // In a real application, you would send the form data to your backend here
    }, 1500);
  };
  
  const relatedJobs = jobPositions
    .filter((j) => j.id !== job.id && j.department === job.department)
    .slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Job Header */}
        <section className="relative py-16 bg-gradient-to-r from-tech-800 to-tech-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <img
              src={job.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format"}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/careers" 
                className="inline-flex items-center text-tech-200 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to All Positions
              </Link>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                {job.image && (
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white p-2">
                    <img 
                      src={job.image} 
                      alt={job.title} 
                      className="w-full h-full object-cover rounded" 
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-tech-200">
                      <Briefcase size={16} className="mr-2" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-tech-200">
                      <MapPin size={16} className="mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-tech-200">
                      <Clock size={16} className="mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-tech-200">
                      <DollarSign size={16} className="mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-tech-200">
                      <Users size={16} className="mr-2" />
                      {job.level} Level
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={() => document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-tech-400 hover:bg-tech-300 text-white"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Details */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{jobDesc.overview}</p>
                  </div>
                  
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                    <ul className="space-y-3">
                      {jobDesc.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="text-tech-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="space-y-3">
                      {jobDesc.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="text-tech-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Nice to Have</h2>
                    <ul className="space-y-3">
                      {jobDesc.preferred.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="text-tech-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Job Details</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Department</div>
                        <div className="flex items-center">
                          <Building size={16} className="text-tech-500 mr-2" />
                          {job.department}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Job Type</div>
                        <div className="flex items-center">
                          <Clock size={16} className="text-tech-500 mr-2" />
                          {job.type}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Experience Level</div>
                        <div className="flex items-center">
                          <GraduationCap size={16} className="text-tech-500 mr-2" />
                          {job.level} Level
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Location</div>
                        <div className="flex items-center">
                          <MapPin size={16} className="text-tech-500 mr-2" />
                          {job.location}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Salary</div>
                        <div className="flex items-center">
                          <DollarSign size={16} className="text-tech-500 mr-2" />
                          {job.salary}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Posted</div>
                        <div>{job.posted}</div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full bg-tech-400 hover:bg-tech-300 text-white"
                    >
                      Apply for this Job
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-10 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-4">Benefits & Perks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {jobDesc.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex items-start">
                        <CheckCircle size={18} className="text-tech-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section id="apply-section" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-2">Apply for this Position</h2>
                <p className="text-gray-600 mb-6">
                  Please fill out the form below to apply for the {job.title} position.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                      Resume/CV *
                    </label>
                    <div className="flex items-center">
                      <label className="flex-1">
                        <div className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-center">
                            <FileText size={20} className="text-tech-500 mr-2" />
                            <span>{formData.resume ? formData.resume.name : "Upload your resume (PDF, DOCX)"}</span>
                          </div>
                        </div>
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter
                    </label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're a good fit for this position..."
                      rows={6}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-tech-400 hover:bg-tech-300 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Jobs */}
        {relatedJobs.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Similar Positions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedJobs.map((relatedJob) => (
                    <div 
                      key={relatedJob.id}
                      onClick={() => navigate(`/careers/${relatedJob.slug}`)}
                      className="bg-white rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          {relatedJob.image && (
                            <div className="w-full h-36 rounded-lg overflow-hidden mb-4">
                              <img 
                                src={relatedJob.image} 
                                alt={relatedJob.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                              />
                            </div>
                          )}
                          <h3 className="text-lg font-semibold mb-1 group-hover:text-tech-500 transition-colors">
                            {relatedJob.title}
                          </h3>
                          <p className="text-tech-500 text-sm">{relatedJob.department}</p>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-4">
                          <div className="flex items-center mb-1">
                            <MapPin size={14} className="mr-2 text-gray-400" />
                            {relatedJob.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign size={14} className="mr-2 text-gray-400" />
                            {relatedJob.salary}
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <span className="text-tech-500 text-sm font-medium flex items-center">
                            View Details
                            <ArrowRight size={14} className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
