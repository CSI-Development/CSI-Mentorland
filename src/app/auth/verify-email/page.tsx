'use client';
import Image from "next/image";
import React from "react";
import sideCoverImage from "../../../../public/onboardStudent/signupSideImage.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VerifyEmail from "@/components/auth/verifyemail/VerifyEmail.component";
type Props = {};
export const queryClient = new QueryClient();

function verifyEmail() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full bg-white flex">
        <img className="h-screen" src={sideCoverImage.src} />
        <div className="w-full overflow-y-scroll h-screen ">
          <VerifyEmail />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default verifyEmail;
