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
  };

  return (
    <header
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

        <nav className="flex items-center space-x-1">
          {/* Services mega dropdown - always visible */}
          <div 
            className="relative group"
          >
            <Button 
              variant="ghost" 
              className="font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-950 dark:to-pink-950 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-900 shadow-md border border-primary/20 transition-all duration-300"
              style={{ boxShadow: servicesMenuOpen ? '0 8px 32px 0 rgba(80, 0, 200, 0.15)' : undefined }}
            >
              <span className="text-lg font-semibold tracking-wide text-primary">Services</span>
              <ChevronDown className="h-4 w-4 opacity-60 ml-1 transition-transform duration-200 group-hover:rotate-180" />
            </Button>

            <div 
              className="absolute left-0 top-full block w-[760px] bg-white/95 dark:bg-gray-900/95 shadow-2xl rounded-3xl p-8 border border-primary/20 z-50 animate-fade-in"
              style={{ minHeight: '340px' }}
            >
              <div className="grid grid-cols-12 gap-x-8">
                {/* Popular services section */}
                <div className="col-span-12 mb-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 p-6 rounded-2xl flex items-center gap-6 shadow-inner">
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="uppercase text-xs font-bold text-primary mb-2 tracking-widest">Popular Services</h3>
                    <div className="flex gap-4">
                      {serviceDetails.slice(0, 3).map((service) => (
                        <Link 
                          key={service.id} 
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 bg-white dark:bg-neutral-900 px-4 py-3 rounded-xl shadow hover:shadow-lg border border-primary/10 hover:border-primary/40 transition-all group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-800 dark:to-purple-800 rounded-full flex items-center justify-center text-white shadow">
                            <service.icon size={20} />
                          </div>
                          <span className="font-semibold text-primary group-hover:text-purple-700 transition-colors text-base">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* All service categories list */}
                <div className="col-span-5 border-r border-primary/10 pr-8">
                  <div className="space-y-2">
                    {serviceCategories.map((category) => (
                      <button
                        key={category.label}
                        className={`flex items-center justify-between w-full p-3 rounded-xl text-left hover:bg-primary/10 dark:hover:bg-primary/20 transition-all ${activeCategory === category.label ? 'bg-primary/10 dark:bg-primary/20' : ''}`}
                        onMouseEnter={() => setActiveCategory(category.label)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-primary rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-semibold text-primary text-base">{category.label}</span>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400">{category.services.length} services</div>
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-primary/40" />
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Link 
                      to="/services" 
                      className="text-primary font-bold hover:underline text-base"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>

                {/* Subcategories list with background image on hover */}
                <div className="col-span-7 pl-8 relative min-h-[340px]">
                  {activeCategory && (
                    <>
                      {/* Background image for the active category */}
                      <div
                        className="absolute inset-0 rounded-2xl overflow-hidden z-0 transition-opacity duration-300"
                        style={{
                          backgroundImage: serviceCategoryBackgrounds[activeCategory]
                            ? `url(${serviceCategoryBackgrounds[activeCategory]})`
                            : undefined,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: 0.18,
                          pointerEvents: 'none',
                          backgroundColor: serviceCategoryBackgrounds[activeCategory]
                            ? undefined
                            : '#f3f4f6', // fallback color (tailwind gray-100)
                        }}
                      />
                      <div className="relative z-10">
                        <h3 className="font-bold mb-4 text-primary text-lg">{activeCategory} Services</h3>
                        {(serviceCategories.find(cat => cat.label === activeCategory)?.services || []).map((svc) => (
                          <div key={svc.label} className="mb-5">
                            <Link 
                              to={svc.href}
                              className="font-semibold text-base text-primary hover:text-purple-700 transition-colors"
                            >
                              {svc.label}
                            </Link>
                            {svc.subcategories.length > 0 && (
                              <div className="grid grid-cols-2 gap-2 mt-2 pl-3">
                                {svc.subcategories.map(sub => (
                                  <Link
                                    key={sub.label}
                                    to={sub.href}
                                    className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-purple-400 transition-colors py-1"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
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
          {/* Services dropdown for mobile - always visible */}
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
            {/* Always render the dropdown content */}
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
