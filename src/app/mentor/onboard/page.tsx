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
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import {
  ICreateMentor,
  createMentorData,
} from "@/schema/CreateMentor/createMentor.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  DecodedToken,
  decodeToken,
  setSession,
  storeUserData,
} from "@/utils/jwt";
import { createMentor } from "@/api/createMentor/createMentor.api";
import { userDetails } from "@/components/student/onboard/OnboardingMain.component";
import { useMyStore } from "@/store/store";
import { AxiosError } from "axios";
import { verifyEmail } from "@/api/verifyEmail/verifyEmail.api";
import { useRouter } from "next/navigation";
import { AppContext } from "@/providers/ContextProvider";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const MentorOnboarding = () => {
  const token = getCookie("token");

  const { setLoading } = useContext(AppContext);

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
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      toast.success("Mentor Create Successfully");
    },
  });

  const onSubmit = async (data: ICreateMentor, e: any) => {
    setLoading(true);
    const values = methods.getValues();
    const recentVideoLink = values.recentVideoLink;
    if (recentVideoLink.length === 0) {
      toast.error("Please add the Video Link");
      return;
    }
    e.preventDefault();
    const token = getCookie("token") ?? "";
    const id = jwtDecode<DecodedToken>(token)._id;
    mentorData(data); //here will send the data to the login api
    router.push(`/mentor/dashboard?id=${id}`);
  };

  const [stage, setStage] = useState(1);
  const [onBoardData, setOnBoardData] = useState({});

  const updateStage = () => {
    console.log(methods.getValues(), "getvalues");
    const values = methods.getValues();
    const firstName = values.firstName;
    const lastName = values.lastName;
    const mentorAvtar = values.mentorAvatar;
    const subjectsFromMentor = values.subjectsFromMentor;
    const verifiableQualifications = values.verifiableQualifications;

    let message = "";

    if (stage === 1 && !firstName || !lastName) {
      message = "Please enter both First and Last names.";
    }
    if (stage === 2 && !mentorAvtar) {
      message = "Please add the Avtar";
    }
    if (stage === 3 && subjectsFromMentor.length === 0) {
      console.log("fgghkj", subjectsFromMentor.length);
      message = "Please add the Subjects";
    }
    if (stage === 4 && verifiableQualifications.length === 0) {
      message = "Please add the Qualifications";
    }

    if (message !== "") {
      toast.error(message);
      return;
    } else setStage(stage + 1);
  };

  // const handleSubmit = (data: any) => {
  //   console.log("data", data);
  // };

  ////verify Email
  const { mutate } = useMutation({
    mutationFn: verifyEmail, //here will send the token to the verifyEmail api and then will the the user id and other raw data of user
    onSuccess: async (e) => {
      console.log("success", e);
      const userDetails = decodeToken(e.data.token) as userDetails; //here will decode the token and get the user data _id and role of user
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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <OnboardingPageTracker stage={stage} />
          {stage === 1 && <StageOne register={methods.register} />}
          {stage === 2 && <StageTwo />}
          {stage === 3 && <StageThree />}
          {stage === 4 && <StageFour />}
          {stage === 5 && <StageFive />}
          <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
            {/* {stage <= 4 ? ( */}
            <button
              type="button"
              onClick={() => updateStage()}
              className={`bg-[#2668d8] py-1.5 px-4 flex text-lg rounded-lg font-semibolsd ${
                stage <= 4 ? "block" : "hidden"
              }`}
            >
              <Icon className="w-7 h-7" icon="tabler:arrow-right" />
              Next
            </button>
            {/* ) : ( */}
            <button
              type="submit"
              className={`bg-[#2668d8] py-1.5 px-4 flex text-lg rounded-lg font-semibold ${
                stage === 5 ? "block" : "hidden"
              }`}
            >
              Submit
            </button>
            {/* )} */}
            {/* <button
              type="button"
              onClick={() => updateStage()}
              className={`text-xl text-[#b9baba] w-20 font-semibold ${stage === 5 ? "hidden" : "block"}`}
            >
              Skip
            </button> */}
          </div>
        </form>
      </FormProvider>
      {/* ) : (
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
      )} */}
    </div>
  );
};

export default MentorOnboarding;



