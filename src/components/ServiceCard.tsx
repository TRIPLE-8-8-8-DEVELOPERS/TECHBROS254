
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  slug: string;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0, slug }: ServiceCardProps) => {
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
    <Link to={`/services/${slug}`}>
      <div
        ref={cardRef}
        className={`service-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
            isHovered ? "bg-tech-400 text-white" : "bg-tech-50 text-tech-400"
          }`}
        >
          <Icon size={24} className="transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
        <p className="text-sm text-gray-600 text-left">{description}</p>
        <div className={`w-0 h-0.5 bg-tech-400 mt-4 transition-all duration-500 ${isHovered ? "w-full" : ""}`}></div>
      </div>
    </Link>
  );
};

export default ServiceCard;
