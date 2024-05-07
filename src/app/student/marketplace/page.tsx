import React from "react";// Adjust this path to the correct location of your layout.tsx file
import Marketplace from "@/components/student/marketplace/Marketplace.component";
import DashboardLayout from "@/layouts/DashboardLayout";

function marketplace() {
  return (
    <DashboardLayout showSidebar={false}>
      <Marketplace />
    </DashboardLayout>
  );
}

export default marketplace;
