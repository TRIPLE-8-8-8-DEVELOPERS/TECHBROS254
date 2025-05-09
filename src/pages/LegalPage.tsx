
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Shield, BookText, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LegalDocCard = ({ 
  title, 
  description, 
  icon: Icon, 
  linkTo 
}: { 
  title: string, 
  description: string, 
  icon: React.ElementType, 
  linkTo: string 
}) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-6 w-6 text-tech-500" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-600 dark:text-gray-400">
        Our {title.toLowerCase()} outlines your rights and responsibilities when using our services.
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link to={linkTo}>Read {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const LegalPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold text-center mb-4">Legal Information</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg">
            Important legal documents governing your use of our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <LegalDocCard 
            title="Privacy Policy" 
            description="How we collect, use, and protect your personal information" 
            icon={Shield} 
            linkTo="/privacy-policy" 
          />
          <LegalDocCard 
            title="Terms of Service" 
            description="The rules and guidelines for using our services" 
            icon={FileText} 
            linkTo="/terms-of-service" 
          />
          <LegalDocCard 
            title="Cookie Policy" 
            description="How we use cookies and similar technologies" 
            icon={Info} 
            linkTo="/cookie-policy" 
          />
          <LegalDocCard 
            title="Acceptable Use Policy" 
            description="Prohibited activities and content guidelines" 
            icon={BookText} 
            linkTo="/acceptable-use" 
          />
          <LegalDocCard 
            title="GDPR Compliance" 
            description="How we comply with European data protection laws" 
            icon={Shield} 
            linkTo="/gdpr-compliance" 
          />
          <LegalDocCard 
            title="Refund Policy" 
            description="Our policies regarding refunds for our services" 
            icon={FileText} 
            linkTo="/refund-policy" 
          />
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Need Legal Assistance?</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            If you have any questions about our legal documents or need clarification, please don't hesitate to contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link to="/contact">Contact Legal Team</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:legal@techbros.com">Email: legal@techbros.com</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LegalPage;
