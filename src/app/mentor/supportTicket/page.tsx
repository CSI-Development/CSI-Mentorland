/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { supportTicketApi } from "@/app/api/supportTicket/addSupportTicket";
import TicketHours from "@/components/mentor/supportTicket/supportTicket.Component";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import {
  ISupportTicket,
  SupportTicketData,
} from "@/schema/supportTicket/supportTicket.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SupportTicket = () => {
  const router = useRouter();

  const methods = useForm<ISupportTicket>({
    defaultValues: {
      subject: "",
      description: "",
      source: "ticket",
      priority: "High",
    },
    resolver: zodResolver(SupportTicketData),
  });

  const { mutate: supportTicket } = useMutation({
    mutationFn: supportTicketApi,
    onSuccess: (e) => {
      toast.success("Ticket send Successfully");
      router.push("/student/dashboard");
      console.log(e);
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      console.log(e);
      toast.error(e?.message)
    },
  });

  const onSubmit: SubmitHandler<ISupportTicket> = async (
    data: ISupportTicket,
  ) => {
    console.log(data, "form data");
    const subject = methods.getValues("subject");
    const description = methods.getValues("description");

    if (!subject) {
      toast.error("Enter the Subject");
      return;
    }
    if (!description) {
      toast.error("Enter the description");
      return;
    }
    supportTicket(data);
  };

  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-auto w-full bg-[#f7f9fb] px-24 py-20 text-black">
        <div className=" mx-auto flex  h-auto w-full flex-col gap-8 p-5">
          <h1 className="text-2xl font-bold">Support Ticket</h1>
          <div className=" flex w-full justify-between p-3">
            {/*  form section */}
            <div className="w-[60%] bg-white">
              <div className="w-full p-[30px]">
                <div className="w-full">
                  <div className=" w-full bg-[#f7f9fb] p-5">
                    <FormProvider {...methods}>
                      <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className=" flex flex-col gap-10"
                      >
                        <input
                          type="text"
                          placeholder="Subject"
                          {...methods.register("subject")}
                          className="h-[56px] w-full rounded-md border border-gray-300 px-3 py-2 placeholder-[grey] outline-none"
                        />
                        <textarea
                          placeholder="Describe the issue"
                          {...methods.register("description")}
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
                    </FormProvider>
                  </div>
                </div>
              </div>
            </div>
            {/* Community Rules */}
            <TicketHours />
          </div>
        </div>
      </div>
    </MentorDashboardLayout>
  );
};

export default SupportTicket;
