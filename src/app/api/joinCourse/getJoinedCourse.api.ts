/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IGetJoinedCourse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const getJoinedCourseApi = async (): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.get("/student/myCourse", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IGetJoinedCourse;
  return res.data;
};
