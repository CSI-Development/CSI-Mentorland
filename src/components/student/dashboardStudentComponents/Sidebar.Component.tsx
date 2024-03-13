"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar() {
  const [selectedSidebarOption, setSelectedSidebarOption] =
    useState("dashboard");
  return (
    <div className="w-1/5 h-full bg-[#fffefe] pt-24 border-r-2">
      <Link href="/student/dashboard">
        <div
          className={`flex text-black justify-start gap-2 px-8 py-2 
          ${
            selectedSidebarOption === "dashboard" ? `bg-[#90A4B6]` : `null `
          }`}
          onClick={() => setSelectedSidebarOption("dashboard")}
        >
          <Icon icon="mdi-light:view-dashboard" className="text-3xl" />
          <p className="text-lg my-auto">Dashboard</p>
        </div>
      </Link>

      <Link href="/student/dashboard/communities">
        <div
          className={`flex text-black justify-start gap-2 px-8 py-2 
        ${selectedSidebarOption === "communities" ? `bg-[#90A4B6]` : `null `}`}
          onClick={() => setSelectedSidebarOption("communities")}
        >
          <Icon
            icon="fluent:people-community-20-regular"
            className="text-3xl"
          />
          <p className="text-lg my-auto">My Communities</p>
        </div>
      </Link>

      <Link href="/student/dashboard/wallet">
        <div
          className={`flex text-black justify-start gap-2 px-8 py-2 
        ${selectedSidebarOption === "wallet" ? `bg-[#90A4B6]` : `null `}`}
          onClick={() => setSelectedSidebarOption("wallet")}
        >
          <Icon icon="f7:wallet" className="text-3xl" />
          <p className="text-lg my-auto">My Wallet</p>
        </div>
      </Link>

      <Link href="/student/dashboard/notification">
        <div
          className={`flex text-black justify-start gap-2 px-8 py-2 
        ${selectedSidebarOption === "notification" ? `bg-[#90A4B6]` : `null `}`}
          onClick={() => setSelectedSidebarOption("notification")}
        >
          <Icon icon="ion:mail-outline" className="text-3xl" />
          <p className="text-lg my-auto">Notification</p>
        </div>
      </Link>

      <Link href="/student/dashboard/wishlist">
        <div
          className={`flex text-black justify-start gap-2 px-8 py-2 
        ${selectedSidebarOption === "wishlist" ? `bg-[#90A4B6]` : `null `}`}
          onClick={() => setSelectedSidebarOption("wishlist")}
        >
          <Icon icon="solar:health-linear" className="text-3xl" />
          <p className="text-lg my-auto">Wishlist</p>
        </div>
      </Link>

      <Link href="/student/dashboard/schedule">
        <div
          className={`flex text-black justify-start gap-2 px-8 py-2 
        ${selectedSidebarOption === "schedule" ? `bg-[#90A4B6]` : `null `}`}
          onClick={() => setSelectedSidebarOption("schedule")}
        >
          <Icon icon="uil:schedule" className="text-3xl" />
          <p className="text-lg my-auto">My Schedule</p>
        </div>
      </Link>

      <Link href="/student/dashboard/analytics">
        <div
          className={`flex text-black justify-start gap-2 px-8 py-2 
        ${selectedSidebarOption === "analytics" ? `bg-[#90A4B6]` : `null `}`}
          onClick={() => setSelectedSidebarOption("analytics")}
        >
          <Icon icon="uim:analytics" className="text-3xl" />
          <p className="text-lg my-auto">Analytics</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
