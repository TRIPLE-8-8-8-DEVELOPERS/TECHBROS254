import React from "react";
import { Link } from "react-router-dom";

const BlogOpenSource2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Open Source in 2025: The Most Exciting Projects to Watch</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80" alt="Maria Gomez" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Maria Gomez</div>
          <div className="text-xs text-neutral-500">April 20, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Open Source" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Open source is thriving in 2025, with new projects and communities pushing the boundaries of what’s possible. From JavaScript frameworks to AI toolkits, here are the most exciting projects to watch this year.
        </p>
        <h2>Top Projects</h2>
        <ul>
          <li><b>Astro 4.0</b> – The static site generator with serverless islands</li>
          <li><b>OpenAI Codex 3</b> – Next-gen code generation for all languages</li>
          <li><b>Supabase Edge</b> – Real-time, scalable backend for web and mobile</li>
          <li><b>LangChain.js</b> – Building LLM-powered apps in JavaScript</li>
        </ul>
        <h2>How to Get Involved</h2>
        <ol>
          <li>Find a project that excites you</li>
          <li>Read the contributing guide and join the community</li>
          <li>Start with small issues or documentation</li>
        </ol>
        <blockquote>
          "Open source is where innovation happens. Your next big idea could start here!" — Maria Gomez
        </blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#OpenSource #2025</span>
      </div>
    </article>
  </main>
);

export default BlogOpenSource2025;
