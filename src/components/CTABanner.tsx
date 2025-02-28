
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
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

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <section 
      ref={bannerRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-tech z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full">
        <svg viewBox="0 0 1440 578" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 h-full opacity-20">
          <path d="M1171.05 577.497C1309.41 575.107 1440 451.991 1440 451.991V0H-205V451.991C-205 451.991 86.2313 462.565 262.453 407.52C438.675 352.476 578.599 330.88 706.119 361.293C833.638 391.706 1032.7 579.887 1171.05 577.497Z" fill="white"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-display">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-4 bg-white text-tech-600 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg font-medium inline-flex items-center justify-center"
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
              Schedule a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg font-medium inline-flex items-center justify-center"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
