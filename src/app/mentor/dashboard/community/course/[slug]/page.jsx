/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useQuery } from "@tanstack/react-query";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import { communityCourseDetailsAPI } from "@/app/api/communityCourseDetails/communityCourseDetails.api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import VideoSection from "@/components/mentor/courseDetail/videoSection";
import CourseContent from "@/components/mentor/courseDetail/courseContent";

function WatchCourse() {
  // const params=useParams()
  const { slug } = useParams();
  const [activeLecture, setActiveLecture] = useState({});
  console.log(slug);
  const { data, isLoading } = useQuery({
    queryKey: ["slug", slug],
    // @ts-ignore
    queryFn: () => communityCourseDetailsAPI(slug),
  });

  useEffect(() => {
    if (!isLoading && data) {
      if (
        data.sections &&
        data.sections.length > 0 &&
        data.sections[0].lectures &&
        data.sections[0].lectures.length > 0
      ) {
        const updatedActive = [data.sections[0].lectures[0],data.sections[0]];
        setActiveLecture(updatedActive);
      } 
    }
  }, [isLoading, data]);

  return (
    <MentorDashboardLayout showSidebar={false}>
      {!isLoading && (
        <div
          className="flex w-full bg-[#f7f9fb] px-20 text-black"
          style={{ paddingTop: "120px" }}
        >
          <div className="w-[70%]">
            <VideoSection activeLecture={activeLecture} />
          </div>

          <div className="w-[30%]">
            <CourseContent
              data={data}
              activeLecture={activeLecture}
              setActiveLecture={setActiveLecture}
            />
          </div>
        </div>
      )}
    </MentorDashboardLayout>
  );
}

export default WatchCourse;
