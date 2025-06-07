import React, { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator } from "@/components/ui/sidebar";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, PieChart, Download, Filter, FileCheck } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

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

const kpis = [
  { label: "Projects Completed", value: 12, icon: <FileCheck className="text-green-500" /> },
  { label: "Hours Billed", value: 320, icon: <Calendar className="text-blue-500" /> },
  { label: "Revenue", value: "$24,000", icon: <PieChart className="text-purple-500" /> },
];
const projects = ["All Projects", "Website Redesign", "Mobile App", "Branding"];
const timeframes = ["Weekly", "Monthly", "Custom"];

const ReportsAnalyticsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [selectedTimeframe, setSelectedTimeframe] = useState("Monthly");
  if (!user) return null;
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F5F5F5] dark:bg-[#181A1B] font-sans">
        <Sidebar className="bg-white dark:bg-[#23272F] border-r border-gray-200 dark:border-gray-800 shadow-lg min-h-screen" style={{ minWidth: 220 }}>
          <SidebarHeader className="flex flex-col items-center py-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-[#1E90FF] rounded-full flex items-center justify-center text-white font-bold text-2xl">T</div>
              <span className="font-bold text-lg text-[#1E90FF]">TechBros</span>
            </div>
            <div className="text-xs text-gray-500 mb-2">Reports & Analytics</div>
          </SidebarHeader>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton isActive={item.label === "Reports & Analytics"} onClick={() => navigate(item.path)}>
                  {item.icon}
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarSeparator />
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate('/auth')}>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarFooter className="mt-auto p-4">
            <a href="#support" className="flex items-center gap-2 text-xs text-[#1E90FF] hover:underline">
              <HelpCircle size={16} /> Need Help?
            </a>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1E90FF] flex items-center gap-2"><BarChart2 /> Reports & Analytics</div>
            <button className="flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#1877cc] transition"><Download size={18}/> Generate Report</button>
          </div>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-8 animate-fade-in max-w-6xl mx-auto">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {kpis.map((kpi, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-[#23272F]/60 rounded-2xl shadow p-6 flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2 text-2xl">{kpi.icon} <span className="font-bold">{kpi.value}</span></div>
                    <div className="text-xs text-gray-500">{kpi.label}</div>
                  </div>
                ))}
              </div>
              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <div className="flex items-center gap-2">
                  <Filter className="text-[#1E90FF]" />
                  <select className="border rounded-lg px-3 py-2 text-sm" value={selectedProject} onChange={e => setSelectedProject(e.target.value)}>
                    {projects.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Timeframe:</span>
                  {timeframes.map(tf => (
                    <button key={tf} className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${selectedTimeframe === tf ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-[#1E90FF]/10'}`} onClick={() => setSelectedTimeframe(tf)}>{tf}</button>
                  ))}
                </div>
              </div>
              {/* Charts Section (mocked) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Progress Over Time (Line Chart) */}
                <div className="bg-gray-50 dark:bg-[#23272F]/60 rounded-2xl shadow p-6 flex flex-col gap-2">
                  <div className="font-semibold mb-2">Progress Over Time</div>
                  <div className="h-48 flex items-center justify-center text-gray-400">[Line Chart Placeholder with hover tooltips]</div>
                </div>
                {/* Budget vs Spend (Bar Chart) */}
                <div className="bg-gray-50 dark:bg-[#23272F]/60 rounded-2xl shadow p-6 flex flex-col gap-2">
                  <div className="font-semibold mb-2">Budget vs Spend</div>
                  <div className="h-48 flex items-center justify-center text-gray-400">[Bar Chart Placeholder with hover tooltips]</div>
                </div>
                {/* Time Tracking (Pie/Donut) */}
                <div className="bg-gray-50 dark:bg-[#23272F]/60 rounded-2xl shadow p-6 flex flex-col gap-2 md:col-span-2">
                  <div className="font-semibold mb-2">Time Tracking</div>
                  <div className="h-48 flex items-center justify-center text-gray-400">[Pie/Donut Chart Placeholder with hover tooltips]</div>
                </div>
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
