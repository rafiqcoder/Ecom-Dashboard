import Header from "@/components/navberFooter/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      <main className="px-3">{children}</main>
    </div>
  );
}

export default layout;