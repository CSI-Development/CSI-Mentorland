"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import WalletEarnings from "@/components/student/dashboardStudentComponents/wallet/WalletEarnings.component";
import WalletFundings from "@/components/student/dashboardStudentComponents/wallet/WalletFundings.component";
import WalletAssets from "@/components/student/dashboardStudentComponents/wallet/WalletAssets.compnent";
import DashboardLayout from "@/layouts/DashboardLayout";

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
    <DashboardLayout showSidebar={true}>
      <div className="h-full w-full px-3 pt-5 text-black">
        <h1 className="mb-5 text-xl font-bold ">My Wallet</h1>
        <Tabs value={currentTab}>
          <TabsHeader
            className="w-2/5 rounded-none bg-white pt-2 shadow-none"
            indicatorProps={{
              className:
                "shadow-none border-b-4  font-bold border-primary rounded-none",
            }}
            placeholder="ee"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {tabData.map(({ label, value }) => (
              <Tab
                placeholder="e"
                className="pb-2 text-sm shadow-none "
                key={value}
                value={value}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            placeholder={"Dee"}
            className="w-full  border-t-[1px] border-gray-400 p-0"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
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
    </DashboardLayout>
  );
};

export default Wallet;
