"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
import TooltipBar from "./TooltipBar";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { setSession } from "@/utils/jwt";
import { uploadImage } from "@/api/uploadImage/uploadImage.api";
import { useRouter } from "next/navigation";
import { communityGetApi } from "@/api/communityPost/getCommunityPost.api";
import { getCookie, setCookie } from "cookies-next";

// import Link from "next/link";

export const Card = () => {
  return (
    <div className=" w-[30%] h-[80%] ">
      <div className="m-3">
        <h1 className="font-bold text-lg">Mentor</h1>
      </div>
      <div className="flex w-full justify-around border-b-2 pt-4 pb-6 px-3 items-center">
        <Image src="/svg/user.svg" alt="" width={136} height={136} />
        <div>
          <h1 className="font-bold text-2xl">Cody Getchell</h1>
          <p>MARKETING • SALES</p>
        </div>
      </div>
      <div className="flex justify-around w-full py-6 text-center">
        <div className="">
          <h1 className="font-bold text-2xl">0</h1>
          <p>Students</p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">0</h1>
          <p>Online</p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">0</h1>
          <p>Rules</p>
        </div>
      </div>
      <div className="w-full items-center mt-4">
        <div className="h-[155px] w-[405px] bg-white px-6 py-3">
          <h1 className="font-bold">Leaderboard</h1>
          <p>
            Monthly winners will be period regard sudden better. Decisively
            surrounded all admiration and not you. Out particular sympathize not{" "}
          </p>
        </div>
      </div>
      <div className="w-full text-center">
        <button className=" bg-[#2769D9] w-auto py-[9px] px-[14px] mt-4 rounded-lg font-bold text-white">
          Edit Sections
        </button>
      </div>
    </div>
  );
};

