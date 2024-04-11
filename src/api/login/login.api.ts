import { ILogIn } from "@/schema/login/login.schema";
import { ISignUp, SignUp } from "@/schema/signup/signup.schema";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";
import { promises } from "dns";

interface ILogInResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const logInApi = async (data: ILogIn): Promise<ILogInResponse> => {
  const res = (await axiosInstance.post(
    "/auth/login",
    data
  )) satisfies ILogInResponse as ILogInResponse;
  return res;
};
