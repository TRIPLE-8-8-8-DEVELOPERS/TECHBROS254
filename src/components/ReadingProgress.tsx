
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

const ReadingProgress = () => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollHeight = () => {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight || document.body.scrollHeight;
    const clientHeight = el.clientHeight;
    
    // Show progress bar only after scrolling a bit
    setIsVisible(scrollTop > 100);
    
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight) * 100;
    setWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 z-[100] w-full h-1.5 bg-transparent transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className="h-full bg-gradient-to-r from-vibrant-purple to-vibrant-pink rounded-r-full shadow-sm"
        style={{ width: `${width}%` }}
      >
        <div 
          className="absolute right-0 top-[-3px] h-3 w-3 bg-vibrant-pink rounded-full shadow-lg transform translate-x-1/2" 
          style={{ display: width > 0 ? 'block' : 'none' }}
        >
          {showTooltip && width > 0 && (
            <Badge 
              variant="outline" 
              className="absolute top-5 right-0 transform translate-x-1/2 bg-white dark:bg-dark-300 text-xs py-1 px-2 rounded-md shadow-md"
            >
              {Math.round(width)}% read
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingProgress;
