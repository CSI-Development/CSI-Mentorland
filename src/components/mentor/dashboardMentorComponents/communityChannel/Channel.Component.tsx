/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CommentCard from "./commentCard";
import Speaker from "@/components/svg/Speaker";
import Hand from "@/components/svg/Hand";
import Settings from "@/components/svg/Settings";
import Comment from "@/components/svg/Comment";
import Clap from "@/components/svg/Clap";

function CommunityChannel({ id }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const faqData = [
    {
      question: "What is your return policy?",
      answer: "Our return policy is...",
    },
  ];

  return (
    <div className="w-full text-black">
      <div className="flex">
        <div className="flex h-fit w-[25%] gap-10 pt-10">
          <div className="flex w-fit h-fit flex-col gap-4 rounded-r-lg border p-7 shadow">
            <Image src="/svg/user.svg" alt="" height={50} width={50} />
            <Image src="/svg/user.svg" alt="" height={50} width={50} />
            <Image src="/svg/user.svg" alt="" height={50} width={50} />
          </div>
          <div className="flex w-full flex-col gap-2 font-semibold">
            <h1 className="flex items-center gap-3">
              <Hand />
              Welcome & Rules
            </h1>
            <h1 className="flex items-center gap-3">
              <Speaker /> Announcements
            </h1>
            <div className="w-full">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="flex items-center gap-3">
                  <Settings /> Resources
                </span>
                <MdKeyboardArrowDown
                  className={`h-6 w-6 transform font-bold text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <>
                  <p className="ml-4 mt-2 font-normal">
                    <span className="font-bold">#</span> A flower in my garden
                  </p>
                  <p className="ml-4 mt-2 font-normal">
                    <span className="font-bold">#</span> Rough pomfret
                  </p>
                </>
              )}
            </div>
            <div className="w-full">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="flex items-center gap-3">
                  <Comment /> Psychology
                </span>
                <MdKeyboardArrowDown
                  className={`h-6 w-6 transform font-bold text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {/* {isOpen && (
                <>
                  <p className="ml-4 mt-2 font-normal">
                    <span className="font-bold">#</span> A flower in my garden
                  </p>
                  <p className="ml-4 mt-2 font-normal">
                    <span className="font-bold">#</span> Rough pomfret
                  </p>
                </>
              )} */}
            </div>
            <div className="w-full">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="flex items-center gap-3">
                  <Comment /> Coaching
                </span>
                <MdKeyboardArrowDown
                  className={`h-6 w-6 transform font-bold text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {/* {isOpen && (
                <>
                  <p className="ml-4 mt-2 font-normal">
                    <span className="font-bold">#</span> A flower in my garden
                  </p>
                  <p className="ml-4 mt-2 font-normal">
                    <span className="font-bold">#</span> Rough pomfret
                  </p>
                </>
              )} */}
            </div>
          </div>
        </div>
        <div className="ml-24 mt-10 w-[65%] rounded border border-[#B9BABA]">
          <div className="w-full border-b border-[#B9BABA] bg-white px-8 py-3">
            <h1 className="text-xl font-bold">Psychology</h1>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-[70%] border-r border-[#B9BABA] ">
              <div className="p-6 w-full flex justify-start">
                {faqData.map((faq, index) => (
                  <CommentCard
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
              <div className="p-6 w-full flex justify-end">
                <div className="rounded-xl border-b border-gray-200 bg-white p-6 py-4 shadow-lg w-[80%]">
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
                      Aain situation of the animal inst...How can you protect
                      your investment against the rising inflation in the
                      uncertain situation of the animal inst...
                    </h1>
                  </div>
                  <div className="w-full">
                    <div className=" flex h-[36px] w-full justify-end text-center gap-5">
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
                </div>
              </div>
              <div className="flex w-full items-center gap-3 p-6">
                <input
                  type="text"
                  placeholder="Write your message here"
                  className="h-14 w-full rounded-lg border border-[#B9BABA] px-3 outline-none"
                />
                <button className="rounded-lg bg-primary px-4 py-3 font-bold text-white">
                  Comment
                </button>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="flex w-full flex-col items-center gap-10">
                <div className="h-[410px] w-full rounded-lg p-5">
                  <div className="w-full">
                    <h1 className="text-xl font-bold">
                      {"Who's is in this channel"}
                    </h1>
                  </div>
                  <div className="ml-5 mt-6 grid grid-cols-1 gap-3 text-base">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src="/svg/user.svg"
                          alt="user"
                          width={50}
                          height={50}
                          className="rounded-full bg-[#2769d9] p-[1px]"
                        />
                        <h1 className="ml-2 font-bold">
                          Engelbert Bryughternexter
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src="/svg/user.svg"
                          alt="user"
                          width={50}
                          height={50}
                          className="rounded-full bg-[#2769d9] p-[1px]"
                        />
                        <h1 className="ml-2 font-bold">Dunk Gryertyuson</h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src="/svg/user.svg"
                          alt="user"
                          width={50}
                          height={50}
                          className="rounded-full bg-[#2769d9] p-[1px]"
                        />
                        <h1 className="ml-2 font-bold">Entrand Fretyuingre</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityChannel;
