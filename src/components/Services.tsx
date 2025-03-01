
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { serviceDetails } from "../data/services";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronRight } from "lucide-react";

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
      {/* Background elements with more vibrant colors */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-vibrant-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-vibrant-pink/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 relative">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-vibrant-purple uppercase tracking-wider mb-2 inline-block before-dash font-accent">
            Our Expertise
          </span>
          <h2 className="section-title font-feature">Transforming Businesses with <span className="title-highlight">Technology</span></h2>
          <p className="text-gray-600 mt-6 text-lg text-pretty">
            We provide a comprehensive suite of services that cater to businesses of all sizes, from startups to enterprises, combining technical expertise with strategic insight.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex justify-center">
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-3xl">
            <TabsList className="w-full flex flex-wrap justify-center bg-vibrant-purple/10 p-2">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize font-accent data-[state=active]:bg-vibrant-purple data-[state=active]:text-white"
                >
                  {category === "all" ? "All Services" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div key={service.id}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                index={index}
                image={service.image}
                category={service.category}
              />
              
              {/* Subcategories section */}
              {service.subcategories && service.subcategories.length > 0 && (
                <div className="mt-4">
                  <button 
                    onClick={() => setShowSubcategories(showSubcategories === service.slug ? null : service.slug)}
                    className="flex items-center text-sm font-medium text-vibrant-purple hover:text-vibrant-purple/80 transition-colors"
                  >
                    <ChevronRight 
                      size={16} 
                      className={`mr-1 transition-transform ${showSubcategories === service.slug ? 'rotate-90' : ''}`} 
                    />
                    {showSubcategories === service.slug ? 'Hide subcategories' : 'View subcategories'}
                  </button>
                  
                  {showSubcategories === service.slug && (
                    <div className="mt-2 ml-6 space-y-2 animate-fade-in">
                      {service.subcategories.map((subcat) => (
                        <Link 
                          key={subcat.id}
                          to={`/services/${service.slug}/${subcat.slug}`}
                          className="flex items-center p-2 rounded-md hover:bg-vibrant-purple/10 transition-colors"
                        >
                          {subcat.icon && <subcat.icon size={16} className="mr-2 text-vibrant-purple" />}
                          <span className="text-sm font-medium">{subcat.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
