import axiosInstance from "@/utils/axiosInstance";
import { DecodedToken } from "@/utils/jwt";
import { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface ICommunityRulesGetResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const communityRulesGetApi = async (
): Promise<ICommunityRulesGetResponse> => {
  const token = getCookie("token") ?? "";
  const id = jwtDecode<DecodedToken>(token)._id;
  const res = (await axiosInstance.get(`/community/get-community-rules/${id}`)) satisfies ICommunityRulesGetResponse as ICommunityRulesGetResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
