
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Innovate Solutions",
    content: "TechBros transformed our digital presence completely. Their team took the time to understand our business needs and delivered a solution that exceeded our expectations. The new website has significantly increased our conversion rates.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chang",
    role: "Marketing Director",
    company: "Global Retail",
    content: "Working with TechBros has been a game-changer for our company. Their expertise in e-commerce development helped us increase our online sales by 200% in just three months. Their ongoing support is exceptional.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Founder",
    company: "EcoTech Startup",
    content: "As a startup, we needed a technology partner who could understand our vision and help us bring it to life. TechBros did exactly that, building an innovative platform that has helped us secure additional funding.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&w=150&h=150&q=80",
    rating: 4
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "CTO",
    company: "FinTech Innovations",
    content: "The custom software solution developed by TechBros has streamlined our operations and significantly reduced manual processes. Their team's technical expertise and attention to detail were impressive throughout the project.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "Jennifer Lee",
    role: "E-commerce Director",
    company: "Fashion Forward",
    content: "Our e-commerce platform needed a complete overhaul, and TechBros delivered brilliantly. The new site is faster, more secure, and has a much better UX. Our customers love it, and our sales have increased dramatically.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&w=150&h=150&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
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

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setIsAnimating(false);
      setDirection(null);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setIsAnimating(false);
      setDirection(null);
    }, 300);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-tech-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            We take pride in delivering exceptional results. Here's what some of our clients have to say about working with us.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto relative transition-all duration-700 delay-300 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="p-8 md:p-12 transition-transform duration-300"
              style={{
                transform: direction === 'left' 
                  ? 'translateX(100%)' 
                  : direction === 'right' 
                    ? 'translateX(-100%)' 
                    : 'translateX(0)'
              }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-tech-100">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-tech-500">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-tech-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} className="text-tech-500" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index > currentIndex) {
                      setDirection('right');
                    } else if (index < currentIndex) {
                      setDirection('left');
                    }
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setDirection(null);
                    }, 300);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-tech-400 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-tech-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} className="text-tech-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
