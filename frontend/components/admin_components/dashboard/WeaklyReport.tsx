"use client";

import { useDashboard } from "@/app/admin/dashboard/hook/dashboard.hook";
import { WeaklyInitialState } from "@/app/admin/dashboard/toolkit/dashboard.toolkit";
import { MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WeaklyReChart from "./WeaklyReChart";




export default function WeeklyReport() {
  // selected report data
  const [selectedData, setSelectedData] = useState<string>("weaklyCustomer");
  const weaklyData = useSelector(
    (state: { dashboard: WeaklyInitialState }) => state.dashboard,
  );

  // report data
  const [reportData, setReportData] = useState<unknown[] | undefined>(
    weaklyData.weaklyData?.weakly_customer || [],
  );

  // get weakly data hook
  const { handleGetWeeklyData } = useDashboard();
  useEffect(() => {
    async function getData() {
      await handleGetWeeklyData();
    }
    if (!weaklyData.weaklySuccess) {
      getData();
    }
  }, []);

  useEffect(() => {
    // if (selectedData === "weaklyCustomer") {
    //   setReportData(
    //     weaklyData?.weaklyData?.weakly_customer.map((item) => {
    //       const createdAt = item.createdAt;
    //       const dayName = new Date(createdAt).toLocaleDateString("en-US", {
    //         weekday: "short",
    //       });

    //       return {
    //         day: dayName,
    //         value: item.length
    //       }
    //     }),

    //   );
    // }
    if (selectedData === "weaklyProduct") {
      setReportData(weaklyData?.weaklyData?.weakly_product);
    }
    if (selectedData === "stockProduct") {
      setReportData(weaklyData?.weaklyData?.stock_product);
    }
    if (selectedData === "outOfStockProduct") {
      setReportData(weaklyData?.weaklyData?.out_of_stock_product);
    }
  }, [selectedData]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 w-full  shadow-sm h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-gray-800">
          Report for this week
        </p>
        <div className="flex items-center gap-2">
          <button className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium border border-emerald-200">
            This week
          </button>
          <button className="text-xs px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50 border border-gray-200">
            Last week
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap md:gap-4 gap-2 lg:gap-6 mb-3 md:mb-5">
        <div
          className=" cursor-pointer"
          onClick={() => setSelectedData("weaklyCustomer")}
        >
          {/* ${
                weaklyData?.weaklyData?.weakly_customer?.active
                  ? "text-gray-900 border-b-2 border-emerald-500 pb-0.5"
                  : "text-gray-700"
              } */}
          <p
            className={`text-lg lg:text-xl font-bold ${
              selectedData === "weaklyCustomer"
                ? "text-gray-900 border-b-2 border-emerald-500 pb-0.5"
                : "text-gray-700"
            }`}
          >
            {weaklyData?.weaklyData?.weakly_customer?.length}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{"Total Customer"}</p>
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => setSelectedData("weaklyProduct")}
        >
          <p
            className={`text-lg lg:text-xl font-bold ${
              selectedData === "weaklyProduct"
                ? "text-gray-900 border-b-2 border-emerald-500 pb-0.5"
                : "text-gray-700"
            }`}
          >
            {weaklyData?.weaklyData?.weakly_product?.length}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{"Product"}</p>
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => setSelectedData("stockProduct")}
        >
          <p
            className={`text-lg lg:text-xl font-bold ${
              selectedData === "stockProduct"
                ? "text-gray-900 border-b-2 border-emerald-500 pb-0.5"
                : "text-gray-700"
            }`}
          >
            {weaklyData?.weaklyData?.stock_product?.length}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{"Stock Product"}</p>
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => setSelectedData("outOfStockProduct")}
        >
          <p
            className={`text-lg lg:text-xl font-bold ${
              selectedData === "outOfStockProduct"
                ? "text-gray-900 border-b-2 border-emerald-500 pb-0.5"
                : "text-gray-700"
            }`}
          >
            {weaklyData?.weaklyData?.out_of_stock_product?.length}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{"Out of Stock"}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-full">
        <WeaklyReChart />
      </div>
    </div>
  );
}
