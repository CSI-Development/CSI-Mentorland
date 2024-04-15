'use client';
import React from "react";
import Header from "../commonComponents/Header.Component";
import Content from "./Content.Component";
import LoginDialog from "../loginDialog/LoginDialog.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();
function LandingPage() {
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <Header />
        <Content />
      </QueryClientProvider>
    </>
  );
}

export default LandingPage;
