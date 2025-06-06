import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { Check, HelpCircle, X } from "lucide-react";

// Add animation keyframes
import "../styles/pricing-animations.css";

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
  isOneTime?: boolean;
  maintenanceFee?: number;
  isCustomQuote?: boolean;
  priceRange?: string;
  tagline?: string;
}

// Pricing tiers
const pricingTiers: PricingTier[] = [
  {
    name: "🚀 Launch",
    description: "For startups & visionaries taking their first bold step online.",
    price: {
      monthly: 750,
      annual: 750
    },
    features: [
      { text: "Full Custom Website / Web App (Modern, Mobile-Ready)", included: true },
      { text: "TechBros Brand Starter Pack (Logo, Colors, Fonts)", included: true },
      { text: "Domain & Hosting Setup", included: true },
      { text: "Basic SEO & Speed Optimization", included: true },
      { text: "Delivery in 7 Days", included: true }
    ],
    tagline: "Clean. Functional. Professional. Everything you need to launch with confidence.",
    ctaText: "Start Your Launch",
    isOneTime: true
  },
  {
    name: "🚀 Scale",
    description: "For growing businesses ready to automate, scale, and dominate.",
    price: {
      monthly: 1500,
      annual: 1500
    },
    maintenanceFee: 99,
    highlighted: true,
    features: [
      { text: "Full Custom Website / Web App (Up to 15 pages + dashboard)", included: true },
      { text: "Backend Integration (APIs, Admin Panel, etc.)", included: true },
      { text: "CRM, Payment Gateway, Email Integration", included: true },
      { text: "Copywriting & UX Writing Support", included: true },
      { text: "Speed, Security & SEO Optimization", included: true },
      { text: "Dedicated Tech Support", included: true },
      { text: "Weekly Analytics Report", included: true }
    ],
    tagline: "More than just a website — a system that grows with you.",
    ctaText: "Scale Your Business",
    isOneTime: true
  },
  {
    name: "🧠 Elite Partner Plan",
    description: "For brands building serious platforms — SaaS, marketplaces, or enterprise systems.",
    price: {
      monthly: 3500,
      annual: 3500
    },
    priceRange: "3500",
    features: [
      { text: "Full-Stack Custom Build (Frontend + Backend + DB Architecture)", included: true },
      { text: "Custom Admin Panel, User Roles & Permissions", included: true },
      { text: "Cloud Deployment (AWS, Heroku, Vercel)", included: true },
      { text: "Advanced Features (AI, Chatbots, APIs, Payment Logic)", included: true },
      { text: "Scalable Architecture & Documentation", included: true },
      { text: "Ongoing DevOps, Maintenance & Feature Rollouts", included: true },
      { text: "Dedicated Account Manager", included: true }
    ],
    tagline: "You're not just a client. You're a long-term tech partner.",
    ctaText: "Request Custom Quote",
    isCustomQuote: true
  }
];

// Optional Add-ons
const addOns = [
  { name: "Mobile App (Android/iOS)", price: 999 },
  { name: "AI Chatbot Integration", price: 199 },
  { name: "Branding Overhaul (Brand Book + Visual Identity)", price: 349 },
  { name: "Content & Blog Setup (SEO-ready)", price: 149 },
  { name: "Tech Consultation/Strategy Session", price: 99, unit: "hr" }
];

// Why work with us benefits
const benefits = [
  { icon: "🛠️", title: "100% Custom Solutions", description: "No templates, no shortcuts" },
  { icon: "⏱️", title: "Fast Delivery", description: "Projects delivered in as little as 7 days" },
  { icon: "📊", title: "Strategy-Driven", description: "We build with growth in mind" },
  { icon: "🧑‍💼", title: "Real Support", description: "You're not alone after launch" },
  { icon: "🧬", title: "Scalable Code", description: "Built to evolve as your business grows" }
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
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-emerald-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-400/30 to-yellow-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <main className="flex-grow pt-24 relative z-10">
        {/* Hero Section with 3D effect */}
        <section className="py-20 md:py-28 text-center relative">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4 transform hover:scale-[1.01] transition-transform duration-300">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs. No hidden fees, just value-driven solutions.
              </p>
            </div>

            {/* Modern pricing toggle */}
            <div className="relative inline-flex items-center p-1 rounded-xl bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md shadow-lg border border-neutral-200/50 dark:border-neutral-700/50 mb-12">
              <button 
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  billingPeriod === 'annual'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary dark:bg-primary/30">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards with Glassmorphism */}
        <section className="py-16 -mt-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name}
                  className={`relative rounded-3xl transition-all duration-500 group hover:translate-y-[-8px] ${
                    tier.highlighted 
                      ? 'bg-gradient-to-b from-primary/10 to-purple-100/50 dark:from-primary/20 dark:to-purple-950/50 shadow-2xl shadow-primary/20 dark:shadow-primary/10 border-2 border-primary z-10' 
                      : 'bg-white/80 dark:bg-neutral-900/80 shadow-xl border border-neutral-200/50 dark:border-neutral-700/50'
                  }`}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent dark:from-white/5 backdrop-blur-[2px]" />
                  
                  {tier.highlighted && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg z-20">
                      Most Popular
                    </div>
                  )}

                  <div className="relative p-8 pt-12">
                    {/* Price tag with special styling for one-time payments */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {tier.name}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        {tier.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold text-neutral-900 dark:text-white">
                          ${tier.isCustomQuote ? tier.priceRange : (billingPeriod === 'monthly' ? tier.price.monthly : tier.price.annual)}
                        </span>
                        {!tier.isCustomQuote && (
                          <div className="flex flex-col text-sm text-neutral-500">
                            <span>{tier.isOneTime ? 'One-Time' : '/month'}</span>
                            {tier.maintenanceFee && (
                              <span className="text-primary font-medium">+${tier.maintenanceFee}/mo maintenance</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Features with improved styling */}
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 group/item">
                          <span className="mt-1 flex-shrink-0">
                            <Check className="h-5 w-5 text-primary" />
                          </span>
                          <span className="text-neutral-700 dark:text-neutral-300 group-hover/item:text-primary transition-colors">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tagline */}
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 italic mb-6">{tier.tagline}</p>

                    {/* CTA Button */}
                    <button 
                      className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        tier.highlighted
                          ? 'bg-primary text-white shadow-lg hover:shadow-xl hover:bg-purple-700'
                          : 'bg-white dark:bg-neutral-800 border-2 border-primary text-primary hover:bg-primary hover:text-white'
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

        {/* Add-ons Section with Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Enhance Your Solution
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {addOns.map((addon, index) => (
                  <div key={index} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="text-2xl mb-3">🔧</div>
                    <h3 className="font-semibold mb-2 text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                      {addon.name}
                    </h3>
                    <p className="text-primary font-medium">
                      From ${addon.price}{addon.unit ? `/${addon.unit}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-gradient-to-r from-neutral-100/50 via-white/50 to-neutral-100/50 dark:from-neutral-900/50 dark:via-neutral-950/50 dark:to-neutral-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Why Work With TechBros?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-neutral-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs with better animations */}
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
