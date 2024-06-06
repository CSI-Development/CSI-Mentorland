/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";
import { GoPaperAirplane } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import Link from "next/link";
import { getCookie } from "cookies-next";

function SupportChat({ data }: any) {

  const role = getCookie("role") ?? "";

  return (
    <div className="absolute right-5 top-20 z-50 h-[615px] w-[24%] rounded-lg bg-white shadow-lg" >
      <div className="w-full rounded-t-lg bg-primary p-3 text-white">
        <h1 className="font-bold">Support Chat</h1>
      </div>
      <div className="mt-5 w-full px-3">
        <div className="flex w-full justify-center gap-4 border-b border-[#B9BABA]">
          <label
            htmlFor=""
            className="cursor-pointer border-b-4 border-primary font-semibold text-primary"
          >
            Chat to a Person
          </label>
          <Link href={`/${role}/supportTicket`} className="cursor-pointer text-[#B9BABA]">
            Create a ticket
          </Link>
          <Link href={`/${role}/FAQ`} className="cursor-pointer text-[#B9BABA]">
            See our FAQs
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-[420px] overflow-y-scroll p-6 text-xs text-black gap-4">
        <div className="w-full h-fit flex items-end gap-3">
          <div className="flex w-full flex-col gap-3">
            <p className="w-full rounded-lg border border-[#b9baba] p-2">
              Bacon ipsum dolor amet short ribs brisket venison rump drumstick
              pig sausage prosciutto
            </p>
            <p className="w-full rounded-lg border border-[#b9baba] p-2">
              Kevin capicola sausage, buffalo
            </p>
            <p className="w-full rounded-lg border border-[#b9baba] p-2">
              Doner spare ribs andouille bacon sausage. Ground round jerky
              brisket pastrami shank.
            </p>
          </div>
          <Image src={data?.studentAvatar} alt="" height={30} width={30} className="w-[30px] h-[30px] rounded-full object-cover " />
        </div>
        <div className="w-full h-fit flex items-end gap-3">
          <Image src={data?.studentAvatar} alt="" height={30} width={30} className="w-[30px] h-[30px] rounded-full object-cover " />
          <div className="flex w-full flex-col gap-3">
            <p className="w-full rounded-lg bg-[#D4DDDA] p-2">
              Bacon ipsum dolor amet short ribs brisket venison rump drumstick
              pig sausage prosciutto
            </p>
            <p className="w-full rounded-lg bg-[#D4DDDA] p-2">
              Kevin capicola sausage, buffalo
            </p>
            <p className="w-full rounded-lg bg-[#D4DDDA] p-2">
              Doner spare ribs andouille bacon sausage. Ground round jerky
              brisket pastrami shank.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5">
        <CiCamera className="cursor-pointer text-5xl text-[#B9BABA]" />
        <div className="flex h-[45px] w-full items-center rounded-lg border-2 border-[#B9BABA] px-3">
          <input
            type="text"
            placeholder="Write your response"
            className="w-full border-none text-black outline-none"
          />
          <GoPaperAirplane className="cursor-pointer text-4xl text-[#B9BABA]" />
        </div>
      </div>
    </div>
  );
}

export default SupportChat;
