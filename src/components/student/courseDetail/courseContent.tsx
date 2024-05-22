/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import DurationComponent from "@/components/mentor/courseDetail/durationComponent";

function CourseContent({
  data,
  activeLecture,
  setActiveLecture,
  setQuizTest,
}: any) {
  const [courseData, setCourseData] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(courseData);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleActiveLecture = (lecture: any, section: any, quiz: any) => {
    const updatedActive = [lecture, section, quiz];
    console.log(updatedActive);

    setActiveLecture(updatedActive);
    setQuizTest(false);

    // setActiveLecture(!activeLecture)
  };

  useEffect(() => {
    if (data) {
      setCourseData(data);
    }
  }, [data]);

  const [openSectionIndex, setOpenSectionIndex] = useState<any>();

  useEffect(() => {
    setOpenSectionIndex(0);
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef?.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleSection = (index: any) => {
    setOpenSectionIndex((prevIndex: any) =>
      prevIndex === index ? null : index,
    );
  };

  const handleQuizTest = () => {
    setQuizTest(true);
  };

  return (
    <div className=" grid grid-cols-1 gap-10 py-20 pr-20">
      <div>
        <h1 className="text-2xl font-bold text-[#2769D9]">
          {courseData?.name}
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-5">
          <p>{courseData?.description}</p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-[#2769D9]">Course Content</h1>
        <div className="mt-8 grid grid-cols-1 gap-5 bg-[#F3F5FA] p-3">
          <div>
            {courseData?.sections?.map((section: any, index: number) => (
              <div key={index} className="border-b border-[#B9BABA] py-4">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => toggleSection(index)}
                >
                  <h1 className="text-xl font-bold">
                    Section {index + 1}: {section.title}
                  </h1>
                  {openSectionIndex === index ? (
                    <MdKeyboardArrowUp className="text-4xl font-bold text-[#2769d9]" />
                  ) : (
                    <MdKeyboardArrowDown className="text-4xl font-bold text-[#2769d9]" />
                  )}
                </div>
                {/* Render content only if the section is open */}
                {openSectionIndex === index && (
                  <div className="z-10 mt-2 w-full rounded bg-white p-5">
                    <ul className="grid grid-cols-1 gap-10 py-2">
                      {section.lectures.map(
                        (lecture: any, lectureIndex: number) => (
                          <>
                            <li key={lectureIndex}>
                              <div className="flex">
                                <input
                                  type="checkbox"
                                  // checked={activeLecture}
                                  disabled
                                  height={20}
                                  width={20}
                                  className="h-[20px] w-[20px] border-2 border-[#1A458F]"
                                />
                                <div className="ml-4">
                                  <p
                                    onClick={() =>
                                      handleActiveLecture(
                                        lecture,
                                        section,
                                        section.quiz,
                                      )
                                    }
                                    className="cursor-pointer"
                                  >
                                    {lecture.title}
                                  </p>
                                  <DurationComponent
                                    duration={lecture.duration}
                                  />
                                </div>
                              </div>
                            </li>
                          </>
                        ),
                      )}
                      <div className="flex">
                        <input
                          type="checkbox"
                          disabled
                          //  checked={activeLecture}
                          height={20}
                          width={20}
                          className="h-[20px] w-[20px] border-2 border-[#1A458F]"
                        />
                        <div className="ml-4">
                          <p
                            onClick={() => handleQuizTest()}
                            className="cursor-pointer"
                          >
                            Quiz Test
                          </p>
                        </div>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-2xl font-bold text-[#2769D9]">
          Watched this Lesson
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/svg/user.svg"
                alt="user"
                width={50}
                height={50}
                className="rounded-full bg-[#2769d9] p-[1px]"
              />
              <h1 className="ml-2 font-bold">Grey Greteymnh</h1>
            </div>
            <div>
              <h1 className="font-bold">65%</h1>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/svg/user.svg"
                alt="user"
                width={50}
                height={50}
                className="rounded-full bg-[#2769d9] p-[1px]"
              />
              <h1 className="ml-2 font-bold">Grey Greteymnh</h1>
            </div>
            <div>
              <h1 className="font-bold">65%</h1>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/svg/user.svg"
                alt="user"
                width={50}
                height={50}
                className="rounded-full bg-[#2769d9] p-[1px]"
              />
              <h1 className="ml-2 font-bold">Grey Greteymnh</h1>
            </div>
            <div>
              <h1 className="font-bold">65%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
