"use client";
import { useDashboard } from "@/app/admin/dashboard/hook/dashboard.hook";
import Loader from "@/components/common/Loader";
import { DashboardDataInterface } from "@/global/types/type";
import { MoreVertical, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function StatCard({
  title,
  period,
  children,
}: {
  title: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-800">{title}</p>
          <p className="text-xs text-gray-400 mt-0.5">{period}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      {children}
      <button className="self-start mt-auto border border-gray-200 text-xs text-gray-600 rounded-full px-4 py-1.5 hover:bg-gray-50 transition-colors">
        Details
      </button>
    </div>
  );
}

export default function StatsCards() {
  /// get data from store
  const data = useSelector(
    (state: { dashboard: DashboardDataInterface }) => state.dashboard,
  );

  // call hook
  const { handleGetDashboardData } = useDashboard();
  useEffect(() => {
    const getDataFunc = async () => {
      await handleGetDashboardData();
    };
    getDataFunc();
  }, []);

  // get data from store

  if (data.loading) {
    return (
      <div className=" h-[60vh] w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Total Sales */}
      <StatCard title="Total Sales" period="Last 7 days">
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-gray-900">${data.data?.totalSales}</span>
          <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-500 mb-1">
            <TrendingUp className="w-3 h-3" /> 10.4%
          </span>
        </div>
        <p className="text-xs text-gray-400">
          Previous 7days{" "}
          <span className="text-emerald-500 font-medium">($235)</span>
        </p>
      </StatCard>

      {/* Total Orders */}
      <StatCard title="Total Orders" period="Last 7 days">
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-gray-900">{data?.data?.totalOrder}</span>
          <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-500 mb-1">
            <TrendingUp className="w-3 h-3" /> 14.4%
          </span>
        </div>
        <p className="text-xs text-gray-400">
          Previous 7days{" "}
          <span className="text-emerald-500 font-medium">(7.6k)</span>
        </p>
      </StatCard>

      {/* Pending & Canceled */}
      <StatCard title="Pending & Canceled" period="Last 7 days">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-gray-500 mb-1">Pending</p>
            <p className="text-2xl font-bold text-gray-900">{data?.data?.pendingOrder}</p>
            <p className="text-xs text-gray-400">user 204</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Canceled</p>
            <div className="flex items-end gap-1">
              <p className="text-2xl font-bold text-gray-900">{data?.data?.cancelledOrder}</p>
              <span className="flex items-center gap-0.5 text-xs font-semibold text-red-500 mb-1">
                <TrendingDown className="w-3 h-3" /> 14.4%
              </span>
            </div>
          </div>
        </div>
      </StatCard>
    </div>
  );
}
