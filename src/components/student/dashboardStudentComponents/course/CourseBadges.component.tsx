import React from "react";
import Badge1 from "../../../../../public/studentDashboard/wallet/badge1.svg";
import Badge2 from "../../../../../public/studentDashboard/wallet/badge2.svg";
import Badge3 from "../../../../../public/studentDashboard/wallet/badge3.svg";
import Image from "next/image";

const CourseBadges = () => {
  return (
    <div className="w-full h-fit p-3 bg-white rounded-lg shadow-md flex flex-col items-center">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">
          Community Badges
        </h1>
        <h1 className="text-sm font-semibold text-primary">
          How to Earn Badges?
        </h1>
      </div>
      <div className="w-full grid grid-cols-4 gap-3 mt-4">
        {[...Array(8)].map((_item, idx) => {
          if (idx > 2) {
            return (
              <div key={idx} className="text-center flex flex-col items-center gap-2">
                <Image src={Badge1} alt="" className="scale-90 grayscale blur-sm" />
                <h1 className="text-sm text-gray-300">
                  Lorem ipsum, dolor sit amet
                </h1>
              </div>
            );
          }
          return (
            <div key={idx} className="text-center flex flex-col items-center gap-2">
              <Image src={Badge1} alt="" className="scale-90" />
              <h1 className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseBadges;
