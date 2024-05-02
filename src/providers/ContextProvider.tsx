"use client"
import React, { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

const ContextProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [loading, setLoading] = useState(false);
  const contextProps = {
    loading,
    setLoading,
  };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
