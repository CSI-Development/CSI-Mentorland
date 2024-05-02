"use client";
import { communityPostApi } from "@/api/communityPost/communityPost.api";
import { communityRulesApi } from "@/api/communityRules/communityRules.api";
import { communityRulesGetApi } from "@/api/communityRules/getCommunityRules.api";
import { uploadApi } from "@/api/file/upload.api";
import { uploadImage } from "@/api/uploadImage/uploadImage.api";
import { ICreateCommunityRules } from "@/schema/communityRules/communityRules.schema";
import {
  ICreateCommunityPost,
  communityPostData,
} from "@/schema/createCommunityPost/createCommunityPost.schema";
import { setSession } from "@/utils/jwt";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

export default function CreatePost() {
  const [stage, setStage] = useState(1);

  const [postText, setPostText] = useState("");
  const quillRef = useRef(null);
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

  const onSubmit = async (data: ICreateCommunityPost, e: any) => {
    e.preventDefault();
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
    },
  });

  const handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setImage(reader.result);
        const form = new FormData();
        form.append("file", file);
        console.log(form);
        const res = await uploadApi(form);
        console.log(res);
      };
      reader.readAsDataURL(file);
      const formData: any = new FormData();
      formData.append("file", file);
      mutate(formData);
    }
  };

  return (
    <div className="w-full h-auto bg-[#f7f9fb] mt-[78px] pt-[50px] text-black">
      <div className=" w-[80%] h-auto  mx-auto p-5 flex flex-col gap-8">
        <h1 className="font-bold text-2xl">Create a new Post</h1>
        <div className=" w-full p-3 flex justify-between">
          {/*  form section */}
          <div className="  bg-white">
            <div className="w-[836px] h-[522px] p-[30px]">
              <div className=" w-[776px] h-[462px]">
                <ul className=" w-full  h-[52px] bg-white flex">
                  <li
                    className={`h-[52px] ${
                      stage === 1 ? " bg-[#F3F5FA]" : "bg-[white]"
                    } p-3 flex gap-2 items-center rounded-sm px-2 cursor-pointer`}
                    onClick={() => setStage(1)}
                  >
                    <Image
                      src="/post-svg/Frame.svg"
                      alt="frame"
                      width={20}
                      height={20}
                    />
                    <p className="text-nowrap font-semibold text-[#1A458F] text-[16px] leading-5">
                      Create Post
                    </p>
                  </li>
                  <li
                    className={`h-[52px] ${
                      stage === 2 ? " bg-[#F3F5FA]" : "bg-[white]"
                    } p-3 flex gap-2 items-center rounded-sm px-2 cursor-pointer`}
                    onClick={() => setStage(2)}
                  >
                    <Image
                      src="/post-svg/two.svg"
                      alt="frame"
                      width={20}
                      height={20}
                    />
                    <p className="text-nowrap font-semibold text-[#1A458F] text-[16px] leading-5">
                      Multimedia
                    </p>
                  </li>
                  <li
                    className={`h-[52px] ${
                      stage === 3 ? " bg-[#F3F5FA]" : "bg-[white]"
                    } p-3 flex gap-2 items-center rounded-sm px-2 cursor-pointer`}
                    onClick={() => setStage(3)}
                  >
                    <Image
                      src="/post-svg/three.svg"
                      alt="frame"
                      width={20}
                      height={20}
                    />
                    <p className="text-nowrap font-semibold text-[#1A458F] text-[16px] leading-5">
                      Links
                    </p>
                  </li>
                </ul>
                <div className=" w-[776px] h-[410px] bg-[#f7f9fb] p-5">
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
                          className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md placeholder-black outline-none"
                        />
                        <div className="bg-white">
                          <ReactQuill
                            theme="snow"
                            ref={quillRef}
                            value={postText}
                            onChange={(e) => {
                              console.log(e, "e");
                              setPostText(e);
                              setValue(
                                "postText",
                                quillRef.current.getEditor().container
                                  .textContent,
                                {
                                  shouldTouch: true,
                                }
                              );
                            }}
                            className="h-40"
                          />
                        </div>
                      </>
                    )}
                    {stage === 2 && (
                      <>
                        <div className="w-full flex flex-col justify-center items-center mt-10">
                          <label
                            htmlFor="imageInput"
                            className="cursor-pointer"
                          >
                            <div className="text-center bg-white w-40 h-40 flex items-center justify-center rounded border-2 border-dashed border-gray-500">
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
                            accept="image/*"
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
                            className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md placeholder-black outline-none"
                          />
                        </div>
                      </>
                    )}
                    <div className=" w-full flex justify-end mt-5">
                      <button
                        type="submit"
                        className=" h-[56px] bg-[#2769D9] px-3 py-2 border text-white font-bold border-gray-300 rounded-md focus:outline-none "
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

  const onSubmit = async (data: ICreateCommunityRules, e: any) => {
    e.preventDefault();
    RulesData(data);
    console.log(data, "data of link");
    // console.log(getValues(), quillRef.current.getEditor(), "something in post");
  };

  return (
    <div className=" w-[404px] h-[578px] bg-white border p-4 flex flex-col gap-4">
      <div className=" flex flex-col gap-4 ">
        <h2 className=" text-[20px] leading-7 font-bold ">Community Rules</h2>
        <p className="  text-base  tracking-tighter font-medium">
          Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.
          Halvah croissant candy canes bonbon candy. Apple pie jelly beans
          topping carrot cake danish tart cake cheesecake.
        </p>
      </div>
      <ol className=" flex flex-col gap-4 list list-decimal ml-7">
        {/* {data &&
          data?.map((val: any, i: any) => (
            <>
              <li className="  text-base  tracking-tighter font-medium pl-3">
                {val}
              </li>
            </>
          ))} */}
        <li className="  text-base  tracking-tighter font-medium pl-3">
          Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.
          Halvah croissant candy canes bonbon candy. Apple pie jelly beans
          topping carrot cake danish tart cake cheesecake.
        </li>
      </ol>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex justify-between items-center">
          <input
            type="text"
            placeholder="Add"
            onChange={(e) => 
              setLink(e.target.value)
                // setValue("communityRules", links, { shouldTouch: true });
            }
            className="w-[70%] h-[50px] px-3 py-2 border border-gray-300 rounded-md placeholder-black outline-none"
          />
          <button
            type="button"
            onClick={handleAddClick}
            className="bg-[#2769D9] px-4 py-2 border text-white font-bold border-gray-300 rounded-md focus:outline-none "
          >
            Add
          </button>
        </div>
        <div className=" w-full flex justify-center items-center mt-4">
          <button
            type="submit"
            className=" bg-[#2769D9] px-3 py-2 border text-white font-bold border-gray-300 rounded-md focus:outline-none "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
