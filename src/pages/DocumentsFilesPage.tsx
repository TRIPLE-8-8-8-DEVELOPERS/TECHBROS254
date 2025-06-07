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
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator } from "@/components/ui/sidebar";

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

const mockFolders = [
  {
    name: "All Files",
    icon: <Folder className="text-[#1E90FF]" />, // root
    children: [
      {
        name: "Contracts",
        icon: <Folder className="text-[#1E90FF]" />,
      },
      {
        name: "Designs",
        icon: <Folder className="text-[#1E90FF]" />,
      },
      {
        name: "Invoices",
        icon: <Folder className="text-[#1E90FF]" />,
      },
    ],
  },
];

const mockFiles = [
  {
    name: "Signed NDA.pdf",
    type: "pdf",
    size: "1.2 MB",
    tags: ["legal"],
    url: "#",
    preview: <FileTextIcon className="text-[#1E90FF]" />,
    updated: "2024-06-01",
  },
  {
    name: "Logo.png",
    type: "image",
    size: "320 KB",
    tags: ["design"],
    url: "#",
    preview: <ImageIcon className="text-[#1E90FF]" />,
    updated: "2024-05-28",
  },
  {
    name: "Project-Alpha-Deliverable.zip",
    type: "zip",
    size: "8.5 MB",
    tags: ["deliverable"],
    url: "#",
    preview: <FileArchive className="text-[#1E90FF]" />,
    updated: "2024-05-20",
  },
  {
    name: "Invoice-1234.pdf",
    type: "pdf",
    size: "900 KB",
    tags: ["invoice"],
    url: "#",
    preview: <FileTextIcon className="text-[#1E90FF]" />,
    updated: "2024-05-15",
  },
];

const STORAGE_USED = 10.2; // MB
const STORAGE_TOTAL = 50; // MB
const FILE_SIZE_LIMIT = 20; // MB

const DocumentsFilesPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("All Files");
  if (!user) return null;

  // Folder navigation (mock, single level)
  const renderFolders = (folders) => (
    <ul className="space-y-1">
      {folders.map((folder) => (
        <li key={folder.name}>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-lg w-full text-left hover:bg-[#F0F6FF] dark:hover:bg-[#232B3B] ${selectedFolder === folder.name ? "bg-[#E6F0FF] dark:bg-[#1E293B] font-semibold" : ""}`}
            onClick={() => setSelectedFolder(folder.name)}
          >
            {folder.icon}
            <span>{folder.name}</span>
            {folder.children && (
              <ChevronRight className="ml-auto text-gray-400" size={16} />
            )}
          </button>
          {folder.children && (
            <ul className="ml-6 mt-1 space-y-1">
              {folder.children.map((child) => (
                <li key={child.name}>
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg w-full text-left hover:bg-[#F0F6FF] dark:hover:bg-[#232B3B] ${selectedFolder === child.name ? "bg-[#E6F0FF] dark:bg-[#1E293B] font-semibold" : ""}`}
                    onClick={() => setSelectedFolder(child.name)}
                  >
                    {child.icon}
                    <span>{child.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  // File explorer (mock, filter by folder/tag if needed)
  const renderFiles = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockFiles.map((file, i) => (
        <div
          key={i}
          className="bg-white dark:bg-[#23272F] rounded-xl shadow p-4 flex flex-col gap-2 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition group"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-[#F0F6FF] dark:bg-[#1E293B] rounded-lg">
              {file.preview}
            </div>
            <div className="">
              <div className="font-semibold text-sm truncate">{file.name}</div>
              <div className="text-xs text-gray-500">{file.size} • {file.updated}</div>
            </div>
            <button className="p-1 rounded hover:bg-[#F0F6FF] dark:hover:bg-[#232B3B]" title="Preview">
              <Eye size={18} />
            </button>
            <button className="p-1 rounded hover:bg-[#F0F6FF] dark:hover:bg-[#232B3B]" title="Download">
              <Download size={18} />
            </button>
            <button className="p-1 rounded hover:bg-[#F0F6FF] dark:hover:bg-[#232B3B]" title="Share">
              <Share2 size={18} />
            </button>
            <button className="p-1 rounded hover:bg-[#F0F6FF] dark:hover:bg-[#232B3B]" title="Delete">
              <Trash2 size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {file.tags.map((tag, j) => (
              <span key={j} className="flex items-center gap-1 px-2 py-0.5 bg-[#E6F0FF] dark:bg-[#1E293B] text-xs rounded-full text-[#1E90FF]">
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Drag & drop upload area
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // handle file upload here
    setShowUploadModal(true);
  };

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
          {/* Top Navbar or header if needed */}
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1E90FF]">Documents & Files</div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-[#1E90FF] hover:bg-[#1877CC] text-white rounded-lg font-semibold shadow transition"
              onClick={() => setShowUploadModal(true)}
            >
              <Plus size={18} /> Add Document
            </button>
          </div>
          <main className="flex-1 flex flex-col md:flex-row gap-6 p-8 overflow-y-auto w-full">
            {/* Left: Folder Navigation */}
            <aside className="w-full md:w-56 min-w-[180px] max-w-[220px] bg-white dark:bg-[#23272F] rounded-2xl shadow p-4 h-fit self-start">
              <div className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Folders</div>
              {renderFolders(mockFolders)}
              <div className="mt-6">
                <div className="text-xs text-gray-500 mb-1">Storage Used</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-[#1E90FF] rounded-full"
                      style={{ width: `${(STORAGE_USED / STORAGE_TOTAL) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">{STORAGE_USED}MB / {STORAGE_TOTAL}MB</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Max file size: {FILE_SIZE_LIMIT}MB</div>
              </div>
            </aside>
            {/* Right: File Explorer */}
            <section className="flex-1 flex flex-col gap-6 mt-4 md:mt-0">
              {/* Drag & Drop Upload */}
              <div
                className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center transition ${dragActive ? "border-[#1E90FF] bg-[#F0F6FF] dark:bg-[#232B3B]" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#23272F]"}`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                <UploadCloud size={36} className="text-[#1E90FF] mb-2" />
                <div className="font-semibold text-gray-700 dark:text-gray-200">Drag & drop files here to upload</div>
                <div className="text-xs text-gray-500 mt-1">or click "Add Document"</div>
              </div>
              {/* File List/Grid */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-gray-700 dark:text-gray-200">Files</div>
                  {/* Grid/List toggle, search, filter can be added here */}
                </div>
                {renderFiles()}
              </div>
            </section>
          </main>
          {/* Upload Modal (mock) */}
          {showUploadModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-4 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-lg text-[#1E90FF]">Add Document</div>
                  <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-[#1E90FF] text-xl">&times;</button>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Select file to upload</label>
                  <input type="file" className="border rounded p-2" />
                  <div className="text-xs text-gray-400">Max file size: {FILE_SIZE_LIMIT}MB</div>
                </div>
                <button className="mt-4 px-4 py-2 bg-[#1E90FF] hover:bg-[#1877CC] text-white rounded-lg font-semibold shadow transition">Upload</button>
              </div>
            </div>
          )}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DocumentsFilesPage;
