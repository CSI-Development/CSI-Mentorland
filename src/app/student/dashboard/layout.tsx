import React from "react";
import Navbar from "../../../components/student/dashboardStudentComponents/Navbar.Component";
import Sidebar from "../../../components/student/dashboardStudentComponents/Sidebar.Component";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[#fffefe]">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full flex-1 bg-[#F7F9FB] pt-20 overflow-y-auto">{children}</div>
        {/* <Temp /> */}
      </div>
    </div>
  );
}

// export default Layout;

export default layout;
