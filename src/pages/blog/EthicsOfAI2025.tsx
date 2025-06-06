import React from "react";
import { Link } from "react-router-dom";

const BlogEthicsOfAI2025 = () => (
  <main className="container mx-auto px-4 py-12 max-w-3xl">
    <article>
      <h1 className="text-4xl font-extrabold mb-4 text-primary">The Ethics of AI: Navigating the Future in 2025</h1>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=80&q=80" alt="Dr. Maya Patel" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-primary">Dr. Maya Patel</div>
          <div className="text-xs text-neutral-500">June 5, 2025</div>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=80" alt="AI Ethics" className="rounded-2xl shadow mb-8 w-full object-cover h-64" />
      <section className="prose dark:prose-invert max-w-none mb-8">
        <p>
          As AI systems become increasingly integrated into our daily lives, 2025 has brought crucial developments in AI ethics, governance, and responsible innovation. The conversation has shifted from theoretical frameworks to practical implementation.
        </p>
        <h2>Key Ethical Considerations</h2>
        <p>
          Major ethical challenges being addressed:
        </p>
        <ul>
          <li>Algorithmic bias and fairness</li>
          <li>AI transparency and explainability</li>
          <li>Privacy and data rights</li>
          <li>Environmental impact of AI systems</li>
        </ul>
        <h2>Global Governance Framework</h2>
        <p>
          International efforts to regulate AI:
        </p>
        <ul>
          <li>Cross-border AI governance standards</li>
          <li>Ethical AI certification programs</li>
          <li>AI impact assessment requirements</li>
          <li>Rights-based approach to AI development</li>
        </ul>
        <h2>Industry Best Practices</h2>
        <p>
          Organizations are adopting new approaches:
        </p>
        <ul>
          <li>Ethics-by-design frameworks</li>
          <li>Diverse AI development teams</li>
          <li>Stakeholder inclusion in AI deployment</li>
          <li>Regular ethical audits of AI systems</li>
        </ul>
        <blockquote>
          "The ethical implementation of AI isn't just about following rules—it's about creating a future that reflects our highest values." — Dr. Maya Patel
        </blockquote>
        <h2>Future Considerations</h2>
        <p>
          As AI capabilities continue to expand, we must remain vigilant in ensuring these powerful tools serve humanity's best interests while protecting individual rights and promoting social good.
        </p>
      </section>
      <div className="flex justify-between items-center mt-8">
        <Link to="/blog" className="text-vibrant-purple font-semibold hover:underline">← Back to Blog</Link>
        <span className="text-neutral-400 text-sm">#AI #Ethics #Technology</span>
      </div>
    </article>
  </main>
);

export default BlogEthicsOfAI2025;