export const MainCommunityFeed = () => {
  const router = useRouter();

  const [post, setPost] = useState(false);

  const createPost = () => {
    router.push("/mentor/dashboard/community/createPost");
  };

  return (
    <div className=" flex justify-between w-[80%] px-10">
      {post ? (
        <Feeds />
      ) : (
        <div className=" w-[626px] h-full  flex justify-center mt-40">
          <div className=" w-full h-[70px] gap-5 my-3 text-center">
            <h3 className=" text-[31px] leading-[46px] font-bold text-[#5D6475] text-center ">
              Hey, welcome to your new community!
            </h3>
            <p className=" text-[16px] leading-5 text-center text-[#5D6475] tracking-tighter">
              Now, you can create the first post and share it with the world!{" "}
            </p>
            <button
              type="button"
              onClick={createPost}
              className=" bg-[#2769D9] w-auto py-[9px] px-[14px] mt-4 rounded-lg font-bold text-white"
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
  return <div className=" w-full h-[232px] bg-[#93B6FB]"></div>;
};

export const Feeds = () => {
  return (
    <div className=" w-[836px] flex flex-col gap-7">
      <SingleFeed />
      {/* Banner */}
      <div className=" w-full h-[232px] flex items-center">
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

export const SingleFeed = () => {
  const { data } = useQuery({
    queryKey: ["userpost"],
    queryFn: () => communityGetApi(),
  });

  console.log(data, "api get data");

  return (
    <div className=" w-full grid grid-cols-1 gap-4">
      {data &&
        data?.map((val: any, i: any) => (
          <>
            <div
              className=" w-full bg-white rounded-md flex flex-col gap-[7px] p-[25px]   border"
              key={i}
            >
              {/* head */}
              <div className=" flex  justify-between items-center">
                <div className="flex w-[45%] gap-5 items-center">
                  <Image
                    src="/feeds-svg/Ellipse.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <div>
                    <h1 className=" text-xl">Cody Getchell</h1>
                    <p className=" text-xl">PSYCHOLOGIST • COACH</p>
                  </div>
                </div>
                <div className=" h-full flex items-center">
                  <button className=" bg-[#2769D9] py-[14px] text-nowrap px-[14px] rounded-lg font-bold text-white">
                    Click Here
                  </button>
                </div>
              </div>
              <div className=" flex flex-col gap-2">
                <h2 className=" font-bold text-3xl">{val.title}</h2>
                <p>{val.postText}</p>
                <Image
                  src={val.multimedia}
                  alt="rectangle"
                  width={776}
                  height={263}
                  className=" w-full  "
                />
                <p className=" text-sm text-[#5D6475]">Posted 20m ago</p>
                <div className=" flex gap-4">
                  <div className=" flex gap-2">
                    <Image
                      src="/feeds-svg/Frame.svg"
                      alt="rectangle"
                      width={20}
                      height={20}
                      className=" text-[#B9BABA] cursor-pointer"
                    />
                    <span>3</span>
                  </div>
                  <div className=" flex gap-2">
                    <Image
                      src="/feeds-svg/Vector.svg"
                      alt="rectangle"
                      width={20}
                      height={20}
                      className=" text-[#B9BABA] cursor-pointer"
                    />
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-[100px] bg-[#F3F5FA] gap-4 flex items-center p-4">
              <Image
                src="/finished-feed-svg/img2.png"
                alt=""
                width={30}
                height={30}
              />
              <input
                type="text"
                placeholder="Reply to this comment"
                className=" w-full h-[40px] bg-white border-none rounded-md px-4"
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
      const communityBanner = setCookie("communityBanner", e.data.file.url);
    },
  });

  console.log(getCookie("communityBanner"), "cookie banner");

  const handleImageInput = async (
    event: React.ChangeEvent<HTMLInputElement>
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
      <div className="w-full h-[585px] bg-[#E8ECF3] flex justify-center items-center">
        {!showImage ? (
          <div className="w-[490px] h-[350px] flex  flex-col">
            <div className=" w-full h-[70px] gap-3 my-3">
              <h3 className=" text-[31px] font-bold text-[#5D6475] text-center leading-10 ">
                Your Community Main Banner
              </h3>
              <p className=" text-[16px] leading-5 text-center text-[#5D6475] tracking-tighter">
                Please upload an jpg or png image that is 1500px wide x 600px
                high.{" "}
              </p>
            </div>

            {/* image update container  */}
            {loading ? (
              <div className="w-full h-auto text-center flex flex-col gap-6">
                <h3>Uploading- 3/3 Files</h3>
                <div className="w-full p-2 bg-white flex justify-between items-center overflow-hidden ">
                  <p>{image as string}</p>
                  <Image
                    src="/remove.svg"
                    alt="upload cancel"
                    width={16}
                    height={16}
                    className=" text-[#E6E6E6] cursor-pointer"
                    onClick={handleRemoveInput}
                  />
                </div>
              </div>
            ) : (
              <div>
                {image ? (
                  <img
                    src={image as string}
                    className=" w-full mb-3"
                    alt="image"
                  />
                ) : (
                  <div className="relative w-full h-[191px] bg-white  mb-6 border-dashed border-2 border-[#B9BABA]">
                    <label
                      htmlFor="file"
                      className=" w-full h-full absolute flex justify-center flex-col gap-2 items-center p-4 "
                    >
                      <Image
                        src="/Upload-icon.svg"
                        alt="upload file"
                        width={68}
                        height={60}
                      />
                      <div className=" w-full h-16 flex flex-col gap-[10px]">
                        <h5 className=" text-xl text-center font-bold">
                          Drag & drop files or{" "}
                          <span className=" text-blue-600">Browse</span>
                        </h5>
                        <p className=" text-[12px] leading-4 text-center text-[#5D6475] tracking-tighter">
                          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI,
                          Word, PPT
                        </p>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleImageInput}
                      className=" w-full h-full absolute outline-none opacity-0 z-10 cursor-pointer"
                    />
                  </div>
                )}
                <button
                  className=" bg-[#2769D9] w-full py-[9px] px-[14px] rounded-lg font-bold text-white"
                  onClick={handleBtnClick}
                >
                  Upload Files
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className=" w-full h-full object-contain">
            <img src={image as string} className=" w-full h-full" alt="image" />
          </div>
        )}
      </div>

      <div className=" w-full py-10 flex gap-[10%] bg-[#f7f9fb] mb-9">
        <div className="w-auto h-full ">
          <TooltipBar />
        </div>
        {/* <MainCommunityFeed /> */}

        <div className="flex justify-between w-[80%] px-10 pb-10">
          <MainCommunityFeed />
          <Card />
        </div>
      </div>
    </div>
  );
}
