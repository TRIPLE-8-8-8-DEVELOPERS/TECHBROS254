import { useState, useEffect } from "react";
import { Menu, X, Briefcase, ChevronDown, Database, Code, PenTool, ShoppingCart, Shield, LineChart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { serviceDetails } from "../data/services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { UserProfile } from "./UserProfile";

// Group services by category
const serviceCategories = serviceDetails.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {} as Record<string, typeof serviceDetails>);

// Map category names to their respective icon components
const categoryIcons: Record<string, React.ElementType> = {
  "Development": Code,
  "Infrastructure": Database,
  "Consulting": Briefcase,
  "E-commerce": ShoppingCart,
  "AI & Data": Database,
  "Security": Shield,
  "Marketing": LineChart,
  "Design": PenTool,
};

// Select popular services for quick access
const popularServices = serviceDetails
  .filter(service => ["Mobile App Development", "Web Development", "AI Solutions", "Cybersecurity"].includes(service.title))
  .slice(0, 4);

// Primary navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Portfolio", path: "/#portfolio" },
  { name: "Team", path: "/team" },
  { name: "Blog", path: "/blog" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      
      if (location.pathname !== '/') {
        window.location.href = path;
        return;
      }
      
      const element = document.querySelector(path.substring(1));
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: "smooth",
        });
        closeMenu();
      }
    } else {
      closeMenu();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 bg-gradient-to-r from-purple-500/80 to-tech-400/80 backdrop-blur-md shadow-lg"
          : "py-4 bg-transparent dark:bg-dark-100/50 dark:backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <img src="/logo.svg" alt="TechBros" className="h-10 transition-all duration-500 group-hover:scale-110" />
          </div>
          <div className="ml-3">
            <span className={`font-display font-bold text-2xl transition-opacity duration-500 ${isScrolled ? 'text-white' : 'bg-gradient-to-r from-tech-400 to-purple-500 bg-clip-text text-transparent'}`}>
              TechBros
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`${isScrolled ? 'text-white' : 'text-gray-700 dark:text-gray-200'} hover:text-white dark:hover:text-tech-300 transition-colors duration-300 text-sm font-medium flex items-center`}>
                  Services <ChevronDown size={14} className="ml-1 opacity-70 transition group-open:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[380px] p-0 overflow-hidden rounded-xl bg-white/95 dark:bg-gray-900/95 border-none shadow-2xl -ml-6 mt-2">
                <div className="p-4 bg-gradient-to-r from-tech-500/20 to-purple-500/20 dark:from-tech-500/30 dark:to-purple-500/30">
                  <DropdownMenuLabel className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    Popular Services
                  </DropdownMenuLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {popularServices.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <Link 
                          key={service.id} 
                          to={`/services/${service.slug}`}
                          className="flex items-center p-2 rounded-md hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors"
                        >
                          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-r from-tech-500 to-purple-500 text-white mr-2">
                            {typeof ServiceIcon === 'function' && <ServiceIcon size={16} />}
                          </div>
                          <div className="text-sm font-medium">{service.title}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <DropdownMenuSeparator />
                
                <div className="p-2 max-h-[400px] overflow-y-auto scrollbar-thin">
                  {Object.entries(serviceCategories).map(([category, services]) => {
                    const CategoryIcon = categoryIcons[category] || Briefcase;
                    return (
                      <DropdownMenuGroup key={category}>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-tech-500 to-purple-500 text-white mr-2">
                              <CategoryIcon size={16} />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">{category}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{services.length} services</div>
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent className="min-w-[220px] bg-white/95 dark:bg-gray-900/95 rounded-lg shadow-lg border-none">
                            <Link 
                              to={`/services/${services[0].category.toLowerCase().replace(/[\s&]+/g, '-')}-services`}
                              className="flex w-full items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            >
                              <span className="text-xs font-semibold text-tech-500 dark:text-tech-400 uppercase">
                                View All {category} Services
                              </span>
                            </Link>
                            <DropdownMenuSeparator />
                            {services.map((service) => {
                              const ServiceIcon = service.icon;
                              return (
                                <DropdownMenuItem key={service.id} asChild>
                                  <Link 
                                    to={`/services/${service.slug}`}
                                    className="flex items-center cursor-pointer"
                                  >
                                    <div className="text-tech-500 dark:text-tech-400 mr-2">
                                      {typeof ServiceIcon === 'function' && <ServiceIcon size={16} />}
                                    </div>
                                    {service.title}
                                  </Link>
                                </DropdownMenuItem>
                              );
                            })}
                            
                            {services.some(service => service.subcategories && service.subcategories.length > 0) && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">
                                  Specialized Services
                                </DropdownMenuLabel>
                                {services
                                  .flatMap(service => service.subcategories || [])
                                  .slice(0, 5)
                                  .map((subcat, idx) => (
                                    <DropdownMenuItem key={`${subcat.title}-${idx}`} asChild>
                                      <Link 
                                        to={`/services/${services.find(s => s.subcategories?.some(sc => sc.title === subcat.title))?.slug || ''}/${subcat.slug}`}
                                        className="text-sm text-gray-600 dark:text-gray-300"
                                      >
                                        {subcat.title}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                              </>
                            )}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                    );
                  })}
                </div>
                
                <DropdownMenuSeparator />
                <Link 
                  to="/services" 
                  className="block p-4 text-center text-sm font-medium text-tech-600 dark:text-tech-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                >
                  View All Services
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${isScrolled ? 'text-white' : 'text-gray-700 dark:text-gray-200'} hover:text-white dark:hover:text-tech-300 transition-colors duration-300 text-sm font-medium link-hover ${
                link.name === "Careers" ? "flex items-center" : ""
              }`}
              onClick={(e) => handleNavClick(e, link.path)}
            >
              {link.name === "Careers" && (
                <Briefcase size={16} className="mr-1.5 text-tech-500 dark:text-tech-300" />
              )}
              {link.name}
            </Link>
          ))}
          
          <ThemeToggle />
          <UserProfile />
        </nav>

        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <UserProfile />
          <button 
            className={`${isScrolled ? 'text-white' : 'text-gray-700 dark:text-gray-200'} focus:outline-none ml-2`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-gradient-to-br from-purple-600 to-tech-400 z-40 transition-transform duration-500 ease-expo-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img src="/logo.svg" alt="TechBros" className="h-10" />
              <span className="ml-3 font-display font-bold text-2xl text-white">
                TechBros
              </span>
            </Link>
            <button 
              className="text-white focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mt-6 overflow-y-auto">
            <div>
              <div 
                className="text-2xl font-medium text-white mb-4 flex items-center"
              >
                Services <ChevronDown size={20} className="ml-2 text-white/70" />
              </div>
              
              <div className="ml-2 space-y-5 pb-4">
                {Object.entries(serviceCategories).map(([category, services]) => {
                  const CategoryIcon = categoryIcons[category] || Briefcase;
                  return (
                    <div key={category} className="space-y-2">
                      <Link 
                        to={`/services/${category.toLowerCase().replace(/[\s&]+/g, '-')}-services`}
                        className="flex items-center text-xl font-medium text-white hover:text-tech-200 transition-colors"
                        onClick={closeMenu}
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white mr-3">
                          <CategoryIcon size={16} />
                        </div>
                        {category}
                      </Link>
                      
                      <div className="ml-11 space-y-2">
                        {services.slice(0, 3).map((service) => {
                          return (
                            <Link
                              key={service.id}
                              to={`/services/${service.slug}`}
                              className="block text-base text-white/80 hover:text-white"
                              onClick={closeMenu}
                            >
                              {service.title}
                            </Link>
                          );
                        })}
                        
                        {services.length > 3 && (
                          <Link
                            to={`/services/${category.toLowerCase().replace(/[\s&]+/g, '-')}-services`}
                            className="block text-sm font-medium text-white/70 hover:text-white mt-1"
                            onClick={closeMenu}
                          >
                            View all {services.length} services →
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-medium text-white hover:text-tech-200 transition-all stagger-item ${
                  isOpen ? "revealed" : ""
                } stagger-delay-${index + 1} ${
                  link.name === "Careers" ? "flex items-center" : ""
                }`}
                onClick={(e) => handleNavClick(e, link.path)}
              >
                {link.name === "Careers" && (
                  <Briefcase size={24} className="mr-2 text-white/70" />
                )}
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto mb-8">
            <Link
              to="/#contact"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg stagger-item stagger-delay-5"
              onClick={(e) => handleNavClick(e, "/#contact")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
