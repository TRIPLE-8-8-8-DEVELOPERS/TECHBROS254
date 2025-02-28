
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does TechBros offer?",
    answer: "TechBros offers a comprehensive range of technology solutions including custom software development, web and mobile application development, cloud solutions, IT consulting, e-commerce platforms, AI/machine learning implementations, cybersecurity services, and digital marketing strategies."
  },
  {
    question: "How do you approach new projects?",
    answer: "We follow a collaborative, client-centered approach for all projects. We begin with in-depth consultations to understand your business goals, then proceed through discovery, planning, design, development, testing, and deployment phases. Throughout the process, we maintain clear communication and involve clients in key decisions."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across diverse sectors including finance, healthcare, retail/e-commerce, logistics, education, manufacturing, and professional services. Our team brings industry-specific knowledge to each project, ensuring solutions that address the unique challenges of your business domain."
  },
  {
    question: "How do you handle project timelines and budgets?",
    answer: "We establish clear timelines and budgets during the initial planning phase. Our project management approach includes regular updates, transparent reporting, and proactive issue resolution. We use agile methodologies to adapt to changing requirements while keeping projects on track and within budget."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of technologies including React, Angular, Vue.js, Node.js, Python, Java, .NET, PHP, mobile frameworks like React Native and Flutter, cloud platforms (AWS, Azure, Google Cloud), database systems, AI/ML frameworks, and more. We select the best technology stack for each project based on your specific requirements."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer flexible maintenance and support options for all our solutions. These include regular updates, performance monitoring, security patches, feature enhancements, and technical support. We can tailor a support package to meet your specific needs and budget."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our services, process, and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-b border-gray-200 transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <button
                className="flex justify-between items-center w-full py-5 px-2 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <div className={`ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-5 w-5 text-tech-500" />
                </div>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 px-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
