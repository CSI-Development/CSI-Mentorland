/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useState } from "react";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import { FormProvider, useForm } from "react-hook-form";
import {
  createCourseData,
  type ICreateCourse,
} from "@/schema/createCourse/createCourse.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { createCourseApi } from "@/app/api/createCourse/CreateCourse.api";
import { setSession } from "@/utils/jwt";
import { type AxiosError } from "axios";
import StepOne from "@/components/mentor/dashboardMentorComponents/createCourses/form/stepOne";
import StepFour from "@/components/mentor/dashboardMentorComponents/createCourses/form/stepFour";

function CourseCreate() {
  const methods = useForm<ICreateCourse>({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      logo: "",
    },
    resolver: zodResolver(createCourseData),
  });

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    // const values = methods.getValues();
    // const name = values.name;
    // const category = values.category;
    // const description = values.description;
    // if (step === 1 && !name) {
    //   toast.error("Please enter the Course");
    //   return;
    // }
    // if(step === 1 && !category){
    //   toast.error("Please enter the Course Category");
    //   return;
    // }
    // if(step === 1 && !description){
    //   toast.error("Please enter the Course Description")
    // }
    setStep(step + 1);
  
  };

  const handlePrevStep = () => {
    if (step === 2) setStep(1);
  };

  const { mutate } = useMutation({
    mutationFn: createCourseApi,
    onSuccess: (e) => {
      //   setLoading(false);
      localStorage.setItem('courseId', e.course._id)
      setStep(2);
      console.log("success", e);
      localStorage.setItem('courseId',e.course._id)
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      //   setLoading(false);
      console.log(e);
    },
  });

  const onSubmit = async (data: ICreateCourse) => {
    const values = methods.getValues();
    const name = values.name;
    const category = values.category;
    const description = values.description;
    const logo = values.logo;
    if (step === 1 && !name) {
      toast.error("Please enter the Course");
      return;
    }
    if(step === 1 && !category){
      toast.error("Please enter the Course Category");
      return;
    }
    if(step === 1 && !description){
      toast.error("Please enter the Course Description")
      return;
    }
    if(step === 1 && !logo){
      toast.error("Please Add the Banner")
      return;
    }
    // setLoading(true);
    mutate(data); //here will send the data to the login api
  };

  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-full w-full pt-10  ">
        <div className="flex min-h-screen w-full justify-around bg-[#f7f9fb] pt-[80px] text-black">
          <div className="mt-20">
            <ul className="grid w-[290px] grid-cols-1 gap-4 rounded-md bg-white p-5 text-base font-bold">
              <li
                className={`flex items-center ${
                  step === 1 ? "text-[#2769d9]" : "text-black"
                }`}
              >
                Course Details{" "}
                {/* <FaCheckCircle className="ml-2 text-[#2769D9] opacity-1" /> */}
              </li>

              <li
                className={`flex items-center ${
                  step === 2 ? "text-[#2769d9]" : "text-black"
                }`}
              >
                Sections and Lectures{" "}
                {/* <FaCheckCircle
                className={`ml-2 text-[#2769D9] ${
                  stepFour ? "opacity-1" : "opacity-0"
                }`}
              /> */}
              </li>
            </ul>
          </div>
          <div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {step === 1 ? (
                  <StepOne
                    handleNextStep={handleNextStep}
                    register={methods.register}
                  />
                ) : null}
              </form>
            </FormProvider>
            {step === 2 ? <StepFour handlePrevStep={handlePrevStep} /> : null}
          </div>
        </div>
      </div>
    </MentorDashboardLayout>
  );
}

export default CourseCreate;
