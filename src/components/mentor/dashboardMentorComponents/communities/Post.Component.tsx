/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import { communityPostApi } from "@/app/api/communityPost/communityPost.api";
import { communityRulesApi } from "@/app/api/communityRules/communityRules.api";
import { communityRulesGetApi } from "@/app/api/communityRules/getCommunityRules.api";
import { uploadImage } from "@/app/api/uploadImage/uploadImage.api";
import { type ICreateCommunityRules } from "@/schema/communityRules/communityRules.schema";
import {
  type ICreateCommunityPost,
  communityPostData,
} from "@/schema/createCommunityPost/createCommunityPost.schema";
import { setSession } from "@/utils/jwt";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

export default function CreatePost() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    [],
  );
  const [stage, setStage] = useState(1);

  const [postText, setPostText] = useState("");
  // const quillRef = useRef<any>(null);
  console.log(postText, "postText");

  const { register, handleSubmit, setValue } = useForm<ICreateCommunityPost>();

  const { mutate: postData } = useMutation({
    mutationFn: communityPostApi,
    onSuccess: (e) => {
      console.log("success", e);
      setValue("multimedia", e.data.file.url, { shouldTouch: true });
      setSession(e.data.token); //here will set the token into the session for axios header
      toast.success("Post Created Successfully");
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
    },
  });

  const onSubmit = async (data: ICreateCommunityPost) => {
    postData(data);
    // console.log(getValues(), quillRef.current.getEditor(), "something in post");
  };

  //upload image section
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const { mutate } = useMutation({
    mutationFn: uploadImage,
    onSuccess: (e) => {
      toast.success("Image Upload Successfully");
      console.log("success", e);
      setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      setValue("multimedia", e.data.file.url, { shouldTouch: true });
      setImage(e.data.file.url);
    },
  });

  const handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="mt-[78px] h-auto w-full bg-[#f7f9fb] pt-[50px] text-black">
      <div className=" mx-auto flex  h-auto w-[80%] flex-col gap-8 p-5">
        <h1 className="text-2xl font-bold">Create a new Post</h1>
        <div className=" flex w-full justify-between p-3">
          {/*  form section */}
          <div className="  bg-white">
            <div className="h-[522px] w-[836px] p-[30px]">
              <div className=" h-[462px] w-[776px]">
                <ul className=" flex  h-[52px] w-full bg-white">
                  <li
                    className={`h-[52px] ${
                      stage === 1 ? " bg-[#F3F5FA]" : "bg-[white]"
                    } flex cursor-pointer items-center gap-2 rounded-sm p-3 px-2`}
                    onClick={() => setStage(1)}
                  >
                    <Image
                      src="/post-svg/Frame.svg"
                      alt="frame"
                      width={20}
                      height={20}
                    />
                    <p className="text-nowrap text-[16px] font-semibold leading-5 text-[#1A458F]">
                      Create Post
                    </p>
                  </li>
                  <li
                    className={`h-[52px] ${
                      stage === 2 ? " bg-[#F3F5FA]" : "bg-[white]"
                    } flex cursor-pointer items-center gap-2 rounded-sm p-3 px-2`}
                    onClick={() => setStage(2)}
                  >
                    <Image
                      src="/post-svg/two.svg"
                      alt="frame"
                      width={20}
                      height={20}
                    />
                    <p className="text-nowrap text-[16px] font-semibold leading-5 text-[#1A458F]">
                      Multimedia
                    </p>
                  </li>
                  <li
                    className={`h-[52px] ${
                      stage === 3 ? " bg-[#F3F5FA]" : "bg-[white]"
                    } flex cursor-pointer items-center gap-2 rounded-sm p-3 px-2`}
                    onClick={() => setStage(3)}
                  >
                    <Image
                      src="/post-svg/three.svg"
                      alt="frame"
                      width={20}
                      height={20}
                    />
                    <p className="text-nowrap text-[16px] font-semibold leading-5 text-[#1A458F]">
                      Links
                    </p>
                  </li>
                </ul>
                <div className=" h-[410px] w-[776px] bg-[#f7f9fb] p-5">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" flex flex-col gap-10"
                  >
                    {stage === 1 && (
                      <>
                        <input
                          type="text"
                          placeholder="Title"
                          {...register("title")}
                          className="h-[56px] w-full rounded-md border border-gray-300 px-3 py-2 placeholder-black outline-none"
                        />
                        <div className="bg-white">
                          <ReactQuill
                            theme="snow"
                            // ref={quillRef}
                            value={postText}
                            onChange={(e) => {
                              console.log(e, "e");
                              setPostText(e);
                              setValue(
                                "postText",
                                e
                                // quillRef?.current?.getEditor().container
                                //   .textContent,
                                // {
                                //   shouldTouch: true,
                                // },
                              );
                            }}
                            className="h-40"
                          />
                        </div>
                      </>
                    )}
                    {stage === 2 && (
                      <>
                        <div className="mt-10 flex w-full flex-col items-center justify-center">
                          <label
                            htmlFor="imageInput"
                            className="cursor-pointer"
                          >
                            <div className="flex h-40 w-40 items-center justify-center rounded border-2 border-dashed border-gray-500 bg-white text-center">
                              {image ? (
                                <Image
                                  alt="Profile Picture"
                                  className="h-full w-full"
                                  width={0}
                                  height={0}
                                  src={image as string}
                                ></Image>
                              ) : (
                                <Image
                                  src="/Upload-icon.svg"
                                  alt="upload file"
                                  width={68}
                                  height={60}
                                />
                              )}
                            </div>
                          </label>
                          <div className="mt-4">
                            <h1>Upload Multimedia</h1>
                          </div>
                          <input
                            id="imageInput"
                            type="file"
                            accept="image/jpeg,image/png,image/jpg"
                            className="hidden"
                            onChange={handleImageInput}
                          />
                        </div>
                      </>
                    )}
                    {stage === 3 && (
                      <>
                        <div>
                          <input
                            type="text"
                            placeholder="Link"
                            {...register("links")}
                            className="h-[56px] w-full rounded-md border border-gray-300 px-3 py-2 placeholder-black outline-none"
                          />
                        </div>
                      </>
                    )}
                    <div className=" mt-5 flex w-full justify-end">
                      <button
                        type="submit"
                        className=" h-[56px] rounded-md border border-gray-300 bg-[#2769D9] px-3 py-2 font-bold text-white focus:outline-none "
                      >
                        Publish
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Community Rules */}
          <CommunityRules />
        </div>
      </div>
    </div>
  );
}

