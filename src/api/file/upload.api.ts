import axiosInstance from '@/utils/axiosInstance';
import { AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';

interface IUploadResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const uploadApi = async (data: FormData): Promise<IUploadResponse> => {
  const token = getCookie("token");

  const res = (await axiosInstance.post(
    "files/upload",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // userId: "662634208ef5c16f662cb017",
    }
  )) satisfies IUploadResponse as IUploadResponse;
  return res;
};
