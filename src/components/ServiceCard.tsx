
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

  const categoryColors: Record<string, { bg: string, text: string, hover: string, border: string }> = {
    "Development": { 
      bg: "bg-vibrant-purple/10", 
      text: "text-vibrant-purple", 
      hover: "hover:bg-vibrant-purple/20",
      border: "border-vibrant-purple/20" 
    },
    "Infrastructure": { 
      bg: "bg-vibrant-blue/10", 
      text: "text-vibrant-blue", 
      hover: "hover:bg-vibrant-blue/20",
      border: "border-vibrant-blue/20" 
    },
    "Consulting": { 
      bg: "bg-teal-100", 
      text: "text-teal-700", 
      hover: "hover:bg-teal-200",
      border: "border-teal-200" 
    },
    "E-commerce": { 
      bg: "bg-orange-100", 
      text: "text-orange-700", 
      hover: "hover:bg-orange-200",
      border: "border-orange-200" 
    },
    "AI & Data": { 
      bg: "bg-indigo-100", 
      text: "text-indigo-700", 
      hover: "hover:bg-indigo-200",
      border: "border-indigo-200" 
    },
    "Security": { 
      bg: "bg-red-100", 
      text: "text-red-700", 
      hover: "hover:bg-red-200",
      border: "border-red-200" 
    },
    "Marketing": { 
      bg: "bg-vibrant-pink/10", 
      text: "text-vibrant-pink", 
      hover: "hover:bg-vibrant-pink/20",
      border: "border-vibrant-pink/20" 
    },
  };

  const defaultColor = { 
    bg: "bg-tech-50", 
    text: "text-tech-600", 
    hover: "hover:bg-tech-100",
    border: "border-tech-200" 
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
      className={`service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/services/${slug}`} className="block">
        {image && (
          <div className="h-52 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        )}
        <div className="p-6">
          {category && (
            <Badge 
              variant="outline" 
              className={`mb-3 ${colorConfig.bg} ${colorConfig.text} ${colorConfig.hover} ${colorConfig.border}`}
            >
              {category}
            </Badge>
          )}
          <div 
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
              isHovered 
                ? `${colorConfig.text} bg-white border-2 ${colorConfig.border}` 
                : `${colorConfig.bg} ${colorConfig.text}`
            }`}
          >
            <Icon size={24} className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left font-feature">{title}</h3>
          <p className="text-sm text-gray-600 text-left">{description}</p>
          
          <div className="mt-5 flex justify-between items-center">
            <div className={`w-0 h-0.5 ${colorConfig.bg} transition-all duration-500 ${isHovered ? "w-1/2" : ""}`}></div>
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
