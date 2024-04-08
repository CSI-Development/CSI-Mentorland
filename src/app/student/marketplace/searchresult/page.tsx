import React from "react";
import Layout from "../../../../components/Layouts/DashboardLayout"; // Adjust this path to the correct location of your layout.tsx file
import SearchResult from "@/components/student/marketplace/searchresult/SearchResult.component";

function page() {
  return (
    <Layout showSidebar={false}>
      <SearchResult />
    </Layout>
  );
}

export default page;
