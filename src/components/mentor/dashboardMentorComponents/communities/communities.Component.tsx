"use client";
import React, { useState } from "react";
import CommunityPopup from "./communityPopup/CommunityPopup.Component";

function Communities() {

  const [isOpenCommunityDialog, setIsOpenCommunityDialog] = useState(false);

  return (
    <div className="w-full pt-20">
      <div className="">
        <h1 className="text-[#151B2B] text-2xl font-bold">My Communities</h1>
      </div>
      <div className="w-full text-center text-[#5D6475] mt-20">
        <h1 className="text-3xl font-bold mt-4">Create your first Community</h1>
        <p className="text-xl mt-4">Your courses will be kept inside your communities</p>
        <button type="button" className="text-[white] mt-4 bg-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold ml-3" onClick={() => setIsOpenCommunityDialog(true)}>
          Start Your Community
        </button>
        <CommunityPopup 
        OpenDialog={isOpenCommunityDialog}
        setOpenDialog={setIsOpenCommunityDialog} />
      </div>
    </div>
  );
}

export default Communities;
