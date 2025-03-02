
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { ArrowLeft, Filter, Search } from "lucide-react";

const ProjectsPage = () => {
  const [category, setCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
    };
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Mobile App", label: "Mobile Apps" },
    { id: "Web Development", label: "Web Development" },
    { id: "Software Development", label: "Software" },
    { id: "Data Visualization", label: "Data & Analytics" },
    { id: "Enterprise Solution", label: "Enterprise" },
    { id: "Cybersecurity", label: "Security" },
    { id: "AI & Machine Learning", label: "AI & ML" },
  ];

  const technologies = [
    "React", "Node.js", "Python", "Java", "TensorFlow", 
    "AWS", "Azure", "Firebase", "MongoDB", "PostgreSQL",
    "Swift", "Kotlin", "Unity3D", "WebRTC", "Blockchain",
    "Docker", "Kubernetes", "IoT", "AR/VR", "GraphQL"
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = category === "all" || project.category === category;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.some(desc => desc.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />

      <main className="flex-1">
        <div className="bg-gradient-to-b from-vibrant-purple/5 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div 
              ref={titleRef}
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-6">
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-vibrant-purple transition-colors">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Home
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
                Our <span className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink bg-clip-text text-transparent">Project Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Explore our comprehensive portfolio showcasing successful projects across various industries and technologies. Each project represents our commitment to delivering exceptional solutions that drive measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search projects by name, technology, or description..." 
                    className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-lg focus:ring-vibrant-purple focus:border-vibrant-purple"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-vibrant-purple/30 transition-colors sm:w-auto"
                >
                  <Filter size={18} />
                  <span>Filters</span>
                </button>
              </div>

              {filterOpen && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                  <div className="mb-4">
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setCategory(cat.id)}
                          className={`px-4 py-2 text-sm rounded-full transition-all ${
                            category === cat.id
                              ? "bg-vibrant-purple text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchTerm(tech)}
                          className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => { setSearchTerm(""); setCategory("all"); }}
                className="px-6 py-2 bg-vibrant-purple text-white rounded-full"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-medium">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    image={project.mainImage}
                    title={project.title}
                    category={project.category}
                    slug={project.slug}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
