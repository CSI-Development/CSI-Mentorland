import Layout from "../../../../components/Layouts/DashboardLayout";
import Wishlist from "@/components/student/dashboardStudentComponents/wishlist/Wishlist.Component";
import React from "react";

function Page() {
  return (
    // Use the Layout component and set showSidebar to false to hide the sidebar
    <Layout showSidebar={true}>
      <div className="h-full px-4 w-full">
        <Wishlist />
      </div>
    </Layout>
  );
}

export default Page;
