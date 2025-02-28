
import { ArrowUp } from "lucide-react";

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-500 hover:text-triple-800 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center mb-4">
              <img src="/logo.svg" alt="TRIPLE888DEVELOPERS" className="h-8 logo-spin" />
              <span className="ml-2 font-semibold text-lg">TRIPLE888DEVELOPERS</span>
            </a>
            <p className="text-gray-500 text-sm text-left">
              Leading technology solutions provider helping businesses transform, scale, and thrive in the digital landscape.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4 text-left">Services</h4>
            <ul className="space-y-2 text-left">
              <li><FooterLink href="#services">Software Development</FooterLink></li>
              <li><FooterLink href="#services">Web Development</FooterLink></li>
              <li><FooterLink href="#services">Mobile App Development</FooterLink></li>
              <li><FooterLink href="#services">Cloud Solutions</FooterLink></li>
              <li><FooterLink href="#services">IT Consulting</FooterLink></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4 text-left">Company</h4>
            <ul className="space-y-2 text-left">
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#portfolio">Portfolio</FooterLink></li>
              <li><FooterLink href="#services">Services</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4 text-left">Contact</h4>
            <ul className="space-y-2 text-left">
              <li className="text-gray-500">350 Fifth Avenue, New York, NY 10118, USA</li>
              <li><FooterLink href="mailto:contact@triple888dev.com">contact@triple888dev.com</FooterLink></li>
              <li><FooterLink href="tel:+12125551234">+1 (212) 555-1234</FooterLink></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TRIPLE888DEVELOPERS. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-triple-100 flex items-center justify-center hover:bg-triple-200 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="text-triple-800" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
