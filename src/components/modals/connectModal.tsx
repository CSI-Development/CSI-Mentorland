/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { AppContext } from "@/providers/ContextProvider";
import { Dialog } from "@material-tailwind/react";
import React, { useContext } from "react";
import LoginWallet from "./loginWallet";
import { Icon } from "@iconify/react/dist/iconify.js";
import WalletInfo from "./walletInfo";

const ConnectModal = () => {
  const { openWallet, mToken, setOpenWallet } = useContext(AppContext);
  return (
    <Dialog
      size="xs"
      open={openWallet}
      handler={() => console.log("opened")}
      placeholder
      className="relative p-8"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Icon
        onClick={() => {
          setOpenWallet(false);
        }}
        className="absolute right-4 top-4 cursor-pointer text-black"
        icon="maki:cross"
      />
      {mToken.length > 0 ? <WalletInfo /> : <LoginWallet />}
    </Dialog>
  );
};

export default ConnectModal;
