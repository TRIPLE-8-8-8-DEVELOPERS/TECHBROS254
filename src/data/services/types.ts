
import { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  icon: any; // LucideIcon
  shortDescription: string;
  description: string[];
  image: string;
  category: string;
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
