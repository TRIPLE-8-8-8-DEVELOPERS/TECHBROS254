import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  GraduationCap, 
  Search, 
  Building2,
  Coffee,
  Laptop,
  HeartHandshake,
  Rocket,
  Zap,
  Award,
  Star,
  Sparkles
} from "lucide-react";

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

const departmentFilters = ["All", "Engineering", "Design", "Product", "Data", "Marketing", "Customer Support", "Operations", "IT", "Finance", "HR", "Sales"];
const locationFilters = ["All", "Remote", "New York, NY", "San Francisco, CA", "Austin, TX", "Chicago, IL", "Seattle, WA", "Boston, MA", "Denver, CO", "Portland, OR", "Los Angeles, CA", "Dallas, TX"];
const typeFilters = ["All", "Full-time", "Part-time", "Contract", "Remote"];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(jobPositions);
  const navigate = useNavigate();
  
  const heroRef = useRef<HTMLDivElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [perksVisible, setPerksVisible] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(false);

  useEffect(() => {
    const filtered = jobPositions.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === "All" || job.location.includes(selectedLocation);
      const matchesType = selectedType === "All" || job.type === selectedType;
      
      return matchesSearch && matchesDepartment && matchesLocation && matchesType;
    });
    
    setFilteredJobs(filtered);
  }, [searchTerm, selectedDepartment, selectedLocation, selectedType]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeroVisible(true);
        heroObserver.disconnect();
      }
    }, observerOptions);

    const perksObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPerksVisible(true);
        perksObserver.disconnect();
      }
    }, observerOptions);

    const jobsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setJobsVisible(true);
        jobsObserver.disconnect();
      }
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (perksRef.current) perksObserver.observe(perksRef.current);
    if (jobsRef.current) jobsObserver.observe(jobsRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (perksRef.current) perksObserver.unobserve(perksRef.current);
      if (jobsRef.current) jobsObserver.unobserve(jobsRef.current);
    };
  }, []);

  const handleJobClick = (slug: string) => {
    navigate(`/careers/${slug}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section 
          ref={heroRef}
          className="relative py-20 md:py-28 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 relative">
            <div 
              className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-tech-200/80 text-white font-medium text-sm backdrop-blur-sm">
                <Briefcase size={16} className="mr-2" />
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Careers at TechBros</h1>
              <p className="text-xl text-gray-100 mb-8">
                Join our team of talented professionals and work on innovative solutions that make a difference.
              </p>
              <a 
                href="#open-positions" 
                className="inline-flex items-center px-8 py-4 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
              >
                View Open Positions
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gradient-to-r from-tech-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Rocket size={24} className="text-tech-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">We push boundaries and embrace new ideas</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <HeartHandshake size={24} className="text-tech-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600">We achieve more when we work together</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap size={24} className="text-tech-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for quality in everything we do</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Sparkles size={24} className="text-tech-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Growth</h3>
                <p className="text-gray-600">We believe in continuous learning and development</p>
              </div>
            </div>
          </div>
        </section>
        
        <section 
          ref={perksRef}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
                perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Why Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perks & Benefits</h2>
              <p className="text-gray-600 mb-6">
                We believe in taking care of our team members and offering competitive benefits and a supportive work environment.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link to="/perks" className="inline-flex items-center text-sm text-tech-500 hover:text-tech-600 transition-colors">
                  All Perks <ArrowRight size={14} className="ml-1" />
                </Link>
                <Link to="/benefits" className="inline-flex items-center text-sm text-tech-500 hover:text-tech-600 transition-colors ml-4">
                  All Benefits <ArrowRight size={14} className="ml-1" />
                </Link>
                <Link to="/diversity" className="inline-flex items-center text-sm text-tech-500 hover:text-tech-600 transition-colors ml-4">
                  Diversity & Inclusion <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link 
                to="/perks/compensation"
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-100 hover:border-tech-200 hover:shadow-md ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
                <p className="text-gray-600 mb-4">
                  We offer competitive salaries, performance bonuses, and equity options for eligible positions.
                </p>
                <span className="text-tech-500 font-medium flex items-center text-sm">
                  Learn More <ArrowRight size={14} className="ml-1.5" />
                </span>
              </Link>
              
              <Link 
                to="/perks/health-wellness"
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-200 hover:border-tech-200 hover:shadow-md ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Users size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive health insurance, mental health support, wellness programs, and gym membership reimbursements.
                </p>
                <span className="text-tech-500 font-medium flex items-center text-sm">
                  Learn More <ArrowRight size={14} className="ml-1.5" />
                </span>
              </Link>
              
              <Link 
                to="/perks/flexible-work"
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-300 hover:border-tech-200 hover:shadow-md ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
                <p className="text-gray-600 mb-4">
                  Flexible working hours, remote work options, and a generous paid time off policy to maintain work-life balance.
                </p>
                <span className="text-tech-500 font-medium flex items-center text-sm">
                  Learn More <ArrowRight size={14} className="ml-1.5" />
                </span>
              </Link>
              
              <Link 
                to="/perks/learning-development"
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-400 hover:border-tech-200 hover:shadow-md ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Learning & Development</h3>
                <p className="text-gray-600 mb-4">
                  Professional development budget, learning platforms subscriptions, conference attendance, and internal mentoring.
                </p>
                <span className="text-tech-500 font-medium flex items-center text-sm">
                  Learn More <ArrowRight size={14} className="ml-1.5" />
                </span>
              </Link>
              
              <Link 
                to="/perks/modern-office"
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-500 hover:border-tech-200 hover:shadow-md ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Building2 size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Office</h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art offices with collaborative spaces, relaxation areas, free snacks, and beverages.
                </p>
                <span className="text-tech-500 font-medium flex items-center text-sm">
                  Learn More <ArrowRight size={14} className="ml-1.5" />
                </span>
              </Link>
              
              <Link 
                to="/perks/team-events"
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-600 hover:border-tech-200 hover:shadow-md ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Coffee size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Events</h3>
                <p className="text-gray-600 mb-4">
                  Regular team-building events, company retreats, holiday celebrations, and social activities.
                </p>
                <span className="text-tech-500 font-medium flex items-center text-sm">
                  Learn More <ArrowRight size={14} className="ml-1.5" />
                </span>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex flex-wrap gap-3 justify-center max-w-4xl">
                <Link to="/perks/work-from-anywhere" className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full text-gray-700 hover:text-tech-500">
                  Work From Anywhere
                </Link>
                <Link to="/perks/vacation-time" className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full text-gray-700 hover:text-tech-500">
                  Vacation Time
                </Link>
                <Link to="/perks/parental-benefits" className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full text-gray-700 hover:text-tech-500">
                  Parental Benefits
                </Link>
                <Link to="/perks/financial-wellness" className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full text-gray-700 hover:text-tech-500">
                  Financial Wellness
                </Link>
                <Link to="/perks/recognition-programs" className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full text-gray-700 hover:text-tech-500">
                  Recognition Programs
                </Link>
                <Link to="/perks/food-refreshments" className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full text-gray-700 hover:text-tech-500">
                  Food & Refreshments
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1600&auto=format" 
              alt="Team working together" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-tech-900/80 to-tech-800/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Star size={40} className="text-tech-300 inline-block" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-light italic text-white mb-8">
                "Working at TechBros has been the highlight of my career.
