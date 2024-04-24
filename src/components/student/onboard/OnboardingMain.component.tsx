"use-client";
import OnboardingPageTracker from "@/components/student/onboard/OnboardingPageTracker.Component";
import StageOne from "@/components/student/onboard/StageOne.Component";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import StageTwo from "./StageTwo.Component";
import StageThree from "@/components/student/onboard/StageThree.Component";
import StageFour from "@/components/student/onboard/StageFour.Component";
import Logo from "../../../../public/logo.png";
import { verifyEmail } from "@/api/verifyEmail/verifyEmail.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { decodeToken, setSession, storeUserData } from "@/utils/jwt";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useMyStore } from "@/store/store";
import axios from "axios";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { createStudent } from "@/api/createStudent/createStudent.api";
import { createStudentData } from "@/schema/createStudent/createStudent.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreateStudent } from "@/schema/createStudent/createStudent.schema";
import SelectmentorComponent from "../mentorselection/Selectmentor.Component";
import { IUploadImage } from "@/schema/createStudent/uploadImage.schema";

export interface userDetails {
  role?: string;
  _id?: string;
}

function OnboardingMain() {

  const methods = useForm<ICreateStudent>({
    defaultValues: {
      firstName: "",
      lastName: "",
      wantToAchieve: [],
      anonymousStudent: false,
      userNameOrHandler: "",
      subjectWantToLearn: [],
      selectedMentors: [],
      file: ""
    },
    resolver: zodResolver(createStudentData),
  });

  const { mutate: studentData } = useMutation({
    mutationFn: createStudent,
    onSuccess: (e) => {
      console.log("success", e);
      setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
    },
  });

  const onSubmit = async (data: ICreateStudent, e: any) => {
    console.log("submit");
    e.preventDefault();
    studentData(data); //here will send the data to the login api
    console.log(data, "hgghj");
  };

  // const { register, handleSubmit } = useForm<IFormInput>();
  // console.log(register,'fgh')
  // const onSubmit: SubmitHandler<IFormInput> = async (data) => {
  //   console.log(data, "formdata");

  //   try {
  //     const response = await axios.post(
  //       "http://18.221.74.118/api/student/createStudent",
  //       {
  //         firstName: data.firstName,
  //         lastName: data.lastName,
  //         anonymousStudent: data.anonymousStudent,
  //         userNameOrHandler: data.userNameOrHandler,
  //         wantToAchieve: data.wantToAchieve,
  //         userId: "662634208ef5c16f662cb017",
  //       }
  //     );

  //     console.log("Data posted successfully:", response);
  //     // Optionally, handle success response
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //     // Optionally, handle error
  //   }
  //   console.log(data);
  // };

  const [stage, setStage] = useState(1);

  const updateStage = () => {
    setStage(stage + 1);
  };

  const { mutate } = useMutation({
    mutationFn: verifyEmail, //here will send the token to the verifyEmail api and then will the the user id and other raw data of user
    onSuccess: async (e) => {
      console.log("succe>>>>>>>>>>>>>>>>>>>>>>ss", e);
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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Image
            className="mx-auto "
            alt="logo"
            src={Logo.src}
            height={100}
            width={320}
          ></Image>
          {
            stage < 5 ?
            <OnboardingPageTracker stage={stage} /> : null
          }
          {stage === 1 && <StageOne register={methods.register} />}
          {stage === 2 && <StageTwo register={methods.register} />}
          {stage === 3 && <StageThree register={methods.register} />}
          {stage === 4 && <StageFour />}
          {stage === 5 && <SelectmentorComponent/> }
          {stage < 5 ? (
            <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
              <button
                onClick={() => updateStage()}
                type="button"
                className="bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg"
              >
                <Icon className="text-3xl" icon="tabler:arrow-right" />
                Next
              </button>
              <button
                type="button"
                onClick={() => updateStage()}
                className="text-xl text-[#b9baba] w-20"
              >
                Skip
              </button>
            </div>
          ) : (
            <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
              <Link href={"/student/subjectSelection"}>
                <button
                  onClick={() => {
                    updateStage();
                  }}
                  className="bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg"
                >
                  <Icon className="text-3xl" icon="tabler:arrow-right" />
                  Select Mentor
                </button>
              </Link>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default OnboardingMain;
