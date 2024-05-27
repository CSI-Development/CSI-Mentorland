/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import CommunityPopup from "@/components/mentor/dashboardMentorComponents/communities/communityPopup/CommunityPopup.Component";
import CommunitiesCard from "@/components/mentor/dashboardMentorComponents/communities/communitiesCard/CommunitiesCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCommunityApi } from "@/app/api/createCommunity/getAllCommunity.api";

const Communities = () => {
  const [isOpenCommunityDialog, setIsOpenCommunityDialog] =
    useState<boolean>(false);
  const [communities, setCommunities] = useState<any>();
  const { data } = useQuery({
    queryKey: ["allCommunities"],
    queryFn: () => getAllCommunityApi(),
  });

  useEffect(() => {
    if (data) {
      setCommunities(data);
    }
  }, [data]);
  console.log(communities, "DATATA");
  return (
    <MentorDashboardLayout showSidebar={true}>
      <div className="h-full w-full px-4  ">
        <div className="w-full pt-20">
          <div className="">
            <h1 className="text-2xl font-bold text-[#151B2B]">
              My Communities
            </h1>
          </div>
          <div className="mt-20 w-full text-center text-[#5D6475]">
            <h1 className="mt-4 text-3xl font-bold">
              Create your Community
            </h1>
            <p className="mt-4 text-xl">
              Your courses will be kept inside your communities
            </p>
            <button
              type="button"
              className="ml-3 mt-4 rounded-md border border-[#2769D9] bg-[#2769D9] px-[10px] py-[5px] font-bold text-[white]"
              onClick={() => setIsOpenCommunityDialog(true)}
            >
              Start Your Community
            </button>
            <CommunityPopup
              OpenDialog={isOpenCommunityDialog}
              setOpenDialog={setIsOpenCommunityDialog}
            />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="m-auto mb-32 mt-20 grid w-full grid-cols-3 gap-6 pb-28">
              {communities?.map((data: any, i: number) => {
                console.log(data, "InnerDATA");
                return (
                  <CommunitiesCard
                    key={i}
                    name={data?.communityName}
                    level={data?.communityLevel}
                    id={data?._id}
                    index={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MentorDashboardLayout>
  );
};

export default Communities;
