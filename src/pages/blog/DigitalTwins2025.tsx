import React from "react";
import { Link } from "react-router-dom";

const BlogDigitalTwins2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">The Rise of Digital Twins in Industry 4.0</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=80&q=80" alt="Lucas Weber" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Lucas Weber</div>
          <div className="text-xs text-neutral-500">May 13, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Digital Twins" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>Digital twins—virtual replicas of physical systems—are revolutionizing manufacturing, logistics, and smart cities. Learn how they drive efficiency, innovation, and predictive maintenance.</p>
        <h2>How Digital Twins Work</h2>
        <ul>
          <li>Real-time data from sensors and IoT devices</li>
          <li>Simulation and analytics for optimization</li>
          <li>Remote monitoring and control</li>
        </ul>
        <h2>Industry 4.0 Use Cases</h2>
        <ul>
          <li>Smart factories and supply chains</li>
          <li>Urban planning and infrastructure</li>
        </ul>
        <blockquote>"Digital twins are the backbone of the next industrial revolution." — Lucas Weber</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#DigitalTwins #Industry4 #IoT</span>
      </div>
    </article>
  </main>
);

export default BlogDigitalTwins2025;
