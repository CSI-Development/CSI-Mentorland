/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Scheduler } from "@aldabil/react-scheduler";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";

function generateRandomColor() {
  const generateHexValue = (min = 1) => {
    return Math.floor(((min + Math.random()) * 256) / (min + 1))
      ?.toString(16)
      .padStart(2, "0");
  };
  let red = generateHexValue(0);
  let green = generateHexValue(0);
  let blue = generateHexValue(0);
  if (
    Number("0x" + red) < 170 &&
    Number("0x" + green) < 170 &&
    Number("0x" + blue) < 170
  ) {
    const ran = Math.floor(Math.random() * 3);
    if (ran === 0) red = generateHexValue(4);
    else if (ran === 1) green = generateHexValue(4);
    else if (ran === 2) blue = generateHexValue(4);
  }
  return "#" + red + green + blue + "80";
}

const customEventRenderer = ({
  event,
  defaultAttributes,
  defaultStyles,
}: any) => {
  const backgroundColor: string = event.color || generateRandomColor() + "05";
  const borderColor = backgroundColor.substring(0, 7);

  return (
    <Link href={event?.hostLink ||event?.classLink}>
      <div
        {...defaultAttributes}
        style={{
          ...defaultStyles,
          backgroundColor,
          // opacity: '50%',
          borderLeft: `4px solid ${borderColor}`,
          padding: "10px",
          color: `${borderColor}`,
          // width:"120px",
        }}
        className="h-full"
      >
        <p className={`w-full text-wrap text-xs font-bold`}>{event.title}</p>
        <p className={`text-xs`}>{event.description}</p>
        <div className="mt-1 flex items-center">
          <IoMdTime className="mr-1 text-xs" />
          <p className="text-nowrap text-xs">
            {dayjs(event.start).format("hh:mm")} -{" "}
            {dayjs(event.end).format("hh:mm")}
          </p>
        </div>
      </div>
    </Link>
  );
};

function EventScheduler({ scheduleData, student }: any) {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const key= student? "classLink": "hostLink";
    if (scheduleData) {
      const data = scheduleData?.map((val: any) => ({
        event_id: val._id,
        title: val.title,
        description: val.description,
        start: new Date(
          `${dayjs(val.date).format("YYYY/MM/DD")} ${val.startTime}`,
        ),
        end: new Date(`${dayjs(val.date).format("YYYY/MM/DD")} ${val.endTime}`),
        color: generateRandomColor(),
        [key]: student? val.classLink: val.hostLink,
        hostLink: val?.hostLink
      }));
      setEvents(data);
    }
  }, [scheduleData]);
  return (
    <div>
      <Scheduler
        events={events}
        disableViewer
        editable={false}
        deletable={false}
        height={300}
        eventRenderer={customEventRenderer}
        day={{
          startHour: 9,
          endHour: 20,
          step: 60,
        }}
        week={{
          weekDays: [1,2, 3, 4, 5, 6],
          weekStartOn: 6,
          startHour: 9,
          endHour: 20,
          step: 60,
        }}
        // onEventClick={handlePage}
      />
    </div>
  );
}

export default EventScheduler;
