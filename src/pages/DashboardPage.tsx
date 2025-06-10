import React, { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, User, Bell, Moon, Sun, Plus, Upload, Users, FileCheck, PieChart } from "lucide-react";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";

const navItems = [
  { icon: <Home />, label: "Home", path: "/" },
  { icon: <Home />, label: "Dashboard", path: "/dashboard" },
  { icon: <Folder />, label: "My Projects", path: "/my-projects" },
  { icon: <MessageCircle />, label: "Messages/Support", path: "/messages" },
  { icon: <Calendar />, label: "Meetings / Book a Call", path: "/meetings" },
  { icon: <FileText />, label: "Invoices & Billing", path: "/billing" },
  { icon: <BarChart2 />, label: "Reports & Analytics", path: "/analytics" },
  { icon: <File />, label: "Documents & Files", path: "/documents" },
  { icon: <Settings />, label: "Account Settings", path: "/settings" },
];

const quickActions = [
  { icon: <Plus />, label: "Start New Project", onClick: () => alert("Start New Project") },
  { icon: <MessageCircle />, label: "Chat with Support", onClick: () => alert("Chat with Support") },
  { icon: <Upload />, label: "Upload Document", onClick: () => alert("Upload Document") },
  { icon: <Calendar />, label: "Book a Meeting", onClick: () => alert("Book a Meeting") },
  { icon: <FileCheck />, label: "View Past Deliverables", onClick: () => alert("View Past Deliverables") },
];

const mockProjects = [
  { title: "Website Redesign", due: "Jun 20, 2025", progress: 60, team: ["Jane", "John"] },
];
const mockMessages = [
  { text: "Your project milestone has been approved!" },
  { text: "Invoice #1234 has been paid." },
  { text: "Next meeting scheduled for Jun 10, 2025." },
];
const mockDocuments = [
  { name: "Signed NDA.pdf" },
  { name: "Project-Alpha-Deliverable.zip" },
  { name: "Invoice-1234.pdf" },
];

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [aiResponse] = useState("");

  if (!user) return null;

  return (
    <div className={darkMode ? "dark" : ""}>
      <SidebarProvider>
        <div className="flex min-h-screen bg-[#F5F5F5] dark:bg-[#181A1B] font-sans">
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
          <div className="flex flex-col flex-1">
            {/* Top Navbar */}
            <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800" style={{ minHeight: '4rem' }}>
              
              <div className="flex items-center gap-3 w-1/2">
                
                <input type="text" placeholder="Search projects, invoices..." className="w-full px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-[#181A1B] border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]" />
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setDarkMode((d) => !d)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
                </button>
                <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  <Bell className="text-[#1E90FF]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>
                <div className="relative">
                  <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <User className="text-[#1E90FF]" />
                    <span className="hidden md:inline text-sm font-medium">{user.email}</span>
                  </button>
                  {/* Profile dropdown can be added here */}
                </div>
              </div>
            </div>
            {/* Main Dashboard Panel */}
            <main className="flex-1 overflow-y-auto">
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col items-start gap-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-[#1E90FF] text-2xl"><Users /> <span className="font-bold">3</span></div>
                  <div className="text-xs text-gray-500">Active Projects</div>
                </div>
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col items-start gap-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-green-500 text-2xl"><PieChart /> <span className="font-bold">$12,500</span></div>
                  <div className="text-xs text-gray-500">Total Amount Paid</div>
                </div>
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col items-start gap-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-yellow-500 text-2xl"><FileCheck /> <span className="font-bold">2</span></div>
                  <div className="text-xs text-gray-500">Pending Deliverables</div>
                </div>
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col items-start gap-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-purple-500 text-2xl"><Calendar /> <span className="font-bold">Jun 10</span></div>
                  <div className="text-xs text-gray-500">Next Meeting</div>
                </div>
              </div>
              {/* Project Status Timeline (Kanban style preview) */}
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4 text-[#1E90FF]">Current Project Status</h2>
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-4">
                  {mockProjects.map((project) => (
                    <React.Fragment key={project.title}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-base">{project.title}</div>
                          <div className="text-xs text-gray-500">Due: {project.due}</div>
                        </div>
                        <button className="text-[#1E90FF] font-medium hover:underline" onClick={() => navigate("/projects")}>View Details</button>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-[#1E90FF] h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Users size={16} /> Assigned: {project.team.join(", ")}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {/* Messages & Notifications */}
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4 text-[#1E90FF]">Messages & Notifications</h2>
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-3">
                  {mockMessages.map((msg, i) => (
                    <div className="flex items-center gap-2" key={i}>
                      <MessageCircle className="text-[#1E90FF]" />
                      <span>{msg.text}</span>
                    </div>
                  ))}
                  <div className="flex justify-end mt-2">
                    <button className="text-[#1E90FF] font-medium hover:underline" onClick={() => navigate("/messages")}>View All</button>
                  </div>
                </div>
              </div>
              {/* Invoices & Billing Summary */}
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4 text-[#1E90FF]">Invoices & Billing</h2>
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Last Invoice: #1234</div>
                      <div className="text-xs text-gray-500">Status: <span className="text-green-500 font-semibold">Paid</span></div>
                    </div>
                    <button className="text-[#1E90FF] font-medium hover:underline" onClick={() => alert("Download PDF")}>Download PDF</button>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button className="text-[#1E90FF] font-medium hover:underline" onClick={() => navigate("/billing")}>Go to Billing</button>
                  </div>
                </div>
              </div>
              {/* Quick Actions Grid */}
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4 text-[#1E90FF]">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {quickActions.map((action) => (
                    <button key={action.label} className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-[#23272F] rounded-2xl shadow p-4 hover:bg-[#E6F0FA] dark:hover:bg-[#1E90FF]/10 transition-all" onClick={action.onClick}>
                      <span className="text-[#1E90FF] text-2xl">{action.icon}</span>
                      <span className="text-xs font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Bonus: Smart AI Assistant & Analytics (placeholder) */}
              <div className="mb-8 grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-3">
                  <h2 className="text-lg font-bold mb-2 text-[#1E90FF]">💡 Smart AI Assistant</h2>
                  <div className="bg-[#F5F5F5] dark:bg-[#181A1B] rounded-lg p-4 text-sm text-gray-600 dark:text-gray-300 min-h-[48px]">How can I help you today?</div>
                </div>
                <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-3">
                  <h2 className="text-lg font-bold mb-2 text-[#1E90FF]">📈 Project Analytics</h2>
                  <div className="h-32 flex items-center justify-center text-gray-400">[Charts Placeholder]</div>
                </div>
              </div>
              {/* Bonus: Document Vault */}
              <div className="mb-8">
                <h2 className="text-lg font-bold mb-4 text-[#1E90FF]">📁 Document Vault</h2>
                <div className="bg-white dark:abg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-3">
                  {mockDocuments.map((doc, i) => (
                    <div className="flex items-center gap-2" key={i}>
                      <File className="text-[#1E90FF]" />
                      <span>{doc.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardPage;
