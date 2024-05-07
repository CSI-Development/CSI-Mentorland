/* eslint-disable @typescript-eslint/no-explicit-any */
import { type IUploadImage } from "@/schema/createStudent/uploadImage.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IUploadImageResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const uploadImage = async (
  data: any
): Promise<IUploadImageResponse> => {
  console.log(data, "rexjk");
  const token = getCookie("token");
  const res = (await axiosInstance.post(
    "files/upload",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // userId: "662634208ef5c16f662cb017",
    }
    )) satisfies IUploadImageResponse;
  return res;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
