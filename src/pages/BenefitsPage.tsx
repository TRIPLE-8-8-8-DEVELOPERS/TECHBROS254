
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
  Users, 
  Briefcase, 
  Check, 
  Building2, 
  Globe, 
  Gift
} from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-6 h-6 text-tech-500" />,
    title: "Health Benefits",
    description: "Comprehensive healthcare coverage to support your physical and mental wellbeing.",
    details: [
      "Premium health, dental, and vision insurance with low deductibles",
      "Coverage for dependents with subsidized premiums",
      "Dedicated mental health resources and therapy coverage",
      "24/7 telehealth services",
      "Health savings account (HSA) with employer contributions"
    ]
  },
  {
    icon: <DollarSign className="w-6 h-6 text-tech-500" />,
    title: "Financial Benefits",
    description: "Competitive compensation and financial planning resources to secure your future.",
    details: [
      "Competitive salary packages benchmarked against industry standards",
      "401(k) retirement plan with employer matching up to 4%",
      "Employee stock purchase program with discounted rates",
      "Profit-sharing bonuses based on company performance",
      "Financial planning resources and advisory services"
    ]
  },
  {
    icon: <Clock className="w-6 h-6 text-tech-500" />,
    title: "Time Off",
    description: "Generous paid time off to rest, recharge, and maintain work-life balance.",
    details: [
      "Unlimited paid time off with minimum usage requirements",
      "Paid company holidays (15 days per year)",
      "Year-end office closure between Christmas and New Year's",
      "Paid sabbatical program: 4 weeks after 5 years of service",
      "Volunteer time off (40 hours per year for community service)"
    ]
  },
  {
    icon: <Gift className="w-6 h-6 text-tech-500" />,
    title: "Family Benefits",
    description: "Support for your family life and major life events.",
    details: [
      "16 weeks paid parental leave for all parents",
      "Adoption and fertility treatment assistance",
      "Childcare subsidies and emergency backup care",
      "College savings plan assistance",
      "Flexible scheduling for parents and caregivers"
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-tech-500" />,
    title: "Professional Development",
    description: "Resources and opportunities to grow your skills and advance your career.",
    details: [
      "$5,000 annual learning and development budget",
      "Dedicated time for learning (4 hours per week)",
      "Conference attendance and speaking opportunities",
      "Professional membership dues reimbursement",
      "Tuition assistance for degree programs"
    ]
  },
  {
    icon: <Building2 className="w-6 h-6 text-tech-500" />,
    title: "Workplace Perks",
    description: "Amenities and resources to make your workday more comfortable and enjoyable.",
    details: [
      "Modern, ergonomic workspaces in prime locations",
      "Daily catered lunches and fully stocked kitchens",
      "On-site fitness centers or gym membership reimbursements",
      "Commuter benefits and transportation assistance",
      "Pet-friendly offices"
    ]
  },
  {
    icon: <Globe className="w-6 h-6 text-tech-500" />,
    title: "Remote Work",
    description: "Flexibility to work from anywhere with the resources to be productive.",
    details: [
      "Hybrid or fully remote work options",
      "Home office stipend for equipment and furniture",
      "Monthly internet and utility reimbursement",
      "Co-working space allowance",
      "Regular in-person team gatherings for remote employees"
    ]
  },
  {
    icon: <Users className="w-6 h-6 text-tech-500" />,
    title: "Social & Wellness",
    description: "Programs and events to foster connection and support your wellbeing.",
    details: [
      "Quarterly team-building retreats",
      "Monthly wellness stipend for fitness activities",
      "Company-sponsored sports teams and activity clubs",
      "Annual health check-ups and biometric screenings",
      "Wellness challenges with incentives and prizes"
    ]
  }
];

