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
import { IoCallOutline } from "react-icons/io5";

function MessageChat({ data }: any) {
  return (
    <div className="absolute right-5 top-20 z-50 flex h-[500px] w-[650px] rounded-lg bg-white shadow-lg">
      <div className="w-[300px]">
        <div className="flex flex-col gap-4 bg-[#EAF2EF] p-4">
          <div className="flex items-center gap-2">
            <Image
              src={data?.studentAvatar}
              alt=""
              height={40}
              width={40}
              className="h-[40px] w-[40px] rounded-full object-cover "
            />
            <div>
              <h1 className="text-xs font-semibold text-black">Pertungyr</h1>
              <p className="text-xs text-[#5D6475]">
                Bacon ipsum dolor amet ...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={data?.studentAvatar}
              alt=""
              height={40}
              width={40}
              className="h-[40px] w-[40px] rounded-full object-cover "
            />
            <div>
              <h1 className="text-xs font-semibold text-black">Pertungyr</h1>
              <p className="text-xs text-[#5D6475]">
                Bacon ipsum dolor amet ...
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 flex w-full justify-center">
          <button className="flex items-center gap-3 rounded-lg bg-primary px-5 py-2 font-bold text-white">
            Group Call <IoCallOutline className="text-3xl font-bold" />{" "}
          </button>
        </div>
        <div className="h-52">
        
        </div>
        <div className="w-full p-5">
          <div className="flex h-[45px] w-full items-center rounded-lg border-2 border-[#B9BABA] px-3">
            <input
              type="text"
              placeholder="Search by Name"
              className="w-full border-none text-black outline-none"
            />
          </div>
        </div>
      </div>
      <div className="w-[360px]">
        <div className="flex h-[420px] flex-col gap-4 overflow-y-scroll p-6 text-xs text-black">
          <div className="flex h-fit w-full items-end gap-3">
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
            <Image
              src={data?.studentAvatar}
              alt=""
              height={30}
              width={30}
              className="h-[30px] w-[30px] rounded-full object-cover "
            />
          </div>
          <div className="flex h-fit w-full items-end gap-3">
            <Image
              src={data?.studentAvatar}
              alt=""
              height={30}
              width={30}
              className="h-[30px] w-[30px] rounded-full object-cover "
            />
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
    </div>
  );
}

export default MessageChat;
