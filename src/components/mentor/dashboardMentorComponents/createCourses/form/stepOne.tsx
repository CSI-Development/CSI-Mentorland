/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import { categoryNameGetApi } from "@/app/api/createStudent/getCategoryName";
import { getCategoryNameGetApi } from "@/app/api/getMentorCategory/getMentorCategory.api";
import { uploadImage } from "@/app/api/uploadImage/uploadImage.api";
import axiosInstance from "@/utils/axiosInstance";
import { setSession } from "@/utils/jwt";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

function StepOne({ handleNextStep, register }: any) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const { setValue } = useFormContext();
  const [categories, setCategories] = useState([]);

  const { data: categoriesList } = useQuery({
    queryKey: ["categoryName"],
    queryFn: () => getCategoryNameGetApi(),
  });

  useEffect(() => {
    if (categoriesList) {
      setCategories(categoriesList.categories);
    }
  }, [categoriesList]);

  const { mutate } = useMutation({
    mutationFn: uploadImage,
    onSuccess: (e) => {
      toast.success("Image Upload Successfully")
      console.log("success", e);
      setValue("logo", e.data.file.url, { shouldTouch: true });

      setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      // setValue("studentAvatar", e.data.file.url, { shouldTouch: true });
    },
  });

  const handleImageInput = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(image, "image value");
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      console.log(file, "imageee");
      const formData: any = new FormData();
      formData.append("file", file);
      mutate(formData);
    }
  };

  return (
    <div className="mt-20 flex h-full w-full flex-col">
      <div>
        <div className="w-full text-center">
          <h1 className="font-popins text-2xl font-bold">
            Let’s start by giving your Course Details
          </h1>
        </div>
        <div className="mt-12">
          <label htmlFor="course" className="text-base text-[#1A458F]">
            Course Name
          </label>
          <br />
          <input
            id="course"
            name="course"
            type="text"
            {...register("name")}
            placeholder="e.g, Gardening 101"
            className="h-[55px] w-[620px] rounded-md border border-[#B9BABA] pl-[10px] outline-none"
          />{" "}
          <br />
        </div>
        <div className="mt-12">
          <label htmlFor="category" className="text-base text-[#1A458F]">
            Course Category
          </label>
          <br />
          <select
            id="category"
            name="category"
            className="h-[55px] w-[620px] rounded-md border border-[#B9BABA] bg-white px-[10px] outline-none"
            {...register("category")}
          >
            <option value="">--Please choose an option--</option>
            {categories?.map((item: any, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>{" "}
          <br />
        </div>
        <div className="mt-12">
          <label htmlFor="description" className="text-base text-[#1A458F]">
            Course Description
          </label>
          <br />
          <textarea
            id="description"
            name="description"
            type="text"
            {...register("description")}
            placeholder="Tell us about your course, be a descriptive as possible."
            className="h-[140px] w-[620px] rounded-md border border-[#B9BABA] bg-white p-[10px] outline-none"
          />{" "}
          <br />
        </div>
        <div className="mt-12">
          <label htmlFor="description" className="text-base text-[#1A458F]">
            Course Logo
          </label>
          <br />
          <div className="mt-4">
            <div>
              <label
                htmlFor="banner"
                className="cursor-pointer rounded bg-[#2769d9] px-3 py-3 text-lg font-semibold text-white"
              >
                Upload Logo
              </label>
              <input
                type="file"
                id="banner"
                name="banner"
                accept="image/png, image/jpeg, image/jpg"
                hidden
                onChange={handleImageInput}
              />
            </div>
            {/* <div className="mt-4">
              {image ? (
                <Image
                  src={image as string}
                  className=" w-full h-[191px]  mb-3"
                  alt="image"
                  fill
                />
              ) : (
                <div className="h-40 w-50 border-2 border-dashed border-black  w-1/2"></div>
              )}
              {/* <Image src="" alt="banner" /> 
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full justify-end">
        <button
          type="submit"
          className="text-md rounded-xl bg-[#2769D9] px-[15px] py-[5px] text-base font-bold text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;
