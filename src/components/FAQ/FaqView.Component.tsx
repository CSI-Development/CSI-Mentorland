/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

function FaqView({question , answer}: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-200 -mb-[3px]">
      <button
        className="flex w-full items-center justify-between rounded border border-[#B9BABA] bg-[#E5E8Eb] p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-black font-bold">{question}</span>
        <svg
          className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && <p className="mt-2 bg-white p-4 text-gray-600">{answer}</p>}
    </div>
  );
}

export default FaqView;
