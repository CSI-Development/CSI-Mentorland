/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Clap from "@/components/svg/Clap";
import Flag from "@/components/svg/Flag";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function CommentCard({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border-b border-gray-200 bg-white p-6 py-4 shadow-lg w-[90%]">
      {isOpen && (
        <div className="w-full border-b-2 border-[#C1D7FE] pb-4">
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/svg/user.svg"
                alt=""
                height={40}
                width={340}
                className="h-[40px] w-[40px] rounded-full object-cover "
              />
              <div>
                <h1 className="font-bold">Frank Andrchtsnt</h1>
                <p className="text-[#5D6475]">Student</p>
              </div>
            </div>
            <p className="text-sm text-[#5d6475]">May 19 at 11:35 am</p>
          </div>
          <div className="px-10 py-4">
            <h1>
              How can you protect your investment against the rising inflation
              in the uncertain situation of the animal inst...How can you
              protect your investment against the rising inflation in the
              uncertain situation of the animal inst...How can you protect your
              investment against the rising inflation in the uncertain situation
              of the animal inst...How can you protect your investment against
              the rising inflation in the uncertain situation of the animal
              inst...
            </h1>
          </div>
          <div className=" flex w-full items-center justify-between px-10 py-4">
            <div className=" flex h-[36px] w-32 justify-between">
              <div className=" flex flex-col items-center gap-2">
                <Flag />
                <p className=" text-[12px] leading-[14.4px] ">Flag</p>
              </div>
              <div className=" flex flex-col items-center gap-2">
                <Image
                  src="/questions/pin.svg"
                  alt="user"
                  width={13}
                  height={18}
                />
                <p className=" text-[12px] leading-[14.4px] ">Pin</p>
              </div>
              <div className=" flex flex-col items-center gap-2">
                <Image
                  src="/questions/question.svg"
                  alt="user"
                  className=" aspect-auto"
                  width={18}
                  height={20}
                />
                <p className=" text-center text-[12px] leading-[14.4px]">
                  Question
                </p>
              </div>
            </div>
            <div className=" flex h-[36px] w-[120px] justify-between text-center">
              <div className=" flex flex-col items-center gap-2">
                <Image
                  src="/questions/quote.svg"
                  alt="user"
                  className=" aspect-auto"
                  width={20}
                  height={20}
                />
                <p className=" text-center text-[12px] leading-[14.4px]">
                  Quote
                </p>
              </div>
              <div className=" flex flex-col items-center gap-2">
                <Image
                  src="/questions/share.svg"
                  alt="user"
                  className=" aspect-auto"
                  width={20}
                  height={20}
                />
                <p className=" text-center text-[12px] leading-[14.4px]">
                  Reply
                </p>
              </div>
              <div className=" flex flex-col items-center gap-2">
                <Clap />
                <p className=" text-center text-[12px] leading-[14.4px]">
                  123
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-3">
            <Image
              src="/svg/user.svg"
              alt=""
              height={40}
              width={340}
              className="h-[40px] w-[40px] rounded-full object-cover "
            />
            <input
              type="text"
              placeholder="Frank Andrement"
              className="h-14 w-full rounded-lg border border-[#B9BABA] px-3 outline-none"
            />
          </div>
        </div>
      )}
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="tex-xs text-thin flex items-center text-primary">
          {isOpen ? "Close" : "Open"}{" "}
          <MdKeyboardArrowDown
            className={`h-6 w-6 transform font-bold text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
        <span className="tex-xs text-thin flex items-center text-primary">
          <p>125 - 135 Read next 10</p>
          <MdKeyboardArrowDown
            className={`h-6 w-6 transform font-bold text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>
    </div>
  );
}

export default CommentCard;
