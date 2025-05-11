
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { serviceDetails } from "../data/services";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showSubcategories, setShowSubcategories] = useState<string | null>(null);

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(serviceDetails.map(item => item.category || "uncategorized")))];

  // Filter services based on selected category
  const filteredServices = selectedCategory === "all" 
    ? serviceDetails 
    : serviceDetails.filter(service => service.category === selectedCategory);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
    };
  }, []);

  // Map category to URL segment
  const getCategoryUrl = (category: string): string => {
    const categoryUrls: Record<string, string> = {
      "Development": "development",
      "Infrastructure": "infrastructure",
      "Consulting": "consulting",
      "E-commerce": "ecommerce",
      "AI & Data": "ai-data",
      "Security": "security",
      "Marketing": "marketing",
      "Design": "design",
      "Healthcare": "healthcare",
      "Education": "education",
      "Forex Trading": "forex",
      "Cryptocurrency": "crypto"
    };
    return categoryUrls[category] || category.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden w-full dark:bg-dark-100">
      {/* Enhanced background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-vibrant-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 dark:mix-blend-normal"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-vibrant-pink/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 dark:mix-blend-normal"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-vibrant-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-15 dark:mix-blend-normal"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto relative">
        <div 
          ref={titleRef}
          className={`max-w-4xl mx-auto text-center mb-16 md:mb-24 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-vibrant-purple/10 dark:bg-vibrant-purple/20 border border-vibrant-purple/20 dark:border-vibrant-purple/30 rounded-full">
            <span className="text-sm font-medium text-vibrant-purple dark:text-vibrant-purple/90 uppercase tracking-wider font-accent">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-feature text-gray-800 dark:text-white">Transforming Businesses with <span className="title-highlight text-vibrant-purple dark:text-vibrant-purple/90">Technology</span></h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl text-pretty max-w-3xl mx-auto">
            We provide a comprehensive suite of services that cater to businesses of all sizes, from startups to enterprises, combining technical expertise with strategic insight.
          </p>
        </div>

        {/* Category Filters - Enhanced styling */}
        <div className="mb-12 md:mb-16">
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-5xl mx-auto">
            <TabsList className="w-full flex flex-wrap justify-center bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 dark:from-vibrant-purple/20 dark:to-vibrant-pink/20 p-3 rounded-xl">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize font-accent text-base px-5 py-2.5 text-gray-700 dark:text-gray-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-vibrant-purple data-[state=active]:to-vibrant-pink data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  {category === "all" ? "All Services" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Full-width services grid with better responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white dark:bg-dark-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-vibrant-purple/20 dark:hover:border-vibrant-purple/30 transform hover:-translate-y-2 h-full"
            >
              {/* Service main card */}
              <Link to={`/services/${service.slug}`} className="block h-full flex flex-col">
                {service.image && (
                  <div className="h-52 sm:h-48 md:h-56 lg:h-60 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {service.category && (
                    <Badge variant="outline" className="mb-4 text-sm px-3 py-1 bg-vibrant-purple/10 text-vibrant-purple dark:bg-vibrant-purple/20 dark:text-vibrant-purple/90 border-vibrant-purple/20 dark:border-vibrant-purple/30 self-start">
                      {service.category}
                    </Badge>
                  )}
                  
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 dark:from-vibrant-purple/20 dark:to-vibrant-pink/20 flex items-center justify-center mb-5 text-vibrant-purple dark:text-vibrant-purple/90 group-hover:scale-110 transition-all duration-300">
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-left font-feature text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 text-left mb-6 flex-grow">{service.shortDescription}</p>
                  
                  <div className="flex items-center text-vibrant-purple dark:text-vibrant-purple/90 font-medium mt-auto">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Enhanced subcategories section */}
              {service.subcategories && service.subcategories.length > 0 && (
                <div className="border-t border-gray-100 dark:border-gray-700">
                  <button 
                    onClick={() => setShowSubcategories(showSubcategories === service.slug ? null : service.slug)}
                    className="flex items-center justify-between w-full p-5 text-vibrant-purple dark:text-vibrant-purple/90 hover:bg-vibrant-purple/5 dark:hover:bg-vibrant-purple/10 transition-colors font-medium"
                  >
                    <span>{showSubcategories === service.slug ? 'Hide specialized services' : 'View specialized services'}</span>
                    <ChevronRight 
                      size={18} 
                      className={`transition-transform duration-300 ${showSubcategories === service.slug ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  
                  {showSubcategories === service.slug && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-gradient-to-r from-vibrant-purple/5 to-vibrant-pink/5 dark:from-vibrant-purple/10 dark:to-vibrant-pink/10 animate-fade-in">
                      {service.subcategories.map((subcat) => {
                        const Icon = subcat.icon;
                        return (
                          <Link 
                            key={subcat.id}
                            to={`/services/${service.slug}/${subcat.slug}`}
                            className="flex items-start p-4 rounded-xl hover:bg-white dark:hover:bg-dark-200 transition-colors group/item"
                          >
                            {Icon && (
                              <div className="w-10 h-10 rounded-lg bg-white dark:bg-dark-300 text-vibrant-purple dark:text-vibrant-purple/90 flex items-center justify-center mr-3 group-hover/item:bg-vibrant-purple group-hover/item:text-white transition-all duration-300 border border-vibrant-purple/20 dark:border-vibrant-purple/30">
                                <Icon size={20} />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="text-base font-bold mb-1 text-gray-800 dark:text-white group-hover/item:text-vibrant-purple dark:group-hover/item:text-vibrant-purple/90 transition-colors">{subcat.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{subcat.description}</p>
                              <div className="flex items-center mt-2 text-sm text-vibrant-purple dark:text-vibrant-purple/90 font-medium opacity-0 group-hover/item:opacity-100 transition-opacity">
                                <span>View details</span>
                                <ExternalLink size={14} className="ml-1" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* "View All Services" button - larger and more prominent */}
        <div className="mt-16 md:mt-24 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium group text-lg"
          >
            View All Services
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
