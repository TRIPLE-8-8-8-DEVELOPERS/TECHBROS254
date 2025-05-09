
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CookiePolicy = () => {
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
            <Info className="h-8 w-8 text-tech-500" />
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
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
              This Cookie Policy explains how TechBros ("we", "us", or "our") uses cookies and similar technologies on our website. This Cookie Policy should be read together with our Privacy Policy and Terms of Service.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="what-are-cookies">What are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies can be "persistent" or "session" cookies, which remain on your device for a specified period of time or until you close your browser, respectively.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="how-we-use-cookies">How We Use Cookies</h2>
            <p>
              We use cookies for several purposes, including:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies</strong>: These cookies are necessary for the website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
              </li>
              <li>
                <strong>Performance Cookies</strong>: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
              </li>
              <li>
                <strong>Functional Cookies</strong>: These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies</strong>: These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 id="types-of-cookies">Types of Cookies We Use</h2>
            <p>
              The specific types of cookies served through our website and the purposes they perform are described in the table below:
            </p>

            <table className="mt-4 w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                  <th className="border border-gray-300 p-2 text-left">Purpose</th>
                  <th className="border border-gray-300 p-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">_ga</td>
                  <td className="border border-gray-300 p-2">Used to distinguish users by Google Analytics</td>
                  <td className="border border-gray-300 p-2">2 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_gid</td>
                  <td className="border border-gray-300 p-2">Used to distinguish users by Google Analytics</td>
                  <td className="border border-gray-300 p-2">24 hours</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_gat</td>
                  <td className="border border-gray-300 p-2">Used to throttle request rate</td>
                  <td className="border border-gray-300 p-2">1 minute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">cookieconsent_status</td>
                  <td className="border border-gray-300 p-2">Used to remember your cookie consent choice</td>
                  <td className="border border-gray-300 p-2">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">session</td>
                  <td className="border border-gray-300 p-2">Used to maintain your session</td>
                  <td className="border border-gray-300 p-2">Session</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mt-8">
            <h2 id="third-party-cookies">Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. Some of the third-party applications and services that we use on our website, which may set cookies on your device, include:
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Facebook Pixel</li>
              <li>LinkedIn Insight Tag</li>
              <li>HubSpot</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 id="manage-cookies">Managing Your Cookie Preferences</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. You can however obtain information about blocking and deleting cookies using these links:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">Opera</a></li>
              <li><a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <p>
              Please note that if you choose to block cookies, you may not be able to use the full functionality of our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="changes">Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this Cookie Policy.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="contact">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us:
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

export default CookiePolicy;
