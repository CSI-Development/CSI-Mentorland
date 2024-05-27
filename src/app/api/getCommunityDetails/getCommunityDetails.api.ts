/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IGetCommunity extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const getCommunityAPI = async (id: string): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.get(`/community/get-detail/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IGetCommunity;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
