"use client";

import FaqView from "@/components/FAQ/FaqView.Component";
import MentorDashboardLayout from "@/layouts/mentorDashboardLayout";
import Link from "next/link";

import React from "react";

const FaqPage = () => {
  const faqData = [
    {
      question: "Tweeting a baseball lick the curtain?",
      answer:
        "Refuse to leave cardboard box sleep on keyboard, but always ensure to lay down in such a manner that tail can lightly brush human's nose . Thinking about you i'm joking it's food always food purrrrrr cough hairball, eat toilet paper. Sleep good now the other hand, too so cat gets stuck in tree firefighters try to get cat down firefighters",
    },
    {
      question:
        "Pet right here, no not there, here, no fool, right here that other cat smells funny?",
      answer: "You can track your order by...",
    },
    {
      question: "Are those your $250 dollar sandals?",
      answer: "Yes, you can purchase items again by...",
    },
    {
      question: "Are those your $250 dollar sandals?",
      answer: "Yes, you can purchase items again by...",
    },
    {
      question: "Are those your $250 dollar sandals?",
      answer: "Yes, you can purchase items again by...",
    },
    {
      question: "Are those your $250 dollar sandals?",
      answer: "Yes, you can purchase items again by...",
    },
    {
      question: "Are those your $250 dollar sandals?",
      answer: "Yes, you can purchase items again by...",
    },
  ];

  return (
    <MentorDashboardLayout showSidebar={false}>
      <div className="h-auto w-full bg-[#f7f9fb] px-24 py-20 text-black mt-10">
        <h1 className="text-2xl font-bold">Frequent Asked Questions</h1>
        <div className="w-80% mt-10 px-64">
          {faqData.map((val, i) => (
            <FaqView key={i} question={val.question} answer={val.answer} />
          ))}
          <div className="mt-10 flex w-full justify-center">
            <h1 className="font-semibold">Can’t find the answer here?</h1>
            <br />
          </div>
          <div className="mt-5 flex w-full justify-center">
            <Link
              href="/mentor/supportTicket"
              className="w-fit rounded-lg bg-primary px-4 py-2 font-bold text-white"
            >
              Send a Support Ticket
            </Link>
          </div>
        </div>
      </div>
    </MentorDashboardLayout>
  );
};

export default FaqPage;
