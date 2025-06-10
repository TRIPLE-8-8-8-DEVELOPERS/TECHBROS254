import React, { useState } from "react";
import { useAuth } from "@/components/AuthContext";
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
  Plus,
  Share2,
  Tag,
  Trash2,
  Download,
  Eye,
  UploadCloud,
  ChevronDown,
  ChevronRight,
  Image as ImageIcon,
  FileText as FileTextIcon,
  FileArchive,
  FileCheck2,
} from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { supabase } from "@/integrations/supabase/client";
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

const DocumentsFilesPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  // Fetch documents for this user
  React.useEffect(() => {
    if (!user) return;
    setLoading(true);
    supabase
      .from("documents")
      .select("*")
      .eq("uploader_id", user.id)
      .order("uploaded_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message);
        setDocuments(data || []);
        setLoading(false);
      });
  }, [user]);

  // Upload document
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !user) return;
    setUploading(true);
    try {
      // Upload to Supabase Storage
      const storagePath = `${user.id}/${Date.now()}_${file.name}`;
      const { data: storageData, error: storageError } = await supabase.storage.from("documents").upload(storagePath, file);
      if (storageError) throw storageError;
      // Insert into documents table
      const { data, error } = await supabase.from("documents").insert({
        uploader_id: user.id,
        file_url: storageData?.path,
        file_type: file.type,
        file_name: file.name,
        size: file.size,
        uploaded_at: new Date().toISOString(),
      }).select();
      if (error) throw error;
      setDocuments([...(data || []), ...documents]);
      setFile(null);
      toast({ title: "File uploaded", description: file.name });
    } catch (err: any) {
      toast({ title: "Upload failed", description: err.message, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  // Download document
  const handleDownload = async (doc: any) => {
    try {
      const { data, error } = await supabase.storage.from("documents").download(doc.file_url);
      if (error || !data) throw error || new Error("No file");
      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.file_name;
      a.click();
      URL.revokeObjectURL(url);
      toast({ title: "Download started", description: doc.file_name });
    } catch (err: any) {
      toast({ title: "Download failed", description: err.message, variant: "destructive" });
    }
  };

  // Delete document
  const handleDelete = async (doc: any) => {
    if (!window.confirm("Delete this file?")) return;
    try {
      // Remove from storage
      await supabase.storage.from("documents").remove([doc.file_url]);
      // Remove from table
      const { error } = await supabase.from("documents").delete().eq("id", doc.id);
      if (error) throw error;
      setDocuments(documents.filter((d) => d.id !== doc.id));
      toast({ title: "File deleted" });
    } catch (err: any) {
      toast({ title: "Delete failed", description: err.message, variant: "destructive" });
    }
  };

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
              <div className="font-bold text-lg text-[#1E90FF]">Documents & Files</div>
            </div>
          </div>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-6 animate-fade-in mx-auto">
              <form onSubmit={handleUpload} className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} className="border rounded-lg px-3 py-2 text-sm" />
                <button type="submit" className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition" disabled={uploading || !file}>{uploading ? "Uploading..." : "Upload"}</button>
              </form>
              {loading ? (
                <div>Loading documents...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : documents.length === 0 ? (
                <div>No documents found.</div>
              ) : (
                <div className="flex flex-col gap-2">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center gap-4 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg p-4 border border-gray-100 dark:border-gray-800">
                      <span className="font-semibold">{doc.file_name}</span>
                      <span className="text-xs text-gray-500">{doc.file_type}</span>
                      <span className="text-xs text-gray-500">{(doc.size / 1024).toFixed(1)} KB</span>
                      <span className="text-xs text-gray-500">{new Date(doc.uploaded_at).toLocaleString()}</span>
                      <button className="text-xs text-[#1E90FF] hover:underline" onClick={() => handleDownload(doc)}>Download</button>
                      <button className="text-xs text-red-500 hover:underline" onClick={() => handleDelete(doc)}>Delete</button>
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

export default DocumentsFilesPage;
