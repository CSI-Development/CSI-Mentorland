import { type ILogIn } from "@/schema/login/login.schema";
import { ISignUp, SignUp } from "@/schema/signup/signup.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
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
    data,
  )) satisfies ILogInResponse;
  return res;
  //if success user will get the jwt token which contains role and _id of user
  //if error user will get "Invalid email or password" as a message
};
