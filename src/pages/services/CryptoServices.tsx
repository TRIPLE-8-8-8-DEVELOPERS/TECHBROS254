
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ServiceCard from "@/components/ServiceCard";
import { serviceDetails } from "@/data/services";
import { ArrowLeft, Bitcoin } from "lucide-react";
import { useEffect, useState } from "react";

const CryptoServices = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cryptoServices = serviceDetails.filter(service => service.category === "Cryptocurrency");

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
            <div className="absolute top-20 right-10 w-64 h-64 bg-orange-300/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
              <div className="inline-block mb-6 px-4 py-1.5 bg-orange-100 dark:bg-orange-400/20 border border-orange-200 dark:border-orange-500/30 rounded-full">
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400 uppercase tracking-wider font-accent">
                  Cryptocurrency Services
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
                <span className="text-orange-500 dark:text-orange-400">Blockchain</span> & Cryptocurrency Solutions
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
                Comprehensive solutions for the digital asset ecosystem, from trading to blockchain development.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Bitcoin size={48} className="text-orange-500 dark:text-orange-400" />
                <div className="text-left">
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Empowering businesses and individuals to thrive in the evolving cryptocurrency landscape.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Cryptocurrency Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore our comprehensive range of cryptocurrency and blockchain services designed for the digital asset ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cryptoServices.map((service, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Crypto Solutions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our cryptocurrency solutions offer numerous advantages to help you succeed in the digital asset ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-400/20 rounded-full flex items-center justify-center mb-6">
                  <Bitcoin size={24} className="text-orange-500 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Blockchain Expertise</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep technical expertise across multiple blockchain platforms and protocols.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-400/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 dark:text-orange-400">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Security-First Approach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive security solutions to protect digital assets and blockchain infrastructure.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-400/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 dark:text-orange-400">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovative Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cutting-edge blockchain and cryptocurrency solutions at the forefront of the industry.
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

export default CryptoServices;
