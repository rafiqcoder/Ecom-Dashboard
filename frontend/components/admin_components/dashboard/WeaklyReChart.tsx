"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Sun", value: 1 },
  { day: "Mon", value: 22},
  { day: "Tue", value: 33 },
  { day: "Wed", value: 64 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 7 },
];

const CustomTooltip = ({ active, payload, label }: {active?: boolean, payload?: { value?: number }[], label?: string}) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-xl border border-green-400 bg-[#C8F0C8] px-5 py-3 shadow-lg">
        <p className="text-center text-sm font-medium text-gray-700">
          {label}
        </p>

        <p className="text-center text-xl font-bold text-gray-900">
          {payload?.[0]?.value ? (payload[0]?.value / 1000).toFixed(0) + "k" : 0}
        </p>
      </div>
    );
  }

  return null;
};

export default function WeaklyReChart() {
  return (
    <div className="h-[350px] w-full rounded-xl bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.28} />
              <stop offset="100%" stopColor="#4CAF50" stopOpacity={0.03} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#F2F2F2"
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#8C8C8C", fontSize: 14 }}
          />

          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#8C8C8C", fontSize: 14 }}
          />

          <Tooltip
            cursor={{
              stroke: "#7BC67B",
              strokeWidth: 2,
              strokeDasharray: "5 5",
            }}
            content={<CustomTooltip />}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#3EA464"
            strokeWidth={2.5}
            fill="url(#green)"
            activeDot={{
              r: 6,
              fill: "#ffffff",
              stroke: "#3EA464",
              strokeWidth: 2,
            }}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}