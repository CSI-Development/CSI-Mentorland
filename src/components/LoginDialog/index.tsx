/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useContext, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { type ILogIn, LogIn } from "@/schema/login/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import { type DecodedToken, setSession } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { AppContext } from "@/providers/ContextProvider";
import { jwtDecode } from "jwt-decode";
import { logInApi } from "@/app/api/login/login.api";

function LoginDialog({
  OpenDialog,
  setOpenDialog,
}: {
  OpenDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setLoading } = useContext(AppContext);

  const [loginError, setLogInErrror] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogIn>({
    resolver: zodResolver(LogIn),
  });

  const { mutate } = useMutation({
    mutationFn: logInApi,
    onSuccess: (e) => {
      setLoading(false);
      console.log("success", e);
      setSession(e.data.token);
      const role = jwtDecode<DecodedToken>(e.data.token).role;
      const id = jwtDecode<DecodedToken>(e.data.token)._id;
      setOpenDialog(false);
      router.push(`/${role}/dashboard?id=${id}`);
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      setLoading(false);
      setLogInErrror(
        e.response?.data?.error?.message ??
          "Something went wrong. Please try again.",
      );
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
    },
  });
  const router = useRouter();

  const onSubmit = async (data: ILogIn) => {
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
          <h1 className="mb-6 text-center text-2xl font-bold">Log In</h1>

          <div className="">
            <p className="mb-1 text-lg text-[#1b448f]">Email Address</p>
            <input
              {...register("email")}
              //   type="email"
              placeholder="newuser@myemail.com"
              className={`w-full rounded-lg border-2 px-5 py-3 outline-none `.concat(
                errors.email ? " border-[#FF007A]" : " border-[#b9baba]",
              )}
            />
            {errors.email && (
              <p className="rounded-md bg-[#FF007A] p-1.5 text-xs text-white">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-3">
            <p className="mb-1 text-lg text-[#1b448f]">Password</p>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="w-full rounded-lg border-2 border-[#b9baba] px-5 py-3 outline-none"
            />
            {errors.password && (
              <p
                className={`w-full rounded-lg border-2 px-5 py-3 outline-none `.concat(
                  errors.password ? " border-[#FF007A]" : " border-[#b9baba]",
                )}
              >
                {errors.password.message}
              </p>
            )}
            <div className="my-2 flex gap-1 text-[#5D6475]">
              <p>Forgot your password? Please</p>
              <p className="text-[#1b448f]">click here</p>
              <p>to reset it.</p>
            </div>
          </div>

          <button
            type="submit"
            className={` mt-2 w-full rounded-lg bg-[#2668d8] py-2.5 text-lg  font-semibold text-white
              `}
          >
            Log In
          </button>
          {loginError && (
            <p
              className={`mb-2 mt-2 w-full rounded-lg border-2 border-[#FF007A] bg-[#FF007A] px-5 py-3 outline-none `}
            >
              {loginError}
            </p>
          )}
        </div>
      </form>
    </Dialog>
  );
}

export default LoginDialog;
