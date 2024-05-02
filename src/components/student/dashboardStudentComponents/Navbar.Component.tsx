"use client";
import React from "react";
import smallLogo from "../../../../public/mentorlandSmallLogo.png";
import profile from "../../../../public/selectSubject/subjectMentor.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

function Navbar() {

  const router = useRouter()

  const logOut = () => {
    deleteCookie("token");
    deleteCookie("role");
    router.push("/");
  };

  return (
    <nav className="flex bg-[#fffefe] fixed w-full p-4 justify-between border-b-2 border-[#2668d8]">
      <div className="flex">
        <Image src={smallLogo} alt="Mentorland" />
        <p className="text-black my-auto text-xl font-bold px-5 border-r-2 border-gray-300 ">
          General Dashboard
        </p>
      </div>
      <div className="flex text-[#2668d8] text-3xl gap-4 my-auto items-center">
        <Link href="/student/marketplace">
          <Icon icon="fluent:building-shop-20-regular" />
        </Link>
        <Icon icon="ph:chats-duotone" />
        <Icon icon="material-symbols:translate" />
        <Icon icon="pepicons-pencil:bell" />
        <Icon icon="uit:wallet" />
        <Image src={profile} alt="Profile" className="h-9 w-9" />
        <div>
          <button
            className="text-sm border border-[#2668d8] px-3 py-2 rounded bg-[#2668d8] text-white"
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
