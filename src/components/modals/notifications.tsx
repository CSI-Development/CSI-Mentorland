/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React from "react";
import { Dialog } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import dayjs from "dayjs";

function ViewNotifications({
  OpenDialog,
  setOpenDialog,
  // notificationData,
  selectedNotificationData,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  // notificationData:any;
  selectedNotificationData: any;
}) {
  console.log(selectedNotificationData, "slected notification datadf");
  return (
    <Dialog
      size="sm"
      open={OpenDialog}
      handler={() => console.log("opened")}
      placeholder
      className="fixed"
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
          <div className="mt-5 flex w-full items-center justify-between">
            <h1 className="font-semibold text-black">Message</h1>
            <h1 className="font-semibold text-black">Date</h1>
          </div>
          <div className="mt-5 flex w-full justify-between">
            <h1 className="w-80 text-black">
              {selectedNotificationData?.description}
            </h1>
            <p>
              {dayjs(selectedNotificationData?.createdAt).format(
                "MMM DD, YYYY",
              )}
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ViewNotifications;
