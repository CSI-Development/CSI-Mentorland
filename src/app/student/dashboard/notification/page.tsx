"use client"
import Breadcrumb from "@/components/student/dashboardStudentComponents/Breadcrumb.Component";
import NotificationCards from "@/components/student/dashboardStudentComponents/notification/NotificationCard.Component";
import DashboardLayout from "@/layouts/DashboardLayout";
import React, { useState } from "react"; // Adjust this path to the correct location of your layout.tsx file

export interface notificationsData {
  notification: string;
  notificationSubject: string;
  notificationDiscription: string;
  notificationDate: string;
}

function Page() {
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
    <DashboardLayout showSidebar={true}>
      <div className="h-full w-full px-4  ">
        <div className="w-full text-black ">
          <Breadcrumb titel="Notification" />
          <div className="px-3">
            <div className="mb-3 mt-4 flex w-8/12 justify-between text-lg font-bold">
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
      </div>
    </DashboardLayout>
  );
}

export default Page;
