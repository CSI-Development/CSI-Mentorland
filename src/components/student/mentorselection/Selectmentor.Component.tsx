/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
// import mentor1 from "../../../../public/sampleMentor/mentor1.png";
// import mentor2 from "../../../../public/sampleMentor/mentor2.png";
// import mentor3 from "../../../../public/sampleMentor/mentor3.png";
// import mentor4 from "../../../../public/sampleMentor/mentor4.png";
// import mentor5 from "../../../../public/sampleMentor/mentor5.png";
// import mentor6 from "../../../../public/sampleMentor/mentor6.png";
// import mentor7 from "../../../../public/sampleMentor/mentor7.png";
// import mentor8 from "../../../../public/sampleMentor/mentor8.png";
// import mentor9 from "../../../../public/sampleMentor/mentor9.png";
// import mentor10 from "../../../../public/sampleMentor/mentor10.png";
// import mentor11 from "../../../../public/sampleMentor/mentor11.png";
// import mentor12 from "../../../../public/sampleMentor/mentor12.png";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { categoryNameGetApi } from "@/app/api/createStudent/getCategoryName";
import { getMentors } from "@/app/api/createStudent/getMontors";

function SelectmentorComponent() {
  const [category, setCategory] = useState<string[]>([]);
  // const [dataResponse, setDataResponse] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useQuery({
    queryKey: ["mentors", category],
    queryFn: () => getMentors(category),
    enabled: category.length > 0,
  });

  const [selectedMentors, setSelectedMentors] = useState<any>([]);

  // const [selectedMentors, setSelectedMentors] = useState([
  //   {
  //     id: 1,
  //     img: mentor1,
  //     value: "David",
  //     checked: false,
  //   },
  //   {
  //     id: 2,
  //     img: mentor2,
  //     value: "steve",
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     img: mentor3,
  //     value: "cook",
  //     checked: false,
  //   },
  //   {
  //     id: 4,
  //     img: mentor4,
  //     value: "David",
  //     checked: false,
  //   },
  //   {
  //     id: 5,
  //     img: mentor5,
  //     value: "steve",
  //     checked: false,
  //   },
  //   {
  //     id: 6,
  //     img: mentor6,
  //     value: "cook",
  //     checked: false,
  //   },
  //   {
  //     id: 7,
  //     img: mentor7,
  //     value: "David",
  //     checked: false,
  //   },
  //   {
  //     id: 8,
  //     img: mentor8,
  //     value: "steve",
  //     checked: false,
  //   },
  //   {
  //     id: 9,
  //     img: mentor9,
  //     value: "cook",
  //     checked: false,
  //   },
  //   {
  //     id: 10,
  //     img: mentor10,
  //     value: "David",
  //     checked: false,
  //   },
  //   {
  //     id: 11,
  //     img: mentor11,
  //     value: "steve",
  //     checked: false,
  //   },
  //   {
  //     id: 12,
  //     img: mentor12,
  //     value: "cook",
  //     checked: false,
  //   },
  // ]);

  useEffect(() => {
    if (data) {
      console.log("data from query", data);
      const listMentor = data?.data?.map((item: any) => ({
        ...item,
        checked: false,
      }));
      setSelectedMentors(listMentor);
    }
  }, [data]);
  // console.log("dataResponse", dataResponse);

  const { setValue, getValues } = useFormContext();

  const handleOptionSelect = (id: number) => {
    // Toggle selection for the clicked option
    const arr = selectedMentors.map((item: any) => {
      console.log(item, id, item, "iii");
      if (item?._id === id)
        return { ...item, checked: !item.checked };
      else return item;
    });
    setSelectedMentors(arr);
    const val = arr
      .filter((item: any) => item.checked)
      .map((ele: any) => ele.user);
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

  useEffect(() => {
    const data = getValues();
    console.log(data, "data");
    setCategory(data?.subjectWantToLearn);
  }, [getValues]);

  return (
    <div className="scrollbar-hide overflow-hidden bg-[#010d27]">
      <div className="h-screen pt-20">
        <div className="scrollbar-hide h-full w-full overflow-y-scroll pb-5">
          <p className="mt-4 text-center text-2xl font-semibold">
            We have {selectedMentors.length} Mentors that might interest you
          </p>
          <div className="mx-auto mb-2 mt-3 flex w-7/12 text-xl">
            <p className="mr-2 font-semibold">Coaching</p>
            <p>
              {selectedMentors?.length} Courses <span></span>
            </p>
          </div>
          <div className="lg:7/12 mx-auto grid w-11/12 grid-cols-2 gap-4 md:w-7/12 md:grid-cols-3 lg:grid-cols-4 ">
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              selectedMentors.length > 0 &&
                selectedMentors?.map((val: any, i: any) => {
                  return (
                    <div
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                      key={i}
                      onClick={() => handleOptionSelect(val?._id)}
                      className={`cursor-pointer overflow-hidden rounded-sm bg-blue-gray-900 h-80 ${val?.checked ? "rounded-3xl border-4 border-yellow-500" : ""}`}
                    >
                      <div className="w-full h-[60%] overflow-hidden">
                      <Image
                        className={`rounded`}
                        alt={`mentor-${i}`}
                        height={1000}
                        width={1000}
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        src={val?.mentorAvatar}
                      />
                      </div>
                      <h1 className="p-3 text-white">
                        {val?.firstName} {val?.lastName}
                      </h1>
                      <input
                        type="checkbox"
                        // checked={val.checked}
                        onChange={() =>
                          handleOptionSelect(val?._id)
                        }
                        className="hidden"
                      />
                    </div>
                  );
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectmentorComponent;
