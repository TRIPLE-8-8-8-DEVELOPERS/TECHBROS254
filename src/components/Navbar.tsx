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
  { label: "Careers", href: "/careers" },
  { label: "Team", href: "/team" },
  { label: "Pricing", href: "/pricing" },
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

// Add a mapping of service category to Unsplash background image URL
const serviceCategoryBackgrounds: Record<string, string> = {
  'Web Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  'Mobile Apps': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  'UI/UX Design': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'Cloud Solutions': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'AI & Data': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  'E-Commerce': 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80',
  // Add more categories and Unsplash images as needed
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const { user, signOut } = useAuth();

  const navbarRef = React.useRef<HTMLElement>(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActiveCategory(null);
      setActiveService(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  React.useEffect(() => {
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

    if (navbarRef.current) {
      console.log("Navbar height:", navbarRef.current.offsetHeight);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveCategory(null);
    setActiveService(null);
  };

  // Keyboard accessibility for services dropdown (desktop)
  const handleServicesKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setServicesMenuOpen((open) => !open);
    } else if (e.key === 'Escape') {
      setServicesMenuOpen(false);
    }
  };

  return (
    <header
      ref={navbarRef}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="w-full px-4 flex justify-between items-center h-16">
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
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={servicesMenuOpen}
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
            onFocus={() => setServicesMenuOpen(true)}
            onBlur={() => setServicesMenuOpen(false)}
            onKeyDown={handleServicesKeyDown}
          >
            <Button 
              variant="ghost" 
              className="font-medium flex items-center gap-1 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: servicesMenuOpen ? '0 8px 24px 0 rgba(80, 0, 200, 0.12)' : undefined }}
              aria-haspopup="true"
              aria-expanded={servicesMenuOpen}
            >
              <span className="text-base font-medium tracking-wide text-primary">Services</span>
              <ChevronDown className="h-4 w-4 opacity-60 ml-1 transition-transform duration-200 group-hover:rotate-180" />
            </Button>

            <div 
              className={`absolute left-0 top-full ${servicesMenuOpen ? 'block' : 'hidden'} w-[480px] bg-white/95 dark:bg-gray-900/95 shadow-xl rounded-2xl border border-primary/10 z-50 animate-in fade-in-0 duration-200`}
              style={{ minHeight: '220px' }}
              tabIndex={-1}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <div className="grid grid-cols-12 gap-4 p-6">
                {/* Quick access section */}
                <div className="col-span-12 mb-4">
                  <div className="grid grid-cols-3 gap-3">
                    {serviceDetails.slice(0, 3).map((service) => (
                      <Link 
                        key={service.id} 
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center text-primary shadow-sm">
                          <service.icon size={16} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories grid */}
                <div className="col-span-5 border-r border-primary/10 pr-4 space-y-1">
                  {serviceCategories.map((category) => (
                    <button
                      key={category.label}
                      className={`flex items-center justify-between w-full p-2 rounded-lg text-left hover:bg-primary/5 transition-all text-sm ${activeCategory === category.label ? 'bg-primary/5' : ''}`}
                      onMouseEnter={() => setActiveCategory(category.label)}
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">{category.label}</span>
                      <ChevronRight size={14} className="text-primary/40" />
                    </button>
                  ))}
                </div>

                {/* Subcategories with dynamic background */}
                <div className="col-span-7 pl-4 relative">
                  {activeCategory && (
                    <>
                      <div
                        className="absolute inset-0 rounded-xl overflow-hidden z-0 opacity-[0.07] transition-opacity duration-300"
                        style={{
                          backgroundImage: serviceCategoryBackgrounds[activeCategory]
                            ? `url(${serviceCategoryBackgrounds[activeCategory]})`
                            : undefined,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div className="relative z-10">
                        <div className="grid grid-cols-2 gap-2">
                          {(serviceCategories.find(cat => cat.label === activeCategory)?.services || []).map((svc) => (
                            <div key={svc.label} className="mb-3">
                              <Link 
                                to={svc.href}
                                className="block font-medium text-sm text-primary hover:text-purple-700 transition-colors mb-1"
                              >
                                {svc.label}
                              </Link>
                              {svc.subcategories.length > 0 && (
                                <div className="space-y-1 pl-2">
                                  {svc.subcategories.map(sub => (
                                    <Link
                                      key={sub.label}
                                      to={sub.href}
                                      className="block text-xs text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                      <span className="text-primary font-bold">-</span> {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Other nav items */}
          {navItems.map((item) => (
            <div key={item.label}>
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
            </div>
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
            <X size={15} />
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
                                    className="block py-1 text-gray-600 dark:text-gray-300 text-xs hover:text-vibrant-purple dark:hover:text-vibrant-purple/90 flex items-center gap-1"
                                    onClick={closeMenu}
                                  >
                                    <span className="text-primary font-bold">-</span> {sub.label}
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
            <div key={item.label}>
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
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
