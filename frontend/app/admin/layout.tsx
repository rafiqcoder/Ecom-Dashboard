import React from "react";
import Sidebar from "@/components/admin_components/dashboard/Sidebar";
import Header from "@/components/admin_components/dashboard/Header";
import Protected from "@/features/protectedRoute/Protected";
function layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex bg-gray-50">
        <Sidebar />
        <div className=" w-full">
          <Header />
          {children}
        </div>
      </div>
  );
}

export default layout;
