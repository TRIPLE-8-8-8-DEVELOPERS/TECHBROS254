import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { SearchModal } from "./SearchModal";
import { useAuth } from "@/components/AuthContext";
import { ThemeToggle } from "./ThemeToggle";
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
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Development", href: "/services/development" },
      { label: "Design", href: "/services/design" },
      { label: "Marketing", href: "/services/marketing" },
      { label: "Infrastructure", href: "/services/infrastructure" },
      { label: "Education", href: "/services/education" },
      { label: "Healthcare", href: "/services/healthcare" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "AI & Data", href: "/services/ai-data" },
      { label: "Security", href: "/services/security" },
      { label: "Consulting", href: "/services/consulting" },
      { label: "Forex", href: "/services/forex" },
      { label: "Crypto", href: "/services/crypto" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
      <div className="bg-tech-500 text-white py-1.5 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>
            Transforming Businesses with Cutting-Edge Technology Solutions
          </span>
          <div className="flex items-center space-x-3">
            <Link to="/benefits" className="hover:underline">
              Benefits
            </Link>
            <Link to="/diversity" className="hover:underline">
              Diversity
            </Link>
            <Link to="/perks" className="hover:underline">
              Perks
            </Link>
          </div>
        </div>
      </div>
      
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
