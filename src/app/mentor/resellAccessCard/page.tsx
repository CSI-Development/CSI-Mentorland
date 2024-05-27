/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Image from "next/image";
import CardResell1 from "../../../../public/sampleImages/CardResell1.png";
import CardResell2 from "../../../../public/sampleImages/CardResell2.png";
import CardResell3 from "../../../../public/sampleImages/CardResell3.png";
import Link from "next/link";
import DashboardLayout from "@/layouts/DashboardLayout";

function page() {
  return (
    <DashboardLayout showSidebar={false}>
      <div className="w-full flex flex-col gap-6 p-5 px-16 h-screen bg-[#F7F9FB] text-black">
        <Link href={"/mentor/dashboard/wallet"}>
          <h1 className="text-primary font-semibold">{"<< Back"}</h1>
        </Link>
        <h1 className="text-xl font-bold">
          Resell Acess Cards and Enrichment Cards
        </h1>
        <div className="w-full flex gap-6 justify-between">
          <div className="w-2/3 flex flex-col gap-6">
            <div className="w-full flex gap-6">
              <img
                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-56"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ad molestiae consequatur, dolores ratione autem odit eligendi
                </h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  illum rem officia reiciendis mollitia distinctio suscipit
                  dolores cum quia ullam qui cupiditate assumenda, dolor maxime,
                  veniam tempora consequatur soluta ipsum?
                </h2>
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              dolorum voluptates aspernatur quos veritatis in optio libero.
              Praesentium facere veniam, aliquam, illo fugiat quasi ipsum
              tempora maiores perferendis cumque hic! Maxime harum quos tenetur
              unde eum a fuga, labore voluptates incidunt sit? Eligendi
              reprehenderit laudantium delectus quaerat error, velit corporis,
              itaque asperiores a ab maxime, excepturi beatae. Voluptates,
              voluptatibus necessitatibus!
            </div>
            <div className="w-ful mt-8 flex flex-col items-center gap-8">
              <div className="w-4/5 flex gap-6 items-center">
                <Image src={CardResell1} alt="" className="w-20 h-20" />
                <div>
                  <span className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                </div>
              </div>
              <div className="w-4/5 flex gap-6 items-center">
                <Image src={CardResell2} alt="" className="w-20 h-20" />
                <div>
                  <span className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                </div>
              </div>
              <div className="w-4/5 flex gap-6 items-center">
                <Image src={CardResell3} alt="" className="w-20 h-20" />
                <div>
                  <span className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                </div>
              </div>
              <button className="w-fit h-fit bg-primary p-2 px-3 rounded-lg text-white text-sm">
                Back to Course
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white shadow-md flex flex-col gap-3 p-3 w-4/5 rounded-lg">
              <h1 className="text-lg font-bold">Recent Articles</h1>
              {[...Array(3)].map((item, i) => {
                return (
                  <div key={i} className="w-full">
                    <h1 className="text-md font-bold">Cupcake ipsum dolo</h1>
                    <div className="text-sm font-thin">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Commodi eius accusamus unde saepe fuga dicta sint rerum
                      deserunt labore? At laudantium accusamus atque. Pariatur
                    </div>
                    <h3 className="text-sx text-gray-500 my-3">12/23/2022</h3>
                    <hr className="h-[2px] bg-gray-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default page;
