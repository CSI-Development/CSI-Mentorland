import React from "react";

const CourseSchedule = () => {
  return (
    <div className="w-full h-full p-3 bg-white rounded-lg shadow-md flex flex-col items-center">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">Todays Schedule</h1>
        <h1 className="text-sm font-semibold text-primary">
          See complete schedule
        </h1>
      </div>
      <div className="flex flex-col w-2/3 justify-center items-center gap-2 text-center mt-8">
        <h1 className="text-primary font-semibold">
          You currently have no access to live calls{" "}
        </h1>
        <div className="text-gray-700 font-thin">
          Get access now to the VIP level and get access to Live Calls,
          One-to-one calls, the VIP Community areas and More!
        </div>
        <button className="bg-primary rounded-lg w-fit h-fit p-2 text-white text-sm">
          Click Here
        </button>
      </div>
    </div>
  );
};

export default CourseSchedule;
