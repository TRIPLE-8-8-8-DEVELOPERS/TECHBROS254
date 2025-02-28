
import { useState, useEffect, useRef } from "react";

interface CaseStudyCardProps {
  image: string;
  blurImage?: string;
  title: string;
  category: string;
  index?: number;
}

const CaseStudyCard = ({ image, blurImage, title, category, index = 0 }: CaseStudyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const bgStyle = blurImage 
    ? { backgroundImage: `url(${blurImage})` }
    : {};

  return (
    <div
      ref={cardRef}
      className={`card-hover rounded-2xl overflow-hidden transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div 
        className={`blur-load relative aspect-[4/3] ${imageLoaded ? 'loaded' : ''}`}
        style={bgStyle}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>
      <div className="p-4 bg-white">
        <span className="text-xs font-medium text-triple-500 uppercase tracking-wider">{category}</span>
        <h3 className="text-lg font-semibold mt-1 text-left">{title}</h3>
      </div>
    </div>
  );
};

export default CaseStudyCard;
