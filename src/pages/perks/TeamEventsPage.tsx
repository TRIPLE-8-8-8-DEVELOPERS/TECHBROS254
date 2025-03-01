
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Coffee, Users, PartyPopper, Globe, CalendarDays, Cookie, Puzzle, Trophy, Palmtree } from "lucide-react";

const TeamEventsPage = () => {
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format')",
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
                <Coffee size={16} className="mr-2" />
                Perks & Benefits
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Team Events</h1>
              <p className="text-xl text-gray-100 mb-8">
                Build meaningful connections with colleagues through fun, engaging team activities
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
                  At TechBros, we know that strong relationships between team members lead to better collaboration, increased job satisfaction, and a more vibrant company culture. That's why we invest in a variety of team events and activities throughout the year.
                </p>
                
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Palmtree size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Company Retreats</h3>
                    <p className="text-gray-600">
                      Annual company-wide retreats to exciting destinations where we combine strategy sessions with team-building activities, relaxation, and adventure.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <PartyPopper size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Holiday Celebrations</h3>
                    <p className="text-gray-600">
                      Festive celebrations for major holidays, including our legendary end-of-year party, Halloween costume contests, and other seasonal gatherings.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Trophy size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Team Competitions</h3>
                    <p className="text-gray-600">
                      Friendly competitions ranging from hackathons and innovation challenges to sports tournaments and trivia nights that bring out our team's competitive spirit.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Users size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Department Outings</h3>
                    <p className="text-gray-600">
                      Regular team outings tailored to each department's interests, whether it's escape rooms, cooking classes, outdoor adventures, or creative workshops.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                    <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                      <Globe size={24} className="text-tech-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Virtual Global Events</h3>
                    <p className="text-gray-600">
                      Inclusive events designed for our distributed team members, ensuring everyone feels connected regardless of location, including virtual happy hours, online game sessions, and remote team-building activities.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-12 mb-6">Regular Team Activities</h2>
                
                <p>
                  Beyond our special events, we maintain connection through regular activities:
                </p>
                
                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CalendarDays size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Weekly Team Lunches</h3>
                      <p className="text-gray-600">
                        Catered team lunches every week where we can relax, socialize, and connect with colleagues across departments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Cookie size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Monthly Social Hours</h3>
                      <p className="text-gray-600">
                        Regular social hours with refreshments and activities that create space for casual conversation and relationship building.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Puzzle size={20} className="text-tech-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Interest Groups</h3>
                      <p className="text-gray-600">
                        Company-supported clubs and interest groups for everything from book clubs and board games to running teams and volunteer organizations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-tech-50 p-8 rounded-xl my-12">
                  <h3 className="text-xl font-semibold mb-4">Building Lasting Connections</h3>
                  <p>
                    Our team events are more than just fun activities—they're strategic investments in our company culture and team cohesion. We've seen how these shared experiences create stronger bonds between team members, improve cross-departmental collaboration, and make TechBros a place where people genuinely enjoy working together. Whether you're an introvert or extrovert, we offer a variety of ways to connect that respect different comfort levels and preferences.
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

export default TeamEventsPage;
