import { type ICreateStudent } from "@/schema/createStudent/createStudent.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type DecodedToken } from "@/utils/jwt";
import { type AxiosResponse } from "axios";
import { profile } from "console";
import { getCookie } from "cookies-next";
import { promises } from "dns";
import { jwtDecode } from "jwt-decode";

interface ICreateStudentResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const createStudent = async (
  data: ICreateStudent
): Promise<ICreateStudentResponse> => {
  const token  = getCookie('token')?? ""
  // const role =jwtDecode<DecodedToken>(e.data.token).role
  const id =jwtDecode<DecodedToken>(token)._id
  console.log(id,"userid....")
  // console.log(data, "rexjk");
  const res = (await axiosInstance.post("student/createStudent", {
    ...data,
    userId: id
  })) satisfies ICreateStudentResponse;
  return res;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
