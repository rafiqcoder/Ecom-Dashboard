import Footer from "@/components/navberFooter/Footer";
import Header from "@/components/navberFooter/Header";
import React from "react";
import { Toaster } from "react-hot-toast";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1800px] mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <main className="px-3">{children}</main>
      <Footer/>
    </div>
  );
}

export default layout;