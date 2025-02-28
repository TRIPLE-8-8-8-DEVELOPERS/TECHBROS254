
import { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const values = [
  "Client-Focused Approach",
  "Technical Excellence",
  "Innovative Solutions",
  "Transparent Communication",
  "Continuous Improvement",
  "Quality Assurance"
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
          contentObserver.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
              Who We Are
            </span>
            <h2 className="section-title mb-6">Leading Technology Solutions Provider</h2>
            <p className="text-gray-600 mb-6 text-pretty">
              TechBros is a leading technology solutions provider specializing in various domains of software development and digital transformation. Headquartered in New York, we help businesses transform, scale, and thrive in the digital landscape by leveraging cutting-edge technologies and innovative strategies.
            </p>
            <p className="text-gray-600 mb-8 text-pretty">
              With a team of highly skilled developers, designers, engineers, and strategists, we create tailor-made solutions that drive efficiency, enhance user experience, and foster business growth. Our approach is centered around collaboration, innovation, and technical excellence, ensuring that every project we undertake meets the highest standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`flex items-center transition-all duration-700 delay-[${index * 100}ms] ${
                    contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${100 + index * 100}ms` }}
                >
                  <CheckCircle size={18} className="text-tech-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className={`relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute w-full h-full bg-tech-900/5 z-10 rounded-2xl"></div>
            <div className="absolute -right-6 -bottom-6 w-4/5 h-4/5 border-2 border-tech-200 rounded-2xl"></div>
            <div className="absolute left-0 top-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format" 
                alt="Our team collaborating" 
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
