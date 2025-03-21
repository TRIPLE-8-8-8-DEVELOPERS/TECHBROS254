
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
  BarChart3,
  ArrowRight,
  TrendingUp,
  Bitcoin,
  Paintbrush,
  Stethoscope,
  GraduationCap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  
  // Extract all unique categories
  const categories = Array.from(new Set(serviceDetails.map(item => item.category)));
  
  // Map of category to icon
  const categoryIcons = {
    "Development": <Code className="w-10 h-10" />,
    "Infrastructure": <Cloud className="w-10 h-10" />,
    "Consulting": <LineChart className="w-10 h-10" />,
    "E-commerce": <ShoppingCart className="w-10 h-10" />,
    "AI & Data": <BrainCircuit className="w-10 h-10" />,
    "Security": <ShieldCheck className="w-10 h-10" />,
    "Marketing": <BarChart3 className="w-10 h-10" />,
    "Design": <Paintbrush className="w-10 h-10" />,
    "Healthcare": <Stethoscope className="w-10 h-10" />,
    "Education": <GraduationCap className="w-10 h-10" />,
    "Forex Trading": <TrendingUp className="w-10 h-10" />,
    "Cryptocurrency": <Bitcoin className="w-10 h-10" />
  };

  // Map category to URL segment
  const categoryUrls = {
    "Development": "development",
    "Infrastructure": "infrastructure",
    "Consulting": "consulting",
    "E-commerce": "ecommerce",
    "AI & Data": "ai-data",
    "Security": "security",
    "Marketing": "marketing",
    "Design": "design",
    "Healthcare": "healthcare",
    "Education": "education",
    "Forex Trading": "forex",
    "Cryptocurrency": "crypto"
  };

  // Count services by category
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = serviceDetails.filter(service => service.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  // Category background gradients
  const categoryGradients = {
    "Development": "from-vibrant-purple/10 to-vibrant-purple/5",
    "Infrastructure": "from-vibrant-blue/10 to-vibrant-blue/5",
    "Consulting": "from-teal-100/80 to-teal-50/50",
    "E-commerce": "from-orange-100/80 to-orange-50/50",
    "AI & Data": "from-indigo-100/80 to-indigo-50/50",
    "Security": "from-red-100/80 to-red-50/50",
    "Marketing": "from-vibrant-pink/10 to-vibrant-pink/5",
    "Design": "from-emerald-100/80 to-emerald-50/50",
    "Healthcare": "from-sky-100/80 to-sky-50/50",
    "Education": "from-amber-100/80 to-amber-50/50",
    "Forex Trading": "from-vibrant-blue/10 to-vibrant-blue/5",
    "Cryptocurrency": "from-orange-100/80 to-orange-50/50"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-tech-50 to-white dark:from-dark-200 dark:to-dark-100">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute top-20 right-10 w-64 h-64 bg-vibrant-purple/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-vibrant-blue/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-vibrant-pink/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-4 py-1.5 bg-vibrant-purple/10 dark:bg-vibrant-purple/20 border border-vibrant-purple/20 dark:border-vibrant-purple/30 rounded-full">
                <span className="text-sm font-medium text-vibrant-purple dark:text-vibrant-purple/90 uppercase tracking-wider font-accent">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white">Innovative Solutions for Modern Businesses</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover our comprehensive range of tech services designed to help your business grow and succeed in the digital world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Browse by Category</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Explore our service categories to find the perfect solution for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  to={`/services/${categoryUrls[category as keyof typeof categoryUrls]}`}
                  className="bg-white dark:bg-dark-300 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full"
                >
                  <div className="p-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${categoryGradients[category as keyof typeof categoryGradients] || 'from-tech-50 to-white'} rounded-2xl flex items-center justify-center mb-6 text-tech-500 dark:text-tech-300 group-hover:scale-110 transition-transform duration-300`}>
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{category}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {categoryCount[category]} services available
                    </p>
                    
                    <div className="mb-6 flex flex-wrap gap-2">
                      {serviceDetails
                        .filter(service => service.category === category)
                        .slice(0, 3)
                        .map((service, idx) => (
                          <Badge key={idx} variant="outline" className="bg-tech-50 dark:bg-dark-200 text-tech-600 dark:text-tech-300 py-1.5">
                            {service.title}
                          </Badge>
                        ))}
                      {categoryCount[category] > 3 && (
                        <Badge variant="outline" className="bg-gray-100 dark:bg-dark-400 text-gray-700 dark:text-gray-300 py-1.5">
                          +{categoryCount[category] - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center text-vibrant-purple dark:text-vibrant-purple/90 font-medium group-hover:text-vibrant-purple/80 dark:group-hover:text-vibrant-purple/70 transition-colors">
                      View all services <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
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
