
import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight || document.body.scrollHeight;
    const clientHeight = el.clientHeight;
    
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight) * 100;
    setWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[100] w-full h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-vibrant-purple to-vibrant-pink"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ReadingProgress;
