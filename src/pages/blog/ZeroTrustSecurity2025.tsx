import React from "react";
import { Link } from "react-router-dom";

const BlogZeroTrustSecurity2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Zero Trust Security: Protecting Data in a Remote World</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80" alt="Ahmed El-Sayed" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Ahmed El-Sayed</div>
          <div className="text-xs text-neutral-500">May 11, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Zero Trust Security" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>Zero trust is the new standard for cybersecurity, especially in a world of remote work and cloud infrastructure. Learn how organizations are implementing zero trust to protect data and users.</p>
        <h2>Zero Trust Principles</h2>
        <ul>
          <li>Never trust, always verify</li>
          <li>Least privilege access</li>
          <li>Continuous authentication and monitoring</li>
        </ul>
        <h2>Implementation Strategies</h2>
        <ul>
          <li>Identity and access management (IAM)</li>
          <li>Micro-segmentation of networks</li>
          <li>Real-time threat detection</li>
        </ul>
        <blockquote>"Zero trust is not a product—it's a mindset for modern security." — Ahmed El-Sayed</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#Security #ZeroTrust #RemoteWork</span>
      </div>
    </article>
  </main>
);

export default BlogZeroTrustSecurity2025;
