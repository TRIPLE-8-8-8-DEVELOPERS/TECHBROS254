import React, { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator } from "@/components/ui/sidebar";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, Paperclip, Send, User, Tag, PlusCircle, X } from "lucide-react";
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

// Mock data for threads and messages
const mockThreads = [
  { id: 1, name: "Website Redesign", lastMessage: "Can you review the new homepage?", unread: 2 },
  { id: 2, name: "Mobile App", lastMessage: "Bug found in login flow.", unread: 0 },
  { id: 3, name: "Billing", lastMessage: "Invoice #1234 paid.", unread: 0 },
  { id: 4, name: "General Support", lastMessage: "How do I reset my password?", unread: 1 },
];

const mockChat = {
  1: [
    { from: "me", text: "Can you review the new homepage?", time: "09:00" },
    { from: "team", text: "Looks great! Let's update the About section.", time: "09:05" },
    { from: "me", text: "Will do!", time: "09:06" },
  ],
  2: [
    { from: "team", text: "Bug found in login flow.", time: "10:00" },
    { from: "me", text: "Thanks, I'll check it now.", time: "10:01" },
  ],
  3: [
    { from: "team", text: "Invoice #1234 paid.", time: "Yesterday" },
  ],
  4: [
    { from: "me", text: "How do I reset my password?", time: "Yesterday" },
    { from: "team", text: "Go to Account Settings > Security.", time: "Yesterday" },
  ],
};

const tags = ["urgent", "bug", "billing", "feature", "question"];
const faqSuggestions = [
  "How do I reset my password?",
  "Where can I find my invoices?",
  "How do I contact support?",
  "How do I assign a task to a team member?",
];

const MessagesSupport = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedThread, setSelectedThread] = useState(1);
  const [message, setMessage] = useState("");
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [assignedTo, setAssignedTo] = useState<string>("");

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
            <div className="text-xs text-gray-500 mb-2">Messages & Support</div>
          </SidebarHeader>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton isActive={item.label === "Messages/Support"} onClick={() => navigate(item.path)}>
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
            <button onClick={() => setShowSupportModal(true)} className="flex items-center gap-2 text-xs text-[#1E90FF] hover:underline">
              <HelpCircle size={16} /> Need Help?
            </button>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1E90FF]">Messages & Support</div>
            <button onClick={() => setShowSupportModal(true)} className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#1877cc] transition">
              <HelpCircle size={18} /> Contact TechBros Support
            </button>
          </div>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="flex gap-6 h-[70vh] flex-col md:flex-row">
              {/* Left: Threads List */}
              <div className="w-full md:w-72 bg-white dark:bg-[#23272F] rounded-2xl shadow p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#1E90FF]">Threads</h3>
                  <button className="text-[#1E90FF] hover:underline flex items-center gap-1 text-xs"><PlusCircle size={16}/> New</button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {mockThreads.map((thread) => (
                    <div
                      key={thread.id}
                      className={`p-3 rounded-lg cursor-pointer flex flex-col gap-1 mb-2 border ${selectedThread === thread.id ? 'border-[#1E90FF] bg-[#F0F8FF]' : 'border-transparent hover:bg-gray-50 dark:hover:bg-[#23272F]/80'}`}
                      onClick={() => setSelectedThread(thread.id)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">{thread.name}</span>
                        {thread.unread > 0 && <span className="bg-[#1E90FF] text-white text-xs rounded-full px-2 py-0.5">{thread.unread}</span>}
                      </div>
                      <span className="text-xs text-gray-500 truncate">{thread.lastMessage}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Chat Window */}
              <div className="flex-1 bg-white dark:bg-[#23272F] rounded-2xl shadow flex flex-col mt-4 md:mt-0">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="text-[#1E90FF]" />
                    <span className="font-bold text-lg">{mockThreads.find(t => t.id === selectedThread)?.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-gray-400" />
                    <input
                      className="border rounded px-2 py-1 text-xs w-32"
                      placeholder="Assign to..."
                      value={assignedTo}
                      onChange={e => setAssignedTo(e.target.value)}
                    />
                    <Tag size={20} className="text-gray-400" />
                    <select
                      className="border rounded px-2 py-1 text-xs"
                      value={selectedTag || ''}
                      onChange={e => setSelectedTag(e.target.value)}
                    >
                      <option value="">Tag</option>
                      {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2">
                  {mockChat[selectedThread]?.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-xl px-4 py-2 max-w-xs ${msg.from === 'me' ? 'bg-[#1E90FF] text-white' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-900 dark:text-gray-100'}`}>{msg.text}
                        <span className="block text-xs text-gray-400 mt-1">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                  {/* AI Suggestion Example */}
                  {selectedTag === 'bug' && (
                    <div className="flex justify-center mt-2">
                      <div className="bg-yellow-100 text-yellow-800 rounded-lg px-3 py-2 text-xs flex items-center gap-2">
                        <span>AI Suggestion:</span> This looks like a bug. <a href="#" className="underline text-[#1E90FF]">Create ticket?</a>
                      </div>
                    </div>
                  )}
                </div>
                {/* FAQ Suggestions */}
                <div className="border-t border-gray-100 dark:border-gray-800 px-6 py-2 bg-gray-50 dark:bg-[#23272F]/40 flex gap-4 overflow-x-auto">
                  {faqSuggestions.map((faq, i) => (
                    <button key={i} className="text-xs text-[#1E90FF] bg-white dark:bg-[#23272F] border border-[#1E90FF] rounded-lg px-3 py-1 mr-2 hover:bg-[#1E90FF] hover:text-white transition">{faq}</button>
                  ))}
                </div>
                {/* Chat Input */}
                <form className="flex items-center gap-2 px-6 py-4 border-t border-gray-100 dark:border-gray-800" onSubmit={e => { e.preventDefault(); setMessage(""); }}>
                  <label className="flex items-center cursor-pointer">
                    <Paperclip className="text-gray-400 mr-2" />
                    <input type="file" className="hidden" onChange={e => setAttachedFile(e.target.files?.[0] || null)} />
                  </label>
                  {attachedFile && (
                    <span className="text-xs bg-gray-200 dark:bg-[#23272F]/60 rounded px-2 py-1 flex items-center gap-1">{attachedFile.name} <X size={12} className="cursor-pointer" onClick={() => setAttachedFile(null)} /></span>
                  )}
                  <input
                    className="flex-1 border rounded-lg px-3 py-2 text-sm"
                    placeholder="Type your message..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <button type="submit" className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#1877cc] transition">
                    <Send size={18} /> Send
                  </button>
                </form>
              </div>
            </div>
          </main>
          <Footer />
        </div>
        {/* Support Modal */}
        {showSupportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fade-in">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setShowSupportModal(false)}><X size={24} /></button>
              <h3 className="text-xl font-bold text-[#1E90FF] mb-2">Contact TechBros Support</h3>
              <p className="text-sm text-gray-500 mb-4">How can we help you? Start a live chat or submit a ticket below.</p>
              <form className="flex flex-col gap-3">
                <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Subject" />
                <textarea className="border rounded-lg px-3 py-2 text-sm" placeholder="Describe your issue..." rows={4} />
                <button className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition">Submit Ticket</button>
              </form>
              <div className="mt-4">
                <div className="font-semibold text-xs mb-1">FAQ Suggestions:</div>
                <ul className="list-disc list-inside text-xs text-gray-500">
                  {faqSuggestions.map((faq, i) => <li key={i}>{faq}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </SidebarProvider>
  );
};

export default MessagesSupport;
