
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

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-vibrant-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-vibrant-pink/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-vibrant-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-vibrant-purple/10 border border-vibrant-purple/20 rounded-full">
            <span className="text-sm font-medium text-vibrant-purple uppercase tracking-wider font-accent">
              Our Expertise
            </span>
          </div>
          <h2 className="section-title font-feature">Transforming Businesses with <span className="title-highlight">Technology</span></h2>
          <p className="text-gray-600 mt-6 text-lg text-pretty">
            We provide a comprehensive suite of services that cater to businesses of all sizes, from startups to enterprises, combining technical expertise with strategic insight.
          </p>
        </div>

        {/* Category Filters - Enhanced styling */}
        <div className="mb-12">
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-4xl mx-auto">
            <TabsList className="w-full flex flex-wrap justify-center bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 p-3 rounded-xl">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize font-accent text-base px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-vibrant-purple data-[state=active]:to-vibrant-pink data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  {category === "all" ? "All Services" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Enhanced services grid with larger cards and better styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-vibrant-purple/20 transform hover:-translate-y-2"
            >
              {/* Service main card */}
              <Link to={`/services/${service.slug}`} className="block">
                {service.image && (
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-8">
                  {service.category && (
                    <Badge variant="outline" className="mb-4 text-sm px-3 py-1 bg-vibrant-purple/10 text-vibrant-purple border-vibrant-purple/20">
                      {service.category}
                    </Badge>
                  )}
                  
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 flex items-center justify-center mb-5 text-vibrant-purple group-hover:scale-110 transition-all duration-300">
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-left font-feature">{service.title}</h3>
                  <p className="text-base text-gray-600 text-left mb-6">{service.shortDescription}</p>
                  
                  <div className="flex items-center text-vibrant-purple font-medium">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Enhanced subcategories section */}
              {service.subcategories && service.subcategories.length > 0 && (
                <div className="border-t border-gray-100">
                  <button 
                    onClick={() => setShowSubcategories(showSubcategories === service.slug ? null : service.slug)}
                    className="flex items-center justify-between w-full p-5 text-vibrant-purple hover:bg-vibrant-purple/5 transition-colors font-medium"
                  >
                    <span>{showSubcategories === service.slug ? 'Hide specialized services' : 'View specialized services'}</span>
                    <ChevronRight 
                      size={18} 
                      className={`transition-transform duration-300 ${showSubcategories === service.slug ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  
                  {showSubcategories === service.slug && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gradient-to-r from-vibrant-purple/5 to-vibrant-pink/5 animate-fade-in">
                      {service.subcategories.map((subcat) => {
                        const Icon = subcat.icon;
                        return (
                          <Link 
                            key={subcat.id}
                            to={`/services/${service.slug}/${subcat.slug}`}
                            className="flex items-start p-4 rounded-xl hover:bg-white transition-colors group/item"
                          >
                            {Icon && (
                              <div className="w-10 h-10 rounded-lg bg-white text-vibrant-purple flex items-center justify-center mr-3 group-hover/item:bg-vibrant-purple group-hover/item:text-white transition-all duration-300 border border-vibrant-purple/20">
                                <Icon size={20} />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="text-base font-bold mb-1 group-hover/item:text-vibrant-purple transition-colors">{subcat.title}</h4>
                              <p className="text-sm text-gray-600 line-clamp-2">{subcat.description}</p>
                              <div className="flex items-center mt-2 text-sm text-vibrant-purple font-medium opacity-0 group-hover/item:opacity-100 transition-opacity">
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
        
        {/* "View All Services" button */}
        <div className="mt-16 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium group"
          >
            View All Services
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
