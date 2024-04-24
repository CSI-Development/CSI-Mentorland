import Image from "next/image";
import React, { useState } from "react";
import mentor1 from "../../../../public/sampleImages/sampleImg1.png";
import mentor2 from "../../../../public/sampleImages/sampleImg2.png";
import mentor3 from "../../../../public/sampleImages/sampleImg3.png";
import { useFormContext } from "react-hook-form";
import { Icon } from "@iconify/react/dist/iconify.js";

function StageFour() {
  const [selectedOptions, setSelectedOptions] = useState([
    {
      id: 1,
      img: {
        imgOne: mentor1,
        imgTwo: mentor2,
        imgThree: mentor3,
      },
      value: "Marketing",
      checked: false,
    },
    {
      id: 2,
      img: {
        imgOne: mentor1,
        imgTwo: mentor2,
        imgThree: mentor3,
      },
      value: "Psychology",
      checked: false,
    },
    {
      id: 3,
      img: {
        imgOne: mentor1,
        imgTwo: mentor2,
        imgThree: mentor3,
      },
      value: "Writing",
      checked: false,
    },
    {
      id: 4,
      img: {
        imgOne: mentor1,
        imgTwo: mentor2,
        imgThree: mentor3,
      },
      value: "Coaching",
      checked: false,
    },
    {
      id: 5,
      img: {
        imgOne: mentor1,
        imgTwo: mentor2,
        imgThree: mentor3,
      },
      value: "Lorem Ipsum",
      checked: false,
    },
    {
      id: 6,
      img: {
        imgOne: mentor1,
        imgTwo: mentor2,
        imgThree: mentor3,
      },
      value: "Adip drengt",
      checked: false,
    },
  ]);

  const { setValue } = useFormContext();

  const handleOptionSelect = (id: number) => {
    // Toggle selection for the clicked option
    const arr = selectedOptions.map((item: any) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectedOptions(arr);
    const val = arr.filter((item) => item.checked).map((ele) => ele.value);
    setValue("subjectWantToLearn", val, { shouldTouch: true });
  };

  return (
    <div className="w-8/12 mx-auto mt-10  h-fit flex flex-col  justify-center">
      <p className="text-center font-semibold text-2xl">
        What subjects would you like to learn?
      </p>

      <p className="text-[#fefffe] text-center mt-8 mb-3">
        You can choose more than one
      </p>

      <div className=" w-full   grid grid-cols-3 gap-4">
        {selectedOptions.map((val, i) => (
          <div
            className={`bg-[#171a2d] rounded-xl p-5 ${
              val.checked ? "bg-[#2E344D]" : ""
            }`}
            onClick={() => handleOptionSelect(val.id)}
            key={i}
          >
            <div className="flex w-full justify-between">
              <p>{val.value}</p>
              <input
                type="checkbox"
                checked={val.checked}
                onChange={() => handleOptionSelect(val.id)}
                className="hidden"
              />
              {
                val.checked ?
                <Icon
                  className="my-auto text-xl font-bold text-[#04D800]"
                  icon="material-symbols:check"
                /> : null
              }
            </div>
            <div className="flex justify-between mt-3">
              <Image alt="logo" src={val.img.imgOne} />
              <Image alt="logo" src={val.img.imgTwo} />
              <Image alt="logo" src={val.img.imgThree} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StageFour;
