import React, { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";

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

const mockSettings = [
  { label: "Email Notifications", value: "Enabled" },
  { label: "Two-Factor Authentication", value: "Enabled" },
  { label: "Account Type", value: "Client" },
];

const AccountSettingsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    avatar: "",
    bio: "",
    phone: "",
    username: "",
  });
  const [preferences, setPreferences] = useState({
    darkMode: false,
    timeZone: "Africa/Nairobi",
    notifications: false,
  });
  const [integrations, setIntegrations] = useState({
    googleDrive: false,
    slack: false,
    github: false,
  });
  const [emailVerified, setEmailVerified] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState("");
  const [resendError, setResendError] = useState("");
  const [dangerLoading, setDangerLoading] = useState(false);
  const [dangerError, setDangerError] = useState("");
  const [dangerSuccess, setDangerSuccess] = useState("");
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState("");
  const [exportSuccess, setExportSuccess] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");

  // Fetch profile from Supabase
  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      setLoading(true);
      setFetchError("");
      const { data, error } = await supabase
        .from("profiles")
        .select("*, user_metadata")
        .eq("id", user.id)
        .single();
      if (error) {
        setFetchError("Failed to load profile.");
      } else if (data) {
        setProfile({
          name: data.full_name || "",
          email: user.email || "",
          avatar: data.avatar_url || "",
          bio: data.bio || "",
          phone: data.phone || "",
          username: data.username || "",
        });
        // Preferences
        setPreferences({
          darkMode: data.user_metadata?.darkMode ?? false,
          timeZone: data.user_metadata?.timeZone || "Africa/Nairobi",
          notifications: data.user_metadata?.notifications ?? false,
        });
        // Integrations
        setIntegrations({
          googleDrive: data.user_metadata?.googleDrive ?? false,
          slack: data.user_metadata?.slack ?? false,
          github: data.user_metadata?.github ?? false,
        });
      }
      // Email verification status
      setEmailVerified(user.email_confirmed_at ? true : false);
      setLoading(false);
    };
    fetchProfile();
  }, [user]);

  // Live validation
  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "" };
    if (!profile.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!profile.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(profile.email)) {
      newErrors.email = "Valid email is required.";
      valid = false;
    }
    if (profile.phone && !/^\+?[0-9\-\s]{7,}$/.test(profile.phone)) {
      newErrors.phone = "Invalid phone number.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  // Save profile
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    setFetchError("");
    // Update profiles table, including user_metadata
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: profile.name,
        avatar_url: profile.avatar,
        bio: profile.bio,
        phone: profile.phone,
        username: profile.username,
        user_metadata: {
          darkMode: preferences.darkMode,
          timeZone: preferences.timeZone,
          notifications: preferences.notifications,
          googleDrive: integrations.googleDrive,
          slack: integrations.slack,
          github: integrations.github,
        },
      })
      .eq("id", user.id);
    // Update email if changed
    if (profile.email !== user.email) {
      const { error: emailError } = await supabase.auth.updateUser({ email: profile.email });
      if (emailError) {
        setErrors((prev) => ({ ...prev, email: emailError.message }));
        setSaving(false);
        return;
      }
    }
    if (error) {
      setFetchError("Failed to save changes.");
    }
    setSaving(false);
  };

  // Resend email verification
  const handleResendVerification = async () => {
    setResendLoading(true);
    setResendSuccess("");
    setResendError("");
    const { error } = await supabase.auth.resend({ type: "signup", email: profile.email });
    if (error) {
      setResendError("Failed to resend verification email.");
    } else {
      setResendSuccess("Verification email sent.");
    }
    setResendLoading(false);
  };

  // Password reset handler
  const handlePasswordReset = async () => {
    setResetLoading(true);
    setResetError("");
    setResetSuccess("");
    const { error } = await supabase.auth.resetPasswordForEmail(profile.email);
    if (error) {
      setResetError("Failed to send password reset email.");
    } else {
      setResetSuccess("Password reset email sent.");
    }
    setResetLoading(false);
  };

  // Delete account handler
  const handleDeleteAccount = async () => {
    if (!window.confirm("Are you sure you want to delete your account? This action is irreversible.")) return;
    setDangerLoading(true);
    setDangerError("");
    setDangerSuccess("");
    // Delete from profiles
    const { error: profileError } = await supabase.from("profiles").delete().eq("id", user.id);
    // Delete from Auth
    const { error: authError } = await supabase.auth.admin.deleteUser(user.id);
    if (profileError || authError) {
      setDangerError("Failed to delete account. Please contact support.");
    } else {
      setDangerSuccess("Account deleted. Logging out...");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
    setDangerLoading(false);
  };

  // Export data handler
  const handleExportData = async () => {
    setExporting(true);
    setExportError("");
    setExportSuccess("");
    // Fetch profile
    const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    if (error || !data) {
      setExportError("Failed to export data.");
      setExporting(false);
      return;
    }
    // Download as JSON
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "account-data.json";
    a.click();
    URL.revokeObjectURL(url);
    setExportSuccess("Data exported.");
    setExporting(false);
  };

  if (!user) return null;
  if (loading) return <div className="p-8 text-center">Loading...</div>;
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
              <div className="font-bold text-lg text-[#1E90FF]">Account Settings</div>
            </div>
          </div>
          <main className="flex-1 p-0 md:p-8 overflow-y-auto relative">
            <div className="max-w-3xl mx-auto w-full bg-white dark:bg-[#23272F] rounded-2xl shadow p-0 md:p-6 flex flex-col gap-4 animate-fade-in relative">
              {/* Email Verification Banner */}
              {!emailVerified && (
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Email not verified</AlertTitle>
                  <AlertDescription>
                    Please verify your email address to unlock all features. {" "}
                    <Button size="sm" variant="outline" className="ml-2" onClick={handleResendVerification} disabled={resendLoading}>
                      {resendLoading ? "Sending..." : "Resend Verification"}
                    </Button>
                    {resendSuccess && <span className="ml-2 text-green-600">{resendSuccess}</span>}
                    {resendError && <span className="ml-2 text-red-600">{resendError}</span>}
                  </AlertDescription>
                </Alert>
              )}
              <Tabs value={tab} onValueChange={setTab} className="w-full">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="integrations">Integrations</TabsTrigger>
                  <TabsTrigger value="danger">Danger Zone</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <form className="space-y-6" onSubmit={handleSave}>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback>{profile.name?.[0] || "U"}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Button type="button" variant="outline" size="sm">Change Avatar</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <Input
                          value={profile.name}
                          onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                          className={errors.name ? "border-red-500" : ""}
                          required
                        />
                        {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <Input
                          value={profile.email}
                          onChange={e => setProfile(p => ({ ...p, email: e.target.value }))}
                          className={errors.email ? "border-red-500" : ""}
                          required
                          type="email"
                        />
                        {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">Phone</label>
                        <Input
                          value={profile.phone}
                          onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
                          className={errors.phone ? "border-red-500" : ""}
                          type="tel"
                        />
                        {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block mb-1 font-medium">Bio</label>
                        <Textarea
                          value={profile.bio}
                          onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))}
                          rows={3}
                        />
                      </div>
                    </div>
                    {fetchError && <div className="text-red-500 text-sm mt-2">{fetchError}</div>}
                    {/* Sticky Save Button */}
                    <div className="sticky bottom-0 left-0 w-full bg-white dark:bg-[#23272F] border-t border-gray-100 dark:border-gray-800 p-4 flex justify-end z-10 rounded-b-2xl">
                      <Button type="submit" disabled={saving} className="min-w-[120px]">{saving ? "Saving..." : "Save Changes"}</Button>
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="security">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-xs text-gray-500">Add extra security to your account. (Coming soon)</div>
                      </div>
                      <Switch disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Password Reset</div>
                        <div className="text-xs text-gray-500">Change your account password.</div>
                      </div>
                      <Button size="sm" variant="outline" onClick={handlePasswordReset} disabled={resetLoading}>
                        {resetLoading ? "Sending..." : "Reset Password"}
                      </Button>
                    </div>
                    {resetError && <div className="text-red-500 text-xs">{resetError}</div>}
                    {resetSuccess && <div className="text-green-600 text-xs">{resetSuccess}</div>}
                    <div>
                      <div className="font-medium mb-1">Login History</div>
                      <div className="bg-gray-50 dark:bg-[#23272F]/60 rounded-lg p-3 text-xs text-gray-600 dark:text-gray-300">Last login: (Coming soon)</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="preferences">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Dark Mode</div>
                        <div className="text-xs text-gray-500">Switch between light and dark theme.</div>
                      </div>
                      <Switch checked={preferences.darkMode} onCheckedChange={v => setPreferences(p => ({ ...p, darkMode: v }))} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Time Zone</div>
                        <div className="text-xs text-gray-500">Set your preferred time zone.</div>
                      </div>
                      <select className="border rounded-md px-2 py-1 text-sm" value={preferences.timeZone} onChange={e => setPreferences(p => ({ ...p, timeZone: e.target.value }))}>
                        <option value="Africa/Nairobi">Africa/Nairobi</option>
                        <option value="America/New_York">America/New_York</option>
                        <option value="Europe/London">Europe/London</option>
                        <option value="Asia/Tokyo">Asia/Tokyo</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Notifications</div>
                        <div className="text-xs text-gray-500">Receive important updates via email.</div>
                      </div>
                      <Checkbox checked={preferences.notifications} onCheckedChange={v => setPreferences(p => ({ ...p, notifications: v === true }))} />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="integrations">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Drive" className="w-6 h-6" />
                        <span>Google Drive</span>
                      </div>
                      <Button size="sm" variant={integrations.googleDrive ? "default" : "outline"} onClick={() => setIntegrations(i => ({ ...i, googleDrive: !i.googleDrive }))}>
                        {integrations.googleDrive ? "Connected" : "Connect"}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="w-6 h-6" />
                        <span>Slack</span>
                      </div>
                      <Button size="sm" variant={integrations.slack ? "default" : "outline"} onClick={() => setIntegrations(i => ({ ...i, slack: !i.slack }))}>
                        {integrations.slack ? "Connected" : "Connect"}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
                        <span>GitHub</span>
                      </div>
                      <Button size="sm" variant={integrations.github ? "default" : "outline"} onClick={() => setIntegrations(i => ({ ...i, github: !i.github }))}>
                        {integrations.github ? "Connected" : "Connect"}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="danger">
                  <div className="space-y-6">
                    <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 rounded-lg p-4">
                      <div className="font-bold text-red-600 mb-2">Delete Account</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">This action is irreversible. All your data will be permanently deleted.</div>
                      <Button variant="destructive" onClick={handleDeleteAccount} disabled={dangerLoading}>
                        {dangerLoading ? "Deleting..." : "Delete Account"}
                      </Button>
                      {dangerError && <div className="text-red-500 text-xs mt-2">{dangerError}</div>}
                      {dangerSuccess && <div className="text-green-600 text-xs mt-2">{dangerSuccess}</div>}
                    </div>
                    <div className="border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4">
                      <div className="font-bold text-yellow-700 mb-2">Export Data</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">Download all your account data in a portable format.</div>
                      <Button variant="outline" onClick={handleExportData} disabled={exporting}>
                        {exporting ? "Exporting..." : "Export Data"}
                      </Button>
                      {exportError && <div className="text-red-500 text-xs mt-2">{exportError}</div>}
                      {exportSuccess && <div className="text-green-600 text-xs mt-2">{exportSuccess}</div>}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AccountSettingsPage;
