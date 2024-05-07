import { type ISignUp } from "@/schema/signup/signup.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";

interface ISignupResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const signupApi = async (data: ISignUp): Promise<ISignupResponse> => {
  const res = (await axiosInstance.post(
    "/auth/register",
    data,
  )) satisfies ISignupResponse;
  return res;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
