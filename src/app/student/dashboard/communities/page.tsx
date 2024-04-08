import MyCommunities from "@/components/student/dashboardStudentComponents/communities/MyCommunities.Component";
import React from "react";
import Layout from "../../../../components/Layouts/DashboardLayout"; // Adjust this path to the correct location of your layout.tsx file

function communities() {
  return (
    <Layout showSidebar={true}>
      <div className="h-full px-4 w-full  ">
        <MyCommunities />
      </div>
    </Layout>
  );
}

export default communities;
