import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react"; // Adjust this path to the correct location of your layout.tsx file

function page() {
  return (
    <DashboardLayout showSidebar={true}>
      <div>page</div>
    </DashboardLayout>
  );
}

export default page;
