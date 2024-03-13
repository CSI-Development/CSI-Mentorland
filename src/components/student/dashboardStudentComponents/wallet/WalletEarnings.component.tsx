"use client";
import React from "react";

interface EarningData {
  action: "BUY" | "EARN" | "SALE";
  concept: string;
  date: string;
  in: number;
  out: number;
  status: "Completed" | "Pending";
  conceptBy: string;
}

const tableData: EarningData[] = [
  {
    action: "BUY",
    concept: "Courses Make Millions Initial Level",
    date: "Feb 21,2023",
    in: 0.0,
    out: 0.0,
    status: "Completed",
    conceptBy: "Cody Getchell",
  },
  {
    action: "BUY",
    concept: "Courses Make Millions VIP Levell",
    date: "May 21,2023",
    in: 0.0,
    out: 3000,
    status: "Completed",
    conceptBy: "Cody Getchell",
  },
  {
    action: "EARN",
    concept: "Courses Make Millions Initial Level",
    date: "Feb 21,2023",
    in: 0.0,
    out: 0.0,
    status: "Completed",
    conceptBy: "Access Card",
  },
  {
    action: "SALE",
    concept: "Courses Make Millions Initial Level",
    date: "Feb 21,2023",
    in: 1800,
    out: 0.0,
    status: "Completed",
    conceptBy: "Engelbert Bryughternexter",
  },
  {
    action: "BUY",
    concept: "Courses Make Millions Initial Level",
    date: "Feb 21,2023",
    in: 0.0,
    out: 0.0,
    status: "Completed",
    conceptBy: "Cody Getchell",
  },
];

const WalletEarnings = () => {
  return (
    <div className="w-full h-fit text-black ">
      <table className="w-full text-sm border-spacing-y-3 border-separate">
        <thead className="font-semibold mb-5 text-start">
          <th className="text-start">ACTION</th>
          <th className="text-start">CONCEPT</th>
          <th className="text-start">DATE</th>
          <th className="text-start">IN</th>
          <th className="text-start">OUT</th>
          <th className="text-start">STATUS</th>
        </thead>
        <tbody className="w-full">
          {tableData.map((earning) => (
            <tr className="w-full mt-6">
              <td>{earning.action}</td>
              <td className="w-1/3">
                {earning.concept} <br /> By{" "}
                <span className="font-semibold">{earning.conceptBy}</span>
              </td>
              <td>{earning.date}</td>
              <td>{earning.in}</td>
              <td>{earning.out}</td>
              <td>{earning.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletEarnings;
