import React from "react";

const CourseStudents = () => {
  return (
    <div className="w-full h-fit p-3 bg-white rounded-lg shadow-md flex flex-col items-center">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">All Students</h1>
      </div>
      <div className="w-full grid grid-cols-2 gap-3 mt-4">
        {[...Array(8)].map((item, idx) => {
          return (
            <div key={idx} className="flex gap-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
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
