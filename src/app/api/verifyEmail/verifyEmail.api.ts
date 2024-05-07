import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";

interface IVerifyEmailResponse extends AxiosResponse {
  message?: string;
  token?: string;
  error?: {
    message: string;
  };
}

export const verifyEmail = async (token: string): Promise<IVerifyEmailResponse> => {
  const res = (await axiosInstance.post(
    "/auth/verify-email",
    {token}
  )) satisfies IVerifyEmailResponse;
  return res;
  // if success then will get the user _Id and role of user as a response 
  // if error then will get "Invalid token" as a response
};
