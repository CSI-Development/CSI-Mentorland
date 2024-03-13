"use client";
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb.Component";
import NotificationCards from "./NotificationCard.Component";

export interface notificationsData {
  notification: string;
  notificationSubject: string;
  notificationDiscription: string;
  notificationDate: string;
}

function Notification() {
  const [notification, setNotification] = useState<notificationsData[]>([
    {
      notification: "Leonard Greinstein",
      notificationSubject: "Your membership has been upgraded",
      notificationDiscription:
        "Et sunt excepturi sed exercitationem eligendi non repellendus dolorem est velit reru...",
      notificationDate: "Feb 21, 2023",
    },
    {
      notification: "Leonard Greinstein",
      notificationSubject: "Your membership has been upgraded",
      notificationDiscription:
        "Et sunt excepturi sed exercitationem eligendi non repellendus dolorem est velit reru...",
      notificationDate: "Feb 21, 2023",
    },
    {
      notification: "Leonard Greinstein",
      notificationSubject: "Your membership has been upgraded",
      notificationDiscription:
        "Et sunt excepturi sed exercitationem eligendi non repellendus dolorem est velit reru...",
      notificationDate: "Feb 21, 2023",
    },
    {
      notification: "Leonard Greinstein",
      notificationSubject: "Your membership has been upgraded",
      notificationDiscription:
        "Et sunt excepturi sed exercitationem eligendi non repellendus dolorem est velit reru...",
      notificationDate: "Feb 21, 2023",
    },
  ]);

  return (
    <div className="text-black w-full ">
      <Breadcrumb titel="Notification" />
      <div className="px-3">
        <div className="w-8/12 mt-4 mb-3 justify-between flex text-lg font-bold">
          <p>Message</p>
          <p>Date</p>
        </div>
        <div className="w-8/12 ">
          {notification.map((data, index) => {
            return (
              <NotificationCards
                key={index}
                notification={data.notification}
                notificationDate={data.notificationDate}
                notificationDiscription={data.notificationDiscription}
                notificationSubject={data.notificationSubject}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notification;
