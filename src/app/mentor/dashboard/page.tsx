import { IoMdTime } from "react-icons/io";
import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";
import { RiUserFill } from "react-icons/ri";
import { IoFlag } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import React from "react";

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

function page() {
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
          <div className="h-[475px] w-[60%] rounded-lg bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-[#151B2B]">Today Schedule</h1>
              <h1 className="font-bold text-[#2769D9]">
                See complete schedule
              </h1>
            </div>
            <div className="mt-4 flex w-full justify-between">
              {timeIntervals.map((val, index) => (
                <p key={index} className="text-[#B1B1B1]">
                  {val}
                </p>
              ))}
            </div>
            <div className="mt-5 flex w-full flex-col justify-center gap-2">
              <div className="h-[94px] w-[230px] rounded-lg border-l-4 border-[#11B67B] bg-[#c3f3c1] p-2 text-xs text-[#11B67B]">
                <h1 className="font-bold">Live Class With Cody Getchell</h1>
                <p>
                  ab viral inferno, nam rick grimes malum cerebro. De carne
                  lumbering
                </p>
                <p className="mt-2 flex items-center">
                  <IoMdTime className="mr-2 text-lg" /> 12:00 13:00
                </p>
              </div>
              <div className="ml-60 h-[94px] w-[230px] rounded-lg border-l-4 border-[#2769D9] bg-[#C1D7FD] p-2 text-xs text-[#2769D9]">
                <h1 className="font-bold">Live Class With Cody Getchell</h1>
                <p>
                  ab viral inferno, nam rick grimes malum cerebro. De carne
                  lumbering
                </p>
                <p className="mt-2 flex items-center">
                  <IoMdTime className="mr-2 text-lg" /> 12:00 13:00
                </p>
              </div>
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
                  src="/svg/user.svg"
                  alt="user"
                  width={136}
                  height={136}
                  className="-mt-20 rounded-full bg-white p-[1px]"
                />
                <h1 className="text-2xl font-bold text-[#151B2B]">
                  Cody Getchell
                </h1>
              </div>
              <div className="mt-5 p-5">
                <h1 className="font-bold text-[#151B2B]">My Communities</h1>
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
                  I didn&apos;ut even know we were calling him Big Bear. We
                  never had the chance to?
                </p>
                <TiArrowBack className="text-2xl font-bold text-[#5D6475]" />
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
          <div className="h-[475px] w-[35%] rounded-lg bg-white p-5 text-[#151B2B] shadow-lg">
            <div className="">
              <h1 className="font-bold text-[#151B2B]">
                Students that marked me as favorite mentor
              </h1>
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
      </div>
    </MentorDashboardLayout>
  );
}

export default page;
