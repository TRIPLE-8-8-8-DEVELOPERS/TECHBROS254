
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
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center relative inline-block">
          <span className="bg-white px-6 py-2 rounded-lg shadow-sm">Specialized Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {subcategories.map((subcategory) => {
            const Icon = subcategory.icon;
            
            return (
              <Link 
                key={subcategory.id}
                to={`/services/${serviceSlug}/${subcategory.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-vibrant-purple/30 transform hover:-translate-y-1 h-full flex flex-col"
              >
                {subcategory.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-5">
                    {Icon && (
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 text-vibrant-purple flex items-center justify-center mr-4 group-hover:bg-vibrant-purple group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-800 bg-white/90 px-2 py-1 rounded">
                      {subcategory.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-5 flex-grow">{subcategory.description}</p>
                  <div className="flex items-center text-vibrant-purple font-medium group-hover:text-vibrant-pink transition-colors mt-auto">
                    Learn more <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
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
