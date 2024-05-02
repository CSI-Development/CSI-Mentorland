"use client";
import React, { useContext, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInApi } from "@/api/login/login.api";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import { setSession } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { AppContext } from "@/providers/ContextProvider";
import { ICreateCommunity, createCommunityData } from "@/schema/createCommunity/createCommunity.schema";
import { createCommunityApi } from "@/api/createCommunity/createCommunity.api";

function CommunityPopup({
  OpenDialog,
  setOpenDialog,
}: {
  OpenDialog: boolean;
  setOpenDialog: Function;
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
    >
      <Icon
        onClick={() => {
          setOpenDialog(false);
        }}
        className="absolute right-4 top-4 text-black cursor-pointer"
        icon="maki:cross"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-black p-10 ">
          <h1 className="font-bold text-center text-2xl mb-6">
            Create a New Community
          </h1>

          <div className="">
            <p className="text-[#1b448f] mb-1 text-lg">Name of the Community</p>
            <input
              {...register("communityName")}
              //   type="email"
              placeholder="newuser@myemail.com"
              className={`w-full border-2 rounded-lg outline-none py-3 px-5 `}
            ></input>
          </div>
          <div className="mt-3">
            <p className="text-[#1b448f] mb-1 text-lg">
              What Level of Community you'd like to create
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
                  className="text-lg leading-[21.5px] font-light"
                >
                  Initial
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
                  className="text-lg leading-[21.5px] font-light"
                >
                  VIP
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
                  className="text-lg leading-[21.5px] font-light"
                >
                  Mentorship
                </label>
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              <button
              type="button"
                className="bg-[#B9BABA] rounded-lg px-20 text-2xl text-white font-bold py-[10px] mr-4"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </button>
              <button className=" bg-[#2769D9] rounded-lg px-20 text-2xl text-white font-bold py-[10px]" type="submit">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </Dialog>
  );
}

export default CommunityPopup;
