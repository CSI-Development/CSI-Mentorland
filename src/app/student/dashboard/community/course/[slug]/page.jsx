/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useQuery } from "@tanstack/react-query";
import { communityCourseDetailsAPI } from "@/app/api/communityCourseDetails/communityCourseDetails.api";
import { useParams } from "next/navigation";
import DashboardLayout from "@/layouts/DashboardLayout";
import VideoSection from "@/components/student/courseDetail/videoSection";
import CourseContent from "@/components/student/courseDetail/courseContent";
import { useEffect, useState } from "react";

function WatchCourse() {
  const [activeLecture, setActiveLecture] = useState({});

  // const params=useParams()
  const { slug } = useParams();
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
        setActiveLecture({
          url: data.sections[0].lectures[0].url,
          description: data.sections[0].lectures[0].description,
        });
      }
    }
  }, [isLoading, data]);

  return (
    <DashboardLayout showSidebar={false}>
      {!isLoading && (
        <div
          className="flex w-full bg-[#f7f9fb] px-20 text-black"
          style={{ paddingTop: "120px" }}
        >
          <div className="w-[70%]">
            <VideoSection
              // @ts-ignore
              data={data}
              activeLecture={activeLecture}
            />
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
    </DashboardLayout>
  );
}

export default WatchCourse;
