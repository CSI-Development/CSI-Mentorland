import React from "react";
import Place1Logo from "../../../../../public/studentDashboard/course/Place1.svg";
import Place2Logo from "../../../../../public/studentDashboard/course/Place2.svg";
import Place3Logo from "../../../../../public/studentDashboard/course/Place3.svg";
import Image from "next/image";

const CourseLeaderboard = () => {
  return (
    <div className="w-full h-full p-3 bg-white rounded-lg shadow-md flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">Leaderboard</h1>
      </div>
      <h1>
        Monthly winners will be period regard sudden better. Decisively
        surrounded all admiration and not you. Out particular sympathize not{" "}
      </h1>
      <div className="w-full flex flex-col gap-5">
        <div className="flex w-full items-center justify-center gap-3">
          <Image src={Place1Logo} alt="" />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="flex-1 font-medium text-gray-700">Greg Greteymnh</h1>
          <h1 className="text-lg font-bold text-black">2587</h1>
        </div>
        <div className="flex w-full items-center justify-center gap-3">
          <Image src={Place2Logo} alt="" />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="flex-1 font-medium text-gray-700">Greg Greteymnh</h1>
          <h1 className="text-lg font-bold text-black">2587</h1>
        </div>
        <div className="flex w-full items-center justify-center gap-3">
          <Image src={Place3Logo} alt="" />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="flex-1 font-medium text-gray-700">Greg Greteymnh</h1>
          <h1 className="text-lg font-bold text-black">2587</h1>
        </div>
      </div>
    </div>
  );
};

export default CourseLeaderboard;