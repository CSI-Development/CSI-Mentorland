import { ICreateCommunityRules } from "@/schema/communityRules/communityRules.schema";
import axiosInstance from "@/utils/axiosInstance";
import { DecodedToken } from "@/utils/jwt";
import { AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface ICommunityRulesResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const communityRulesApi = async (
  data: ICreateCommunityRules
): Promise<ICommunityRulesResponse> => {
  console.log(data, "createComunity");
  const token = getCookie("token")?? "";
  const id =jwtDecode<DecodedToken>(token)._id
  const res = (await axiosInstance.post(`/community/add-community-rule/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ICommunityRulesResponse as ICommunityRulesResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
