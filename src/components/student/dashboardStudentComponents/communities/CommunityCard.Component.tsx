"use client";
import React from "react";
import mentor1 from "../../../../../public/studentDashboard/myCommunities/member1.png";
import Image from "next/image";
import { Progress } from "rsuite";
import { Line } from "rc-progress";

interface CommunityCardProps {
  memberName: string;
  memberRole: string;
  memberImage: string;
  courseImg: string;
  courseName: string;
  progress: number;
  classesLeft: number;
}

function CommunityCard(props: CommunityCardProps) {
  return (
    <div className="flex gap-6  h-40  ">
      <Image
        src={props.courseImg}
        alt="Mentor"
        className="w-40"
        width={100}
        height={100}
      />

      <div>
        <h1 className="font-bold text-lg">{props.courseName}</h1>
        <div className="flex gap-2 mt-3 ">
          <Image
            src={props.memberImage}
            alt="Mentor"
            className="w-14"
            width={100}
            height={100}
          />
          <div className="leading-5 my-auto">
            <p className="font-bold">{props.memberName}</p>
            <p>{props.memberRole}</p>
          </div>
        </div>

        <div className="flex h-fit justify-between">
          <div>
            <p className="font-bold">Progress</p>
            <Line
              percent={props.progress}
              strokeWidth={10}
              trailWidth={20}
              className="rounded-xl p-[1px] border"
              strokeColor="#04D800"
              trailColor="#ffffff"
            />

            <p className="text-sm text-[#5D6475]">{props.classesLeft} Classes left</p>
          </div>
          <button className="bg-[#2769D9] font-bold rounded-lg  text-white px-5 py-2 h-fit my-auto">
            GO TO COURSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
