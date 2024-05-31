/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React from "react";
import { Dialog } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";

function ViewNotifications({
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
      className="fixed right-20 top-20"
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
        <div className="w-full">
          <h1 className="w-full text-xl font-bold text-black">
            Notifications{" "}
          </h1>
          <div className="w-full flex items-center justify-between mt-5">
            <h1 className="font-semibold text-black">Message</h1>
            <h1 className="font-semibold text-black">Date</h1>
          </div>
          <div className="w-full flex justify-between mt-5">
           <h1 className="text-black w-96">Heading</h1>
           <p>Feb 21, 2023</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ViewNotifications;