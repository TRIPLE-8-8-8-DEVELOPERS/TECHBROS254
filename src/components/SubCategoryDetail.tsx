
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { serviceDetails } from "../data/services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { Badge } from "./ui/badge";

const SubCategoryDetail = () => {
  const { serviceSlug, subSlug } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Find the parent service
  const service = serviceDetails.find(s => s.slug === serviceSlug);
  
  // Find the subcategory
  const subcategory = service?.subcategories?.find(sub => sub.slug === subSlug);
  
  useEffect(() => {
    if (!service || !subcategory) {
      navigate(`/services/${serviceSlug || ''}`);
      return;
    }
    
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [service, subcategory, navigate, serviceSlug]);
  
  if (!service || !subcategory) return null;
  
  const Icon = subcategory.icon;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with Background Image */}
        <section 
          className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-tech-700/90 to-tech-900/90 text-white"
          style={{
            backgroundImage: `url(${subcategory.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <Link to={`/services/${serviceSlug}`} className="inline-flex items-center text-white hover:text-tech-100 mb-6 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to {service.title}
            </Link>
            <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="outline" className="bg-tech-100/20 text-white border-tech-100/30">
                  {service.category}
                </Badge>
                <span className="inline-block text-sm font-medium bg-tech-400/90 text-white px-4 py-1 rounded-full">
                  Specialized Service
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                {Icon && <Icon size={36} className="text-tech-100" />}
                <h1 className="text-4xl md:text-5xl font-bold">{subcategory.title}</h1>
              </div>
              
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                {subcategory.description}
              </p>
              
              <Link
                to="/#contact"
                className="inline-flex items-center px-6 py-3 bg-tech-400 hover:bg-tech-500 text-white rounded-lg transition-colors"
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
                Request a Consultation <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">About {subcategory.title}</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {subcategory.description}
                  </p>
                </div>
                
                {/* Key Features Section */}
                {subcategory.features && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subcategory.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                            <Check size={16} className="text-tech-600" />
                          </div>
                          <div>
                            <p className="text-gray-700 dark:text-gray-300"><b>{feature}</b></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Benefits Section */}
                {subcategory.benefits && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {subcategory.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                            <Check size={16} className="text-tech-600" />
                          </div>
                          <div>
                            <p className="text-gray-700 dark:text-gray-300"><b>{benefit}</b></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Default Benefits if none specified */}
                {!subcategory.benefits && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                          <Check size={16} className="text-tech-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg"><b>Enhanced Security Posture</b></h4>
                          <p className="text-gray-600 dark:text-gray-400">Strengthen your defenses against evolving threats</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                          <Check size={16} className="text-tech-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg"><b>Regulatory Compliance</b></h4>
                          <p className="text-gray-600 dark:text-gray-400">Meet industry standards and regulatory requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                          <Check size={16} className="text-tech-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg"><b>Business Continuity</b></h4>
                          <p className="text-gray-600 dark:text-gray-400">Minimize downtime and maintain operations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                          <Check size={16} className="text-tech-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg"><b>Reduced Risk Exposure</b></h4>
                          <p className="text-gray-600 dark:text-gray-400">Protect your reputation and financial assets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Image Section */}
                {subcategory.image && (
                  <div className="mt-12">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.title}
                      className="w-full h-auto rounded-xl shadow-md"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                      {subcategory.title} - Comprehensive protection for your business
                    </p>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-tech-50 dark:bg-dark-300/50 p-6 rounded-xl sticky top-32">
                  <h3 className="text-xl font-bold mb-4">Our Process</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Assessment</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">We evaluate your current security posture and risks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Strategy Development</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Creating a tailored security approach</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Implementation</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Deploying security controls and technologies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Testing & Validation</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Verifying the effectiveness of security measures</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium">Continuous Monitoring</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ongoing threat detection and security updates</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 space-y-4">
                    <div className="bg-white dark:bg-dark-200 p-4 rounded-lg border border-gray-100 dark:border-dark-100">
                      <h4 className="font-bold text-tech-500 dark:text-tech-400 mb-2">Industry Expertise</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Our security specialists have deep experience across financial services, healthcare, 
                        retail, manufacturing, and government sectors.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-dark-200 p-4 rounded-lg border border-gray-100 dark:border-dark-100">
                      <h4 className="font-bold text-tech-500 dark:text-tech-400 mb-2">24/7 Support</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Our security operations center provides around-the-clock monitoring and 
                        rapid response to security incidents.
                      </p>
                    </div>
                    
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
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industries Section */}
        <section className="py-12 bg-tech-50 dark:bg-dark-300/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-white dark:bg-dark-200 p-4 rounded-lg text-center">
                <h3 className="font-medium text-tech-600 dark:text-tech-400">Financial Services</h3>
              </div>
              <div className="bg-white dark:bg-dark-200 p-4 rounded-lg text-center">
                <h3 className="font-medium text-tech-600 dark:text-tech-400">Healthcare</h3>
              </div>
              <div className="bg-white dark:bg-dark-200 p-4 rounded-lg text-center">
                <h3 className="font-medium text-tech-600 dark:text-tech-400">Retail</h3>
              </div>
              <div className="bg-white dark:bg-dark-200 p-4 rounded-lg text-center">
                <h3 className="font-medium text-tech-600 dark:text-tech-400">Manufacturing</h3>
              </div>
              <div className="bg-white dark:bg-dark-200 p-4 rounded-lg text-center">
                <h3 className="font-medium text-tech-600 dark:text-tech-400">Government</h3>
              </div>
              <div className="bg-white dark:bg-dark-200 p-4 rounded-lg text-center">
                <h3 className="font-medium text-tech-600 dark:text-tech-400">Education</h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-tech-600 to-tech-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our {subcategory.title.toLowerCase()} services can protect your organization.
              </p>
              <Link 
                to="/#contact"
                className="inline-block px-8 py-4 bg-white text-tech-600 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
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
      </main>
      
      <Footer />
    </div>
  );
};

export default SubCategoryDetail;
