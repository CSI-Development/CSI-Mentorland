/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";
import { Line } from "rc-progress";
import Link from "next/link";

interface CommunityCardProps {
  // memberName: string;
  // memberRole: string;
  // memberImage: string;
  // courseImg: string;
  // courseName: string;
  // progress: number;
  // classesLeft: number;
  courses: any,
  mentor: any
}


function CommunityCard(props: CommunityCardProps) {
  return (
    <div className="flex h-40  gap-6  ">
      <Image
        src={props.courses?.logo}
        alt="Mentor"
        className="w-40"
        width={100}
        height={100}
      />
      <div>
        <h1 className="text-lg font-bold">{props.courses?.name}</h1>
        {
          props.mentor?.mentorAvatar && 
          <div className="mt-3 flex gap-2 ">
          <Image
            src={props.mentor?.mentorAvatar}
            alt="Mentor"
            className="w-14"
            width={100}
            height={100}
          />
          <div className="my-auto leading-5">
            <p className="font-bold">{`${props.mentor?.firstName} ${props.mentor?.lastName}`}</p>
            {/* <p>{props.memberRole}</p> */}
          </div>
        </div>
        }
        

        <div className="flex h-fit justify-between gap-4">
          <div>
            <p className="font-bold">Progress</p>
            <Line
              percent={100}
              strokeWidth={10}
              trailWidth={20}
              className="rounded-xl border p-[1px]"
              strokeColor="#04D800"
              trailColor="#ffffff"
            />

            <p className="text-sm text-[#5D6475]">
               10 Classes left
            </p>
          </div>
          <Link href={`/student/dashboard/community/course/${props.courses?._id}`} className="my-auto h-fit rounded-lg  bg-[#2769D9] px-5 py-2 font-bold text-white">
            GO TO COURSE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
