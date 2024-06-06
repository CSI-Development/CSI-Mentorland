/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { addBannerAPI } from "@/app/api/communityPost/addCommunityBanner";
import { uploadImage } from "@/app/api/uploadImage/uploadImage.api";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { toast } from "react-toastify";

const CommunityBanner = ({ data, id, refetch }: any) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [loading, setLoading] = useState(false);
  // const [showImage, setShowImage] = useState(false);

  // const handleBtnClick = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setShowImage(true);
  //   }, 2000);
  // };

  const handleRemoveInput = () => {
    // setImage("");
    // setShowImage(false);
    setLoading(false);
  };

  const { mutate: addBanner } = useMutation({
    mutationFn: addBannerAPI,
    onSuccess: async (e) => {
      console.log("success", e);
      await refetch();
      setLoading(false);
      toast.success(e.message);
      // setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      // setValue("studentAvatar", e.data.file.url, { shouldTouch: true });
      // setImage(e.data.file.url);
    },
    onError: (e) => {
      toast.error(e.message);
      setLoading(false);
    },
  });

  // React.useEffect(() => {
  //   if (image) {
  //     handleBtnClick();
  //     console.log(image);
  //   }
  // }, [image]);

  const { mutate } = useMutation({
    mutationFn: uploadImage,
    onSuccess: (e) => {
      console.log("success", e);
      addBanner({ bannerImage: e.data.file.url, communityId: id });
      // setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      // setValue("studentAvatar", e.data.file.url, { shouldTouch: true });
      // setImage(e.data.file.url);
    },
    onError: (e) => {
      setLoading(false);
      toast.error(e.message);
    },
  });

  const handleImageInput = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // console.log(image, "image value");
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
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
    <div className="flex h-[585px] w-full items-center justify-center bg-[#E8ECF3]">
      {data?.communityBanner ? (
        <div className="relative h-full w-full">
          {loading && (
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white/40 text-3xl font-bold">
              <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["#306cce", "#72a1ed"]}
              />
            </div>
          )}
          <div className="w-full h-full">
            <img
              src={data.communityBanner}
              alt="banner"
              className="h-full w-full bg-cover"
            />
          </div>
          {!loading && (
            <div className="absolute bottom-0 right-0 flex h-20 w-40 cursor-pointer items-center justify-center rounded-tl-xl bg-white/20 font-bold text-white">
              Edit
              <input
                type="file"
                name="file"
                accept="image/jpg, image/jpeg, image/png"
                onChange={handleImageInput}
                className=" absolute z-10 h-full w-full cursor-pointer opacity-0 outline-none"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className=" flex h-[350px]  w-[490px] flex-col">
            <div className=" my-3 h-[70px] w-full gap-3">
              <h3 className=" text-center text-[31px] font-bold leading-10 text-[#5D6475] ">
                Your Community Main Banner
              </h3>
              <p className=" text-center text-[16px] leading-5 tracking-tighter text-[#5D6475]">
                Please upload an jpg or png image that is 1500px wide x 600px
                high.{" "}
              </p>
            </div>

            {/* image update container  */}
            {loading ? (
              <div className="flex h-auto w-full flex-col items-center justify-center gap-6 text-center">
                <div className="h-12 w-12 animate-ping rounded-full bg-blue-600" />
                <h3>Uploading...</h3>
                <div className="flex w-full items-center justify-between overflow-hidden bg-white p-2 ">
                  <p>{image as string}</p>
                  <Image
                    src="/remove.svg"
                    alt="upload cancel"
                    width={16}
                    height={16}
                    className=" cursor-pointer text-[#E6E6E6]"
                    onClick={handleRemoveInput}
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <div className="mb-6 flex h-[191px] w-full items-center justify-center  border-2 border-dashed border-[#B9BABA] bg-white">
                  <label
                    htmlFor="file"
                    className=" absolute flex h-full w-full flex-col items-center justify-center gap-2 p-4 "
                  >
                    <Image
                      src="/Upload-icon.svg"
                      alt="upload file"
                      width={68}
                      height={60}
                    />
                    <div className=" flex h-16 w-full flex-col gap-[10px]">
                      <h5 className=" text-center text-xl font-bold">
                        Drag & drop files or{" "}
                        <span className=" text-blue-600">Browse</span>
                      </h5>
                      <p className=" text-center text-[12px] leading-4 tracking-tighter text-[#5D6475]">
                        Supported formats: JPEG, PNG
                      </p>
                    </div>
                  </label>
                  <input
                    type="file"
                    name="file"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={handleImageInput}
                    className=" absolute z-10 h-full w-full cursor-pointer opacity-0 outline-none"
                  />
                </div>
                <div
                  className=" w-full rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
                  // onClick={handleBtnClick}
                >
                  Upload Files
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityBanner;
