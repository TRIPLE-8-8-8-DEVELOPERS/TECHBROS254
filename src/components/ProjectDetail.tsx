
import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, User, Briefcase, Code, ExternalLink, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { toast } from "sonner";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution' | 'results'>('overview');
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const project = projects.find(p => p.slug === slug);
  const nextProject = project?.nextProject ? projects.find(p => p.slug === project.nextProject) : null;
  const prevProject = project?.prevProject ? projects.find(p => p.slug === project.prevProject) : null;
  
  useEffect(() => {
    if (!project) {
      toast.error("Project not found");
      navigate("/");
      return;
    }
    
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [project, navigate, slug]);
  
  if (!project) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${project.mainImage})`,
            }}
          ></div>
          
          <div className="container mx-auto px-4 h-full flex items-end z-10 relative pb-16">
            <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link to="/#portfolio" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
                <ArrowLeft size={18} className="mr-2" />
                Back to Portfolio
              </Link>
              <div className="mb-4">
                <span className="inline-block text-sm font-medium bg-tech-400/90 px-4 py-1 rounded-full text-white">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-display">{project.title}</h1>
            </div>
          </div>
        </section>
        
        {/* Project Info Section */}
        <section className="py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="flex space-x-4 mb-6 overflow-x-auto py-2 scrollbar-hidden">
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === 'overview' 
                        ? 'bg-tech-400 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === 'challenge' 
                        ? 'bg-tech-400 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('challenge')}
                  >
                    Challenge
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === 'solution' 
                        ? 'bg-tech-400 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('solution')}
                  >
                    Solution
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === 'results' 
                        ? 'bg-tech-400 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('results')}
                  >
                    Results
                  </button>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {activeTab === 'overview' && (
                    <div>
                      {project.description.map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'challenge' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                      <p className="text-gray-700">{project.challenge}</p>
                    </div>
                  )}
                  
                  {activeTab === 'solution' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                      <p className="text-gray-700">{project.solution}</p>
                    </div>
                  )}
                  
                  {activeTab === 'results' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">The Results</h3>
                      <ul className="space-y-3">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-tech-100 rounded-full p-1 mr-3 mt-1">
                              <ChevronRight size={14} className="text-tech-600" />
                            </div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <User className="w-5 h-5 text-tech-400 mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Client</p>
                        <p className="text-gray-600">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-tech-400 mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Year</p>
                        <p className="text-gray-600">{project.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Briefcase className="w-5 h-5 text-tech-400 mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Our Role</p>
                        <p className="text-gray-600">{project.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Code className="w-5 h-5 text-tech-400 mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Technologies</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="bg-white px-3 py-1 rounded-full text-xs font-medium text-tech-600 border border-tech-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {project.testimonial && (
                  <div className="mt-8 bg-tech-50 p-6 rounded-xl relative">
                    <svg className="absolute top-4 left-4 text-tech-200 w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.248 5.088c-1.685 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79zM6.276 5.088c-1.686 0-2.976 1.196-2.976 2.688 0 1.196.714 2.196 1.929 2.624-.322 1.792-1.607 3.392-1.929 3.392-.143 0-.25.114-.25.25s.107.25.25.25c2.964 0 4.464-5.36 4.464-7.414 0-.448-.357-1.79-1.488-1.79z" />
                    </svg>
                    
                    <div className="pl-8 pt-8">
                      <p className="text-gray-700 italic mb-4">{project.testimonial.quote}</p>
                      
                      <div className="flex items-center">
                        {project.testimonial.avatar && (
                          <img 
                            src={project.testimonial.avatar} 
                            alt={project.testimonial.author}
                            className="w-10 h-10 rounded-full object-cover mr-4"
                          />
                        )}
                        <div>
                          <p className="font-medium">{project.testimonial.author}</p>
                          <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Gallery */}
        <section className="py-16" ref={galleryRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">Project Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={image.url} 
                    alt={image.caption || `Project image ${index + 1}`}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                  {image.caption && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-700">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* More Projects Navigation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">More Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject && (
                <Link 
                  to={`/projects/${prevProject.slug}`}
                  className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={prevProject.mainImage} 
                      alt={prevProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div className="flex items-center text-white">
                        <ArrowLeft size={20} className="mr-3" />
                        <div>
                          <p className="text-sm font-medium opacity-80">Previous Project</p>
                          <p className="text-xl font-bold">{prevProject.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
              
              {nextProject && (
                <Link 
                  to={`/projects/${nextProject.slug}`}
                  className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={nextProject.mainImage} 
                      alt={nextProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-end p-6">
                      <div className="flex items-center text-white">
                        <div className="text-right">
                          <p className="text-sm font-medium opacity-80">Next Project</p>
                          <p className="text-xl font-bold">{nextProject.title}</p>
                        </div>
                        <ArrowRight size={20} className="ml-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/#portfolio"
                className="inline-flex items-center px-6 py-3 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-colors font-medium"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-tech-400 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <Link 
                to="/#contact"
                className="inline-block px-8 py-4 bg-white text-tech-500 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.getBoundingClientRect().top + window.pageYOffset - 100,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
