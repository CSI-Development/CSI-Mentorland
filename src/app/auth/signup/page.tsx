"use client";
import React, { useContext, useState } from "react";
import sideCoverImage from "/public/onboardStudent/signupSideImage.png";
import Image from "next/image";
import { AppContext } from "@/providers/ContextProvider";
import Logo from "../../../../public/logoDark.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { type ISignUp, SignUp } from "@/schema/signup/signup.schema";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/utils/jwtAuth.api";
import { useMyStore } from "@/store/store";
// import { useGoogleLogin } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login";
import { toast } from "react-toastify";
import { baseURL } from "@/utils/axiosInstance";
import { signupApi } from "@/app/api/signup/signup.api";
import Link from "next/link";

const Signup = () => {
  const { setLoading } = useContext(AppContext);
  const [role, setrole] = useState<string>("student");
  const [emailIdError, setEmailIdError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<ISignUp>({
    resolver: zodResolver(SignUp),
    defaultValues: {
        role: "student"
    }
  });

  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: signupApi,
    onSuccess: (e) => {
      useMyStore
        .getState()
        .setUser({ ...useMyStore.getState().user, email: getValues("email") });
      setLoading(false);
      //here will store the email id along with ither existing fields into store for further refrence
      console.log("success", getValues("email"));
      router.push("/auth/verify-email" + "?email=" + getValues("email"));
      //here will redirect to the email verification page
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      setLoading(false);
      if (e.response?.data?.error?.message === "Email already exists") {
        setEmailIdError("Email already exists");
      }
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
    },
  });

  const onSubmit: SubmitHandler<ISignUp> = async (data: ISignUp) => {
    setLoading(true);
    mutate(data);
  };

  //signup With google

  //   const handleGoogleSignUp = () => {
  //     if (role) {
  //       login();
  //     } else {
  //       toast.error("Please select a role");
  //       return;
  //     }
  //   };

  //   const login = useGoogleLogin({
  //     onSuccess: async (tokenResponse) => {
  //       console.log(tokenResponse);
  //       // fetching userinfo can be done on the client or the server
  //       const userData = await axios
  //         .get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //           headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //         })
  //         .then((res) => res.data);

  //       axios
  //         .post(`${baseURL}/auth/googleAuth`, {
  //           role: role,
  //           email: userData.email,
  //           emailVerified: userData.email_verified,
  //           // headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //         })
  //         .then((response) => {
  //           console.log(response.data);
  //         })
  //         .catch((error) => {
  //           console.error("Error:", error);
  //         });
  //     },
  //   });

  //// facebook signup auth

  //   const responseFacebook = (response: any) => {
  //     console.log(response);
  //   };

  //   const handleFacebookSignUp = () => {
  //     if (!role) {
  //       toast.error("Please select a role");
  //       return;
  //     }
  //   };
  return (
    <div className="flex w-full bg-white">
      <Image className="h-screen w-1/3" alt="" src={sideCoverImage} />
      <div className="h-screen w-full overflow-y-scroll ">
        <div className="mt-5 flex w-full justify-center">
          <Image alt="logo" src={Logo} />
        </div>
        <div className="mt-6 flex justify-center text-black">
          <div className="w-5/12  ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-center text-2xl font-bold text-black">
                Sign Up
              </p>
              <div className="mt-4 flex  w-full justify-center gap-3 text-white">
                <div
                  className={` w-40 rounded-lg px-7 py-2 ${
                    role === "student" ? " bg-[#2668d9] " : " bg-[#5d6574] "
                  }`}
                  onClick={() => {
                    setValue("role", "student");
                    setrole("student");
                  }}
                >
                  {role === "student" ? (
                    <Icon
                      className="flex w-full justify-center"
                      icon="teenyicons:tick-circle-solid"
                    />
                  ) : (
                    <Icon
                      className="flex w-full justify-center"
                      icon="material-symbols:circle-outline"
                    />
                  )}
                  <Icon
                    className="mt-1 flex w-full justify-center text-4xl"
                    icon="iconoir:graduation-cap"
                  />
                  <p className="text-center">As A Student</p>
                </div>

                <div
                  className={` w-40 rounded-lg px-7 py-2 ${
                    role === "mentor"
                      ? " bg-[#2668d9] "
                      : " bg-[#5d6574] "
                  }`}
                  onClick={() => {
                    setValue("role", "mentor");
                    setrole("mentor");
                  }}
                >
                  {role === "mentor" ? (
                    <Icon
                      className="flex w-full justify-center"
                      icon="teenyicons:tick-circle-solid"
                    />
                  ) : (
                    <Icon
                      className="flex w-full justify-center"
                      icon="material-symbols:circle-outline"
                    />
                  )}
                  <Icon
                    className="mt-1 flex w-full justify-center text-4xl"
                    icon="healthicons:register-book-outline"
                  />
                  <p className="text-center">As A Mentor</p>
                </div>
              </div>

              {/* <button
                type="button"
                onClick={handleGoogleSignUp}
                disabled={!role}
                className={`mx-auto mt-6 flex w-8/12 justify-center gap-2  rounded-lg border-2 border-[#b9baba] py-2 ${
                  role === "" ? ` text-[#b9baba] ` : ` text-black `
                }`}
              >
                {role === "" ? (
                  <Icon className="text-2xl" icon="devicon-plain:google" />
                ) : (
                  <Icon className="text-2xl" icon="devicon:google" />
                )}
                Sign up with Google
              </button>
              <FacebookLogin
                appId="785104936432032"
                autoLoad={false}
                isDisabled={!role}
                fields="name,email,picture"
                textButton="Sign up with facebook"
                callback={responseFacebook}
                onClick={handleFacebookSignUp}
                cssClass={`my-facebook-button-class flex border-2 rounded-lg border-[#b9baba] py-2 w-8/12 mx-auto gap-2 justify-center mt-2 cursor-pointer ${
                  role === "" ? ` text-[#b9baba] ` : ` text-black `
                }`}
                icon={
                  role === "" ? (
                    <Icon className="text-2xl" icon="simple-icons:facebook" />
                  ) : (
                    <Icon className="text-2xl" icon="logos:facebook" />
                  )
                }
              /> */}
              {/* <button
            type="button"
              // onClick={handleFacebookSignUp}
              className={` mt-2 flex py-2 justify-center w-8/12 mx-auto gap-2 border-2 rounded-lg border-[#b9baba] ${
                role === "" ? ` text-[#b9baba] ` : ` text-black `
              }`}
            >
              {role === "" ? (
                <Icon className="text-2xl" icon="simple-icons:facebook" />
              ) : (
                <Icon className="text-2xl" icon="logos:facebook" />
              )}
              Sign up with Facebook
            </button> */}

              <p className="my-2 text-center text-black">- OR -</p>

              <div>
                <p className="mb-1 text-lg text-[#1b448f]">Email Address</p>
                <input
                  {...register("email")}
                  placeholder="newuser@myemail.com"
                  className={`w-full rounded-lg border-2 px-5 py-3 outline-none `
                    .concat(
                      errors.email ? " border-[#FF007A]" : " border-[#b9baba]",
                    )
                    .concat(
                      emailIdError !== ""
                        ? " border-[#FF007A]"
                        : " border-[#b9baba]",
                    )}
                />
                {errors.email && (
                  <p className="rounded-md bg-[#FF007A] p-1.5 text-xs text-white">
                    {errors.email.message}
                  </p>
                )}
                {emailIdError !== "" && (
                  <p className="rounded-md bg-[#FF007A] p-1.5 text-xs text-white">
                    {emailIdError}
                  </p>
                )}
              </div>
              <div className="mt-3">
                <p className="mb-1 text-lg text-[#1b448f]">Password</p>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="password"
                  className={`w-full rounded-lg border-2 px-5 py-3 outline-none `.concat(
                    errors.password ? " border-[#FF007A]" : " border-[#b9baba]",
                  )}
                />
                {errors.password && (
                  <p className="rounded-md bg-[#FF007A] p-1.5 text-xs text-white">
                    {errors.password.message}
                  </p>
                )}
                <div className="mt-1 text-xs text-[#b9baba]">
                  <p>Upper and lower case letters</p>
                  <p>At least one number or special character (%&*_!@)</p>
                  <p>At least 10 characters</p>
                </div>
              </div>

              {/* <Link href={"student/onboard"}> */}
              {/* <button type="submit">max</button> */}
              <button
                type="submit"
                className={` my-2 w-full rounded-lg py-2.5 text-lg font-semibold ${
                  role === ""
                    ? ` bg-[#b9baba] text-white `
                    : ` bg-[#2668d8] text-white `
                }`}
              >
                Get Started
              </button>
              {/* </Link> */}
              <div className="flex gap-2">
                <p>Already have an accoutn?</p>
                <Link href="/auth/signin" className="text-[#2668d8]">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
