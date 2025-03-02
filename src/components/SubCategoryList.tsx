
import { Link } from "react-router-dom";
import { SubCategory } from "../data/services/types";
import { ArrowRight, ExternalLink } from "lucide-react";

interface SubCategoryListProps {
  serviceSlug: string;
  subcategories: SubCategory[];
}

const SubCategoryList = ({ serviceSlug, subcategories }: SubCategoryListProps) => {
  if (!subcategories || subcategories.length === 0) return null;
  
  return (
    <div className="mt-12 md:mt-20 py-12 px-4 sm:px-8 md:px-12 bg-gradient-to-r from-vibrant-purple/5 to-vibrant-pink/5 rounded-3xl w-full">
      <h3 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center">Specialized Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {subcategories.map((subcategory) => {
          const Icon = subcategory.icon;
          
          return (
            <Link 
              key={subcategory.id}
              to={`/services/${serviceSlug}/${subcategory.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-vibrant-purple/30 transform hover:-translate-y-1 h-full"
            >
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center mb-5">
                  {Icon && (
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 text-vibrant-purple flex items-center justify-center mr-4 group-hover:bg-vibrant-purple group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                  )}
                  <h4 className="text-xl font-bold">{subcategory.title}</h4>
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
  );
};

export default SubCategoryList;
