
import { SlidersHorizontal } from "lucide-react";
import React from "react";

function FilterBtn() {
    return (
      <button className="flex items-center gap-2 rounded-full bg-[#21C45D] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
        Filter
        <SlidersHorizontal className="h-3.5 w-3.5" />
      </button>
    );
}

export default FilterBtn;
