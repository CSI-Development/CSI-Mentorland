/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useState } from "react";
import Community from "@/components/mentor/dashboardMentorComponents/communities/Community.Component";
import CommunityNavbar from "@/components/mentor/dashboardMentorComponents/CommunityNavbar";
import CourseSection from "@/components/mentor/dashboardMentorComponents/createCourses/courseSection";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCommunityAPI } from "@/app/api/getCommunityDetails/getCommunityDetails.api";
import AskYourMentor from "@/components/mentor/dashboardMentorComponents/askMentor/AskYourMentor.Component";
import Schedular from "../../schedule/page";
import CreateSchedule from "@/components/mentor/createSchedule/CreateSchedule.Component";

function CommunityComponent() {
  const [stage, setStage] = useState(1);

  const { slug }: { slug: string } = useParams();

  const { data, refetch } = useQuery({
    queryKey: ["community", slug],
    queryFn: () => getCommunityAPI(slug),
    enabled: !!slug,
  });

  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full w-full pt-20  ">
        <CommunityNavbar stage={stage} setStage={setStage} />
        {stage === 1 && <Community id={slug} data={data} refetch={refetch} />}
        {stage === 2 && <CourseSection id={slug} cData={data} refetch={refetch} />}
        {stage === 4 && <div className="py-10 px-20 text-black"><CreateSchedule /></div> }
        {stage === 5 && <AskYourMentor id={slug}/>}
      </div>
    </MentorDashboardLayout>
  );
}

export default CommunityComponent;
