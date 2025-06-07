import React, { useState } from "react";
import { CreditCard, Bitcoin, Download, CheckCircle, XCircle, Clock, Plus, Edit, AlertCircle, FileText, Home, Folder, MessageCircle, Calendar, BarChart2, File, Settings } from "lucide-react";
import Footer from "@/components/Footer";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, SidebarSeparator } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

const mockInvoices = [
  { id: "INV-1234", project: "Website Redesign", date: "2025-06-01", amount: 2500, status: "Paid" },
  { id: "INV-1235", project: "Mobile App", date: "2025-06-10", amount: 4000, status: "Pending" },
  { id: "INV-1236", project: "Branding", date: "2025-05-20", amount: 1200, status: "Overdue" },
];

const paymentMethods = [
  { type: "Card", last4: "4242", brand: "Visa" },
  { type: "PayPal", email: "client@email.com" },
  { type: "Crypto", address: "0x1234...abcd" },
];

const navItems = [
  { icon: <FileText />, label: "Invoices & Billing", path: "/billing" },
  { icon: <Home />, label: "Dashboard", path: "/dashboard" },
  { icon: <Folder />, label: "My Projects", path: "/my-projects" },
  { icon: <MessageCircle />, label: "Messages/Support", path: "/messages" },
  { icon: <Calendar />, label: "Meetings / Book a Call", path: "/meetings" },
  { icon: <BarChart2 />, label: "Reports & Analytics", path: "/analytics" },
  { icon: <File />, label: "Documents & Files", path: "/documents" },
  { icon: <Settings />, label: "Account Settings", path: "/settings" },
];

const InvoicesBillingPage = () => {
  const [filter, setFilter] = useState("All");
  const [showCardModal, setShowCardModal] = useState(false);
  const [sortBy, setSortBy] = useState("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [subscriptionActive] = useState(true);
  const navigate = useNavigate();

  const filteredInvoices = mockInvoices.filter(inv => filter === "All" || inv.status === filter);
  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    if (sortBy === "date") {
      return sortDir === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    } else if (sortBy === "amount") {
      return sortDir === "asc" ? a.amount - b.amount : b.amount - a.amount;
    } else if (sortBy === "status") {
      return sortDir === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
    }
    return 0;
  });

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
            <div className="font-bold text-lg text-[#1E90FF] flex items-center gap-2"><FileText /> Invoices & Billing</div>
            <button className="flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#1877cc] transition"><Download size={18}/> Download Statement</button>
          </div>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow p-6 flex flex-col gap-8 animate-fade-in mx-auto">
              {/* Recurring Billing Alert */}
              {subscriptionActive && (
                <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-lg px-4 py-2 text-sm mb-2"><AlertCircle size={18}/> Recurring billing is active for your subscription.</div>
              )}
              {/* Filter Bar */}
              <div className="flex flex-wrap gap-2 mb-2">
                {["All", "Pending", "Paid", "Overdue"].map(opt => (
                  <button key={opt} className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${filter === opt ? 'bg-[#1E90FF] text-white border-[#1E90FF]' : 'bg-gray-100 dark:bg-[#23272F]/60 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-[#1E90FF]/10'}`} onClick={() => setFilter(opt)}>{opt}</button>
                ))}
              </div>
              {/* Invoices Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-[#23272F]/60">
                      <th className="p-3 cursor-pointer" onClick={() => { setSortBy('id'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Invoice ID</th>
                      <th className="p-3">Project</th>
                      <th className="p-3 cursor-pointer" onClick={() => { setSortBy('date'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Date</th>
                      <th className="p-3 cursor-pointer" onClick={() => { setSortBy('amount'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Amount</th>
                      <th className="p-3 cursor-pointer" onClick={() => { setSortBy('status'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Status</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedInvoices.map((inv, i) => (
                      <tr key={inv.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-[#F5F5F5] dark:hover:bg-[#23272F]/40 transition">
                        <td className="p-3 font-mono font-bold">{inv.id}</td>
                        <td className="p-3">{inv.project}</td>
                        <td className="p-3">{inv.date}</td>
                        <td className="p-3">${inv.amount.toLocaleString()}</td>
                        <td className="p-3">
                          {inv.status === 'Paid' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800"><CheckCircle size={14}/> Paid</span>}
                          {inv.status === 'Pending' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800"><Clock size={14}/> Pending</span>}
                          {inv.status === 'Overdue' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800"><XCircle size={14}/> Overdue</span>}
                        </td>
                        <td className="p-3 flex gap-2">
                          <button className="text-[#1E90FF] hover:underline">View</button>
                          <button className="text-[#1E90FF] hover:underline">Download</button>
                          {inv.status !== 'Paid' && <button className="text-green-600 hover:underline">Pay</button>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Billing Settings */}
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-2 text-[#1E90FF]">Billing Settings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="font-semibold mb-1">Saved Payment Methods</div>
                    <div className="flex flex-col gap-2">
                      {paymentMethods.map((pm, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 dark:bg-[#23272F]/60 rounded-lg px-4 py-2">
                          {pm.type === 'Card' && <CreditCard size={18} className="text-[#1E90FF]" />}
                          {pm.type === 'PayPal' && <span className="text-[#1E90FF] font-bold text-lg">PP</span>}
                          {pm.type === 'Crypto' && <Bitcoin size={18} className="text-[#1E90FF]" />}
                          <span className="font-mono">{pm.type === 'Card' ? `**** **** **** ${pm.last4}` : pm.type === 'PayPal' ? pm.email : pm.address}</span>
                          <button className="ml-auto text-xs text-[#1E90FF] hover:underline" onClick={() => setShowCardModal(true)}><Edit size={14}/> Change</button>
                        </div>
                      ))}
                      <button className="flex items-center gap-1 text-xs text-[#1E90FF] hover:underline mt-2" onClick={() => setShowCardModal(true)}><Plus size={14}/> Add Payment Method</button>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Billing Address</div>
                    <div className="bg-gray-50 dark:bg-[#23272F]/60 rounded-lg px-4 py-2 flex items-center justify-between">
                      <span>123 Main St, Nairobi, Kenya</span>
                      <button className="text-xs text-[#1E90FF] hover:underline"><Edit size={14}/> Edit</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add/Change Card Modal */}
              {showCardModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                  <div className="bg-white dark:bg-[#23272F] rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fade-in">
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setShowCardModal(false)}><XCircle size={24} /></button>
                    <h3 className="text-xl font-bold text-[#1E90FF] mb-2">Add / Change Payment Method</h3>
                    <form className="flex flex-col gap-3">
                      <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Card Number" />
                      <div className="flex gap-2">
                        <input className="border rounded-lg px-3 py-2 text-sm flex-1" placeholder="MM/YY" />
                        <input className="border rounded-lg px-3 py-2 text-sm flex-1" placeholder="CVC" />
                      </div>
                      <button className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1877cc] transition">Save</button>
                    </form>
                  </div>
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

export default InvoicesBillingPage;
