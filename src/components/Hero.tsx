
import { useEffect, useState, useRef } from "react";
import AnimatedText from "./AnimatedText";
import { ChevronDown } from "lucide-react";

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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxY}px)`
        }}
      ></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 text-center mt-24">
        <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-1 bg-tech-100 rounded-full">
            <span className="text-sm font-medium text-tech-600">Innovating the Digital Future</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-6">
          <AnimatedText
            text="Leading Technology Solutions Provider"
            className="hero-text mb-4"
          />
        </div>

        <div className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-600 text-pretty">
            We help businesses transform, scale, and thrive in the digital landscape by leveraging cutting-edge technologies and innovative strategies.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="#services" 
            className="px-8 py-3 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              handleScrollDown();
            }}
          >
            Explore Services
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white border border-tech-200 text-tech-600 rounded-full hover:border-tech-300 transition-all duration-300 hover:shadow-md"
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="w-10 h-10 rounded-full border border-tech-200 flex items-center justify-center hover:border-tech-300 transition-all duration-300"
        >
          <ChevronDown size={20} className="text-tech-600" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
