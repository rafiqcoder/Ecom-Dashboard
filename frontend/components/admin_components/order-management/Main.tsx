"use client";

import { useState, useRef, useEffect } from "react";
import {
  Plus,
  MoreVertical,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  Check,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type PaymentStatus = "Paid" | "Unpaid";
type OrderStatus = "Delivered" | "Pending" | "Shipped" | "Cancelled";
type TabKey = "All order" | "Completed" | "Pending" | "Canceled";

interface Order {
  id: number;
  orderId: string;
  product: string;
  emoji: string;
  date: string;
  price: number;
  payment: PaymentStatus;
  status: OrderStatus;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const statCards = [
  { label: "Total Orders",     value: "1,240", change: "+14.4%", up: true,  sub: "Last 7 days" },
  { label: "New Orders",       value: "240",   change: "+20%",   up: true,  sub: "Last 7 days" },
  { label: "Completed Orders", value: "960",   change: "85%",    up: true,  sub: "Last 7 days" },
  { label: "Canceled Orders",  value: "87",    change: "5%",     up: false, sub: "Last 7 days" },
];

const initialOrders: Order[] = [
  { id: 1,  orderId: "#ORD0001", product: "Wireless Bluetooth Headphones", emoji: "🎧", date: "01-01-2025", price: 49.99, payment: "Paid",   status: "Delivered" },
  { id: 2,  orderId: "#ORD0002", product: "Men's T-Shirt",                 emoji: "👕", date: "01-01-2025", price: 14.99, payment: "Unpaid", status: "Pending"   },
  { id: 3,  orderId: "#ORD0003", product: "Men's Leather Wallet",          emoji: "👛", date: "01-01-2025", price: 49.99, payment: "Paid",   status: "Delivered" },
  { id: 4,  orderId: "#ORD0004", product: "Memory Foam Pillow",            emoji: "🛏️", date: "01-01-2025", price: 39.99, payment: "Paid",   status: "Shipped"   },
  { id: 5,  orderId: "#ORD0005", product: "Adjustable Dumbbells",          emoji: "🏋️", date: "01-01-2025", price: 14.99, payment: "Unpaid", status: "Pending"   },
  { id: 6,  orderId: "#ORD0006", product: "Coffee Maker",                  emoji: "☕", date: "01-01-2025", price: 79.99, payment: "Unpaid", status: "Cancelled" },
  { id: 7,  orderId: "#ORD0007", product: "Casual Baseball Cap",           emoji: "🧢", date: "01-01-2025", price: 49.99, payment: "Paid",   status: "Delivered" },
  { id: 8,  orderId: "#ORD0008", product: "Full HD Webcam",                emoji: "📷", date: "01-01-2025", price: 39.99, payment: "Paid",   status: "Delivered" },
  { id: 9,  orderId: "#ORD0009", product: "Smart LED Color Bulb",          emoji: "💡", date: "01-01-2025", price: 79.99, payment: "Unpaid", status: "Delivered" },
  { id: 10, orderId: "#ORD0010", product: "Men's T-Shirt",                 emoji: "👕", date: "01-01-2025", price: 14.99, payment: "Unpaid", status: "Delivered" },
];

const ALL_STATUSES: OrderStatus[] = ["Pending", "Shipped", "Delivered", "Cancelled"];
const tabs: TabKey[] = ["All order", "Completed", "Pending", "Canceled"];

// ─── Style maps ──────────────────────────────────────────────────────────────

const statusTextColor: Record<OrderStatus, string> = {
  Delivered: "text-emerald-600",
  Pending:   "text-amber-500",
  Shipped:   "text-blue-500",
  Cancelled: "text-red-500",
};

const statusBg: Record<OrderStatus, string> = {
  Delivered: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
  Pending:   "bg-amber-50  border-amber-200  hover:border-amber-400",
  Shipped:   "bg-blue-50   border-blue-200   hover:border-blue-400",
  Cancelled: "bg-red-50    border-red-200    hover:border-red-400",
};

const statusDot: Record<OrderStatus, string> = {
  Delivered: "bg-emerald-500",
  Pending:   "bg-amber-400",
  Shipped:   "bg-blue-500",
  Cancelled: "bg-red-400",
};

const statusOptionHover: Record<OrderStatus, string> = {
  Delivered: "hover:bg-emerald-50 hover:text-emerald-700",
  Pending:   "hover:bg-amber-50  hover:text-amber-700",
  Shipped:   "hover:bg-blue-50   hover:text-blue-700",
  Cancelled: "hover:bg-red-50    hover:text-red-700",
};

// ─── Toast ────────────────────────────────────────────────────────────────────

interface ToastState { orderId: string; from: OrderStatus; to: OrderStatus }

const Toast = ({ toast, onClose }: { toast: ToastState; onClose: () => void }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white text-sm px-4 py-3 rounded-xl shadow-xl animate-fade-in">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${statusDot[toast.to]}`} />
      <span>
        <span className="font-semibold">{toast.orderId}</span> status changed to{" "}
        <span className={`font-semibold ${statusTextColor[toast.to]}`}>{toast.to}</span>
      </span>
      <button onClick={onClose} className="ml-2 text-gray-400 hover:text-white text-lg leading-none">&times;</button>
    </div>
  );
};

// ─── Status Dropdown ─────────────────────────────────────────────────────────

interface StatusDropdownProps {
  orderId: string;
  current: OrderStatus;
  onChange: (orderId: string, next: OrderStatus) => void;
}

const StatusDropdown = ({ orderId, current, onChange }: StatusDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${statusBg[current]} ${statusTextColor[current]}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${statusDot[current]}`} />
        {current}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-40 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1 overflow-hidden">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide px-3 pt-2 pb-1">
            Change status
          </p>
          {ALL_STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => { onChange(orderId, s); setOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${statusTextColor[s]} ${statusOptionHover[s]} ${current === s ? "font-semibold" : "font-normal"}`}
            >
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${statusDot[s]}`} />
                {s}
              </span>
              {current === s && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── PaymentBadge ─────────────────────────────────────────────────────────────

const PaymentBadge = ({ status }: { status: PaymentStatus }) => (
  <span className="flex items-center gap-1.5 text-sm text-gray-700">
    <span className={`w-2 h-2 rounded-full ${status === "Paid" ? "bg-emerald-500" : "bg-red-400"}`} />
    {status}
  </span>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [activeTab, setActiveTab] = useState<TabKey>("All order");
  const [currentPage, setCurrentPage] = useState(1);
  const [toast, setToast] = useState<ToastState | null>(null);
  const totalPages = 24;
  const pageNumbers = [1, 2, 3, 4, 5];

  const handleStatusChange = (orderId: string, next: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.orderId === orderId) {
          setToast({ orderId, from: o.status, to: next });
          return { ...o, status: next };
        }
        return o;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="w-full mx-auto space-y-5">

        {/* Page Title + Actions */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Order List</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
              <Plus className="w-4 h-4" /> Add Order
            </button>
            <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
              More Action <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-4">
          {statCards.map((card) => (
            <div key={card.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm text-gray-500 font-medium">{card.label}</p>
                <button className="text-gray-300 hover:text-gray-500"><MoreVertical className="w-4 h-4" /></button>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">{card.value}</span>
                <span className={`flex items-center gap-0.5 text-xs font-semibold ${card.up ? "text-emerald-500" : "text-red-400"}`}>
                  {card.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {card.change}
                </span>
              </div>
              <p className="text-xs text-gray-400">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

          {/* Tabs + Search */}
          <div className="flex items-center justify-between px-5 pt-4 pb-0 border-b border-gray-100">
            <div className="flex items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === tab
                      ? "text-emerald-600 bg-emerald-50 border border-b-0 border-emerald-100"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                  {tab === "All order" && (
                    <span className="ml-1.5 text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-semibold">240</span>
                  )}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 pb-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search order report"
                  className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-200 w-52"
                />
              </div>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500"><SlidersHorizontal className="w-4 h-4" /></button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500"><ArrowUpDown className="w-4 h-4" /></button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500"><MoreHorizontal className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="bg-emerald-50/60">
                <th className="text-left text-xs font-semibold text-emerald-700 px-5 py-3 w-12">No.</th>
                <th className="text-left text-xs font-semibold text-emerald-700 px-4 py-3">Order Id</th>
                <th className="text-left text-xs font-semibold text-emerald-700 px-4 py-3">Product</th>
                <th className="text-left text-xs font-semibold text-emerald-700 px-4 py-3">Date</th>
                <th className="text-left text-xs font-semibold text-emerald-700 px-4 py-3">Price</th>
                <th className="text-left text-xs font-semibold text-emerald-700 px-4 py-3">Payment</th>
                <th className="text-left text-xs font-semibold text-emerald-700 px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-50 hover:bg-gray-50/60 transition-colors">
                  <td className="px-5 py-3.5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 text-xs text-gray-500">{order.id}</span>
                  </td>
                  <td className="px-4 py-3.5 text-sm font-medium text-gray-700">{order.orderId}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl leading-none">{order.emoji}</span>
                      <span className="text-sm text-gray-800">{order.product}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-500">{order.date}</td>
                  <td className="px-4 py-3.5 text-sm font-medium text-gray-800">{order.price.toFixed(2)}</td>
                  <td className="px-4 py-3.5"><PaymentBadge status={order.payment} /></td>
                  <td className="px-4 py-3.5">
                    <StatusDropdown
                      orderId={order.orderId}
                      current={order.status}
                      onChange={handleStatusChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <div className="flex items-center gap-1.5">
              {pageNumbers.map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === n ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  {n}
                </button>
              ))}
              <span className="px-1 text-gray-400 text-sm">····</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === totalPages ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {totalPages}
              </button>
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-40 transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast && <Toast toast={toast} onClose={() => setToast(null)} />}
    </div>
  );
}