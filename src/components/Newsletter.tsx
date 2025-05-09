
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "../hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 dark:from-vibrant-purple/5 dark:to-vibrant-pink/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-300 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-vibrant-purple/10 rounded-full transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-vibrant-pink/10 rounded-full transform -translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md">
                  Subscribe to our newsletter for the latest tech insights, industry news, and exclusive offers.
                </p>
              </div>
              
              {isSubscribed ? (
                <div className="flex items-center space-x-3 text-green-600 dark:text-green-400 py-2 px-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle size={20} />
                  <span className="font-medium">Successfully subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="pl-10 pr-4 py-2 min-w-[280px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
