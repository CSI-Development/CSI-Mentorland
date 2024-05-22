/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useContext, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import { setSession } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { AppContext } from "@/providers/ContextProvider";
import {
  type ICreateCommunity,
  createCommunityData,
} from "@/schema/createCommunity/createCommunity.schema";
import { createCommunityApi } from "@/app/api/createCommunity/createCommunity.api";

function EditSectionDialog({
  OpenDialog,
  setOpenDialog,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setLoading } = useContext(AppContext);
  const router = useRouter();

  const { register, handleSubmit, getValues } = useForm<ICreateCommunity>({
    resolver: zodResolver(createCommunityData),
  });

  const { mutate } = useMutation({
    mutationFn: createCommunityApi,
    onSuccess: (e) => {
      setOpenDialog(false);
      setLoading(false);
      router.push("/mentor/dashboard/community");
      console.log("success", e);
      setSession(e.data.token);
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      setLoading(false);
      console.log(e);
    },
  });

  const onSubmit = async (data: ICreateCommunity) => {
    setLoading(true);
    mutate(data); //here will send the data to the login api
  };

  return (
    <Dialog
      size="sm"
      open={OpenDialog}
      handler={() => console.log("opened")}
      placeholder
      className="relative"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Icon
        onClick={() => {
          setOpenDialog(false);
        }}
        className="absolute right-4 top-4 cursor-pointer text-black"
        icon="maki:cross"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-10 text-black ">
          <h1 className="mb-6 text-center text-2xl font-bold">
            Edit sidebar sections{" "}
          </h1>
          <div className="mt-3">
            <p className="mb-1 text-lg text-[#1b448f]">
              Create different gamification sections for your students,{" "}
            </p>
            <ul className="flex flex-col gap-4 px-[30px] py-5 text-[#5D6475]">
              <li className="flex gap-4">
                <input
                  type="radio"
                  id="initial"
                  value="Initial"
                  className="h-5 w-5"
                  {...register("communityLevel")}
                />
                <label
                  htmlFor="initial"
                  className="text-lg font-light leading-[21.5px]"
                >
                  Badges
                </label>
              </li>
              <li className="flex gap-4">
                <input
                  type="radio"
                  id="vip"
                  value="VIP"
                  className="h-5 w-5"
                  {...register("communityLevel")}
                />
                <label
                  htmlFor="vip"
                  className="text-lg font-light leading-[21.5px]"
                >
                  Leaderboard
                </label>
              </li>
              <li className="flex gap-4">
                <input
                  type="radio"
                  id="mentorship"
                  value="Mentorship"
                  className="h-5 w-5"
                  {...register("communityLevel")}
                />
                <label
                  htmlFor="mentorship"
                  className="text-lg font-light leading-[21.5px]"
                >
                  Cognizant
                </label>
              </li>
              <li className="flex gap-4">
                <input
                  type="radio"
                  id="Prupleyad"
                  value="Mentorship"
                  className="h-5 w-5"
                  {...register("communityLevel")}
                />
                <label
                  htmlFor="Prupleyad"
                  className="text-lg font-light leading-[21.5px]"
                >
                  Prupleyad
                </label>
              </li>
            </ul>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="mr-4 rounded-lg bg-[#B9BABA] px-20 py-[10px] text-2xl font-bold text-white"
                onClick={() => setOpenDialog(false)}
              >
                Continue
              </button>
              <button
                className=" rounded-lg bg-[#2769D9] px-20 py-[10px] text-2xl font-bold text-white"
                type="button"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </Dialog>
  );
}

export default EditSectionDialog;