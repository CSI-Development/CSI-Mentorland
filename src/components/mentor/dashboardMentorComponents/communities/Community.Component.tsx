/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import TimeAgo from "react-timeago";
import TooltipBar from "./TooltipBar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { communityGetApi } from "@/app/api/communityPost/getCommunityPost.api";
import { mentorDetailsApi } from "@/app/api/mentorDetails/mentorDetails.api";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import EditSectionDialog from "@/components/editSectionDialog/editSectionDialog";
import { likePostApi } from "@/app/api/communityPost/likePost.api";
import { commentPostApi } from "@/app/api/communityPost/commentPost.api";
import CommunityBanner from "./CommunityBanner.Component";

// import Link from "next/link";

export const Card = () => {
  const [isOpenCommunityDialog, setIsOpenCommunityDialog] =
    useState<boolean>(false);

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
          <h1 className="text-2xl font-bold">
            {data?.firstName + " " + data?.lastName}
          </h1>
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
        <button
          type="button"
          onClick={() => setIsOpenCommunityDialog(true)}
          className=" mt-4 w-auto rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
        >
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

export const MainCommunityFeed = ({ id }: { id: string }) => {
  const { data, refetch } = useQuery({
    queryKey: ["userpost"],
    queryFn: () => communityGetApi(id),
    enabled: !!id,
  });

  console.log(data, "post data here");
  const router = useRouter();

  const createPost = () => {
    router.push(`/mentor/dashboard/community/createPost/${id}`);
  };

  return (
    <div className=" flex w-[80%] justify-between px-10">
      {data?.length > 0 ? (
        <Feeds data={data} refetch={refetch} id={id} />
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

export const Feeds = ({ data, refetch, id }: any) => {
  return (
    <div className=" flex w-[836px] flex-col gap-7">
      <SingleFeed data={data} id={id} refetch={refetch} />
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

export const SingleFeed = ({ data, refetch, id }: any) => {
  const [replyInput, setReplyInput] = useState<{ [key: number]: boolean }>({});

  // console.log(like, "likes value");

  const router = useRouter();

  const createPost = () => {
    router.push(`/mentor/dashboard/community/createPost/${id}`);
  };

  // const toggleReplyInput = (index: number) => {
  //   setReplyInput((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  return (
    <div className="grid w-full grid-cols-1 gap-4">
      <div>
        <button
          type="button"
          onClick={createPost}
          className="mt-4 w-auto rounded-lg bg-[#2769D9] px-[14px] py-[9px] font-bold text-white"
        >
          Add New Post
        </button>
      </div>
      {data?.map((val: any, i: number) => (
        <div key={i}>
          <div className="flex w-full flex-col gap-[7px] rounded-md border bg-white p-[25px]">
            {/* head */}
            <div className="flex items-center justify-between">
              <div className="flex w-[45%] items-center gap-5">
                <Image src={val.user?.avatar} alt="" width={50} height={50} />
                <div>
                  <h1 className="text-xl">
                    {val.user?.firstName + " " + val.user?.lastName}
                  </h1>
                  <p className="text-xl">PSYCHOLOGIST • COACH</p>
                </div>
              </div>
              <div className="flex h-full items-center">
                <button className="text-nowrap rounded-lg bg-[#2769D9] px-[14px] py-[14px] font-bold text-white">
                  Click Here
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">{val.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: val.postText,
                }}
              ></div>
              <Image
                src={val.multimedia}
                alt="rectangle"
                width={776}
                height={263}
                className="w-full"
              />
              <LikedSection refetch={refetch} data={val} />
            </div>
          </div>
          <CommentSection refetch={refetch} data={val} />
        </div>
      ))}
    </div>
  );
};

export const LikedSection = ({ data, refetch }: any) => {
  const [like, setLike] = useState(false);

  const { mutate: likeData } = useMutation({
    mutationFn: likePostApi,
    onSuccess: async (e) => {
      console.log("success", e);
      await refetch();
    },
  });

  const handleLike = (postId: string, like: boolean) => {
    likeData({ postId: postId, postlike: like });
  };

  useEffect(() => {
    if (data.userLike) {
      setLike(true);
    } else setLike(false);
  }, [data]);
  return (
    <>
      <p className="text-sm text-[#5D6475]">
        Posted <TimeAgo date={data.createdAt} />
      </p>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          {like ? (
            <FaHeart
              width={20}
              height={20}
              className="cursor-pointer text-[red]"
              onClick={() => handleLike(data._id, false)}
            />
          ) : (
            <FaRegHeart
              width={20}
              height={20}
              className="cursor-pointer text-[#B9BABA]"
              onClick={() => handleLike(data._id, true)}
            />
          )}
          {/* <Image
        src="/feeds-svg/Frame.svg"
        alt="rectangle"
        width={20}
        height={20}
        className="cursor-pointer text-[red]"
      /> */}
          <span>{data?.likesCount ?? "0"}</span>
        </div>
        <div className="flex gap-2">
          <Image
            src="/feeds-svg/Vector.svg"
            alt="rectangle"
            width={20}
            height={20}
            className="cursor-pointer text-[#B9BABA]"
          />
          <span>
            {data.postComments?.length > 0 ? data?.postComments?.length : 0}
          </span>
        </div>
      </div>
    </>
  );
};

export function CommentSection({ refetch, data }: any) {
  const [commentInput, setCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");

  const { data: userDetails } = useQuery({
    queryKey: ["mentorDetails"],
    queryFn: () => mentorDetailsApi(),
  });



  const { mutate: commentPost } = useMutation({
    mutationFn: commentPostApi,
    onSuccess: async (e) => {
      console.log("success", e);
      setCommentInput(false);
      await refetch();
    },
  });

  const handleComment = (postId: string, comment: string) => {
    // likeData({ postId: postId, postlike: like });

    commentPost({ postId: postId, comment: comment });
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-[#F3F5FA] p-4">
      <div className="flex max-h-60 w-full flex-col gap-4 overflow-y-auto">
        {data?.postComments.length > 0 &&
          data?.postComments.map((item: any) => (
            <div className="flex w-full gap-4" key={item._id}>
              <div>
                <Image
                  src={item.user.avatar}
                  className="rounded-full"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <h1 className="font-bold">
                  {item.user.firstName ?? "ABC"} {item.user.lastName ?? "XYZ"}
                </h1>
                <p className="text-[#5D6475]">{item.comment}</p>
                {/* <div className="flex gap-2">
            <Image
              src="/feeds-svg/Frame.svg"
              alt="rectangle"
              width={20}
              height={20}
              className="cursor-pointer text-[#B9BABA]"
            />
            <span>3</span>
            <p className="text-[#FE5F55] cursor-pointer" onClick={() => toggleReplyInput(i)}>Reply</p>
          </div> */}
                {/* {replyInput[i] && (
            <div className="w-full flex gap-3">
              <Image src="/svg/user.png" alt="" className="w-8 h-8" height={30} width={30} />
              <div className="flex w-full flex-col items-end">
                <textarea
                  placeholder="Reply to this comment"
                  className="h-[150px] w-full rounded-md border-none bg-white p-4"
                />
                <button
                  type="button"
                  className="mt-6 w-fit whitespace-nowrap rounded-full bg-primary px-3 py-2 text-xs text-white"
                >
                  Send Reply
                </button>
              </div>
            </div>
          )} */}
              </div>
            </div>
          ))}
      </div>
      <div className="flex w-full gap-3">
        {/* <Image
          src={
            userDetails.role === "student"
              ? userDetails.studenAvatar
              : userDetails.mentorAvatar
          }
          alt=""
          className="h-8 w-8 rounded-full"
          height={30}
          width={30}
        /> */}
        {commentInput ? (
          <div className="flex w-full flex-col items-end">
            <textarea
              placeholder="Reply to this comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="h-[150px] w-full rounded-md border-none bg-white p-4"
            />
            <button
              type="button"
              onClick={() => handleComment(data._id, commentText)}
              className="mt-6 w-fit whitespace-nowrap rounded-full bg-primary px-3 py-2 text-xs text-white"
            >
              Send Comment
            </button>
          </div>
        ) : (
          <input
            type="text"
            placeholder="Reply to this comment"
            className="h-[40px] w-full rounded-md border-none bg-white px-4"
            onClick={() => setCommentInput(true)}
          />
        )}
      </div>
    </div>
  );
}

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

export default function Community({ id, data, refetch }: any) {
  return (
    <div className="text-black">
      <CommunityBanner data={data} id={id} refetch={refetch} />

      <div className=" mb-9 flex w-full gap-[10%] bg-[#f7f9fb] py-10">
        <div className="h-full w-auto ">
          <TooltipBar />
        </div>
        {/* <MainCommunityFeed /> */}

        <div className="flex w-[80%] justify-between px-10 pb-10">
          <MainCommunityFeed id={id} />
          <Card />
        </div>
      </div>
    </div>
  );
}
