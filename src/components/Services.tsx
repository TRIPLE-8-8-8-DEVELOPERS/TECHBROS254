
import { useState, useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import { serviceItems } from "../data/services";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
