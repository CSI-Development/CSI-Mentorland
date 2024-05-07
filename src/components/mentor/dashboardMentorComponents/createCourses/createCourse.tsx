/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import StepOne from "./form/stepOne";
import StepTwo from "./form/stepTwo";
import StepThree from "./form/stepThree";
import StepFour from "./form/stepFour";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { setSession } from "@/utils/jwt";
import {
  type ICreateCourse,
  createCourseData,
} from "@/schema/createCourse/createCourse.schema";
import { type AxiosError } from "axios";
import { toast } from "react-toastify";
import { createCourseApi } from "@/app/api/createCourse/CreateCourse.api";

function CourseCreation() {
  const { register, handleSubmit, getValues } = useForm<ICreateCourse>({
    resolver: zodResolver(createCourseData),
  });

  const stepArray = [1, 2, 3, 4];

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    const values = getValues();
    const name = values.name;
    const category = values.category;
    const description = values.description;
    if (step === 1 && !name) {
      toast.error("Please enter the Course");
      return;
    }
    if (step === 2 && !category) {
      toast.error("Please add the category");
      return;
    }
    setStep(step + 1);
    // if (step === 1) setStep(2);
    // else if (step === 2) setStep(3);
    // else if (step === 3) setStep(4);
  };

  const handlePrevStep = () => {
    if (step === 4) setStep(3);
    else if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const { mutate } = useMutation({
    mutationFn: createCourseApi,
    onSuccess: (e) => {
      //   setLoading(false);
      setStep(4);
      console.log("success", e);
      setSession(e.data.token);
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      //   setLoading(false);
      console.log(e);
    },
  });

  const onSubmit = async (data: ICreateCourse) => {
    const values = getValues();
    const description = values.description;
    if (step === 3 && !description) {
      toast.error("Please enter the description");
      return;
    }
    // setLoading(true);
    mutate(data); //here will send the data to the login api
  };

  return (
    <>
      <div className="flex min-h-screen w-full justify-around bg-[#f7f9fb] pt-[80px] text-black">
        <div className="mt-20">
          <ul className="grid h-[210px] w-[290px] grid-cols-1 gap-4 rounded-md bg-white p-5 text-base font-bold">
            <li
              className={`flex items-center ${
                step === 1 ? "text-[#2769d9]" : "text-black"
              }`}
            >
              Course Name{" "}
              {/* <FaCheckCircle className="ml-2 text-[#2769D9] opacity-1" /> */}
            </li>
            <li
              className={`flex items-center ${
                step === 2 ? "text-[#2769d9]" : "text-black"
              }`}
            >
              Category{" "}
              {/* <FaCheckCircle
                className={`ml-2 text-[#2769D9] ${
                  stepTwo ? "opacity-1" : "opacity-0"
                }`}
              /> */}
            </li>
            <li
              className={`flex items-center ${
                step === 3 ? "text-[#2769d9]" : "text-black"
              }`}
            >
              Description{" "}
              {/* <FaCheckCircle
                className={`ml-2 text-[#2769D9] ${
                  stepThree ? "opacity-1" : "opacity-0"
                }`}
              /> */}
            </li>
            <li
              className={`flex items-center ${
                step === 4 ? "text-[#2769d9]" : "text-black"
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 ? (
              <StepOne handleNextStep={handleNextStep} register={register} />
            ) : null}
            {step === 2 ? (
              <StepTwo
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                register={register}
              />
            ) : null}
            {step === 3 ? (
              <StepThree
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                register={register}
              />
            ) : null}
          </form>
          {step === 4 ? <StepFour handlePrevStep={handlePrevStep} /> : null}
        </div>
      </div>
    </>
  );
}

export default CourseCreation;
