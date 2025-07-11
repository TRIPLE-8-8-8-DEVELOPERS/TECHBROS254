import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollProgress from "../../components/ScrollProgress";
import { ArrowLeft, Baby, Heart, Clock, Calendar, DollarSign, User, Home } from "lucide-react";

const ParentalBenefitsPage = () => {
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1492138639207-8b687bc19eb8?w=1200&auto=format')",
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
                <Baby size={16} className="mr-2" />
                Employee Perk
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Parental Benefits</h1>
              <p className="text-xl text-gray-100 mb-8">
                Comprehensive support for all parents, helping you balance your career and your growing family.
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
              <h2 className="text-3xl font-bold mb-6">Supporting Growing Families</h2>
              <p className="text-lg text-gray-700 mb-8">
                At TechBros, we believe that starting or growing your family shouldn't mean putting your career on hold. 
                Our parental benefits are designed to support all parents through their journey, from fertility treatments 
                to adoption to post-birth support.
              </p>
              
              <div className="bg-tech-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-tech-700">Our Commitment</h3>
                <p className="text-gray-700 mb-4">
                  We're committed to creating a workplace where parents can thrive professionally while being present for 
                  life's most important moments. Our policies are designed to be inclusive of all paths to parenthood and 
                  family structures.
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
                    <Calendar size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Generous Parental Leave</h3>
                  <p className="text-gray-600">
                    16 weeks of paid leave for all new parents, regardless of how you became a parent – birth, adoption, or surrogacy.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fertility Benefits</h3>
                  <p className="text-gray-600">
                    Coverage for fertility treatments, egg freezing, and other family planning services up to $25,000 lifetime maximum.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Adoption Assistance</h3>
                  <p className="text-gray-600">
                    Financial support for adoption-related expenses up to $15,000 per adoption.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Gradual Return</h3>
                  <p className="text-gray-600">
                    Option to return to work gradually with reduced hours for up to 8 weeks after parental leave.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 md:col-span-2">
                  <div className="w-12 h-12 bg-tech-100 rounded-lg flex items-center justify-center mb-4">
                    <Home size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Family-Friendly Workplace</h3>
                  <p className="text-gray-600">
                    Lactation rooms in all offices, backup childcare services, flexible scheduling for parents, and 
                    company-sponsored family events throughout the year.
                  </p>
                </div>
              </div>
              
              <div className="bg-tech-50 p-8 rounded-xl border border-tech-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Additional Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Access to parenting resources and support groups
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    New parent coaching sessions with certified professionals
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Baby welcome package with essentials for your new arrival
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-tech-200 text-white rounded-full mr-3 flex-shrink-0 mt-0.5">✓</span>
                    Meal delivery service for the first month after welcoming a new child
                  </li>
                </ul>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1607791330831-d3c292dc4a26?w=1200&auto=format" 
                  alt="Parent working from home with baby" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
                <h3 className="text-xl font-semibold mb-4">Employee Spotlight</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format" 
                    alt="Employee portrait" 
                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "The support I received from TechBros during my adoption journey was incredible. Not only did the financial assistance help, but the time off allowed me to bond with my daughter and create a strong foundation for our family."
                    </blockquote>
                    <div className="font-medium">
                      <p className="text-tech-600">David Chen</p>
                      <p className="text-gray-500">Engineering Manager</p>
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
                    Flexible hours and remote work options.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/health-wellness" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <Heart size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Health & Wellness</h3>
                  <p className="text-gray-600">
                    Comprehensive health benefits and wellness programs.
                  </p>
                </Link>
                
                <Link 
                  to="/perks/financial-wellness" 
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-tech-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-tech-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-100 transition-colors">
                    <DollarSign size={24} className="text-tech-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-500 transition-colors">Financial Wellness</h3>
                  <p className="text-gray-600">
                    Financial planning resources and retirement benefits.
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

export default ParentalBenefitsPage;
