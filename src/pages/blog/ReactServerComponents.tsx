import React from "react";
import { Link } from "react-router-dom";
import './BlogStyles.css';

const BlogReactServerComponents = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">React Server Components: Revolutionizing Web Development</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=80&q=80" alt="Sophia Chen" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Sophia Chen</div>
          <div className="text-xs text-neutral-500">June 6, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=800&q=80" alt="React Development" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          React Server Components (RSC) have transformed how we build web applications, bringing the best of server-side rendering and client-side interactivity together in a seamless way.
        </p>
        <h2>Key Benefits</h2>
        <p>
          Advantages of using Server Components:
        </p>
        <ul>
          <li>Zero-bundle-size server components</li>
          <li>Automatic code splitting</li>
          <li>Direct database access</li>
          <li>Improved initial page load</li>
        </ul>
        <h2>Architecture Patterns</h2>
        <p>
          Best practices for RSC applications:
        </p>
        <ul>
          <li>Streaming server rendering</li>
          <li>Hybrid client-server architecture</li>
          <li>Progressive enhancement</li>
          <li>Smart component boundaries</li>
        </ul>
        <h2>Development Experience</h2>
        <p>
          Tools and frameworks supporting RSC:
        </p>
        <ul>
          <li>Next.js 14 with App Router</li>
          <li>Remix RSC support</li>
          <li>Developer tools and debugging</li>
          <li>Testing utilities for RSC</li>
        </ul>
        <blockquote>
          "Server Components are not just a feature—they're a fundamental shift in how we think about web architecture." — Sophia Chen
        </blockquote>
        <h2>Future Developments</h2>
        <p>
          The React ecosystem continues to evolve with improvements in streaming, caching strategies, and integration with other modern web technologies.
        </p>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#React #WebDev #Innovation</span>
      </div>
    </article>
  </main>
);

export default BlogReactServerComponents;
