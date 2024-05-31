/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { IoMdTime } from "react-icons/io";
import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";
import { RiUserFill } from "react-icons/ri";
import { IoFlag } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { mentorDetailsApi } from "@/app/api/mentorDetails/mentorDetails.api";
import Link from "next/link";
import EventScheduler from "@/components/scheduler/eventScheduler.Component";
import { getMentorScheduleApi } from "@/app/api/schedule/getMentorSchedule.api";
import ViewSupportTicket from "@/components/modals/viewSupportTicket";
import { getSupportTicketApi } from "@/app/api/supportTicket/getSupportTicket";
import { Icon } from "@iconify/react/dist/iconify.js";

const Page = () => {
  const [isOpenTicketDialog, setIsOpenTicketDialog] = useState<boolean>(false);
  const [selectedTicketData, setSelectedTicketData] = useState<any>(null);
  const { data } = useQuery({
    queryKey: ["mentorDetails"],
    queryFn: () => mentorDetailsApi(),
  });

  const { data: mentorSchedule } = useQuery({
    queryKey: ["mentorSchedule"],
    queryFn: () => getMentorScheduleApi(),
  });
  const { data: supportTicket, refetch } = useQuery({
    queryKey: ["supportTicket"],
    queryFn: () => getSupportTicketApi(),
  });

  function generateTimeIntervals(startHour: number, numberOfIntervals: number) {
    const timeIntervals = [];

    for (let i = 0; i < numberOfIntervals; i++) {
      const currentHour = (startHour + i) % 24;
      const formattedHour = currentHour.toString().padStart(2, "0");

      const timeString = `${formattedHour}:00`;

      timeIntervals.push(timeString);
    }

    return timeIntervals;
  }

  const startHour = 9; // Start from 09:00
  const numberOfIntervals = 8; // Generate 5 intervals (09:00, 10:00, 11:00, 12:00, 13:00)

  const timeIntervals = generateTimeIntervals(startHour, numberOfIntervals);

  // console.log(data?.favoriteStudents[0]?.studnets[0], "student data fghjkl");
  const truncateAddress = (address = "") => {
    return address?.slice(0, 2) + "..." + address?.slice(address?.length - 4);
  };

  return (
    // <Dashbaord />
    <MentorDashboardLayout showSidebar={true}>
      <div className="w-full pt-20">
        <div className="">
          <h1 className="text-2xl font-bold text-[#151B2B]">
            General Dashboard
          </h1>
        </div>
        <div className="mt-5 flex w-full justify-between">
          <div className="h-[475px] w-[60%] overflow-scroll rounded-lg bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-[#151B2B]">Today Schedule</h1>
              <Link
                href="/mentor/dashboard/schedule"
                className="font-bold text-[#2769D9]"
              >
                See complete schedule
              </Link>
            </div>
            {/* <div className="mt-4 flex w-full justify-between">
              {timeIntervals.map((val, index) => (
                <p key={index} className="text-[#B1B1B1]">
                  {val}
                </p>
              ))}
            </div> */}
            <div className="mt-5 flex w-full flex-col justify-center gap-2 text-black">
              <EventScheduler scheduleData={mentorSchedule} height={300} />
            </div>
          </div>
          <div className="h-[475px] w-[35%] rounded-lg bg-white shadow-lg">
            <div className="h-[212px] w-full">
              <div className="h-[50%] rounded-t-lg bg-black">
                <Image
                  src="/images/back.jpeg"
                  alt="user"
                  className="h-full w-full rounded-lg rounded-t"
                  width={136}
                  height={136}
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <Image
                  src={data?.mentorAvatar ?? "/svg/user.svg"}
                  alt="user"
                  width={136}
                  height={136}
                  className="-mt-20 rounded-full bg-white p-[1px]"
                />
                <h1 className="text-2xl font-bold text-[#151B2B]">
                  {data?.firstName} {data?.lastName}
                </h1>
              </div>
              <div className="mt-5 p-5">
                <h1 className="font-bold text-[#151B2B]">My Communities</h1>
                <Link href="/mentor/dashboard/courseDashboard/">
                  <div className="mt-4 flex items-center">
                    <Image
                      src="/svg/user.svg"
                      alt="user"
                      width={80}
                      height={80}
                      className="rounded-full bg-white p-[1px]"
                    />
                    <h1 className="ml-3 text-xs font-bold text-[#151B2B]">
                      Courses Make Millions
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="h-[475px] w-[60%] rounded-lg bg-white p-5 shadow-lg">
            <div className="">
              <h1 className="font-bold text-[#151B2B]">Ask Your Mentor</h1>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5">
              <div className="flex justify-between border-b border-[#B9BABA] pb-3">
                <p className="font-bold text-[#5D6475]">
                  I didn&apos;ut even know we were calling him Big Bear. We
                  never had the chance to?
                </p>
                <TiArrowBack className="text-2xl font-bold text-[#5D6475]" />
              </div>
              <div className="flex justify-between border-b border-[#B9BABA] pb-3">
                <p className="font-bold text-[#5D6475]">
                  I didn&apos;ut even know we were calling him Big Bear. We
                  never had the chance to?
                </p>
                <TiArrowBack className="text-2xl font-bold text-[#5D6475]" />
              </div>
              <div className="flex justify-between border-b border-[#B9BABA] pb-3">
                <p className="font-bold text-[#5D6475]">
                  I didn't even know we were calling him Big Bear. We never had
                  the chance to?
                </p>
                <TiArrowBack className="text-2xl font-bold text-[#5D6475]" />
              </div>
              <div className="flex justify-between border-b border-[#B9BABA] pb-3">
                <p className="font-bold text-[#5D6475]">
                  I didn&apos;ut even know we were calling him Big Bear. We
                  never had the chance to?
                </p>
                <TiArrowBack className="text-2xl font-bold text-[#5D6475]" />
              </div>
              <div className="flex justify-between border-b border-[#B9BABA] pb-3">
                <p className="font-bold text-[#5D6475]">
                  I didn&apos;ut even know we were calling him Big Bear. We
                  never had the chance to?
                </p>
                <TiArrowBack className="text-2xl font-bold text-[#5D6475]" />
              </div>
            </div>
            {/* <div className="mt-5 flex w-full justify-center">
              <button className="flex items-center rounded-md border border-[#2769D9] px-[10px] py-[5px] font-bold text-[#2769D9]">
                <RiUserFill />- Remove
              </button>
              <button className="ml-3 flex items-center rounded-md border border-[#2769D9] bg-[#2769D9] px-[10px] py-[5px] font-bold text-[white]">
                <RiUserFill />+ Add
              </button>
            </div> */}
          </div>
          <div className="h-[475px] w-[35%] rounded-lg bg-white p-5 text-[#151B2B] shadow-lg">
            <div className="">
              <h1 className="font-bold text-[#151B2B]">
                Students that marked me as favorite mentor
              </h1>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {data?.favoriteStudents.map((student: any) => (
                <div
                  className="flex items-center justify-between"
                  key={student.students[0]?._id}
                >
                  <div className="flex items-center">
                    <Image
                      src={student.students[0]?.studentAvatar}
                      alt="user"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <h1 className="ml-2 font-bold">
                      {student.students[0]?.firstName}{" "}
                      {student.students[0]?.lastName}
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold">25876</h1>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="mt-5 flex w-full justify-center">
              <button className="flex items-center rounded-md border border-[#2769D9] px-[10px] py-[5px] font-bold text-[#2769D9]">
                <RiUserFill />- Remove
              </button>
              <button className="ml-3 flex items-center rounded-md border border-[#2769D9] bg-[#2769D9] px-[10px] py-[5px] font-bold text-[white]">
                <RiUserFill />+ Add
              </button>
            </div> */}
          </div>
        </div>
        <div className="mt-10 flex justify-between text-[#151B2B]">
          <div className="h-[365px] w-[60%] rounded-lg bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Events</h1>
              <IoIosAddCircle className="text-3xl font-bold text-[#2769D9]" />
            </div>
            <div className="mt-6">
              <ul className="grid grid-cols-1 gap-10 py-2">
                <li>
                  <div className="flex border-b border-[#B9BABA] pb-3">
                    <input
                      type="radio"
                      height={20}
                      width={20}
                      className="h-[20px] w-[20px] border-2 border-[#1A458F]"
                    />
                    <div className="ml-4 font-semibold text-[#5D6475]">
                      <p>
                        Has visitor law attacks pretend you calling own excited
                        painted.
                      </p>
                      <p className="m-1 flex font-normal">March 29 2023</p>
                    </div>
                    <p className="flex h-fit items-center whitespace-nowrap rounded-md bg-[#FDF2D6] p-1 text-[#E2B33A]">
                      Due tomorrow <IoFlag className="ml-2" />
                    </p>
                  </div>
                  {/* <button
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      onClick={() => console.log("Item 1 clicked")}
                    >
                      Item 1
                    </button> */}
                </li>
                <li>
                  <div className="flex border-b border-[#B9BABA] pb-3">
                    <input
                      type="radio"
                      height={20}
                      width={20}
                      className="h-[20px] w-[20px] border-2 border-[#1A458F]"
                    />
                    <div className="ml-4 font-semibold text-[#5D6475]">
                      <p>Venison rump drumstic</p>
                      <p className="m-1 flex font-normal">April 15 2023</p>
                    </div>
                    {/* <p  className="bg-[#FDF2D6] text-[#E2B33A] h-fit p-1 rounded-md flex items-center whitespace-nowrap">Due tomorrow <IoFlag className="ml-2"/></p> */}
                  </div>
                  {/* <button
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      onClick={() => console.log("Item 1 clicked")}
                    >
                      Item 1
                    </button> */}
                </li>
              </ul>
            </div>
            <div className="mt-5 flex w-full justify-center">
              <button className="ml-3 flex items-center rounded-md border border-[#2769D9] bg-[#2769D9] px-[10px] py-[5px] font-bold text-[white]">
                Create a New Event
              </button>
            </div>
          </div>
          <div className="h-[365px] w-[35%] rounded-lg bg-white p-5 shadow-lg">
            <div className="">
              <h1 className="font-bold">Support Staff</h1>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full bg-[#2769d9] p-[1px]"
                  />
                  <h1 className="ml-2 font-bold">Engelbert Bryughternexter</h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full bg-[#2769d9] p-[1px]"
                  />
                  <h1 className="ml-2 font-bold">Dunk Gryertyuson</h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full bg-[#2769d9] p-[1px]"
                  />
                  <h1 className="ml-2 font-bold">Entrand Fretyuingre</h1>
                </div>
              </div>
            </div>
            <div className="mt-5 flex w-full justify-center">
              <button className="flex items-center rounded-md border border-[#2769D9] px-[10px] py-[5px] font-bold text-[#2769D9]">
                <RiUserFill />- Remove
              </button>
              <button className="ml-3 flex items-center rounded-md border border-[#2769D9] bg-[#2769D9] px-[10px] py-[5px] font-bold text-[white]">
                <RiUserFill />+ Add
              </button>
            </div>
          </div>
        </div>
        <div className="mb-48 mt-10 flex justify-between text-[#151B2B]">
          <div className="h-[365px] w-[60%] rounded-lg bg-white p-5 shadow-lg">
            <div className="w-full rounded-lg bg-white p-3 shadow-md">
              <h1 className="text-md font-bold">Support Tickets</h1>
              <div className="mt-4 w-full">
                <div className="flex w-full items-center justify-between border-b border-[#B9BABA] py-3 text-sm text-[#B9BABA]">
                  <div>
                    <h1>Ticket Id</h1>
                  </div>
                  <div>
                    <h1>Subject</h1>
                  </div>
                  <div>
                    <h1>Source</h1>
                  </div>
                  <div>
                    <h1>Priority</h1>
                  </div>
                  <div>
                    <h1>Status</h1>
                  </div>
                  <div>
                    <h1>View</h1>
                  </div>
                </div>
                <div className="w-full">
                  {supportTicket?.map((ticket: any) => (
                    <div
                      className="flex w-full items-center justify-between border-b border-[#B9BABA] py-3"
                      key={ticket?._id}
                    >
                      <div className="text-center">
                        {" "}
                        <h1
                          onClick={() => {
                            setSelectedTicketData(ticket);
                            setIsOpenTicketDialog(true);
                          }}
                          className="cursor-pointer text-primary underline"
                          title={ticket?.ticketId}
                        >
                          {truncateAddress(ticket?.ticketId)}
                        </h1>
                      </div>
                      <div className="text-center">
                        <h1 className=" w-[13px] text-wrap text-start">
                          {ticket?.subject}
                        </h1>
                      </div>
                      <div className="text-center">
                        <h1 className="rounded border border-[yellow] p-1 text-start text-xs">
                          {ticket?.source}
                        </h1>
                      </div>
                      <div className="text-center">
                        <h1 className="rounded bg-[#FEE9EE] p-1 text-xs text-[#FF007A]">
                          {ticket?.priority}
                        </h1>
                      </div>
                      <div className="text-center">
                        <h1 className="rounded bg-[#CCFFCB] p-1 text-xs text-[#04D800]">
                          {ticket?.status}
                        </h1>
                      </div>
                      <div className="text-center">
                        <h1
                          onClick={() => {
                            setSelectedTicketData(ticket);
                            setIsOpenTicketDialog(true);
                          }}
                          className="cursor-pointer rounded bg-primary px-2 py-1 text-xs font-bold text-white"
                        >
                          View
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-5 mt-32 flex w-full items-center justify-center gap-3">
                {/* <button className="flex w-1/6 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent p-1 px-2 font-semibold text-primary">
                <Icon
                  icon="bxs:user-minus"
                  color="#2769D9"
                  className="h-6 w-6"
                />
                Remove
              </button> */}
                <Link
                  href="/student/supportTicket"
                  className="flex w-1/6 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary p-1 px-2 font-semibold text-white"
                >
                  <Icon icon="bxs:user-plus" className="h-6 w-6" />
                  Add
                </Link>
              </div>
              <ViewSupportTicket
                OpenDialog={isOpenTicketDialog}
                setOpenDialog={setIsOpenTicketDialog}
                selectedTicketData={selectedTicketData}
                setSelectedTicketData={setSelectedTicketData}
                refetch={refetch}
              />
            </div>
          </div>
        </div>
      </div>
    </MentorDashboardLayout>
  );
};

export default Page;
