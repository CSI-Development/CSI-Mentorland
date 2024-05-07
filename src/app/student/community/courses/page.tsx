import WishListCard from "@/components/student/dashboardStudentComponents/wishlist/WishListCard.Component";
import React from "react";
import mentor1 from "../../../../../public/studentDashboard/myCommunities/member1.png";
import subjectCoverImg from "../../../../../public/studentDashboard/myCommunities/subjectCoverImg.png";

const CommunityCourses = () => {
  const sampleData = [
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
    {
      memberName: "Cody Getchell",
      memberRole: "Psychologist, Coach",
      memberImage: mentor1,
      courseImg: subjectCoverImg,
      courseName: "Course make millions initial course",
      price: 3800,
    },
  ];
  return (
    <div className="w-full h-screen p-5 flex flex-col items-center bg-white text-black overflow-y-auto">
      <h1 className="text-2xl font-bold">
        All the available courses by Cody Getchell
      </h1>
      <div className="grid grid-cols-2 gap-y-12 gap-x-7 mt-8  w-full px-10 ">
        {sampleData.map((data, index) => (
          <WishListCard
            key={index}
            memberName={data.memberName}
            memberRole={data.memberRole}
            memberImage={data.memberImage.src} // Convert StaticImageData to string
            courseImg={data.courseImg.src}
            courseName={data.courseName}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityCourses;
