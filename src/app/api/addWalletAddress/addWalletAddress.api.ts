/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type IWalletAddress } from "@/schema/addWalletAddress/addWalletAddress.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IWalletResposne extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const addWalletAddressApi = async (
  data: IWalletAddress
): Promise<IWalletResposne> => {
  console.log(data, "walletAdress");
  const token = getCookie("token")?? "";
  const res = (await axiosInstance.put(`/user/walletAddress`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IWalletResposne;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
