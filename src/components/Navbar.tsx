
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#services" },
  { name: "About", path: "#about" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src="/logo.svg" alt="TechBros" className="h-8 logo-spin" />
          <span className={`ml-2 font-semibold text-lg transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
            TechBros
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-tech-600 hover:text-tech-800 transition-colors duration-300 text-sm font-medium link-hover"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.path);
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.pageYOffset - 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-tech-400 text-white px-5 py-2 rounded-full transition-all duration-300 text-sm hover:bg-tech-500 hover:shadow-md"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                window.scrollTo({
                  top: element.getBoundingClientRect().top + window.pageYOffset - 100,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tech-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-expo-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <a href="#home" className="flex items-center">
              <img src="/logo.svg" alt="TechBros" className="h-8" />
              <span className="ml-2 font-semibold text-lg">TechBros</span>
            </a>
            <button 
              className="text-tech-600 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                className={`text-2xl font-medium text-tech-600 hover:text-tech-800 transition-all stagger-item ${isOpen ? "revealed" : ""} stagger-delay-${index + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  setTimeout(() => {
                    const element = document.querySelector(link.path);
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.pageYOffset - 100,
                        behavior: "smooth",
                      });
                    }
                  }, 300);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto mb-8">
            <a
              href="#contact"
              className="inline-block bg-tech-400 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:bg-tech-500 hover:shadow-lg stagger-item stagger-delay-5"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.pageYOffset - 100,
                      behavior: "smooth",
                    });
                  }
                }, 300);
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
