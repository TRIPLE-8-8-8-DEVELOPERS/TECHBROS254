import React from "react";
import { Link } from "react-router-dom";
import './BlogStyles.css';

const BlogWearables2025 = () => (
  <main className="blog-container">
    <article>
      <h1 className="blog-title">The Next Big Thing in Wearables: Health, AR, and More</h1>
      <div className="blog-author">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80" alt="Hiro Tanaka" className="author-image" />
        <div>
          <div className="author-name">Hiro Tanaka</div>
          <div className="author-date">May 8, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Wearables 2025" className="blog-image" />
      <section className="blog-content">
        <p>Wearables are evolving fast, with new sensors, AR features, and health applications. See what’s coming to your wrist and beyond in 2025.</p>
        <h2>Trends to Watch</h2>
        <ul>
          <li>Health monitoring: Blood sugar, heart health, and more</li>
          <li>Augmented reality glasses and headsets</li>
          <li>Integration with smart home and IoT devices</li>
        </ul>
        <h2>Market Leaders</h2>
        <ul>
          <li>Apple, Samsung, and new startups</li>
        </ul>
        <blockquote>"Wearables are becoming the remote control for our digital lives." — Hiro Tanaka</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#Wearables #AR #HealthTech</span>
      </div>
    </article>
  </main>
);

export default BlogWearables2025;
