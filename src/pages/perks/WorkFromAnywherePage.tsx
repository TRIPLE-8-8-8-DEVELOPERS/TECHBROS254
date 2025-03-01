
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Laptop, Globe, Wifi, MapPin, Clock, Calendar, Briefcase } from "lucide-react";

const WorkFromAnywherePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

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

    const featuresObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFeaturesVisible(true);
        featuresObserver.disconnect();
      }
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (featuresRef.current) featuresObserver.observe(featuresRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (featuresRef.current) featuresObserver.unobserve(featuresRef.current);
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&auto=format')",
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
              <Link to="/perks" className="inline-flex items-center text-white mb-6 hover:text-tech-200 transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                Back to All Perks
              </Link>
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-tech-200/80 text-white font-medium text-sm backdrop-blur-sm">
                <Laptop size={16} className="mr-2" />
                Employee Perk
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Work From Anywhere</h1>
              <p className="text-xl text-gray-100 mb-8">
                Enjoy the freedom to work from international locations for up to 4 weeks per year, expanding your horizons while staying connected.
              </p>
            </div>
          </div>
        </section>
        
        <section 
          ref={featuresRef}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Work Across the Globe</h2>
              <p className="text-lg text-gray-700 mb-8">
                At TechBros, we believe that experiencing new cultures and environments can spark creativity and innovation. 
                Our work from anywhere program gives you the flexibility to explore the world without putting your career on hold.
              </p>
              
              <div className="bg-tech-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-tech-700">How It Works</h3>
                <p className="text-gray-700 mb-4">
                  Eligible employees can work from international locations for up to 4 weeks per year. 
                  Whether you want to explore new cities, visit family abroad, or simply change your scenery, 
                  we support your journey while you continue to contribute to our team's success.
                </p>
              </div>
            </div>
            
            <div 
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Global Flexibility</h3>
                  <p className="text-gray-600">
                    Work from almost any country in the world, subject to visa requirements and local regulations.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Wifi size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Connectivity Support</h3>
                  <p className="text-gray-600">
                    Receive a stipend for coworking spaces or connectivity needs while working remotely.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Destination Resources</h3>
                  <p className="text-gray-600">
                    Access our database of recommended destinations, accommodations, and workspaces from previous employees.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Flexible Hours</h3>
                  <p className="text-gray-600">
                    Adjust your working hours to maintain some overlap with your team while accommodating different time zones.
                  </p>
                </div>
              </div>
              
              <div className="bg-tech-50 p-8 rounded-xl border border-tech-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Eligibility Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    At least 6 months of employment with TechBros
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Good standing performance reviews
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Role must be compatible with remote work
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Request submitted at least 4 weeks in advance
                  </li>
                </ul>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1200&auto=format" 
                  alt="Person working on laptop at beach" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Employee Spotlight</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format" 
                    alt="Employee portrait" 
                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "The work from anywhere program allowed me to spend a month in Portugal, where I reconnected with family while still being productive. It was the perfect blend of work and personal fulfillment."
                    </blockquote>
                    <div className="font-medium">
                      <p className="text-tech-600">Michael Rodriguez</p>
                      <p className="text-gray-500">Senior Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Explore Other Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  to="/perks/flexible-work" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Clock size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Flexible Work</h3>
                  <p className="text-gray-600">
                    Flexible hours, remote options, and generous time off.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/vacation-time" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Calendar size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Vacation Time</h3>
                  <p className="text-gray-600">
                    Unlimited PTO, paid holidays, and sabbaticals.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/modern-office" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Briefcase size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Modern Office</h3>
                  <p className="text-gray-600">
                    State-of-the-art workspaces with all the amenities.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WorkFromAnywherePage;
