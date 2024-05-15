/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
import React, { createContext, useEffect, useState } from "react";

interface contextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  openWallet: boolean;
  setOpenWallet: React.Dispatch<React.SetStateAction<boolean>>;
  mToken: string;
  setMToken: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContextValue: contextType = {
  loading: false,
  setLoading: () => {}, // Placeholder function
  openWallet: false,
  setOpenWallet: () => {},
  mToken: "",
  setMToken: () => {}
};

export const AppContext = createContext<contextType>(defaultContextValue);

const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [loading, setLoading] = useState<boolean>(defaultContextValue.loading);
  const [mToken, setMToken] = useState("");
  const [openWallet, setOpenWallet] = useState(false)
  const contextProps = {
    loading,
    setLoading,
    mToken,
    setMToken,
    openWallet,
    setOpenWallet
  };

  useEffect(() => {
    setMToken(localStorage.getItem('mtoken') ?? '');
  }, [setMToken])
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
