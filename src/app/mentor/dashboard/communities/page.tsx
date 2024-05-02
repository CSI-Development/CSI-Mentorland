import React from "react";
import Communities from "@/components/mentor/dashboardMentorComponents/communities/communities.Component";
import MentorDashboardLayout from "@/components/Layouts/mentorDashboardLayout";

function communities() {
  return (
    <MentorDashboardLayout showSidebar={true}>
      <div className="h-full px-4 w-full  ">
        <Communities />
      </div>
    </MentorDashboardLayout>
  );
}

export default communities;
