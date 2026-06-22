"use client";
import Link from "next/link";
import {
  LayoutDashboard, ShoppingCart, Users, Tag, Grid, CreditCard,
  Award, PlusCircle, Image, List, Star, ShieldCheck, Lock,
  ChevronRight, AlignLeft, ExternalLink, LogOut
} from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, link:"/admin/dashboard" },
  { label: "Order Management", icon: ShoppingCart, link:"/admin/order-management" },
  { label: "Customers", icon: Users, link:"/admin/customers" },
  { label: "Coupon Code", icon: Tag, link:"/admin/coupon" },
  { label: "Categories", icon: Grid, link:"/admin/category" },
  { label: "Transaction", icon: CreditCard, link:"/admin/transactions" },
  { label: "Brand", icon: Award, link: "/admin/brand" },
];


const productItems = [
  { label: "Add Products", icon: PlusCircle },
  { label: "Product Media", icon: Image },
  { label: "Product List", icon: List },
  { label: "Product Reviews", icon: Star },
];

const adminItems = [
  { label: "Admin role", icon: ShieldCheck },
  { label: "Control Authority", icon: Lock },
];

export default function Sidebar() {
  const path = usePathname();
  console.log(path)
  return (
    <aside className="w-56 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-100">
        <span className="text-xl font-bold text-gray-900 tracking-tight">
          DEALP<span className="text-emerald-500">⚡</span>RT
        </span>
        <AlignLeft className="ml-auto w-4 h-4 text-gray-400 cursor-pointer" />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-5">
        {/* Main Menu */}
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Main menu</p>
          <ul className="space-y-0.5">
            {navItems.map(({ label, icon: Icon, link }) => (
              <li key={label}>
                <Link
                  href={link}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    path===link
                      ? "bg-emerald-500 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product */}
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Product</p>
          <ul className="space-y-0.5">
            {productItems.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Admin */}
        <div>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Admin</p>
          <ul className="space-y-0.5">
            {adminItems.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User Footer */}
      <div className="px-3 py-3 border-t border-gray-100 space-y-1">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">D</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Dealport</p>
            <p className="text-xs text-gray-400 truncate">Mark@thedesigner...</p>
          </div>
          <LogOut className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Your Shop
          <ExternalLink className="w-3 h-3 ml-auto text-gray-400" />
        </a>
      </div>
    </aside>
  );
}
