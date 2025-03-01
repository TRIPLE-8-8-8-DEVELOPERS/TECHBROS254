
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
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Specialized Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subcategories.map((subcategory) => {
          const Icon = subcategory.icon;
          
          return (
            <Link 
              key={subcategory.id}
              to={`/services/${serviceSlug}/${subcategory.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {Icon && (
                    <div className="w-10 h-10 rounded-lg bg-tech-50 text-tech-500 flex items-center justify-center mr-3 group-hover:bg-tech-100 transition-colors">
                      <Icon size={20} />
                    </div>
                  )}
                  <h4 className="text-lg font-bold">{subcategory.title}</h4>
                </div>
                <p className="text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center text-tech-500 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
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
