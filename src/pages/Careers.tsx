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
import { jobPositions } from "../data/jobs";

const departmentFilters = [
  "All", 
  "Engineering", 
  "Design", 
  "Product", 
  "Data", 
  "Marketing", 
  "Customer Support", 
  "Operations", 
  "IT", 
  "Finance", 
  "HR", 
  "Sales",
  "Security",
  "Healthcare",
  "Education",
  "Ecommerce"
];

const locationFilters = [
  "All", 
  "Remote", 
  "New York, NY", 
  "San Francisco, CA", 
  "Austin, TX", 
  "Chicago, IL", 
  "Seattle, WA", 
  "Boston, MA", 
  "Denver, CO", 
  "Portland, OR", 
  "Los Angeles, CA", 
  "Dallas, TX",
  "Miami, FL",
  "Washington, DC"
];

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
        {/* Hero section */}
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
        
        {/* Values section */}
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
        
        {/* Perks and Benefits section */}
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
        
        {/* Testimonial section */}
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
                "Working at TechBros has been the highlight of my career. The collaborative environment, challenging projects, and growth opportunities have helped me develop both professionally and personally."
              </blockquote>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format" 
                  alt="Sarah Johnson" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-tech-400/30"
                />
                <div className="ml-4 text-left">
                  <p className="text-white font-medium">Sarah Johnson</p>
                  <p className="text-tech-300 text-sm">Senior Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job listings section */}
        <section 
          id="open-positions"
          ref={jobsRef}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                Explore our current openings and find the perfect role for your skills and career goals.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Search position..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-300 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-300 focus:border-transparent transition-all appearance-none bg-select"
                    >
                      {departmentFilters.map((dept) => (
                        <option key={dept} value={dept}>{dept === "All" ? "All Departments" : dept}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-300 focus:border-transparent transition-all appearance-none bg-select"
                    >
                      {locationFilters.map((loc) => (
                        <option key={loc} value={loc}>{loc === "All" ? "All Locations" : loc}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-300 focus:border-transparent transition-all appearance-none bg-select"
                    >
                      {typeFilters.map((type) => (
                        <option key={type} value={type}>{type === "All" ? "All Types" : type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${
                  jobsVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <div 
                      key={job.id}
                      onClick={() => handleJobClick(job.slug)}
                      className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      {job.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={job.image} 
                            alt={job.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-block px-3 py-1 bg-tech-500/90 text-white text-xs font-medium rounded-full mb-2">
                              {job.department}
                            </span>
                            <h3 className="text-white text-lg font-semibold">{job.title}</h3>
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        {!job.image && (
                          <>
                            <span className="inline-block px-3 py-1 bg-tech-100 text-tech-600 text-xs font-medium rounded-full mb-2">
                              {job.department}
                            </span>
                            <h3 className="text-lg font-semibold mb-3">{job.title}</h3>
                          </>
                        )}
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <Briefcase size={16} className="mr-2 text-gray-400" />
                            <span className="text-sm">{job.type}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <DollarSign size={16} className="mr-2 text-gray-400" />
                            <span className="text-sm">{job.salary}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-6">
                          <span className="text-xs text-gray-500">Posted {job.posted}</span>
                          <span className="text-tech-500 flex items-center text-sm font-medium transition-all group-hover:translate-x-0.5">
                            View Position <ArrowRight size={14} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-8 rounded-xl text-center border border-gray-100">
                    <div className="mb-4">
                      <Search size={40} className="mx-auto text-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No positions found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any positions matching your search criteria. Try adjusting your filters or check back later.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedDepartment("All");
                        setSelectedLocation("All");
                        setSelectedType("All");
                      }}
                      className="text-tech-500 font-medium hover:text-tech-600 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-gradient-to-r from-tech-500 to-purple-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-10 right-10 w-80 h-80 rounded-full border-[40px] border-white"></div>
            <div className="absolute bottom-10 right-40 w-60 h-60 rounded-full border-[30px] border-white"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don't See a Position That Fits?</h2>
              <p className="text-xl text-tech-50 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/#contact"
                  className="px-8 py-4 bg-white text-tech-600 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                >
                  Get in Touch
                </Link>
                <a 
                  href="mailto:careers@techbros.com"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
                >
                  Email Your Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
