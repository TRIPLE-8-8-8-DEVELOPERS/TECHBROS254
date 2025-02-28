
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Heart, Globe, Target, Check } from "lucide-react";

const DiversityPage = () => {
  const valuesRef = useRef<HTMLDivElement>(null);
  const initiativesRef = useRef<HTMLDivElement>(null);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [initiativesVisible, setInitiativesVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const valuesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
          valuesObserver.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    
    const initiativesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInitiativesVisible(true);
          initiativesObserver.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (valuesRef.current) valuesObserver.observe(valuesRef.current);
    if (initiativesRef.current) initiativesObserver.observe(initiativesRef.current);

    return () => {
      if (valuesRef.current) valuesObserver.unobserve(valuesRef.current);
      if (initiativesRef.current) initiativesObserver.unobserve(initiativesRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-50 via-tech-100 to-tech-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-tech-800">Diversity & Inclusion</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                At TechBros, we're committed to building a diverse and inclusive workplace where everyone feels valued, respected, and empowered to do their best work.
              </p>
              <Link 
                to="/careers" 
                className="inline-flex items-center px-8 py-4 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
              >
                Join Our Team
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Our Commitment Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                    Our Commitment
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Creating an Inclusive Environment</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    We believe that diversity of thought, background, and experience leads to better innovation, problem-solving, and outcomes for our team and clients.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Our commitment to diversity and inclusion is not just a statement—it's embedded in our hiring practices, company policies, team structure, and daily interactions.
                  </p>
                  <p className="text-lg text-gray-700">
                    We're dedicated to fostering an environment where everyone can bring their authentic selves to work and thrive professionally and personally.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-tech-animate rounded-3xl blur opacity-30 animate-gradient-x"></div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&w=800&q=80" 
                      alt="Diverse team collaborating" 
                      className="rounded-3xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section ref={valuesRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
                valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Guiding Principles for Inclusion</h2>
              <p className="text-gray-600">
                These core values guide our approach to building a diverse and inclusive workplace.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                  className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 delay-100 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                    <Users size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Representation Matters</h3>
                  <p className="text-gray-600">
                    We're committed to building a team that reflects the diversity of our communities. We actively work to increase representation at all levels of our organization.
                  </p>
                </div>
                
                <div 
                  className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 delay-200 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                    <Shield size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Equal Opportunity</h3>
                  <p className="text-gray-600">
                    We provide equal opportunity for growth and advancement. Our promotion criteria are transparent and based on demonstrated skills, achievements, and potential.
                  </p>
                </div>
                
                <div 
                  className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 delay-300 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                    <Heart size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Psychological Safety</h3>
                  <p className="text-gray-600">
                    We foster an environment where team members feel safe to express themselves, share ideas, take calculated risks, and learn from failures without fear of judgment.
                  </p>
                </div>
                
                <div 
                  className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 delay-400 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                    <Globe size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cultural Competence</h3>
                  <p className="text-gray-600">
                    We embrace and celebrate different cultural perspectives. We provide training and resources to build awareness and understanding across diverse backgrounds.
                  </p>
                </div>
                
                <div 
                  className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 delay-500 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                    <Target size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Accountability</h3>
                  <p className="text-gray-600">
                    We set measurable goals for diversity and inclusion and regularly assess our progress. We're transparent about our successes and areas where we need to improve.
                  </p>
                </div>
                
                <div 
                  className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 delay-600 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="w-14 h-14 bg-tech-100 rounded-lg flex items-center justify-center mb-6">
                    <Check size={24} className="text-tech-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    We recognize that building an inclusive workplace is an ongoing journey. We're committed to learning, growing, and evolving our practices over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Initiatives Section */}
        <section ref={initiativesRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div 
              className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
                initiativesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-sm font-medium text-tech-500 uppercase tracking-wider mb-2 inline-block">
                Our Initiatives
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Turning Commitment into Action</h2>
              <p className="text-gray-600">
                We've implemented various programs and policies to foster diversity and inclusion in our workplace.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div 
                  className={`transition-all duration-700 delay-200 ${
                    initiativesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-tech-100 text-tech-600 flex items-center justify-center mr-3 font-bold">1</span>
                    Inclusive Hiring Practices
                  </h3>
                  <ul className="space-y-4 pl-14">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Diverse Interview Panels:</strong> We ensure diverse representation on our hiring committees to reduce bias and provide multiple perspectives.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Structured Interviews:</strong> We use standardized questions and evaluation criteria to ensure fairness and reduce unconscious bias.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Inclusive Job Descriptions:</strong> We craft job postings with inclusive language to attract diverse candidates.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div 
                  className={`transition-all duration-700 delay-300 ${
                    initiativesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-tech-100 text-tech-600 flex items-center justify-center mr-3 font-bold">2</span>
                    Employee Resource Groups
                  </h3>
                  <ul className="space-y-4 pl-14">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Community Building:</strong> We support various employee-led groups centered around shared identities, experiences, or interests.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Professional Development:</strong> Our ERGs provide mentorship, networking, and skill-building opportunities tailored to group members.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Company Improvement:</strong> ERGs provide valuable feedback to leadership on how to create a more inclusive workplace.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div 
                  className={`transition-all duration-700 delay-400 ${
                    initiativesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-tech-100 text-tech-600 flex items-center justify-center mr-3 font-bold">3</span>
                    Learning & Development
                  </h3>
                  <ul className="space-y-4 pl-14">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Unconscious Bias Training:</strong> Regular workshops to help team members recognize and mitigate unconscious biases.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Inclusive Leadership:</strong> Training for managers on creating inclusive teams and fostering belonging.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Cultural Awareness:</strong> Resources to help team members appreciate and navigate cultural differences effectively.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div 
                  className={`transition-all duration-700 delay-500 ${
                    initiativesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-tech-100 text-tech-600 flex items-center justify-center mr-3 font-bold">4</span>
                    Inclusive Benefits & Policies
                  </h3>
                  <ul className="space-y-4 pl-14">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Family-Friendly Benefits:</strong> Comprehensive parental leave for all parents, regardless of gender or how they became parents.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Religious Accommodations:</strong> Flexible time off for religious observances and dedicated prayer/meditation spaces.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-tech-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Comprehensive Healthcare:</strong> Healthcare coverage inclusive of all gender identities and mental health support.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-tech-400 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Inclusive Team</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Become part of an organization that values your unique perspective and is committed to creating an environment where everyone can thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/careers" 
                  className="inline-flex items-center px-8 py-4 bg-white text-tech-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium"
                >
                  View Open Positions
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/perks" 
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
                >
                  Explore Our Benefits
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

export default DiversityPage;
