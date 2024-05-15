"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import Link from "next/link";

function Header() {

  return (
    <nav className="fixed top-0 z-50 flex w-full justify-between bg-[#010d27] px-10 py-5">
      <div>
        <Image alt="logo" src={Logo} />
      </div>
      <div className="flex justify-center gap-5 text-xl">
        <button>What we do</button>
        <button>Categories</button>
        <button>Search</button>
        <Link className="my-auto" href={"/auth/signup"}>
          <button>Sign Up</button>
        </Link>
        <Link className="my-auto" href={"/auth/signin"}>
          <button>Log In</button>
        </Link>
      </div>
      {/* <LoginDialog
          OpenDialog={isOpenLoginDialog}
          setOpenDialog={setIsOpenLoginDialog}
        /> */}
    </nav>
  );
}

export default Header;
