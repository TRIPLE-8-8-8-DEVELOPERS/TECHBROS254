
import { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  icon: any; // LucideIcon
  shortDescription: string;
  description: string[];
  image: string;
  category: string;
  subcategories?: SubCategory[];
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  processSteps?: {
    title: string;
    description: string;
  }[];
  technologies?: string[];
  showcaseImages?: string[];
  relatedServices?: string[];
}

export interface SubCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon?: any; // LucideIcon
  image?: string;
  features?: string[]; // Added features property
  benefits?: string[]; // Added benefits property
}
