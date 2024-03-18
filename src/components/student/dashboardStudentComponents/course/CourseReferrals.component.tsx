"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface TableData {
  name: string;
  email: string;
  joined: boolean;
  earnings: number;
}

const tableData: TableData[] = [
  {
    name: "Molderti Minthyret",
    email: "monmin@gmail.com",
    joined: true,
    earnings: 250,
  },
  {
    name: "Guguty Byuene",
    email: "gugu@gmail.com",
    joined: true,
    earnings: 250,
  },
  {
    name: "Fyryeye Blogieoi",
    email: "bolofor@gmail.com",
    joined: false,
    earnings: 0,
  },
];

const CourseReferrals = () => {
  return (
    <div className="w-full h-full p-3 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <h1 className="text-sm font-semibold text-gray-700">Your Referrals</h1>
        <h1 className="text-sm font-semibold text-primary">
          See your Earnings
        </h1>
      </div>
      <div className="w-full">
        <table className="w-full mt-3 border-separate border-spacing-y-3">
          <thead className="text-xs  text-gray-600 font-semibold">
            <th className="text-start">NAME</th>
            <th className="text-start"> EMAIL</th>
            <th className="text-center">JOINED?</th>
            <th className="text-end">YOUR EARNING</th>
          </thead>
          <tbody>
            {tableData.map((item, idx) => {
              return (
                <tr key={idx} className="text-sm">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className="text-center grid place-items-center">
                    {item.joined ? (
                      <Icon icon="icon-park-solid:correct" color="green" />
                    ) : (
                      <Icon icon="icomoon-free:cross" color="red" />
                    )}
                  </td>
                  <td className="text-end">${item.earnings}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full mt-12 flex justify-between items-center font-bold text-2xl text-gray-700">
        <h1>Total Earned</h1>
        <h1>$500</h1>
      </div>
    </div>
  );
};

export default CourseReferrals;
