import React from "react";
import MentorDashboardLayout from "@/components/Layouts/mentorDashboardLayout";
import CreatePost from "@/components/mentor/dashboardMentorComponents/communities/Post.Component";

function CommunityPost() {
  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full pt-10 w-full  ">
        <CreatePost />
      </div>
    </MentorDashboardLayout>
  );
}

export default CommunityPost;
