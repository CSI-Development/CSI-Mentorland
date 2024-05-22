/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IRequestForCert extends AxiosResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message?: string;
  error?: {
    message: string;
  };
}

export const RequestCertificateApi = async (id: string): Promise<any> => {
  console.log(id, "reuqestCert");
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(
    `/subscribe/update-status`,
    { courseId: id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )) satisfies IRequestForCert;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
