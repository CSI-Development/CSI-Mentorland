"use client";
import React, { useState } from "react";
import MentorDashboardLayout from "@/components/Layouts/mentorDashboardLayout";
import Community from "@/components/mentor/dashboardMentorComponents/communities/Community.Component";
import CommunityNavbar from "@/components/mentor/dashboardMentorComponents/CommunityNavbar";
import CourseCreation from "@/components/mentor/dashboardMentorComponents/createCourses/createCourse";
import CourseSection from "@/components/mentor/dashboardMentorComponents/createCourses/courseSection";

function community() {
  const [stage, setStage] = useState(1);

  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full pt-20 w-full  ">
        <CommunityNavbar stage={stage} setStage={setStage} />
        {stage === 1 && <Community />}
        {stage === 2 && <CourseSection />}
      </div>
    </MentorDashboardLayout>
  );
}

export default community;
