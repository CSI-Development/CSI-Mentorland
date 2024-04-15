import OnboardingPageTracker from "@/components/student/onboard/OnboardingPageTracker.Component";
import StageOne from "@/components/student/onboard/StageOne.Component";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import StageTwo from "./StageTwo.Component";
import StageThree from "@/components/student/onboard/StageThree.Component";
import StageFour from "@/components/student/onboard/StageFour.Component";
import Logo from "../../../../public/logo.png";
import { verifyEmail } from "@/api/verifyEmail/verifyEmail.api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { decodeToken, setSession, storeUserData } from "@/utils/jwt";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useMyStore } from "@/store/store";


export interface userDetails {
  role?: string;
  _id?: string;
}

function OnboardingMain() {
  const [stage, setStage] = useState(1);
  const updateStage = () => {
    setStage(stage + 1);
  };


  const { mutate } = useMutation({
    mutationFn: verifyEmail, //here will send the token to the verifyEmail api and then will the the user id and other raw data of user
    onSuccess: async (e) => {
      console.log("success", e.data.token);
      const userDetails  = decodeToken(e.data.token) as userDetails; //here will decode the token and get the user data _id and role of user 
      storeUserData(userDetails); //here data will be store into store for further refrence along with existing data of user 
      setSession(e.data.token); //here will set the token into the session for axios header
      console.log(useMyStore.getState(), "store");

      // here will return the token have to store somewhere
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
    },
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search); 
    const jwtToken = query.get("token") || ""; //here token will be extracted from the query param
    console.log(jwtToken); //this is the raw token. to get the data from the token we have to send request to verifyEmail api
    mutate(jwtToken);
  }, []);

  return (
    <div className="w-screen h-screen  p-5 bg-[#010d27]">
      <Image
        className="mx-auto "
        alt="logo"
        src={Logo.src}
        height={100}
        width={320}
      ></Image>
      <OnboardingPageTracker stage={stage} />
      {stage === 1 && <StageOne />}
      {stage === 2 && <StageTwo />}
      {stage === 3 && <StageThree />}
      {stage === 4 && <StageFour />}
      {stage < 4 ? (
        <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
          <button
            onClick={() => updateStage()}
            className="bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg"
          >
            <Icon className="text-3xl" icon="tabler:arrow-right" />
            Next
          </button>
          <button
            onClick={() => updateStage()}
            className="text-xl text-[#b9baba] w-20"
          >
            Skip
          </button>
        </div>
      ) : (
        <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
          <Link href={"/student/mentorselection"}>
            <button
              onClick={() => updateStage()}
              className="bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg"
            >
              <Icon className="text-3xl" icon="tabler:arrow-right" />
              Select Mentor
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default OnboardingMain;
