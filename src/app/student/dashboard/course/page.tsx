import CourseAccessCards from "@/components/student/dashboardStudentComponents/course/CourseAccessCards.component";
import CourseBadges from "@/components/student/dashboardStudentComponents/course/CourseBadges.component";
import CourseFavLessons from "@/components/student/dashboardStudentComponents/course/CourseFavLessons.component";
import CourseLeaderboard from "@/components/student/dashboardStudentComponents/course/CourseLeaderoard.component";
import CoursePartialGrades from "@/components/student/dashboardStudentComponents/course/CoursePartialGrades.component";
import CourseReferrals from "@/components/student/dashboardStudentComponents/course/CourseReferrals.component";
import CourseSchedule from "@/components/student/dashboardStudentComponents/course/CourseSchedule.component";
import CourseStudents from "@/components/student/dashboardStudentComponents/course/CourseStudents.component";
import React from "react";// Adjust this path to the correct location of your layout.tsx file
import Link from "next/link";
import DashboardLayout from "@/layouts/DashboardLayout";

const CourseDashboard = () => {
  return (
    <DashboardLayout showSidebar={true}>
      <div className="flex h-fit w-full flex-col gap-2 p-2 px-4 text-black">
        <Link href={"/student/dashboard"}>
          <h1 className="font-bold text-primary">
            {"<< Back to Main Dashboard"}
          </h1>
        </Link>
        <div
          className="relative flex h-48 w-full flex-col justify-center overflow-hidden rounded-lg bg-cover bg-center object-cover p-8"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <h1 className="text-xl font-extrabold text-white">
            Courses Make Millions Course
          </h1>
          <h2 className="text-lg font-medium text-white">With Cody Getchell</h2>
          <button className="mt-2 w-fit rounded-lg bg-white p-2 text-sm font-thin text-primary">
            Go to Community
          </button>
        </div>
        <div className="mt-5 grid w-full grid-cols-[60%_38%] gap-4">
          <CourseSchedule />
          <CourseBadges />
          <CourseAccessCards />
          <CourseStudents />
          <CourseReferrals />
          <CourseFavLessons />
          <CoursePartialGrades />
          <CourseLeaderboard />
        </div>
        {/* <div className="w-full flex gap-4 mt-5">
        <div className="w-3/5 flex flex-col gap-4">
          <CourseSchedule />
          <CourseAccessCards />
        </div>
        <div className="w-2/5 flex flex-col gap-4">
          <CourseBadges />
          <CourseStudents />
        </div>
      </div> */}
      </div>
    </DashboardLayout>
  );
};

export default CourseDashboard;
