
import { useState, useEffect } from "react";
import { Menu, X, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "About", path: "/#about" },
  { name: "Portfolio", path: "/#portfolio" },
  { name: "Team", path: "/team" },
  { name: "Blog", path: "/blog" },
  { name: "Pricing", path: "/pricing" },
  { name: "Careers", path: "/careers" },
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
          ? "py-3 glass shadow-md"
          : "py-6 bg-transparent dark:bg-dark-100/50 dark:backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <img src="/logo.svg" alt="TechBros" className="h-10 transition-all duration-500 group-hover:scale-110" />
          </div>
          <div className="ml-3">
            <span className={`font-display font-bold text-2xl transition-opacity duration-500 bg-gradient-to-r from-tech-400 to-purple-500 bg-clip-text text-transparent ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              TechBros
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-700 dark:text-gray-200 hover:text-tech-500 dark:hover:text-tech-300 transition-colors duration-300 text-sm font-medium link-hover ${
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
          <Link 
            to="/#contact" 
            className="bg-gradient-tech dark:bg-dark-gradient-tech text-white px-6 py-2.5 rounded-full transition-all duration-300 text-sm hover:shadow-lg font-medium"
            onClick={(e) => handleNavClick(e, "/#contact")}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <button 
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-dark-100 z-40 transition-transform duration-500 ease-expo-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img src="/logo.svg" alt="TechBros" className="h-10" />
              <span className="ml-3 font-display font-bold text-2xl bg-gradient-to-r from-tech-400 to-purple-500 bg-clip-text text-transparent">
                TechBros
              </span>
            </Link>
            <button 
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-8 mt-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-tech-500 dark:hover:text-tech-300 transition-all stagger-item ${
                  isOpen ? "revealed" : ""
                } stagger-delay-${index + 1} ${
                  link.name === "Careers" ? "flex items-center" : ""
                }`}
                onClick={(e) => handleNavClick(e, link.path)}
              >
                {link.name === "Careers" && (
                  <Briefcase size={24} className="mr-2 text-tech-500 dark:text-tech-300" />
                )}
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto mb-8">
            <Link
              to="/#contact"
              className="inline-block bg-gradient-tech dark:bg-dark-gradient-tech text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg stagger-item stagger-delay-5"
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
