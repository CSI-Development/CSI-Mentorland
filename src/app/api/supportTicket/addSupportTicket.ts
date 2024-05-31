/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ISupportTicket } from "@/schema/supportTicket/supportTicket.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface ISupportTicketResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}
export const supportTicketApi = async (data: ISupportTicket): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(`/support/ticket`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies ISupportTicketResponse;
  return res.data;
};
