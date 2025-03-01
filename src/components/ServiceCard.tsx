
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
          <div className="h-48 overflow-hidden">
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
              className="mb-3 bg-tech-50 text-tech-600 hover:bg-tech-100 border-tech-200"
            >
              {category}
            </Badge>
          )}
          <div 
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
              isHovered ? "bg-tech-400 text-white" : "bg-tech-50 text-tech-400"
            }`}
          >
            <Icon size={24} className="transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
          <p className="text-sm text-gray-600 text-left">{description}</p>
          
          <div className="mt-5 flex justify-between items-center">
            <div className={`w-0 h-0.5 bg-tech-400 transition-all duration-500 ${isHovered ? "w-1/2" : ""}`}></div>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-tech-600 p-0 hover:bg-transparent hover:text-tech-800 transition-all duration-300 ${
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
