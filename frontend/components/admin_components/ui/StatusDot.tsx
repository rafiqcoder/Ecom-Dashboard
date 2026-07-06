import React from "react";

function StatusDot({ status }: { status: string }) {
  const statusStyles: Record<string, string> = {
    Paid: "bg-[#21C45D]",
    Pending: "bg-[#F0D411]",
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "Stock out"
            ? "bg-[#EF4343]"
            : (statusStyles[status] ?? "bg-[#21C45D]")
        }`}
      />
      <span
        className={
          status === "Paid"
            ? "text-[#21C45D]"
            : status === "Pending"
              ? "text-[#8B909A]"
              : status === "Stock out"
                ? "text-[#EF4343]"
                : "text-[#21C45D]"
        }
      >
        {status}
      </span>
    </span>
  );
}

export default StatusDot;
