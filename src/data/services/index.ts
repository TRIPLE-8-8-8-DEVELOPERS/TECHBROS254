
import { ServiceDetail } from './types';
import developmentServices from './development';
import { infrastructureServices } from './infrastructure';
import { consultingServices } from './consulting';
import ecommerceServices from './ecommerce';
import { aiDataServices } from './ai-data';
import { securityServices } from './security';
import { marketingServices } from './marketing';

// Combine all service categories
export const serviceDetails: ServiceDetail[] = [
  ...developmentServices,
  ...infrastructureServices,
  ...consultingServices,
  ...ecommerceServices,
  ...aiDataServices,
  ...securityServices,
  ...marketingServices
];

// Create serviceItems array from serviceDetails for easier consumption
export const serviceItems = serviceDetails.map(service => ({
  id: service.id,
  icon: service.icon,
  title: service.title,
  description: service.shortDescription,
  slug: service.slug,
  category: service.category
}));
