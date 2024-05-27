/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface ILikeResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const likePostApi = async (data: {
  postId: string;
  postlike: boolean;
}): Promise<ILikeResponse> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(`/communityPost/like-or-dislike-post`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ILikeResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
