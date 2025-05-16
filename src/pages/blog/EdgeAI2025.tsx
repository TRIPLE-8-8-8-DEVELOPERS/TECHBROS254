import React from "react";
import { Link } from "react-router-dom";

const BlogEdgeAI2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">The Rise of Edge AI: Smarter Devices Everywhere</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80" alt="Samuel Lee" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Samuel Lee</div>
          <div className="text-xs text-neutral-500">April 28, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Edge AI" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Edge AI is revolutionizing the way devices process data, bringing intelligence closer to where it’s needed most. In 2025, we’re seeing smarter IoT, mobile, and embedded systems thanks to advances in hardware and software.
        </p>
        <h2>What is Edge AI?</h2>
        <p>
          Edge AI refers to running artificial intelligence algorithms locally on a device, rather than relying on cloud servers. This enables real-time decision making, lower latency, and improved privacy.
        </p>
        <h2>Latest Developments</h2>
        <ul>
          <li>New AI chips from NVIDIA, Apple, and Google</li>
          <li>Open-source frameworks for on-device ML (TensorFlow Lite, ONNX, Edge Impulse)</li>
          <li>5G and Wi-Fi 7 enabling faster, more reliable connectivity</li>
        </ul>
        <h2>Use Cases</h2>
        <ul>
          <li>Smart cameras with real-time object detection</li>
          <li>Wearables that monitor health and fitness</li>
          <li>Industrial automation and predictive maintenance</li>
        </ul>
        <blockquote>
          "Edge AI is making devices not just connected, but truly intelligent." — Samuel Lee
        </blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#EdgeAI #IoT #2025</span>
      </div>
    </article>
  </main>
);

export default BlogEdgeAI2025;
