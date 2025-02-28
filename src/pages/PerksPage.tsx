
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  DollarSign, 
  Heart, 
  Clock, 
  GraduationCap, 
  Zap, 
  Coffee,
  Globe,
  Users,
  Gift,
  Briefcase,
  Award
} from "lucide-react";

interface Perk {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const perks: Perk[] = [
  {
    icon: <DollarSign className="w-6 h-6 text-tech-500" />,
    title: "Competitive Compensation",
    description: "We offer competitive salaries, performance bonuses, and equity options for eligible positions.",
    details: [
      "Salary packages in the top quartile of the industry",
      "Performance-based bonuses twice a year",
      "Stock option plans after 1 year of employment",
      "Annual salary reviews and adjustments",
      "Referral bonuses for helping us hire great talent"
    ]
  },
  {
    icon: <Heart className="w-6 h-6 text-tech-500" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, wellness programs, and gym membership reimbursements.",
    details: [
      "Premium health, dental, and vision insurance with family coverage options",
      "Mental health and counseling services",
      "Monthly wellness stipend for gym memberships or fitness classes",
      "Annual wellness checkups and health screenings",
      "Ergonomic work equipment for your home office"
    ]
  },
  {
    icon: <Clock className="w-6 h-6 text-tech-500" />,
    title: "Flexible Work",
    description: "Flexible working hours, remote work options, and a generous paid time off policy to maintain work-life balance.",
    details: [
      "Flexible working hours to accommodate your lifestyle",
      "Remote-first culture with quarterly in-person team gatherings",
      "Unlimited paid time off with minimum requirements to ensure you rest",
      "Paid company holidays and year-end shutdown period",
      "Sabbatical program after 5 years of service"
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-tech-500" />,
    title: "Learning & Development",
    description: "Professional development budget, learning platforms subscriptions, conference attendance, and internal mentoring.",
    details: [
      "$5,000 annual learning and development budget",
      "Subscriptions to premium learning platforms",
      "Conference attendance and speaking opportunities",
      "Internal mentorship program",
      "Weekly tech talks and knowledge sharing sessions"
    ]
  },
  {
    icon: <Zap className="w-6 h-6 text-tech-500" />,
    title: "Modern Office",
    description: "State-of-the-art offices with collaborative spaces, relaxation areas, free snacks, and beverages.",
    details: [
      "Open, collaborative workspaces in prime locations",
      "Quiet zones and focus rooms for deep work",
      "Game rooms and relaxation areas",
      "Fully stocked kitchen with healthy snacks and beverages",
      "On-site fitness facilities in select locations"
    ]
  },
  {
    icon: <Coffee className="w-6 h-6 text-tech-500" />,
    title: "Food & Refreshments",
    description: "Free healthy snacks, beverages, and regular team lunches for social bonding and nourishment.",
    details: [
      "Daily catered lunches in the office",
      "Fully stocked kitchen with healthy snacks and drinks",
      "Barista-quality coffee and specialty teas",
      "Weekly team lunches and social gatherings",
      "Special dietary accommodations"
    ]
  },
  {
    icon: <Globe className="w-6 h-6 text-tech-500" />,
    title: "Work From Anywhere",
    description: "Work remotely from any location with our distributed team model and co-working space allowances.",
    details: [
      "Work from anywhere policy with flexible location options",
      "Co-working space allowance if you prefer not to work from home",
      "Annual workation program for team members",
      "Regular virtual team-building activities",
      "Home office setup and monthly internet stipend"
    ]
  },
  {
    icon: <Users className="w-6 h-6 text-tech-500" />,
    title: "Team Events",
    description: "Regular team-building events, company retreats, holiday celebrations, and social activities.",
    details: [
      "Quarterly company-wide retreats in exciting locations",
      "Monthly team building activities",
      "Annual holiday party and celebrations",
      "Employee-led clubs and interest groups",
      "Family-friendly events throughout the year"
    ]
  },
  {
    icon: <Gift className="w-6 h-6 text-tech-500" />,
    title: "Parental Benefits",
    description: "Generous parental leave, childcare support, and flexible scheduling for new parents.",
    details: [
      "16 weeks of paid parental leave for all parents",
      "Gradual return-to-work program after leave",
      "Childcare assistance and referral services",
      "Fertility and family planning benefits",
      "Nursing rooms in all office locations"
    ]
  },
  {
    icon: <Briefcase className="w-6 h-6 text-tech-500" />,
    title: "Financial Wellness",
    description: "Retirement plans, financial planning services, and education assistance to secure your future.",
    details: [
      "401(k) matching program with immediate vesting",
      "Financial planning and advisory services",
      "Student loan repayment assistance",
      "Financial wellness workshops and resources",
      "Employee discounts program for everyday savings"
    ]
  },
  {
    icon: <Award className="w-6 h-6 text-tech-500" />,
    title: "Recognition Programs",
    description: "Regular recognition of achievements, milestone celebrations, and peer-to-peer appreciation programs.",
    details: [
      "Quarterly performance awards with monetary bonuses",
      "Peer-to-peer recognition program with rewards",
      "Service anniversary celebrations",
      "Innovation awards for groundbreaking ideas",
      "Public recognition of achievements in company meetings"
    ]
  }
];

const PerksPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const perksRef = useRef<HTMLDivElement>(null);
  const [perksVisible, setPerksVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPerksVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (perksRef.current) {
      observer.observe(perksRef.current);
    }

    return () => {
      if (perksRef.current) observer.unobserve(perksRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-50 via-tech-100 to-tech-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-tech-800">Perks & Benefits</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                We believe in taking care of our team members. Discover the benefits and perks that make working at TechBros an exceptional experience.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center px-8 py-4 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
              >
                Browse Job Openings
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Perks Section */}
        <section ref={perksRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
                perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Why Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Benefits</h2>
              <p className="text-gray-600">
                We offer a range of benefits designed to support your professional growth, personal well-being, and work-life balance.
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <div className="sticky top-24 space-y-2">
                    {perks.map((perk, index) => (
                      <button
                        key={index}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start ${
                          activeIndex === index 
                            ? 'bg-tech-50 border-l-4 border-tech-400'
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${
                          activeIndex === index ? 'bg-tech-100' : 'bg-gray-100'
                        } flex items-center justify-center mr-4`}>
                          {perk.icon}
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            activeIndex === index ? 'text-tech-600' : 'text-gray-800'
                          }`}>
                            {perk.title}
                          </h3>
                          <p className="text-sm text-gray-500 hidden md:block">{perk.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-8">
                  <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
                    <div className="mb-6 flex items-center">
                      <div className="w-14 h-14 rounded-xl bg-tech-100 flex items-center justify-center mr-4">
                        {perks[activeIndex].icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{perks[activeIndex].title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8">{perks[activeIndex].description}</p>
                    
                    <div className="space-y-4">
                      {perks[activeIndex].details.map((detail, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
                        >
                          <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                          </div>
                          <p className="text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Employee Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Employee Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Team Says</h2>
              <p className="text-gray-600">
                Hear from the people who make TechBros an amazing place to work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "The work-life balance at TechBros is unmatched. I appreciate the flexibility to work remotely while still feeling connected to my team. The learning budget has allowed me to take courses and attend conferences that have accelerated my career growth."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&q=80" 
                    alt="Employee" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-tech-500">Product Manager, 3 years</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "The parental leave policy at TechBros is incredible. When my daughter was born, I was able to take 16 weeks off to bond with her. The gradual return-to-work program made the transition back to work much easier. I felt supported every step of the way."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&q=80" 
                    alt="Employee" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">Michael Davis</h4>
                    <p className="text-sm text-tech-500">Software Engineer, 4 years</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "As someone who values health and wellness, I appreciate how TechBros supports this with comprehensive health insurance and the monthly wellness stipend. The team events and retreats have also helped me form lasting friendships with colleagues."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&q=80" 
                    alt="Employee" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">Emily Wilson</h4>
                    <p className="text-sm text-tech-500">UX Designer, 2 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-tech-400 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role to grow your career with TechBros.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center px-8 py-4 bg-white text-tech-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium"
              >
                View Open Positions
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

export default PerksPage;
