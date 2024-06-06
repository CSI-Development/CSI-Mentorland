/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IGetNotificationResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const getNotificationApi = async (page?: number): Promise<any> => {
  const token = getCookie("token") ?? "";
  let url = `/notification`;
  if (page) {
    url += `?page=${page}`;
  }
  const res = (await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IGetNotificationResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
