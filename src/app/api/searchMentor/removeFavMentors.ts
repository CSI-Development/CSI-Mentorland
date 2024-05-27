/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type IJoinCourse } from "@/schema/joinCourse/joinCourse.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IRemoveFavMentorsResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}
export const removeSelectedMentorsApi = async (data: any): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.put(`/student/removeFavoriteMentors`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IRemoveFavMentorsResponse;
  return res.data;
};
