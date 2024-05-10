/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import smallLogo from "../../../../public/mentorlandSmallLogo.png";
import profile from "../../../../public/selectSubject/subjectMentor.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useQuery } from "@tanstack/react-query";
import { useDetailsApi } from "@/app/api/userDetails/userDetails.api";

function Navbar() {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["userdetails"],
    queryFn: () => useDetailsApi(),
  });

  const logOut = () => {
    deleteCookie("token");
    deleteCookie("role");
    router.push("/");
  };

  return (
    <nav className="fixed z-50 flex w-full justify-between border-b-2 border-[#2668d8] bg-[#fffefe] p-4">
      <div className="flex">
        <Image src={smallLogo} alt="Mentorland" />
        <p className="my-auto border-r-2 border-gray-300 px-5 text-xl font-bold text-black ">
          General Dashboard
        </p>
      </div>
      <div className="my-auto flex items-center gap-4 text-3xl text-[#2668d8]">
        <Link href="/student/marketplace">
          <Icon icon="fluent:building-shop-20-regular" />
        </Link>
        <Icon icon="ph:chats-duotone" />
        <Icon icon="material-symbols:translate" />
        <Icon icon="pepicons-pencil:bell" />
        <Icon icon="uit:wallet" />
        <Image
          src={data?.studentAvatar ?? profile}
          alt="Profile"
          width={36}
          height={36}
          className="h-9 w-9 rounded-full"
        />
        <div>
          <button
            className="rounded border border-[#2668d8] bg-[#2668d8] px-3 py-2 text-sm text-white"
            onClick={logOut}
          >
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
