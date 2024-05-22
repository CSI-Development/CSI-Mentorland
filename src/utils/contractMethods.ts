/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import LCERT_ABI from "@/assets/LCert.json";
import CSI_ABI from "@/assets/CSI.json";
import { toast } from "react-toastify";

const contractAddress = process.env.NEXT_PUBLIC_CERT_CONTRACT;
const adminAddress = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

export const createLCErtAddress = async (web3: any, courseName: string, courseSymbol: string) => {
  const address = localStorage.getItem("user");
  if (address) {
    const contract = new web3.eth.Contract(CSI_ABI, contractAddress);
    const value = await contract.methods
      .createLCert(courseName, courseSymbol, 1000, true, true, adminAddress, [address])
      .send({ from: address });
    return value;
  } else {
    toast.error("Please connect wallet");
  }
}

export const mint = async (
  web3: any,
  studentAddress: string,
  tokenURI: string,
  courseAddress: string
) => {
  console.log(web3, studentAddress, tokenURI, courseAddress, "weew");
  const address = localStorage.getItem("user");
  if (address) {
    const contract = new web3.eth.Contract(LCERT_ABI, courseAddress);
    const value = await contract.methods
      .mint(studentAddress, tokenURI, 365)
      .send({ from: address });
    console.log(value, "valllll");
    return value;
  } else {
    toast.error("Please connect wallet");
  }
};

export const getSymbol = async (web3: any) => {
  const address = localStorage.getItem("user");
  if (address) {
    const contract = new web3.eth.Contract(LCERT_ABI, contractAddress);
    const value = await contract.methods.symbol().call();
    console.log(value, "valllll");
    return value;
  } else {
    toast.error("Please connect wallet");
  }
};
