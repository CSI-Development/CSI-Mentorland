import React from "react";
import CreatePost from "@/components/mentor/dashboardMentorComponents/communities/Post.Component";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";

function CommunityPost() {
  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full pt-10 w-full  ">
        <CreatePost id={""} />
      </div>
    </MentorDashboardLayout>
  );
}

export default CommunityPost;
