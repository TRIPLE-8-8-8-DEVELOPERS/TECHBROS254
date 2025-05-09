
import { useEffect } from "react";

const SmoothScroll = () => {
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
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 100, // Offset for header
        behavior: 'smooth'
      });
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return null; // This is a utility component with no UI
};

export default SmoothScroll;
