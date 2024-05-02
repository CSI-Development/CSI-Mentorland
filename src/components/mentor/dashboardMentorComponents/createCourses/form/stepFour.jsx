"use-client";
// import axios from "axios";
import React, { useEffect, useState } from "react";
// import { FaPlayCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";

function StepFour({ handlePrevStep }) {
  
  return (
    <div className="my-20 w-[587px]">
      <div className="w-full text-center p-2">
        <h1 className="text-2xl font-bold font-popins">
          Course Sections and Lectures{" "}
        </h1>
        <p className="mt-5">
          Put a bird on it glossier tumblr, kombucha tacos swag williamsburg
          ascot viral messenger bag celiac pitchfork twee. Bushwick selvage woke
          af helvetica.
        </p>
      </div>
      <div className="mt-8 bg-white p-5 rounded-md shadow-sm w-[587px]">
        <div className="flex w-full justify-between border-b border-[#B9BABA] pb-[20px]">
          <h1 className="flex items-center font-bold text-base text-[#1A458F]">
            Section 1: Welcome and Introduction{" "}
            <LuPencil className="text-black ml-2" />
          </h1>
          <IoIosArrowDown className="text-2xl text-[#2769D9]" />
        </div>
        <div className="mt-5 border-b border-[#B9BABA] pb-2">
          <label htmlFor="sectionName" className="text-[#1A458F] text-base">
            Section Name
          </label>
          <br />
          <input
            id="sectionName"
            name="sectionName"
            type="text"
            placeholder="Add Section Name"
            className="w-full h-[55px] border bg-white border-[#B9BABA] p-[10px] outline-none rounded-md"
          />{" "}
          <br />
          <br />
          <label htmlFor="describeSection" className="text-[#1A458F] text-base">
            What would the students be able to after finishing this section?
          </label>
          <br />
          <textarea
            id="describeSection"
            name="describeSection"
            type="text"
            placeholder="Describe this section"
            className="w-full h-[124px] border bg-white border-[#B9BABA] p-[10px] outline-none rounded-md"
          />{" "}
          <br />
        </div>
        <div className="mt-6 border-b border-[#B9BABA] p-[10px]">
          <h1 className="text-xl text-[#2769D9] font-bold">Lectures</h1>
          { (
            <div className="flex my-1">
              <video
                src={""}
                className="w-[106px] h-[85px] bg-slate-200"
              ></video>
              <h1 className="px-5 text-[#2769d9] font-semibold">
                Lesson 01:{" "}
                <span className="font-normal text-slate-600">
                  {" "}
                  Has visitor law attacks pretend you calling own excited
                  painted.
                </span>
              </h1>
              <p className="flex text-slate-500">
                <FaPlayCircle className="mt-1 mr-1 text-black" /> 00:48:00
              </p>
            </div>
          ) }
        </div>
        <div className="mt-5 w-full">
          <div className="">
            <button
              type="button"
              className="p-[5px] border font-bold border-[#B9BABA]"
            >
              Upload Video
            </button>
            <button
              type="button"
              className="p-[5px] border font-bold border-[#B9BABA] ml-1 bg-[#EAF2EF]"
            >
              Add from Library
            </button>
          </div>
          <br />
          <div className="w-full border border-[#B9BABA] p-8">
            <div className="w-full text-center">
              <div className="w-[486px] flex">
                <div className="px-4 w-full h-[44px] bg-white flex items-center text-[#b9baba] border border-[#B9BABA]">
                  <label htmlFor="file">
                    <p>{"No File Selected"}</p>
                  </label>
                </div>
                <label
                  htmlFor="file"
                  className="bg-[#2769D9] cursor-pointer text-white font-bold px-8 py-3 whitespace-nowrap rounded-r-lg h-[44px]"
                  >
                  Select Video
                </label>
              </div>
              <button
                className="mt-5 bg-[#2769D9] cursor-pointer text-white font-bold px-8 py-3 whitespace-nowrap rounded-lg h-[44px]"
                type="button"
              >
                Upload
              </button>
            </div>
            <input
              id="file"
              name="file"
              type="file"
              placeholder="Describe this section"
              hidden
            />
            <br />
            <label
              htmlFor="describeLesson"
              className="text-[#1A458F] text-base"
            >
              Enter a brief descriptionof this lesson
            </label>
            <br />
            <textarea
              id="describeLesson"
              name="describeLesson"
              type="text"
              placeholder="Describe this Lesson"
              className="w-full h-[124px] border bg-white border-[#B9BABA] p-[10px] outline-none rounded-md"
            />
          </div>{" "}
        </div>
      </div>
      <div className="flex w-full justify-between mt-10">
        <button
          type="button"
          className="bg-[#5D6475] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold"
          id="previous"
          onClick={handlePrevStep}
        >
          Previous
        </button>
        {/* <button onClick={""}>Register a learner</button> */}
        <button
          type="submit"
          className="bg-[#2769D9] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold"
        >
          Publish Course
        </button>
      </div>
    </div>
  );
}

export default StepFour;
