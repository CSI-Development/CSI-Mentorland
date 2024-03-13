// import React from 'react'
// import Breadcrumb from '../Breadcrumb.Component'

// function MyCommunities() {
"use client";
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb.Component";
import mentor1 from "../../../../../public/studentDashboard/myCommunities/member1.png";
import mentor2 from "../../../../../public/studentDashboard/myCommunities/member2.png";
import subjectCoverImg from "../../../../../public/studentDashboard/myCommunities/subjectCoverImg.png";
import CommunityCard from "./CommunityCard.Component";

function MyCommunities() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const sampleData = [
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 75,
      classesLeft: 15,
    },
    {
      memberName: "Martilouytica Mini",
      memberRole: "Psychologist, Coach",
      memberImage: mentor2,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 35,
      classesLeft: 5,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 75,
      classesLeft: 15,
    },
    {
      memberName: "Martilouytica Mini",
      memberRole: "Psychologist, Coach",
      memberImage: mentor2,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 35,
      classesLeft: 5,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 75,
      classesLeft: 15,
    },
    {
      memberName: "Martilouytica Mini",
      memberRole: "Psychologist, Coach",
      memberImage: mentor2,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 35,
      classesLeft: 5,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 75,
      classesLeft: 15,
    },
    {
      memberName: "Martilouytica Mini",
      memberRole: "Psychologist, Coach",
      memberImage: mentor2,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      progress: 35,
      classesLeft: 5,
    },
  ];

  return (
    <div className="text-black w-full">
      <Breadcrumb titel="My Communities" />

      <div className="flex gap-5 w-full mt-6">
        <div className="w-3/12">
          <p className="text-lg mb-2">Sort By</p>
          <select
            value={selectedOption}
            onChange={handleSelect}
            className="p-2 px-5 border border-[#b9baba] text-lg w-full"
          >
            <option value="recentlyViewed">Recently Viewed</option>
            <option value="mostPopular">Most Popular</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>

        <div className="w-3/12">
          <p className="text-lg mb-2">Filter By</p>
          <select
            value={selectedOption}
            onChange={handleSelect}
            className="p-2 px-5 border border-[#b9baba] text-lg w-full"
          >
            <option value="recentlyViewed">Recently Viewed</option>
            <option value="mostPopular">Most Popular</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>

        <button className="bg-[#2769D9] rounded-lg h-11  mt-auto mb-0.5 text-xl px-5 text-white font-bold">
          Go
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 gap-y-8 mt-8 md:grid-cols-2 h-[62vh] overflow-y-scroll ">
        {sampleData.map((data, index) => (
          <CommunityCard
            key={index}
            memberName={data.memberName}
            memberRole={data.memberRole}
            memberImage={data.memberImage.src} // Convert StaticImageData to string
            courseImg={data.courseImg.src}
            courseName={data.courseName}
            progress={data.progress}
            classesLeft={data.classesLeft}
          />
        ))}
        
      </div>
    </div>
  );
}

export default MyCommunities;
