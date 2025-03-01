
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Coffee, Utensils, Apple, Beef, Cake, Pizza, Wine } from "lucide-react";

const FoodRefreshmentsPage = () => {
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1464500650248-1a4b57a59c1e?w=1200&auto=format')",
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
                <Coffee size={16} className="mr-2" />
                Employee Perk
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Food & Refreshments</h1>
              <p className="text-xl text-gray-100 mb-8">
                Enjoy complimentary meals, snacks, and beverages that keep you energized and focused throughout your day.
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
              <h2 className="text-3xl font-bold mb-6">Fuel Your Workday</h2>
              <p className="text-lg text-gray-700 mb-8">
                At TechBros, we believe that good food fuels great work. Our comprehensive food program is designed 
                to provide delicious, nutritious options that keep you energized and save you time and money.
              </p>
              
              <div className="bg-tech-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-tech-700">Our Food Philosophy</h3>
                <p className="text-gray-700 mb-4">
                  We work with top local chefs and food suppliers to create a rotating menu of fresh, 
                  sustainable options that cater to all dietary preferences and restrictions. Our goal is to 
                  create moments of connection around food while providing the nutrition you need to perform at your best.
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
                    <Utensils size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Daily Meals</h3>
                  <p className="text-gray-600">
                    Enjoy free breakfast, lunch, and dinner prepared by our in-house culinary team, with rotating menus featuring global cuisines.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Apple size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Healthy Snacks</h3>
                  <p className="text-gray-600">
                    Access fully stocked pantries with a variety of snacks, from fresh fruit to nuts, yogurt, and energy bars.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Coffee size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Beverages</h3>
                  <p className="text-gray-600">
                    Premium coffee, specialty teas, cold brew on tap, kombucha, and a variety of juices and sparkling waters.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Pizza size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Special Events</h3>
                  <p className="text-gray-600">
                    Food trucks, theme days, cooking classes, and special catering for team celebrations and milestones.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Wine size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Friday Happy Hours</h3>
                  <p className="text-gray-600">
                    Weekly social gatherings featuring craft beers, wines, and non-alcoholic options along with appetizers and treats.
                  </p>
                </div>
              </div>
              
              <div className="bg-tech-50 p-8 rounded-xl border border-tech-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Dietary Accommodations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Vegetarian, vegan, gluten-free, and dairy-free options available at every meal
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Allergy-friendly food preparation and clear labeling
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Religious dietary requirements accommodated
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Nutritional information available for all meals
                  </li>
                </ul>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format" 
                  alt="Modern office cafeteria" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Employee Spotlight</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format" 
                    alt="Employee portrait" 
                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "The food program at TechBros has completely changed my workday. I save so much time not having to prepare lunches or go out for coffee, and I've tried so many new foods. The Friday happy hours are a great way to connect with colleagues across teams."
                    </blockquote>
                    <div className="font-medium">
                      <p className="text-tech-600">Alex Thompson</p>
                      <p className="text-gray-500">UX Designer</p>
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
                  to="/perks/modern-office" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Beef size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Modern Office</h3>
                  <p className="text-gray-600">
                    State-of-the-art workspaces with all the amenities.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/team-events" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Cake size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Team Events</h3>
                  <p className="text-gray-600">
                    Regular team-building and company celebrations.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/health-wellness" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Apple size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Health & Wellness</h3>
                  <p className="text-gray-600">
                    Comprehensive health benefits and wellness programs.
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

export default FoodRefreshmentsPage;
