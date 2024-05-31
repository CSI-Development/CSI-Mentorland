/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IGetAllCommunity extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const getAllCommunityApi = async (): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.get("/community/getMentorCommunity", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IGetAllCommunity;
  return res.data;
};
