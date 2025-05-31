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
import FeaturesGrid from "../components/FeaturesGrid";
import Newsletter from "../components/Newsletter";

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
      {/* Removed duplicate dashboard/header here if present */}
      
      <main>
        <Hero />
        <Services />
        <FeaturesGrid />
        <Technologies />
        <Process />
        
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8 py-20">
          <About />
          <Portfolio />
        </div>
        
        <Partners />
        <Newsletter />
        <CTABanner />
        
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8 py-20">
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