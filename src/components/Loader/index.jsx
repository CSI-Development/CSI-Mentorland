"use client";
import { AppContext } from "@/providers/ContextProvider";
import Image from "next/image";
import { useContext } from "react";

function Loader() {
  const { loading } = useContext(AppContext);
  return (
    <div
      className={`${loading ? "flex" : "hidden"} fixed z-50 h-screen w-full items-center justify-center backdrop-blur-lg`}
      style={{background: "#0008"}}
    >
      <Image
        src="/mentorlandSmallLogo.png"
        alt=""
        className="animate-bounce"
        width={160}
        height={128}
      />
    </div>
  );
}

export default Loader;
