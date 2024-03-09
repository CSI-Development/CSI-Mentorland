"use client";
import React from "react";

import smallLogo from "../../../../public/mentorlandSmallLogo.png";
import profile from "../../../../public/selectSubject/subjectMentor.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

function Navbar() {
  return (
    <nav className="flex bg-[#fffefe] fixed w-full p-4 justify-between border-b-2 border-[#2668d8]">
      <div className="flex">
        <Image src={smallLogo} alt="Mentorland" />
        <p className="text-black my-auto text-xl font-bold px-5 border-r-2 border-gray-300 ">
          General Dashboard
        </p>
      </div>
      <div className="flex text-[#2668d8] text-3xl gap-4 my-auto">
        <Icon icon="fluent:building-shop-20-regular" />
        <Icon icon="ph:chats-duotone" />
        <Icon icon="material-symbols:translate" />
        <Icon icon="pepicons-pencil:bell" />
        <Icon icon="uit:wallet" />
        <Image src={profile} alt="Profile" className="h-9 w-9" />
      </div>
    </nav>
  );
}

export default Navbar;
