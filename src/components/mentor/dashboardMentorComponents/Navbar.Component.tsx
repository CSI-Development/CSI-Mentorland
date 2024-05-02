"use client"
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {

  const router = useRouter()

  const logOut = () => {
    deleteCookie("token");
    deleteCookie("role");
    router.push("/");
  };

  return (
    <header className="w-full h-[78px] bg-white flex px-8 py-5 justify-between items-center border-b-[3px] border-[#2769D9] fixed z-50">
    <div className="flex items-center gap-10">
      <Image src="/svg/logo.svg" alt="store" width={55} height={38} />
      <select
        name="community"
        id="community"
        // Value="community"
        className="bg-white outline-none border-0 w-100 ml-5 font-bold text-[#0E2245] text-base cursor-pointer"
      >
        <option value="home" className="bg-white outline-none border-none">
          Home
        </option>
        <option
          value="community"
          className="bg-white outline-none border-none"
          selected
        >
          Cody Gretchell Community
        </option>
      </select>
    </div>
    <div></div>
    <div className="flex text-3xl text-[#2769D9] gap-[30px]">
      <Image src="/svg/Store.svg" alt="store" width={30} height={30} />
      <Image src="/svg/Group.svg" alt="store" width={30} height={30} />
      <Image src="/svg/chat.svg" alt="store" width={30} height={30} />
      <Image src="/svg/language.svg" alt="store" width={30} height={30} />
      <Image src="/svg/bell.svg" alt="store" width={30} height={30} />
      <Image src="/svg/Wallet.svg" alt="store" width={30} height={30} />
      <Image
        src="/svg/user.svg"
        alt="user"
        width={55}
        height={55}
        className="rounded-full p-[1px] bg-[#2769d9]"
      />
      <div>
          <button
            className="text-sm border border-[#2668d8] px-3 py-2 rounded bg-[#2668d8] text-white"
            onClick={logOut}
          >
            LogOut
          </button>
        </div>
    </div>
  </header>
  )
}

export default Navbar