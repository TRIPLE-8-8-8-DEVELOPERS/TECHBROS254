
import { useState, useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import { serviceItems } from "../data/services";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  // Service images
  const serviceImages = {
    "custom-software-development": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&w=600&q=80",
    "web-development": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&w=600&q=80",
    "mobile-app-development": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&w=600&q=80",
    "cloud-solutions": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&w=600&q=80",
    "it-consulting": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&w=600&q=80",
    "e-commerce-solutions": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&w=600&q=80",
    "ai-machine-learning": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&w=600&q=80",
    "cybersecurity": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&w=600&q=80",
    "digital-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=600&q=80"
  };

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-tech-600 uppercase tracking-wider mb-2 inline-block">
            Our Expertise
          </span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="text-gray-600 mt-4 text-pretty">
            We provide a comprehensive suite of services that cater to businesses of all sizes, from startups to enterprises, combining technical expertise with strategic insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              slug={service.slug}
              index={index}
              image={serviceImages[service.slug as keyof typeof serviceImages]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
