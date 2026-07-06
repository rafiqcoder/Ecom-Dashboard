import React from "react";
import Sidebar from "@/components/admin_components/dashboard/Sidebar";
import Header from "@/components/admin_components/dashboard/Header";
import Protected from "@/features/protectedRoute/Protected";
import AdminProtected from "@/features/protectedRoute/AdminProtected";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProtected>
      <div className="flex bg-gray-50">
        <Sidebar />
        <div className=" w-full">
          <Header />
          {children}
        </div>
      </div>
    </AdminProtected>
  );
}

export default layout;
