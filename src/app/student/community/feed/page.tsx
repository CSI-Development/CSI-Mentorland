/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import Image from "next/image";
import Banner from "../../../../../public/community/CommunityFeedBanner.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Progress } from "@material-tailwind/react";
import CourseLeaderboard from "@/components/student/dashboardStudentComponents/course/CourseLeaderoard.component";
import CommunityPost from "@/components/community/feed/CommunityPost.component";

const CommunityFeed = () => {
  return (
    <div className="h-screen w-full overflow-y-auto bg-white text-black">
      <Image src={Banner} alt="" className="h-[65vh] w-full object-cover" />
      <div className="mt-5 flex w-full gap-6">
        <div className="w-16">
          <div className="flex h-fit w-14 flex-col items-center gap-3 rounded-r-lg p-4 shadow-md">
            <Icon icon="material-symbols:home" className="h-8 w-8" />
            <Icon icon="material-symbols:home" className="h-8 w-8" />
            <Icon icon="material-symbols:home" className="h-8 w-8" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-4 bg-[#E7EAF0] p-5">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="h-10 w-10 rounded-full border-2 border-primary object-cover"
            />
            <input
              type="text"
              className="flex-1 rounded-md border-[1px] border-gray-400 bg-white px-3 py-3 text-sm"
              placeholder="Write a Post"
            />

            <Icon icon="material-symbols:home" className="h-6 w-6" />
          </div>
          <div className="flex w-full items-center gap-4 bg-[#FF007A] px-12 py-4 text-white ">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="h-28 w-28 rounded-full border-4 border-white object-cover"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-bold">
                Mardi Higgins Has been promoted to VIP
              </h1>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur id, consequatur non rerum impedit sit culpa eveniet
              </div>
            </div>
          </div>
          {[...Array(3)].map((post, idx) => {
            return <CommunityPost key={idx} highlighted={idx === 2} />;
          })}
        </div>
        <div className="flex w-1/3 flex-col gap-6 pr-20">
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-xl font-bold">Mentor</h1>
            <div className="flex w-full items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="h-28 w-28 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold">Cody Getchell</h1>
                <div className="font-thin">MARKETING . SALES</div>
                <button className="font-semibol h-fit w-fit rounded-lg bg-primary px-3 py-2 text-sm text-white">
                  Ask your Mentor
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-between border-t-[1px] border-gray-500 px-2 py-5">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-extrabold">3.5k</h1>
              <h2>Students</h2>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-extrabold">65</h1>
              <h2>Online</h2>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-extrabold">5</h1>
              <h2>Rules</h2>
            </div>
          </div>
          <div className="flex items-center -space-x-4">
            <Avatar
              variant="circular"
              placeholder=""
              alt="user 1"
              className="hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Avatar
              variant="circular"
              placeholder=""
              alt="user 1"
              className="hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Avatar
              variant="circular"
              placeholder=""
              alt="user 1"
              className="hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Avatar
              variant="circular"
              placeholder=""
              alt="user 1"
              className="hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Avatar
              variant="circular"
              placeholder=""
              alt="user 1"
              className="hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Avatar
              variant="circular"
              placeholder=""
              alt="user 1"
              className="hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Avatar
              variant="circular"
              placeholder=""
              alt="user 1"
              className="hover:z-10 focus:z-10"
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </div>
          <CourseLeaderboard dashboard={true} />
          <div className="flex h-fit w-full flex-col gap-4 rounded-lg bg-white p-5 shadow-md">
            <h1 className="text-lg font-bold">My Progress</h1>
            <div>
              {`You've`} <span className="font-mediun">ONLY</span> got 13
              lessons to go before you get your certificate and{" "}
              <span className="font-medium">UNLOCK</span> the VIP referral
              community access
            </div>
            <div>
              <Progress
                value={30}
                placeholder=""
                className="h-8 border-[1px] border-gray-400 bg-white p-1"
                barProps={{ className: "bg-[#04D800]" }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
          </div>
          <div className="flex h-fit w-full flex-col gap-4 rounded-lg bg-white p-5 shadow-md">
            <h1 className="text-lg font-bold">Get your NEXT Badge!</h1>
            <div>
              Unlock access to the VIP chat room by getting your next badge,
              also you can get 30 of one-to-one with Dariusz himself!
            </div>
            <div className="flex w-full flex-col items-center gap-2">
              <h1 className="text-lg font-semibold text-primary">
                Assistance Badge
              </h1>
              <button className="h-fit w-fit rounded-lg bg-primary px-4 py-2 font-semibold text-white">
                Find Out More
              </button>
            </div>
          </div>
          <div className="flex h-fit w-full flex-col items-center gap-4 rounded-lg bg-white p-5 shadow-md">
            <h1 className="w-full text-lg font-bold">Referrals</h1>
            <div>
              Tell your friends and family about this course and how much you
              love it, and you’ll be getting up to $150 for each of your
              referrals that buy the course!
            </div>
            <button className="h-fit w-fit rounded-lg bg-primary px-4 py-2 font-semibold text-white">
              Tell your Friends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeed;
