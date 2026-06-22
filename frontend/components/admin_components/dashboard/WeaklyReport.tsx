"use client";

import { MoreVertical } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const chartData = [
  { day: "Sun", value: 18000 },
  { day: "Mon", value: 22000 },
  { day: "Tue", value: 28000 },
  { day: "Wed", value: 14000 },
  { day: "Thu", value: 32000 },
  { day: "Fri", value: 27000 },
  { day: "Sat", value: 31000 },
];

const stats = [
  { label: "Customers", value: "52k", active: true },
  { label: "Total Products", value: "3.5k" },
  { label: "Stock Products", value: "2.5k" },
  { label: "Out of Stock", value: "0.5k" },
  { label: "Revenue", value: "250k" },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-700 text-white rounded-xl px-3 py-2 text-center shadow-lg">
        <p className="text-[10px] font-bold text-white">{label}</p>
        <p className="text-[10px] text-emerald-300 font-semibold">
          {((payload[0].value as number) / 1000).toFixed(0)}k
        </p>
      </div>
    );
  }
  return null;
};

const CustomDot = (props: {
  cx?: number;
  cy?: number;
  index?: number;
}) => {
  const { cx, cy } = props;
  if (cx === undefined || cy === undefined) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill="white"
      stroke="#10b981"
      strokeWidth={2}
    />
  );
};

export default function WeeklyReport() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 w-full  shadow-sm h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-gray-800">Report for this week</p>
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
        {stats.map(({ label, value, active }) => (
          <div key={label}>
            <p
              className={`text-lg lg:text-xl font-bold ${
                active
                  ? "text-gray-900 border-b-2 border-emerald-500 pb-0.5"
                  : "text-gray-700"
              }`}
            >
              {value}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full  h-[70%]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="#f0f0f0"
              strokeWidth={1}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y + 10}
                  textAnchor="middle"
                  fontSize={9}
                  fill={payload.value === "Wed" ? "#10b981" : "#9ca3af"}
                  fontWeight={payload.value === "Wed" ? "bold" : "normal"}
                >
                  {payload.value}
                </text>
              )}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => (v === 0 ? "0k" : `${v / 1000}k`)}
              tick={{ fontSize: 9, fill: "#9ca3af" }}
              domain={[0, 50000]}
              ticks={[0, 10000, 20000, 30000, 40000, 50000]}
              width={28}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#e5e7eb",
                strokeWidth: 1.5,
                strokeDasharray: "4 3",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#areaGradient)"
              dot={<CustomDot />}
              activeDot={{ r: 5, fill: "#10b981", stroke: "white", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}