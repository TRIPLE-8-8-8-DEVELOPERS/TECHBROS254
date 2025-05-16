import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { Check, HelpCircle, X } from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: {
    text: string;
    included: boolean;
  }[];
  highlighted?: boolean;
  ctaText: string;
}

// Redesigned pricing tiers with more creative, realistic packages and services
const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    description: "For startups and entrepreneurs ready to make their mark online.",
    price: {
      monthly: 199,
      annual: 159
    },
    features: [
      { text: "Modern 1-5 page website", included: true },
      { text: "Mobile-first responsive design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact & lead forms", included: true },
      { text: "Google Analytics integration", included: true },
      { text: "1 language supported", included: true },
      { text: "Email support", included: true },
      { text: "Blog setup", included: false },
      { text: "E-commerce ready", included: false },
      { text: "Custom branding kit", included: false },
      { text: "Priority support", included: false }
    ],
    ctaText: "Start Your Launch"
  },
  {
    name: "Growth",
    description: "Best for growing businesses needing advanced features and flexibility.",
    price: {
      monthly: 499,
      annual: 399
    },
    highlighted: true,
    features: [
      { text: "Up to 15 custom pages", included: true },
      { text: "Advanced SEO & analytics", included: true },
      { text: "Blog & content management", included: true },
      { text: "Multi-language support (up to 3)", included: true },
      { text: "E-commerce (up to 100 products)", included: true },
      { text: "Custom branding kit", included: true },
      { text: "Social media integrations", included: true },
      { text: "Live chat & chatbot integration", included: true },
      { text: "Monthly performance reports", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "API integrations", included: false },
      { text: "Dedicated account manager", included: false }
    ],
    ctaText: "Grow with Us"
  },
  {
    name: "Scale+",
    description: "For established brands and enterprises seeking custom, scalable solutions.",
    price: {
      monthly: 1299,
      annual: 1049
    },
    features: [
      { text: "Unlimited pages & users", included: true },
      { text: "Full e-commerce suite (unlimited products)", included: true },
      { text: "Custom web applications & portals", included: true },
      { text: "API & third-party integrations", included: true },
      { text: "Advanced security & compliance", included: true },
      { text: "Performance optimization & audits", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "24/7 priority support (phone, chat, email)", included: true },
      { text: "Quarterly strategy sessions", included: true },
      { text: "Custom onboarding & training", included: true },
      { text: "On-demand feature development", included: true },
      { text: "White-labeling options", included: true }
    ],
    ctaText: "Request Enterprise Demo"
  }
];

