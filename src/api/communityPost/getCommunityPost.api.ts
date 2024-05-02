import axiosInstance from "@/utils/axiosInstance";
import { DecodedToken } from "@/utils/jwt";
import { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface ICommunityGetResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const communityGetApi = async (
): Promise<ICommunityGetResponse> => {
  const token = getCookie("token") ?? "";
  const id = jwtDecode<DecodedToken>(token)._id;
  const res = (await axiosInstance.get(`/communityPost/community-post/${id}?pageNumber=1&pageSize=1`)) satisfies ICommunityGetResponse as ICommunityGetResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};