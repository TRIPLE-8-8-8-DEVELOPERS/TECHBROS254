
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-tech-500" />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: May 9, 2025
          </p>
          <Separator className="mb-8" />
        </motion.div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section>
            <h2 id="agreement">Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement made between you and TechBros ("we," "us," or "our") concerning your access to and use of our website and services.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="changes">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="services">Services</h2>
            <p>
              Our services are designed to provide technology solutions for businesses. We offer a variety of services, including but not limited to software development, web development, mobile app development, cloud solutions, and IT consulting.
            </p>
            <p>
              We reserve the right to withdraw or amend our services and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of our services are unavailable at any time or for any period.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="account">User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password. You agree not to disclose your password to any third party.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="prohibited">Prohibited Uses</h2>
            <p>
              You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:
            </p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our services, or which may harm us or users of our services.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 id="ip">Intellectual Property</h2>
            <p>
              Our services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by us, our licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms permit you to use our services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="liability">Limitation of Liability</h2>
            <p>
              In no event will we, our affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our services, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="indemnification">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless us, our affiliates, licensors, and service providers, and our and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="governing-law">Governing Law</h2>
            <p>
              These Terms and your use of our services will be governed by and construed in accordance with the laws of the State of New York, without giving effect to any choice or conflict of law provision or rule.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="contact">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: techbroske@gmail.com</li>
              <li>By phone: +1 (212) 555-1234</li>
              <li>By mail: 350 Fifth Avenue, New York, NY 10118, USA</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
