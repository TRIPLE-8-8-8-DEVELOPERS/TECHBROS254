
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Coins, LineChart, PiggyBank, BarChart3, DollarSign, Building, Award } from "lucide-react";

const FinancialWellnessPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

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

    const featuresObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFeaturesVisible(true);
        featuresObserver.disconnect();
      }
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (featuresRef.current) featuresObserver.observe(featuresRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (featuresRef.current) featuresObserver.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section 
          ref={heroRef}
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=1200&auto=format')",
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
              <Link to="/perks" className="inline-flex items-center text-white mb-6 hover:text-tech-200 transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                Back to All Perks
              </Link>
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-tech-200/80 text-white font-medium text-sm backdrop-blur-sm">
                <Coins size={16} className="mr-2" />
                Employee Perk
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Financial Wellness</h1>
              <p className="text-xl text-gray-100 mb-8">
                Comprehensive programs to help you build financial security for today and the future.
              </p>
            </div>
          </div>
        </section>
        
        <section 
          ref={featuresRef}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Investing in Your Financial Future</h2>
              <p className="text-lg text-gray-700 mb-8">
                At TechBros, we believe financial wellness is a critical part of overall wellbeing. Our comprehensive 
                financial benefits are designed to help you save for the future, manage your finances effectively, 
                and build long-term wealth.
              </p>
              
              <div className="bg-tech-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-tech-700">Our Approach</h3>
                <p className="text-gray-700 mb-4">
                  We provide the tools, resources, and benefits to help you make informed financial decisions 
                  at every stage of your career. From retirement planning to equity participation, we're invested 
                  in your financial success.
                </p>
              </div>
            </div>
            
            <div 
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <PiggyBank size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">401(k) Matching</h3>
                  <p className="text-gray-600">
                    We match 100% of your contributions up to 5% of your salary, helping you build your retirement savings faster.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <LineChart size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Employee Stock Purchase Program</h3>
                  <p className="text-gray-600">
                    Purchase company stock at a 15% discount through convenient payroll deductions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Equity Awards</h3>
                  <p className="text-gray-600">
                    Eligible employees receive equity grants as part of their total compensation package.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Financial Planning Resources</h3>
                  <p className="text-gray-600">
                    Access to financial advisors, workshops, and digital tools to help with budgeting, investing, and financial planning.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Building size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Student Loan Assistance</h3>
                  <p className="text-gray-600">
                    Receive $200 per month toward student loan repayment, up to a lifetime maximum of $10,000.
                  </p>
                </div>
              </div>
              
              <div className="bg-tech-50 p-8 rounded-xl border border-tech-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Financial Education & Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Quarterly financial wellness workshops
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    One-on-one sessions with certified financial planners
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Digital financial wellness platform with personalized recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Access to tax preparation services at discounted rates
                  </li>
                </ul>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1468254095679-bbcba94a7066?w=1200&auto=format" 
                  alt="Person reviewing financial documents" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Employee Spotlight</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&auto=format" 
                    alt="Employee portrait" 
                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "The financial planning resources at TechBros helped me create a roadmap for buying my first home. With the 401(k) matching and equity grants, I feel like I'm building real wealth while doing work I love."
                    </blockquote>
                    <div className="font-medium">
                      <p className="text-tech-600">James Wilson</p>
                      <p className="text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Explore Other Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  to="/perks/compensation" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <DollarSign size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Compensation</h3>
                  <p className="text-gray-600">
                    Competitive salaries and performance bonuses.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/recognition-programs" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Award size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Recognition Programs</h3>
                  <p className="text-gray-600">
                    Celebrating achievements and milestone rewards.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/learning-development" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <LineChart size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Learning & Development</h3>
                  <p className="text-gray-600">
                    Professional growth opportunities and resources.
                  </p>
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

export default FinancialWellnessPage;
