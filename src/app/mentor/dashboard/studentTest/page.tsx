"use client";
import StudentGrading from "@/components/modals/studentGrading";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import Link from "next/link";
import React, { useState } from "react";

function StudentTest() {
    const [openTestGrading, setOpenTestGrading] = useState(false)
  return (
    <MentorDashboardLayout showSidebar={true}>
      <div className="h-full w-full py-20 text-black">
        <div className="w-full">
          <div className="">
            <Link href="/mentor/dashboard/studentProfile" className="cursor-pointer font-bold text-[#2769D9]">
              {"<< Back to Student Dashboard"}
            </Link>
            <div className="flex w-full justify-end">
              <h1 className="font-bold text-[##5D6475]">Date: 03/15/2023</h1>
            </div>
          </div>
          <div className="w-[80%] grid grid-cols-1 gap-10 pb-20 pl-20">
            <h1 className="text-2xl font-bold">
              Thoughts on psychological strategies
            </h1>
            <div className="grid grid-cols-1 gap-3 border-b border-[#B9BABA] pb-5 w-full">
              <h4 className="text-xs text-[#5D6475]">QUESTION 1</h4>
              <h1 className="text-lg font-semibold">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear?
              </h1>
              <p>
                I didnt even know we were calling him Big Bear. We never had
                the chance to. Maybe it was the eleven months he spent in the
                womb. The doctor said there were claw marks on the walls of her
                uterus. Yeah, well, have you seen the new Mustang?
              </p>
              <div className="flex w-full justify-between gap-10">
                <div className="w-full">
                  <p className="text-[#1A458F]">Comment on Answer</p>
                  <textarea
                    name=""
                    className="h-[108px] w-[700px] rounded border border-[#B9BABA] p-3"
                    placeholder="Explain your reasoning for the grade, if necessary. Optional"
                    id=""
                    // cols="30"
                    // rows="10"
                  ></textarea>
                </div>
                <div className="w-full">
                  <p className="text-[#1A458F]">Grading</p>
                  <input
                    type="text"
                    className="h-[56px] w-[92px] rounded border border-[#B9BABA] p-4"
                    placeholder="1 to 10"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 border-b border-[#B9BABA] pb-5 w-full">
              <h4 className="text-xs text-[#5D6475]">QUESTION 2</h4>
              <h1 className="text-lg font-semibold">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear?
              </h1>
              <p>
                I didn&apos;t even know we were calling him Big Bear. We never had
                the chance to. Maybe it was the eleven months he spent in the
                womb. The doctor said there were claw marks on the walls of her
                uterus. Yeah, well, have you seen the new Mustang?
              </p>
              <div className="flex w-full justify-between gap-10">
                <div className="w-full">
                  <p className="text-[#1A458F]">Comment on Answer</p>
                  <textarea
                    name=""
                    className="h-[108px] w-[700px] rounded border border-[#B9BABA] p-3"
                    placeholder="Explain your reasoning for the grade, if necessary. Optional"
                    id=""
                    // cols="30"
                    // rows="10"
                  ></textarea>
                </div>
                <div className="w-full">
                  <p className="text-[#1A458F]">Grading</p>
                  <input
                    type="text"
                    className="h-[56px] w-[92px] rounded border border-[#B9BABA] p-4"
                    placeholder="1 to 10"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 border-b border-[#B9BABA] pb-5 w-full">
              <h4 className="text-xs text-[#5D6475]">QUESTION 3</h4>
              <h1 className="text-lg font-semibold">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear?
              </h1>
              <p>
                I didn&apos;t even know we were calling him Big Bear. We never had
                the chance to. Maybe it was the eleven months he spent in the
                womb. The doctor said there were claw marks on the walls of her
                uterus. Yeah, well, have you seen the new Mustang?
              </p>
              <div className="flex w-full justify-between gap-10">
                <div className="w-full">
                  <p className="text-[#1A458F]">Comment on Answer</p>
                  <textarea
                    name=""
                    className="h-[108px] w-[700px] rounded border border-[#B9BABA] p-3"
                    placeholder="Explain your reasoning for the grade, if necessary. Optional"
                    id=""
                    // cols="30"
                    // rows="10"
                  ></textarea>
                </div>
                <div className="w-full">
                  <p className="text-[#1A458F]">Grading</p>
                  <input
                    type="text"
                    className="h-[56px] w-[92px] rounded border border-[#B9BABA] p-4"
                    placeholder="1 to 10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center pb-5">
            <button type="button" onClick={()=>setOpenTestGrading(true)} className="ml-3 flex items-center rounded-md border border-[#2769D9] bg-[#2769D9] px-[10px] py-[5px] font-bold text-[white]">
              Done
            </button>
          </div>
        </div>
        <StudentGrading OpenDialog={openTestGrading} setOpenDialog={setOpenTestGrading} />
      </div>
    </MentorDashboardLayout>
  );
}

export default StudentTest;
