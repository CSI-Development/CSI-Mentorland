"use client";
import React, { useState } from "react";
import mentor1 from "../../../../public/sampleMentor/mentor1.png";
import mentor2 from "../../../../public/sampleMentor/mentor2.png";
import mentor3 from "../../../../public/sampleMentor/mentor3.png";
import mentor4 from "../../../../public/sampleMentor/mentor4.png";
import mentor5 from "../../../../public/sampleMentor/mentor5.png";
import mentor6 from "../../../../public/sampleMentor/mentor6.png";
import mentor7 from "../../../../public/sampleMentor/mentor7.png";
import mentor8 from "../../../../public/sampleMentor/mentor8.png";
import mentor9 from "../../../../public/sampleMentor/mentor9.png";
import mentor10 from "../../../../public/sampleMentor/mentor10.png";
import mentor11 from "../../../../public/sampleMentor/mentor11.png";
import mentor12 from "../../../../public/sampleMentor/mentor12.png";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

function SelectmentorComponent() {
  // const mentorsList: StaticImageData[] = [
  //   mentor1,
  //   mentor2,
  //   mentor3,
  //   mentor4,
  //   mentor5,
  //   mentor6,
  //   mentor7,
  //   mentor8,
  //   mentor9,
  //   mentor10,
  //   mentor11,
  //   mentor12,
  // ];

  const [selectedMentors, setSelectedMentors] = useState([
    {
      id: 1,
      img: mentor1,
      value: "David",
      checked: false,
    },
    {
      id: 2,
      img: mentor2,
      value: "steve",
      checked: false,
    },
    {
      id: 3,
      img: mentor3,
      value: "cook",
      checked: false,
    },
    {
      id: 4,
      img: mentor4,
      value: "David",
      checked: false,
    },
    {
      id: 5,
      img: mentor5,
      value: "steve",
      checked: false,
    },
    {
      id: 6,
      img: mentor6,
      value: "cook",
      checked: false,
    },
    {
      id: 7,
      img: mentor7,
      value: "David",
      checked: false,
    },
    {
      id: 8,
      img: mentor8,
      value: "steve",
      checked: false,
    },
    {
      id: 9,
      img: mentor9,
      value: "cook",
      checked: false,
    },
    {
      id: 10,
      img: mentor10,
      value: "David",
      checked: false,
    },
    {
      id: 11,
      img: mentor11,
      value: "steve",
      checked: false,
    },
    {
      id: 12,
      img: mentor12,
      value: "cook",
      checked: false,
    },
  ]);

  const { setValue } = useFormContext();

  const handleOptionSelect = (id: number) => {
    // Toggle selection for the clicked option
    const arr = selectedMentors.map((item: any) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectedMentors(arr);
    const val = arr.filter((item) => item.checked).map((ele)=> ele.value);
    setValue("selectedMentors", val, { shouldTouch: true });
  };


  // const toggleSelectMentor = (mentor: StaticImageData) => {
  //   if (selectedMentors.includes(mentor)) {
  //     // If mentor is already selected, remove it
  //     setSelectedMentors((prevSelected) =>
  //       prevSelected.filter((item) => item !== mentor)
  //     );
  //   } else {
  //     // If mentor is not selected, add it
  //     setSelectedMentors((prevSelected) => [...prevSelected, mentor]);
  //   }
  // };

  return (
    <div className="overflow-hidden bg-[#010d27] scrollbar-hide">
      <div className="h-screen pt-20">
        <div className="w-full h-full overflow-y-scroll scrollbar-hide pb-5">
          <p className="text-center font-semibold text-2xl mt-4">
            We have {selectedMentors.length} Mentors that might interest you
          </p>
          <div className="w-7/12 flex mx-auto text-xl mt-3 mb-2">
            <p className="font-semibold mr-2">Coaching</p>
            <p>8 Courses <span></span></p>
          </div>
          <div className="w-11/12 grid grid-cols-2 md:grid-cols-3 md:w-7/12 lg:grid-cols-4 lg:7/12 gap-4 mx-auto ">
            {selectedMentors.map((val, i) => (
              <div
                key={i}
                onClick={() => handleOptionSelect(val.id)}
                className={`relative cursor-pointer`}
              >
                <Image
                  className={`rounded-3xl  ${
                    val.checked
                      ? " border-yellow-500 border-4 rounded-3xl my-auto "
                      : ""
                  }`}
                  alt={`mentor-${i}`}
                  src={val.img}
                />
                <input
                  type="checkbox"
                  checked={val.checked}
                  onChange={() => handleOptionSelect(val.id)}
                  className="hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectmentorComponent;
