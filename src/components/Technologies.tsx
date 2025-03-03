
import { useRef, useEffect, useState } from 'react';

interface TechCategory {
  name: string;
  items: string[];
}

const technologies: TechCategory[] = [
  {
    name: "Frontend",
    items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap"]
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "Java", ".NET", "PHP", "Ruby on Rails", "Express", "Django", "Spring Boot"]
  },
  {
    name: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"]
  },
  {
    name: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch", "Microsoft SQL Server", "Oracle"]
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform"]
  },
  {
    name: "AI & Data",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Power BI", "Tableau", "Apache Kafka", "Apache Spark"]
  }
];

const Technologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="technologies"
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-200 dark:to-dark-100 w-full"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-2 bg-vibrant-purple/10 dark:bg-vibrant-purple/20 border border-vibrant-purple/20 rounded-full text-sm font-medium text-vibrant-purple">
            Our Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Technologies We Work With</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We leverage the latest technologies to build powerful, scalable solutions for our clients.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className={`flex flex-wrap justify-center mb-8 border-b border-gray-200 dark:border-gray-700 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {technologies.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-3 font-medium text-sm transition-all focus:outline-none relative whitespace-nowrap ${
                  activeCategory === index 
                    ? 'text-vibrant-purple dark:text-vibrant-purple' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
                {activeCategory === index && (
                  <span className="absolute h-0.5 bg-vibrant-purple bottom-0 left-0 right-0 rounded-t-lg" />
                )}
              </button>
            ))}
          </div>

          <div 
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {technologies[activeCategory].items.map((tech, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-dark-300 p-5 rounded-lg text-center border border-gray-100 dark:border-gray-700 hover:border-vibrant-purple/20 dark:hover:border-vibrant-purple/40 transition-all duration-300 hover:shadow-md group"
              >
                <span className="text-gray-800 dark:text-white group-hover:text-vibrant-purple dark:group-hover:text-vibrant-purple/90 transition-colors duration-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
