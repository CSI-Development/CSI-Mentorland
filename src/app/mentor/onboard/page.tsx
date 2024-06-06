/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import OnboardingPageTracker from "@/components/mentor/onboard/OnboardingPageTracker.Component";
import StageOne from "@/components/mentor/onboard/StageOne.Component";
import { Icon } from "@iconify/react/dist/iconify.js";
import StageTwo from "@/components/mentor/onboard/StageTwo.Component";
import StageThree from "@/components/mentor/onboard/StageThree.Component";
import StageFour from "@/components/mentor/onboard/StageFour.Component";
import StageFive from "@/components/mentor/onboard/StageFive.component";
import { FormProvider, useForm } from "react-hook-form";
import {
  type ICreateMentor,
  createMentorData,
} from "@/schema/CreateMentor/createMentor.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  type DecodedToken,
  decodeToken,
  setSession,
  storeUserData,
} from "@/utils/jwt";
import { useMyStore } from "@/store/store";
import { type AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { AppContext } from "@/providers/ContextProvider";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { createMentor } from "@/app/api/createMentor/createMentor.api";
import { verifyEmail } from "@/app/api/verifyEmail/verifyEmail.api";
import { Hourglass } from "react-loader-spinner";

interface userDetails {
  role?: string;
  _id?: string;
}

const MentorOnboarding = () => {
  const { setLoading, glassLoading, setGlassLoading } = useContext(AppContext);
  // const [glassLoading, setGlassLoading] = useState(false); // Add this state to manage loader

  const methods = useForm<ICreateMentor>({
    defaultValues: {
      firstName: "",
      lastName: "",
      mentorAvatar: "",
      recentVideoLink: [],
      subjectsFromMentor: [],
      verifiableQualifications: [],
    },
    resolver: zodResolver(createMentorData),
  });
  const router = useRouter();

  const { mutate: mentorData } = useMutation({
    mutationFn: createMentor,
    onSuccess: (e) => {
      setLoading(false);
      console.log("success", e);
      setSession(e.data.token);
      toast.success("Mentor Created Successfully");
      // Redirect to mentor dashboard after successful creation
      const token = getCookie("token") ?? "";
      const id = jwtDecode<DecodedToken>(token)._id;
      router.push(`/mentor/dashboard?id=${id}`);
    },
  });

  const onSubmit = async (data: ICreateMentor) => {
    setLoading(true);
    const values = methods.getValues();
    const recentVideoLink = values.recentVideoLink;
    if (recentVideoLink.length === 0) {
      toast.error("Please add the Video Link");
      setLoading(false);
      return;
    }
    mentorData(data);
  };

  const [stage, setStage] = useState(1);

  const updateStage = () => {
    console.log(methods.getValues(), "getvalues");
    const values = methods.getValues();
    const firstName = values.firstName;
    const lastName = values.lastName;
    const mentorAvatar = values.mentorAvatar;
    const subjectsFromMentor = values.subjectsFromMentor;
    const verifiableQualifications = values.verifiableQualifications;

    let message = "";

    if (stage === 1 && (!firstName || !lastName)) {
      message = "Please enter both First and Last names.";
    } else if (stage === 2 && !mentorAvatar) {
      message = "Please add the Avatar";
    } else if (stage === 3 && subjectsFromMentor.length === 0) {
      message = "Please add the Subjects";
    } else if (stage === 4 && verifiableQualifications.length === 0) {
      message = "Please add the Qualifications";
    }

    if (message !== "") {
      toast.error(message);
    } else {
      setStage(stage + 1);
    }
  };

  ////verify Email
  const { mutate } = useMutation({
    mutationFn: verifyEmail,
    onSuccess: async (e) => {
      console.log("success", e);
      const userDetails = decodeToken(e.data.token) as userDetails;
      storeUserData(userDetails);
      setSession(e.data.token);
      console.log(useMyStore.getState(), "store");
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
    },
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const jwtToken = query.get("token") ?? "";
    console.log(jwtToken);
    mutate(jwtToken);
  }, []);

  return (
    <div className="h-screen w-screen  bg-[#010d27] p-5">
      <Image
        className="mx-auto"
        alt="logo"
        src={Logo.src}
        height={100}
        width={320}
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <OnboardingPageTracker stage={stage} />
          {stage === 1 && <StageOne register={methods.register} />}
          {stage === 2 && <StageTwo />}
          {stage === 3 && <StageThree />}
          {stage === 4 && <StageFour />}
          {stage === 5 && <StageFive />}
          <div className="mt-6 flex justify-center gap-10 bg-[#010d27]">
            {stage === 2 && glassLoading ? (
              <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["#306cce", "#72a1ed"]}
              />
            ) : (
              <button
                type="button"
                onClick={() => updateStage()}
                className={`flex rounded-lg bg-[#2668d8] px-4 py-1.5 text-lg font-semibold ${
                  stage <= 4 ? "block" : "hidden"
                }`}
              >
                <Icon className="h-7 w-7" icon="tabler:arrow-right" />
                Next
              </button>
            )}
            <button
              type="submit"
              className={`flex rounded-lg bg-[#2668d8] px-4 py-1.5 text-lg font-semibold ${
                stage === 5 ? "block" : "hidden"
              }`}
              disabled={stage !== 5}
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MentorOnboarding;
