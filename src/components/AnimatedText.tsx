
import { useState, useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText = ({ text, className = "", once = true }: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, [once]);

  // Split text into words and characters
  const words = text.split(" ");

  return (
    <div ref={textRef} className={`overflow-hidden ${className}`} aria-label={text}>
      <div className="flex flex-wrap justify-center">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="relative flex overflow-hidden mx-1 my-1">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block transform transition-all duration-[800ms] delay-[calc(60ms*var(--index))]"
                style={{ 
                  "--index": charIndex,
                  transform: isVisible ? "translateY(0)" : "translateY(100%)",
                  opacity: isVisible ? 1 : 0,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
                } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
