import React from "react";
import { Link } from "react-router-dom";

const BlogTechBrosScalePlus = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">TechBros Launches Scale+ Package for Startups</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=80&q=80" alt="TechBros Team" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">TechBros Team</div>
          <div className="text-xs text-neutral-500">April 10, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80" alt="Scale+ Launch" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          We’re excited to announce the launch of <b>Scale+</b>, our most advanced package for startups and fast-growing companies. Scale+ combines cloud, AI, and product design services to help you accelerate your journey from MVP to market leader.
        </p>
        <h2>What’s Included?</h2>
        <ul>
          <li>Dedicated cloud infrastructure setup and management</li>
          <li>Custom AI solutions for automation and analytics</li>
          <li>UI/UX design sprints and rapid prototyping</li>
          <li>24/7 support and growth consulting</li>
        </ul>
        <h2>Why Scale+?</h2>
        <p>
          Startups need to move fast and scale smart. With Scale+, you get a partner who understands the unique challenges of high-growth tech companies. Our experts work alongside your team to deliver results, not just services.
        </p>
        <blockquote>
          "Scale+ is the launchpad for tomorrow’s unicorns. Let’s build the future together!" — TechBros Team
        </blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#TechBros #ScalePlus #Startups</span>
      </div>
    </article>
  </main>
);

export default BlogTechBrosScalePlus;
