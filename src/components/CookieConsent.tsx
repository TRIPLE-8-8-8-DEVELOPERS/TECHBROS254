
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      // Show the banner after a slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const dismissBanner = () => {
    // Just hide the banner without saving preference
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto">
        <div className="relative bg-white dark:bg-dark-300 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={dismissBanner}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="text-center sm:text-left max-w-3xl">
            <h3 className="font-medium text-lg">We value your privacy</h3>
            <p className="text-muted-foreground text-sm mt-1">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          
          <div className="flex gap-3 mt-2 sm:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={dismissBanner}
            >
              Reject All
            </Button>
            <Button
              className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white"
              size="sm"
              onClick={acceptCookies}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
