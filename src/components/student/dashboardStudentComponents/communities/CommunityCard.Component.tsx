"use client";
import React from "react";
import Image from "next/image";
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
    <div className="flex h-40  gap-6  ">
      <Image
        src={props.courseImg}
        alt="Mentor"
        className="w-40"
        width={100}
        height={100}
      />

      <div>
        <h1 className="text-lg font-bold">{props.courseName}</h1>
        <div className="mt-3 flex gap-2 ">
          <Image
            src={props.memberImage}
            alt="Mentor"
            className="w-14"
            width={100}
            height={100}
          />
          <div className="my-auto leading-5">
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
              className="rounded-xl border p-[1px]"
              strokeColor="#04D800"
              trailColor="#ffffff"
            />

            <p className="text-sm text-[#5D6475]">
              {props.classesLeft} Classes left
            </p>
          </div>
          <button className="my-auto h-fit rounded-lg  bg-[#2769D9] px-5 py-2 font-bold text-white">
            GO TO COURSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
