import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Palmtree, Calendar, Clock, Briefcase, Award, User, Sun } from "lucide-react";

const VacationTimePage = () => {
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format')",
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
                <Palmtree size={16} className="mr-2" />
                Employee Perk
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Generous Time Off</h1>
              <p className="text-xl text-gray-100 mb-8">
                Rest, recharge, and enjoy life outside of work with our industry-leading time off benefits.
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
              <h2 className="text-3xl font-bold mb-6">Time Off That Works For You</h2>
              <p className="text-lg text-gray-700 mb-8">
                At TechBros, we believe in the importance of rest and rejuvenation. Our comprehensive time off benefits 
                are designed to ensure you have the flexibility to take the time you need, when you need it.
              </p>
              
              <div className="bg-tech-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-tech-700">Our Philosophy</h3>
                <p className="text-gray-700 mb-4">
                  We know that well-rested employees are happier, more productive, and more creative. 
                  That's why we've built a culture that truly encourages taking time off when you need it, 
                  without the stress of counting days or seeking approvals for every personal day.
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
                    <Calendar size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Unlimited PTO</h3>
                  <p className="text-gray-600">
                    Take the time you need for vacation, personal matters, or just a mental health day, with no preset limit.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Paid Holidays</h3>
                  <p className="text-gray-600">
                    Enjoy all major holidays off, plus floating holidays for cultural or religious observances important to you.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sabbaticals</h3>
                  <p className="text-gray-600">
                    After 5 years with TechBros, enjoy a 4-week paid sabbatical to pursue personal projects, travel, or simply recharge.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Sun size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Summer Fridays</h3>
                  <p className="text-gray-600">
                    From Memorial Day to Labor Day, enjoy half-day Fridays to get a head start on your weekend.
                  </p>
                </div>
              </div>
              
              <div className="bg-tech-50 p-8 rounded-xl border border-tech-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">1</span>
                    Coordinate with your team on timing to ensure coverage
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">2</span>
                    Submit your request through our easy-to-use time off system
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">3</span>
                    Receive quick approval from your manager
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">4</span>
                    Set your away message and enjoy your time off, completely unplugged
                  </li>
                </ul>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1602002418082-dd4e240cc16d?w=1200&auto=format" 
                  alt="Person relaxing on vacation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Employee Spotlight</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format" 
                    alt="Employee portrait" 
                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "The unlimited PTO policy allowed me to take three weeks off for a dream trip to Japan while also having time throughout the year for shorter breaks. The best part was not having to stress about 'saving' days or choosing between different trips."
                    </blockquote>
                    <div className="font-medium">
                      <p className="text-tech-600">Sarah Johnson</p>
                      <p className="text-gray-500">Product Designer</p>
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
                  to="/perks/flexible-work" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Clock size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Flexible Work</h3>
                  <p className="text-gray-600">
                    Flexible hours and remote work options.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/work-from-anywhere" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Award size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Work From Anywhere</h3>
                  <p className="text-gray-600">
                    Work internationally for up to 4 weeks per year.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/parental-benefits" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <User size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Parental Benefits</h3>
                  <p className="text-gray-600">
                    Comprehensive support for new parents.
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

export default VacationTimePage;
