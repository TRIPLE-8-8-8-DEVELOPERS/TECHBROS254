
import { useState } from "react";
import { 
  Code, 
  Cpu, 
  LineChart, 
  Lock, 
  PenTool, 
  Rocket, 
  ServerIcon, 
  Users
} from "lucide-react";

const featureItems = [
  {
    title: "Custom Software Development",
    description: "Build tailored software solutions designed specifically for your business needs.",
    icon: Code,
    color: "from-vibrant-purple to-indigo-500"
  },
  {
    title: "Cloud Infrastructure",
    description: "Leverage the power of the cloud with our managed infrastructure solutions.",
    icon: ServerIcon,
    color: "from-vibrant-blue to-cyan-500"
  },
  {
    title: "AI & Machine Learning",
    description: "Transform your business with intelligent systems that learn and improve over time.",
    icon: Cpu,
    color: "from-vibrant-purple to-purple-600"
  },
  {
    title: "Data Analytics",
    description: "Gain actionable insights from your data with our advanced analytics solutions.",
    icon: LineChart,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Cybersecurity",
    description: "Keep your digital assets protected with our enterprise-grade security solutions.",
    icon: Lock,
    color: "from-red-500 to-vibrant-pink"
  },
  {
    title: "UX/UI Design",
    description: "Create beautiful, intuitive interfaces that users love and understand.",
    icon: PenTool,
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development process with automated pipelines and continuous integration.",
    icon: Rocket,
    color: "from-blue-600 to-vibrant-blue"
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance to help optimize your technology investments.",
    icon: Users,
    color: "from-purple-500 to-vibrant-purple"
  }
];

const FeaturesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-100 dark:to-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink bg-clip-text text-transparent">
              Comprehensive
            </span>{" "}
            Technology Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our wide range of services designed to help businesses transform, 
            scale, and thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="relative h-full group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${feature.color}`}
                style={{ filter: "blur(25px)", transform: "scale(0.9)" }}
              ></div>
              <div className="relative h-full flex flex-col bg-white dark:bg-dark-300 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-2 shadow-md hover:shadow-xl overflow-hidden z-10">
                <div className="flex items-center">
                  <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    <feature.icon size={20} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{feature.description}</p>
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${feature.color} mt-4 transform origin-left transition-all duration-300 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
