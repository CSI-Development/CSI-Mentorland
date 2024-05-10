"use client";
import React from "react";
import sampleSubject2 from "../../../../public/selectSubject/subjectMentor.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

interface MentorProfileCardProps {
  mentorName: string;
  mentorProfilePic: string;
  mentorDomain: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

function MentorProfileCard(props: MentorProfileCardProps) {
  const {
    mentorName,
    // mentorDomain,
    mentorProfilePic,
    // twitter,
    // facebook,
    // instagram,
  } = props;

  return (
    <div className="mx-auto w-2/3 mb-4">
      <div className="flex gap-5">
        <Image
          src={mentorProfilePic ?? sampleSubject2}
          alt="mentor"
          width={80}
          height={80}
          className="h-20 w-20 rounded-full"
        />
        <div>
          <p className="h-fit text-lg font-bold capitalize">{mentorName}</p>
          {/* <p className="text-md">{mentorDomain}</p>
          <div className="flex gap-2 mt-1 text-[#ffd701]">
            <Icon icon="ri:twitter-x-fill" />
            <Icon icon="streamline:facebook-1" />
            <Icon icon="teenyicons:instagram-outline" />
          </div> */}
        </div>
      </div>
      <p className="mb-10 mt-2 text-2xl font-bold">Course by {mentorName}</p>
    </div>
  );
}

export default MentorProfileCard;
