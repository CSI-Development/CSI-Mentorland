import React from "react";

function PayWithCard() {
  return (
    <div className="w-full h-full overflow-y-scroll pb-5">
      <p className="text-center font-semibold text-3xl mt-10 w-3/12 mx-auto">
        Paying with Credit Card
      </p>
      <div className="w-5/12 mx-auto p-5 pt-10">
        <p className="text-lg">Courses Make Millions</p>
        <p>By: Cody Getchell</p>
      </div>
      <div className="w-5/12 mx-auto h-fit bg-[#171a2d] rounded-lg px-8 py-4">
        <div className="flex justify-between text-2xl">
          <p>USD</p>
          <p className="font-bold">$2500</p>
        </div>
        <div className="w-full">
          <p className="text-md mt-2 mb-0.5">Name on card</p>
          <input
            type="text"
            placeholder="Robert Smith"
            className="w-full h-10 rounded-lg bg-[#171a2d] border-[#fefffe] border text-md px-2"
          />

          <div className="flex gap-5  mt-3">
            <div className="w-6/12">
              <p className="text-md mt-2 mb-0.5">Card Number</p>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="w-full h-10 rounded-lg bg-[#171a2d] border-[#fefffe] border text-md px-2"
              />
            </div>

            <div className="w-3/12">
              <p className="text-md mt-2 mb-0.5">Expiry</p>
              <input
                type="text"
                placeholder="01/25"
                className="w-full h-10 rounded-lg bg-[#171a2d] border-[#fefffe] border text-md px-2"
              />
            </div>

            <div className="w-3/12">
              <p className="text-md mt-2 mb-0.5">CVV</p>
              <input
                type="text"
                placeholder="XXX"
                className="w-full h-10 rounded-lg bg-[#171a2d] border-[#fefffe] border text-md px-2"
              />
            </div>
          </div>

          <div className="flex gap-5  mt-3">
            <div className="w-6/12">
              <p className="text-md mt-2 mb-0.5">Billing Address</p>
              <input
                type="text"
                placeholder="12 High Street"
                className="w-full h-10 rounded-lg bg-[#171a2d] border-[#fefffe] border text-md px-2"
              />
            </div>

            <div className="w-3/12">
              <p className="text-md mt-2 mb-0.5">City/Town</p>
              <input
                type="text"
                placeholder="New York"
                className="w-full h-10 rounded-lg bg-[#171a2d] border-[#fefffe] border text-md px-2"
              />
            </div>

            <div className="w-3/12">
              <p className="text-md mt-2 mb-0.5">State</p>
              <input
                type="text"
                placeholder="NY"
                className="w-full h-10 rounded-lg bg-[#171a2d] border-[#fefffe] border text-md px-2"
              />
            </div>
          </div>

          <button className=" flex justify-center rounded-xl text-xl font-semibold py-1.5 px-5 mx-auto mt-5 bg-[#2668d8]">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PayWithCard;
