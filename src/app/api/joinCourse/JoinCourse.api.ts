/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type IJoinCourse } from "@/schema/joinCourse/joinCourse.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IJoinCourseResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}
export const joinCourseApi = async (data: IJoinCourse): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(`/student/subscribeCourse`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IJoinCourseResponse;
  return res.data;
};
