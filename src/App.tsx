
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import Team from './pages/Team';
import LegalPage from './pages/LegalPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import BenefitsPage from './pages/BenefitsPage';
import DiversityPage from './pages/DiversityPage';
import PerksPage from './pages/PerksPage';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import Pricing from './pages/Pricing';
import DevelopmentServices from './pages/services/DevelopmentServices';
import DesignServices from './pages/services/DesignServices';
import MarketingServices from './pages/services/MarketingServices';
import InfrastructureServices from './pages/services/InfrastructureServices';
import EducationServices from './pages/services/EducationServices';
import HealthcareServices from './pages/services/HealthcareServices';
import EcommerceServices from './pages/services/EcommerceServices';
import AIDataServices from './pages/services/AIDataServices';
import SecurityServices from './pages/services/SecurityServices';
import ConsultingServices from './pages/services/ConsultingServices';
import ForexServices from './pages/services/ForexServices';
import CryptoServices from './pages/services/CryptoServices';
import AuthPage from './pages/AuthPage';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/components/AuthContext';
import { SupabaseProvider } from '@/components/SupabaseProvider';
import { Suspense } from 'react';
import FloatingContact from '@/components/FloatingContact';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <SupabaseProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/team" element={<Team />} />
                <Route path="/legal" element={<LegalPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/benefits" element={<BenefitsPage />} />
                <Route path="/diversity" element={<DiversityPage />} />
                <Route path="/perks" element={<PerksPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:id" element={<JobDetail />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/auth" element={<AuthPage />} />
                
                {/* Service Category Pages */}
                <Route path="/services/development" element={<DevelopmentServices />} />
                <Route path="/services/design" element={<DesignServices />} />
                <Route path="/services/marketing" element={<MarketingServices />} />
                <Route path="/services/infrastructure" element={<InfrastructureServices />} />
                <Route path="/services/education" element={<EducationServices />} />
                <Route path="/services/healthcare" element={<HealthcareServices />} />
                <Route path="/services/ecommerce" element={<EcommerceServices />} />
                <Route path="/services/ai-data" element={<AIDataServices />} />
                <Route path="/services/security" element={<SecurityServices />} />
                <Route path="/services/consulting" element={<ConsultingServices />} />
                <Route path="/services/forex" element={<ForexServices />} />
                <Route path="/services/crypto" element={<CryptoServices />} />
                
                {/* Catch-all for unknown routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <FloatingContact />
          </Router>
          <Toaster />
        </AuthProvider>
      </SupabaseProvider>
    </ThemeProvider>
  );
}

export default App;
