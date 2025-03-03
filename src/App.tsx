import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./components/ServiceDetail";
import SubCategoryDetail from "./components/SubCategoryDetail";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import DevelopmentServices from "./pages/services/DevelopmentServices";
import InfrastructureServices from "./pages/services/InfrastructureServices";
import ConsultingServices from "./pages/services/ConsultingServices";
import EcommerceServices from "./pages/services/EcommerceServices";
import AIDataServices from "./pages/services/AIDataServices";
import SecurityServices from "./pages/services/SecurityServices";
import MarketingServices from "./pages/services/MarketingServices";
import BenefitsPage from "./pages/BenefitsPage";
import PerksPage from "./pages/PerksPage";
import DiversityPage from "./pages/DiversityPage";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./components/ProjectDetail";
import { ThemeProvider } from "./components/ThemeProvider";

// Import perk pages
import CompensationPage from "./pages/perks/CompensationPage";
import HealthWellnessPage from "./pages/perks/HealthWellnessPage";
import FlexibleWorkPage from "./pages/perks/FlexibleWorkPage";
import LearningDevelopmentPage from "./pages/perks/LearningDevelopmentPage";
import ModernOfficePage from "./pages/perks/ModernOfficePage";
import TeamEventsPage from "./pages/perks/TeamEventsPage";
import WorkFromAnywherePage from "./pages/perks/WorkFromAnywherePage";
import VacationTimePage from "./pages/perks/VacationTimePage";
import ParentalBenefitsPage from "./pages/perks/ParentalBenefitsPage";
import FinancialWellnessPage from "./pages/perks/FinancialWellnessPage";
import RecognitionProgramsPage from "./pages/perks/RecognitionProgramsPage";
import FoodRefreshmentsPage from "./pages/perks/FoodRefreshmentsPage";

// Import new services
import DesignServices from "./pages/services/DesignServices";
import HealthcareServices from "./pages/services/HealthcareServices";
import EducationServices from "./pages/services/EducationServices";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="techbros-theme">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services Routes */}
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
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/:serviceSlug/:subSlug" element={<SubCategoryDetail />} />
          
          {/* Other Routes */}
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobDetail />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/perks" element={<PerksPage />} />
          <Route path="/diversity" element={<DiversityPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Perk Detail Routes */}
          <Route path="/perks/compensation" element={<CompensationPage />} />
          <Route path="/perks/health-wellness" element={<HealthWellnessPage />} />
          <Route path="/perks/flexible-work" element={<FlexibleWorkPage />} />
          <Route path="/perks/learning-development" element={<LearningDevelopmentPage />} />
          <Route path="/perks/modern-office" element={<ModernOfficePage />} />
          <Route path="/perks/team-events" element={<TeamEventsPage />} />
          <Route path="/perks/work-from-anywhere" element={<WorkFromAnywherePage />} />
          <Route path="/perks/vacation-time" element={<VacationTimePage />} />
          <Route path="/perks/parental-benefits" element={<ParentalBenefitsPage />} />
          <Route path="/perks/financial-wellness" element={<FinancialWellnessPage />} />
          <Route path="/perks/recognition-programs" element={<RecognitionProgramsPage />} />
          <Route path="/perks/food-refreshments" element={<FoodRefreshmentsPage />} />
          
          {/* Projects Routes */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
