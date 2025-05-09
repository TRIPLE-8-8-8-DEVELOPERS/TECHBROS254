
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Shield, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-tech-500" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: May 9, 2025
          </p>
          <Separator className="mb-8" />
        </motion.div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section>
            <h2 id="introduction">Introduction</h2>
            <p>
              TechBros ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              This privacy policy applies to all information collected through our website, as well as any related services, sales, marketing, or events.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="information">Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul>
              <li>
                <strong>Personal identification information</strong>: Name, email address, phone number, company name, job title, and other similar contact data you provide when filling out forms on our website.
              </li>
              <li>
                <strong>Technical information</strong>: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Usage information</strong>: Information about how you use our website, products, and services.
              </li>
              <li>
                <strong>Marketing and communications information</strong>: Your preferences in receiving marketing from us and our third parties and your communication preferences.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 id="use">How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 id="cookies">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="sharing">Information Sharing and Disclosure</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>
                <strong>Service providers</strong>: We may employ third-party companies and individuals to facilitate our website, provide the website on our behalf, perform website-related services, or assist us in analyzing how our website is used.
              </li>
              <li>
                <strong>Affiliates</strong>: We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy.
              </li>
              <li>
                <strong>Business partners</strong>: We may share your information with our business partners to offer you certain products, services, or promotions.
              </li>
              <li>
                <strong>Other users</strong>: When you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
              </li>
              <li>
                <strong>With your consent</strong>: We may disclose your personal information for any other purpose with your consent.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 id="security">Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="rights">Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li>The right to access, update or delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 id="changes">Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
            </p>
            <p>
              You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="contact">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us:
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

export default PrivacyPolicy;
