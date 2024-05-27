"use client";
import Navbar from "@/components/student/dashboardStudentComponents/Navbar.Component";
import React from "react";
import { UserPofileCard } from "@/components/student/dashboardStudentComponents/dashboard/Dashbaord.Component";
import { useQuery } from "@tanstack/react-query";
import { useDetailsApi } from "@/app/api/userDetails/userDetails.api";
import {
  CommentSection,
  LikedSection,
  SingleFeed,
} from "@/components/mentor/dashboardMentorComponents/communities/Community.Component";
import Image from "next/image";
import { communityGetApi } from "@/app/api/communityPost/getCommunityPost.api";
import { postsGetApi } from "@/app/api/posts/posts.api";
import CommunityCard from "@/components/student/dashboardStudentComponents/communities/CommunityCard.Component";
import { Line } from "rc-progress";

const Posts = () => {
  const { data: userDetails } = useQuery({
    queryKey: ["userdetails"],
    queryFn: () => useDetailsApi(),
  });
  const { data: allFeeds, refetch } = useQuery({
    queryKey: ["userpost"],
    queryFn: () => postsGetApi(),
  });

  const communityCard = [
    {
      courseImg: "/feeds-svg/img2.png",
      courseName: "Courses Make Millions Initial",
      progress: "",
      classesLeft: "15 Classes left",
    },
  ];
  return (
    <div className="flex h-screen flex-col gap-10 bg-[#fffefe]">
      <Navbar />
      <div className="grid grid-cols-6 gap-10 px-10 pt-32 text-black">
        <div className="col-span-4 flex flex-col gap-12">
          {allFeeds?.map((val: any, i: number) => (
            <div key={i}>
              <div className="flex w-full flex-col gap-[7px] rounded-md border bg-white p-[25px]">
                {/* head */}
                <div className="flex items-center justify-between">
                  <div className="flex w-[45%] items-center gap-5">
                    <Image
                      src={val.user?.avatar}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div>
                      <h1 className="text-xl">
                        {val.user?.firstName + " " + val.user?.lastName}
                      </h1>
                      <p className="text-xl">PSYCHOLOGIST • COACH</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold">{val.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: val.postText,
                    }}
                  ></div>
                  <div className="relative flex h-[500px] w-[600px] items-center justify-center">
                    <Image
                      src={val.multimedia}
                      alt="rectangle"
                      //   width={600}
                      //   height={200}
                      fill
                    />
                  </div>
                  <LikedSection refetch={refetch} data={val} />
                </div>
              </div>
              <CommentSection refetch={refetch} data={val} />
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <UserPofileCard data={userDetails} post={"post"} />
          <div className="mt-8 flex flex-col  gap-6 rounded-xl bg-white shadow-md p-5">
            <h2 className="text-xl font-bold">My Communities</h2>
            <div className="flex justify-between w-full gap-8">
              <div className="h-[100px] w-[100px]">
                <Image
                  src="/feeds-svg/img2.png"
                  alt="Mentor"
                  className="w-40"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-base font-medium">
                  Courses Make Millions Initial
                </h1>
                <div className="flex h-fit w-full justify-between gap-4">
                  <div className="w-full ">
                    <p className="text-lg font-bold">Progress</p>
                    <div className="h-3 w-full">
                      <Line
                        percent={100}
                        strokeWidth={10}
                        trailWidth={20}
                        className="h-full rounded-xl border p-[1px]"
                        strokeColor="#04D800"
                        trailColor="#ffffff"
                      />
                    </div>

                    <p className="text-sm text-[#5D6475]">10 Classes left</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full gap-8">
              <div className="h-[100px] w-[100px]">
                <Image
                  src="/feeds-svg/img2.png"
                  alt="Mentor"
                  className="w-40"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-base font-medium">
                  Courses Make Millions Initial
                </h1>
                <div className="flex h-fit w-full justify-between gap-4">
                  <div className="w-full ">
                    <p className="text-lg font-bold">Progress</p>
                    <div className="h-3 w-full">
                      <Line
                        percent={100}
                        strokeWidth={10}
                        trailWidth={20}
                        className="h-full rounded-xl border p-[1px]"
                        strokeColor="#04D800"
                        trailColor="#ffffff"
                      />
                    </div>

                    <p className="text-sm text-[#5D6475]">10 Classes left</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="mt-32 flex h-[80px] w-full items-center justify-center bg-[#0E2245] text-white">
          {/* <h1 className="text-3xl font-semibold">
        MENTOR<span className="font-light">LAND</span>
      </h1> */}
          <Image alt="" src="/svg/Vector.svg" width={230} height={37} />
        </div>
      </footer>
    </div>
  );
};

export default Posts;
