/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import sideCoverImage from "../../../../public/onboardStudent/signupSideImage.png";
import Logo from "../../../../public/logoDark.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { AppContext } from "@/providers/ContextProvider";
import { toast } from "react-toastify";
import { baseURL } from "@/utils/axiosInstance";
import { useSession, signIn } from "next-auth/react";
import { type ILogIn, LogIn } from "@/schema/login/login.schema";
import { type DecodedToken, setSession } from "@/utils/jwt";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";
import { logInApi } from "@/app/api/login/login.api";
import ForgotPassword from "@/components/forgotPassword";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// type Props = {};
// export const queryClient = new QueryClient();

function SignIn() {
  const [role, setrole] = useState<string>("student");
  const [isOpenCommunityDialog, setIsOpenCommunityDialog] = useState<boolean>(false);
  const [emailIdError, setEmailIdError] = useState<string>("");

  //signup With google

  // const { data: session } = useSession();
  // console.log(session, "google data");

  // const handleGoogleSignUp = () => {
  //   if (role) {
  //     login();
  //   } else {
  //     toast.error("Please select a role");
  //     return;
  //   }
  // };

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     console.log(tokenResponse);
  //     // fetching userinfo can be done on the client or the server
  //     const userData = await axios
  //       .get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //       })
  //       .then((res) => res.data);

  //     axios
  //       .post(`${baseURL}/auth/googleAuth`, {
  //         role: role,
  //         email: userData.email,
  //         emailVerified: userData.email_verified,
  //         // headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   },
  // });

  //// facebook signup auth

  // const responseFacebook = (response: any) => {
  //   console.log(response);
  // };

  // const handleFacebookSignUp = () => {
  //   if (!role) {
  //     toast.error("Please select a role");
  //     return;
  //   }
  // };

  //login user
  const { setLoading } = useContext(AppContext);

  const [loginError, setLogInErrror] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ILogIn>({
    resolver: zodResolver(LogIn),
    defaultValues: {
      role: "student",
    },
  });

  const { mutate } = useMutation({
    mutationFn: logInApi,
    onSuccess: (e) => {
      setLoading(false);
      console.log("success", e);
      setSession(e.data.token);
      const role = jwtDecode<DecodedToken>(e.data.token).role;
      const id = jwtDecode<DecodedToken>(e.data.token)._id;
      router.push(`/${role}/dashboard?id=${id}`);
    },
    onError: (e: AxiosError<{ error: { message: string } }>) => {
      setLoading(false);
      setLogInErrror(
        e.response?.data?.error?.message ??
          "Something went wrong. Please try again.",
      );
      console.log("error", e.response?.data?.error?.message);
      console.log(e);
    },
  });
  const router = useRouter();

  const onSubmit = async (data: ILogIn) => {
    setLoading(true);
    mutate(data); //here will send the data to the login api
  };

  return (
    // <QueryClientProvider client={queryClient}>
    <>
    <div className="flex w-full bg-white">
      <img className="h-screen" src={sideCoverImage.src} alt="" />
      <div className="h-screen w-full overflow-y-scroll ">
        <div className="mt-5 flex w-full justify-center">
          <Image alt="logo" src={Logo} />
        </div>
        <div className="mt-6 flex justify-center text-black">
          <div className="w-5/12  ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-center text-2xl font-bold text-black">
                Log In
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
                    role === "mentor" ? " bg-[#2668d9] " : " bg-[#5d6574] "
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
                  // onClick={handleGoogleSignUp}
                  onClick={() => signIn("google")}
                  disabled={!role}
                  className={`mt-6 flex py-2 justify-center w-8/12 mx-auto  gap-2 border-2 rounded-lg border-[#b9baba] ${
                    !role ? ` text-[#b9baba] ` : ` text-black `
                  }`}
                >
                  {!role ? (
                    <Icon className="text-2xl" icon="devicon-plain:google" />
                  ) : (
                    <Icon className="text-2xl" icon="devicon:google" />
                  )}
                  Sign up with Google
                </button> */}
              {/* <FacebookLogin
                  appId="785104936432032"
                  autoLoad={false}
                  isDisabled={!role}
                  fields="name,email,picture"
                  textButton="Sign up with facebook"
                  callback={responseFacebook}
                  onClick={handleFacebookSignUp}
                  cssClass={`my-facebook-button-class flex border-2 rounded-lg border-[#b9baba] py-2 w-8/12 mx-auto gap-2 justify-center mt-2 cursor-pointer ${
                    !role ? ` text-[#b9baba] ` : ` text-black `
                  }`}
                  icon={
                    !role ? (
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
                !role ? ` text-[#b9baba] ` : ` text-black `
              }`}
            >
              {!role ? (
                <Icon className="text-2xl" icon="simple-icons:facebook" />
              ) : (
                <Icon className="text-2xl" icon="logos:facebook" />
              )}
              Sign up with Facebook
            </button> */}

              <p className="my-2 text-center text-black">- OR -</p>
              <div className="p-10 text-black ">
                <h1 className="mb-6 text-center text-2xl font-bold">Log In</h1>

                <div className="">
                  <p className="mb-1 text-lg text-[#1b448f]">Email Address</p>
                  <input
                    {...register("email")}
                    //   type="email"
                    placeholder="newuser@myemail.com"
                    className={`w-full rounded-lg border-2 px-5 py-3 outline-none `.concat(
                      errors.email ? " border-[#FF007A]" : " border-[#b9baba]",
                    )}
                  />
                  {errors.email && (
                    <p className="rounded-md bg-[#FF007A] p-1.5 text-xs text-white">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mt-3">
                  <p className="mb-1 text-lg text-[#1b448f]">Password</p>
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    className="w-full rounded-lg border-2 border-[#b9baba] px-5 py-3 outline-none"
                  />
                  {errors.password && (
                    <p
                      className={`w-full rounded-lg border-2 px-5 py-3 outline-none `.concat(
                        errors.password
                          ? " border-[#FF007A]"
                          : " border-[#b9baba]",
                      )}
                    >
                      {errors.password.message}
                    </p>
                  )}
                  <div className="my-2 flex gap-1 text-[#5D6475]">
                    <p>Forgot your password? Please</p>
                    <p className="text-[#1b448f]"><button type="button" onClick={() => setIsOpenCommunityDialog(true)}>click here</button></p>
                    <p>to reset it.</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className={` mt-2 w-full rounded-lg bg-[#2668d8] py-2.5 text-lg  font-semibold text-white`}
                >
                  Log In
                </button>
                {loginError && (
                  <p
                    className={`mb-2 mt-2 w-full rounded-lg border-2 border-[#FF007A] bg-[#FF007A] px-5 py-3 outline-none `}
                  >
                    {loginError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ForgotPassword
        OpenDialog={isOpenCommunityDialog}
        setOpenDialog={setIsOpenCommunityDialog}
      />
      </>
    // </QueryClientProvider>
  );
}

export default SignIn;
