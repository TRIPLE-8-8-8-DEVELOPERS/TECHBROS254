
import { useState, useEffect, useRef } from "react";
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format",
    title: "Financial App Redesign",
    category: "Mobile App"
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format",
    title: "E-commerce Platform",
    category: "Web Development"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format",
    title: "Healthcare Management System",
    category: "Software Development"
  },
  {
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format",
    title: "Real-time Analytics Dashboard",
    category: "Data Visualization"
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format",
    title: "Supply Chain Management",
    category: "Enterprise Solution"
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format",
    title: "Secure Banking Portal",
    category: "Cybersecurity"
  }
];

const Portfolio = () => {
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
    <section id="portfolio" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-triple-600 uppercase tracking-wider mb-2 inline-block">
            Our Work
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-600 mt-4 text-pretty">
            Explore our portfolio of successful projects across various industries, demonstrating our expertise and the measurable impact we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <CaseStudyCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              index={index}
            />
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <a 
            href="#contact"
            className="inline-flex items-center text-triple-800 font-medium hover:text-triple-900 transition-all duration-300 text-underline"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.getBoundingClientRect().top + window.pageYOffset - 100,
                  behavior: "smooth",
                });
              }
            }}
          >
            Want to see more projects? Let's work together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
