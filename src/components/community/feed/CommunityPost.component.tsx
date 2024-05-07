"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { type FunctionComponent } from "react";

interface Props {
  highlighted?: boolean;
}

const CommunityPost: FunctionComponent<Props> = ({ highlighted }) => {
  return (
    <div className="flex w-full flex-col">
      <div
        className={`flex w-full flex-col  gap-3  rounded-t-lg bg-white p-5 shadow-md ${
          highlighted ? "border-[12px] border-[#C2D1E0]" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-md font-medium">Cody Getchell</h1>
            <div className="text-sm font-thin text-gray-700">
              PSYCHOLOGIST . COACH
            </div>
          </div>
          {highlighted && (
            <div className="flex flex-1 items-center justify-end">
              <div className="flex h-fit w-fit items-center gap-1 rounded-full bg-[#5D6475] p-2 px-4 text-xs font-semibold text-white">
                <h1>Highlighted Post</h1>
                <Icon icon="solar:star-bold" />
              </div>
            </div>
          )}
        </div>
        <h1 className="text-xl font-bold">Welcome to : Courses Make Million</h1>
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea,
          architecto fuga impedit quisquam omnis praesentium voluptates modi
          magni, quibusdam fugit alias enim dicta commodi consequatur et quam.
          Laboriosam, accusantium.
        </div>
        <img
          src="https://images.unsplash.com/photo-1642425149556-b6f90e946859?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-64 w-full object-cover"
        />
        <h5 className="text-xs text-gray-500">Posted 20m ago</h5>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-gray-600">
            <Icon icon="ph:heart-light" />
            <h1>3</h1>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Icon icon="fluent:chat-multiple-32-regular" />
            <h1>3</h1>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Icon icon="ph:gift" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-b-lg bg-[#F3F5FA] p-5">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="h-6 w-6 rounded-full object-cover"
        />
        <input
          type="text"
          className="flex-1 rounded-md border-[1px] border-gray-400 bg-white px-3 py-3 text-sm"
          placeholder="Reply to this comment"
        />
      </div>
    </div>
  );
};

export default CommunityPost;
