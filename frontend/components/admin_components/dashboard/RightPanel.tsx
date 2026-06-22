"use client";
import { MoreVertical, TrendingUp, TrendingDown } from "lucide-react";

const barHeights = [35, 55, 45, 65, 40, 70, 50, 60, 42, 68, 55, 45, 72, 58, 48, 65, 38, 62, 52, 70, 45, 60, 50, 55];

const countries = [
  { name: "US", flag: "🇺🇸", sales: "30k", change: "+25.8%", up: true },
  { name: "Brazil", flag: "🇧🇷", sales: "30k", change: "-15.8%", up: false },
  { name: "Australia", flag: "🇦🇺", sales: "25k", change: "+35.8%", up: true },
];

export default function RightPanel() {
  return (
    <div className=" px-4 bg-white rounded-2xl border border-gray-100">
      {/* Users online */}
      <div className=" p-5">
        <div className="flex items-start justify-between mb-3">
          <p className="text-xs font-semibold text-emerald-500">Users in last 30 minutes</p>
          <button className="text-gray-400"><MoreVertical className="w-4 h-4" /></button>
        </div>
        <p className="text-4xl font-bold text-gray-900">21.5K</p>
        <p className="text-xs text-gray-400 mt-1 mb-3">Users per minute</p>
        {/* Mini bar chart */}
        <div className="flex items-end gap-0.5 h-10">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: i >= barHeights.length - 6 ? "#10b981" : "#d1fae5",
              }}
            />
          ))}
        </div>
      </div>

      {/* Sales by country */}
      <div className=" p-4 flex-1">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-gray-800">Sales by Country</p>
          <p className="text-xs text-gray-500 font-medium">Sales</p>
        </div>

        <div className="space-y-4">
          {countries.map(({ name, flag, sales, change, up }) => (
            <div key={name} className="flex items-center gap-3">
              <span className="text-xl">{flag}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-medium text-gray-700">{sales}</p>
                  <span className={`flex items-center gap-0.5 text-xs font-semibold ${up ? "text-emerald-500" : "text-red-500"}`}>
                    {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {change}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: name === "US" ? "75%" : name === "Brazil" ? "75%" : "62%",
                      backgroundColor: up ? "#3b82f6" : "#3b82f6",
                    }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{name}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          View Insight
        </button>
      </div>
    </div>
  );
}
