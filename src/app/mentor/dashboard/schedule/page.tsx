/* eslint-disable @typescript-eslint/prefer-string-starts-ends-with */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import * as React from "react";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import CreateSchedule from "@/components/mentor/createSchedule/CreateSchedule.Component";

export default function Schedular() {

  return (
    <MentorDashboardLayout showSidebar={true}>
      <div className="flex h-full w-full flex-col py-20 text-black z-10">
        <CreateSchedule />
      </div>
    </MentorDashboardLayout>
  );
}
