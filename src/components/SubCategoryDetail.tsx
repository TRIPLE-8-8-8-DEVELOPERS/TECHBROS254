
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
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
      navigate(`/services/${serviceSlug}`);
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
          <div className="container mx-auto px-4 py-20">
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
                  Subcategory
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                {Icon && <Icon size={36} className="text-tech-100" />}
                <h1 className="text-4xl md:text-5xl font-bold">{subcategory.title}</h1>
              </div>
              
              <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                {subcategory.description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">About {subcategory.title}</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4 text-gray-700">
                    Our {subcategory.title.toLowerCase()} service is designed to help businesses 
                    maximize their e-commerce potential. We provide end-to-end solutions that address
                    all aspects of {subcategory.title.toLowerCase()} to ensure your online business thrives.
                  </p>
                  <p className="mb-4 text-gray-700">
                    With our expertise in e-commerce technologies and best practices, we help you 
                    implement {subcategory.title.toLowerCase()} strategies that drive growth and increase revenue.
                    Our team works closely with you to understand your specific needs and deliver solutions
                    that align with your business goals.
                  </p>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Increased Conversions</h4>
                        <p className="text-gray-600">Optimize your e-commerce experience to drive more sales</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Improved User Experience</h4>
                        <p className="text-gray-600">Create seamless shopping journeys for your customers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Scalable Solutions</h4>
                        <p className="text-gray-600">Grow your e-commerce business without technical limitations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                        <Check size={16} className="text-tech-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Enhanced Security</h4>
                        <p className="text-gray-600">Protect customer data and maintain compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {subcategory.image && (
                  <div className="mt-12">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.title}
                      className="w-full h-auto rounded-xl shadow-md"
                    />
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-tech-50 p-6 rounded-xl sticky top-32">
                  <h3 className="text-xl font-bold mb-4">Our Process</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Requirements Gathering</h4>
                        <p className="text-sm text-gray-600">We start by understanding your specific needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Solution Design</h4>
                        <p className="text-sm text-gray-600">Creating a tailored approach for your business</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Implementation</h4>
                        <p className="text-sm text-gray-600">Developing and deploying your solution</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Testing & Optimization</h4>
                        <p className="text-sm text-gray-600">Ensuring everything works perfectly</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-tech-400 text-white flex items-center justify-center font-bold mr-3">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium">Ongoing Support</h4>
                        <p className="text-sm text-gray-600">Maintaining and improving your solution</p>
                      </div>
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
                Let's discuss how our {subcategory.title.toLowerCase()} services can help your business grow.
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
      </main>
      
      <Footer />
    </div>
  );
};

export default SubCategoryDetail;
