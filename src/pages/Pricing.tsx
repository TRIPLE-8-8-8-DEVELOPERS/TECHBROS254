
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

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups.",
    price: {
      monthly: 499,
      annual: 399
    },
    features: [
      { text: "Custom website design", included: true },
      { text: "Mobile responsive", included: true },
      { text: "5 pages website", included: true },
      { text: "Basic SEO optimization", included: true },
      { text: "Contact form integration", included: true },
      { text: "Social media integration", included: true },
      { text: "3 rounds of revisions", included: true },
      { text: "24/7 support", included: false },
      { text: "E-commerce functionality", included: false },
      { text: "Custom applications", included: false }
    ],
    ctaText: "Get Started"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing more features.",
    price: {
      monthly: 999,
      annual: 799
    },
    highlighted: true,
    features: [
      { text: "Custom website design", included: true },
      { text: "Mobile responsive", included: true },
      { text: "10 pages website", included: true },
      { text: "Advanced SEO optimization", included: true },
      { text: "Contact form integration", included: true },
      { text: "Social media integration", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "24/7 support", included: true },
      { text: "Basic E-commerce (up to 50 products)", included: true },
      { text: "Custom applications", included: false }
    ],
    ctaText: "Get Started"
  },
  {
    name: "Enterprise",
    description: "For large businesses with complex requirements.",
    price: {
      monthly: 1999,
      annual: 1599
    },
    features: [
      { text: "Custom website design", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Unlimited pages", included: true },
      { text: "Advanced SEO optimization", included: true },
      { text: "Contact form integration", included: true },
      { text: "Social media integration", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Full E-commerce functionality", included: true },
      { text: "Custom applications", included: true }
    ],
    ctaText: "Contact Sales"
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
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tech-50 via-tech-100 to-tech-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-tech-800">Simple, Transparent Pricing</h1>
              <p className="text-lg text-gray-700 mb-10">
                Choose the perfect plan for your business needs. No hidden fees, just value-driven solutions.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-tech-600 font-medium' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button 
                  className="relative w-14 h-7 bg-tech-300 rounded-full p-1 transition-colors duration-300"
                  onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                >
                  <div 
                    className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-0'
                    }`} 
                  />
                </button>
                <span className={`ml-3 flex items-center ${billingPeriod === 'annual' ? 'text-tech-600 font-medium' : 'text-gray-500'}`}>
                  Annual
                  <span className="ml-2 bg-tech-400 text-white text-xs font-bold px-2 py-1 rounded-full">20% OFF</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Tiers */}
        <section className="py-16 -mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    tier.highlighted 
                      ? 'bg-white border-2 border-tech-400 shadow-xl transform md:-translate-y-4' 
                      : 'bg-white border border-gray-200 shadow-sm hover:shadow'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-tech-400 text-white text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${tier.highlighted ? 'pt-10' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2 text-left">{tier.name}</h3>
                    <p className="text-gray-600 mb-6 text-left">{tier.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${billingPeriod === 'monthly' ? tier.price.monthly : tier.price.annual}</span>
                      <span className="text-gray-500">/mo</span>
                      {billingPeriod === 'annual' && (
                        <span className="block text-sm text-tech-500 mt-1">
                          Billed annually (${tier.price.annual * 12}/year)
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-left">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-tech-500 mt-0.5 mr-2 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                            )}
                            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      className={`w-full py-3 rounded-lg font-medium ${
                        tier.highlighted
                          ? 'bg-tech-400 text-white hover:bg-tech-500'
                          : 'bg-white border border-tech-400 text-tech-600 hover:bg-tech-50'
                      } transition-colors duration-300`}
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We understand that every business is unique. Contact us for a tailored solution that meets your specific requirements.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-tech-400 text-white rounded-full hover:bg-tech-500 transition-all duration-300 font-medium"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={expandedFaq === index}
                    >
                      <span className="font-medium text-lg">{faq.question}</span>
                      <HelpCircle 
                        className={`w-5 h-5 text-tech-400 transform transition-transform duration-300 ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedFaq === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="p-5 pt-0 bg-white">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-700 mb-4">Still have questions?</p>
                <a 
                  href="/contact" 
                  className="text-tech-500 font-medium hover:text-tech-600 transition-colors"
                >
                  Contact our friendly team
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-tech-400 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl text-white/90 mb-8">
                Join hundreds of businesses who trust TechBros for their technology needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-tech-500 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
                >
                  Get Started Today
                </a>
                <a 
                  href="/portfolio" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium"
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
