"use client";
import { Search, Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-3.5 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search data, users, or reports"
            className="pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
          />
        </div>
        {/* Icons */}
        <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-bold cursor-pointer">M</div>
      </div>
    </header>
  );
}
