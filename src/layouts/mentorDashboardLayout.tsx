import Navbar from "@/components/mentor/dashboardMentorComponents/Navbar.Component";
import Sidebar from "@/components/mentor/dashboardMentorComponents/sidebar.Component";
import Image from "next/image";
import React from "react";

// Add a new prop for sidebar visibility
function MentorDashboardLayout({
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
          } z-10 bg-[#F7F9FB] ${showSidebar ? "p-10" : "p-0"} scrollbar-hide overflow-y-auto`}
        >
          {children}
        </div>
        {/* <Temp /> */}
      </div>
      <footer>
        <div className="flex h-[120px] w-full items-center justify-center bg-[#0E2245] text-white">
          {/* <h1 className="text-3xl font-semibold">
        MENTOR<span className="font-light">LAND</span>
      </h1> */}
          <Image alt="" src="/svg/Vector.svg" width={230} height={37} />
        </div>
      </footer>
    </div>
  );
}

export default MentorDashboardLayout;
