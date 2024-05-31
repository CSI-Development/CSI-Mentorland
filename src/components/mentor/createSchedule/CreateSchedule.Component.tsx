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
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Button } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import AddScheduler from "@/components/modals/addScheduler";
import { getScheduleApi } from "@/app/api/schedule/getSchedule.api";
import EventScheduler from "@/components/scheduler/eventScheduler.Component";

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus",
);

export function Calendar({ dateValue, setDateValue }: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar"]}>
        <DateCalendar
          value={dayjs(dateValue)}
          views={["month", "year", "day"]}
          openTo="day"
          onChange={(newValue: any) =>
            setDateValue(dayjs(newValue).format("YYYY-MM-DD"))
          }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

// function darkenColor(hex: string, amount: number) {
//   let usePound = false;
//   if (hex[0] === "#") {
//     hex = hex.slice(1);
//     usePound = true;
//   }

//   const num = parseInt(hex, 16);
//   let r = (num >> 16) + amount;
//   let g = ((num >> 8) & 0x00ff) + amount;
//   let b = (num & 0x0000ff) + amount;

//   r = Math.max(Math.min(255, r), 0);
//   g = Math.max(Math.min(255, g), 0);
//   b = Math.max(Math.min(255, b), 0);
//   console.log(
//     (usePound ? "#" : "") +
//       (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1) +
//       "b0",
//     "colorrr",
//   );
//   return (
//     (usePound ? "#" : "") +
//     (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)
//   );
// }

export default function CreateSchedule() {
  const [isOpenScheduleDialog, setIsOpenScheduleDialog] =
    React.useState<boolean>(false);
  const [dateValue, setDateValue] = React.useState(
    dayjs().format("YYYY-MM-DD"),
  );

  const { data: scheduleData, refetch } = useQuery({
    queryKey: ["getSchedule"],
    queryFn: () => getScheduleApi(),
  });

  const handleOpenEvent = () => {
    if (!dateValue) {
      toast.error("Please select a date first.");
      return;
    }
    setIsOpenScheduleDialog(true);
  };

  return (
    <div>
      <h4 className="text-2xl font-bold text-black">My Schedule</h4>
      <div className="flex w-full gap-10">
        <div className="flex h-full w-full flex-col gap-8 py-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full justify-end ">
              <Button
                onClick={handleOpenEvent}
                className="bg-[#2769D9] px-[14px] py-[5px] text-xl font-bold"
                variant="contained"
              >
                <PlusIcon className="mr-3 text-xl font-bold" /> Add Event
              </Button>
            </div>
          </div>
          <div className="h-[700px] overflow-scroll">
            <EventScheduler scheduleData={scheduleData} />
          </div>
        </div>
        <div className="h-fit rounded-lg border bg-white p-2">
          <Calendar dateValue={dateValue} setDateValue={setDateValue} />
        </div>
      </div>
      <AddScheduler
        OpenDialog={isOpenScheduleDialog}
        setOpenDialog={setIsOpenScheduleDialog}
        dateValue={dateValue}
        refetch={refetch}
      />
    </div>
  );
}
