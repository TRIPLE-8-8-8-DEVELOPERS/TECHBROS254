
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  slug: string;
  image?: string;
  category?: string;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index = 0, 
  slug, 
  image,
  category 
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors: Record<string, { bg: string, text: string, hover: string, border: string, gradient: string }> = {
    "Development": { 
      bg: "bg-vibrant-purple/10", 
      text: "text-vibrant-purple", 
      hover: "hover:bg-vibrant-purple/20",
      border: "border-vibrant-purple/20",
      gradient: "from-vibrant-purple/10 to-vibrant-purple/30"
    },
    "Infrastructure": { 
      bg: "bg-vibrant-blue/10", 
      text: "text-vibrant-blue", 
      hover: "hover:bg-vibrant-blue/20",
      border: "border-vibrant-blue/20",
      gradient: "from-vibrant-blue/10 to-vibrant-blue/30"
    },
    "Consulting": { 
      bg: "bg-teal-100", 
      text: "text-teal-700", 
      hover: "hover:bg-teal-200",
      border: "border-teal-200",
      gradient: "from-teal-100 to-teal-200/50"
    },
    "E-commerce": { 
      bg: "bg-orange-100", 
      text: "text-orange-700", 
      hover: "hover:bg-orange-200",
      border: "border-orange-200",
      gradient: "from-orange-100 to-orange-200/50"
    },
    "AI & Data": { 
      bg: "bg-indigo-100", 
      text: "text-indigo-700", 
      hover: "hover:bg-indigo-200",
      border: "border-indigo-200",
      gradient: "from-indigo-100 to-indigo-200/50"
    },
    "Security": { 
      bg: "bg-red-100", 
      text: "text-red-700", 
      hover: "hover:bg-red-200",
      border: "border-red-200",
      gradient: "from-red-100 to-red-200/50"
    },
    "Marketing": { 
      bg: "bg-vibrant-pink/10", 
      text: "text-vibrant-pink", 
      hover: "hover:bg-vibrant-pink/20",
      border: "border-vibrant-pink/20",
      gradient: "from-vibrant-pink/10 to-vibrant-pink/30"
    },
  };

  const defaultColor = { 
    bg: "bg-tech-50", 
    text: "text-tech-600", 
    hover: "hover:bg-tech-100",
    border: "border-tech-200",
    gradient: "from-tech-50 to-tech-100/50"
  };

  const colorConfig = category ? (categoryColors[category] || defaultColor) : defaultColor;

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

  return (
    <div
      ref={cardRef}
      className={`service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/services/${slug}`} className="block h-full flex flex-col">
        {image && (
          <div className="h-48 md:h-52 lg:h-56 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        )}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          {category && (
            <Badge 
              variant="outline" 
              className={`mb-4 self-start ${colorConfig.bg} ${colorConfig.text} ${colorConfig.hover} ${colorConfig.border}`}
            >
              {category}
            </Badge>
          )}
          <div 
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-gradient-to-r ${
              isHovered 
                ? `${colorConfig.text} bg-white border-2 ${colorConfig.border}` 
                : `${colorConfig.gradient} ${colorConfig.text}`
            }`}
          >
            <Icon size={26} className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-left font-feature">{title}</h3>
          <p className="text-gray-600 text-left flex-grow">{description}</p>
          
          <div className="mt-6 flex justify-between items-center">
            <div className={`w-0 h-1 rounded-full bg-gradient-to-r ${colorConfig.gradient} transition-all duration-500 ${isHovered ? "w-1/2" : ""}`}></div>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${colorConfig.text} p-0 hover:bg-transparent hover:text-tech-800 transition-all duration-300 ${
                isHovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
