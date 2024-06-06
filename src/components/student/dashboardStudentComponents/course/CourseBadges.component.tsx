/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Badge1 from "../../../../../public/studentDashboard/wallet/badge1.svg";
import Image from "next/image";

const CourseBadges = ({ earn }: any) => {
  return (
    <div className="flex h-fit w-full flex-col items-center rounded-lg bg-white p-3 shadow-md">
      <div className="flex w-full justify-between">
        <h1 className="text-sm font-semibold text-gray-700">
          Community Badges
        </h1>
        {earn && (
          <h1 className="text-sm font-semibold text-primary">
            How to Earn Badges?
          </h1>
        )}
      </div>
      <div className="mt-4 grid w-full grid-cols-4 gap-3">
        {[...Array(8)].map((_item, idx) => {
          if (idx > 2) {
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Image
                  src={Badge1}
                  alt=""
                  className="scale-90 blur-sm grayscale"
                />
                <h1 className="text-sm text-gray-300">
                  Lorem ipsum, dolor sit amet
                </h1>
              </div>
            );
          }
          return (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 text-center"
            >
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
