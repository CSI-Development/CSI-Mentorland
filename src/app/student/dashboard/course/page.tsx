import CourseAccessCards from "@/components/student/dashboardStudentComponents/course/CourseAccessCards.component";
import CourseBadges from "@/components/student/dashboardStudentComponents/course/CourseBadges.component";
import CourseFavLessons from "@/components/student/dashboardStudentComponents/course/CourseFavLessons.component";
import CourseLeaderboard from "@/components/student/dashboardStudentComponents/course/CourseLeaderoard.component";
import CoursePartialGrades from "@/components/student/dashboardStudentComponents/course/CoursePartialGrades.component";
import CourseReferrals from "@/components/student/dashboardStudentComponents/course/CourseReferrals.component";
import CourseSchedule from "@/components/student/dashboardStudentComponents/course/CourseSchedule.component";
import CourseStudents from "@/components/student/dashboardStudentComponents/course/CourseStudents.component";
import React from "react";
import Layout from '../../../../components/Layouts/DashboardLayout'; // Adjust this path to the correct location of your layout.tsx file
import Link from "next/link";

const CourseDashboard = () => {
  return (
    <Layout showSidebar={true}>
    <div className="text-black w-full h-fit flex flex-col gap-2 px-4 p-2">
      <Link href={'/student/dashboard'}><h1 className="text-primary font-bold">{"<< Back to Main Dashboard"}</h1></Link>
      <div
        className="w-full relative h-48 rounded-lg overflow-hidden bg-center bg-cover object-cover flex flex-col justify-center p-8"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* <img
          src="https://images.unsplash.com/photo-1636955840493-f43a02bfa064?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full absolute object-cover -z-0"
        /> */}
        <h1 className="text-white font-extrabold text-xl">
          Curses Make Millions Couse
        </h1>
        <h2 className="text-lg text-white font-medium">With Cody Getchell</h2>
        <button className="bg-white mt-2 w-fit text-sm rounded-lg text-primary font-thin p-2">
          Go to Community
        </button>
      </div>
      <div className="w-full grid grid-cols-[60%_38%] gap-4 mt-5">
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
    </Layout>
  );
};

export default CourseDashboard;
