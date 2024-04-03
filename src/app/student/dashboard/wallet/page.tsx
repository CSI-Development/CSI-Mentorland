"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Layout from "../../../../components/Layouts/DashboardLayout";
import WalletEarnings from "@/components/student/dashboardStudentComponents/wallet/WalletEarnings.component";
import WalletFundings from "@/components/student/dashboardStudentComponents/wallet/WalletFundings.component";
import WalletAssets from "@/components/student/dashboardStudentComponents/wallet/WalletAssets.compnent";

const Wallet = () => {
  const [currentTab, setCurrentTab] = useState<string>("assets");
  const tabData = [
    {
      label: "Assets",
      value: "assets",
    },
    {
      label: "Earnings Summary",
      value: "earnings",
    },
    {
      label: "Fundings",
      value: "fundings",
    },
  ];
  return (
    <Layout showSidebar={true}>
      <div className="text-black w-full h-full pt-5 px-3">
        <h1 className="font-bold text-xl mb-5 ">My Wallet</h1>
        <Tabs value={currentTab}>
          <TabsHeader
            className="w-2/5 shadow-none rounded-none pt-2 bg-white"
            indicatorProps={{
              className:
                "shadow-none border-b-4  font-bold border-primary rounded-none",
            }}
            placeholder="ee"
          >
            {tabData.map(({ label, value }) => (
              <Tab
                placeholder="e"
                className="text-sm shadow-none pb-2 "
                key={value}
                value={value}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            placeholder={"Dee"}
            className="w-full  p-0 border-t-[1px] border-gray-400"
          >
            <TabPanel value="assets" className="w-full p-0 pt-5">
              <WalletAssets />
            </TabPanel>
            <TabPanel value="earnings" className="w-full p-0 pt-5">
              <WalletEarnings />
            </TabPanel>
            <TabPanel value="fundings">
              <WalletFundings />
            </TabPanel>
            {/* {tabData.map(({ value }) => (
            <TabPanel key={value} value={value} className="w-full p-0">
              <div>hehe</div>
            </TabPanel>
          ))} */}
          </TabsBody>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Wallet;
