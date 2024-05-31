/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useContext, useEffect, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";

function ViewSupportTicket({
  OpenDialog,
  setOpenDialog,
  selectedTicketData,
  setSelectedTicketData,
  refetch,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTicketData:any;
  setSelectedTicketData:any;
  refetch: any;
}) {
console.log(selectedTicketData,'seleddd')
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
          setSelectedTicketData(null);
        }}
        className="absolute right-4 top-4 cursor-pointer text-black"
        icon="maki:cross"
      />
      <div className="w-full p-10">
        <div className="w-full">
          <h1 className="w-full text-center text-3xl font-bold text-black">
            Support Ticket
          </h1>
          <div className="mt-5">
            <h1 className="text-black font-bold text-2xl">Subject</h1>
            <p>{selectedTicketData?.subject}</p>
          </div>
          <div className="mt-5">
            <h1 className="text-black font-bold text-2xl">Description</h1>
            <p>{selectedTicketData?.description}</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ViewSupportTicket;
