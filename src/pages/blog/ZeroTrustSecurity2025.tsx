import React from "react";
import { Link } from "react-router-dom";
import './BlogStyles.css';

const BlogZeroTrustSecurity2025 = () => (
  <main className="blog-container">
    <article>
      <h1 className="blog-title">Zero Trust Security: Protecting Data in a Remote World</h1>
      <div className="blog-author">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80" alt="Ahmed El-Sayed" className="author-image" />
        <div>
          <div className="author-name">Ahmed El-Sayed</div>
          <div className="author-date">May 11, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Zero Trust Security" className="blog-image" />
      <section className="blog-content">
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
