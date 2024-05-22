"use client"
import Header from "@/components/Header";
import PaymentConfirm from "@/components/mentor/payment/paymentConfirm";
import React, { useState } from "react";

function addCard() {
    const [step, setStep] = useState<number>(1)
  return (
    <div className="overflow-y-hidden bg-[#010d27]">
      <Header />
      {
        step === 1 &&
      <div className="h-screen pt-20">
        <div className="h-full w-full overflow-y-scroll pb-5">
          <p className="mx-auto mt-10 text-center text-3xl font-semibold">
            Add Debit/ATM Card Information
          </p>
          <p className="mx-auto mt-5 w-3/12 text-center">
            In order to verify your identity and protect our platform, we
            require mentors to add a valid credit card to their account. Your
            card will not be charged at this time.
          </p>
          <div className="mx-auto mt-10 h-fit w-5/12 rounded-lg bg-[#171a2d] px-8 py-4">
            <div className="w-full">
              <p className="text-md mb-0.5 mt-2">Name on card</p>
              <input
                type="text"
                placeholder="Robert Smith"
                className="text-md h-10 w-full rounded-lg border border-[#fefffe] bg-[#171a2d] px-2"
              />
              <div className="mt-3 flex  gap-5">
                <div className="w-6/12">
                  <p className="text-md mb-0.5 mt-2">Card Number</p>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="text-md h-10 w-full rounded-lg border border-[#fefffe] bg-[#171a2d] px-2"
                  />
                </div>

                <div className="w-3/12">
                  <p className="text-md mb-0.5 mt-2">Expiry</p>
                  <input
                    type="text"
                    placeholder="01/25"
                    className="text-md h-10 w-full rounded-lg border border-[#fefffe] bg-[#171a2d] px-2"
                  />
                </div>

                <div className="w-3/12">
                  <p className="text-md mb-0.5 mt-2">CVV</p>
                  <input
                    type="text"
                    placeholder="XXX"
                    className="text-md h-10 w-full rounded-lg border border-[#fefffe] bg-[#171a2d] px-2"
                  />
                </div>
              </div>
              <div className="mt-3 flex  gap-5">
                <div className="w-6/12">
                  <p className="text-md mb-0.5 mt-2">Billing Address</p>
                  <input
                    type="text"
                    placeholder="12 High Street"
                    className="text-md h-10 w-full rounded-lg border border-[#fefffe] bg-[#171a2d] px-2"
                  />
                </div>

                <div className="w-3/12">
                  <p className="text-md mb-0.5 mt-2">City/Town</p>
                  <input
                    type="text"
                    placeholder="New York"
                    className="text-md h-10 w-full rounded-lg border border-[#fefffe] bg-[#171a2d] px-2"
                  />
                </div>

                <div className="w-3/12">
                  <p className="text-md mb-0.5 mt-2">State</p>
                  <input
                    type="text"
                    placeholder="NY"
                    className="text-md h-10 w-full rounded-lg border border-[#fefffe] bg-[#171a2d] px-2"
                  />
                </div>
              </div>
              <div className="mt-8">
                <p>
                  The credit card information will be securely stored, and that
                  they can update or remove it at any time
                </p>
              </div>
              <button
              onClick={() => setStep(2)}
                type="button"
                className=" border-[#5D6475 ] mx-auto mt-5 flex w-48 justify-center rounded-xl border py-2 text-xl
font-semibold text-[#5D6475]"
              >
                Save
              </button>{" "}
              <button
                type="button"
                className=" border-[#5D6475 ] mx-auto mt-5 flex w-48 justify-center rounded-xl border py-2 text-xl
font-semibold text-[#5D6475]"
              >
                Cancel
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
}
{
    step === 2 && <PaymentConfirm />
}
    </div>
  );
}

export default addCard;
