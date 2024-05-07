import React from "react";// Adjust this path to the correct location of your layout.tsx file
import SearchResult from "@/components/student/marketplace/searchresult/SearchResult.component";
import DashboardLayout from "@/layouts/DashboardLayout";

function page() {
  return (
    <DashboardLayout showSidebar={false}>
      <SearchResult />
    </DashboardLayout>
  );
}

export default page;
