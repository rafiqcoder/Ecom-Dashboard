import Footer from "@/components/navberFooter/Footer";
import Header from "@/components/navberFooter/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="h-20 lg:h-56">

      </div>
      <div className=" fixed z-50 top-0 left-0 w-full">
        <Header />
      </div>
      <main className="px-3">{children}</main>
      <Footer/>
    </div>
  );
}

export default layout;