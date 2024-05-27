/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type IJoinCourse } from "@/schema/joinCourse/joinCourse.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface ISelectedMentorsResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}
export const selectedMentorsApi = async (data: any): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(`/student/favoriteMentor`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ISelectedMentorsResponse;
  return res.data;
};
