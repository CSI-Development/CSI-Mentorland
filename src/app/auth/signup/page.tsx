'use client';
import Image from "next/image";
import React from "react";
import sideCoverImage from "../../../../public/onboardStudent/signupSideImage.png";
import SignUpForm from "@/components/auth/signUp/SignUpForm.Component";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// type Props = {};
// export const queryClient = new QueryClient();

function signUp() {
  return (
    // <QueryClientProvider client={queryClient}>
      <div className="w-full bg-white flex">
        <img className="h-screen" src={sideCoverImage.src} />
        <div className="w-full overflow-y-scroll h-screen ">
          <SignUpForm />
        </div>
      </div>
    // </QueryClientProvider>
  );
}

export default signUp;
