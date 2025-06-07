import React, { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Home,
  Folder,
  MessageCircle,
  Calendar,
  FileText,
  BarChart2,
  File,
  Settings,
  LogOut,
  HelpCircle,
  Bell,
  User,
  Lock,
  Moon,
  Sun,
  Globe,
  Slack,
  Github,
  Trash2,
  Download,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Plus,
  ChevronDown,
  ChevronUp,
  MailCheck,
  UserCheck,
  UserX,
  Zap,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";
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

const TABS = ["Profile", "Security", "Preferences", "Integrations", "Danger Zone"];

const mockProfile = {
  name: "Jane Client",
  email: "jane@client.com",
  avatar: "https://ui-avatars.com/api/?name=Jane+Client",
  phone: "",
  bio: "Client at TechBros. Loves design and innovation.",
  verified: false,
};

const mockLoginHistory = [
  { date: "2025-06-01", ip: "192.168.1.1", device: "Chrome on Windows" },
  { date: "2025-05-28", ip: "192.168.1.2", device: "Safari on iPhone" },
];

const mockIntegrations = [
  { name: "Google Drive", icon: <Globe />, connected: true },
  { name: "Slack", icon: <Slack />, connected: false },
  { name: "GitHub", icon: <Github />, connected: false },
];

const AccountSettingsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("Profile");
  const [profile, setProfile] = useState(mockProfile);
  const [profileErrors, setProfileErrors] = useState({ name: "", email: "" });
  const [saving, setSaving] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showCopilot, setShowCopilot] = useState(false);
  const [avatarHover, setAvatarHover] = useState(false);
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false);

  if (!user) return null;

  // Live validation
  const validateProfile = (field, value) => {
    let error = "";
    if (field === "name" && value.trim().length < 2) error = "Name too short";
    if (field === "email" && !/^[^@]+@[^@]+\.[^@]+$/.test(value)) error = "Invalid email";
    setProfileErrors((e) => ({ ...e, [field]: error }));
  };

  // Save changes (mock)
  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1200);
  };

  // Email verification banner
  const showVerify = !profile.verified;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F5F5F5] dark:bg-[#181A1B] font-sans relative">
        {/* Sidebar with avatar hover quick links */}
        <Sidebar className="bg-white dark:bg-[#23272F] border-r border-gray-200 dark:border-gray-800 shadow-lg min-h-screen" style={{ minWidth: 220 }}>
          <SidebarHeader className="flex flex-col items-center py-6 relative">
            <div
              className="relative group"
              onMouseEnter={() => setAvatarHover(true)}
              onMouseLeave={() => setAvatarHover(false)}
            >
              <img src={profile.avatar} alt="avatar" className="w-14 h-14 rounded-full border-2 border-[#1E90FF] shadow" />
              {avatarHover && (
                <div className="absolute left-16 top-0 bg-white dark:bg-[#23272F] shadow-lg rounded-xl p-3 flex flex-col gap-2 z-20 animate-fade-in">
                  <button className="flex items-center gap-2 text-sm hover:text-[#1E90FF]" onClick={() => setTab("Profile")}>
                    {" "}
                    <User size={16} /> Edit Profile{" "}
                  </button>
                  <button className="flex items-center gap-2 text-sm hover:text-[#1E90FF]">
                    {" "}
                    <ArrowRight size={16} /> Switch Client View{" "}
                  </button>
                </div>
              )}
            </div>
            <span className="font-bold text-lg text-[#1E90FF] mt-2">{profile.name}</span>
            <div className="text-xs text-gray-500 mb-2">Account Settings</div>
          </SidebarHeader>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton isActive={item.label === "Account Settings"} onClick={() => navigate(item.path)}>
                  {item.icon}
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarSeparator />
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/auth")}>
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
          {/* Topbar with notifications bell */}
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1E90FF]">Account Settings</div>
            <button className="relative" onClick={() => setShowNotif((v) => !v)}>
              <Bell size={22} className="text-[#1E90FF]" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            {/* Notifications Panel */}
            {showNotif && (
              <div className="absolute right-8 top-16 bg-white dark:bg-[#23272F] shadow-xl rounded-xl w-80 p-4 z-40 animate-fade-in flex flex-col gap-3">
                <div className="font-semibold text-[#1E90FF] mb-2">Notifications</div>
                <div className="text-sm">No new notifications.</div>
                <div className="text-xs text-gray-400">Messages, alerts, and invoices will appear here.</div>
              </div>
            )}
          </div>
          {/* Email verification banner */}
          {showVerify && (
            <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-6 py-3 flex items-center gap-3 justify-between">
              <AlertCircle size={20} />
              <span>
                Your email is not verified. <b>Check your inbox</b> or{" "}
                <a href="#" className="underline text-[#1E90FF]">
                  resend verification
                </a>
                .
              </span>
              <MailCheck size={20} />
            </div>
          )}
          {/* Tabs */}
          <main className="flex-1 p-8 overflow-y-auto relative">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-0 flex flex-col animate-fade-in max-w-3xl mx-auto">
              {/* Mobile tab bar */}
              <div className="md:hidden flex border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#23272F] z-10">
                <button className="flex-1 py-3 font-semibold" onClick={() => setMobileTabsOpen((v) => !v)}>
                  {tab} <ChevronDown className="inline ml-1" />
                </button>
              </div>
              {mobileTabsOpen && (
                <div className="md:hidden absolute left-0 right-0 top-12 bg-white dark:bg-[#23272F] shadow-lg rounded-b-xl z-20 animate-fade-in flex flex-col">
                  {TABS.map((t) => (
                    <button
                      key={t}
                      className={`py-3 px-6 text-left font-semibold ${tab === t ? "text-[#1E90FF]" : ""}`}
                      onClick={() => {
                        setTab(t);
                        setMobileTabsOpen(false);
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
              {/* Desktop tabs */}
              <div className="hidden md:flex border-b border-gray-200 dark:border-gray-700">
                {TABS.map((t) => (
                  <button
                    key={t}
                    className={`py-4 px-6 font-semibold transition ${
                      tab === t
                        ? "text-[#1E90FF] border-b-2 border-[#1E90FF] bg-[#F0F6FF] dark:bg-[#232B3B]"
                        : "text-gray-600 dark:text-gray-300 hover:bg-[#F0F6FF]/60 dark:hover:bg-[#232B3B]/60"
                    }`}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="p-6 flex flex-col gap-6">
                {/* Profile Tab */}
                {tab === "Profile" && (
                  <form className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img src={profile.avatar} alt="avatar" className="w-16 h-16 rounded-full border-2 border-[#1E90FF]" />
                      <div>
                        <label className="block text-sm font-semibold">Name</label>
                        <input
                          type="text"
                          className={`border rounded-lg px-3 py-2 text-sm w-56 ${
                            profileErrors.name ? "border-red-500" : ""
                          }`}
                          value={profile.name}
                          onChange={(e) => {
                            setProfile((p) => ({ ...p, name: e.target.value }));
                            validateProfile("name", e.target.value);
                          }}
                          required
                        />
                        {profileErrors.name && <div className="text-xs text-red-500 mt-1">{profileErrors.name}</div>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold">Email</label>
                      <input
                        type="email"
                        className={`border rounded-lg px-3 py-2 text-sm w-72 ${
                          profileErrors.email ? "border-red-500" : ""
                        }`}
                        value={profile.email}
                        onChange={(e) => {
                          setProfile((p) => ({ ...p, email: e.target.value }));
                          validateProfile("email", e.target.value);
                        }}
                        required
                      />
                      {profileErrors.email && <div className="text-xs text-red-500 mt-1">{profileErrors.email}</div>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold">Phone</label>
                      <input
                        type="tel"
                        className="border rounded-lg px-3 py-2 text-sm w-56"
                        value={profile.phone}
                        onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold">Bio</label>
                      <textarea
                        className="border rounded-lg px-3 py-2 text-sm w-full min-h-[60px]"
                        value={profile.bio}
                        onChange={(e) => setProfile((p) => ({ ...p, bio: e.target.value }))}
                      />
                    </div>
                  </form>
                )}
                {/* Security Tab */}
                {tab === "Security" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Lock className="text-[#1E90FF]" />{" "}
                      <span className="font-semibold">Two-Factor Authentication</span>{" "}
                      <span className="ml-auto text-xs text-green-600 flex items-center gap-1">
                        <CheckCircle2 size={14} /> Enabled
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-[#1E90FF] text-white rounded-lg font-semibold w-fit">
                      Reset Password
                    </button>
                    <div className="mt-4">
                      <div className="font-semibold mb-2">Login History</div>
                      <div className="flex flex-col gap-2">
                        {mockLoginHistory.map((h, i) => (
                          <div key={i} className="flex items-center gap-4 text-xs text-gray-500">
                            <UserCheck size={14} /> {h.date} • {h.device} • {h.ip}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {/* Preferences Tab */}
                {tab === "Preferences" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Moon className="text-[#1E90FF]" />{" "}
                      <span className="font-semibold">Dark Mode</span>{" "}
                      <span className="ml-auto">
                        <input type="checkbox" checked readOnly />
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="text-[#1E90FF]" />{" "}
                      <span className="font-semibold">Time Zone</span>{" "}
                      <select className="ml-auto border rounded px-2 py-1 text-sm">
                        <option>UTC+3 (Nairobi)</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="text-[#1E90FF]" />{" "}
                      <span className="font-semibold">Notifications</span>{" "}
                      <span className="ml-auto">
                        <input type="checkbox" checked readOnly />
                      </span>
                    </div>
                  </div>
                )}
                {/* Integrations Tab */}
                {tab === "Integrations" && (
                  <div className="flex flex-col gap-4">
                    {mockIntegrations.map((i, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {i.icon}
                        <span className="font-semibold">{i.name}</span>
                        <span className={`ml-auto text-xs ${i.connected ? "text-green-600" : "text-gray-400"}`}>
                          {i.connected ? "Connected" : "Not Connected"}
                        </span>
                        <button
                          className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                            i.connected ? "bg-gray-200 dark:bg-gray-700 text-gray-600" : "bg-[#1E90FF] text-white"
                          }`}
                        >
                          {i.connected ? "Disconnect" : "Connect"}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {/* Danger Zone Tab */}
                {tab === "Danger Zone" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-red-600 font-semibold">
                      <Trash2 /> Delete Account
                    </div>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold w-fit">
                      Delete My Account
                    </button>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold">
                      <Download /> Export Data
                    </div>
                    <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-semibold w-fit">
                      Export My Data
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Sticky Save Changes Button */}
            <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-[#23272F] border-t border-gray-200 dark:border-gray-700 px-8 py-4 flex justify-end z-20 shadow-lg">
              <button
                className="px-6 py-2 bg-[#1E90FF] text-white rounded-lg font-semibold shadow hover:bg-[#1877cc] transition flex items-center gap-2"
                onClick={handleSave}
                disabled={saving || Object.values(profileErrors).some(Boolean)}
              >
                {saving && <Loader2 className="animate-spin" size={18} />} Save Changes
              </button>
            </div>
          </main>
          <Footer />
        </div>
        {/* AI Copilot Chat Button */}
        <button
          className="fixed bottom-8 right-8 z-50 bg-[#1E90FF] text-white rounded-full shadow-lg p-4 flex items-center gap-2 hover:bg-[#1877cc] animate-bounce"
          onClick={() => setShowCopilot((v) => !v)}
        >
          <Zap size={24} /> AI Copilot
        </button>
        {showCopilot && (
          <div className="fixed bottom-24 right-8 z-50 w-96 max-w-full bg-white dark:bg-[#23272F] rounded-2xl shadow-2xl p-6 animate-fade-in flex flex-col gap-3">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-lg text-[#1E90FF]">AI Copilot</div>
              <button onClick={() => setShowCopilot(false)} className="text-gray-400 hover:text-[#1E90FF] text-xl">
                &times;
              </button>
            </div>
            <div className="flex-1 text-sm text-gray-500">How can I help you with your account or projects today?</div>
            <input className="border rounded-lg px-3 py-2 text-sm w-full" placeholder="Ask a question..." />
            <button className="mt-2 px-4 py-2 bg-[#1E90FF] hover:bg-[#1877CC] text-white rounded-lg font-semibold shadow transition">
              Send
            </button>
          </div>
        )}
      </div>
    </SidebarProvider>
  );
};

export default AccountSettingsPage;
