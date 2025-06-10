import React, { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { Home, Folder, MessageCircle, Calendar, FileText, BarChart2, File, Settings, LogOut, HelpCircle, ChevronLeft, ChevronRight, Video, Link as LinkIcon, Users, Plus, X } from "lucide-react";
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

const services = ["Support", "Review", "Strategy"];
const teamMembers = ["Jane Doe", "John Smith", "Alice Lee"];
const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

const MeetingsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [calendarView, setCalendarView] = useState<'week' | 'month'>('week');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ service: '', team: '', date: '', time: '' });
  const [step, setStep] = useState(1);
  const [meetings, setMeetings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);

  // Fetch meetings from Supabase
  React.useEffect(() => {
    if (!user) return;
    setLoading(true);
    supabase
      .from("meetings")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message);
        setMeetings(data || []);
        setLoading(false);
      });
  }, [user]);

  // Book a new meeting
  const handleBookMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setBooking(true);
    try {
      const { data, error } = await supabase.from("meetings").insert({
        user_id: user.id,
        service: form.service,
        team: form.team,
        date: form.date,
        time: form.time,
        status: "Upcoming",
        created_at: new Date().toISOString(),
      }).select();
      if (error) throw error;
      setMeetings([...(data || []), ...meetings]);
      setShowModal(false);
      setForm({ service: '', team: '', date: '', time: '' });
      setStep(1);
      toast({ title: "Meeting booked", description: `${form.date} at ${form.time}` });
    } catch (err: any) {
      toast({ title: "Error booking meeting", description: err.message, variant: "destructive" });
    } finally {
      setBooking(false);
    }
  };

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
              <div className="font-bold text-lg text-[#1E90FF]">Meetings / Book a Call</div>
            </div>
            <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#1877cc] transition animate-bounce">
              <Plus size={18} /> Book a Call
            </button>
          </div>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-6 animate-fade-in mx-auto">
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
                  {loading ? (
                    <div>Loading meetings...</div>
                  ) : error ? (
                    <div className="text-red-500">{error}</div>
                  ) : meetings.filter(m => m.status === 'Upcoming').length === 0 ? (
                    <div>No upcoming meetings.</div>
                  ) : (
                    meetings.filter(m => m.status === 'Upcoming').map((meeting, i) => (
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg p-4 border border-gray-100 dark:border-gray-800" key={meeting.id}>
                        <div className="flex items-center gap-2 font-medium"><Calendar className="text-[#1E90FF]" /> {meeting.topic || meeting.service}</div>
                        <div className="text-xs text-gray-500">{meeting.date} at {meeting.time}</div>
                        <div className="text-xs text-gray-500">Service: {meeting.service}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1"><Users size={14}/> {meeting.team}</div>
                        {meeting.link && <a href={meeting.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#1E90FF] hover:underline flex items-center gap-1"><LinkIcon size={14}/> Join</a>}
                      </div>
                    ))
                  )}
                </div>
              </div>
              {/* Past Meetings */}
              <div>
                <h2 className="text-lg font-bold mb-2 text-[#1E90FF] mt-6">Past Meetings</h2>
                <div className="flex flex-col gap-3">
                  {loading ? (
                    <div>Loading meetings...</div>
                  ) : error ? (
                    <div className="text-red-500">{error}</div>
                  ) : meetings.filter(m => m.status === 'Completed').length === 0 ? (
                    <div>No past meetings.</div>
                  ) : (
                    meetings.filter(m => m.status === 'Completed').map((meeting, i) => (
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg p-4 border border-gray-100 dark:border-gray-800" key={meeting.id}>
                        <div className="flex items-center gap-2 font-medium"><Calendar className="text-[#1E90FF]" /> {meeting.topic || meeting.service}</div>
                        <div className="text-xs text-gray-500">{meeting.date} at {meeting.time}</div>
                        <div className="text-xs text-gray-500">Service: {meeting.service}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1"><Users size={14}/> {meeting.team}</div>
                        {meeting.link && <a href={meeting.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#1E90FF] hover:underline flex items-center gap-1"><LinkIcon size={14}/> Join</a>}
                        {meeting.recording && <a href={meeting.recording} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline flex items-center gap-1"><Video size={14}/> Recording</a>}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </main>
          <Footer />
          {/* Book a Call Modal - overlays but does not hide header */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fade-in">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setShowModal(false)}><X size={24} /></button>
                <h3 className="text-xl font-bold text-[#1E90FF] mb-2">Book a Call</h3>
                <form className="flex flex-col gap-4" onSubmit={handleBookMeeting}>
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
                      <button type="submit" className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition" disabled={!form.date || !form.time || booking}>{booking ? "Booking..." : "Book"}</button>
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
      </div>
    </SidebarProvider>
  );
};

export default MeetingsPage;
