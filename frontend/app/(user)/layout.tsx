import Header from "@/components/navberFooter/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1800px] mx-auto">
      <Header />
      <main className="px-3">{children}</main>
    </div>
  );
}

export default layout;