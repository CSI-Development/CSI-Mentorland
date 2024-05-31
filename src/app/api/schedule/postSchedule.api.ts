/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IEventSchedule } from "@/schema/scheduler/scheduler.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";

interface IScheduleResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}
export const scheduleApi = async (data: IEventSchedule): Promise<any> => {
  const token = getCookie("token") ?? "";
  const res = (await axiosInstance.post(`/mentor/schedule`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) satisfies IScheduleResponse;
  return res.data;
};
