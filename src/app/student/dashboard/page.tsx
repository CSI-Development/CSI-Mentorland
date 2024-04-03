import Dashbaord from "@/components/student/dashboardStudentComponents/dashboard/Dashbaord.Component";
import React from "react";
import Layout from "../../../components/Layouts/DashboardLayout"; // Adjust this path to the correct location of your layout.tsx file

function page() {
  return (
    // <Dashbaord />
    <Layout showSidebar={true}>
      <Dashbaord />
    </Layout>
  );
}

export default page;
