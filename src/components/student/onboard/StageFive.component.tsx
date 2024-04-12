"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function StageFive() {
  return (
    <div className="w-8/12 mx-auto mt-10  h-fit flex flex-col  justify-center">
      <p className="text-center font-semibold text-2xl">
        Have you don any educational videos recently
      </p>

      <p className="text-[#fefffe] text-center mt-8 mb-3">
        If so, please send us the links to see how how you perform in front of
        the camera
      </p>

      <div className="flex flex-col mt-7 gap-3 w-2/3 mx-auto py-3 text-[#fefffe]">
        <div className="text-xs">Video Link - Youtube,Vimeo,etc</div>
        <div className="w-full flex gap-4">
          <input
            type="text"
            placeholder="http:"
            className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
          ></input>
          <button className="bg-primary text-white rounded-lg py-1 px-4 font-semibold">
            Add
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {[...Array(1)].map((item) => {
            return (
              <div className="flex justify-between items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1692090383808-84faed4b35a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-2/12 h-12 object-cover"
                />
                <h1 className="flex-1">How to grow your business</h1>

                <Icon
                  icon="mingcute:close-fill"
                  className="w-5 h-5"
                  color="#FFD600"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex flex-col gap-3"> */}
    </div>
  );
}

export default StageFive;
