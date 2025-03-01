
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, GraduationCap, BookOpen, Users, Lightbulb, Share2, Cpu, Trophy, BookMarked } from "lucide-react";

const LearningDevelopmentPage = () => {
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format')",
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
                <GraduationCap size={16} className="mr-2" />
                Perks & Benefits
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Learning & Development</h1>
              <p className="text-xl text-gray-100 mb-8">
                Invest in your future with our comprehensive learning and development programs
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
                  At TechBros, we're committed to helping you grow both personally and professionally. We believe that continuous learning is essential not just for career advancement, but for personal fulfillment and staying engaged with your work.
                </p>
                
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Learning Budget</h3>
                    <p className="text-gray-600">
                      Each employee receives an annual learning budget to spend on courses, books, workshops, or any other resources that contribute to your professional growth.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Trophy size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Conference Attendance</h3>
                    <p className="text-gray-600">
                      We sponsor attendance at industry conferences, covering tickets, travel, and accommodation expenses so you can network with peers and stay current with industry trends.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Users size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Mentorship Program</h3>
                    <p className="text-gray-600">
                      Our formal mentorship program connects you with senior team members who provide guidance, support, and career advice to help you reach your full potential.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <BookMarked size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Educational Subscriptions</h3>
                    <p className="text-gray-600">
                      Access to premium learning platforms like Udemy, Coursera, LinkedIn Learning, and other specialized resources for your field.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Internal Knowledge Sharing</h3>
                    <p className="text-gray-600">
                      Regular lunch-and-learns, workshops, and knowledge sharing sessions where team members teach each other new skills and share insights from different projects and roles.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-12 mb-6">Career Development Pathways</h2>
                
                <p>
                  We don't just provide learning opportunities—we help you chart a clear path for your career growth:
                </p>
                
                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Share2 size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Individual Development Plans</h3>
                      <p className="text-gray-600">
                        Work with your manager to create a personalized development plan that aligns with your career goals and our business needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Cpu size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Skill-Building Projects</h3>
                      <p className="text-gray-600">
                        Opportunities to work on special projects that stretch your abilities and help you develop new skills in a supportive environment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <GraduationCap size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Tuition Assistance</h3>
                      <p className="text-gray-600">
                        Financial support for degree programs, certifications, and other formal education that aligns with your role and career path.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-tech-50 p-8 rounded-xl my-12">
                  <h3 className="text-xl font-semibold mb-4">Learning Is Part of Our Culture</h3>
                  <p>
                    At TechBros, continuous learning isn't just a benefit—it's woven into our culture. We recognize and celebrate learning achievements, encourage knowledge sharing, and provide dedicated time for professional development. We believe that when our team members grow, our company grows, which is why learning and development will always be a cornerstone of our employee experience.
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

export default LearningDevelopmentPage;
