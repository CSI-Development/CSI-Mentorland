/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
"use client";
import { addWalletAddressApi } from "@/app/api/addWalletAddress/addWalletAddress.api";
import { AppContext } from "@/providers/ContextProvider";
import { useMagic } from "@/providers/MagicProvider";
import { logout, saveUserInfo } from "@/utils/common";
import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { RPCError, RPCErrorCode } from "magic-sdk";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginWallet = () => {
  const { magic } = useMagic();
  const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState(false);
  const [isLoginInProgress, setLoginInProgress] = useState(false);
  const { setMToken, mToken, setOpenWallet, setLoading } =
    useContext(AppContext);

  const { mutateAsync } = useMutation({
    mutationFn: addWalletAddressApi,

    onSuccess: (e) => {
      setLoading(false);
      console.log(e, "res");
    },
    onError: async (e: AxiosError<{ error: { message: string } }>) => {
      await logout(setMToken, magic);
      setLoading(false);
      toast.error(e?.response?.data.error.message);
      console.log(e);
    },
  });

  const handleLogin = async () => {
    // if (
    //   !email.match(
    //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    //   )
    // ) {
    //   setEmailError(true);
    // } else {
    try {
      setLoginInProgress(true);
      setLoading(true);
      // setEmailError(false);
      const token = await magic?.auth.loginWithEmailOTP({
        // email: "rohitnft11@yopmail.com",
        email,
      });

      const metadata = await magic?.user.getInfo();

      if (!token || !metadata?.publicAddress) {
        throw new Error("Magic login failed");
      }
      const abc = await mutateAsync({ walletAddress: metadata?.publicAddress });
      console.log(abc, "abc");
      setMToken(token);
      saveUserInfo(token, "EMAIL", metadata?.publicAddress);
      setLoginInProgress(false);
      setEmail("");
      setOpenWallet(false);
      setLoading(false);
    } catch (e: any) {
      console.log("login error: " + JSON.stringify(e));
      if (e instanceof RPCError) {
        setOpenWallet(false);
        switch (e.code) {
          case RPCErrorCode.MagicLinkFailedVerification:
          case RPCErrorCode.MagicLinkExpired:
          case RPCErrorCode.MagicLinkRateLimited:
          case RPCErrorCode.UserAlreadyLoggedIn:
            toast.error(e.message);
            break;
          default:
            toast.error("Something went wrong. Please try again");
        }
      } 
      // else {
        // toast.error(e?.response?.data.error.message);
      // }
      setLoading(false);
    } finally {
      setLoading(false);
      setLoginInProgress(false);
      setOpenWallet(false);
    }
    // }
  };

  useEffect(() => {
    const mail = getCookie("user_email");
    console.log(mail);
    if (mail) {
      setEmail(mail);
    }
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <h1 className="text-left text-lg font-bold text-black">
        Email OTP Login
      </h1>
      <div className="flex flex-col gap-2">
        {/* <input
          type="email"
          className="w-full rounded-md border border-black/20 px-4 py-2 outline-offset-1"
          value={email}
          onChange={(e) => {
            if (emailError) setEmailError(false);
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        {emailError && (
          <span className="text-red-600 font-medium">Enter a valid email</span>
        )} */}
        <h2>{email}</h2>
      </div>
      <button
        className="w-fit rounded-md bg-purple-800 px-4 py-2 font-medium text-white"
        disabled={
          isLoginInProgress || (mToken.length > 0 ? false : email.length == 0)
        }
        onClick={() => handleLogin()}
      >
        {isLoginInProgress ? "Loading..." : "Log in / Sign up"}
      </button>
    </div>
  );
};

export default LoginWallet;
