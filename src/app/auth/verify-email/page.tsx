"use client";
import Image from "next/image";
import Logo from "/public/logoDark.png";
import React, { useContext, useEffect, useState } from "react";
import sideCoverImage from "/public/onboardStudent/signupSideImage.png";
import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { AppContext } from "@/providers/ContextProvider";
import { resendEmail } from "@/app/api/resendEmail/resendEmail.api";

const VerifyEmail = () => {
  const { setLoading } = useContext(AppContext);
  const [email, setEmail] = useState<string>("");
  const { mutate } = useMutation({
    mutationFn: resendEmail,
    onSuccess: (e) => {
      console.log("success", e);
      setLoading(false);
      //if email is sent successfully and if user clicks on it then it will be redirected to the onboarding page along with token
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
      setLoading(false);
    },
  });
  useEffect(() => {
    const query = new URLSearchParams(window.location.search); //here email id will be extracted from the query param
    const emailParam = query.get("email") ?? "";
    setEmail(emailParam);
  }, []);
  return (
    <div className="flex w-full bg-white">
      <Image className="h-screen w-1/3" alt="" src={sideCoverImage} />
      <div className="h-screen w-full overflow-y-scroll ">
        <div className="mt-5 flex w-full justify-center">
          <Image alt="logo" src={Logo} />
        </div>
        <div className="mt-6 flex justify-center text-black">
          <div className="w-5/12  ">
            <p className="mt-6 text-center text-2xl font-bold text-black">
              We’ve sent you a verification email
            </p>

            <p className="mt-12 text-center text-sm text-[#90A4B6]">{`Didn't receive it?`}</p>
            <button
              type="submit"
              onClick={() => {
                mutate(email), setLoading(true);
              }} //if user want to resend the email
              className={` my-2 w-full rounded-lg bg-[#2668d8] py-2.5 text-lg font-semibold text-white `}
            >
              Resend It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
