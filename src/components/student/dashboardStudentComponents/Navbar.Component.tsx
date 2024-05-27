/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useContext } from "react";
import smallLogo from "../../../../public/mentorlandSmallLogo.png";
import profile from "../../../../public/selectSubject/subjectMentor.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useQuery } from "@tanstack/react-query";
import { useDetailsApi } from "@/app/api/userDetails/userDetails.api";
import ConnectModal from "@/components/modals/connectModal";
import { AppContext } from "@/providers/ContextProvider";
import { useMagic } from "@/providers/MagicProvider";
import { logout } from "@/utils/common";

function Navbar() {
  const router = useRouter();
  const { setOpenWallet, setMToken } = useContext(AppContext);
  const { magic } = useMagic();

  const { data } = useQuery({
    queryKey: ["userdetails"],
    queryFn: () => useDetailsApi(),
  });

  const logOut = async () => {
    await logout(setMToken, magic);
    deleteCookie("token");
    deleteCookie("role");
    deleteCookie("user_email");
    router.push("/");
  };
  const handleChange = () => {
    router.push("/student/posts");
  };

  return (
    <nav className="fixed z-50 flex w-full justify-between border-b-2 border-[#2668d8] bg-[#fffefe] p-4">
      <div className="flex">
        <Image src={smallLogo} alt="Mentorland" />
        {/* <p className="my-auto border-r-2 border-gray-300 px-5 text-xl font-bold text-black ">
          General Dashboard
        </p> */}
        <div className="flex items-center gap-10">
          <select
            name="community"
            id="community"
            // Value="community"
            className="w-100 ml-5 cursor-pointer border-0 bg-white text-base font-bold text-[#0E2245] outline-none"
            onChange={handleChange}
          >
            <option value="home" className="border-none bg-white outline-none">
              Home
            </option>
            <option
              value="community"
              className="border-none bg-white outline-none"
              selected
            >
              General Dashboard
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-4 text-3xl text-[#2668d8]">
        <Link href="/student/marketplace">
          <Icon icon="fluent:building-shop-20-regular" />
        </Link>
        <Icon icon="ph:chats-duotone" />
        <Icon icon="material-symbols:translate" />
        <Icon icon="pepicons-pencil:bell" />
        <Icon
          icon="uit:wallet"
          className="cursor-pointer"
          width={40}
          height={40}
          onClick={() => setOpenWallet(true)}
        />
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
      <ConnectModal />
    </nav>
  );
}

export default Navbar;
