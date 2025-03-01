
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import PerksPage from "./pages/PerksPage";
import BenefitsPage from "./pages/BenefitsPage";
import DiversityPage from "./pages/DiversityPage";
import ServiceDetail from "./components/ServiceDetail";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPage from "./pages/ServicesPage";
import DevelopmentServices from "./pages/services/DevelopmentServices";
import InfrastructureServices from "./pages/services/InfrastructureServices";
import ConsultingServices from "./pages/services/ConsultingServices";
import EcommerceServices from "./pages/services/EcommerceServices";
import AIDataServices from "./pages/services/AIDataServices";
import SecurityServices from "./pages/services/SecurityServices";
import MarketingServices from "./pages/services/MarketingServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/perks" element={<PerksPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/diversity" element={<DiversityPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/development" element={<DevelopmentServices />} />
          <Route path="/services/infrastructure" element={<InfrastructureServices />} />
          <Route path="/services/consulting" element={<ConsultingServices />} />
          <Route path="/services/ecommerce" element={<EcommerceServices />} />
          <Route path="/services/ai-data" element={<AIDataServices />} />
          <Route path="/services/security" element={<SecurityServices />} />
          <Route path="/services/marketing" element={<MarketingServices />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
