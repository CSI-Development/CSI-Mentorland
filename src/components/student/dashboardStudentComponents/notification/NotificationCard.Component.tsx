import React from "react";
import { type notificationsData } from "@/app/student/dashboard/notification/page";

function NotificationCards({
  notification,
  notificationSubject,
  notificationDiscription,
  notificationDate,
}: notificationsData) {
  return (
    <div className="flex justify-between mb-4 py-2 border-b-2 border-[#B9BABA]              ">
      <div className="leading-5">
        <p className="text-lg font-bold">{notification}</p>
        <p className="font-bold">{notificationSubject}</p>
        <p className="w-2/3 text-sm text-[#5D6475]">
          {notificationDiscription}
        </p>
      </div>
      <p>{notificationDate}</p>
    </div>
  );
}

export default NotificationCards;
