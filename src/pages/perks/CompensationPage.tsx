
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, DollarSign, TrendingUp, BadgePercent, Award, Wallet, PiggyBank } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

const CompensationPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

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

    const contentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setContentVisible(true);
        contentObserver.disconnect();
      }
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-24'}`}>
        <section 
          ref={heroRef}
          className="relative py-12 md:py-24 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format')",
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
              <Link to="/perks" className="inline-flex items-center text-white mb-4 hover:underline">
                <ArrowLeft size={isMobile ? 14 : 16} className="mr-2" />
                Back to All Perks
              </Link>
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-tech-200/80 text-white font-medium text-xs md:text-sm backdrop-blur-sm">
                <DollarSign size={isMobile ? 14 : 16} className="mr-2" />
                Perks & Benefits
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Competitive Compensation</h1>
              <p className="text-base md:text-xl text-gray-100 mb-4 md:mb-8 px-2">
                We believe in rewarding talent generously and fairly to attract and keep the best people
              </p>
            </div>
          </div>
        </section>
        
        <section 
          ref={contentRef}
          className="py-10 md:py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="prose prose-sm md:prose-lg max-w-none">
                <p className="lead text-base md:text-xl text-gray-700 mb-6 md:mb-8">
                  At TechBros, we understand that competitive compensation is a cornerstone of attracting and retaining top talent. Our compensation philosophy is designed to recognize the value you bring to our organization while providing the financial stability and growth opportunities you deserve.
                </p>
                
                <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <TrendingUp size={isMobile ? 18 : 24} className="text-tech-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Competitive Base Salary</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We regularly benchmark our salaries against industry standards to ensure we offer competitive base pay that recognizes your skills, experience, and the value you bring to our team.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <BadgePercent size={isMobile ? 18 : 24} className="text-tech-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Performance Bonuses</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our performance-based bonus structure rewards your exceptional contributions, whether it's crushing quarterly targets, completing major projects, or delivering outstanding customer results.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <Award size={isMobile ? 18 : 24} className="text-tech-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Equity Options</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      For eligible positions, we offer equity packages that allow you to share in our company's success and growth, aligning your personal success with our organizational achievements.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <Wallet size={isMobile ? 18 : 24} className="text-tech-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Regular Salary Reviews</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We conduct regular salary reviews to recognize your growing skills, increased responsibilities, and continued contributions to our success.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 md:col-span-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <PiggyBank size={isMobile ? 18 : 24} className="text-tech-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Comprehensive Benefits Package</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Beyond direct compensation, we offer a robust benefits package that includes retirement plans with employer matching, comprehensive health insurance, and additional perks that enhance your total compensation value.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold mt-8 md:mt-12 mb-4 md:mb-6">Transparent Compensation Structure</h2>
                
                <p className="text-sm md:text-base">
                  We believe in transparent compensation practices that help you understand how your pay is determined and what opportunities exist for growth. Our structure includes:
                </p>
                
                <ul className="list-disc pl-5 md:pl-6 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="mb-2"><strong>Clear salary bands</strong> for each role and level within our organization</li>
                  <li className="mb-2"><strong>Defined promotion paths</strong> with associated compensation increases</li>
                  <li className="mb-2"><strong>Objective performance metrics</strong> tied to bonus eligibility and amounts</li>
                  <li className="mb-2"><strong>Regular market adjustments</strong> to maintain competitiveness</li>
                  <li className="mb-2"><strong>No salary negotiations</strong> during the hiring process to ensure equity</li>
                </ul>
                
                <div className="bg-tech-50 p-4 md:p-8 rounded-xl my-8 md:my-12">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Our Commitment to Pay Equity</h3>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    At TechBros, we are committed to fair and equitable compensation practices. We:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base">
                    <li className="mb-2">Regularly audit our compensation data to identify and address any disparities</li>
                    <li className="mb-2">Use objective criteria for determining starting salaries and raises</li>
                    <li className="mb-2">Consider internal equity alongside market factors when making compensation decisions</li>
                    <li className="mb-2">Provide transparency about our compensation philosophy and practices</li>
                  </ul>
                </div>
                
                <div className="mt-8 md:mt-12 text-center">
                  <Link 
                    to="/careers" 
                    className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-tech-400 text-white rounded-lg hover:bg-tech-500 transition-all duration-300 font-medium text-sm md:text-base"
                  >
                    View Open Positions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompensationPage;
