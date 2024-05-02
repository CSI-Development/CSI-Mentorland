import React from "react";
import Navbar from "../student/dashboardStudentComponents/Navbar.Component";
import Sidebar from "../student/dashboardStudentComponents/Sidebar.Component";


// Add a new prop for sidebar visibility
function DashboardLayout({
  children,
  showSidebar = true,
}: {
  children: React.ReactNode;
  showSidebar: boolean;
}) {
  return (
      <div className="h-screen bg-[#fffefe]">
        <Navbar />
        <div className="flex h-full">
          {/* Conditionally render the Sidebar based on the showSidebar prop */}
          {showSidebar && <Sidebar />}
          <div
            className={`w-full ${
              showSidebar ? "flex-1" : "w-full"
            } bg-[#F7F9FB] pt-[72px] overflow-y-auto`}
          >
            {children}
          </div>
          {/* <Temp /> */}
        </div>
      </div>
  );
}

export default DashboardLayout;
