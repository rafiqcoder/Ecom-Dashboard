import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      layout
      {children}
    </div>
  );
}

export default layout;
