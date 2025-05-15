import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { SearchModal } from "./SearchModal";
import { useAuth } from "@/components/AuthContext";
import { ThemeToggle } from "./ThemeToggle";
import { serviceDetails } from "../data/services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

// Organize service data for navbar dropdown
const getServiceCategories = () => {
  const categories = Array.from(new Set(serviceDetails.map(item => item.category)));
  
  const serviceCategories = categories.map(category => {
    const servicesInCategory = serviceDetails.filter(service => service.category === category);
    return {
      label: category,
      href: `/services/${category.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`,
      services: servicesInCategory.map(service => ({
        label: service.title,
        href: `/services/${service.slug}`,
        subcategories: service.subcategories ? service.subcategories.map(sub => ({
          label: sub.title,
          href: `/services/${service.slug}/${sub.slug}`
        })) : []
      }))
    };
  });
  
  return serviceCategories;
};

const serviceCategories = getServiceCategories();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-vibrant-purple rounded-md flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl">TechBros</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {/* Services mega dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <Button 
              variant="ghost" 
              className="font-medium"
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4 opacity-50 ml-1" />
            </Button>

            <div 
              className={`absolute left-0 top-full ${servicesMenuOpen ? 'block' : 'hidden'} w-[700px] bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 z-50`}
            >
              <div className="grid grid-cols-12 gap-x-6">
                {/* Popular services section */}
                <div className="col-span-12 mb-6 bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl">
                  <h3 className="uppercase text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">Popular Services</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {serviceDetails.slice(0, 3).map((service) => (
                      <Link 
                        key={service.id} 
                        to={`/services/${service.slug}`}
                        className="flex items-center space-x-3 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-lg transition-colors group"
                      >
                        <div className="w-10 h-10 bg-vibrant-purple rounded-full flex items-center justify-center text-white">
                          <service.icon size={18} />
                        </div>
                        <span className="font-medium group-hover:text-vibrant-purple dark:group-hover:text-vibrant-purple/90 transition-colors">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* All service categories list */}
                <div className="col-span-5 border-r border-gray-200 dark:border-gray-700 pr-6">
                  <div className="space-y-1">
                    {serviceCategories.map((category) => (
                      <button
                        key={category.label}
                        className={`flex items-center justify-between w-full p-3 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                          activeCategory === category.label ? 'bg-gray-100 dark:bg-gray-800' : ''
                        }`}
                        onMouseEnter={() => setActiveCategory(category.label)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-vibrant-purple/20 dark:bg-vibrant-purple/30 rounded-full flex items-center justify-center mr-3">
                            {/* Using a placeholder icon here */}
                            <div className="w-4 h-4 bg-vibrant-purple rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium">{category.label}</span>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {category.services.length} services
                            </div>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link 
                      to="/services" 
                      className="text-vibrant-purple dark:text-vibrant-purple/90 font-medium hover:underline"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>

                {/* Subcategories list */}
                <div className="col-span-7 pl-6">
                  {activeCategory && (
                    <div>
                      <h3 className="font-medium mb-4 text-vibrant-purple dark:text-vibrant-purple/90">
                        {activeCategory} Services
                      </h3>
                      
                      {serviceCategories
                        .find(cat => cat.label === activeCategory)
                        ?.services.map((service) => (
                          <div key={service.label} className="mb-4">
                            <Link 
                              to={service.href}
                              className="font-medium hover:text-vibrant-purple dark:hover:text-vibrant-purple/90 transition-colors"
                            >
                              {service.label}
                            </Link>
                            
                            {service.subcategories.length > 0 && (
                              <div className="grid grid-cols-2 gap-2 mt-2 pl-3">
                                {service.subcategories.map(sub => (
                                  <Link
                                    key={sub.label}
                                    to={sub.href}
                                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-vibrant-purple dark:hover:text-vibrant-purple/90 transition-colors py-1"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Other nav items */}
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="font-medium">
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link to={child.href} className="w-full">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" asChild className="font-medium">
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex items-center">
          <SearchModal />
          
          <ThemeToggle />

          <LanguageSwitcher />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-2">
                  <User size={18} className="mr-2" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="default" size="sm" asChild className="ml-2">
              <Link to="/auth">Sign In</Link>
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden ml-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-3/4 bg-white dark:bg-gray-900 shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-vibrant-purple rounded-md flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl">TechBros</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X size={24} />
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {/* Services dropdown for mobile */}
          <div className="mb-4">
            <Button
              variant="ghost"
              className="w-full justify-between font-medium"
              onClick={() => {
                setActiveCategory(activeCategory === "Services" ? null : "Services");
              }}
            >
              <span>Services</span>
              <ChevronDown 
                className={`h-4 w-4 opacity-50 transition-transform ${activeCategory === "Services" ? "rotate-180" : ""}`}
              />
            </Button>
            
            {activeCategory === "Services" && (
              <div className="ml-4 mt-2 space-y-2">
                {serviceCategories.map((category) => (
                  <div key={category.label}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between font-medium text-sm py-2"
                      onClick={() => setActiveService(activeService === category.label ? null : category.label)}
                    >
                      <span>{category.label}</span>
                      <ChevronDown 
                        className={`h-4 w-4 opacity-50 transition-transform ${
                          activeService === category.label ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                    
                    {activeService === category.label && (
                      <div className="ml-4 space-y-2 mt-2">
                        {category.services.map((service) => (
                          <div key={service.label}>
                            <Link 
                              to={service.href}
                              className="block py-2 hover:text-vibrant-purple dark:hover:text-vibrant-purple/90 text-sm font-medium"
                              onClick={closeMenu}
                            >
                              {service.label}
                            </Link>
                            
                            {service.subcategories.length > 0 && (
                              <div className="ml-4 space-y-1 mt-1">
                                {service.subcategories.map(sub => (
                                  <Link
                                    key={sub.label}
                                    to={sub.href}
                                    className="block py-1 text-gray-600 dark:text-gray-300 text-xs hover:text-vibrant-purple dark:hover:text-vibrant-purple/90"
                                    onClick={closeMenu}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Other nav items */}
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.children ? (
                <div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between font-medium"
                    onClick={() => {
                      // Handle dropdown open/close state if needed
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                  <div className="ml-4 flex flex-col space-y-2">
                    {item.children.map((child) => (
                      <Button
                        key={child.label}
                        variant="ghost"
                        className="w-full justify-start font-medium"
                        onClick={closeMenu}
                      >
                        <Link to={child.href} className="w-full">
                          {child.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start font-medium"
                  onClick={closeMenu}
                >
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
