/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { Dialog } from "@material-tailwind/react";
import Badge1 from "/public/studentDashboard/wallet/badge1.svg";
import Image from "next/image";
import Link from "next/link";

function StudentMessage({
  OpenDialog,
  setOpenDialog,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog
      size="sm"
      open={OpenDialog}
      handler={() => console.log("opened")}
      placeholder
      className="relative"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="w-full p-10">
        <div className="flex w-full flex-col justify-center gap-5">
          <h1 className="text-center text-3xl font-bold text-black">
            Message from Cody Getchell
          </h1>
          <p className="text-center text-xl text-[#151B2B]">
            Hello Entrand, thank you for add me as one of your fav mentors. To
            help you decide on taking my courses, here is a giveaway for you to
            use when joining!
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="">
            <Image src={Badge1} alt="" className="scale-90" />
            <h1 className="text-center text-base font-bold text-black">
              40% Off Badge
            </h1>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="mr-4 rounded-lg bg-[#B9BABA] px-20 py-[10px] text-2xl font-bold text-white"
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </button>
          <Link href="/mentor/dashboard/studentTest" 
            className=" whitespace-nowrap rounded-lg bg-[#2769D9] px-6 py-[10px] text-2xl font-bold text-white"
            type="submit"
          >
            Get Discount
          </Link>
        </div>
      </div>
    </Dialog>
  );
}

export default StudentMessage;
