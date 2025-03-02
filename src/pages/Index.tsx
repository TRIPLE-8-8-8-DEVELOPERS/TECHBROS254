
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Technologies from "../components/Technologies";
import Process from "../components/Process";
import Partners from "../components/Partners";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Update active section for quick navigation
          if (entry.target.id) {
            setActiveSection(entry.target.id);
          }
        } else if (entry.target.classList.contains('animate-reveal')) {
          // Only remove 'revealed' class if the element should animate on every view
          // For elements we want to animate only once, we can skip this
          // entry.target.classList.remove('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.animate-reveal, .stagger-item, section[id]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Quick jump to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <ScrollProgress />
      <Navbar />
      
      {/* Quick Navigation Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm py-2 hidden md:block">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-6">
            {["services", "about", "technologies", "portfolio", "testimonials", "faq", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                  activeSection === section 
                    ? 'bg-vibrant-purple/10 text-vibrant-purple' 
                    : 'text-gray-600 hover:text-vibrant-purple'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <main>
        <Hero />
        
        {/* Changed to full-width layout for Services */}
        <Services />
        
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8 py-8">
          <Technologies />
        </div>
        <Process />
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8 py-8">
          <About />
          <Portfolio />
        </div>
        <Partners />
        <CTABanner />
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8 py-8">
          <Testimonials />
          <FAQ />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
