import { ICreateMentor } from "@/schema/CreateMentor/createMentor.schema";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";
import { profile } from "console";
import { getCookie } from "cookies-next";
import { promises } from "dns";

interface ICreateMentorResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const createMentor = async (
  data: ICreateMentor
): Promise<ICreateMentorResponse> => {
  console.log(data, "creatementor");
  const token = getCookie("token");
  const res = (await axiosInstance.post("mentor/createMentor", data, 
{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  )) satisfies ICreateMentorResponse as ICreateMentorResponse;
  return res.data;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
