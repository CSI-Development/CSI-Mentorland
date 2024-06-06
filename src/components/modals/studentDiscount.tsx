/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

function StudentDiscount({data, setDiscountModal}:any) {

  return (
    <div className="absolute bg-white z-50 p-6 w-[35%] rounded-lg shadow-lg right-10 top-24">
      <div>
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-bold">You’ve got a Discount</h1>
          <IoClose className="text-3xl cursor-pointer" onClick={()=>setDiscountModal(false)}/>
        </div>
        <p className="text-xs text-[#5D6475] my-3">
          Hello Entrand, thank you for add me as one of your fav mentors. To
          help you decide on taking my courses, here is a giveaway for you to
          use when joining!
        </p>
        <div className="flex gap-4 items-center">
          <Image
            src={data?.studentAvatar}
            alt=""
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <h1 className="font-bold">{data?.firstName + " " + data?.lastName}</h1>
        </div>
      </div>
    </div>
  );
}

export default StudentDiscount;
