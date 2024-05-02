"use-client";
import OnboardingPageTracker from "@/components/student/onboard/OnboardingPageTracker.Component";
import StageOne from "@/components/student/onboard/StageOne.Component";
import Image from "next/image";
import React, { use, useContext, useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AppContext } from "@/providers/ContextProvider";
import { ApiError } from "next/dist/server/api-utils";
export interface userDetails {
  role?: string;
  _id?: string;
}

function OnboardingMain() {
  const { setLoading } = useContext(AppContext);

  const methods = useForm<ICreateStudent>({
    defaultValues: {
      firstName: "",
      lastName: "",
      wantToAchieve: [],
      anonymousStudent: false,
      userNameOrHandler: "",
      subjectWantToLearn: [],
      selectedMentors: [],
      studentAvatar: "",
    },
    resolver: zodResolver(createStudentData),
  });

  const router = useRouter();

  const { mutate: studentData } = useMutation({
    mutationFn: createStudent,
    onSuccess: (e) => {
      setLoading(false);
      const values = methods.getValues();
      const selectedMentors = values.selectedMentors;
      if (selectedMentors.length === 0) {
        toast.error("Please Select the Mentors");
        return;
      }
      console.log("success", e);
      setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console

      updateStage();
      router.push("/student/subjectSelection");
    },
  });

  const onSubmit = async (data: ICreateStudent, e: any) => {
    setLoading(true);
    console.log("submit");
    e.preventDefault();
    studentData(data);
    //here will send the data to the login api
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
    console.log(stage, "nextcall");
    const values = methods.getValues();
    const firstName = values.firstName;
    const lastName = values.lastName;
    const wantToAchieve = values.wantToAchieve;
    const userNameOrHandler = values.userNameOrHandler;
    const studentAvatar = values.studentAvatar;
    const subjectWantToLearn = values.subjectWantToLearn;
    console.log(values, "values");

    if ((stage === 1 && !firstName) || !lastName) {
      toast.error("Please enter both First and Last names.");
      return;
    }
    if (stage === 1 && !userNameOrHandler) {
      toast.error("Please enter the username");
      return;
    }
    if (stage === 2 && !studentAvatar) {
      toast.error("Please add the Avtar");
      return;
    }

    if (stage === 3 && wantToAchieve.length === 0) {
      console.log(stage, "stagethree");
      console.log(wantToAchieve, "want toavhieve");
      toast.error("Please add your purpose");
      return;
    }
    if (stage === 4 && subjectWantToLearn.length === 0) {
      toast.error("Please add the Subjects");
      return;
    }
    setStage(stage + 1);
  };

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

  console.log(stage);

  return (
    <div className="w-full h-screen pt-5 bg-[#010d27]">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Image
            className="mx-auto "
            alt="logo"
            src={Logo.src}
            height={100}
            width={320}
          ></Image>
          {stage < 5 ? <OnboardingPageTracker stage={stage} /> : null}
          {stage === 1 && <StageOne register={methods.register} />}
          {stage === 2 && <StageTwo register={methods.register} />}
          {stage === 3 && <StageThree register={methods.register} />}
          {stage === 4 && <StageFour />}
          {stage === 5 && (
            <>
              <SelectmentorComponent />
              <div className="flex justify-center bg-[#010d27]">
                {/* <Link href={"/student/subjectSelection"}> */}
                <button
                  type="submit"
                  className={`bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg mt-8 mb-8 ${
                    stage === 5 ? "block" : "hidden"
                  }`}
                >
                  <Icon className="text-3xl" icon="tabler:arrow-right" />
                  Select Mentor
                </button>
                {/* </Link> */}
              </div>
            </>
          )}

          <div className={`flex justify-center bg-[#010d27]`}>
            <button
              type="button"
              onClick={() => updateStage()}
              className={`bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg  mt-10 ${
                stage === 5 ? "hidden" : "block"
              }`}
            >
              <Icon className="text-3xl" icon="tabler:arrow-right" />
              Next
            </button>
            {/* <button
              type="button"
              onClick={() => updateStage()}
              className={`text-xl text-[#b9baba] w-20 ${
                stage === 5 ? "hidden" : "block"
              } `}
            >
              Skip
            </button> */}
          </div>

          {/* <button type="submit">Submit</button> */}
        </form>
      </FormProvider>
    </div>
  );
}

export default OnboardingMain;
