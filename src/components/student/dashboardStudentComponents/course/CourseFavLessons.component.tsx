"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CourseSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xs font-semibold text-gray-600">
        Section 1: INTRODUCTION
      </h1>
      <div className="w-full flex flex-col gap-1">
        {[...Array(3)].map((item, i) => {
          return (
            <div key={i} className="w-full gap-4 flex justify-between items-center">
              <Icon icon="el:play-alt" />
              <h2 className="flex-1 text-sm font-bold text-gray-600">
                Lorem ipsum dolor, sit{" "}
              </h2>
              <div className="text-gray-700 font-thin ">14.05</div>
            </div>
          );
        })}
      </div>
      <hr className="border-[1px]" />
    </div>
  );
};

const CourseFavLessons = () => {
  return (
    <div className="w-full h-full p-3 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">
          Facorite Lessons
        </h1>
      </div>
      <div className="w-full flex flex-col gap-4 mt-4">
        {[...Array(2)].map((i, idx) => {
          return <CourseSection key={idx} />;
        })}
      </div>
    </div>
  );
};

export default CourseFavLessons;
