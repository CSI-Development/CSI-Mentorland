"use client";
import React from "react";
import Sidebar from "../Sidebar.Component";
import Navbar from "../Navbar.Component";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const CourseOverview = () => {
  return (
    <div className="w-full flex gap-2 items-center">
      <div className="flex gap-2 items-center h-full w-2/3">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="w-16 h-16 z-10 rounded-full object-cover"
        />
        <h1 className="text-xs font-semibold">Courses Make Millions Course</h1>
      </div>
      <div className="flex border-l-[1px] gap-1 border-gray-400 p-2 items-center">
        <div className="w-6 h-6 bg-white border-4 border-green-500 rounded-full"></div>
        <div>
          <h1 className="text-xs font-semibold text-gray-600">PROGRESS</h1>
          <h1 className="font-bold">21%</h1>
        </div>
      </div>
    </div>
  );
};

const UserPofileCard = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md flex relative flex-col items-center  overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-20 object-cover absolute"
      />
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="w-32 h-32 z-10 mt-7 border-4 border-[#EAF2EF] rounded-full object-cover"
      />
      <h1 className="text-xl font-bold">Engelbert Bryughternexter</h1>
      <div className="w-full flex flex-col p-3 gap-6 mt-3">
        <h1 className="text-sm font-semibold">Current Communities</h1>
        <div className="w-full flex flex-col gap-4 mb-5">
          {[...Array(2)].map((i) => (
            <Link key={i} href="/student/dashboard/course">
              <CourseOverview />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const FavoriteClassmatesCard = () => {
  return (
    <div className="w-full rounded-lg bg-white shadow-md p-3 gap-5 flex flex-col">
      <h1 className="text-md font-bold">Favorite Classmates</h1>
      <div className="w-full grid grid-cols-3 gap-2 gap-y-5">
        {[...Array(9)].map((item, index) => (
          <div key={index} className="flex items-center gap-3 ">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="text-sm font-semibold">Brnadon Washington</h2>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center items-center gap-3 my-5 ">
        <button className="w-1/6 bg-transparent text-primary p-1 justify-center items-center font-semibold px-2 border-2 flex gap-2 border-primary rounded-lg">
          <Icon icon="bxs:user-minus" color="#2769D9" className="w-6 h-6" />
          Remove
        </button>
        <button className="w-1/6 bg-primary text-white p-1 px-2 border-2 font-semibold flex justify-center items-center gap-2 border-primary rounded-lg">
          <Icon icon="bxs:user-plus" className="w-6 h-6" />
          Add
        </button>
      </div>
    </div>
  );
};

function Dashbaord() {
  return (
    <div className=" h-full w-full flex flex-col text-black p-5">
      <h1 className="font-bold text-xl">General Dashboard</h1>
      <div className="w-full gap-5 flex-1 flex mt-4 ">
        <div className="w-2/3 flex gap-3 flex-col ">
          <div className="w-full rounded-lg shadow-md p-3 h-52 bg-white">
            schedular
          </div>
          <FavoriteClassmatesCard />
          <div className="w-full rounded-lg shadow-md p-3 bg-white">
            <h1 className="text-md font-bold">Support Tickets</h1>
            <div className="flex w-full justify-center items-center gap-3 my-5 mt-32">
              <button className="w-1/6 bg-transparent text-primary p-1 justify-center items-center font-semibold px-2 border-2 flex gap-2 border-primary rounded-lg">
                <Icon
                  icon="bxs:user-minus"
                  color="#2769D9"
                  className="w-6 h-6"
                />
                Remove
              </button>
              <button className="w-1/6 bg-primary text-white p-1 px-2 border-2 font-semibold flex justify-center items-center gap-2 border-primary rounded-lg">
                <Icon icon="bxs:user-plus" className="w-6 h-6" />
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-3">
          <UserPofileCard />
          <div className="w-full shadow-md p-3 flex flex-col gap-3 bg-white rounded-lg">
            <h1 className="text-md font-bold">Favorite Mentors</h1>
            <div className="w-full grid grid-cols-4 gap-3 ">
              {[...Array(8)].map((i) => (
                <div
                  key={i}
                  className="flex flex-col text-center items-center gap-1"
                >
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    className="w-16 h-16 z-10 rounded-lg object-cover"
                  />
                  <h1 className="text-xs text-[#1A458F] ">Elkoya Micoclin</h1>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center items-center gap-3 my-5 mt-3">
              <button className="w-2/6 bg-transparent text-primary p-1 justify-center items-center font-semibold px-2 border-2 flex gap-2 border-primary rounded-lg">
                <Icon
                  icon="bxs:user-minus"
                  color="#2769D9"
                  className="w-6 h-6"
                />
                Remove
              </button>
              <button className="w-2/6 bg-primary text-white p-1 px-2 border-2 font-semibold flex justify-center items-center gap-2 border-primary rounded-lg">
                <Icon icon="bxs:user-plus" className="w-6 h-6" />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbaord;
