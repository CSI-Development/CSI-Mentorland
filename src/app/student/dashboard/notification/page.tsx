import Notification from "@/components/student/dashboardStudentComponents/notification/Notification.Component";
import React from "react";
import Layout from "../../../../components/Layouts/DashboardLayout"; // Adjust this path to the correct location of your layout.tsx file

function page() {
  return (
    <Layout showSidebar={true}>
      <div className="h-full px-4 w-full  ">
        <Notification />
      </div>
    </Layout>
  );
}

export default page;
