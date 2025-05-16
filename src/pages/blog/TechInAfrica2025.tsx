import React from "react";
import { Link } from "react-router-dom";

const BlogTechInAfrica2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Tech in Africa: Innovation on the Rise</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=80&q=80" alt="Kwame Mensah" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Kwame Mensah</div>
          <div className="text-xs text-neutral-500">May 9, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80" alt="Tech in Africa" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>African startups are making global headlines in fintech, healthtech, and edtech. Discover the companies and leaders to watch in 2025, and how innovation is transforming the continent.</p>
        <h2>Key Sectors</h2>
        <ul>
          <li>Fintech: Mobile payments and digital banking</li>
          <li>Healthtech: Telemedicine and diagnostics</li>
          <li>Edtech: Online learning platforms</li>
        </ul>
        <h2>Leaders to Watch</h2>
        <ul>
          <li>Flutterwave, Andela, mPharma, and more</li>
        </ul>
        <blockquote>"Africa is not just catching up—it's leading the next wave of tech innovation." — Kwame Mensah</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#Africa #Innovation #2025</span>
      </div>
    </article>
  </main>
);

export default BlogTechInAfrica2025;
