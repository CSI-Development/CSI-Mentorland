/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IGetEnrollCourse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const getEnrollCourseApi = async (
  search: string,
  active: number,
): Promise<any> => {
  const token = getCookie("token") ?? "";
  let url = `/student/getAllCourses?page=${active}&limit=5`;
  if (search) {
    url += `&search=${search}`;
  }
  const res = (await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IGetEnrollCourse;
  return res.data;
};
