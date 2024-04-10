"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/logoDark.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ISignUp, SignUp } from "@/schema/signup/signup.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signupApi } from "@/api/signup/signup.api";
import { set } from "zod";
import { AxiosError } from "axios";

function SignUpForm() {
  const [role, setrole] = useState<string>("");
  const [emailIdError, setEmailIdError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<ISignUp>({
    resolver: zodResolver(SignUp),
  });

  const { mutate } = useMutation({
    mutationFn: signupApi,
    onSuccess: (e) => {
      console.log("success", e);

      //remaining: after success user must be redirect somewhere.
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      if (e.response?.data?.error?.message === "Email already exists") {
        setEmailIdError("Email already exists");
      }
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
    },
  });

  const onSubmit: SubmitHandler<ISignUp> = async (data: ISignUp) => {
    console.log(data);
    mutate(data);
  };

  const o = () => {
    console.log(getValues("email"));
    console.log(getValues("password"));
    console.log(getValues("role"));
  };

  return (
    <>
      <div className="mt-5 w-full flex justify-center">
        <Image onClick={o} alt="logo" src={Logo} />
      </div>
      <div className="flex justify-center mt-6 text-black">
        <div className="w-5/12  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-black text-center text-2xl font-bold">Sign Up</p>
            <div className="flex justify-center  gap-3 mt-4 w-full text-white">
              <div
                className={` py-2 px-7 w-40 rounded-lg ${
                  role === "student" ? " bg-[#2668d9] " : " bg-[#5d6574] "
                }`}
                onClick={() => {
                  setValue("role", "student");
                  setrole("student");
                }}
              >
                {role === "student" ? (
                  <Icon
                    className="flex justify-center w-full"
                    icon="teenyicons:tick-circle-solid"
                  />
                ) : (
                  <Icon
                    className="flex justify-center w-full"
                    icon="material-symbols:circle-outline"
                  />
                )}
                <Icon
                  className="flex justify-center w-full text-4xl mt-1"
                  icon="iconoir:graduation-cap"
                />
                <p className="text-center">As A Student</p>
              </div>

              <div
                className={` py-2 px-7 w-40 rounded-lg ${
                  getValues("role") === "mentor"
                    ? " bg-[#2668d9] "
                    : " bg-[#5d6574] "
                }`}
                onClick={() => {
                  setValue("role", "mentor");
                  setrole("mentor");
                }}
              >
                {role === "mentor" ? (
                  <Icon
                    className="flex justify-center w-full"
                    icon="teenyicons:tick-circle-solid"
                  />
                ) : (
                  <Icon
                    className="flex justify-center w-full"
                    icon="material-symbols:circle-outline"
                  />
                )}
                <Icon
                  className="flex justify-center w-full text-4xl mt-1"
                  icon="healthicons:register-book-outline"
                />
                <p className="text-center">As A Mentor</p>
              </div>
            </div>

            <button
              className={`mt-6 flex py-2 justify-center w-8/12 mx-auto  gap-2 border-2 rounded-lg border-[#b9baba] ${
                role === "" ? ` text-[#b9baba] ` : ` text-black `
              }`}
            >
              {role === "" ? (
                <Icon className="text-2xl" icon="devicon-plain:google" />
              ) : (
                <Icon className="text-2xl" icon="devicon:google" />
              )}
              Sign up with Google
            </button>
            <button
              className={` mt-2 flex py-2 justify-center w-8/12 mx-auto gap-2 border-2 rounded-lg border-[#b9baba] ${
                role === "" ? ` text-[#b9baba] ` : ` text-black `
              }`}
            >
              {role === "" ? (
                <Icon className="text-2xl" icon="simple-icons:facebook" />
              ) : (
                <Icon className="text-2xl" icon="logos:facebook" />
              )}
              Sign up with Facebook
            </button>

            <p className="text-black text-center my-2">- OR -</p>

            <div>
              <p className="text-[#1b448f] mb-1 text-lg">Email Address</p>
              <input
                {...register("email")}
                placeholder="newuser@myemail.com"
                className={`w-full border-2 rounded-lg outline-none py-3 px-5 `
                  .concat(
                    errors.email
                      ? " border-[#FF007A]"
                      : " border-[#b9baba]"
                  )
                  .concat(
                    emailIdError !== ""
                      ? " border-[#FF007A]"
                      : " border-[#b9baba]"
                  )
              }
              ></input>
              {errors.email && (
                <p className="text-white text-xs p-1.5 rounded-md bg-[#FF007A]">
                  {errors.email.message}
                </p>
              )}
              {emailIdError !== "" && (
                <p className="text-white text-xs p-1.5 rounded-md bg-[#FF007A]">
                  {emailIdError}
                </p>
              )}
            </div>
            <div className="mt-3">
              <p className="text-[#1b448f] mb-1 text-lg">Password</p>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className={`w-full border-2 rounded-lg outline-none py-3 px-5 `
                  .concat(
                    errors.password
                      ? " border-[#FF007A]"
                      : " border-[#b9baba]"
                  )
              }
              ></input>
              {errors.password && (
                <p className="text-white text-xs p-1.5 rounded-md bg-[#FF007A]">
                  {errors.password.message}
                </p>
              )}
              <div className="text-[#b9baba] text-xs mt-1">
                <p>Upper and lower case letters</p>
                <p>At least one number or special character (%&*_!@)</p>
                <p>At least 10 characters</p>
              </div>
            </div>

            {/* <Link href={"student/onboard"}> */}
            {/* <button type="submit">max</button> */}
            <button
              type="submit"
              className={` rounded-lg w-full py-2.5 text-lg my-2 font-semibold ${
                role === ""
                  ? ` text-white bg-[#b9baba] `
                  : ` text-white bg-[#2668d8] `
              }`}
            >
              Get Started
            </button>
            {/* </Link> */}
            <div className="flex gap-2">
              <p>Already have an accoutn?</p>
              <button className="text-[#2668d8] ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
