"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { FunctionComponent } from "react";

interface Props {
  highlighted?: boolean;
}

const CommunityPost: FunctionComponent<Props> = ({ highlighted }) => {
  return (
    <div className="w-full flex flex-col">
      <div
        className={`w-full bg-white rounded-t-lg  shadow-md  p-5 flex flex-col gap-3 ${
          highlighted ? "border-[12px] border-[#C2D1E0]" : ""
        }`}
      >
        <div className="flex gap-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-md font-medium">Cody Getchell</h1>
            <div className="text-sm font-thin text-gray-700">
              PSYCHOLOGIST . COACH
            </div>
          </div>
          {highlighted && (
            <div className="flex-1 flex justify-end items-center">
              <div className="w-fit h-fit flex gap-1 items-center bg-[#5D6475] font-semibold text-white p-2 px-4 rounded-full text-xs">
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
          className="w-full h-64 object-cover"
        />
        <h5 className="text-xs text-gray-500">Posted 20m ago</h5>
        <div className="flex gap-4">
          <div className="flex gap-1 items-center text-gray-600">
            <Icon icon="ph:heart-light" />
            <h1>3</h1>
          </div>
          <div className="flex gap-1 items-center text-gray-600">
            <Icon icon="fluent:chat-multiple-32-regular" />
            <h1>3</h1>
          </div>
          <div className="flex gap-1 items-center text-gray-600">
            <Icon icon="ph:gift" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-5 bg-[#F3F5FA] rounded-b-lg">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="w-6 h-6 rounded-full object-cover"
        />
        <input
          type="text"
          className="flex-1 bg-white border-[1px] text-sm border-gray-400 py-3 px-3 rounded-md"
          placeholder="Reply to this comment"
        />
      </div>
    </div>
  );
};

export default CommunityPost;