const BenefitsPage = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) observer.unobserve(benefitsRef.current);
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-tech-800">Our Benefits</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                At TechBros, we believe in taking care of our most valuable asset—our people. Our comprehensive benefits package reflects our commitment to your wellbeing, growth, and work-life balance.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center px-8 py-4 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
              >
                Join Our Team
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits Overview Section */}
        <section ref={benefitsRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
                benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Our Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Benefits Package</h2>
              <p className="text-gray-600">
                We offer a wide range of benefits designed to support your health, wealth, and happiness.
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 ${
                      benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-5">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check size={18} className="text-tech-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Employee Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Team Says</h2>
              <p className="text-gray-600">
                Hear directly from our team members about how our benefits have made a difference in their lives.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm relative">
                  <div className="absolute top-4 left-4 text-tech-200 opacity-50">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.248 5.088c-1.685 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79zM6.276 5.088c-1.686 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79z" />
                    </svg>
                  </div>
                  <div className="pl-12 pt-8">
                    <p className="text-gray-700 italic mb-6">
                      "The parental leave benefit was a game-changer for me. When my twins were born, I was able to take 16 weeks off to bond with them and adjust to life as a new parent. The gradual return-to-work program made the transition back to work much smoother."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&q=80" 
                        alt="Employee" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">David Rodriguez</h4>
                        <p className="text-sm text-tech-500">Senior Engineer, 4 years at TechBros</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm relative">
                  <div className="absolute top-4 left-4 text-tech-200 opacity-50">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.248 5.088c-1.685 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79zM6.276 5.088c-1.686 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79z" />
                    </svg>
                  </div>
                  <div className="pl-12 pt-8">
                    <p className="text-gray-700 italic mb-6">
                      "I've been able to pursue my MBA while working full-time thanks to TechBros' tuition assistance program. The flexibility to adjust my work schedule around classes and having dedicated learning time each week has been invaluable for my professional growth."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&q=80" 
                        alt="Employee" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">Jennifer Lee</h4>
                        <p className="text-sm text-tech-500">Product Manager, 3 years at TechBros</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm relative">
                  <div className="absolute top-4 left-4 text-tech-200 opacity-50">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.248 5.088c-1.685 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79zM6.276 5.088c-1.686 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79z" />
                    </svg>
                  </div>
                  <div className="pl-12 pt-8">
                    <p className="text-gray-700 italic mb-6">
                      "As someone who relocated from another country, the relocation assistance and visa support provided by TechBros made the transition smooth. The global mobility team helped with everything from housing to setting up banking, which let me focus on my new role."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&auto=format&q=80" 
                        alt="Employee" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">Miguel Santos</h4>
                        <p className="text-sm text-tech-500">Software Architect, 2 years at TechBros</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm relative">
                  <div className="absolute top-4 left-4 text-tech-200 opacity-50">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.248 5.088c-1.685 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79zM6.276 5.088c-1.686 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79z" />
                    </svg>
                  </div>
                  <div className="pl-12 pt-8">
                    <p className="text-gray-700 italic mb-6">
                      "When I was dealing with a health issue, the comprehensive health insurance and mental health support were invaluable. The company went above and beyond to accommodate my needs, and I never felt pressured to rush back before I was ready."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&auto=format&q=80" 
                        alt="Employee" 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">Emily Chen</h4>
                        <p className="text-sm text-tech-500">UX Designer, 5 years at TechBros</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
              <p className="text-gray-600">
                Find answers to frequently asked questions about our benefits program.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">When do benefits begin for new employees?</h3>
                  <p className="text-gray-700">
                    Most benefits begin on your first day of employment, including health insurance coverage, paid time off accrual, and access to our wellness programs. Retirement benefits typically begin after 30 days of employment.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Are benefits available to part-time employees?</h3>
                  <p className="text-gray-700">
                    Yes, employees working 20 hours or more per week are eligible for most benefits, with some pro-rated based on hours worked. Full details are provided during the onboarding process.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">How does the unlimited PTO policy work?</h3>
                  <p className="text-gray-700">
                    Our unlimited PTO policy is designed to provide flexibility while ensuring you take the time you need. We have a minimum requirement of 15 days off per year to ensure everyone takes adequate time to rest and recharge. Time off requests are approved by managers with reasonable notice.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">What professional development opportunities are available?</h3>
                  <p className="text-gray-700">
                    We provide $5,000 annually for courses, conferences, workshops, and certifications. Additionally, we offer internal learning opportunities, mentorship programs, and dedicated time each week for professional development.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">How often are benefits and compensation reviewed?</h3>
                  <p className="text-gray-700">
                    We conduct annual compensation reviews to ensure market competitiveness. Our benefits program is reviewed bi-annually to identify opportunities for enhancement based on employee feedback and industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-tech-400 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us and Thrive</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Experience a workplace that prioritizes your wellbeing, supports your growth, and values your contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/careers" 
                  className="inline-flex items-center px-8 py-4 bg-white text-tech-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium"
                >
                  View Open Positions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/diversity" 
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
                >
                  Our Diversity & Inclusion
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BenefitsPage;
