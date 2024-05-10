/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function StageOne({register}:any) {

  return (
    <div className="w-5/12 mx-auto mt-16  h-[25rem] flex flex-col  justify-center">
      <p className="text-center font-semibold text-2xl">{`Let's get to know each other first`}</p>
      <p className="text-center text-[#959595]">Please enter your details</p>

      <p className="mt-8">First, tell us your First and Last names*</p>
      <div className="flex gap-5 mt-1">
        <input
          type="text"
          {...register("firstName")}
          placeholder="First Name"
          className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-1.5 px-4 w-1/2"
        ></input>
        <input
          type="text"
          {...register("lastName")}
          placeholder="Last Name"
          className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-1.5 px-4 w-1/2"
        ></input>
      </div>

      {/* <div className="border rounded-lg mt-5 bg-[#384256] py-2 px-5">
        <div className="flex justify-center">
          <Icon className="text-3xl" icon="mdi:incognito" />
          <p className="font-sans text-lg mx-2">
            Would you like to remain anonymous?
          </p>
        </div>
        <p className="text-center text-sm text-[#bebebe]">
          You will remain anonymous to other students in the platform. Only
          mentors and the administrators of the platform will know your identity
          in order to certify you.
        </p>
        <div className="flex justify-center mt-2 mb-4 ">
          <input
            type="checkbox"
            {...register("anonymousStudent")}
            className="w-4 h-4 text-blue-600 bg-[#384256]  rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes, please keep my personal information private
          </label>
        </div>

        <div className="w-8/12 mx-auto px-auto">
          <p className="mt-8">Enter a Username or Handler</p>
          <div className="flex gap-5 mt-1">
            <input
              type="text"
              {...register("userNameOrHandler")}
              placeholder="Username or Handler"
              className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-1.5 px-4 w-full"
            ></input>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default StageOne;
