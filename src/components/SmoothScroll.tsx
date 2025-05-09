
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnchorLinkIndicatorProps {
  currentSection: string | null;
}

const AnchorLinkIndicator = ({ currentSection }: AnchorLinkIndicatorProps) => {
  if (!currentSection) return null;
  
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
      {["hero", "services", "about", "portfolio", "testimonials", "contact"].map((section) => (
        <a 
          key={section}
          href={`#${section}`}
          className={cn(
            "block h-2 w-2 rounded-full transition-all duration-300",
            currentSection === section 
              ? "bg-vibrant-purple h-4 w-4"
              : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          )}
          aria-label={`Scroll to ${section} section`}
        ></a>
      ))}
    </div>
  );
};

const SmoothScroll = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setCurrentSection(entry.target.id);
          // Update URL without triggering scroll
          const url = new URL(window.location.toString());
          url.hash = `#${entry.target.id}`;
          window.history.replaceState({}, "", url.toString());
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      // Check if the clicked element is an anchor tag with hash
      const link = target.closest('a[href^="#"]');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      e.preventDefault();
      
      // Get the header height for offset - automatically adapts if header size changes
      const header = document.querySelector('header');
      const offset = header ? header.getBoundingClientRect().height + 20 : 100;
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
      
      // Update URL without scrolling
      window.history.pushState(null, '', href);
      
      // Update current section
      setCurrentSection(href.substring(1));
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return <AnchorLinkIndicator currentSection={currentSection} />;
};

export default SmoothScroll;
