/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
import TooltipBar from "./TooltipBar";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { setSession } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
import { communityGetApi } from "@/app/api/communityPost/getCommunityPost.api";
import { uploadImage } from "@/app/api/uploadImage/uploadImage.api";
import { mentorDetailsApi } from "@/app/api/mentorDetails/mentorDetails.api";
import EditSectionDialog from "@/components/editSectionDialog/editSectionDialog";

// import Link from "next/link";

export const Card = () => {
  const [isOpenCommunityDialog, setIsOpenCommunityDialog] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["mentorDetails"],
    queryFn: () => mentorDetailsApi(),
  });

  return (
    <div className=" h-[80%] w-[30%] ">
      <div className="m-3">
        <h1 className="text-lg font-bold">Mentor</h1>
      </div>
      <div className="flex w-full items-center justify-around border-b-2 px-3 pb-6 pt-4">
        <Image src={data?.mentorAvatar} alt="" width={136} height={136} />
        <div>
          <h1 className="text-2xl font-bold">{data?.firstName + " " +  data?.lastName}</h1>
          <p>MARKETING • SALES</p>
        </div>
      </div>
      <div className="flex w-full justify-around py-6 text-center">
        <div className="">
          <h1 className="text-2xl font-bold">0</h1>
          <p>Students</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">0</h1>
          <p>Online</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">0</h1>
          <p>Rules</p>
        </div>
      </div>
      <div className="mt-4 w-full items-center">
        <div className="h-[155px] w-[405px] bg-white px-6 py-3">
          <h1 className="font-bold">Leaderboard</h1>
          <p>
            Monthly winners will be period regard sudden better. Decisively
            surrounded all admiration and not you. Out particular sympathize not{" "}
          </p>
        </div>
      </div>
      <div className="w-full text-center">
        <button type="button" onClick={()=> setIsOpenCommunityDialog(true)} className=" mt-4 w-auto rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white">
          Edit Sections
        </button>
      </div>
      <EditSectionDialog
        OpenDialog={isOpenCommunityDialog}
        setOpenDialog={setIsOpenCommunityDialog}
      />
    </div>
  );
};

