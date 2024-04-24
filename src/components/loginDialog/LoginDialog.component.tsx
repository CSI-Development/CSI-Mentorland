"use client";
import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { ILogIn, LogIn } from "@/schema/login/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInApi } from "@/api/login/login.api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import { setSession } from "@/utils/jwt";

function LoginDialog({
  OpenDialog,
  setOpenDialog,
}: {
  OpenDialog: boolean;
  setOpenDialog: Function;
}) {
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
      console.log("success", e);
      setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      setLogInErrror(
        e.response?.data?.error?.message ||
          "Something went wrong. Please try again."
      );
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
    },
  });

  const onSubmit = async (data: ILogIn) => {
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
          <h1 className="font-bold text-center text-2xl mb-6">Log In</h1>

          <div className="">
            <p className="text-[#1b448f] mb-1 text-lg">Email Address</p>
            <input
              {...register("email")}
              //   type="email"
              placeholder="newuser@myemail.com"
              className={`w-full border-2 rounded-lg outline-none py-3 px-5 `.concat(
                errors.email ? " border-[#FF007A]" : " border-[#b9baba]"
              )}
            ></input>
            {errors.email && (
              <p className="text-white text-xs p-1.5 rounded-md bg-[#FF007A]">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-3">
            <p className="text-[#1b448f] mb-1 text-lg">Password</p>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="w-full border-2 outline-none rounded-lg border-[#b9baba] py-3 px-5"
            ></input>
            {errors.password && (
              <p
                className={`w-full border-2 rounded-lg outline-none py-3 px-5 `.concat(
                  errors.password ? " border-[#FF007A]" : " border-[#b9baba]"
                )}
              >
                {errors.password.message}
              </p>
            )}
            <div className="flex gap-1 text-[#5D6475] my-2">
              <p>Forgot your password? Please</p>
              <p className="text-[#1b448f]">click here</p>
              <p>to reset it.</p>
            </div>
          </div>

          <button
            type="submit"
            className={` rounded-lg w-full py-2.5 text-lg mt-2 font-semibold  text-white bg-[#2668d8]
              `}
          >
            Log In
          </button>
          {loginError && (
            <p
              className={`w-full border-2 rounded-lg outline-none py-3 px-5 mb-2 bg-[#FF007A] mt-2 border-[#FF007A] `}
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
