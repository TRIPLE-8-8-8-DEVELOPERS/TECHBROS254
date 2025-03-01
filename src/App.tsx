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

function App() {
  return (
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