export const MainCommunityFeed = () => {
  const { data } = useQuery({
    queryKey: ["userpost"],
    queryFn: () => communityGetApi(),
  });

  console.log(data, "post data here");
  const router = useRouter();

  const createPost = () => {
    router.push("/mentor/dashboard/community/createPost");
  };

  return (
    <div className=" flex w-[80%] justify-between px-10">
      {data?.length > 0 ? (
        <Feeds data={data} />
      ) : (
        <div className=" mt-40 flex  h-full w-[626px] justify-center">
          <div className=" my-3 h-[70px] w-full gap-5 text-center">
            <h3 className=" text-center text-[31px] font-bold leading-[46px] text-[#5D6475] ">
              Hey, welcome to your new community!
            </h3>
            <p className=" text-center text-[16px] leading-5 tracking-tighter text-[#5D6475]">
              Now, you can create the first post and share it with the world!{" "}
            </p>
            <button
              type="button"
              onClick={createPost}
              className=" mt-4 w-auto rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
            >
              Create your first post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const InitialFeed = () => {
  return <div className=" h-[232px] w-full bg-[#93B6FB]"></div>;
};

export const Feeds = ({ data }: any) => {
  return (
    <div className=" flex w-[836px] flex-col gap-7">
      <SingleFeed data={data} />
      {/* Banner */}
      <div className=" flex h-[232px] w-full items-center">
        <Image
          src="/feeds-svg/feed-banner.png"
          alt="banner"
          width={836}
          height={112}
        />
      </div>
      {/* <SingleFeed /> */}
    </div>
  );
};

export const SingleFeed = ({ data }: any) => {
  const router = useRouter();
  const { data: userDetails } = useQuery({
    queryKey: ["mentorDetails"],
    queryFn: () => mentorDetailsApi(),
  });

  const createPost = () => {
    router.push("/mentor/dashboard/community/createPost");
  };
  return (
    <div className=" grid w-full grid-cols-1 gap-4">
      <div>
        <button
          type="button"
          onClick={createPost}
          className=" mt-4 w-auto rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
        >
          Add New Post
        </button>
      </div>
      {data?.map((val: any, i: number) => (
        <>
          <div
            className=" flex w-full flex-col gap-[7px] rounded-md border bg-white   p-[25px]"
            key={i}
          >
            {/* head */}
            <div className=" flex  items-center justify-between">
              <div className="flex w-[45%] items-center gap-5">
                <Image
                  src={userDetails?.mentorAvatar}
                  alt=""
                  width={50}
                  height={50}
                />
                <div>
                  <h1 className=" text-xl">{userDetails?.firstName + " " + userDetails?.lastName}</h1>
                  <p className=" text-xl">PSYCHOLOGIST • COACH</p>
                </div>
              </div>
              <div className=" flex h-full items-center">
                <button className=" text-nowrap rounded-lg bg-[#2769D9] px-[14px] py-[14px] font-bold text-white">
                  Click Here
                </button>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <h2 className=" text-3xl font-bold">{val.title}</h2>
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: val.postText,
                }}
              ></div>
              {/* <p>{val.postText}</p> */}
              <Image
                src={val.multimedia}
                alt="rectangle"
                width={776}
                height={263}
                className=" w-full "
              />
              <p className=" text-sm text-[#5D6475]">Posted 20m ago</p>
              <div className=" flex gap-4">
                <div className=" flex gap-2">
                  <Image
                    src="/feeds-svg/Frame.svg"
                    alt="rectangle"
                    width={20}
                    height={20}
                    className=" cursor-pointer text-[#B9BABA]"
                  />
                  <span>3</span>
                </div>
                <div className=" flex gap-2">
                  <Image
                    src="/feeds-svg/Vector.svg"
                    alt="rectangle"
                    width={20}
                    height={20}
                    className=" cursor-pointer text-[#B9BABA]"
                  /> 
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex h-[100px] w-full items-center gap-4 bg-[#F3F5FA] p-4">
            <Image
              src="/svg/user.png"
              alt=""
              width={30}
              height={30}
            />
            <input
              type="text"
              placeholder="Reply to this comment"
              className=" h-[40px] w-full rounded-md border-none bg-white px-4"
            />
          </div>
        </>
      ))}
    </div>
  );
};

// export function CommunityNavbar() {
//   return (
//     <>
//       <nav className=" w-full h-[60px] bg-[#0E2245]">
//         <ul className=" h-full ml-24 flex gap-6 ">
//           <li className=" uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer hover:bg-[#FF007A] hover:rounded-t-lg">
//             Community Feed
//           </li>
//           <li className=" uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer hover:bg-[#FF007A] hover:rounded-t-lg">
//             {" "}
//             Courses
//           </li>
//           <li className=" uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer hover:bg-[#FF007A] hover:rounded-t-lg">
//             Channel
//           </li>
//             <li className="uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer hover:bg-[#FF007A] hover:rounded-t-lg">
//               Live Call Schedule
//             </li>
//             <li className=" uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer hover:bg-[#FF007A] active:bg-[#FF007A] hover:rounded-t-lg">
//               Ask Your Mentor
//             </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

export default function Community() {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleBtnClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowImage(true);
    }, 2000);
  };

  const handleRemoveInput = () => {
    setImage("");
    setShowImage(false);
    setLoading(false);
  };

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
      setSession(e.data.token); //here will set the token into the session for axios header
      //remaining: after success user must be redirect somewhere. like dashboard or home page more details see console
      // setValue("studentAvatar", e.data.file.url, { shouldTouch: true });
      setImage(e.data.file.url);
      const communityBanner = setCookie("communityBanner", e.data.file.url);
    },
  });

  console.log(getCookie("communityBanner"), "cookie banner");

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
    <div className="text-black">
      <div className="flex h-[585px] w-full items-center justify-center bg-[#E8ECF3]">
        {!showImage ? (
          <div className="flex h-[350px] w-[490px]  flex-col">
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
              <div className="flex h-auto w-full flex-col gap-6 text-center">
                <h3>Uploading- 3/3 Files</h3>
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
              <div>
                {image ? (
                  <img
                    src={image as string}
                    className=" mb-3 w-full"
                    alt="image"
                  />
                ) : (
                  <div className="relative mb-6 h-[191px] w-full  border-2 border-dashed border-[#B9BABA] bg-white">
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
                          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI,
                          Word, PPT
                        </p>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleImageInput}
                      className=" absolute z-10 h-full w-full cursor-pointer opacity-0 outline-none"
                    />
                  </div>
                )}
                <button
                  className=" w-full rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
                  onClick={handleBtnClick}
                >
                  Upload Files
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className=" h-full w-full object-contain">
            <img src={image as string} className=" h-full w-full" alt="image" />
          </div>
        )}
      </div>

      <div className=" mb-9 flex w-full gap-[10%] bg-[#f7f9fb] py-10">
        <div className="h-full w-auto ">
          <TooltipBar />
        </div>
        {/* <MainCommunityFeed /> */}

        <div className="flex w-[80%] justify-between px-10 pb-10">
          <MainCommunityFeed />
          <Card />
        </div>
      </div>
    </div>
  );
}
