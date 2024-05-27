/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { CommunityRules } from "@/components/mentor/dashboardMentorComponents/communities/Post.Component";
import TicketHours from "@/components/student/supportTicket/supportTicket.Component";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const SupportTicket = () => {
  return (
    <DashboardLayout showSidebar={false}>
      <div className="mt-[78px] h-auto w-full bg-[#f7f9fb] pt-[50px] text-black">
        <div className=" mx-auto flex  h-auto w-[80%] flex-col gap-8 p-5">
          <h1 className="text-2xl font-bold">Support Ticket</h1>
          <div className=" flex w-full justify-between p-3">
            {/*  form section */}
            <div className="  bg-white">
              <div className="h-[522px] w-[836px] p-[30px]">
                <div className=" h-[462px] w-[776px]">
                  <div className=" w-[776px] bg-[#f7f9fb] p-5">
                    <form
                    //   onSubmit={handleSubmit(onSubmit)}
                      className=" flex flex-col gap-10"
                    >
                      <input
                        type="text"
                        placeholder="Subject"
                        //   {...register("title")}
                        className="h-[56px] w-full rounded-md border border-gray-300 px-3 py-2 placeholder-[grey] outline-none"
                      />
                      <textarea
                        placeholder="Describe the issue"
                        //   {...register("title")}
                        className="h-[200px] w-full rounded-md border border-gray-300 px-3 py-2 placeholder-[grey] outline-none"
                      />
                      <div className=" mt-5 flex w-full justify-end">
                        <button
                          type="submit"
                          className="rounded-md border border-gray-300 bg-[#2769D9] px-3 py-2 font-bold text-white focus:outline-none "
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Community Rules */}
            <TicketHours />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportTicket;
