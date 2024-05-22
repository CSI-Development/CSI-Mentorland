/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IGenerateCertResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const generateCertificateAPI = async (data: {
  courseId: string;
  userId: string;
}): Promise<any> => {
  console.log(data, "createComunity");
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(`/mentor/certificate-generate`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IGenerateCertResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
