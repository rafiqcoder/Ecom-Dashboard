import AdminProtected from "@/features/protectedRoute/AdminProtected";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminProtected>{children}</AdminProtected>
    </div>
  );
}

export default layout;
