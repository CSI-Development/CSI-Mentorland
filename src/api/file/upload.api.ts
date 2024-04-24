import axiosInstance from '@/utils/axiosInstance';
import { AxiosResponse } from 'axios';

interface IUploadResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const uploadApi = async (data: FormData): Promise<IUploadResponse> => {
  const res = (await axiosInstance.post(
    '/files/upload',
    data,
  )) satisfies IUploadResponse as IUploadResponse;
  return res;
};
