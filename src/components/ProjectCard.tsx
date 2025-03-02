
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  blurImage?: string;
  title: string;
  category: string;
  slug: string;
  index?: number;
}

const ProjectCard = ({ image, blurImage, title, category, slug, index = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const bgStyle = blurImage 
    ? { backgroundImage: `url(${blurImage})` }
    : {};

  return (
    <Link to={`/projects/${slug}`}>
      <div
        ref={cardRef}
        className={`group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 bg-white ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative overflow-hidden ${imageLoaded ? 'loaded' : ''}`}
          style={bgStyle}
        >
          <div className="aspect-[16/9]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </div>
          
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-1">
              <div className="bg-vibrant-purple text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-2">
                {category}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">{title}</h3>
              <div className="flex items-center mt-3 text-white/80 text-sm">
                <span>View Case Study</span>
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="bg-vibrant-purple/10 text-vibrant-purple text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">
            {category}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-vibrant-purple transition-colors">{title}</h3>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">Case Study</span>
            <div className="w-8 h-8 rounded-full bg-vibrant-purple/10 flex items-center justify-center text-vibrant-purple transition-all duration-300 group-hover:bg-vibrant-purple group-hover:text-white">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
