import React from "react";
import { Link } from "react-router-dom";

const BlogOpenSource2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Open Source in 2025: Community-Driven Innovation</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=80&q=80" alt="Marcus Zhang" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Marcus Zhang</div>
          <div className="text-xs text-neutral-500">June 1, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Open Source" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          2025 has become a landmark year for open source software, with unprecedented collaboration between individuals, corporations, and governments. The landscape has evolved from simple code sharing to comprehensive ecosystem development.
        </p>
        <h2>Key Trends</h2>
        <p>
          Several trends are reshaping open source development:
        </p>
        <ul>
          <li>AI-assisted code contribution and review</li>
          <li>Blockchain-based governance models</li>
          <li>Sustainable funding through digital patronage</li>
          <li>Cross-border collaboration platforms</li>
        </ul>
        <h2>Enterprise Adoption</h2>
        <p>
          Organizations are embracing open source in new ways:
        </p>
        <ul>
          <li>Inner source practices in large companies</li>
          <li>Open core business models gaining traction</li>
          <li>Security-first development approaches</li>
          <li>Collaborative industry standards</li>
        </ul>
        <h2>Community Initiatives</h2>
        <p>
          The open source community is tackling major challenges:
        </p>
        <ul>
          <li>Climate change mitigation tools</li>
          <li>Privacy-preserving technologies</li>
          <li>Educational resources and platforms</li>
          <li>Healthcare data standards</li>
        </ul>
        <blockquote>
          "Open source is no longer just about code—it's about creating a more equitable and innovative digital future." — Marcus Zhang
        </blockquote>
        <h2>Looking Ahead</h2>
        <p>
          As we move forward, open source continues to drive innovation in emerging fields like quantum computing, edge AI, and sustainable technology, while fostering a more inclusive and collaborative tech ecosystem.
        </p>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#OpenSource #Innovation #Community</span>
      </div>
    </article>
  </main>
);

export default BlogOpenSource2025;
