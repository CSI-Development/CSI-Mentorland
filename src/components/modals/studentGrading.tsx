/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { Dialog } from "@material-tailwind/react";
import Vip from "../svg/Vip";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

function StudentGrading({
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
      <Icon
        onClick={() => {
          setOpenDialog(false);
        }}
        className="absolute right-4 top-4 cursor-pointer text-black"
        icon="maki:cross"
      />
      <div className="w-full p-10">
        <div className="flex w-full flex-col justify-center gap-5">
          <h1 className="text-center text-3xl font-bold text-black">
            Finished Grading this test?
          </h1>
          <div className="w-full  justify-center">
            <label htmlFor="" className="text-primary">Leave a note for the student (Optional)</label>
            <input
              placeholder="Say something about the whole text"
              className="w-full rounded-lg border-2 border-[#b9baba] px-5 py-3 outline-none"
            ></input>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="mr-4 rounded-lg bg-[#B9BABA] px-10 py-[10px] text-lg font-bold text-white"
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </button>
          <Link
            href=""
            className=" whitespace-nowrap rounded-lg bg-[#2769D9] px-10 py-[10px] text-lg font-bold text-white"
            type="submit"
          >
            Send Grading
          </Link>
        </div>
      </div>
    </Dialog>
  );
}

export default StudentGrading;
