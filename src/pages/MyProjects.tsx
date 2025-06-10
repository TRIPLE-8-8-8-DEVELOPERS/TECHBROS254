import React, { useEffect, useState } from "react";
import { Folder, Home, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, Search, PlusCircle, LayoutGrid, List, Users, Calendar as CalendarIcon, FileText as FileIcon, MessageCircle as MessageIcon, Eye } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import ProjectCard from "@/components/ProjectCard";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { useToast, toast } from "@/components/ui/use-toast";

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

const statusOptions = [
  { label: "All", value: "all" },
  { label: "In Progress", value: "in_progress" },
  { label: "Complete", value: "complete" },
  { label: "Cancelled", value: "cancelled" },
];

const statusPill = (status: string) => {
  switch (status) {
    case "in_progress":
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">🟡 In Progress</span>;
    case "complete":
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">🟢 Complete</span>;
    case "cancelled":
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">🔴 Cancelled</span>;
    default:
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">⚪ Unknown</span>;
  }
};

const MyProjects = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("author_id", user.id)
        .order("created_at", { ascending: false });
      if (error) {
        setError(error.message);
        setProjects([]);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };
    fetchProjects();
  }, [user]);

  const filteredProjects = projects.filter((p) => {
    const matchesStatus = status === "all" || p.status === status;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title) return;
    setCreating(true);
    try {
      const { data, error } = await supabase.from("projects").insert({
        title: newProject.title,
        description: newProject.description,
        author_id: user.id,
        status: "in_progress",
        created_at: new Date().toISOString(),
      }).select();
      if (error) throw error;
      setProjects([...(data || []), ...projects]);
      setShowCreateModal(false);
      setNewProject({ title: "", description: "" });
      toast({ title: "Project created", description: newProject.title });
    } catch (err: any) {
      toast({ title: "Error creating project", description: err.message, variant: "destructive" });
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
      setProjects(projects.filter((p) => p.id !== id));
      toast({ title: "Project deleted" });
    } catch (err: any) {
      toast({ title: "Error deleting project", description: err.message, variant: "destructive" });
    }
  };

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
          {/* Top Navbar or header if needed */}
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="md:hidden mr-2" />
              <div className="font-bold text-lg text-[#1E90FF]">My Projects</div>
            </div>
            <button onClick={() => setShowCreateModal(true)} className="flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#1877cc] transition">
              <PlusCircle size={18} /> New Project
            </button>
          </div>
          {/* Create Project Modal */}
          {showCreateModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fade-in">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setShowCreateModal(false)}>&times;</button>
                <h3 className="text-xl font-bold text-[#1E90FF] mb-2">Start New Project</h3>
                <form className="flex flex-col gap-3" onSubmit={handleCreateProject}>
                  <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} required />
                  <textarea className="border rounded-lg px-3 py-2 text-sm" placeholder="Description (optional)" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} />
                  <button className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition" type="submit" disabled={creating}>{creating ? "Creating..." : "Create Project"}</button>
                </form>
              </div>
            </div>
          )}
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-6 animate-fade-in mx-auto">
              {/* Top Controls */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                <div className="flex gap-2 flex-wrap">
                  {statusOptions.map(opt => (
                    <button
                      key={opt.value}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${status === opt.value ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-[#1E90FF]/10'}`}
                      onClick={() => setStatus(opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <input
                      className="pl-8 pr-3 py-2 rounded-lg border text-sm bg-gray-50 dark:bg-[#23272F]/60 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
                      placeholder="Search projects..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                    <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
                  </div>
                  <button
                    className={`p-2 rounded-lg ${view === 'grid' ? 'bg-[#1E90FF] text-white' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-700 dark:text-gray-200'}`}
                    onClick={() => setView('grid')}
                  >
                    <LayoutGrid size={18} />
                  </button>
                  <button
                    className={`p-2 rounded-lg ${view === 'list' ? 'bg-[#1E90FF] text-white' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-700 dark:text-gray-200'}`}
                    onClick={() => setView('list')}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
              {/* Projects List/Grid */}
              {authLoading || loading ? (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400"><span className="animate-spin">⏳</span> Loading...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : filteredProjects.length === 0 ? (
                <div className="text-gray-500 dark:text-gray-400">No projects found. Start a new project to see it here.</div>
              ) : view === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, idx) => (
                    <div key={project.id} className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-5 flex flex-col gap-4 border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={project.logo || '/logo.svg'} alt="logo" className="w-10 h-10 rounded-full object-cover border" />
                        <div>
                          <div className="font-bold text-lg">{project.title}</div>
                          {statusPill(project.status)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <CalendarIcon size={16} className="text-gray-400" />
                        <span className="font-semibold">Deadline:</span>
                        <span>{project.deadline ? new Date(project.deadline).toLocaleDateString() : 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold">Progress:</span>
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-2 bg-[#1E90FF]" style={{ width: `${project.progress || 0}%` }} />
                        </div>
                        <span className="text-xs font-bold text-[#1E90FF]">{project.progress || 0}%</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={16} className="text-gray-400" />
                        <div className="flex -space-x-2">
                          {(project.team || []).slice(0, 4).map((member: any, i: number) => (
                            <img key={i} src={member.avatar} alt={member.name} className="w-7 h-7 rounded-full border-2 border-white dark:border-[#23272F]" title={member.name} />
                          ))}
                          {(project.team || []).length > 4 && (
                            <span className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#23272F]">+{(project.team || []).length - 4}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <button onClick={() => navigate(`/projects/${project.slug}`)} className="flex-1 flex items-center gap-1 px-3 py-1 rounded-lg bg-[#1E90FF] text-white text-xs font-semibold hover:bg-[#1877cc] transition"><Eye size={14}/> View</button>
                        <button onClick={() => navigate(`/messages?project=${project.id}`)} className="flex-1 flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 dark:bg-[#23272F]/60 text-[#1E90FF] text-xs font-semibold border border-[#1E90FF] hover:bg-[#1E90FF] hover:text-white transition"><MessageIcon size={14}/> Messages</button>
                        <button onClick={() => navigate(`/documents?project=${project.id}`)} className="flex-1 flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 dark:bg-[#23272F]/60 text-[#1E90FF] text-xs font-semibold border border-[#1E90FF] hover:bg-[#1E90FF] hover:text-white transition"><FileIcon size={14}/> Files</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {filteredProjects.map((project, idx) => (
                    <div key={project.id} className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-5 flex flex-col md:flex-row md:items-center gap-4 border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-3 min-w-[180px]">
                        <img src={project.logo || '/logo.svg'} alt="logo" className="w-10 h-10 rounded-full object-cover border" />
                        <div>
                          <div className="font-bold text-lg">{project.title}</div>
                          {statusPill(project.status)}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2">
                        <div className="flex items-center gap-2 text-xs">
                          <CalendarIcon size={16} className="text-gray-400" />
                          <span className="font-semibold">Deadline:</span>
                          <span>{project.deadline ? new Date(project.deadline).toLocaleDateString() : 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold">Progress:</span>
                          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden min-w-[100px]">
                            <div className="h-2 bg-[#1E90FF]" style={{ width: `${project.progress || 0}%` }} />
                          </div>
                          <span className="text-xs font-bold text-[#1E90FF]">{project.progress || 0}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-400" />
                          <div className="flex -space-x-2">
                            {(project.team || []).slice(0, 4).map((member: any, i: number) => (
                              <img key={i} src={member.avatar} alt={member.name} className="w-7 h-7 rounded-full border-2 border-white dark:border-[#23272F]" title={member.name} />
                            ))}
                            {(project.team || []).length > 4 && (
                              <span className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#23272F]">+{(project.team || []).length - 4}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 min-w-[220px]">
                        <button onClick={() => navigate(`/my-projects/${project.slug}`)} className="flex-1 flex items-center gap-1 px-3 py-1 rounded-lg bg-[#1E90FF] text-white text-xs font-semibold hover:bg-[#1877cc] transition"><Eye size={14}/> View</button>
                        <button onClick={() => navigate(`/messages?project=${project.id}`)} className="flex-1 flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 dark:bg-[#23272F]/60 text-[#1E90FF] text-xs font-semibold border border-[#1E90FF] hover:bg-[#1E90FF] hover:text-white transition"><MessageIcon size={14}/> Messages</button>
                        <button onClick={() => navigate(`/documents?project=${project.id}`)} className="flex-1 flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 dark:bg-[#23272F]/60 text-[#1E90FF] text-xs font-semibold border border-[#1E90FF] hover:bg-[#1E90FF] hover:text-white transition"><FileIcon size={14}/> Files</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MyProjects;
