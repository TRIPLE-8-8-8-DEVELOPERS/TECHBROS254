
import { useState, useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import { Code, Globe, Smartphone, Cloud, LineChart, ShieldCheck, ShoppingCart, BrainCircuit, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Scalable, high-performance applications tailored to your business needs and goals."
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Professional, responsive, and high-converting websites and web applications."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native app solutions for seamless mobile experiences."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure cloud integration, migration, and optimization services for your business."
  },
  {
    icon: LineChart,
    title: "IT Consulting",
    description: "Strategic guidance for digital transformation and tech infrastructure optimization."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Custom online stores, marketplace integration, and payment solutions."
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Predictive analytics, automation, and intelligent business solutions."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Advanced security solutions to safeguard your business assets and data."
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "SEO, social media, PPC, and content marketing for business growth."
  }
];

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
          <span className="text-sm font-medium text-triple-600 uppercase tracking-wider mb-2 inline-block">
            Our Expertise
          </span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="text-gray-600 mt-4 text-pretty">
            We provide a comprehensive suite of services that cater to businesses of all sizes, from startups to enterprises, combining technical expertise with strategic insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
