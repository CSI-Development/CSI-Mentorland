"use client";
import React, { useState } from "react";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import CommunityPopup from "@/components/mentor/dashboardMentorComponents/communities/communityPopup/CommunityPopup.Component";

const Communities = () => {
  const [isOpenCommunityDialog, setIsOpenCommunityDialog] = useState<boolean>(false);
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
              Create your first Community
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
        </div>
      </div>
    </MentorDashboardLayout>
  );
};

export default Communities;
