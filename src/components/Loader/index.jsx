"use client"
import { AppContext } from "@/providers/ContextProvider";
import { useContext } from "react";

function Loader() {
  const { loading } = useContext(AppContext);
  return (
    <div className={`${loading ? "flex" : "hidden"} w-full h-screen bg-blue-gray-900/80 backdrop-blur-lg justify-center items-center fixed z-50`}>
        <img src="/mentorlandSmallLogo.png" alt="" className="h-32 w-40 animate-bounce" />
    </div>
  )
}

export default Loader