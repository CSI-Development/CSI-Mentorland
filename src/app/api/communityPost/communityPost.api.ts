/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type ICreateCommunityPost } from "@/schema/createCommunityPost/createCommunityPost.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type DecodedToken } from "@/utils/jwt";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface ICommunityPostResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const communityPostApi = async (
  data: ICreateCommunityPost
): Promise<ICommunityPostResponse> => {
  console.log(data, "createComunity");
  const token = getCookie("token")?? "";
  const id =jwtDecode<DecodedToken>(token)._id
  const res = (await axiosInstance.post(`/communityPost/create-post/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ICommunityPostResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
