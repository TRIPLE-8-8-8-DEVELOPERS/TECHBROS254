
import { ServiceDetail } from './types';
import developmentServices from './development';
import { infrastructureServices } from './infrastructure';
import { consultingServices } from './consulting';
import ecommerceServices from './ecommerce';
import { aiDataServices } from './ai-data';
import { securityServices } from './security';
import { marketingServices } from './marketing';
import { designServices } from './design';
import { healthcareServices } from './healthcare';
import { educationServices } from './education';

// Update image URLs for services with broken images
developmentServices.forEach(service => {
  if (service.title === "Custom Software Development") {
    service.image = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80";
    
    // Update subcategory images if they exist
    service.subcategories?.forEach(subcat => {
      if (!subcat.image || subcat.image.includes('unsplash') === false) {
        subcat.image = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80";
      }
    });
  }
});

ecommerceServices.forEach(service => {
  if (service.title === "Payment Processing") {
    service.image = "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80";
    
    // Update subcategory images
    service.subcategories?.forEach(subcat => {
      if (!subcat.image || subcat.image.includes('unsplash') === false) {
        subcat.image = "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80";
      }
    });
  }
});

securityServices.forEach(service => {
  if (service.title === "Cybersecurity") {
    service.image = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80";
    
    // Update subcategory images
    service.subcategories?.forEach(subcat => {
      if (!subcat.image || subcat.image.includes('unsplash') === false) {
        subcat.image = "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80";
      }
    });
  }
});

// Combine all service categories
export const serviceDetails: ServiceDetail[] = [
  ...developmentServices,
  ...infrastructureServices,
  ...consultingServices,
  ...ecommerceServices,
  ...aiDataServices,
  ...securityServices,
  ...marketingServices,
  ...designServices,
  ...healthcareServices,
  ...educationServices
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
