/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IGetMentorScheduleResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const getMentorScheduleApi = async (): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.get(
    `/user/schedule`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )) satisfies IGetMentorScheduleResponse;
  return res.data;
  
};
