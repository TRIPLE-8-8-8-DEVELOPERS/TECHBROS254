
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
    <div className="mt-16 py-12 px-8 bg-gradient-to-r from-vibrant-purple/5 to-vibrant-pink/5 rounded-3xl">
      <h3 className="text-3xl font-bold mb-10 text-center">Specialized Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((subcategory) => {
          const Icon = subcategory.icon;
          
          return (
            <Link 
              key={subcategory.id}
              to={`/services/${serviceSlug}/${subcategory.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-vibrant-purple/30 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {Icon && (
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 text-vibrant-purple flex items-center justify-center mr-4 group-hover:bg-vibrant-purple group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                  )}
                  <h4 className="text-xl font-bold">{subcategory.title}</h4>
                </div>
                <p className="text-gray-600 mb-5 min-h-[80px]">{subcategory.description}</p>
                <div className="flex items-center text-vibrant-purple font-medium group-hover:text-vibrant-pink transition-colors">
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
