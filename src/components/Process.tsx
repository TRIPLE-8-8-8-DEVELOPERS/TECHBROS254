
import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business needs, goals, and challenges through in-depth consultations and research.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Planning",
    description: "We create a detailed roadmap with timelines, deliverables, and resource allocation to guide the project implementation.",
    icon: "📝"
  },
  {
    number: "03",
    title: "Design",
    description: "Our design team creates intuitive, user-focused interfaces and experiences that align with your brand and business objectives.",
    icon: "🎨"
  },
  {
    number: "04",
    title: "Development",
    description: "Our engineers build your solution using agile methodologies, ensuring quality code and frequent iterations.",
    icon: "💻"
  },
  {
    number: "05",
    title: "Testing",
    description: "We rigorously test all aspects of your solution to ensure functionality, performance, security, and usability.",
    icon: "🧪"
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your solution to production, ensuring a smooth transition and minimal disruption to your operations.",
    icon: "🚀"
  },
  {
    number: "07",
    title: "Support",
    description: "Our team provides ongoing maintenance, updates, and support to keep your solution running smoothly.",
    icon: "🛠️"
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
    <section ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-tech-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-600">
            We follow a structured, collaborative approach to ensure successful project delivery and exceptional results.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-tech-200 transform -translate-x-1/2 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`mb-12 last:mb-0 transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} mb-6 md:mb-0`}>
                  <span className="text-5xl font-bold text-tech-400/20 font-display">{step.number}</span>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="flex items-center justify-center bg-white w-16 h-16 rounded-full shadow-md border-4 border-white z-10 mb-6 md:mb-0 relative">
                  <span className="text-2xl">{step.icon}</span>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 text-right'}`}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
