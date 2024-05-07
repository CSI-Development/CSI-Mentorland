"use client";
import React, { useState } from "react";
import Community from "@/components/mentor/dashboardMentorComponents/communities/Community.Component";
import CommunityNavbar from "@/components/mentor/dashboardMentorComponents/CommunityNavbar";
import CourseSection from "@/components/mentor/dashboardMentorComponents/createCourses/courseSection";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";

function CommunityComponent() {
  const [stage, setStage] = useState(1);

  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full w-full pt-20  ">
        <CommunityNavbar stage={stage} setStage={setStage} />
        {stage === 1 && <Community />}
        {stage === 2 && <CourseSection />}
      </div>
    </MentorDashboardLayout>
  );
}

export default CommunityComponent;
