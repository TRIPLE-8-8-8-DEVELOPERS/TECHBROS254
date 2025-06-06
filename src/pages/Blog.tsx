import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import BlogAIAgents2025 from "./blog/AIAgents2025";
import BlogQuantumComputing2025 from "./blog/QuantumComputing2025";
import BlogReactServerComponents from "./blog/ReactServerComponents";
import BlogEdgeAI2025 from "./blog/EdgeAI2025";
import BlogOpenSource2025 from "./blog/OpenSource2025";
import BlogTechBrosScalePlus from "./blog/TechBrosScalePlus";
import BlogServerless2025 from "./blog/Serverless2025";

const techBlogs = [
  {
    title: "AI Agents: The Next Wave of Automation in 2025",
    date: "May 15, 2025",
    author: "Jane Kim",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    excerpt: "Explore how AI agents are revolutionizing business workflows, from customer support to code generation. Discover the latest breakthroughs and what to expect in the coming year.",
    link: "/blog/ai-agents-2025"
  },
  {
    title: "Quantum Computing: Hype vs. Reality in 2025",
    date: "May 10, 2025",
    author: "Dr. Alex Rivera",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    excerpt: "Quantum computers are making headlines, but what can they really do today? We break down the latest research, real-world applications, and what developers should know.",
    link: "/blog/quantum-computing-2025"
  },
  {
    title: "React Server Components: A Game Changer for Web Apps",
    date: "May 2, 2025",
    author: "Priya Patel",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    excerpt: "React Server Components are now stable! Learn how this new paradigm can supercharge your app performance and developer experience.",
    link: "/blog/react-server-components"
  },
  {
    title: "The Rise of Edge AI: Smarter Devices Everywhere",
    date: "April 28, 2025",
    author: "Samuel Lee",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Edge AI is bringing intelligence to IoT and mobile devices. We look at the latest chips, frameworks, and use cases powering the next generation of smart tech.",
    link: "/blog/edge-ai-2025"
  },
  {
    title: "Open Source in 2025: The Most Exciting Projects to Watch",
    date: "April 20, 2025",
    author: "Maria Gomez",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    excerpt: "From new JavaScript frameworks to AI toolkits, open source is thriving. Here are the projects making waves this year and how you can contribute.",
    link: "/blog/open-source-2025"
  },
  {
    title: "TechBros Launches Scale+ Package for Startups",
    date: "April 10, 2025",
    author: "TechBros Team",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Our new Scale+ package is designed to help startups grow faster with advanced cloud, AI, and product design services. See what's included and how to get started!",
    link: "/blog/techbros-scale-plus"
  },
  {
    title: "The Future of WebAssembly: Beyond the Browser",
    date: "May 16, 2025",
    author: "Liam Chen",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    excerpt: "WebAssembly is moving beyond browsers into serverless, IoT, and blockchain. Discover the latest use cases and what this means for developers.",
    link: "/blog/webassembly-future"
  },
  {
    title: "How LLMs Are Changing Software Engineering",
    date: "May 14, 2025",
    author: "Ava Robinson",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    excerpt: "Large Language Models are now writing, reviewing, and even architecting code. We explore the tools, risks, and opportunities for dev teams.",
    link: "/blog/llms-software-engineering"
  },
  {
    title: "Design Systems in 2025: AI, Automation, and Accessibility",
    date: "May 12, 2025",
    author: "Noah Williams",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    excerpt: "Modern design systems are powered by AI and automation, making accessibility and consistency easier than ever. See the latest trends and tools.",
    link: "/blog/design-systems-2025"
  },
  {
    title: "The Green Cloud: Sustainable Tech in the Age of AI",
    date: "May 8, 2025",
    author: "Sophia Müller",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    excerpt: "Cloud providers are racing to reduce carbon footprints. Learn how AI, renewables, and new architectures are making tech greener.",
    link: "/blog/green-cloud-ai"
  },
  {
    title: "Cybersecurity in 2025: Defending Against AI-Powered Threats",
    date: "May 5, 2025",
    author: "Elena Petrova",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80",
    excerpt: "AI is both a weapon and a shield in cybersecurity. We break down the latest threats, defense strategies, and what every business should know.",
    link: "/blog/cybersecurity-2025"
  },
  {
    title: "Remote Work 3.0: The Tech Shaping Distributed Teams",
    date: "May 1, 2025",
    author: "Carlos Mendes",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "From virtual offices to AI-driven productivity tools, remote work is evolving fast. Here’s how top companies are building the future of work.",
    link: "/blog/remote-work-3"
  },
  {
    title: "The No-Code/Low-Code Revolution: 2025 Update",
    date: "April 27, 2025",
    author: "Fatima Al-Farsi",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt: "No-code and low-code platforms are more powerful than ever. We review the best tools, real-world success stories, and what’s next for citizen developers.",
    link: "/blog/no-code-2025"
  },
  {
    title: "Tech for Good: Social Impact Startups to Watch",
    date: "April 22, 2025",
    author: "Grace Okafor",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    excerpt: "Meet the startups using technology to solve real-world problems, from climate change to education and healthcare. Inspiring stories and lessons learned.",
    link: "/blog/tech-for-good-2025"
  },
  {
    title: "The State of AR/VR: Immersive Tech in Everyday Life",
    date: "April 18, 2025",
    author: "Maya Singh",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "AR and VR are no longer just for gaming. Explore how immersive tech is transforming retail, healthcare, and remote collaboration.",
    link: "/blog/ar-vr-2025"
  },
  {
    title: "Next-Gen Databases: Speed, Scale, and AI Integration",
    date: "April 15, 2025",
    author: "Oliver Zhang",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt: "From vector search to real-time analytics, databases are evolving fast. We review the most exciting new tech and what it means for developers.",
    link: "/blog/next-gen-databases"
  },
  {
    title: "5G and Beyond: The Next Leap in Connectivity",
    date: "May 16, 2025",
    author: "Ravi Desai",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt: "5G is just the beginning. Discover how 6G, satellite internet, and edge networking are reshaping the digital landscape for everyone.",
    link: "/blog/5g-beyond-2025"
  },
  {
    title: "The Ethics of AI: Building Responsible Technology",
    date: "May 15, 2025",
    author: "Dr. Emily Carter",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    excerpt: "As AI becomes more powerful, ethical questions grow. We explore frameworks, real-world dilemmas, and how to build tech that benefits all.",
    link: "/blog/ethics-of-ai-2025"
  },
  {
    title: "Composable Commerce: The Future of Online Retail",
    date: "May 14, 2025",
    author: "Isabella Rossi",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Composable commerce lets brands build flexible, best-in-class e-commerce experiences. See how APIs, headless CMS, and microservices are changing the game.",
    link: "/blog/composable-commerce-2025"
  },
  {
    title: "The Rise of Digital Twins in Industry 4.0",
    date: "May 13, 2025",
    author: "Lucas Weber",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    excerpt: "Digital twins are revolutionizing manufacturing, logistics, and smart cities. Learn how virtual replicas are driving efficiency and innovation.",
    link: "/blog/digital-twins-2025"
  },
  {
    title: "Women in Tech: Breaking Barriers in 2025",
    date: "May 12, 2025",
    author: "Nia Johnson",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    excerpt: "Women are leading the way in AI, engineering, and entrepreneurship. Meet the trailblazers and discover how the industry is changing for the better.",
    link: "/blog/women-in-tech-2025"
  },
  {
    title: "Zero Trust Security: Protecting Data in a Remote World",
    date: "May 11, 2025",
    author: "Ahmed El-Sayed",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Zero trust is the new standard for cybersecurity. Find out how organizations are implementing it to secure remote teams and cloud infrastructure.",
    link: "/blog/zero-trust-security-2025"
  },
  {
    title: "The API Economy: Monetizing Digital Services",
    date: "May 10, 2025",
    author: "Sofia Martinez",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    excerpt: "APIs are powering new business models and revenue streams. Explore the latest trends, platforms, and success stories in the API economy.",
    link: "/blog/api-economy-2025"
  },
  {
    title: "Tech in Africa: Innovation on the Rise",
    date: "May 9, 2025",
    author: "Kwame Mensah",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80",
    excerpt: "African startups are making global headlines in fintech, healthtech, and edtech. Discover the companies and leaders to watch in 2025.",
    link: "/blog/tech-in-africa-2025"
  },
  {
    title: "The Next Big Thing in Wearables: Health, AR, and More",
    date: "May 8, 2025",
    author: "Hiro Tanaka",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Wearables are evolving fast, with new sensors, AR features, and health applications. See what’s coming to your wrist and beyond.",
    link: "/blog/wearables-2025"
  },
  {
    title: "Serverless 2.0: The Evolution of Cloud Computing",
    date: "May 7, 2025",
    author: "Marta Kowalski",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt: "Serverless is getting smarter, faster, and more affordable. Learn about the new platforms, use cases, and how to get started in 2025.",
    link: "/blog/serverless-2025"
  },
  {
    title: "The Rise of WebAssembly and Edge Computing",
    date: "June 4, 2025",
    author: "David Chen",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    excerpt: "WebAssembly is revolutionizing how we think about performance and portability in web applications. Discover the latest developments and real-world use cases.",
    link: "/blog/webassembly-edge-2025"
  },
  {
    title: "Blockchain in Enterprise: Beyond Cryptocurrency",
    date: "June 3, 2025",
    author: "Maria Santos",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "From supply chain management to digital identity, enterprises are finding innovative uses for blockchain technology. Learn about the transformative applications.",
    link: "/blog/blockchain-enterprise-2025"
  },
  {
    title: "The Future of DevOps: GitOps and Platform Engineering",
    date: "June 2, 2025",
    author: "James Wilson",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Explore how GitOps and Platform Engineering are reshaping the DevOps landscape. Get insights into tools, practices, and team structures.",
    link: "/blog/devops-future-2025"
  },
  {
    title: "Sustainable Tech: Green Computing Initiatives",
    date: "June 1, 2025",
    author: "Emma Green",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    excerpt: "How tech companies are reducing their carbon footprint through innovative solutions in data centers, software optimization, and renewable energy.",
    link: "/blog/sustainable-tech-2025"
  },
  {
    title: "Progressive Web Apps in 2025",
    date: "May 31, 2025",
    author: "Alex Turner",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    excerpt: "PWAs are becoming the new standard for web applications. Learn about new capabilities, best practices, and success stories.",
    link: "/blog/pwa-2025"
  },
  {
    title: "The Evolution of TypeScript and JavaScript",
    date: "May 30, 2025",
    author: "Sarah Lee",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    excerpt: "TypeScript continues to transform JavaScript development. Discover the latest features, tooling improvements, and migration strategies.",
    link: "/blog/typescript-evolution-2025"
  },
  {
    title: "Micro-Frontends: Scaling Frontend Development",
    date: "May 29, 2025",
    author: "Thomas Schmidt",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80",
    excerpt: "How large organizations are using micro-frontends to scale their development teams and applications. Best practices and implementation strategies.",
    link: "/blog/micro-frontends-2025"
  },
  {
    title: "Machine Learning Operations (MLOps)",
    date: "May 28, 2025",
    author: "Dr. Rachel Kim",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt: "MLOps is bridging the gap between ML development and operations. Learn about the tools, practices, and challenges in productionizing ML models.",
    link: "/blog/mlops-2025"
  },
  {
    title: "Real-time Applications with WebSockets and WebRTC",
    date: "May 27, 2025",
    author: "Carlos Rodriguez",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    excerpt: "Building real-time applications is easier than ever. Explore the latest protocols, frameworks, and best practices for live experiences.",
    link: "/blog/realtime-apps-2025"
  },
  {
    title: "Cross-Platform Development with Flutter",
    date: "May 26, 2025",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    excerpt: "Flutter is transforming mobile and desktop development. See how teams are using it to build beautiful, performant applications across platforms.",
    link: "/blog/flutter-2025"
  },
  {
    title: "Serverless Computing in 2025: Beyond Functions",
    date: "June 6, 2025",
    author: "Michael Torres",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover how serverless computing has evolved beyond FaaS to enable building entire applications without infrastructure management.",
    link: "/blog/serverless-2025"
  }
];

