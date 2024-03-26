"use client";

import React from "react";
import packsThumbnail1 from "../../../../../public/marketplace/packThumbnail1.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
function PackOverview() {
  return (
    <div className="h-screen ">
      {/* top thumbnail */}

      <div className="mt-8 w-full flex gap-6 px-32">
        <div className="w-4/12 ">
          <Image className="" src={packsThumbnail1} alt="packThumbnail1" />
        </div>
        <div className="text-black w-8/12">
          <div className="flex w-fit gap-1.5 text-black bg-[#FFD600] shadow-md shadow-[#a6a6a6] rounded-full  p-2 px-4">
            <Icon
              className="text-2xl"
              icon="fluent-emoji-high-contrast:gem-stone"
            />
            <p className="text-xl">Enriched</p>
          </div>
          <h1 className="text-2xl font-bold mt-2">
            Courses Make Millions VIP Level
          </h1>

          <p className="text-sm mt-6">Enriched By: </p>
          <p className="text-xl font-bold">Engelbert Bryughternexter</p>

          <p className="text-xl font-bold mt-4">Description</p>
          <p className="text-[#5D6475]">
            Pommy ipsum Geordie pork scratchings down the local trouble and
            strife nuthouse a diamond geezer a fiver, blighty chuffed upper
            class pants laughing gear Dr. Watson curtain twitching. Off with her
            head upper class smeg head meat and two veg easy peasy shepherd's
            pie fish and chips, squiffy golly gosh hard cheese old boy blimey
          </p>

          <p className="text-[#5D6475] text-lg mt-4">Price</p>
          <p className="text-4xl text-[#1A458F] font-bold">$350</p>

          <div className="flex justify-between mt-10">
            <button className="bg-[#2769D9] text-white font-bold rounded-lg pt-1.5 pb-2 px-8 text-xl">
              Add to Cart
            </button>
            <button className="bg-white text-[#2769D9] font-bold rounded-lg pt-1.5 pb-2 px-8 text-xl">
              Buy by Auction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackOverview;