export function CommunityRules() {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState<Array<string>>([]);
  const { handleSubmit, setValue } = useForm<ICreateCommunityRules>();

  const { data } = useQuery({
    queryKey: ["communityRules"],
    queryFn: () => communityRulesGetApi(),
  });

  console.log(links, "api community rules data");

  const handleAddClick = () => {
    const updated = [...links, link];
    setLinks(updated);
    setLink("");
    console.log(updated, "links");
    setValue("communityRules", updated, { shouldTouch: true });
  };

  const { mutate: RulesData } = useMutation({
    mutationFn: communityRulesApi,
    onSuccess: (e) => {
      console.log("success", e);
      setSession(e.data.token); //here will set the token into the session for axios header
      toast.success("Rules add Successfully");
    },
  });

  const onSubmit = async (data: ICreateCommunityRules) => {
    RulesData(data);
    console.log(data, "data of link");
    // console.log(getValues(), quillRef.current.getEditor(), "something in post");
  };

  return (
    <div className=" flex h-[578px] w-[404px] flex-col gap-4 border bg-white p-4">
      <div className=" flex flex-col gap-4 ">
        <h2 className=" text-[20px] font-bold leading-7 ">Community Rules</h2>
        <p className="  text-base  font-medium tracking-tighter">
          Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.
          Halvah croissant candy canes bonbon candy. Apple pie jelly beans
          topping carrot cake danish tart cake cheesecake.
        </p>
      </div>
      <ol className=" list ml-7 flex list-decimal flex-col gap-4">
        {/* {data &&
          data?.map((val: any, i: any) => (
            <>
              <li className="  text-base  tracking-tighter font-medium pl-3">
                {val}
              </li>
            </>
          ))} */}
        <li className="  pl-3  text-base font-medium tracking-tighter">
          Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.
          Halvah croissant candy canes bonbon candy. Apple pie jelly beans
          topping carrot cake danish tart cake cheesecake.
        </li>
      </ol>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-center justify-between">
          <input
            type="text"
            placeholder="Add"
            onChange={
              (e) => setLink(e.target.value)
              // setValue("communityRules", links, { shouldTouch: true });
            }
            className="h-[50px] w-[70%] rounded-md border border-gray-300 px-3 py-2 placeholder-black outline-none"
          />
          <button
            type="button"
            onClick={handleAddClick}
            className="rounded-md border border-gray-300 bg-[#2769D9] px-4 py-2 font-bold text-white focus:outline-none "
          >
            Add
          </button>
        </div>
        <div className=" mt-4 flex w-full items-center justify-center">
          <button
            type="submit"
            className=" rounded-md border border-gray-300 bg-[#2769D9] px-3 py-2 font-bold text-white focus:outline-none "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
