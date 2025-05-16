import React from "react";
import { Link } from "react-router-dom";

const Blog5GBeyond2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">5G and Beyond: The Next Leap in Connectivity</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80" alt="Ravi Desai" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Ravi Desai</div>
          <div className="text-xs text-neutral-500">May 16, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="5G and Beyond" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>5G is revolutionizing how we connect, but the next wave—6G, satellite internet, and edge networking—promises even more. In this article, we explore the technologies, use cases, and global impact of next-gen connectivity.</p>
        <h2>What Comes After 5G?</h2>
        <ul>
          <li>6G research is underway, aiming for terabit speeds and ultra-low latency</li>
          <li>Satellite internet (Starlink, OneWeb) is bringing broadband to remote areas</li>
          <li>Edge networking is enabling real-time data processing at the source</li>
        </ul>
        <h2>Impact on Society</h2>
        <ul>
          <li>Smart cities and autonomous vehicles</li>
          <li>Remote healthcare and education</li>
          <li>Global digital inclusion</li>
        </ul>
        <blockquote>"The next leap in connectivity will make the world smaller, smarter, and more inclusive." — Ravi Desai</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#5G #6G #Connectivity</span>
      </div>
    </article>
  </main>
);

export default Blog5GBeyond2025;
