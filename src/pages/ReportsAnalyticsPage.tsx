import React from "react";
import { useAuth } from "@/components/AuthContext";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, PieChart } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";

const navItems = [
  { icon: <Home />, label: "Dashboard", path: "/dashboard" },
  { icon: <Folder />, label: "My Projects", path: "/my-projects" },
  { icon: <MessageCircle />, label: "Messages/Support", path: "/messages" },
  { icon: <Calendar />, label: "Meetings / Book a Call", path: "/meetings" },
  { icon: <FileText />, label: "Invoices & Billing", path: "/billing" },
  { icon: <BarChart2 />, label: "Reports & Analytics", path: "/analytics" },
  { icon: <File />, label: "Documents & Files", path: "/documents" },
  { icon: <Settings />, label: "Account Settings", path: "/settings" },
];

const mockAnalytics = [
  { label: "Active Projects", value: 3 },
  { label: "Total Invoices", value: 12 },
  { label: "Total Paid", value: "$25,000" },
  { label: "Upcoming Meetings", value: 2 },
];

const ReportsAnalyticsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F5F5F5] dark:bg-[#181A1B] font-sans overflow-x-hidden max-w-full">
        <Sidebar>
          <SidebarHeader />
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton onClick={() => navigate(item.path)}>
                  {item.icon}
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarFooter />
        </Sidebar>
        <div className="flex flex-col flex-1 min-w-0 max-w-full overflow-x-hidden">
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="md:hidden mr-2" />
              <div className="font-bold text-lg text-[#1E90FF]">Reports & Analytics</div>
            </div>
          </div>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-4 animate-fade-in mx-auto">
              <h2 className="text-2xl font-bold text-[#1E90FF] mb-2">Your Analytics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mockAnalytics.map((item, i) => (
                  <div key={i} className="bg-white dark:bg-[#23272F] rounded-xl shadow p-4 flex flex-col items-center">
                    <PieChart className="text-[#1E90FF] mb-2" />
                    <div className="text-lg font-bold">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ReportsAnalyticsPage;
