import { ISignUp, SignUp } from "@/schema/signup/signup.schema";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";
import { promises } from "dns";

interface ISignupResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const signupApi = async (data: ISignUp): Promise<ISignupResponse> => {
  const res = (await axiosInstance.post(
    "/auth/register",
    data
  )) satisfies ISignupResponse as ISignupResponse;
  return res;
};
