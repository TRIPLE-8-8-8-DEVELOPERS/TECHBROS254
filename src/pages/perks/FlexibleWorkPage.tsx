
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Clock, Globe, Calendar, Home, Laptop, MapPin, CreditCard, Wind } from "lucide-react";

const FlexibleWorkPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
      
      <main className="flex-grow pt-24">
        <section 
          ref={heroRef}
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format')",
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
                <ArrowLeft size={16} className="mr-2" />
                Back to All Perks
              </Link>
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-tech-200/80 text-white font-medium text-sm backdrop-blur-sm">
                <Clock size={16} className="mr-2" />
                Perks & Benefits
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Flexible Work</h1>
              <p className="text-xl text-gray-100 mb-8">
                Work when and where you're most productive with our industry-leading flexible work policies
              </p>
            </div>
          </div>
        </section>
        
        <section 
          ref={contentRef}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-700 mb-8">
                  At TechBros, we believe that work should fit into your life, not the other way around. Our flexible work policies are designed to empower you to work in the way that maximizes your productivity, creativity, and well-being.
                </p>
                
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Clock size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Hours</h3>
                    <p className="text-gray-600">
                      Work during your most productive hours with our flexible scheduling options. We focus on results, not rigid 9-to-5 schedules. Core hours ensure team collaboration while giving you flexibility.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Home size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Remote Work Options</h3>
                    <p className="text-gray-600">
                      Work from home, a coffee shop, or anywhere you feel productive. Our hybrid model allows you to choose your work environment based on your needs and preferences.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Calendar size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Generous PTO Policy</h3>
                    <p className="text-gray-600">
                      Recharge with our unlimited PTO policy that encourages you to take the time you need for vacation, personal matters, or simply to prevent burnout.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Laptop size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Technology Stipend</h3>
                    <p className="text-gray-600">
                      Set up your ideal home office with our technology stipend, ensuring you have the equipment you need to work comfortably and efficiently from anywhere.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Globe size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Work From Anywhere Weeks</h3>
                    <p className="text-gray-600">
                      Work internationally for up to four weeks each year while maintaining your regular schedule, allowing you to explore new places without using vacation days.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-12 mb-6">Our Flexible Work Philosophy</h2>
                
                <p>
                  We believe that flexibility isn't just a perk—it's a better way of working that leads to happier, more productive employees. Our approach is built on several core principles:
                </p>
                
                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Wind size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Trust and Autonomy</h3>
                      <p className="text-gray-600">
                        We trust our team members to manage their work and time effectively, focusing on outcomes rather than time spent at a desk.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Location Independence</h3>
                      <p className="text-gray-600">
                        Great work can happen anywhere. We support you whether you prefer an office environment, your home, or a mix of both.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CreditCard size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Resource Support</h3>
                      <p className="text-gray-600">
                        We provide the tools, technology, and support you need to be successful in a flexible work environment.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-tech-50 p-8 rounded-xl my-12">
                  <h3 className="text-xl font-semibold mb-4">Supporting Work-Life Integration</h3>
                  <p>
                    Our flexible work policies aren't just about where and when you work—they're designed to help you integrate your professional and personal lives in a way that works for you. Whether you're a parent needing to pick up children from school, a caregiver with family responsibilities, or someone who simply values the ability to structure your day on your own terms, we provide the flexibility you need to thrive in all aspects of your life.
                  </p>
                </div>
                
                <div className="mt-12 text-center">
                  <Link 
                    to="/careers" 
                    className="inline-flex items-center px-6 py-3 bg-tech-400 text-white rounded-lg hover:bg-tech-500 transition-all duration-300 font-medium"
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

export default FlexibleWorkPage;
