/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface ISearchMentor extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const searchMentorApi = async (search: string): Promise<any> => {
  const token = getCookie("token") ?? "";
  let url = `/mentor/searchMentorSubjectNameWise`;
  if (search) {
    url += `?search=${search}`;
  }
  const res = (await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ISearchMentor;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
