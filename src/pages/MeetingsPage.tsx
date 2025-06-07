import React, { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator } from "@/components/ui/sidebar";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, ChevronLeft, ChevronRight, Video, Link as LinkIcon, Users, Plus, X } from "lucide-react";
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

const mockMeetings = [
  { date: "2025-06-10", time: "10:00 AM", topic: "Project Kickoff", status: "Upcoming", service: "Review", team: "Jane Doe", link: "https://zoom.us/123", recording: "https://zoom.us/rec/123" },
  { date: "2025-06-15", time: "2:00 PM", topic: "Design Review", status: "Upcoming", service: "Strategy", team: "John Smith", link: "https://meet.google.com/abc", recording: null },
  { date: "2025-06-01", time: "4:00 PM", topic: "Retrospective", status: "Completed", service: "Support", team: "Alice Lee", link: "https://zoom.us/456", recording: "https://zoom.us/rec/456" },
];

const services = ["Support", "Review", "Strategy"];
const teamMembers = ["Jane Doe", "John Smith", "Alice Lee"];
const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

const MeetingsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [calendarView, setCalendarView] = useState<'week' | 'month'>('week');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ service: '', team: '', date: '', time: '' });
  const [step, setStep] = useState(1);

  if (!user) return null;

  // Simple calendar mockup (not a real calendar lib)
  const today = new Date();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - today.getDay() + i);
    return d;
  });
  const monthDays = Array.from({ length: 28 }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth(), i + 1);
    return d;
  });

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F5F5F5] dark:bg-[#181A1B] font-sans">
        <Sidebar className="bg-white dark:bg-[#23272F] border-r border-gray-200 dark:border-gray-800 shadow-lg min-h-screen" style={{ minWidth: 220 }}>
          <SidebarHeader className="flex flex-col items-center py-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-[#1E90FF] rounded-full flex items-center justify-center text-white font-bold text-2xl">T</div>
              <span className="font-bold text-lg text-[#1E90FF]">TechBros</span>
            </div>
            <div className="text-xs text-gray-500 mb-2">Meetings / Book a Call</div>
          </SidebarHeader>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton isActive={item.label === "Meetings / Book a Call"} onClick={() => navigate(item.path)}>
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
          {/* Sticky Top Header - always visible */}
          <div className="sticky top-0 z-30 bg-white dark:bg-[#23272F] shadow flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1E90FF]">Meetings / Book a Call</div>
            <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#1877cc] transition animate-bounce">
              <Plus size={18} /> Book a Call
            </button>
          </div>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-6 animate-fade-in max-w-4xl mx-auto">
              {/* Calendar View */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <button className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${calendarView === 'week' ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-[#1E90FF]/10'}`} onClick={() => setCalendarView('week')}>Week</button>
                  <button className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${calendarView === 'month' ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-[#1E90FF]/10'}`} onClick={() => setCalendarView('month')}>Month</button>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><ChevronLeft size={18} /></button>
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><ChevronRight size={18} /></button>
                </div>
              </div>
              <div className="mb-6">
                {calendarView === 'week' ? (
                  <div className="grid grid-cols-7 gap-2">
                    {weekDays.map((d, i) => (
                      <div key={i} className="flex flex-col items-center p-3 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg border border-gray-100 dark:border-gray-800">
                        <span className="text-xs text-gray-500">{d.toLocaleDateString(undefined, { weekday: 'short' })}</span>
                        <span className="font-bold text-lg">{d.getDate()}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-7 gap-2">
                    {monthDays.map((d, i) => (
                      <div key={i} className="flex flex-col items-center p-2 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg border border-gray-100 dark:border-gray-800">
                        <span className="text-xs text-gray-500">{d.getDate()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Upcoming Meetings */}
              <div>
                <h2 className="text-lg font-bold mb-2 text-[#1E90FF]">Upcoming Meetings</h2>
                <div className="flex flex-col gap-3">
                  {mockMeetings.filter(m => m.status === 'Upcoming').map((meeting, i) => (
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg p-4 border border-gray-100 dark:border-gray-800" key={i}>
                      <div className="flex items-center gap-2 font-medium"><Calendar className="text-[#1E90FF]" /> {meeting.topic}</div>
                      <div className="text-xs text-gray-500">{meeting.date} at {meeting.time}</div>
                      <div className="text-xs text-gray-500">Service: {meeting.service}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1"><Users size={14}/> {meeting.team}</div>
                      <a href={meeting.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#1E90FF] hover:underline flex items-center gap-1"><LinkIcon size={14}/> Join</a>
                    </div>
                  ))}
                </div>
              </div>
              {/* Past Meetings */}
              <div>
                <h2 className="text-lg font-bold mb-2 text-[#1E90FF] mt-6">Past Meetings</h2>
                <div className="flex flex-col gap-3">
                  {mockMeetings.filter(m => m.status === 'Completed').map((meeting, i) => (
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg p-4 border border-gray-100 dark:border-gray-800" key={i}>
                      <div className="flex items-center gap-2 font-medium"><Calendar className="text-[#1E90FF]" /> {meeting.topic}</div>
                      <div className="text-xs text-gray-500">{meeting.date} at {meeting.time}</div>
                      <div className="text-xs text-gray-500">Service: {meeting.service}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1"><Users size={14}/> {meeting.team}</div>
                      <a href={meeting.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#1E90FF] hover:underline flex items-center gap-1"><LinkIcon size={14}/> Join</a>
                      {meeting.recording && <a href={meeting.recording} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline flex items-center gap-1"><Video size={14}/> Recording</a>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
        {/* Book a Call Modal - overlays but does not hide header */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fade-in">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setShowModal(false)}><X size={24} /></button>
              <h3 className="text-xl font-bold text-[#1E90FF] mb-2">Book a Call</h3>
              <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setShowModal(false); }}>
                {step === 1 && (
                  <>
                    <label className="text-sm font-semibold">Pick a Service</label>
                    <select className="border rounded-lg px-3 py-2 text-sm" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} required>
                      <option value="">Select...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <button type="button" className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition" onClick={() => setStep(2)} disabled={!form.service}>Next</button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <label className="text-sm font-semibold">Pick a Team Member</label>
                    <select className="border rounded-lg px-3 py-2 text-sm" value={form.team} onChange={e => setForm(f => ({ ...f, team: e.target.value }))} required>
                      <option value="">Select...</option>
                      {teamMembers.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <button type="button" className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition" onClick={() => setStep(3)} disabled={!form.team}>Next</button>
                  </>
                )}
                {step === 3 && (
                  <>
                    <label className="text-sm font-semibold">Pick a Time Slot</label>
                    <input type="date" className="border rounded-lg px-3 py-2 text-sm" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} required />
                    <select className="border rounded-lg px-3 py-2 text-sm" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} required>
                      <option value="">Select time...</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <button type="submit" className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition" disabled={!form.date || !form.time}>Book</button>
                  </>
                )}
              </form>
              <div className="mt-4 text-xs text-gray-500">
                <span>Sync with:</span>
                <a href="#" className="ml-2 text-[#1E90FF] hover:underline">Google Calendar</a> | <a href="#" className="text-[#1E90FF] hover:underline">Outlook</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </SidebarProvider>
  );
};

export default MeetingsPage;
