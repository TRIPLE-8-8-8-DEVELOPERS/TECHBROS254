
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Page Not Found | TechBros";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-tech-400 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-tech-500 hover:text-tech-600 font-medium transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="mt-12 p-6 bg-tech-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Looking for something specific?</h3>
              <p className="text-gray-600 mb-6">
                Check out our main sections or use the navigation menu at the top.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/#services" 
                  className="px-5 py-2 bg-white border border-tech-200 text-tech-600 rounded-lg hover:bg-tech-50 transition-colors"
                >
                  Services
                </Link>
                <Link 
                  to="/blog" 
                  className="px-5 py-2 bg-white border border-tech-200 text-tech-600 rounded-lg hover:bg-tech-50 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  to="/#about" 
                  className="px-5 py-2 bg-white border border-tech-200 text-tech-600 rounded-lg hover:bg-tech-50 transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  to="/#contact" 
                  className="px-5 py-2 bg-white border border-tech-200 text-tech-600 rounded-lg hover:bg-tech-50 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
