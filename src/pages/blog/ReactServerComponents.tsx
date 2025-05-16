import React from "react";
import { Link } from "react-router-dom";

const BlogReactServerComponents = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">React Server Components: A Game Changer for Web Apps</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=80&q=80" alt="Priya Patel" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Priya Patel</div>
          <div className="text-xs text-neutral-500">May 2, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="React Server Components" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          React Server Components (RSC) are now stable and ready for production! This new paradigm allows developers to build faster, more scalable web apps by offloading heavy logic to the server while keeping the client lightweight.
        </p>
        <h2>Why RSC Matters</h2>
        <ul>
          <li>Improved performance: less JavaScript sent to the browser</li>
          <li>Seamless data fetching and streaming UI</li>
          <li>Better developer experience with simplified state management</li>
        </ul>
        <h2>How to Get Started</h2>
        <ol>
          <li>Upgrade to React 19+</li>
          <li>Use frameworks like Next.js or Remix with RSC support</li>
          <li>Refactor components to leverage server-side logic</li>
        </ol>
        <h2>Real-World Impact</h2>
        <p>
          Early adopters report up to 50% faster load times and easier code maintenance. RSC is set to become the new standard for high-performance web apps.
        </p>
        <blockquote>
          "React Server Components are the most exciting thing to happen to frontend in years." — Priya Patel
        </blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#React #WebDev #2025</span>
      </div>
    </article>
  </main>
);

export default BlogReactServerComponents;
