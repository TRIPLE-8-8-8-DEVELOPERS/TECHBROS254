import React, { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator, SidebarProvider } from "@/components/ui/sidebar";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, User } from "lucide-react";
import { Loader2, Upload } from "lucide-react";
import { supabase } from "@/lib/supabase";

const navItems = [
  { icon: <Home />, label: "Dashboard", path: "/dashboard" },
  { icon: <Folder />, label: "My Projects", path: "/projects" },
  { icon: <MessageCircle />, label: "Messages/Support", path: "/messages" },
  { icon: <Calendar />, label: "Meetings / Book a Call", path: "/meetings" },
  { icon: <FileText />, label: "Invoices & Billing", path: "/billing" },
  { icon: <BarChart2 />, label: "Reports & Analytics", path: "/analytics" },
  { icon: <File />, label: "Documents & Files", path: "/documents" },
  { icon: <Settings />, label: "Account Settings", path: "/settings" },
];

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle avatar upload
  const handleFileUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`public/${user?.id}`, selectedFile, {
        cacheControl: "3600",
        upsert: true,
      });
    if (error) {
      setError(error.message);
    } else {
      setAvatarUrl(data.path);
      // Update profile with new avatar URL (use 'any' to avoid type recursion)
      await (supabase as any)
        .from("profiles")
        .update({ avatar_url: data.path })
        .eq("user_id", user?.id)
        .single();
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    const fetchProfile = async () => {
      // Fix: Use 'any' to avoid deep type recursion error
      const { data, error } = await (supabase as any)
        .from("profiles")
        .select("*")
        .eq("user_id", user?.id)
        .single();
      if (error) {
        setError(error.message);
      } else if (data) {
        setProfile(data);
        setAvatarUrl(data.avatar_url);
      }
    };
    fetchProfile();
  }, [user, navigate]);

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error loading profile.</div>;
  }

  if (!user || !profile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-500">
        <Loader2 className="animate-spin text-white w-10 h-10" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F5F5F5] dark:bg-[#181A1B] font-sans">
        {/* Sidebar */}
        <Sidebar className="bg-white dark:bg-[#23272F] border-r border-gray-200 dark:border-gray-800 shadow-lg min-h-screen" style={{ minWidth: 220 }}>
          <SidebarHeader className="flex flex-col items-center py-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-[#1E90FF] rounded-full flex items-center justify-center text-white font-bold text-2xl">T</div>
              <span className="font-bold text-lg text-[#1E90FF]">TechBros</span>
            </div>
            <div className="text-xs text-gray-500 mb-2">Welcome, {user.email}</div>
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
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Top Navbar */}
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1E90FF]">Profile</div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <User className="text-[#1E90FF]" />
              </button>
            </div>
          </div>
          {/* Profile Card */}
          <main className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-lg bg-white dark:bg-[#23272F] rounded-3xl shadow-xl p-8 space-y-6">
              <h1 className="text-3xl font-extrabold text-center text-[#1E90FF] mb-2">Your Profile</h1>
              <div className="flex flex-col items-center space-y-4">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Avatar" className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-200" />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-[#1E90FF] text-3xl font-bold">
                    {user.email[0].toUpperCase()}
                  </div>
                )}
                <div className="text-center text-gray-700 dark:text-gray-300 space-y-1">
                  <p className="text-lg font-medium">{user.email}</p>
                  {profile.full_name && <p>Full Name: <span className="font-semibold">{profile.full_name}</span></p>}
                  {profile.username && <p>Username: <span className="font-semibold">{profile.username}</span></p>}
                </div>
                <div className="w-full">
                  <input type="file" className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
                  <button onClick={handleFileUpload} disabled={loading} className={`mt-4 w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-600"}`}>{loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Upload className="w-5 h-5" />}{loading ? "Uploading..." : "Upload Avatar"}</button>
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

export default ProfilePage;
