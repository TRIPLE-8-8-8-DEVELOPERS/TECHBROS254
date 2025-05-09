
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
      
      // Get the header height for offset - automatically adapts if header size changes
      const header = document.querySelector('header');
      const offset = header ? header.getBoundingClientRect().height + 20 : 100;
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
      
      // Update URL without scrolling
      window.history.pushState(null, '', href);
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return null; // This is a utility component with no UI
};

export default SmoothScroll;
