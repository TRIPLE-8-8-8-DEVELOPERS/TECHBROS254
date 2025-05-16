import React from "react";
import { Link } from "react-router-dom";

const BlogEthicsOfAI2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">The Ethics of AI: Building Responsible Technology</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=80&q=80" alt="Dr. Emily Carter" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Dr. Emily Carter</div>
          <div className="text-xs text-neutral-500">May 15, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="Ethics of AI" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>AI is transforming society, but with great power comes great responsibility. This article explores ethical frameworks, real-world dilemmas, and how to ensure AI benefits everyone.</p>
        <h2>Key Ethical Issues</h2>
        <ul>
          <li>Bias and fairness in algorithms</li>
          <li>Transparency and explainability</li>
          <li>Privacy and surveillance</li>
          <li>Accountability for AI decisions</li>
        </ul>
        <h2>Building Responsible AI</h2>
        <ul>
          <li>Adopting ethical AI guidelines (EU, IEEE, etc.)</li>
          <li>Human-in-the-loop systems</li>
          <li>Open dialogue between technologists, policymakers, and the public</li>
        </ul>
        <blockquote>"Ethical AI is not a luxury—it's a necessity for a just and equitable future." — Dr. Emily Carter</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#AI #Ethics #ResponsibleTech</span>
      </div>
    </article>
  </main>
);

export default BlogEthicsOfAI2025;
