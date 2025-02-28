
import { useEffect, useState, useRef } from "react";
import AnimatedText from "./AnimatedText";
import { ChevronDown, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

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

  return (
    <div 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gray-50"
    >
      {/* Background with gradient overlay and pattern */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-white to-tech-50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          transform: `translateY(${parallaxY}px)`
        }}
      ></div>

      {/* Geometric shapes for visual interest */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-tech-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "-4s" }}></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 pt-20 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-center md:text-left">
            <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-4 py-1.5 bg-tech-50 border border-tech-200 rounded-full">
                <span className="text-sm font-medium text-tech-600">Innovating the Digital Future</span>
              </div>
            </div>

            <div className="mb-6">
              <h1 className="hero-text mb-4">
                <span className="text-gradient">TechBros</span> - Leading<br />Technology Solutions
              </h1>
              <div className={`max-w-2xl mx-auto md:mx-0 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-xl text-gray-600 text-pretty">
                  We help businesses transform, scale, and thrive in the digital landscape by leveraging cutting-edge technologies and innovative strategies.
                </p>
              </div>
            </div>

            <div className={`flex flex-wrap justify-center md:justify-start gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="#services" 
                className="px-8 py-4 bg-gradient-tech text-white rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg font-medium flex items-center"
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
                className="px-8 py-4 bg-white border border-tech-200 text-tech-600 rounded-full hover:border-tech-300 transition-all duration-300 hover:shadow-md font-medium"
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
              <Link to="/careers" className="inline-flex items-center px-4 py-2 bg-tech-100 border border-tech-200 rounded-full text-tech-700 hover:bg-tech-200 transition-all group">
                <div className="w-8 h-8 rounded-full bg-tech-400 flex items-center justify-center mr-2 text-white">
                  <Briefcase size={16} />
                </div>
                <span className="font-medium">We're Hiring!</span>
                <span className="text-sm ml-2">Join our team</span>
                <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Statistics */}
            <div className={`mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0 py-6 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-tech-500">150+</h3>
                <p className="text-sm text-gray-600">Clients Worldwide</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-tech-500">98%</h3>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-tech-500">10+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:col-span-5 hidden md:block">
            <div className={`transition-all duration-1000 delay-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-tech-animate rounded-3xl blur opacity-30 animate-gradient-x"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&w=800&q=80" 
                    alt="Tech Innovation"
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="w-12 h-12 rounded-full gradient-border flex items-center justify-center hover:shadow-md transition-all duration-300"
        >
          <ChevronDown size={20} className="text-tech-600" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
