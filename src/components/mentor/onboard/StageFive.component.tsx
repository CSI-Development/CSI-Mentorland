/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "@/app/api/uploadImage/uploadImage.api";
import { toast } from "react-toastify";
import Image from "next/image";

function StageFive() {
  const [image, setImage] = useState<string | ArrayBuffer | null>();
  const { setValue } = useFormContext();

  const [link, setLink] = useState("");
  const [links, setLinks] = useState<any>([]);

  const { mutate } = useMutation({
    mutationFn: uploadImage,
    onSuccess: (e) => {
      console.log("success", e);
      // setValue("logo", e.data.file.url, { shouldTouch: true });
      setImage(e.data.file.url);
      toast.success("Thumbnail uploaded succesfully");
      // setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      // setValue("studentAvatar", e.data.file.url, { shouldTouch: true });
    },
  });

  const handleAddClick = () => {
    console.log(link, image, "hett");
    if (link && image) {
      const updated = [
        ...links,
        {
          url: link,
          thumbnail: image,
        },
      ];
      setLinks(updated);
      setLink("");
      setValue("recentVideoLink", updated, { shouldTouch: true });
      console.log(updated, "links");
    } else {
      toast.error("Please fill both fields");
    }
  };

  const handleCancel = (indexToRemove: number) => {
    setLinks((prevTodos: any) =>
      prevTodos.filter((_: any, index: number) => index !== indexToRemove),
    );
  };

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
    <div className="mx-auto mt-10 flex  h-fit w-8/12 flex-col justify-center">
      <p className="text-center text-2xl font-semibold">
        Have you done any educational videos recently
      </p>

      <p className="mb-3 mt-8 text-center text-[#fefffe]">
        If so, please send us the links to see how how you perform in front of
        the camera
      </p>

      <div className="mx-auto mt-7 flex w-2/3 flex-col gap-3 py-3 text-[#fefffe]">
        <div className="text-xs">Video Link - Youtube,Vimeo,etc</div>
        <div className="flex w-full items-start gap-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="http:"
              value={link}
              className="w-full rounded-lg border border-[#3c4252] bg-[#141b2b] px-4 py-3 text-[#B9BABA]"
              onChange={(e) => {
                console.log(e);
                setLink(e.target.value);
              }}
            ></input>
            <div className="mt-1">
              <label htmlFor="description" className="text-base">
                Thumbnail
              </label>
            </div>
            <div className="mt-4">
              <div>
                <label
                  htmlFor="thumbnail"
                  className="cursor-pointer rounded bg-[#2769d9] px-3 py-3 text-lg font-semibold text-white"
                >
                  Select Thmbnail
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
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
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-1 font-semibold text-white"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {links.map((item: any, index: number) => {
            return (
              <div
                className="flex items-center justify-between gap-4"
                key={index}
              >
                {/* <video
                  src={item}
                  className="w-2/12 h-12 object-cover"
                  controls
                /> */}
                <Image
                  width={120}
                  alt=""
                  height={60}
                  src={item?.thumbnail}
                  className="h-[60px] w-[108px]"
                />
                <h1 className="flex-1">{item.url}</h1>

                <Icon
                  icon="mingcute:close-fill"
                  className="h-5 w-5"
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
