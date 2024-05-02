import { ICreateCommunity } from "@/schema/createCommunity/createCommunity.schema";
import axiosInstance from "@/utils/axiosInstance";
import { DecodedToken } from "@/utils/jwt";
import { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface ICreateCommunityResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const createCommunityApi = async (
  data: ICreateCommunity
): Promise<ICreateCommunityResponse> => {
  console.log(data, "createComunity");
  const token = getCookie("token")?? "";
  const id =jwtDecode<DecodedToken>(token)._id  // const userId =  localStorage.getItem("id")
  const res = (await axiosInstance.post(`/community/create-community`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ICreateCommunityResponse as ICreateCommunityResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
