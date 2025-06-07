import React from "react";
import { useAuth } from "@/components/AuthContext";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
  // Simulated state for demo
  const [tab, setTab] = React.useState("profile");
  const [profile, setProfile] = React.useState({
    name: user?.user_metadata?.name || "",
    email: user?.email || "",
    avatar: user?.user_metadata?.avatar_url || "",
    bio: user?.user_metadata?.bio || "",
    phone: user?.user_metadata?.phone || "",
  });
  const [emailVerified, setEmailVerified] = React.useState(false); // Simulate
  const [saving, setSaving] = React.useState(false);
  const [errors, setErrors] = React.useState({ name: "", email: "", phone: "" });
  if (!user) return null;
  return (
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
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1E90FF]">Account Settings</div>
          </div>
          <main className="flex-1 p-0 md:p-8 overflow-y-auto relative">
            <div className="max-w-3xl mx-auto w-full bg-white dark:bg-[#23272F] rounded-2xl shadow p-0 md:p-6 flex flex-col gap-4 animate-fade-in relative">
              {/* Email Verification Banner */}
              {!emailVerified && (
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Email not verified</AlertTitle>
                  <AlertDescription>
                    Please verify your email address to unlock all features. <Button size="sm" variant="outline" className="ml-2">Resend Verification</Button>
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
                  <form className="space-y-6">
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
                  </form>
                </TabsContent>
                <TabsContent value="security">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-xs text-gray-500">Add extra security to your account.</div>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Password Reset</div>
                        <div className="text-xs text-gray-500">Change your account password.</div>
                      </div>
                      <Button size="sm" variant="outline">Reset Password</Button>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Login History</div>
                      <div className="bg-gray-50 dark:bg-[#23272F]/60 rounded-lg p-3 text-xs text-gray-600 dark:text-gray-300">Last login: 2025-06-08 10:00AM<br/>Location: Nairobi, Kenya</div>
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
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Time Zone</div>
                        <div className="text-xs text-gray-500">Set your preferred time zone.</div>
                      </div>
                      <select className="border rounded-md px-2 py-1 text-sm">
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
                      <Checkbox />
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
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="w-6 h-6" />
                        <span>Slack</span>
                      </div>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
                        <span>GitHub</span>
                      </div>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="danger">
                  <div className="space-y-6">
                    <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 rounded-lg p-4">
                      <div className="font-bold text-red-600 mb-2">Delete Account</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">This action is irreversible. All your data will be permanently deleted.</div>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                    <div className="border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4">
                      <div className="font-bold text-yellow-700 mb-2">Export Data</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">Download all your account data in a portable format.</div>
                      <Button variant="outline">Export Data</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              {/* Sticky Save Button */}
              <div className="sticky bottom-0 left-0 w-full bg-white dark:bg-[#23272F] border-t border-gray-100 dark:border-gray-800 p-4 flex justify-end z-10 rounded-b-2xl">
                <Button type="submit" disabled={saving} className="min-w-[120px]">{saving ? "Saving..." : "Save Changes"}</Button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AccountSettingsPage;
