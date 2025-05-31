import React from "react";
import { Link } from "react-router-dom";
import './BlogStyles.css';

const BlogTechBrosScalePlus = () => (
  <main className="blog-container">
    <article>
      <h1 className="blog-title">TechBros Launches Scale+ Package for Startups</h1>
      <div className="blog-author">
        <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=80&q=80" alt="TechBros Team" className="author-image" />
        <div>
          <div className="author-name">TechBros Team</div>
          <div className="author-date">April 10, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80" alt="Scale+ Launch" className="blog-image" />
      <section className="blog-content">
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
