import React from "react";
import Image from "next/image";
import AccessCard1 from "../../../../../public/studentDashboard/wallet/accesscard1.png";
import AccessCard2 from "../../../../../public/studentDashboard/wallet/accesscard2.png";

const AccessCard = ({ idx }: { idx: number }) => {
  if (idx == 1) {
    return (
      <Image
        src={AccessCard1}
        alt=""
        className="w-full h-36 object-cover rounded-lg overflow-hidden shadow-sm"
      />
    );
  }
  if (idx == 2) {
    return (
      <Image src={AccessCard2} alt="" className="w-full h-36 object-cover" />
    );
  }
  // return <div className="w-full bg-red-400 h-36 rounded-lg"></div>;
};
const CourseAccessCards = () => {
  return (
    <div className="w-full h-full p-3 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">Access Cards</h1>
        <h1 className="text-sm font-semibold text-primary">Upgrade!</h1>
      </div>
      <div className="w-full grid grid-cols-7">
        <AccessCard idx={1} />
      </div>
    </div>
  );
};

export default CourseAccessCards;
