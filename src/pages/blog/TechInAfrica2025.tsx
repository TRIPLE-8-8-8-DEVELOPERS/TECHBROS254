import React from "react";
import { Link } from "react-router-dom";
import './BlogStyles.css';

const BlogTechInAfrica2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Tech Innovation in Africa: The Digital Renaissance of 2025</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=80&q=80" alt="Zainab Omar" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Zainab Omar</div>
          <div className="text-xs text-neutral-500">May 20, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=800&q=80" alt="Tech in Africa" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Africa's tech ecosystem is experiencing unprecedented growth in 2025, with innovations in fintech, agritech, and renewable energy leading the charge. The continent's unique challenges are spurring creative solutions that are attracting global attention and investment.
        </p>
        <h2>Key Innovation Hubs</h2>
        <p>
          Major tech hubs have emerged across the continent:
        </p>
        <ul>
          <li>Nairobi: East Africa's "Silicon Savannah"</li>
          <li>Lagos: West Africa's fintech powerhouse</li>
          <li>Cape Town: AI and blockchain innovation center</li>
          <li>Kigali: Smart city pioneer</li>
        </ul>
        <h2>Transformative Technologies</h2>
        <p>
          Several technologies are reshaping Africa's digital landscape:
        </p>
        <ul>
          <li>Mobile-first digital banking solutions</li>
          <li>AI-powered agricultural monitoring systems</li>
          <li>Distributed renewable energy networks</li>
          <li>Blockchain for supply chain transparency</li>
        </ul>
        <h2>Impact on Development</h2>
        <p>
          These innovations are driving significant social and economic changes:
        </p>
        <ul>
          <li>Financial inclusion reaching rural communities</li>
          <li>Improved agricultural yields through tech adoption</li>
          <li>Enhanced healthcare delivery via telemedicine</li>
          <li>Creation of high-skilled tech jobs</li>
        </ul>
        <blockquote>
          "Africa isn't just adopting technology—it's creating solutions that the world needs." — Zainab Omar
        </blockquote>
        <h2>Looking Forward</h2>
        <p>
          With growing investment, increasing internet penetration, and a young, tech-savvy population, Africa's tech ecosystem is poised for continued growth and innovation through 2025 and beyond.
        </p>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#Africa #Innovation #Technology</span>
      </div>
    </article>
  </main>
);

export default BlogTechInAfrica2025;
