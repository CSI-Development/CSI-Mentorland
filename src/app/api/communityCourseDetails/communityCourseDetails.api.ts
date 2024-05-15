/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface ICommunityGetResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const communityCourseDetailsAPI = async (id: string): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.get(`/student/getViewCourse/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ICommunityGetResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
