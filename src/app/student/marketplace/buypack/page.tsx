import React from "react"; // Adjust this path to the correct location of your layout.tsx file
import PackOverview from "@/components/student/marketplace/buypack/PackOverview.component";
import DashboardLayout from "@/layouts/DashboardLayout";

function buypack() {
  return (
    <DashboardLayout showSidebar={false}>
      <PackOverview />
    </DashboardLayout>
  );
}

export default buypack;
