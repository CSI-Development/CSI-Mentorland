/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar.Component";
import Navbar from "../Navbar.Component";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useDetailsApi } from "@/app/api/userDetails/userDetails.api";
import AddClassmates from "@/components/modals/addClassmates";
import AddMentors from "@/components/modals/addMentors";
import { getFavMentorsApi } from "@/app/api/searchMentor/getfavMentors";
import { removeSelectedMentorsApi } from "@/app/api/searchMentor/removeFavMentors";
import ViewSupportTicket from "@/components/modals/viewSupportTicket";
import { getSupportTicketApi } from "@/app/api/supportTicket/getSupportTicket";
import EventScheduler from "@/components/scheduler/eventScheduler.Component";
import { getScheduleApi } from "@/app/api/schedule/getSchedule.api";

const CourseOverview = ({ data }: any) => {
  return (
    <div className="flex w-full items-center gap-2">
      {data?.communities?.map((val: any) => (
        <div className="flex w-full items-center gap-2" key={val._id}>
          <div className="flex h-full w-2/3 items-center gap-2">
            <img
              src={val?.mentors?.[0]?.mentorAvatar}
              alt=""
              className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <h1 className="text-xs font-semibold">{val?.communityName}</h1>
          </div>
          <div className="flex items-center gap-1 border-l-[1px] border-gray-400 p-2">
            <div className="h-6 w-6 rounded-full border-4 border-green-500 bg-white"></div>
            <div>
              <h1 className="text-xs font-semibold text-gray-600">PROGRESS</h1>
              <h1 className="font-bold">21%</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const UserPofileCard = ({ data, post }: any) => {
  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden rounded-lg bg-white  shadow-md">
      <img
        src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute h-20 w-full object-cover"
      />
      <img
        src={data?.studentAvatar}
        alt=""
        className="z-10 mt-7 h-32 w-32 rounded-full border-4 border-[#EAF2EF] bg-white object-cover"
      />
      <h1 className="text-xl font-bold">
        {data?.firstName} {data?.lastName}
      </h1>
      {post ? (
        <div className="flex flex-col gap-10 p-10">
          <h2 className="text-[22px] font-medium">Welcome Back!</h2>
          <p className="text-center text-[18px] font-light">
            This is your Main Page, you can get updated on all your favorite
            communities.
          </p>
        </div>
      ) : (
        <div className="mt-3 flex w-full flex-col gap-6 p-3">
          <h1 className="text-sm font-semibold">Current Communities</h1>
          <div className="mb-5 flex w-full flex-col gap-4">
            <Link href="/student/dashboard/course">
              <CourseOverview data={data} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const FavoriteClassmatesCard = () => {
  const [selectedClassmates, setSelectedClassmates] = useState<number[]>([]);

  const classmates = [
    {
      id: 1,
      name: "Brandon Washington",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Ashley Smith",
      img: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Michael Johnson",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Sarah Williams",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "David Brown",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Laura Green",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const handleClassmateSelection = (id: number) => {
    setSelectedClassmates((prev) =>
      prev.includes(id)
        ? prev.filter((classmateId) => classmateId !== id)
        : [...prev, id],
    );
  };

  const [isOpenCommunityDialog, setIsOpenCommunityDialog] =
    useState<boolean>(false);

  return (
    <div className="flex w-full flex-col gap-5 rounded-lg bg-white p-3 shadow-md">
      <h1 className="text-md font-bold">Favorite Classmates</h1>
      <div className="grid w-full grid-cols-3 gap-2 gap-y-5">
        {classmates.map((classmate) => (
          <div
            key={classmate.id}
            className="flex cursor-pointer items-center gap-3"
            onClick={() => handleClassmateSelection(classmate.id)}
          >
            <div className="relative">
              {selectedClassmates.includes(classmate.id) && (
                <div className="absolute h-12 w-12 rounded-full bg-red-400/60">
                  <Icon
                    icon="mdi:close-thick"
                    className="absolute inset-0 m-auto h-8 w-8 text-white"
                  />
                </div>
              )}
              <img
                src={classmate.img}
                alt={classmate.name}
                className={`h-12 w-12 rounded-full object-cover`}
              />
            </div>
            <h2 className="text-sm font-semibold">{classmate.name}</h2>
          </div>
        ))}
      </div>
      <div className="my-5 flex w-full items-center justify-center gap-3">
        <button className="flex w-1/6 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent p-1 px-2 font-semibold text-primary">
          <Icon icon="bxs:user-minus" color="#2769D9" className="h-6 w-6" />
          Remove
        </button>
        <button
          onClick={() => setIsOpenCommunityDialog(true)}
          className="flex w-1/6 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary p-1 px-2 font-semibold text-white"
        >
          <Icon icon="bxs:user-plus" className="h-6 w-6" />
          Add
        </button>
      </div>
      <AddClassmates
        OpenDialog={isOpenCommunityDialog}
        setOpenDialog={setIsOpenCommunityDialog}
      />
    </div>
  );
};

function Dashbaord() {
  const [selectedMentors, setSelectedMentors] = useState<number[]>([]);
  const [selectedTicketData, setSelectedTicketData] = useState<any>(null);
  const { data: scheduleData } = useQuery({
    queryKey: ["getSchedule"],
    queryFn: () => getScheduleApi(),
  });

  // const classmates = [
  //   {
  //     id: 1,
  //     name: "Brandon Washington",
  //     img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 2,
  //     name: "Ashley Smith",
  //     img: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 3,
  //     name: "Michael Johnson",
  //     img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 4,
  //     name: "Sarah Williams",
  //     img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 5,
  //     name: "David Brown",
  //     img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     id: 6,
  //     name: "Laura Green",
  //     img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   // Add more classmates as needed
  // ];

  const handleClassmateSelection = (id: number) => {
    setSelectedMentors((prev) =>
      prev.includes(id)
        ? prev.filter((classmateId) => classmateId !== id)
        : [...prev, id],
    );
  };

  const [isOpenCommunityDialog, setIsOpenCommunityDialog] =
    useState<boolean>(false);

  const [isOpenTicketDialog, setIsOpenTicketDialog] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["userdetails"],
    queryFn: () => useDetailsApi(),
  });

  const { data: supportTicket } = useQuery({
    queryKey: ["supportTicket"],
    queryFn: () => getSupportTicketApi(),
  });

  console.log(supportTicket, "support tickte data");

  const { data: favMentors, refetch } = useQuery({
    queryKey: ["favMentors"],
    queryFn: () => getFavMentorsApi(),
  });

  const { mutate: removeSelectedMentorsData } = useMutation({
    mutationFn: removeSelectedMentorsApi,
    onSuccess: async (e: any) => {
      console.log("success", e);
      await refetch();
      setSelectedMentors([]);
    },
  });

  const handleRemoveMentors = () => {
    removeSelectedMentorsData({ mentors: selectedMentors });
  };

  const truncateAddress = (address = "") => {
    return address?.slice(0, 2) + "..." + address?.slice(address?.length - 4);
  };

  // const handleTicketDialog = async (ticketId: any) =>{
  //   const ticketDetails = await getSupportTicketApi();
  //   setSelectedTicketData(ticketDetails);
  //   setIsOpenTicketDialog(true);
  // }

  console.log(selectedTicketData, "selected ticked data");
  return (
    <div className=" flex h-full w-full flex-col p-5 text-black">
      <h1 className="text-xl font-bold">General Dashboard</h1>
      <div className="mt-4 flex w-full flex-1 gap-5 ">
        <div className="flex w-2/3 flex-col gap-3 ">
          <div className="w-full h-[475px] overflow-scroll rounded-lg bg-white p-3 shadow-md">
            <h4 className="text-2xl font-bold text-black">My Schedule</h4>
            <EventScheduler scheduleData={scheduleData} student="student" height={300}/>
          </div>
          <FavoriteClassmatesCard />
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
          </div>
          <ViewSupportTicket
            OpenDialog={isOpenTicketDialog}
            setOpenDialog={setIsOpenTicketDialog}
            selectedTicketData={selectedTicketData}
            setSelectedTicketData={setSelectedTicketData}
            refetch={refetch}
          />
        </div>
        <div className="flex w-1/3 flex-col gap-3">
          <UserPofileCard data={data} />
          <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-3 shadow-md">
            <h1 className="text-md font-bold">Favorite Mentors</h1>
            <div className="grid h-44 w-full grid-cols-4 gap-3 overflow-y-scroll">
              {favMentors?.length > 0 &&
                favMentors?.map((classmate: any) => (
                  <div
                    key={classmate?.mentors[0]?._id}
                    className="flex cursor-pointer flex-col items-center gap-1 text-center"
                    onClick={() =>
                      handleClassmateSelection(classmate?.mentors[0]?._id)
                    }
                  >
                    <div className="relative">
                      {selectedMentors.includes(classmate?.mentors[0]?._id) && (
                        <div className="absolute h-16 w-16 rounded-lg bg-red-400/60">
                          <Icon
                            icon="mdi:close-thick"
                            className="absolute inset-0 m-auto h-8 w-8 text-white"
                          />
                        </div>
                      )}
                      <img
                        src={classmate?.mentors[0]?.mentorAvatar}
                        alt={classmate?.mentors[0]?.mentorAvatar}
                        className={`z-10 h-16 w-16 rounded-lg object-cover`}
                      />
                    </div>
                    <h1 className="text-xs text-[#1A458F]">
                      {classmate?.mentors[0]?.firstName}{" "}
                      {classmate?.mentors[0]?.lastName}
                    </h1>
                  </div>
                ))}
            </div>
            <div className="my-5 mt-3 flex w-full items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRemoveMentors}
                className="flex w-2/6 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent p-1 px-2 font-semibold text-primary"
              >
                <Icon
                  icon="bxs:user-minus"
                  color="#2769D9"
                  className="h-6 w-6"
                />
                Remove
              </button>
              <button
                onClick={() => setIsOpenCommunityDialog(true)}
                className="flex w-2/6 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary p-1 px-2 font-semibold text-white"
              >
                <Icon icon="bxs:user-plus" className="h-6 w-6" />
                Add
              </button>
            </div>
          </div>
          <AddMentors
            OpenDialog={isOpenCommunityDialog}
            setOpenDialog={setIsOpenCommunityDialog}
            refetch={refetch}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashbaord;
