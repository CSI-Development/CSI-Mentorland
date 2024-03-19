import React from "react";
import Breadcrumb from "../Breadcrumb.Component";
import WishListCard from "./WishListCard.Component";
import mentor1 from "../../../../../public/studentDashboard/myCommunities/member1.png";
import subjectCoverImg from "../../../../../public/studentDashboard/myCommunities/subjectCoverImg.png";

function Wishlist() {
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
  ];

  return (
    <div className="text-black w-full ">
      <Breadcrumb titel="Wishlist" />
      <div className="grid grid-cols-1 gap-3 gap-y-2 mt-8 md:grid-cols-2 h-[62vh] overflow-y-scroll ">
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
}

export default Wishlist;
