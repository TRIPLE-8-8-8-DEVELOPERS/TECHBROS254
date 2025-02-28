
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-500 hover:text-tech-400 transition-colors duration-300"
  >
    {children}
  </Link>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-gray-50 pt-20 pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-tech"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-tech-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center mb-6 group">
              <img src="/logo.svg" alt="TechBros" className="h-12 transition-all duration-500 group-hover:scale-110" />
              <span className="ml-3 font-display font-bold text-2xl bg-gradient-to-r from-tech-400 to-purple-500 bg-clip-text text-transparent">
                TechBros
              </span>
            </Link>
            <p className="text-gray-600 text-pretty mb-6">
              Leading technology solutions provider helping businesses transform, scale, and thrive in the digital landscape through innovative strategies and cutting-edge technologies.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-tech-500 hover:border-tech-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-tech-500 hover:border-tech-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-tech-500 hover:border-tech-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-tech-500 hover:border-tech-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-medium text-lg mb-4 text-gray-800">Services</h4>
            <ul className="space-y-3">
              <li><FooterLink to="/services/custom-software-development">Software Development</FooterLink></li>
              <li><FooterLink to="/services/web-development">Web Development</FooterLink></li>
              <li><FooterLink to="/services/mobile-app-development">Mobile App Development</FooterLink></li>
              <li><FooterLink to="/services/cloud-solutions">Cloud Solutions</FooterLink></li>
              <li><FooterLink to="/services/it-consulting">IT Consulting</FooterLink></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-medium text-lg mb-4 text-gray-800">Company</h4>
            <ul className="space-y-3">
              <li><FooterLink to="/#about">About Us</FooterLink></li>
              <li><FooterLink to="/team">Our Team</FooterLink></li>
              <li><FooterLink to="/#portfolio">Portfolio</FooterLink></li>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/pricing">Pricing</FooterLink></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-medium text-lg mb-4 text-gray-800">Get In Touch</h4>
            <div className="space-y-4">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-tech-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-600">350 Fifth Avenue, New York, NY 10118, USA</span>
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-tech-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+12125551234" className="text-gray-600 hover:text-tech-500 transition-colors">+1 (212) 555-1234</a>
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-tech-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:techbroske@gmail.com" className="text-gray-600 hover:text-tech-500 transition-colors">techbroske@gmail.com</a>
              </p>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium text-gray-800 mb-3">Subscribe to our newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 border border-gray-300 focus:border-tech-400 focus:outline-none rounded-l-lg"
                />
                <button 
                  className="bg-gradient-tech text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-tech-500 font-medium">TechBros</span>. All rights reserved.
          </p>
          
          <div className="flex space-x-6 items-center">
            <a href="#" className="text-sm text-gray-500 hover:text-tech-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-tech-500 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full gradient-border flex items-center justify-center hover:shadow-md transition-all duration-300 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="text-tech-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
