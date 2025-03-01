
import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, ChevronDown, Tag } from "lucide-react";
import { serviceDetails } from "../data/services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const service = serviceDetails.find(s => s.slug === slug);
  
  // Extract all unique categories
  const allCategories = ["all", ...Array.from(new Set(serviceDetails.map(item => item.category || "uncategorized")))];
  
  // Get related services by category or from the service's relatedServices array
  const getRelatedServices = () => {
    if (selectedCategory !== "all") {
      return serviceDetails
        .filter(s => s.slug !== slug && s.category === selectedCategory)
        .slice(0, 3);
    }
    
    if (service?.relatedServices) {
      return service.relatedServices
        .map(relatedSlug => serviceDetails.find(s => s.slug === relatedSlug))
        .filter(Boolean) as typeof serviceDetails;
    }
    
    return [];
  };
  
  const relatedServices = getRelatedServices();
  
  useEffect(() => {
    if (!service) {
      navigate("/services");
      return;
    }
    
    // Set the initial category to the service's category
    if (service.category) {
      setSelectedCategory(service.category);
    }
    
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [service, navigate]);
  
  if (!service) return null;

  const handleScrollDown = () => {
    if (contentRef.current) {
      window.scrollTo({
        top: contentRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          
          <div className="container mx-auto px-4 z-10 text-white">
            <Link to="/#services" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Services
            </Link>
            <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-block text-sm font-medium bg-tech-400/90 px-4 py-1 rounded-full">
                  Service
                </span>
                {service.category && (
                  <Badge 
                    variant="outline" 
                    className="bg-white/10 text-white hover:bg-white/20 border-white/30"
                  >
                    <Tag size={14} className="mr-1" />
                    {service.category}
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                {service.shortDescription}
              </p>
              
              <button 
                onClick={handleScrollDown}
                aria-label="Learn more"
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <span className="mr-2">Learn More</span>
                <ChevronDown size={18} className="animate-bounce" />
              </button>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section ref={contentRef} className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <div className="prose prose-lg max-w-none">
                  {service.description.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {service.keyFeatures && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Key Features & Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                            <Check size={16} className="text-tech-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {service.processSteps && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                    <div className="space-y-6">
                      {service.processSteps.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="mr-6 flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold">
                              {index + 1}
                            </div>
                            {index < service.processSteps.length - 1 && (
                              <div className="w-px h-full bg-tech-200 mx-auto mt-2"></div>
                            )}
                          </div>
                          <div className="pb-6">
                            <h4 className="font-medium text-lg">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {service.showcaseImages && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Recent Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.showcaseImages.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${service.title} project example ${index + 1}`}
                            className="w-full h-auto transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-tech-50 p-6 rounded-xl sticky top-32">
                  <h3 className="text-xl font-bold mb-4">Why Choose TechBros?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <span>Experienced team of professionals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <span>Customized solutions for your needs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <span>Cutting-edge technologies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <span>Transparent communication</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Link 
                      to="/#contact"
                      className="block w-full py-3 bg-tech-400 text-white text-center rounded-lg hover:bg-tech-500 transition-colors font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                        setTimeout(() => {
                          const contactSection = document.querySelector("#contact");
                          if (contactSection) {
                            window.scrollTo({
                              top: contactSection.getBoundingClientRect().top + window.pageYOffset - 100,
                              behavior: "smooth",
                            });
                          }
                        }, 100);
                      }}
                    >
                      Request a Consultation
                    </Link>
                  </div>
                  
                  {service.technologies && (
                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Technologies We Use</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="bg-white px-3 py-1 rounded-full text-xs font-medium text-tech-600 border border-tech-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-tech-400 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
              </p>
              <Link 
                to="/#contact"
                className="inline-block px-8 py-4 bg-white text-tech-500 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.getBoundingClientRect().top + window.pageYOffset - 100,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {(service.relatedServices || service.category) && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-center md:text-left">Related Services</h2>
                
                {/* Category Filters */}
                <Tabs
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                  className="mt-4 md:mt-0"
                >
                  <TabsList className="bg-tech-50">
                    {allCategories.map((category) => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        className="capitalize data-[state=active]:bg-tech-100 data-[state=active]:text-tech-800"
                      >
                        {category === "all" ? "All" : category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService, index) => {
                  if (!relatedService) return null;
                  
                  return (
                    <Link 
                      key={index}
                      to={`/services/${relatedService.slug}`} 
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedService.image} 
                          alt={relatedService.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        {relatedService.category && (
                          <Badge 
                            variant="outline" 
                            className="mb-3 bg-tech-50 text-tech-600 hover:bg-tech-100 border-tech-200"
                          >
                            {relatedService.category}
                          </Badge>
                        )}
                        <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                        <p className="text-gray-600 line-clamp-2">{relatedService.shortDescription}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
