import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import LegalPage from './pages/LegalPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import BenefitsPage from './pages/BenefitsPage';
import DiversityPage from './pages/DiversityPage';
import PerksPage from './pages/PerksPage';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import JobDetail from './components/JobDetail';
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
import ServiceDetail from './components/ServiceDetail';
import SubCategoryDetail from './components/SubCategoryDetail';
import AuthPage from './pages/AuthPage';
import ProjectDetail from './components/ProjectDetail';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/components/AuthContext';
import { SupabaseProvider } from '@/components/SupabaseProvider';
import { Suspense } from 'react';
import FloatingContact from '@/components/FloatingContact';
import ScrollToTop from '@/components/ScrollToTop';
import { Team, TeamMemberDetailWrapper } from "./components/Team";
import BlogAIAgents2025 from './pages/blog/AIAgents2025';
import BlogQuantumComputing2025 from './pages/blog/QuantumComputing2025';
import BlogReactServerComponents from './pages/blog/ReactServerComponents';
import BlogEdgeAI2025 from './pages/blog/EdgeAI2025';
import BlogOpenSource2025 from './pages/blog/OpenSource2025';
import BlogTechBrosScalePlus from './pages/blog/TechBrosScalePlus';
import Blog5GBeyond2025 from './pages/blog/5GBeyond2025';
import BlogEthicsOfAI2025 from './pages/blog/EthicsOfAI2025';
import BlogComposableCommerce2025 from './pages/blog/ComposableCommerce2025';
import BlogDigitalTwins2025 from './pages/blog/DigitalTwins2025';
import BlogWomenInTech2025 from './pages/blog/WomenInTech2025';
import BlogZeroTrustSecurity2025 from './pages/blog/ZeroTrustSecurity2025';
import BlogAPIEconomy2025 from './pages/blog/APIEconomy2025';
import BlogTechInAfrica2025 from './pages/blog/TechInAfrica2025';
import BlogWearables2025 from './pages/blog/Wearables2025';
import BlogServerless2025 from './pages/blog/Serverless2025';
import CompensationPage from './pages/perks/CompensationPage';
import WorkFromAnywherePage from './pages/perks/WorkFromAnywherePage';
import VacationTimePage from './pages/perks/VacationTimePage';
import RecognitionProgramsPage from './pages/perks/RecognitionProgramsPage';
import ParentalBenefitsPage from './pages/perks/ParentalBenefitsPage';
import ModernOfficePage from './pages/perks/ModernOfficePage';
import TeamEventsPage from './pages/perks/TeamEventsPage';
import LearningDevelopmentPage from './pages/perks/LearningDevelopmentPage';
import HealthWellnessPage from './pages/perks/HealthWellnessPage';
import FoodRefreshmentsPage from './pages/perks/FoodRefreshmentsPage';
import FlexibleWorkPage from './pages/perks/FlexibleWorkPage';
import FinancialWellnessPage from './pages/perks/FinancialWellnessPage';

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
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:slug" element={<TeamMemberDetailWrapper />} />
                <Route path="/legal" element={<LegalPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/benefits" element={<BenefitsPage />} />
                <Route path="/diversity" element={<DiversityPage />} />
                <Route path="/perks" element={<PerksPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:jobSlug" element={<JobDetail />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/auth" element={<AuthPage />} />
                
                {/* Service Category Pages */}
                <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/development" element={<DevelopmentServices />} />
          <Route path="/services/infrastructure" element={<InfrastructureServices />} />
          <Route path="/services/consulting" element={<ConsultingServices />} />
          <Route path="/services/ecommerce" element={<EcommerceServices />} />
          <Route path="/services/ai-data" element={<AIDataServices />} />
          <Route path="/services/security" element={<SecurityServices />} />
          <Route path="/services/marketing" element={<MarketingServices />} />
          <Route path="/services/design" element={<DesignServices />} />
          <Route path="/services/healthcare" element={<HealthcareServices />} />
          <Route path="/services/education" element={<EducationServices />} />
          <Route path="/services/forex-trading" element={<ForexServices />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/:serviceSlug/:subSlug" element={<SubCategoryDetail />} />
                
                {/* Service Detail and Subcategory Pages */}
                <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
                <Route path="/services/:serviceSlug/:subSlug" element={<SubCategoryDetail />} />
                
                <Route path="/blog/ai-agents-2025" element={<BlogAIAgents2025 />} />
                <Route path="/blog/quantum-computing-2025" element={<BlogQuantumComputing2025 />} />
                <Route path="/blog/react-server-components" element={<BlogReactServerComponents />} />
                <Route path="/blog/edge-ai-2025" element={<BlogEdgeAI2025 />} />
                <Route path="/blog/open-source-2025" element={<BlogOpenSource2025 />} />
                <Route path="/blog/techbros-scale-plus" element={<BlogTechBrosScalePlus />} />
                <Route path="/blog/5g-beyond-2025" element={<Blog5GBeyond2025 />} />
                <Route path="/blog/ethics-of-ai-2025" element={<BlogEthicsOfAI2025 />} />
                <Route path="/blog/composable-commerce-2025" element={<BlogComposableCommerce2025 />} />
                <Route path="/blog/digital-twins-2025" element={<BlogDigitalTwins2025 />} />
                <Route path="/blog/women-in-tech-2025" element={<BlogWomenInTech2025 />} />
                <Route path="/blog/zero-trust-security-2025" element={<BlogZeroTrustSecurity2025 />} />
                <Route path="/blog/api-economy-2025" element={<BlogAPIEconomy2025 />} />
                <Route path="/blog/tech-in-africa-2025" element={<BlogTechInAfrica2025 />} />
                <Route path="/blog/wearables-2025" element={<BlogWearables2025 />} />
                <Route path="/blog/serverless-2025" element={<BlogServerless2025 />} />
                <Route path="/perks/compensation" element={<CompensationPage />} />
                <Route path="/perks/work-from-anywhere" element={<WorkFromAnywherePage />} />
                <Route path="/perks/vacation-time" element={<VacationTimePage />} />
                <Route path="/perks/recognition-programs" element={<RecognitionProgramsPage />} />
                <Route path="/perks/parental-benefits" element={<ParentalBenefitsPage />} />
                <Route path="/perks/modern-office" element={<ModernOfficePage />} />
                <Route path="/perks/team-events" element={<TeamEventsPage />} />
                <Route path="/perks/learning-development" element={<LearningDevelopmentPage />} />
                <Route path="/perks/health-wellness" element={<HealthWellnessPage />} />
                <Route path="/perks/food-refreshments" element={<FoodRefreshmentsPage />} />
                <Route path="/perks/flexible-work" element={<FlexibleWorkPage />} />
                <Route path="/perks/financial-wellness" element={<FinancialWellnessPage />} />

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
