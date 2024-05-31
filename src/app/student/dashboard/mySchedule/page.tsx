"use client";
import React from "react";
import dayjs from "dayjs";
import EventScheduler from "@/components/scheduler/eventScheduler.Component";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { getScheduleApi } from "@/app/api/schedule/getSchedule.api";
import { Calendar } from "@/components/mentor/createSchedule/CreateSchedule.Component";

const page = () => {
  const { data: scheduleData, refetch } = useQuery({
    queryKey: ["getSchedule"],
    queryFn: () => getScheduleApi(),
  });
  const [dateValue, setDateValue] = React.useState(
    dayjs().format("YYYY-MM-DD"),
  );
  return (
    <DashboardLayout showSidebar={true}>
      <div className="grid grid-cols-3 text-black pb-20 mr-16">
        <div className="col-span-2 p-10">
          <h4 className="text-2xl font-bold text-black">My Schedule</h4>
          <EventScheduler scheduleData={scheduleData} student="student"/>
        </div>
        <div className="col-span-1 h-fit rounded-lg border bg-white p-2 mt-20">
          <Calendar dateValue={dateValue} setDateValue={setDateValue} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
