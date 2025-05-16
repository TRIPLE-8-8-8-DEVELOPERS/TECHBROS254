import React from "react";
import { Link } from "react-router-dom";

const BlogQuantumComputing2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">Quantum Computing: Hype vs. Reality in 2025</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=80&q=80" alt="Dr. Alex Rivera" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Dr. Alex Rivera</div>
          <div className="text-xs text-neutral-500">May 10, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80" alt="Quantum Computing" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Quantum computing has been a buzzword for years, but 2025 is the year we separate hype from reality. With major breakthroughs and new hardware, quantum computers are closer to practical use than ever before.
        </p>
        <h2>What Can Quantum Computers Do Today?</h2>
        <ul>
          <li>Factor small numbers (Shor's algorithm in action!)</li>
          <li>Simulate quantum systems for chemistry and materials science</li>
          <li>Accelerate optimization and machine learning tasks</li>
        </ul>
        <h2>Limitations & Challenges</h2>
        <ul>
          <li>Qubits are still fragile and error-prone</li>
          <li>Quantum advantage is limited to specific problems</li>
          <li>Programming quantum computers requires new skills</li>
        </ul>
        <h2>What Developers Should Know</h2>
        <p>
          The quantum ecosystem is growing: open-source SDKs, cloud quantum services, and hybrid quantum-classical workflows are now accessible. Learning quantum basics is a great investment for the future!
        </p>
        <blockquote>
          "Quantum computing won't replace classical computers, but it will unlock new possibilities for science and industry." — Dr. Alex Rivera
        </blockquote>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#Quantum #Computing #2025</span>
      </div>
    </article>
  </main>
);

export default BlogQuantumComputing2025;
