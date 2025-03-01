import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { 
  ArrowRight, 
  DollarSign, 
  Heart, 
  Clock, 
  GraduationCap, 
  Building2,
  Coffee,
  Laptop,
  Palmtree,
  Baby,
  Coins,
  Award
} from "lucide-react";

interface PerkItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const PerksPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [perksVisible, setPerksVisible] = useState(false);

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

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (perksRef.current) perksObserver.observe(perksRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (perksRef.current) perksObserver.unobserve(perksRef.current);
    };
  }, []);

  const perkItems: PerkItem[] = [
    {
      id: "compensation",
      title: "Competitive Compensation",
      description: "Attractive salaries, performance bonuses, and equity options for eligible positions.",
      icon: <DollarSign size={32} className="text-tech-500" />,
      link: "/perks/compensation"
    },
    {
      id: "health",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, wellness programs, and gym membership reimbursements.",
      icon: <Heart size={32} className="text-tech-500" />,
      link: "/perks/health-wellness"
    },
    {
      id: "flexible",
      title: "Flexible Work",
      description: "Flexible working hours, remote work options, and a generous paid time off policy to maintain work-life balance.",
      icon: <Clock size={32} className="text-tech-500" />,
      link: "/perks/flexible-work"
    },
    {
      id: "learning",
      title: "Learning & Development",
      description: "Professional development budget, learning platforms subscriptions, conference attendance, and internal mentoring.",
      icon: <GraduationCap size={32} className="text-tech-500" />,
      link: "/perks/learning-development"
    },
    {
      id: "office",
      title: "Modern Office",
      description: "State-of-the-art offices with collaborative spaces, relaxation areas, free snacks, and beverages.",
      icon: <Building2 size={32} className="text-tech-500" />,
      link: "/perks/modern-office"
    },
    {
      id: "events",
      title: "Team Events",
      description: "Regular team-building events, company retreats, holiday celebrations, and social activities.",
      icon: <Coffee size={32} className="text-tech-500" />,
      link: "/perks/team-events"
    },
    {
      id: "remote",
      title: "Work From Anywhere",
      description: "Opportunity to work remotely from international locations for up to 4 weeks per year.",
      icon: <Laptop size={32} className="text-tech-500" />,
      link: "/perks/work-from-anywhere"
    },
    {
      id: "vacation",
      title: "Generous Time Off",
      description: "Unlimited PTO, paid holidays, sabbaticals for long-term employees, and summer Fridays.",
      icon: <Palmtree size={32} className="text-tech-500" />,
      link: "/perks/vacation-time"
    },
    {
      id: "parental",
      title: "Parental Benefits",
      description: "Paid parental leave for all parents, fertility benefits, and family-friendly policies.",
      icon: <Baby size={32} className="text-tech-500" />,
      link: "/perks/parental-benefits"
    },
    {
      id: "financial",
      title: "Financial Wellness",
      description: "401(k) matching, financial planning resources, and employee stock purchase program.",
      icon: <Coins size={32} className="text-tech-500" />,
      link: "/perks/financial-wellness"
    },
    {
      id: "recognition",
      title: "Recognition Programs",
      description: "Peer recognition platform, milestone celebrations, and performance-based rewards.",
      icon: <Award size={32} className="text-tech-500" />,
      link: "/perks/recognition-programs"
    },
    {
      id: "food",
      title: "Food & Refreshments",
      description: "Free daily meals, snacks, beverages, and special catering for team events and celebrations.",
      icon: <Coffee size={32} className="text-tech-500" />,
      link: "/perks/food-refreshments"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section 
          ref={heroRef}
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format')",
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
                Benefits & Perks
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Work With Us</h1>
              <p className="text-xl text-gray-100 mb-8">
                We believe in taking care of our team members with competitive benefits and a supportive, flexible work environment.
              </p>
              <a 
                href="#perks-list" 
                className="inline-flex items-center px-6 py-3 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
              >
                Explore Our Benefits
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
        
        <section 
          id="perks-list"
          ref={perksRef}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
                perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perks & Benefits</h2>
              <p className="text-gray-600">
                We offer a comprehensive benefits package designed to support your health, well-being, and professional growth.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {perkItems.map((perk, index) => (
                  <Link 
                    key={perk.id}
                    to={perk.link}
                    className={`group bg-white p-8 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 ${
                      perksVisible ? "animate-reveal" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-tech-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tech-100 transition-colors">
                      {perk.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-tech-500 transition-colors">{perk.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {perk.description}
                    </p>
                    <div className="flex items-center text-tech-500 font-medium">
                      Learn More
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Explore our open positions and discover the perfect opportunity to grow your career with TechBros.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center px-8 py-4 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
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