const Blog = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollProgress />
    <Navbar />
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-4 text-primary">TechBros Blog</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl">
        Stay up to date with the latest trends, news, and insights in technology, software development, AI, and the startup world. Our team and guest experts share deep dives, tutorials, and industry analysis every week.
      </p>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techBlogs.map((blog) => (
          <article key={blog.title} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.025] transition-transform border border-primary/10">
            <Link to={blog.link} className="block h-48 w-full overflow-hidden">
              <img src={blog.image} alt={blog.title} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
            </Link>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                <span>{blog.date}</span>
                <span>•</span>
                <span>By {blog.author}</span>
              </div>
              <Link to={blog.link} className="font-bold text-xl text-primary hover:text-purple-700 mb-2 line-clamp-2">
                {blog.title}
              </Link>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 line-clamp-3">{blog.excerpt}</p>
              <Link to={blog.link} className="mt-auto text-vibrant-purple font-semibold hover:underline">Read more →</Link>
            </div>
          </article>
        ))}
      </section>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-2 text-primary">Want more?</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">We publish new articles every week. Subscribe to our newsletter for the latest updates, tips, and exclusive content!</p>
        <Link to="/newsletter" className="inline-block bg-vibrant-purple text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-purple-700 transition">Subscribe Now</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Blog;
