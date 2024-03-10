"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function Sidebar() {
  return (
    <div className="w-3/12 h-full bg-[#fffefe] pt-24 border-r-2">

      <div className="flex text-black justify-start gap-2 px-8 py-2  bg-slate-400">
        <Icon icon="mdi-light:view-dashboard" className="text-3xl" />
        <p className="text-lg my-auto">Dashboard</p>
      </div>

      <div className="flex text-black justify-start gap-2 px-8 py-2  ">
        <Icon icon="fluent:people-community-20-regular" className="text-3xl" />
        <p className="text-lg my-auto">My Communities</p>
      </div>

      <div className="flex text-black justify-start gap-2 px-8 py-2  ">
        <Icon icon="f7:wallet" className="text-3xl" />
        <p className="text-lg my-auto">My Wallet</p>
      </div>

      <div className="flex text-black justify-start gap-2 px-8 py-2  ">
        <Icon icon="ion:mail-outline" className="text-3xl" />
        <p className="text-lg my-auto">Notification</p>
      </div>

      <div className="flex text-black justify-start gap-2 px-8 py-2  ">
        <Icon icon="solar:health-linear" className="text-3xl" />
        <p className="text-lg my-auto">Wishlist</p>
      </div>

      <div className="flex text-black justify-start gap-2 px-8 py-2  ">
        <Icon icon="uil:schedule" className="text-3xl" />
        <p className="text-lg my-auto">My Schedule</p>
      </div>

      <div className="flex text-black justify-start gap-2 px-8 py-2  ">
        <Icon icon="uim:analytics" className="text-3xl" />
        <p className="text-lg my-auto">Analytics</p>
      </div>
    </div>
  );
}

export default Sidebar;
