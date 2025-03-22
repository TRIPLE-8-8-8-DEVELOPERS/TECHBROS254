import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serviceDetails } from "../../data/services";
import { Shield, Lock, FileCheck, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ServiceCard from "@/components/ServiceCard";
import SubCategoryList from "@/components/SubCategoryList";

const SecurityServices = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Filter services by Security category
  const services = serviceDetails.filter(service => service.category === "Security");
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
        <section 
          className="relative py-24 bg-gradient-to-br from-red-800/90 via-red-900/95 to-black/90 text-white"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute top-20 right-10 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link to="/services" className="text-red-200 hover:text-white mb-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                All Services
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-feature">Cybersecurity & Protection Services</h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Enterprise-grade security solutions to protect your digital assets, safeguard sensitive data, and ensure business continuity in an increasingly hostile cyber landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center w-32">
                  <Shield className="h-8 w-8 text-red-300 mb-2" />
                  <span className="text-sm font-medium">Threat Protection</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center w-32">
                  <Lock className="h-8 w-8 text-red-300 mb-2" />
                  <span className="text-sm font-medium">Data Security</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center w-32">
                  <FileCheck className="h-8 w-8 text-red-300 mb-2" />
                  <span className="text-sm font-medium">Compliance</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center w-32">
                  <AlertTriangle className="h-8 w-8 text-red-300 mb-2" />
                  <span className="text-sm font-medium">Incident Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Overview Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-dark-100 dark:to-dark-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Security Matters</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                In today's digital landscape, cybersecurity isn't just an IT concern—it's a critical business imperative. With cyber threats growing in sophistication and frequency, organizations need robust security solutions that protect their most valuable assets while enabling business growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white dark:bg-dark-300 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">The Threat Landscape</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>Ransomware attacks increased by 150% in the last year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>Average data breach cost exceeds $4.2 million</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>Over 60% of small businesses close within 6 months of a cyber attack</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>Phishing attacks account for more than 80% of reported security incidents</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-dark-300 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">Our Approach</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>Comprehensive security assessment to identify vulnerabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>Tailored security strategies aligned with your business needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>24/7 monitoring and rapid incident response capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                      <span>Continuous security improvement through regular testing and updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Security Services</h2>
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
          </div>
        </section>
        
        {/* Subcategories Section - Replaced with SubCategoryList */}
        {allSubcategories.length > 0 && (
          <SubCategoryList serviceSlug={services[0]?.slug || ''} subcategories={allSubcategories} />
        )}
        
        {/* Industry Compliance Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-gray-50 dark:from-dark-200/50 dark:to-dark-100/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Industry Compliance & Standards</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                Our security solutions help you meet regulatory requirements and industry standards.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">GDPR</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Data Protection</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">HIPAA</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">PCI DSS</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Payment Card</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">ISO 27001</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Security Management</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">SOC 2</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Service Organizations</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">NIST</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Federal Standard</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">CCPA</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CA Privacy</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-sm text-center">
                  <span className="font-bold text-red-700 dark:text-red-400 text-lg">CMMC</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Defense</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityServices;
