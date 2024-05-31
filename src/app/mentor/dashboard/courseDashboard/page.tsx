/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useState } from "react";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import { IoMdTime } from "react-icons/io";
import { GiEvilBook } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { RiUserFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import EventScheduler from "@/components/scheduler/eventScheduler.Component";
import { useQuery } from "@tanstack/react-query";
import { getMentorScheduleApi } from "@/app/api/schedule/getMentorSchedule.api";

function CourseDashboard() {

  const { data: mentorSchedule } = useQuery({
    queryKey: ["mentorSchedule"],
    queryFn: () => getMentorScheduleApi(),
  });

  return (
    <MentorDashboardLayout showSidebar={true}>
      <div className="h-full w-full pt-20 text-black ">
        <div className="w-full">
          <div className="">
            <Link
              href="/mentor/dashboard"
              className="cursor-pointer font-bold text-[#2769D9]"
            >
              {"<< Back to Main Dashboard"}
            </Link>
          </div>
          <div className="mt-10">
            <div className="flex h-[175px] w-full flex-col justify-center rounded-t-xl bg-user-bg bg-cover p-10  text-white">
              <h1 className="text-3xl font-bold">Courses Make Millions</h1>
              <p className="mt-2 text-xl">WIth Cody Getchell</p>
            </div>
          </div>
          <div className="mt-10 h-[475px] w-[700px] overflow-scroll rounded-lg bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">Today Schedule</h1>
              <Link
                href="/mentor/dashboard/schedule"
                className="font-bold text-[#2769D9]"
              >
                See complete schedule
              </Link>
            </div>
            <div className="mt-5 flex w-full flex-col justify-center gap-2">
              <EventScheduler scheduleData={mentorSchedule} />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="mt-10 h-[475px] w-[700px] rounded-lg bg-white p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Notifications</h1>
                <h1 className="font-bold text-[#2769D9]">
                  Go To Notifications
                </h1>
              </div>
              <div className=" mt-5 border-b border-[#5D6475] pb-5">
                <h2 className="text-xs text-[#5D6475]">Recent Publications</h2>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-[#5D6475]">10:30 am</p>
                    <p className="ml-10 text-[#2769D9]">
                      Thoughts on psychological strategies
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                    2
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-[#5D6475]">03/12 12:00</p>
                    <p className="ml-10 text-[#2769D9]">Diaconic Mostrelaum</p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                    2
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-[#5D6475]">03/12 8:00</p>
                    <p className="ml-10 text-[#2769D9]">Mionh the Muyngtrews</p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                    2
                  </div>
                </div>
              </div>
              <div className=" mt-5 border-b border-[#5D6475] pb-5">
                <h2 className="text-xs text-[#5D6475]">Recent Publications</h2>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-[#5D6475]">10:30 am</p>
                    <p className="ml-10 text-[#2769D9]">
                      Thoughts on psychological strategies
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                    2
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-[#5D6475]">03/12 12:00</p>
                    <p className="ml-10 text-[#2769D9]">Diaconic Mostrelaum</p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                    2
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-[#5D6475]">03/12 8:00</p>
                    <p className="ml-10 text-[#2769D9]">Mionh the Muyngtrews</p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2769D9] font-bold text-white">
                    2
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 h-[475px] w-[458px] rounded-lg bg-white p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Assets</h1>
                <h1 className="font-bold text-[#2769D9]">Add More</h1>
              </div>
              <div className=" mt-5 border-b border-[#5D6475] pb-5">
                <h2 className="font-bold text-[#5D6475]">Books</h2>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-black">
                      <GiEvilBook />
                    </p>
                    <p className="ml-4 text-[#2769D9]">
                      Psychological strategies
                    </p>
                  </div>
                  <div className="flex h-6 w-6 cursor-pointer items-center justify-center font-bold text-[#FF007A]">
                    <RxCross1 className="font-bold" />
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-black">
                      <GiEvilBook />
                    </p>
                    <p className="ml-4 text-[#2769D9]">Mountains disgust war</p>
                  </div>
                  <div className="flex h-6 w-6 cursor-pointer items-center justify-center font-bold text-[#FF007A]">
                    <RxCross1 className="font-bold" />
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex">
                    <p className="text-black">
                      <GiEvilBook />
                    </p>
                    <p className="ml-4 text-[#2769D9]">Against hatred pious</p>
                  </div>
                  <div className="flex h-6 w-6 cursor-pointer items-center justify-center font-bold text-[#FF007A]">
                    <RxCross1 className="font-bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="mt-10 h-[475px] w-[700px] rounded-lg bg-white p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-bold">Pending Requests</h1>
                  <p className="text-xs">You have 50+ new requests</p>
                </div>
                <button className="ml-3 flex items-center rounded-md border border-[#2769D9] bg-[#2769D9] px-[10px] py-[5px] font-bold text-[white]">
                  <RiUserFill />+ Add new Member
                </button>
              </div>
              <div className="mt-5 flex justify-between text-xs text-[#A3A3A3]">
                <div>
                  <h1>CUSTOMER</h1>
                </div>
                <h1>PROGRESS</h1>
                <h1>STATUS</h1>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full bg-[#2769d9] p-[1px]"
                  />
                  <h1 className="ml-2 font-bold">Brandon Washington</h1>
                </div>
                <h1 className="font-bold text-[#3B8855]">79%</h1>
                <h1 className="h-fit cursor-pointer bg-[#FDF2D6] p-1 text-[#E2B33A]">
                  Current
                </h1>
              </div>
            </div>
            <div className="mt-10 h-[375px] w-[456px] rounded-lg bg-white p-5 shadow-lg">
              <div className="">
                <h1 className="font-bold">Past Students</h1>
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
                    <h1 className="ml-2 font-bold">
                      Engelbert Bryughternexter
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold">25876</h1>
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
                  <div>
                    <h1 className="font-bold">2123</h1>
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
                  <div>
                    <h1 className="font-bold">1235</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </MentorDashboardLayout>
  );
}

export default CourseDashboard;
