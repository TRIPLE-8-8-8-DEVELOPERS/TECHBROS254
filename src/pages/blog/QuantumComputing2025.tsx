import React from "react";
import { Link } from "react-router-dom";

const BlogQuantumComputing2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Quantum Computing: Breaking Barriers in 2025</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=80&q=80" alt="Dr. Sarah Chen" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Dr. Sarah Chen</div>
          <div className="text-xs text-neutral-500">May 25, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80" alt="Quantum Computing" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          2025 marks a pivotal year in quantum computing, with breakthroughs in error correction, qubit stability, and practical applications. As quantum systems become more reliable and accessible, we're seeing the first wave of quantum advantage in real-world scenarios.
        </p>
        <h2>Major Breakthroughs</h2>
        <p>
          Recent advances have transformed the quantum landscape:
        </p>
        <ul>
          <li>1000+ stable qubit systems achieved</li>
          <li>Error correction rates below 0.1%</li>
          <li>Room-temperature quantum processors</li>
          <li>Quantum-classical hybrid algorithms</li>
        </ul>
        <h2>Industry Applications</h2>
        <p>
          Quantum computing is now solving real business problems:
        </p>
        <ul>
          <li>Financial risk modeling and optimization</li>
          <li>Drug discovery and molecular simulation</li>
          <li>Climate modeling and weather prediction</li>
          <li>Supply chain optimization</li>
        </ul>
        <h2>Quantum Software Development</h2>
        <p>
          The quantum software ecosystem has matured significantly:
        </p>
        <ul>
          <li>High-level quantum programming languages</li>
          <li>Cloud-based quantum computing platforms</li>
          <li>Quantum machine learning frameworks</li>
          <li>Quantum algorithm libraries</li>
        </ul>
        <blockquote>
          "We're no longer asking if quantum computers will be practical, but rather how quickly we can scale their impact." — Dr. Sarah Chen
        </blockquote>
        <h2>Future Outlook</h2>
        <p>
          Looking ahead, quantum computing is poised to revolutionize industries from pharmaceuticals to renewable energy, while raising new questions about cybersecurity and computational supremacy.
        </p>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#QuantumComputing #Technology #Innovation</span>
      </div>
    </article>
  </main>
);

export default BlogQuantumComputing2025;
