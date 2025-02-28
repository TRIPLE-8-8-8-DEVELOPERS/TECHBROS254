
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - windowHeight;
      const progress = (scrollTop / totalScrollable) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-indicator" 
      style={{ width: `${scrollProgress}%` }} 
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
