
import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceDetails } from "../data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { 
  Code, 
  Globe, 
  Smartphone, 
  Cloud, 
  LineChart, 
  ShoppingCart, 
  BrainCircuit, 
  ShieldCheck, 
  BarChart3 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  
  // Extract all unique categories
  const categories = Array.from(new Set(serviceDetails.map(item => item.category)));
  
  // Map of category to icon
  const categoryIcons = {
    "Development": <Code className="w-8 h-8" />,
    "Infrastructure": <Cloud className="w-8 h-8" />,
    "Consulting": <LineChart className="w-8 h-8" />,
    "E-commerce": <ShoppingCart className="w-8 h-8" />,
    "AI & Data": <BrainCircuit className="w-8 h-8" />,
    "Security": <ShieldCheck className="w-8 h-8" />,
    "Marketing": <BarChart3 className="w-8 h-8" />
  };

  // Map category to URL segment
  const categoryUrls = {
    "Development": "development",
    "Infrastructure": "infrastructure",
    "Consulting": "consulting",
    "E-commerce": "ecommerce",
    "AI & Data": "ai-data",
    "Security": "security",
    "Marketing": "marketing"
  };

  // Count services by category
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = serviceDetails.filter(service => service.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-tech-50">
          <div className="container mx-auto px-4">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover our comprehensive range of tech services designed to help your business grow and succeed in the digital world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
              <p className="text-lg text-gray-600">
                Explore our service categories to find the perfect solution for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  to={`/services/${categoryUrls[category as keyof typeof categoryUrls]}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-tech-50 rounded-2xl flex items-center justify-center mb-6 text-tech-500">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{category}</h3>
                    <p className="text-gray-600 mb-4">
                      {categoryCount[category]} services available
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {serviceDetails
                        .filter(service => service.category === category)
                        .slice(0, 3)
                        .map((service, idx) => (
                          <Badge key={idx} variant="outline" className="bg-tech-50 text-tech-600">
                            {service.title}
                          </Badge>
                        ))}
                      {categoryCount[category] > 3 && (
                        <Badge variant="outline" className="bg-gray-100 text-gray-700">
                          +{categoryCount[category] - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