const faqs = [
  {
    question: "What's included in the custom website design?",
    answer: "Our custom website design includes a unique visual identity, user experience design, brand integration, and a fully responsive layout that works across all devices. We work closely with you to create a design that aligns with your brand and business goals."
  },
  {
    question: "Do I need to pay for hosting separately?",
    answer: "Yes, hosting is billed separately. However, we offer hosting solutions as part of our maintenance packages, which include regular updates, security monitoring, and technical support."
  },
  {
    question: "How long does it take to complete a website?",
    answer: "The timeline varies depending on the complexity of the project. A basic website typically takes 4-6 weeks, while more complex projects can take 8-12 weeks or more. We'll provide you with a detailed timeline during our initial consultation."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can upgrade to a higher tier at any time. Downgrading is possible at the end of your billing cycle. Please contact our customer support team to discuss your specific needs."
  },
  {
    question: "Do you offer maintenance after the website is launched?",
    answer: "Yes, we offer ongoing maintenance packages that include regular updates, security monitoring, content updates, and technical support. These can be added to any plan."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, bank transfers, and cryptocurrency. For Enterprise plans, we can also arrange custom payment schedules."
  }
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-blue-950 relative overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      {/* Animated/gradient background shapes for visual interest */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-full filter blur-3xl opacity-20 animate-pulse z-0" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tr from-pink-200 via-blue-200 to-purple-200 dark:from-pink-900 dark:via-blue-950 dark:to-purple-950 rounded-full filter blur-2xl opacity-20 animate-pulse z-0" />
      <main className="flex-grow pt-24 relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-28 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary drop-shadow-lg tracking-tight">Simple, Transparent Pricing</h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-10">Choose the perfect plan for your business needs. No hidden fees, just value-driven solutions.</p>
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-primary font-bold' : 'text-neutral-400'}`}>Monthly</span>
              <button 
                className="relative w-16 h-8 bg-primary/20 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                aria-label="Toggle billing period"
              >
                <div 
                  className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingPeriod === 'annual' ? 'translate-x-8' : 'translate-x-0'}`}
                />
              </button>
              <span className={`ml-3 flex items-center ${billingPeriod === 'annual' ? 'text-primary font-bold' : 'text-neutral-400'}`}>Annual <span className="ml-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">20% OFF</span></span>
            </div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className="py-16 -mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-300 group shadow-xl border-2 ${
                    tier.highlighted 
                      ? 'bg-gradient-to-br from-primary/10 via-white to-purple-100 dark:from-primary/20 dark:via-neutral-900 dark:to-purple-950 border-primary scale-105 z-10' 
                      : 'bg-white/80 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800 hover:scale-105'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-base font-bold tracking-wide shadow-lg z-20">Most Popular</div>
                  )}
                  <div className={`p-10 pt-14 flex flex-col items-center`}>
                    <h3 className="text-2xl font-extrabold mb-2 text-center text-primary group-hover:text-purple-700 transition-colors">{tier.name}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-center">{tier.description}</p>
                    <div className="mb-6 flex items-end gap-2">
                      <span className="text-5xl font-extrabold text-neutral-900 dark:text-white">${billingPeriod === 'monthly' ? tier.price.monthly : tier.price.annual}</span>
                      <span className="text-neutral-500 text-lg font-medium">/mo</span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <span className="block text-sm text-primary font-semibold mb-2">Billed annually (${tier.price.annual * 12}/year)</span>
                    )}
                    <ul className="mb-8 w-full space-y-3 text-left">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-neutral-300 dark:text-neutral-700 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-neutral-800 dark:text-neutral-100' : 'text-neutral-400 dark:text-neutral-600'}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`w-full py-3 rounded-xl font-bold text-lg shadow transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                        tier.highlighted
                          ? 'bg-primary text-white hover:bg-purple-700'
                          : 'bg-white border border-primary text-primary hover:bg-primary/10'
                      }`}
                    >
                      {tier.ctaText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Custom Projects */}
        <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 dark:from-blue-950 dark:via-neutral-950 dark:to-purple-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold mb-6 text-primary drop-shadow">Need a Custom Solution?</h2>
              <p className="text-xl text-neutral-700 dark:text-neutral-200 mb-8">We understand that every business is unique. Contact us for a tailored solution that meets your specific requirements.</p>
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 bg-primary text-white rounded-full hover:bg-purple-700 transition-all duration-300 font-bold text-lg shadow-lg"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </section>
        {/* FAQs */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold mb-12 text-center text-primary drop-shadow">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm bg-white/80 dark:bg-neutral-900/80"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left bg-white/90 dark:bg-neutral-900/90 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={expandedFaq === index}
                    >
                      <span className="font-bold text-lg text-neutral-900 dark:text-white">{faq.question}</span>
                      <HelpCircle 
                        className={`w-6 h-6 text-primary transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="p-6 pt-0 bg-white/90 dark:bg-neutral-900/90">
                        <p className="text-neutral-700 dark:text-neutral-200 text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-neutral-700 dark:text-neutral-200 mb-4">Still have questions?</p>
                <a 
                  href="/contact" 
                  className="text-primary font-bold hover:underline transition-colors"
                >
                  Contact our friendly team
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow">Ready to Transform Your Digital Presence?</h2>
              <p className="text-2xl text-white/90 mb-8">Join hundreds of businesses who trust TechBros for their technology needs.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="px-10 py-4 bg-white text-primary rounded-full hover:bg-primary/10 transition-colors duration-300 font-bold text-lg shadow"
                >
                  Get Started Today
                </a>
                <a 
                  href="/portfolio" 
                  className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-bold text-lg shadow"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
