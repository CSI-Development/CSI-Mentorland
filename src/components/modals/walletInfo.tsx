/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { AppContext } from "@/providers/ContextProvider";
import { useMagic } from "@/providers/MagicProvider";
import { logout } from "@/utils/common";
import { getNetworkName, getNetworkToken } from "@/utils/network";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { type Numbers } from "web3";

const WalletInfo = () => {
  const { magic, web3 } = useMagic();

  const { setMToken } = useContext(AppContext);

  const [balance, setBalance] = useState("...");
  const [copied, setCopied] = useState("Copy");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [publicAddress] = useState(localStorage.getItem("user"));

  const getBalance = useCallback(async () => {
    if (publicAddress && web3) {
      const balance: Numbers = await web3.eth.getBalance(publicAddress);
      if (balance == BigInt(0)) {
        setBalance("0");
      } else {
        setBalance(web3.utils.fromWei(balance, "ether"));
      }
      console.log("BALANCE: ", balance);
    }
  }, [web3, publicAddress]);

  const refresh = useCallback(async () => {
    setIsRefreshing(true);
    await getBalance();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  }, [getBalance]);

  useEffect(() => {
    if (web3) {
      void refresh();
    }
  }, [web3, refresh]);

  useEffect(() => {
    setBalance("...");
  }, [magic]);

  const disconnect = useCallback(async () => {
    if (magic) {
      await logout(setMToken, magic);
    }
  }, [magic, setMToken]);

  const copy = useCallback(() => {
    if (publicAddress && copied === "Copy") {
      setCopied("Copied!");
      void navigator.clipboard.writeText(publicAddress);
      setTimeout(() => {
        setCopied("Copy");
      }, 1000);
    }
  }, [copied, publicAddress]);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 font-medium">
      <h1 className="text-left text-lg font-bold text-black">Wallet</h1>
      <button
        className="rounded-md border-2 px-4 py-2 font-medium text-red-600 hover:shadow-lg"
        onClick={disconnect}
      >
        Disconnect
      </button>
      <div className="flex w-full items-center justify-around gap-4">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        <div className="connected">Connected to {getNetworkName()}</div>
      </div>
      <div className="flex w-full items-center justify-around gap-4">
        <h1>Address</h1>
        {!publicAddress ? (
          <p>Loading...</p>
        ) : (
          <div
            onClick={copy}
            className="w-12 cursor-pointer text-center text-blue-400"
          >
            {copied}
          </div>
        )}
      </div>
      <div className="w-full break-words rounded-md border px-4 py-2 text-center bg-blue-gray-50">
        {publicAddress?.length == 0 ? "Fetching address.." : publicAddress}
      </div>
      <div className="flex w-full items-center justify-around gap-4">
        <h1>Balance</h1>
        {isRefreshing ? (
          <p>Loading...</p>
        ) : (
          <div
            onClick={refresh}
            className="w-12 cursor-pointer text-center text-blue-400"
          >
            Refresh
          </div>
        )}
      </div>
      <div className="w-full break-words rounded-md border px-4 py-2 text-center bg-blue-gray-50">
        {balance.substring(0, 7)} {getNetworkToken()}
      </div>
    </div>
  );
};

export default WalletInfo;
