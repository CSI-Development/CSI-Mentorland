"use client";
import React, { useState } from "react";
import PayWithCard from "./PayWithCard.Component";
import Link from "next/link";

function PaymentProcessContent() {
  return (
    <div className="overflow-hidden bg-[#010d27]">
      <div className="h-screen pt-20">
        {
          <div className="w-full h-full overflow-y-scroll pb-5">
            <p className="text-center font-semibold text-3xl mt-10 w-3/12 mx-auto">
              Please complete payment
            </p>
            <div className="w-4/12 mx-auto p-5 pt-10">
              <p className="text-lg">Courses Make Millions</p>
              <p>By: Cody Getchell</p>
            </div>
            <div className="w-4/12 mx-auto h-fit bg-[#171a2d] rounded-lg px-8 py-8">
              <div className="flex justify-between text-2xl">
                <p>USD</p>
                <p className="font-bold">$2500</p>
              </div>
              <Link href="/student/subjectSelection/payment/mentorland-balence-payment">
                <button className="text-xl font-semibold text-center border border-[#fefffe] w-full mt-5 py-1 rounded-lg">
                  Pay with Mentorland Balance
                </button>
              </Link>
              <Link href="/student/subjectSelection/payment/card-payment">
                <button className="text-xl font-semibold text-center border border-[#fefffe] w-full mt-5 py-1 rounded-lg">
                  Pay with Card/Debit Card
                </button>
              </Link>
              <Link href="/student/subjectSelection/payment/crypto-payment">
                <button className="text-xl font-semibold text-center border border-[#fefffe] w-full mt-5 py-1 rounded-lg">
                  Pay with Crypto
                </button>
              </Link>
            </div>
          </div>
        }
        {<PayWithCard />}
      </div>
    </div>
  );
}

export default PaymentProcessContent;
