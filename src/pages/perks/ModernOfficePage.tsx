
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Building2, Coffee, Sofa, Wifi, Monitor, Utensils, Music, Palette, Plant } from "lucide-react";

const ModernOfficePage = () => {
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format')",
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
                <Building2 size={16} className="mr-2" />
                Perks & Benefits
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Modern Office</h1>
              <p className="text-xl text-gray-100 mb-8">
                Thoughtfully designed workspaces that inspire creativity, collaboration, and comfort
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
                  Our offices are more than just places to work—they're environments designed to foster creativity, productivity, and community. We've thoughtfully crafted each space to provide the perfect balance of functionality, comfort, and inspiration.
                </p>
                
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Monitor size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ergonomic Workstations</h3>
                    <p className="text-gray-600">
                      Every desk is equipped with adjustable chairs, standing desk options, ergonomic keyboards, and dual-monitor setups to ensure your comfort during the workday.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Sofa size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Relaxation Areas</h3>
                    <p className="text-gray-600">
                      Dedicated spaces for relaxation and recharging, including comfortable lounges, quiet rooms for focus work or meditation, and game areas for friendly competition.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Coffee size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Premium Refreshments</h3>
                    <p className="text-gray-600">
                      Fully stocked kitchens with complimentary snacks, beverages, and gourmet coffee stations to keep you fueled throughout the day.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Wifi size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
                    <p className="text-gray-600">
                      High-speed internet, state-of-the-art meeting rooms with video conferencing capabilities, and the latest collaborative technologies.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Plant size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Biophilic Design</h3>
                    <p className="text-gray-600">
                      Our spaces incorporate natural elements like plants, natural light, and outdoor views to create a more pleasant work environment that boosts wellbeing and productivity.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-12 mb-6">Thoughtfully Designed Spaces</h2>
                
                <p>
                  Our office layout is carefully considered to support different work styles and activities:
                </p>
                
                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Palette size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Collaboration Zones</h3>
                      <p className="text-gray-600">
                        Open areas designed for teamwork, brainstorming, and informal meetings with writable walls, flexible furniture, and digital tools for collaborative work.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Music size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Focus Pods</h3>
                      <p className="text-gray-600">
                        Quiet, private spaces for concentrated work or phone calls when you need to minimize distractions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Utensils size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Community Spaces</h3>
                      <p className="text-gray-600">
                        Welcoming cafeterias and gathering areas that host company events, team celebrations, and informal socializing.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-tech-50 p-8 rounded-xl my-12">
                  <h3 className="text-xl font-semibold mb-4">Location Advantages</h3>
                  <p>
                    Our offices are strategically located in vibrant neighborhoods with easy access to public transportation, restaurants, fitness centers, and other amenities. We choose locations that make your commute easier and offer plenty of options for lunch breaks, after-work activities, or errands.
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

export default ModernOfficePage;
