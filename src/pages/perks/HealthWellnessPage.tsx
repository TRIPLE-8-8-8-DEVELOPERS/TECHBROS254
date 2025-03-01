
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Heart, Activity, Brain, Leaf, Smile, Users, Utensils, Dumbbell } from "lucide-react";

const HealthWellnessPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeroVisible(true);
        heroObserver.disconnect();
      }
    }, observerOptions);

    const contentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setContentVisible(true);
        contentObserver.disconnect();
      }
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section 
          ref={heroRef}
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 relative">
            <div 
              className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Link to="/perks" className="inline-flex items-center text-white mb-4 hover:underline">
                <ArrowLeft size={16} className="mr-2" />
                Back to All Perks
              </Link>
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-tech-200/80 text-white font-medium text-sm backdrop-blur-sm">
                <Heart size={16} className="mr-2" />
                Perks & Benefits
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Health & Wellness</h1>
              <p className="text-xl text-gray-100 mb-8">
                Your health is our priority – comprehensive programs to support your physical and mental wellbeing
              </p>
            </div>
          </div>
        </section>
        
        <section 
          ref={contentRef}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-700 mb-8">
                  At TechBros, we take a holistic approach to health and wellness, recognizing that your wellbeing extends beyond just physical health. Our comprehensive health and wellness benefits are designed to support you in every aspect of your life.
                </p>
                
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Activity size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Health Insurance</h3>
                    <p className="text-gray-600">
                      We offer premium medical, dental, and vision insurance with generous employer contributions, ensuring you and your family have access to quality healthcare without financial stress.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Brain size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Mental Health Support</h3>
                    <p className="text-gray-600">
                      Access to mental health resources including therapy sessions, counseling services, and stress management programs through our employee assistance program.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Dumbbell size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Fitness Benefits</h3>
                    <p className="text-gray-600">
                      Gym membership reimbursements, virtual fitness classes, and wellness challenges to keep you active and motivated throughout the year.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Leaf size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Wellness Programs</h3>
                    <p className="text-gray-600">
                      Regular wellness initiatives including health screenings, nutrition guidance, meditation sessions, and educational workshops.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Smile size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                    <p className="text-gray-600">
                      We promote a culture that respects personal time, offers flexible working arrangements, and encourages taking time off when needed to prevent burnout and maintain overall wellbeing.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-12 mb-6">Dedicated Wellness Initiatives</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Users size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Wellness Ambassadors</h3>
                      <p className="text-gray-600">
                        Our team of wellness ambassadors organize regular events, challenges, and programs to promote health and wellness across the company.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Utensils size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Healthy Food Options</h3>
                      <p className="text-gray-600">
                        Nutritious snacks and meals available in our offices, catering to various dietary preferences and restrictions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Heart size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Annual Health Check-ups</h3>
                      <p className="text-gray-600">
                        We encourage preventive care with annual health check-ups covered by our insurance plans.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-tech-50 p-8 rounded-xl my-12">
                  <h3 className="text-xl font-semibold mb-4">A Culture of Wellbeing</h3>
                  <p>
                    At TechBros, we recognize that a healthy workforce is a happy and productive one. We continually evolve our health and wellness offerings based on employee feedback and the latest research to ensure we're providing the support you need to thrive both personally and professionally.
                  </p>
                </div>
                
                <div className="mt-12 text-center">
                  <Link 
                    to="/careers" 
                    className="inline-flex items-center px-6 py-3 bg-tech-400 text-white rounded-lg hover:bg-tech-500 transition-all duration-300 font-medium"
                  >
                    View Open Positions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthWellnessPage;
