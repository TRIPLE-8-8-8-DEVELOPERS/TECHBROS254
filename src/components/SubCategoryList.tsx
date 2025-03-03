
import { Link } from "react-router-dom";
import { SubCategory } from "../data/services/types";
import { ArrowRight } from "lucide-react";

interface SubCategoryListProps {
  serviceSlug: string;
  subcategories: SubCategory[];
}

const SubCategoryList = ({ serviceSlug, subcategories }: SubCategoryListProps) => {
  if (!subcategories || subcategories.length === 0) return null;
  
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-200 dark:to-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block">
            <span className="bg-white dark:bg-dark-300 px-6 py-2 rounded-lg shadow-sm">Specialized Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {subcategories.map((subcategory) => {
            const Icon = subcategory.icon;
            
            return (
              <Link 
                key={subcategory.id}
                to={`/services/${serviceSlug}/${subcategory.slug}`}
                className="group bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-border hover:border-vibrant-purple/30 dark:hover:border-vibrant-purple/50 transform hover:-translate-y-1 h-full flex flex-col"
              >
                {subcategory.image && (
                  <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-4 md:mb-5">
                    {Icon && (
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 dark:from-vibrant-purple/20 dark:to-vibrant-pink/20 text-vibrant-purple flex items-center justify-center mr-3 md:mr-4 group-hover:bg-vibrant-purple group-hover:text-white transition-colors duration-300">
                        <Icon size={22} className="md:text-2xl" />
                      </div>
                    )}
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 bg-white/90 dark:bg-dark-300/90 px-2 py-1 rounded">
                      {subcategory.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-5 flex-grow text-sm md:text-base">{subcategory.description}</p>
                  <div className="flex items-center text-vibrant-purple dark:text-vibrant-purple/90 font-medium group-hover:text-vibrant-pink transition-colors mt-auto text-sm md:text-base">
                    Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubCategoryList;
