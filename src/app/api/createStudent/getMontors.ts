import { IPostCategoryName } from "@/schema/createStudent/postCategoryName";
import axiosInstance from "@/utils/axiosInstance";
import { type DecodedToken } from "@/utils/jwt";
import { type AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface IPostCategoryNameResponse extends AxiosResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export const getMentors = async (
  data: string[],
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  console.log(data,'data')
  const token = getCookie("token") ?? "";
  // const role =jwtDecode<DecodedToken>(e.data.token).role
  const id = jwtDecode<DecodedToken>(token)._id;
  console.log(id, "userid....");
  // console.log(data, "rexjk");
  const res = (await axiosInstance.get(
    `student/getMentorList?categoryList=${data.join(',')}`,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  )) satisfies any;
  return res;
  //if success it will send "email verification link sent" to the user email id as a message
  //if error it will send "Email already exists" as a message
};
