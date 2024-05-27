"use client";
import React from "react";
import CreatePost from "@/components/mentor/dashboardMentorComponents/communities/Post.Component";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import { useParams } from "next/navigation";

function CommunityPost() {
  const { slug }: { slug: string } = useParams();
  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full w-full pt-10  ">
        <CreatePost id={slug} />
      </div>
    </MentorDashboardLayout>
  );
}

export default CommunityPost;
