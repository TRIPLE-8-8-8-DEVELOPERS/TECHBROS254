
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp, ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pulse, setPulse] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate scroll percentage
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      
      setProgress(scrollPercentage);
      
      if (window.scrollY > 500) {
        setIsVisible(true);
        // Pulse animation when reaching certain thresholds
        if ([25, 50, 75, 90].includes(Math.floor(scrollPercentage))) {
          setPulse(true);
          setTimeout(() => setPulse(false), 1500);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-28 right-6 z-40 flex flex-col items-center gap-3">
          <div className="text-xs font-medium bg-white dark:bg-dark-300 rounded-md px-2 py-1 shadow-md opacity-70">
            {Math.round(progress)}%
          </div>
          <Button
            className={`relative rounded-full h-12 w-12 bg-gradient-to-r from-vibrant-purple to-vibrant-pink shadow-lg hover:shadow-xl transition-all duration-300 ${
              pulse ? 'animate-ping' : ''
            }`}
            size="icon"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className={`h-5 w-5 text-white transition-transform ${progress > 90 ? 'animate-bounce' : ''}`} />
            <svg className="absolute -top-1 -right-1 -left-1 -bottom-1 h-[calc(100%+8px)] w-[calc(100%+8px)]" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="48" 
                stroke="white" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray={`${progress * 3}, 1000`}
                transform="rotate(-90 50 50)"
              />
            </svg>
          </Button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
