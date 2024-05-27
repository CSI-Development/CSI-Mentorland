"use client";
import React from "react";
import { Icon } from "@iconify/react";

const WalletFundings = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="w-2/4 flex flex-col gap-4 mt-8">
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center text-lg gap-2 font-medium p-3 bg-primary rounded-lg text-white">
            <Icon icon="flowbite:download-solid" className="w-6 h-6"></Icon>
            Add Funds
          </button>
          <button className="flex-1 flex items-center justify-center text-lg gap-2 font-medium p-3 bg-primary rounded-lg text-white">
            <Icon icon="flowbite:upload-solid" className="w-6 h-6"></Icon>
            Transfer Funds
          </button>
        </div>
        <div className="w-full h-[30vh] bg-white flex flex-col gap-2 items-center justify-center rounded-lg shadow-md">
          <h1 className="text-sm">Your Current Balance is</h1>
          <h1 className="text-2xl font-extrabold text-gray-700">$12,034.00</h1>
        </div>
      </div>
    </div>
  );
};

export default WalletFundings;
