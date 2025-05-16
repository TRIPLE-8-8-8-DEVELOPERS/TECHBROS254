import React from "react";
import { Link } from "react-router-dom";

const BlogWomenInTech2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Women in Tech: Breaking Barriers in 2025</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80" alt="Nia Johnson" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Nia Johnson</div>
          <div className="text-xs text-neutral-500">May 12, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Women in Tech" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>Women are leading the way in AI, engineering, and entrepreneurship. Meet the trailblazers, learn about new initiatives, and see how the industry is changing for the better.</p>
        <h2>Trailblazers to Watch</h2>
        <ul>
          <li>Innovators in AI and robotics</li>
          <li>Founders of successful tech startups</li>
          <li>Leaders in diversity and inclusion</li>
        </ul>
        <h2>Industry Initiatives</h2>
        <ul>
          <li>Mentorship and scholarship programs</li>
          <li>Inclusive hiring and workplace policies</li>
        </ul>
        <blockquote>"Diversity is the engine of innovation. The future of tech is inclusive." — Nia Johnson</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#WomenInTech #Diversity #2025</span>
      </div>
    </article>
  </main>
);

export default BlogWomenInTech2025;
