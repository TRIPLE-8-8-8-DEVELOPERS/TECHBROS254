import React from "react";
import { Link } from "react-router-dom";

const BlogWearables2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">The Next Big Thing in Wearables: Health, AR, and More</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80" alt="Hiro Tanaka" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Hiro Tanaka</div>
          <div className="text-xs text-neutral-500">May 8, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Wearables 2025" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
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
