
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ServiceCard from "@/components/ServiceCard";
import { serviceDetails } from "@/data/services";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const ForexServices = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const forexServices = serviceDetails.filter(service => service.category === "Forex Trading");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-tech-50 to-white dark:from-dark-100 dark:to-dark-200">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute top-20 right-10 w-64 h-64 bg-vibrant-blue/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-vibrant-purple/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-6">
              <Link 
                to="/services" 
                className="inline-flex items-center text-tech-600 dark:text-tech-400 hover:text-tech-800 dark:hover:text-tech-300 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all services
              </Link>
            </div>
            
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-4 py-1.5 bg-vibrant-blue/10 dark:bg-vibrant-blue/20 border border-vibrant-blue/20 dark:border-vibrant-blue/30 rounded-full">
                <span className="text-sm font-medium text-vibrant-blue dark:text-vibrant-blue/90 uppercase tracking-wider font-accent">
                  Forex Trading Services
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
                Advanced <span className="text-vibrant-blue dark:text-vibrant-blue/90">Forex Trading</span> Solutions
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
                Cutting-edge technologies and tools to help traders succeed in the foreign exchange market.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <TrendingUp size={48} className="text-vibrant-blue dark:text-vibrant-blue/90" />
                <div className="text-left">
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Empowering traders with professional-grade solutions for the world's largest financial market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Forex Trading Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore our comprehensive range of forex trading services designed to meet the needs of traders at all levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {forexServices.map((service, index) => (
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
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-tech-50 dark:bg-dark-300">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Forex Solutions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our forex trading solutions offer numerous advantages to help you succeed in the markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-vibrant-blue/10 dark:bg-vibrant-blue/20 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp size={24} className="text-vibrant-blue dark:text-vibrant-blue/90" />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-time Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access real-time market data and analytics to make informed trading decisions.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-vibrant-blue/10 dark:bg-vibrant-blue/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vibrant-blue dark:text-vibrant-blue/90">
                    <path d="M12 2v20"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Advanced Risk Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sophisticated risk management tools to protect your capital and optimize performance.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-vibrant-blue/10 dark:bg-vibrant-blue/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vibrant-blue dark:text-vibrant-blue/90">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access to expert support and guidance from experienced forex professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForexServices;
