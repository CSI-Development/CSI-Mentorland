"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useFormContext } from "react-hook-form";

function StageFive() {
  const { setValue } = useFormContext();

  const [link, setLink] = useState("");
  const [links, setLinks] = useState<Array<string>>([]);

  const handleAddClick = () => {
    const updated = [...links, link];
    setLinks(updated);
    setLink("");
    setValue("recentVideoLink", updated, { shouldTouch: true });
    console.log(updated, "links");
  };

  const handleCancel = (indexToRemove: any) => {
    setLinks((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="w-8/12 mx-auto mt-10  h-fit flex flex-col justify-center">
      <p className="text-center font-semibold text-2xl">
        Have you done any educational videos recently
      </p>

      <p className="text-[#fefffe] text-center mt-8 mb-3">
        If so, please send us the links to see how how you perform in front of
        the camera
      </p>

      <div className="flex flex-col mt-7 gap-3 w-2/3 mx-auto py-3 text-[#fefffe]">
        <div className="text-xs">Video Link - Youtube,Vimeo,etc</div>
        <div className="w-full flex gap-4">
          <input
            type="text"
            placeholder="http:"
            className="border text-[#B9BABA] rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-full"
            onChange={(e) => setLink(e.target.value)}
          ></input>
          <button
            type="button"
            className="bg-primary text-white rounded-lg py-1 px-4 font-semibold"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {links.map((item, index) => {
            return (
              <div
                className="flex justify-between items-center gap-4"
                key={index}
              >
                {/* <video
                  src={item}
                  className="w-2/12 h-12 object-cover"
                  controls
                /> */}
                <embed
                  src={item}
                  className="w-[108px] h-[60px]"
                ></embed>
                <h1 className="flex-1">{item}</h1>

                <Icon
                  icon="mingcute:close-fill"
                  className="w-5 h-5"
                  color="#FFD600"
                  onClick={() => handleCancel(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex flex-col gap-3"> */}
    </div>
  );
}

export default StageFive;
