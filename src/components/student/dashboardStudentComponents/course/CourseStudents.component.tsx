/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import React from "react";

const CourseStudents = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center rounded-lg bg-white p-3 shadow-md">
      <div className="flex w-full justify-between">
        <h1 className="text-sm font-semibold text-gray-700">All Students</h1>
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-3">
        {[...Array(8)].map((item, idx) => {
          return (
            <div key={idx} className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />
              <h1 className="text-sm font-medium">Carlos J Olivo</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseStudents;
