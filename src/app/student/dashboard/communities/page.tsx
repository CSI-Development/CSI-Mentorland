/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import DashboardLayout from "@/layouts/DashboardLayout";
import React, { useEffect, useState } from "react"; // Adjust this path to the correct location of your layout.tsx filei
import mentor1 from "/public/studentDashboard/myCommunities/member1.png";
import mentor2 from "/public/studentDashboard/myCommunities/member2.png";
import subjectCoverImg from "/public/studentDashboard/myCommunities/subjectCoverImg.png";
import Breadcrumb from "@/components/student/dashboardStudentComponents/Breadcrumb.Component";
import CommunityCard from "@/components/student/dashboardStudentComponents/communities/CommunityCard.Component";
import { useQuery } from "@tanstack/react-query";
import { getJoinedCourseApi } from "@/app/api/joinCourse/getJoinedCourse.api";
import { useRouter } from "next/navigation";

function Communities() {
  const [selectedOption, setSelectedOption] = useState("");
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const { data } = useQuery({
    queryKey: ["joinCourses"],
    queryFn: () => getJoinedCourseApi(),
  });

  useEffect(() => {
    if (data) {
      setCourses(data);
    }
  }, [data]);
  console.log(data, "DATA");
  const handleEnrollClick = () => {
    console.log("CHECK");
    router.push("/student/dashboard/communities/enrollCourses");
  };

  return (
    <DashboardLayout showSidebar={true}>
      <div className="h-full w-full px-4  ">
        <div className="w-full text-black">
          <Breadcrumb titel="My Courses" />

          <div className="mt-6 flex w-full gap-5">
            <div className="w-3/12">
              <p className="mb-2 text-lg">Sort By</p>
              <select
                value={selectedOption}
                onChange={handleSelect}
                className="w-full border border-[#b9baba] p-2 px-5 text-lg"
              >
                <option value="recentlyViewed">Recently Viewed</option>
                <option value="mostPopular">Most Popular</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>

            <div className="w-3/12">
              <p className="mb-2 text-lg">Filter By</p>
              <select
                value={selectedOption}
                onChange={handleSelect}
                className="w-full border border-[#b9baba] p-2 px-5 text-lg"
              >
                <option value="recentlyViewed">Recently Viewed</option>
                <option value="mostPopular">Most Popular</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
            <div className="flex gap-10 ">
              <button className="mb-0.5 mt-auto h-11  rounded-lg bg-[#2769D9] px-5 text-xl font-bold text-white">
                Go
              </button>
              <button
                className="mb-0.5 mt-auto h-11  rounded-lg bg-[#2769D9] px-5 text-xl font-bold text-white"
                onClick={handleEnrollClick}
              >
                {" "}
                Enroll Course
              </button>
            </div>
          </div>

          <div className="mt-8 grid h-[62vh] grid-cols-1 gap-5 gap-y-8 overflow-y-scroll md:grid-cols-2 ">
            {courses.map((data: any, index: number) => (
              <CommunityCard
                key={index}
                // memberName={data.memberName}
                // memberRole={data.memberRole}
                // memberImage={data.memberImage.src} // Convert StaticImageData to string
                // courseImg={data.courseImg.src}
                // courseName={data.courseName}
                // progress={data.progress}
                // classesLeft={data.classesLeft}
                courses={data?.courses}
                mentor={data?.mentors}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Communities;
