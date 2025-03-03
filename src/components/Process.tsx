
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Search, PenTool, Code, TestTube, Rocket, Wrench, ScrollText } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business needs, goals, and challenges through in-depth consultations and research.",
    icon: <Search className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-600"
  },
  {
    number: "02",
    title: "Planning",
    description: "We create a detailed roadmap with timelines, deliverables, and resource allocation to guide the project implementation.",
    icon: <ScrollText className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-600"
  },
  {
    number: "03",
    title: "Design",
    description: "Our design team creates intuitive, user-focused interfaces and experiences that align with your brand and business objectives.",
    icon: <PenTool className="w-6 h-6" />,
    color: "from-pink-500 to-rose-600"
  },
  {
    number: "04",
    title: "Development",
    description: "Our engineers build your solution using agile methodologies, ensuring quality code and frequent iterations.",
    icon: <Code className="w-6 h-6" />,
    color: "from-vibrant-purple to-violet-600"
  },
  {
    number: "05",
    title: "Testing",
    description: "We rigorously test all aspects of your solution to ensure functionality, performance, security, and usability.",
    icon: <TestTube className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600"
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your solution to production, ensuring a smooth transition and minimal disruption to your operations.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-teal-500 to-emerald-600"
  },
  {
    number: "07",
    title: "Support",
    description: "Our team provides ongoing maintenance, updates, and support to keep your solution running smoothly.",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-slate-500 to-gray-600"
  }
];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="process" ref={sectionRef} className="py-20 bg-white dark:bg-dark-100 w-full relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-tech-100 dark:bg-tech-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 dark:bg-vibrant-purple/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-2 bg-vibrant-purple/10 dark:bg-vibrant-purple/20 border border-vibrant-purple/20 rounded-full text-sm font-medium text-vibrant-purple">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Our Development Process</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We follow a structured, collaborative approach to ensure successful project delivery and exceptional results.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Modern process timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } group`}
              >
                <div className="bg-white dark:bg-dark-300 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 h-full flex flex-col relative overflow-hidden hover-card-effect hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-l opacity-10 rounded-bl-full"></div>
                  
                  {/* Process number */}
                  <span className="text-6xl font-bold text-gray-100 dark:text-gray-800 absolute -top-2 -right-2 font-display opacity-60">
                    {step.number}
                  </span>
                  
                  {/* Icon container */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-r ${step.color} text-white`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-vibrant-purple dark:group-hover:text-vibrant-purple transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>
                  
                  {/* Connection indicator */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex items-center absolute -right-3 top-1/2 transform -translate-y-1/2 text-vibrant-purple/50">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile-friendly connection dots */}
          <div className="flex justify-center mt-8 md:hidden">
            {processSteps.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === 0 ? 'bg-vibrant-purple' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
