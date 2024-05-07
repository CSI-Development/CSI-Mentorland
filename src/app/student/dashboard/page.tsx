import Dashbaord from "@/components/student/dashboardStudentComponents/dashboard/Dashbaord.Component";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";// Adjust this path to the correct location of your layout.tsx file

function page() {
  return (
    <DashboardLayout showSidebar={true}>
      <Dashbaord />
    </DashboardLayout>
  );
}

export default page;
