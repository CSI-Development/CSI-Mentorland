"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../../../../public/logoDark.png";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { resendEmail } from "@/api/resendEmail/resendEmail.api";
import { AxiosError } from "axios";
import { AppContext } from "@/providers/ContextProvider";

function VerifyEmail() {
  const {setLoading} = useContext(AppContext)
  const [email, setEmail] = useState<string>("");
  const { mutate } = useMutation({
    mutationFn: resendEmail,
    onSuccess: (e) => {
      console.log("success", e);
      setLoading(false)
      //if email is sent successfully and if user clicks on it then it will be redirected to the onboarding page along with token
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
      setLoading(false)
    },
  });
  useEffect(() => {
    const query = new URLSearchParams(window.location.search); //here email id will be extracted from the query param
    const emailParam = query.get("email") || "";
    setEmail(emailParam);
  }, []);
  return (
    <>
      <div className="mt-5 w-full flex justify-center">
        <Image alt="logo" src={Logo} />
      </div>
      <div className="flex justify-center mt-6 text-black">
        <div className="w-5/12  ">
          <p className="text-black text-center text-2xl font-bold mt-6">
            We’ve sent you a verification email
          </p>

          <p className="text-center text-sm mt-12 text-[#90A4B6]">{`Didn't receive it?`}</p>
          <button
            type="submit"
            onClick={() => { mutate(email), setLoading(true)}} //if user want to resend the email
            className={` rounded-lg w-full py-2.5 text-lg my-2 font-semibold text-white bg-[#2668d8] `}
          >
            Resend It
          </button>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
