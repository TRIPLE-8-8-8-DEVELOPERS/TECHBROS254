
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serviceDetails } from "../../data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

const EcommerceServices = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Filter services by E-commerce category
  const services = serviceDetails.filter(service => service.category === "E-commerce");
  // Get all subcategories
  const allSubcategories = services.flatMap(service => service.subcategories || []);
  
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-tech-50">
          <div className="container mx-auto px-4">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link to="/services" className="text-tech-600 hover:text-tech-700 mb-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                All Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">E-commerce Services</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Complete e-commerce solutions to help you sell products online and grow your business.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                  slug={service.slug}
                  index={index}
                  image={service.image}
                  category={service.category}
                />
              ))}
            </div>
            
            {/* Subcategories Section */}
            {allSubcategories.length > 0 && (
              <div className="mt-20">
                <h2 className="text-3xl font-bold mb-10 text-center">Specialized E-commerce Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {allSubcategories.map((subcategory, index) => {
                    const parentService = services.find(service => 
                      service.subcategories?.some(sub => sub.id === subcategory.id)
                    );
                    const Icon = subcategory.icon;
                    
                    return (
                      <Link 
                        key={subcategory.id}
                        to={`/services/${parentService?.slug}/${subcategory.slug}`}
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-tech-200"
                      >
                        {subcategory.image && (
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={subcategory.image} 
                              alt={subcategory.title}
                              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            {Icon && (
                              <div className="w-8 h-8 rounded-lg bg-tech-50 text-tech-500 flex items-center justify-center mr-3 group-hover:bg-tech-100 transition-colors">
                                <Icon size={18} />
                              </div>
                            )}
                            <h3 className="font-bold">{subcategory.title}</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">{subcategory.description}</p>
                          <div className="flex items-center text-tech-500 text-sm font-medium">
                            Learn more <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EcommerceServices;
