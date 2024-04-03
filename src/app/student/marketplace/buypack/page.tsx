import React from "react";
import Layout from "../../../../components/Layouts/DashboardLayout"; // Adjust this path to the correct location of your layout.tsx file
import PackOverview from "@/components/student/marketplace/buypack/PackOverview.component";

function buypack() {
  return (
    <Layout showSidebar={false}>
      <PackOverview />
    </Layout>
  );
}

export default buypack;
