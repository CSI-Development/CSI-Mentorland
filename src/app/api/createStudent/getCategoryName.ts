/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type DecodedToken } from "@/utils/jwt";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface IGetCategoryNameResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const categoryNameGetApi = async (
): Promise<any> => {
  const token = getCookie("token") ?? "";
  const id = jwtDecode<DecodedToken>(token)._id;
  const res = (await axiosInstance.get(`/student/getCourseCategory`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IGetCategoryNameResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};