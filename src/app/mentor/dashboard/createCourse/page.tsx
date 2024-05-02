import React from "react";
import MentorDashboardLayout from "@/components/Layouts/mentorDashboardLayout";
import CourseCreation from "@/components/mentor/dashboardMentorComponents/createCourses/createCourse";

function CourseCreate() {
  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full pt-10 w-full  ">
        <CourseCreation />
      </div>
    </MentorDashboardLayout>
  );
}

export default CourseCreate;
