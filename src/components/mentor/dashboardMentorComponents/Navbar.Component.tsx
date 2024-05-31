/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { mentorDetailsApi } from "@/app/api/mentorDetails/mentorDetails.api";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";
import { AppContext } from "@/providers/ContextProvider";
import ConnectModal from "@/components/modals/connectModal";
import { logout } from "@/utils/common";
import { useMagic } from "@/providers/MagicProvider";
import ViewNotifications from "@/components/modals/notifications";

function Navbar() {
  const router = useRouter();
  const { setOpenWallet, openWallet, setMToken } = useContext(AppContext);
  const [isOpenNotificationDialog, setIsOpenNotificationDialog] =
    useState<boolean>(false);
  const { magic } = useMagic();

  const { data } = useQuery({
    queryKey: ["mentorDetails"],
    queryFn: () => mentorDetailsApi(),
  });
  console.log(openWallet, "openWallet");
  const logOut = async () => {
    await logout(setMToken, magic);
    deleteCookie("token");
    deleteCookie("role");
    deleteCookie("user_email");
    router.push("/");
  };

  return (
    <header className="fixed z-50 flex h-[78px] w-full items-center justify-between border-b-[3px] border-[#2769D9] bg-white px-8 py-5">
      <div className="flex items-center gap-10">
        <Image src="/svg/logo.svg" alt="store" width={55} height={38} />
        <select
          name="community"
          id="community"
          // Value="community"
          className="w-100 ml-5 cursor-pointer border-0 bg-white text-base font-bold text-[#0E2245] outline-none"
        >
          <option value="home" className="border-none bg-white outline-none">
            Home
          </option>
          <option
            value="community"
            className="border-none bg-white outline-none"
            selected
          >
            Cody Gretchell Community
          </option>
        </select>
      </div>
      <div></div>
      <div className="flex items-center gap-4 text-3xl text-[#2769D9]">
        <Image src="/svg/Store.svg" alt="store" width={30} height={30} />
        <Image src="/svg/Group.svg" alt="store" width={30} height={30} />
        <Image src="/svg/chat.svg" alt="store" width={30} height={30} />
        <Image src="/svg/language.svg" alt="store" width={30} height={30} />
        <Icon
          className="cursor-pointer"
          onClick={() => setIsOpenNotificationDialog(true)}
          icon="pepicons-pencil:bell"
          data-ripple-dark="true" data-popover-target="notifications-menu"
        />{" "}
        
        <Icon
          icon="uit:wallet"
          className="cursor-pointer"
          width={40}
          height={40}
          onClick={() => {
            setOpenWallet(true);
          }}
        />
        <Image
          src={data?.mentorAvatar ?? "/svg/user.svg"}
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
        <ConnectModal />
        <ViewNotifications
          OpenDialog={isOpenNotificationDialog}
          setOpenDialog={setIsOpenNotificationDialog}
        />
      </div>
    </header>
  );
}

export default Navbar;
