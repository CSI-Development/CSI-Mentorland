import { ILogIn } from "@/schema/login/login.schema";
import { ISignUp, SignUp } from "@/schema/signup/signup.schema";
import axiosInstance from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";
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
    )) satisfies IResendEmailRes as IResendEmailRes;
    return res;
};
