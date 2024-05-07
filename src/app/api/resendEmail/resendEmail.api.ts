import { ILogIn } from "@/schema/login/login.schema";
import { ISignUp, SignUp } from "@/schema/signup/signup.schema";
import axiosInstance from "@/utils/axiosInstance";
import { type AxiosResponse } from "axios";
import { promises } from "dns";
import { headers } from "next/headers";

interface IResendEmailRes extends AxiosResponse {
    message?: string;
    error?: {
        message: string;
    };
}

export const resendEmail = async (email:string): Promise<IResendEmailRes> => {
    const res = (await axiosInstance.post(
        "/auth/resend-verify-email",
        {email},
    )) satisfies IResendEmailRes;
    return res;
    //response will be like "mail sent"
    //if email dosent exist then response will be "Email not found"
};
