/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { Dialog } from "@material-tailwind/react";
import Vip from "../svg/Vip";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

function BecomeVip({
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
            Become a VIP!
          </h1>
          <div className="flex w-full  justify-center">
            <Vip />
          </div>
          <h1 className="text-center">
            if you really want to advance on your education, you can get access
            to the VIP Level feed for $50/month
          </h1>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-5">
            <h1 className="text-center text-xl font-bold text-primary">
              You’ll get Access to
            </h1>
            <div className="grid grid-cols-2 gap-14 whitespace-nowrap px-5 py-5 text-sm font-bold text-[#5D6475]">
              <ul className="list-disc space-y-1">
                <li>VIP Feed</li>
                <li>Live Calls with the Mentor</li>
                <li>Event Cards</li>
                <li>Period regard sudden better</li>
                <li>Decisively surrounded</li>
              </ul>
              <ul className="list-disc space-y-1">
                <li>Itaque earum rerum</li>
                <li>Hic tenetur a sapiente</li>
                <li>Delectus ut aut</li>
                <li>Reiciendis voluptatibus</li>
                <li>Maiores alias consequatur</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="/student/subjectSelection/payment"
            className=" whitespace-nowrap rounded-lg bg-[#2769D9] px-6 py-[10px] text-lg font-bold text-white"
            type="submit"
          >
            Become a VIP Now!
          </Link>
        </div>
      </div>
    </Dialog>
  );
}

export default BecomeVip;
