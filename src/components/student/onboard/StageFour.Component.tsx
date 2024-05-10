/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mentor1 from "../../../../public/sampleImages/sampleImg1.png";
import mentor2 from "../../../../public/sampleImages/sampleImg2.png";
import mentor3 from "../../../../public/sampleImages/sampleImg3.png";
import { useFormContext } from "react-hook-form";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { categoryNameGetApi } from "@/app/api/createStudent/getCategoryName";
import { decodeToken, setSession } from "@/utils/jwt";
import { AxiosError } from "axios";
import { IPostCategoryName } from "@/schema/createStudent/postCategoryName";

function StageFour({ updateStage }: any) {
  const { data } = useQuery({
    queryKey: ["categoryName"],
    queryFn: () => categoryNameGetApi(),
  });

  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  console.log(selectedOptions, "selected options...");

  const { setValue } = useFormContext();

  const handleOptionSelect = (id: string) => {
    // Toggle selection for the clicked option
    const arr = selectedOptions.map((item: any) =>
      item.category === id ? { ...item, checked: !item.checked } : item,
    );
    setSelectedOptions(arr);
    const val = arr
      .filter((item: any) => item.checked)
      .map((ele: any) => ele.category);
    setValue("subjectWantToLearn", val, { shouldTouch: true });
  };

  useEffect(() => {
    if (data?.length > 0) {
      const arr = data.map((item: any) => ({
        ...item,
        mentors: item.mentors.map((val: any) => ({ ...val, checked: false })),
      }));
      setSelectedOptions(arr);
    }
  }, [data]);

  return (
    <div className="mx-auto mt-10 flex  h-fit w-8/12 flex-col  justify-center">
      <p className="text-center text-2xl font-semibold">
        What subjects would you like to learn?
      </p>

      <p className="mb-3 mt-8 text-center text-[#fefffe]">
        You can choose more than one
      </p>

      <div className=" grid   w-full grid-cols-3 gap-4">
        {selectedOptions.map((val: any, i: number) => (
          <div
            className={`rounded-xl bg-[#171a2d] p-5 ${
              val.checked ? "bg-[#2E344D]" : ""
            }`}
            onClick={() => handleOptionSelect(val.category)}
            key={i}
          >
            <div className="flex w-full justify-between">
              <p>{val.category}</p>
              <input
                type="checkbox"
                checked={val.checked}
                onChange={() => handleOptionSelect(val.category)}
                className="hidden"
              />
              {val.checked ? (
                <Icon
                  className="my-auto text-xl font-bold text-[#04D800]"
                  icon="material-symbols:check"
                />
              ) : null}
            </div>
            <div className="mt-3 flex justify-around gap-2">
              {val?.mentors?.slice(0, 3).map((ele: any) => (
                <div
                  className="grid h-20 w-20 items-center overflow-hidden rounded-md bg-white/20"
                  key={val._id}
                >
                  <Image
                    alt="logo"
                    width={80}
                    height={80}
                    className="object-contain"
                    src={ele.mentorAvatar}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <button
          type="button"
          onClick={() => updateStage()}
          className={`mt-20 flex rounded-lg bg-[#2668d8] px-4 py-1.5  text-xl `}
        >
          <Icon className="text-3xl" icon="tabler:arrow-right" />
          Next
        </button>
      </div>
    </div>
  );
}

export default StageFour;
