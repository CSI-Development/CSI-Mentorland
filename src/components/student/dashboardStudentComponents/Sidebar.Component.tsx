"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

function Sidebar() {
  const pathname = usePathname();

  const [selectedSidebarOption, setSelectedSidebarOption] =
    useState("dashboard");

  return (
    <div className="w-1/5 h-full bg-[#fffefe] pt-24 border-r-2">
      <Link href="/student/dashboard">
        <div // Use <a> tag for the Link component's child element
          className={`flex items-center gap-2 px-8 py-2 text-black justify-start 
            ${
              pathname.includes("/student/dashboard") &&
              !pathname.includes("/student/dashboard/") // Check if pathname is exactly "/student/dashboard"
                ? "bg-[#90A4B6] text-white" // Selected style
                : "" // Default style
            }`}
        >
          <Icon icon="mdi-light:view-dashboard" className="text-3xl" />
          <p className="text-lg my-auto">Dashboard</p>
        </div>
      </Link>

      <Link href="/student/dashboard/communities">
        <div // Use <a> tag for the Link component's child element
          className={`flex items-center gap-2 px-8 py-2 text-black justify-start 
            ${
              pathname.includes("/student/dashboard/communities")
                ? "bg-[#90A4B6] text-white" // Selected style
                : "" // Default style
            }`}
        >
          <Icon
            icon="fluent:people-community-20-regular"
            className="text-3xl"
          />
          <p className="text-lg my-auto">My Communities</p>
        </div>
      </Link>

      <Link href="/student/dashboard/wallet">
        <div // Use <a> tag for the Link component's child element
          className={`flex items-center gap-2 px-8 py-2 text-black justify-start 
            ${
              pathname === "/student/dashboard/wallet"
                ? "bg-[#90A4B6]  text-white"
                : ""
            }
          `}
        >
          <Icon icon="f7:wallet" className="text-3xl" />
          <p className="text-lg my-auto">My Wallet</p>
        </div>
      </Link>

      <Link href="/student/dashboard/notification">
        <div // Use an 'a' tag inside 'Link' for proper navigation
          className={`flex items-center gap-2 px-8 py-2 text-black justify-start 
          ${
            pathname === "/student/dashboard/notification"
              ? "bg-[#90A4B6] text-white"
              : ""
          }
          `}
        >
          <Icon icon="ion:mail-outline" className="text-3xl" />
          <p className="text-lg my-auto">Notification</p>
        </div>
      </Link>

      <Link href="/student/dashboard/wishlist">
        <div // Use an 'a' tag inside 'Link' for proper navigation
          className={`flex items-center gap-2 px-8 py-2 text-black justify-start 
            ${
              pathname === "/student/dashboard/wishlist"
                ? "bg-[#90A4B6] text-white"
                : ""
            }
          `}
        >
          <Icon icon="solar:health-linear" className="text-3xl" />
          <p className="text-lg my-auto">Wishlist</p>
        </div>
      </Link>

      <Link href="/student/dashboard/schedule">
        <div
          className={`flex items-center gap-2 px-8 py-2 text-black justify-start 
          ${
            pathname === "/student/dashboard/schedule"
              ? "bg-[#90A4B6] text-white"
              : ""
          }
        `}
        >
          <Icon icon="uil:schedule" className="text-3xl" />
          <p className="text-lg my-auto">My Schedule</p>
        </div>
      </Link>

      <Link href="/student/dashboard/analytics">
        <div
          className={`flex items-center gap-2 px-8 py-2 text-black justify-start 
          ${
            pathname === "/student/dashboard/analytics"
              ? "bg-[#90A4B6] text-white"
              : ""
          }
        `}
        >
          <Icon icon="uim:analytics" className="text-3xl" />
          <p className="text-lg my-auto">Analytics</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
