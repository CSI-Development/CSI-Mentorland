import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import mentor1 from "/public/studentDashboard/myCommunities/member1.png";
import subjectCoverImg from "/public/studentDashboard/myCommunities/subjectCoverImg.png";
import Breadcrumb from "@/components/student/dashboardStudentComponents/Breadcrumb.Component";
import WishListCard from "@/components/student/dashboardStudentComponents/wishlist/WishListCard.Component";

function Page() {
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
    // Use the Layout component and set showSidebar to false to hide the sidebar
    <DashboardLayout showSidebar={true}>
      <div className="h-full w-full px-4">
        <div className="w-full text-black ">
          <Breadcrumb titel="Wishlist" />
          <div className="mt-8 grid h-[62vh] grid-cols-1 gap-3 gap-y-2 overflow-y-scroll md:grid-cols-2 ">
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
      </div>
    </DashboardLayout>
  );
}

export default Page;
