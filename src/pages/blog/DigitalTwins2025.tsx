import React from "react";
import { Link } from "react-router-dom";
import './BlogStyles.css';

const BlogDigitalTwins2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Digital Twins: Virtual Mirrors of Reality in 2025</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=80&q=80" alt="Sarah Miller" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Sarah Miller</div>
          <div className="text-xs text-neutral-500">June 6, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Digital Twins" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Digital twin technology has matured significantly in 2025, creating virtual replicas of physical assets, processes, and systems that provide unprecedented insights and optimization opportunities across industries.
        </p>
        <h2>Evolution of Digital Twins</h2>
        <p>
          Key technological advances:
        </p>
        <ul>
          <li>Real-time IoT sensor integration</li>
          <li>AI-powered predictive analytics</li>
          <li>High-fidelity 3D visualization</li>
          <li>Cross-platform compatibility</li>
        </ul>
        <h2>Industrial Applications</h2>
        <p>
          Digital twins are transforming various sectors:
        </p>
        <ul>
          <li>Manufacturing process optimization</li>
          <li>Smart building management</li>
          <li>Supply chain visualization</li>
          <li>Urban planning and development</li>
        </ul>
        <h2>Benefits and Impact</h2>
        <p>
          The technology delivers multiple advantages:
        </p>
        <ul>
          <li>Reduced operational costs</li>
          <li>Improved maintenance scheduling</li>
          <li>Enhanced decision-making</li>
          <li>Accelerated product development</li>
        </ul>
        <blockquote>
          "Digital twins are no longer just simulations—they're becoming essential business intelligence tools." — Sarah Miller
        </blockquote>
        <h2>Future Developments</h2>
        <p>
          As we look ahead, digital twins are expanding into new territories, including healthcare, environmental monitoring, and space exploration, promising even more innovative applications and benefits.
        </p>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#DigitalTwins #Innovation #Industry40</span>
      </div>
    </article>
  </main>
);

export default BlogDigitalTwins2025;
