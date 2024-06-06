/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { getNotificationApi } from "@/app/api/notification/getNotification";
import ViewNotifications from "@/components/modals/notifications";
import Breadcrumb from "@/components/student/dashboardStudentComponents/Breadcrumb.Component";
import NotificationCards from "@/components/student/dashboardStudentComponents/notification/NotificationCard.Component";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react"; // Adjust this path to the correct location of your layout.tsx file
import { IoIosSearch } from "react-icons/io";

export interface notificationsData {
  notification: string;
  notificationSubject: string;
  notificationDiscription: string;
  notificationDate: string;
}

function Page() {
  const [isOpenNotificationDialog, setIsOpenNotificationDialog] =
    useState<boolean>(false);

  const [selectedNotificationData, setSelectedNotificationData] =
    useState<any>();

  const { data: notificationData } = useQuery({
    queryKey: ["getSchedule"],
    queryFn: () => getNotificationApi(),
  });

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

  // Sort notifications from newest to oldest
  const sortedNotifications = notificationData?.notifications?.sort(
    (a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <MentorDashboardLayout showSidebar={true}>
      <div className="h-full w-full px-4 py-20 ">
        <div className="w-full text-black ">
          <div className="flex w-full justify-between">
            <Breadcrumb titel="Notifications" />
            <div className="flex h-10 w-60 items-center rounded border border-[#B9BABA] bg-white px-4 py-2 text-black">
              <input
                type="text"
                placeholder="Search"
                className="w-48 outline-none"
              />
              <p className="text-2xl">
                <IoIosSearch />
              </p>
            </div>
          </div>
          <div className="px-3">
            <div className="mb-3 mt-4 flex w-full justify-between text-lg font-bold">
              <p>Message</p>
              <p>Date</p>
            </div>
            <div className="mt-10 w-full">
              {sortedNotifications?.map((data: any) => {
                return (
                  <div
                    key={data?._id}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedNotificationData(data);
                      setIsOpenNotificationDialog(true);
                    }}
                  >
                    <NotificationCards
                      key={data?._id}
                      notification={data?.senderName}
                      notificationDate={data?.createdAt}
                      notificationDiscription={data?.description}
                      notificationSubject={data?.title}
                    />
                  </div>
                );
              })}
            </div>
            <ViewNotifications
              OpenDialog={isOpenNotificationDialog}
              setOpenDialog={setIsOpenNotificationDialog}
              selectedNotificationData={selectedNotificationData}
            />
          </div>
        </div>
      </div>
    </MentorDashboardLayout>
  );
}

export default Page;
