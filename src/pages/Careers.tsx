
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Building2
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
    slug: "senior-frontend-developer"
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
    slug: "ux-ui-designer"
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
    slug: "devops-engineer"
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
    slug: "product-manager"
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
    slug: "data-scientist"
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
    slug: "full-stack-developer"
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
    slug: "marketing-specialist"
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
    slug: "customer-success-manager"
  }
];

const departmentFilters = ["All", "Engineering", "Design", "Product", "Data", "Marketing", "Customer Support"];
const locationFilters = ["All", "Remote", "New York, NY", "San Francisco, CA", "Austin, TX", "Chicago, IL"];
const typeFilters = ["All", "Full-time", "Part-time", "Contract", "Remote"];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(jobPositions);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [perksVisible, setPerksVisible] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(false);

  useEffect(() => {
    // Filter jobs based on search term and selected filters
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

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-20 md:py-28 bg-gradient-to-br from-tech-50 via-tech-100 to-tech-50 overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 relative">
            <div 
              className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-tech-200/50 text-tech-700 font-medium text-sm">
                <Briefcase size={16} className="mr-2" />
                Join Our Team
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-tech-800">Careers at TechBros</h1>
              <p className="text-xl text-gray-700 mb-8">
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
        
        {/* Why Join Us Section */}
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
                  <Users size={24} className="text-tech-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Events</h3>
                <p className="text-gray-600">
                  Regular team-building events, company retreats, holiday celebrations, and social activities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Positions Section */}
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
              
              {/* Search and Filters */}
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
            
            {/* Job Listings */}
            <div className="max-w-4xl mx-auto">
              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map((job, index) => (
                    <Link 
                      key={job.id} 
                      to={`/careers/${job.slug}`}
                      className={`block bg-white rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group ${
                        jobsVisible ? "animate-reveal revealed" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
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
                    </Link>
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
        
        {/* Application Process Section */}
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
                {/* Timeline line */}
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
        
        {/* CTA Section */}
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
