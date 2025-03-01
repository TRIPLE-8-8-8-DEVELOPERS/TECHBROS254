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
              <p className="text-gray-600">
                We believe in taking care of our team members and offering competitive benefits and a supportive work environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div 
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-100 ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
                <p className="text-gray-600">
                  We offer competitive salaries, performance bonuses, and equity options for eligible positions.
                </p>
              </div>
              
              <div 
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-200 ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Users size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
                <p className="text-gray-600">
                  Comprehensive health insurance, mental health support, wellness programs, and gym membership reimbursements.
                </p>
              </div>
              
              <div 
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-300 ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
                <p className="text-gray-600">
                  Flexible working hours, remote work options, and a generous paid time off policy to maintain work-life balance.
                </p>
              </div>
              
              <div 
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-400 ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Learning & Development</h3>
                <p className="text-gray-600">
                  Professional development budget, learning platforms subscriptions, conference attendance, and internal mentoring.
                </p>
              </div>
              
              <div 
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-500 ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Building2 size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Office</h3>
                <p className="text-gray-600">
                  State-of-the-art offices with collaborative spaces, relaxation areas, free snacks, and beverages.
                </p>
              </div>
              
              <div 
                className={`bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-700 delay-600 ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                  <Coffee size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Events</h3>
                <p className="text-gray-600">
                  Regular team-building events, company retreats, holiday celebrations, and social activities.
                </p>
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
                "Working at TechBros has been the highlight of my career. The culture empowers us to innovate while maintaining work-life balance. I've grown professionally and found a true community here."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format" 
                  alt="Employee portrait" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-tech-300" 
                />
                <div className="text-left">
                  <p className="text-white font-medium">Sarah Johnson</p>
                  <p className="text-tech-200">Senior Product Manager, 3 years</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section 
          id="open-positions" 
          ref={jobsRef}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
                jobsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Career Opportunities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-gray-600 mb-8">
                Find your perfect role and join our growing team of talented professionals.
              </p>
              
              <div className="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow-sm mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-200"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <select
                    className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tech-200"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    {departmentFilters.map(dept => (
                      <option key={dept} value={dept}>{dept === "All" ? "All Departments" : dept}</option>
                    ))}
                  </select>
                  
                  <select
                    className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tech-200"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {locationFilters.map(location => (
                      <option key={location} value={location}>{location === "All" ? "All Locations" : location}</option>
                    ))}
                  </select>
                  
                  <select
                    className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tech-200"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {typeFilters.map(type => (
                      <option key={type} value={type}>{type === "All" ? "All Types" : type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map((job, index) => (
                    <div 
                      key={job.id} 
                      onClick={() => handleJobClick(job.slug)}
                      className={`block bg-white rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group cursor-pointer ${
                        jobsVisible ? "animate-reveal revealed" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                          {job.image && (
                            <div className="w-full md:w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={job.image} 
                                alt={job.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                              />
                            </div>
                          )}
                          <div className="flex-grow">
                            <h3 className="text-xl font-semibold mb-1 text-gray-800 group-hover:text-tech-500 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-tech-500 font-medium">{job.department}</p>
                          </div>
                          <div className="mt-3 md:mt-0">
                            <span className="inline-block px-3 py-1 bg-tech-50 text-tech-600 text-sm font-medium rounded-full">
                              {job.level} Level
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-gray-400" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign size={16} className="mr-2 text-gray-400" />
                            {job.salary}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">Posted {job.posted}</span>
                          <span className="text-tech-500 font-medium flex items-center">
                            View Details 
                            <ArrowRight size={16} className="ml-2 transition-transform duration-300 transform group-hover:translate-x-2" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No matching positions found</h3>
                  <p className="text-gray-600">
                    Please try adjusting your search criteria or check back later for new opportunities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                What to Expect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Application Process</h2>
              <p className="text-gray-600">
                We've designed a straightforward application process to help you find the right role with us.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-tech-200 transform -translate-x-1/2 hidden md:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold mb-2">Application</h3>
                      <p className="text-gray-600">Submit your application with your resume and a cover letter explaining why you're interested in joining our team.</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-400 text-white font-bold text-xl z-10">1</div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-400 text-white font-bold text-xl z-10">2</div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">Initial Screening</h3>
                      <p className="text-gray-600">Our HR team will review your application and conduct a screening call to learn more about your experience and expectations.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold mb-2">Technical Assessment</h3>
                      <p className="text-gray-600">Depending on the role, you might be asked to complete a technical assessment or a case study to demonstrate your skills.</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-400 text-white font-bold text-xl z-10">3</div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-400 text-white font-bold text-xl z-10">4</div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">Team Interviews</h3>
                      <p className="text-gray-600">Meet with potential team members and leaders to discuss your experience, skills, and fit with our culture and values.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold mb-2">Final Decision</h3>
                      <p className="text-gray-600">After the interviews, we'll make a decision and extend an offer to the selected candidate.</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-400 text-white font-bold text-xl z-10">5</div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-tech-100 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-lg" 
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Growth & Development</h2>
                <p className="text-gray-700 mb-6">
                  At TechBros, we're committed to helping our team members grow professionally and personally. 
                  We provide mentorship programs, career development plans, and regular feedback to help you 
                  reach your full potential.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Award size={18} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Mentorship Programs</h3>
                      <p className="text-gray-600">Connect with senior team members who will guide your development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Laptop size={18} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Learning Resources</h3>
                      <p className="text-gray-600">Access to online courses, books, and conferences to expand your skills</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Star size={18} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Career Pathing</h3>
                      <p className="text-gray-600">Clear growth tracks and promotion opportunities based on your goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-tech-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Browse our open positions and find the perfect opportunity to grow your career with TechBros.
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
