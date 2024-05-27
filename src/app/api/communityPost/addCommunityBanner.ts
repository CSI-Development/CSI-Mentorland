/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IBannerImage extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const addBannerAPI = async ({
  bannerImage,
  communityId,
}: {
  bannerImage: string;
  communityId: string;
}): Promise<IBannerImage> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(
    `/community/add-community-banner/${communityId}`,
    { bannerImage },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )) satisfies IBannerImage;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
