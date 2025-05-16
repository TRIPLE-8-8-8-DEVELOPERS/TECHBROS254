import React from "react";
import { Link } from "react-router-dom";

const BlogComposableCommerce2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Composable Commerce: The Future of Online Retail</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=80&q=80" alt="Isabella Rossi" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Isabella Rossi</div>
          <div className="text-xs text-neutral-500">May 14, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80" alt="Composable Commerce" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>Composable commerce is changing how brands build e-commerce experiences. By combining APIs, headless CMS, and microservices, companies can create flexible, best-in-class solutions.</p>
        <h2>Why Composable?</h2>
        <ul>
          <li>Faster innovation and time-to-market</li>
          <li>Personalized customer journeys</li>
          <li>Easy integration with new tech</li>
        </ul>
        <h2>Real-World Examples</h2>
        <ul>
          <li>Brands using headless Shopify, Contentful, and custom APIs</li>
          <li>Microservices for payments, search, and recommendations</li>
        </ul>
        <blockquote>"Composable commerce is the secret weapon for modern retailers." — Isabella Rossi</blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#Ecommerce #Composable #Retail</span>
      </div>
    </article>
  </main>
);

export default BlogComposableCommerce2025;
