/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
import React, { createContext, useState } from "react";

interface contextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: contextType = {
  loading: false,
  setLoading: () => {}, // Placeholder function
};

export const AppContext = createContext<contextType>(defaultContextValue);

const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [loading, setLoading] = useState<boolean>(defaultContextValue.loading);
  const contextProps = {
    loading,
    setLoading,
  };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
