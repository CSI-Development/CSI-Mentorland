import { ICreateStudent } from "@/schema/createStudent/createStudent.schema";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";
import { profile } from "console";
import { promises } from "dns";

interface ICreateStudentResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const createStudent = async (
  data: ICreateStudent,
): Promise<ICreateStudentResponse> => {
  console.log(data, "rexjk");
  const res = (await axiosInstance.post("student/createStudent", {
    ...data,
    userId: "662634208ef5c16f662cb017",
  })) satisfies ICreateStudentResponse as ICreateStudentResponse;
  return res;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};