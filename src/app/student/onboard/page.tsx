"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import OnboardingPageTracker from "@/components/student/onboard/OnboardingPageTracker.Component";
import StageOne from "@/components/student/onboard/StageOne.Component";
import { Icon } from "@iconify/react/dist/iconify.js";
import StageTwo from "@/components/student/onboard/StageTwo.Component";
import StageThree from "@/components/student/onboard/StageThree.Component";
import StageFour from "@/components/student/onboard/StageFour.Component";
import Link from "next/link";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { decodeToken } from "@/utils/jwt";
import { verifyEmail } from "@/api/verifyEmail/verifyEmail.api";
import OnboardingMain from "@/components/student/onboard/OnboardingMain.component";

export const queryClient = new QueryClient();

function StudentOnboard() {
  return (
    <QueryClientProvider client={queryClient}>
      <OnboardingMain />
    </QueryClientProvider>
  );
}

export default StudentOnboard;
