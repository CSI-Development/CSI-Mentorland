/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Image from "next/image";
import CardResell1 from "../../../../public/sampleImages/CardResell1.png";
import CardResell2 from "../../../../public/sampleImages/CardResell2.png";
import CardResell3 from "../../../../public/sampleImages/CardResell3.png";
import DashboardLayout from "@/layouts/DashboardLayout";

const EnrichCoursePage = () => {
  return (
    <DashboardLayout showSidebar={false}>
      <div className="w-full h-full flex flex-col px-14 overflow-y-auto text-black py-8 gap-4">
        <h1 className="text-lg font-bold">How to create an Enrichment Pack</h1>
        <div className="w-full flex gap-4">
          <div className="w-3/4 flex flex-col gap-4 ">
            <div className="w-full flex gap-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-1/2 object-cover"
              />
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ipsam alias tenetur quos cupiditate saepe id nemo?
                  Odio, at. Consequatur ex doloribus totam ipsa odit pariatur
                  sit praesentium sunt vero?
                </h1>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor ea et iste nam aperiam, veniam optio perferendis nobis
                  esse eos! Eveniet quidem similique fugit tempora laudantium
                  tenetur beatae eius porro!
                </div>
              </div>
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, quas. Illo pariatur vitae perspiciatis distinctio
              consequuntur eum animi voluptates adipisci! Impedit sequi unde
              neque delectus accusantium maiores voluptatem natus in. Itaque
              autem quia odit voluptate deserunt nesciunt velit ea facere rerum,
              obcaecati provident quos illum vero unde saepe placeat molestias
              quas tempora deleniti ipsam recusandae! Aspernatur aperiam
              provident mollitia amet?
            </div>

            <div className="w-ful mt-8 flex flex-col items-center gap-8">
              <div className="w-4/5 flex gap-8 items-center">
                <Image src={CardResell1} alt="" className="w-20 h-20" />
                <div>
                  <span className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                </div>
              </div>
              <div className="w-4/5 flex gap-8 items-center">
                <Image src={CardResell2} alt="" className="w-20 h-20" />
                <div>
                  <span className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                </div>
              </div>
              <div className="w-4/5 flex gap-8 items-center">
                <Image src={CardResell3} alt="" className="w-20 h-20" />
                <div>
                  <span className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli
                  </span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  voluptas, dolor repudiandae quia quidem nisi sit obcaecati
                  atque optio autem saepe modi molestias eligendi. Ut eius
                  minima et quia molestiae?
                </div>
              </div>
              <button className="w-fit h-fit bg-primary p-2 px-3 rounded-lg text-white text-sm mt-5">
                Back to Course
              </button>
            </div>
          </div>

          <div className="w-1/3">
            <div className="w-full bg-white rounded-lg p-5 shadow-md">
              <h1 className="text-lg font-semibold">Recent Articles</h1>
              <div className="flex flex-col gap-3 mt-4 0">
                {[...Array(3)].map((item, index) => {
                  return (
                    <div className="flex flex-col border-b-[2px] py-2 border-gray-60" key={index}>
                      <h1 className="font-semibold">Cupcake ipsum dolo</h1>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta, nostrum, repellat sequi velit reprehenderit fuga
                      </div>
                      <h1 className="text-sm text-gray-700 font-thin mt-3">
                        12/23/2022
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EnrichCoursePage;
