"use client";
import React from "react";
import AccessCard1 from "../../../../public/sampleImages/AccessCard3.svg";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Layout from '../../../components/Layouts/DashboardLayout'; // Adjust this path to the correct location of your layout.tsx file
import Link from "next/link";

const SellAccessCard = () => {
  return (
    <Layout showSidebar={false}>
    <div className="w-full flex flex-col gap-6 p-5 px-20 h-screen bg-[#F7F9FB] text-black">
      <Link href={'/student/dashboard/wallet'}><h1 className="text-primary font-semibold">{"<< Back"}</h1></Link>
      <div className="flex gap-6">
        <div className="w-1/3 flex flex-col gap-6 items-center ">
          <div className="w-full h-fit p-5 bg0white rounded-lg shadow-md">
            <Image src={AccessCard1} alt="" className="w-full h-[60vh]" />
          </div>
          <button className="w-fit h-fit bg-primary rounded-lg px-4 py-2 text-sm font-semibold text-white">
            Sell This Access Card
          </button>
        </div>
        <div className="flex-1 h-fit flex flex-col gap-3">
          <h1 className="font-semibold text-gray-700">Access Card</h1>
          <h1 className="text-lg font-bold">
            Course Makes Millions Course Initial Level
          </h1>
          <div className="mt-7">
            <div className="text-xs text-gray-500 mb-3">Presented to</div>
            <div className="text-sm flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
              <h1>Carlos J Olivio</h1>
            </div>
          </div>
          <h1 className="font-bold mt-4">Course Description</h1>
          <div className="text-sm font-thin text-[#5D6475] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi harum
            eius quae ipsa, natus animi tempore. Consequatur neque, nisi commodi
            facilis ab quia, temporibus quidem, libero odio incidunt iste qui.
            Iste neque quod a, qui magnam modi quibusdam repellat at aut!
            Numquam, aut nesciunt. Recusandae tenetur minima itaque dolorum esse
            molestiae ab maiores, fuga, aperiam quae totam, iusto quibusdam
            soluta.
          </div>
          <h1 className="font-bold mt-4">Access our Gated Channels</h1>
          <div className="text-sm font-thin text-[#5D6475] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi harum
            eius quae ipsa, natus animi tempore. Consequatur neque, nisi commodi
            facilis ab quia, temporibus quidem, libero odio incidunt iste qui.
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-white p-3 rounded-lg shadow-md">
              <Icon icon="logos:discord-icon" className="w-6 h-6" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md">
              <Icon icon="devicon:facebook" className="w-6 h-6" />
            </div>
          </div>
          <h1 className="font-bold mt-4">Also you get Access to:</h1>
          <ul className="list-disc ml-4 text-sm text-[#5D6475] ">
            <li>Study groups</li>
            <li>Paid courses</li>
            <li>Enhanced content</li>
            <li>Networks build</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default SellAccessCard;
