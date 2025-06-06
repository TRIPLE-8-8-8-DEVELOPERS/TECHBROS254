import { useEffect, useState, useRef } from "react";
import AnimatedText from "./AnimatedText";
import { ArrowRight, Briefcase, ChevronDown, Search, BarChart, Code, Server, Shield, HeartHandshake, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallax = scrollY * 0.3; // Adjust the multiplier for more/less effect
        setParallaxY(parallax);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "smooth",
      });
    }
  };

  const services = [
    { id: "development", name: "Software Development", icon: <Code size={20} />, path: "/services/development" },
    { id: "infrastructure", name: "Cloud Infrastructure", icon: <Server size={20} />, path: "/services/infrastructure" },
    { id: "consulting", name: "Tech Consulting", icon: <HeartHandshake size={20} />, path: "/services/consulting" },
    { id: "aidata", name: "AI & Data", icon: <BarChart size={20} />, path: "/services/ai-data" },
    { id: "security", name: "Cybersecurity", icon: <Shield size={20} />, path: "/services/security" },
    { id: "enterprise", name: "Enterprise Solutions", icon: <Landmark size={20} />, path: "/services/enterprise" },
  ];

  return (
    <div 
      id="home" 
      ref={heroRef}
      className="min-h-[750px] md:min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-white to-tech-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background with gradient overlay, pattern, and particle effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          transform: `translateY(${parallaxY}px)`
        }}
      ></div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <canvas id="particleCanvas" className="w-full h-full"></canvas>
      </div>

      {/* Geometric shapes with animated gradients */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-vibrant-purple to-vibrant-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-vibrant-blue to-vibrant-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-spin-slow" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-vibrant-pink to-vibrant-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce" style={{ animationDelay: "-4s" }}></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-10">
            <div className="md:col-span-7 text-center md:text-left">
              <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center justify-center md:justify-start mb-6">
                  <img src="/logo.svg" alt="TechBros" className="h-16 mr-4" />
                  
                </div>
                <div className="inline-block mb-6 px-4 py-1.5 bg-vibrant-purple/10 border border-vibrant-purple/20 rounded-full shadow-md">
                  <span className="text-sm font-medium text-vibrant-purple font-accent dark:text-vibrant-purple/80">Innovating the Digital Future</span>
                </div>
              </div>

              <div className="mb-6">
                <h1 className="mb-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-display">
                  <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink bg-clip-text text-transparent animate-gradient">Leading</span><br />
                  <span className="typewriter text-gray-900 dark:text-gray-100 animate-fade-in-out">Tech-Solutions Provider</span>
                </h1>
                <div className={`max-w-2xl mx-auto md:mx-0 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-xl text-gray-600 dark:text-gray-300 text-pretty">
                    We engineer digital solutions that keep your business ahead of the game.
                  </p>
                </div>
              </div>

              <div className={`flex flex-wrap justify-center md:justify-start gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg font-medium flex items-center transform hover:scale-105 glow-effect"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollDown();
                  }}
                >
                  Explore Services
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white border border-vibrant-purple/20 text-vibrant-purple rounded-full hover:border-vibrant-purple/40 transition-all duration-300 hover:shadow-md font-medium transform hover:scale-105 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.getBoundingClientRect().top + window.pageYOffset - 100,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Contact Us
                </a>
              </div>

              {/* We're Hiring Banner */}
              <div className={`mt-8 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link to="/careers" className="inline-flex items-center px-4 py-2 bg-vibrant-purple/10 border border-vibrant-purple/20 rounded-full text-vibrant-purple hover:bg-vibrant-purple/20 transition-all group transform hover:scale-105 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600">
                  <div className="w-8 h-8 rounded-full bg-vibrant-purple flex items-center justify-center mr-2 text-white">
                    <Briefcase size={16} />
                  </div>
                  <span className="font-medium">We're Hiring!</span>
                  <span className="text-sm ml-2">Join our team</span>
                  <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Quick Access & Stats */}
            <div className="md:col-span-5">
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} dark:bg-gray-800 dark:border-gray-600`}> 
                {/* Search & Quick Access */}
                <div className="mb-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input 
                      type="text" 
                      className="block w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg bg-white/70 focus:ring-vibrant-purple focus:border-vibrant-purple dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" 
                      placeholder="Search our services..." 
                      onChange={(e) => setSelectedService(e.target.value.toLowerCase())}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services
                      .filter(service => 
                        selectedService === "" || 
                        service.name.toLowerCase().includes(selectedService) ||
                        service.id.includes(selectedService)
                      )
                      .map((service, index) => (
                        <Link 
                          key={service.id} 
                          to={service.path}
                          className="flex flex-col items-center p-3 text-center bg-white border border-gray-100 rounded-lg hover:border-vibrant-purple/30 hover:shadow-sm transition-all duration-300 transform hover:scale-105 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        >
                          <div className="p-2 mb-2 bg-vibrant-purple/10 rounded-full">
                            {service.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-100">{service.name}</span>
                        </Link>
                      ))
                    }
                  </div>
                </div>
                
                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 rounded-xl dark:from-gray-700 dark:to-gray-800">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-vibrant-purple font-feature dark:text-vibrant-purple/80">6500+</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Clients Worldwide</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-vibrant-purple font-feature dark:text-vibrant-purple/80">98%</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Satisfaction Rate</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-vibrant-purple font-feature dark:text-vibrant-purple/80">10+</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { name: "About Us", path: "#about" },
              { name: "Services", path: "#services" },
              { name: "Portfolio", path: "#portfolio" },
              { name: "Technologies", path: "#technologies" },
              { name: "Testimonials", path: "#testimonials" },
              { name: "Contact", path: "#contact" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.path}
                className="py-3 px-4 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-lg text-center hover:bg-vibrant-purple/5 hover:border-vibrant-purple/20 transition-all duration-300 transform hover:scale-105 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(link.path);
                  if (section) {
                    window.scrollTo({
                      top: section.getBoundingClientRect().top + window.pageYOffset - 100,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span className="font-medium text-gray-700 dark:text-gray-100">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="w-12 h-12 rounded-full bg-white border border-vibrant-purple/20 flex items-center justify-center hover:shadow-md transition-all duration-300 transform hover:scale-110 dark:bg-gray-800 dark:border-gray-600"
        >
          <ChevronDown size={20} className="text-vibrant-purple dark:text-vibrant-purple/80" />
        </button>
      </div>
    </div>
  );
};

export default Hero;