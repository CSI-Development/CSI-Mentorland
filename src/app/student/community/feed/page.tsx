"use client";
import React from "react";
import Image from "next/image";
import Banner from "../../../../../public/community/CommunityFeedBanner.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const CommunityFeed = () => {
  return (
    <div className="w-full h-screen bg-white text-black">
      <Image src={Banner} alt="" className="w-full h-[65vh] object-cover" />
      <div className="w-full flex gap-4 mt-5">
        <div className="w-16">
          <div className="w-14 h-fit rounded-r-lg shadow-md flex flex-col gap-3 items-center p-4">
            <Icon icon="material-symbols:home" className="w-8 h-8" />
            <Icon icon="material-symbols:home" className="w-8 h-8" />
            <Icon icon="material-symbols:home" className="w-8 h-8" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-4 p-5 bg-[#E7EAF0]">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-10 h-10 border-2 border-primary rounded-full object-cover"
            />
            <input
              type="text"
              className="flex-1 bg-white border-[1px] text-sm border-gray-400 py-3 px-3 rounded-md"
              placeholder="Write a Post"
            />

            <Icon icon="material-symbols:home" className="w-6 h-6" />
          </div>
          <div className="w-full flex gap-4 bg-[#FF007A] text-white px-12 py-4 items-center ">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-28 h-28 border-4 border-white rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-lg">
                Mardi Higgins Has been promoted to VIP
              </h1>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur id, consequatur non rerum impedit sit culpa eveniet
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-green-500">right content</div>
      </div>
    </div>
  );
};

export default CommunityFeed;
