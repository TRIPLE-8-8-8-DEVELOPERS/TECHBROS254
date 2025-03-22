
import { Link } from "react-router-dom";
import { SubCategory } from "../data/services/types";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface SubCategoryListProps {
  serviceSlug: string;
  subcategories: SubCategory[];
}

const SubCategoryList = ({ serviceSlug, subcategories }: SubCategoryListProps) => {
  if (!subcategories || subcategories.length === 0) return null;
  
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-dark-200">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-5 py-2 bg-vibrant-purple/10 dark:bg-vibrant-purple/20 rounded-full">
            <span className="text-sm font-medium text-vibrant-purple dark:text-vibrant-purple/90 uppercase tracking-wide">
              Specialized Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Specialized Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our range of specialized services designed to meet your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {subcategories.map((subcategory) => {
            const Icon = subcategory.icon;
            
            return (
              <Card 
                key={subcategory.id}
                className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-vibrant-purple/5 to-vibrant-pink/5 dark:from-vibrant-purple/10 dark:to-vibrant-pink/10 transform group-hover:scale-105 transition-transform duration-700 rounded-xl"></div>
                
                {subcategory.image && (
                  <div className="relative h-56 md:h-64 overflow-hidden rounded-t-xl">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
                        {subcategory.title}
                      </h3>
                    </div>
                  </div>
                )}
                
                <CardContent className="p-6 md:p-8 flex-grow flex flex-col bg-white dark:bg-dark-300 rounded-b-xl relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    {Icon && (
                      <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                        <Icon size={28} />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-grow">
                    {subcategory.description}
                  </p>
                  
                  <Link 
                    to={`/services/${serviceSlug}/${subcategory.slug}`}
                    className="inline-flex items-center text-vibrant-purple dark:text-vibrant-purple/90 font-medium mt-auto group-hover:text-vibrant-pink transition-colors py-2"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubCategoryList;
