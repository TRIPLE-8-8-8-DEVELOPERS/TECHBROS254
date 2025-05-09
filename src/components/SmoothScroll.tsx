
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnchorLinkIndicatorProps {
  currentSection: string | null;
  sectionsProgress: Record<string, number>;
}

const AnchorLinkIndicator = ({ currentSection, sectionsProgress }: AnchorLinkIndicatorProps) => {
  const sections = ["hero", "services", "about", "portfolio", "testimonials", "contact"];
  
  if (!currentSection) return null;
  
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
      {sections.map((section) => (
        <a 
          key={section}
          href={`#${section}`}
          className="group relative"
          aria-label={`Scroll to ${section} section`}
        >
          <span className={cn(
            "block h-2 w-2 rounded-full transition-all duration-300",
            currentSection === section 
              ? "bg-vibrant-purple h-4 w-4"
              : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          )}></span>
          
          {/* Section label that appears on hover */}
          <span className="absolute right-8 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-300 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {sectionsProgress[section] > 0 && ` - ${Math.round(sectionsProgress[section])}%`}
          </span>
          
          {/* Progress indicator for partially viewed sections */}
          {sectionsProgress[section] > 0 && sectionsProgress[section] < 100 && (
            <svg className="absolute top-0 left-0 -z-10 h-full w-full" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="48" 
                stroke="rgba(139, 92, 246, 0.5)" 
                strokeWidth="20" 
                fill="none" 
                strokeDasharray={`${sectionsProgress[section]}, 100`}
                transform="rotate(-90 50 50)"
                strokeLinecap="round"
              />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
};

const SmoothScroll = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [sectionsProgress, setSectionsProgress] = useState<Record<string, number>>({});
  
  useEffect(() => {
    const calcSectionProgress = (entry: IntersectionObserverEntry) => {
      if (!entry.target.id) return 0;
      
      const viewportHeight = window.innerHeight;
      const boundingRect = entry.boundingClientRect;
      
      // If the element is above the viewport
      if (boundingRect.bottom <= 0) return 100;
      // If the element is below the viewport
      if (boundingRect.top >= viewportHeight) return 0;
      
      // If element is partially visible
      const visibleHeight = Math.min(boundingRect.bottom, viewportHeight) - Math.max(boundingRect.top, 0);
      return Math.round((visibleHeight / boundingRect.height) * 100);
    };
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const updatedProgress = { ...sectionsProgress };
      
      entries.forEach(entry => {
        if (entry.target.id) {
          // Update progress for this section
          updatedProgress[entry.target.id] = calcSectionProgress(entry);
          
          // Set as current section if it's most visible
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id);
            
            // Update URL without triggering scroll
            const url = new URL(window.location.toString());
            url.hash = `#${entry.target.id}`;
            window.history.replaceState({}, "", url.toString());
          }
        }
      });
      
      setSectionsProgress(updatedProgress);
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: "0px"
    });
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [sectionsProgress]);
  
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
  
  return <AnchorLinkIndicator currentSection={currentSection} sectionsProgress={sectionsProgress} />;
};

export default SmoothScroll;
