
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

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
    <section id="portfolio" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-tech-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-tech-600 uppercase tracking-wider mb-2 inline-block before-dash">
            Our Work
          </span>
          <h2 className="section-title">Featured <span className="title-highlight">Projects</span></h2>
          <p className="text-gray-600 mt-4 text-pretty">
            Explore our portfolio of successful projects across various industries, demonstrating our expertise and the measurable impact we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.mainImage}
              title={project.title}
              category={project.category}
              slug={project.slug}
              index={index}
            />
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <a 
            href="#contact"
            className="inline-flex items-center text-tech-800 font-medium hover:text-tech-900 transition-all duration-300 text-underline"
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
