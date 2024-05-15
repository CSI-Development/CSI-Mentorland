/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

function StageThree({ register }: any) {
  const [selectedOptions, setSelectedOptions] = useState([
    {
      id: 1,
      value: "Inspiration and entertainment",
      checked: false,
    },
    {
      id: 2,
      value: "To earn something new",
      checked: false,
    },
    {
      id: 3,
      value: "To get better at something I do",
      checked: false,
    },
    {
      id: 4,
      value: "To level up my team or organization",
      checked: false,
    },
    {
      id: 5,
      value: "To browse around",
      checked: false,
    },
    {
      id: 6,
      value: "All of the above",
      checked: false,
    },
  ]);

  const { setValue } = useFormContext();

  // Function to handle option selection
  // const handleOptionSelect = (option: string) => {
  //   // Toggle selection for the clicked option
  //   setSelectedOptions((prevOptions) => {
  //     if (prevOptions.includes(option)) {
  //       // Remove the option if already selected
  //       return prevOptions.filter((item) => item !== option);
  //     } else {
  //       // Add the option if not already selected
  //       return [...prevOptions, option];
  //     }
  //   });
  // };

  const handleOptionSelect = (id: number) => {
    // Toggle selection for the clicked option
    const arr = selectedOptions.map((item: any) =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : id === 6
          ? { ...item, checked: true }
          : item,
    );
    setSelectedOptions(arr);
    const val = arr.filter((item) => item.checked).map((ele) => ele.value);
    setValue("wantToAchieve", val, { shouldTouch: true });
  };

  return (
    <div className="mx-auto mt-10 flex  h-fit w-5/12 flex-col  justify-center">
      <p className="text-center text-2xl font-semibold">
        Thanks Nick, what would you like to achieve at MentorLand? Inspiration
        and entertainment
      </p>
      <div className="mx-auto flex w-2/3 flex-col gap-1 py-3 text-[#fefffe]">
        {selectedOptions.map((val, i) => (
          <div
            className={`flex rounded-md bg-[#1c2133] px-8 py-4 ${
              val.checked ? "bg-gray-700" : ""
            }`}
            onClick={() => handleOptionSelect(val.id)}
            key={i}
          >
            <input
              type="checkbox"
              // {...register(`wantToAchieve[${val.value}]`)}
              // name={`wantToAchieve[${val.value}]`}
              className="my-auto mr-1 h-4 w-4 rounded bg-[#384256] text-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              checked={val.checked}
              onChange={() => handleOptionSelect(val.id)}
            />
            <label className="text-md ms-2 font-medium text-gray-300">
              {val.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StageThree;
