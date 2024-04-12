"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function StageFour() {
  return (
    <div className="w-8/12 mx-auto mt-10  h-fit flex flex-col  justify-center">
      <p className="text-center font-semibold text-2xl">
        Do you have any verifiable qualifications?
      </p>

      <p className="text-[#fefffe] text-center mt-8 mb-3">
        The information given in this form will be verified by an administrator.
      </p>

      {/* <div className="flex flex-col gap-3"> */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[30%_30%_20%_10%] gap-3">
          {/* <div className="flex gap-4"> */}
          <h1 className="text-sm">Subject</h1>
          <h1 className="text-sm">Institution</h1>
          <h1 className="text-sm">Year Finished</h1>
          <div></div>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
          ></input>
          <button className="bg-primary w-full py-1 px-5 rounded-lg font-semibold text-white">
            Add
          </button>
          {/* </div> */}
        </div>
        <div className="grid grid-cols-[30%_30%_20%_10%] gap-3">
          <h1>Coaching Certificate</h1>
          <h1>Superiour minds college</h1>
          <h1>2001</h1>

          <div className=" flex items-center justify-end" >
            <Icon
              icon="mingcute:close-fill"
              className="w-5 h-5"
              color="#FFD600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StageFour;
