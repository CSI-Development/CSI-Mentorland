import React from "react";
import Navbar from "../mentor/dashboardMentorComponents/Navbar.Component";
import Sidebar from "../mentor/dashboardMentorComponents/sidebar.Component";
import Footer from "../mentor/dashboardMentorComponents/footer";

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
          } bg-[#F7F9FB] ${showSidebar? "p-10" : "p-0"} overflow-y-auto scrollbar-hide`}
        >
          {children}
        </div>
        {/* <Temp /> */}
      </div>
      <Footer />
    </div>
  );
}

export default MentorDashboardLayout;
