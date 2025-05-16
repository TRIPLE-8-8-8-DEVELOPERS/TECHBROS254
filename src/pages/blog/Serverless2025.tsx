import React from "react";
import { Link } from "react-router-dom";

const BlogServerless2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Serverless 2.0: The Evolution of Cloud Computing</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80" alt="Marta Kowalski" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Marta Kowalski</div>
          <div className="text-xs text-neutral-500">May 7, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Serverless 2025" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>Serverless is getting smarter, faster, and more affordable. Learn about the new platforms, use cases, and how to get started in 2025.</p>
        <h2>What's New in Serverless?</h2>
        <ul>
          <li>Event-driven architectures and microservices</li>
          <li>Edge computing and global distribution</li>
          <li>Cost optimization and observability tools</li>
        </ul>
        <h2>Getting Started</h2>
        <ul>
          <li>Popular platforms: AWS Lambda, Azure Functions, Cloudflare Workers</li>
          <li>Best practices for scaling and security</li>
        </ul>
        <blockquote>"Serverless 2.0 is the foundation for the next decade of cloud innovation." — Marta Kowalski</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#Serverless #Cloud #2025</span>
      </div>
    </article>
  </main>
);

export default BlogServerless2025;
