/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

function AskYourMentor({id}:any) {
  return (
    <div className="text-black">
      <div className=" w-full h-screen bg-[#F7F9FB] px-20 py-10 flex flex-col gap-10">
      <h4 className=" text-2xl font-bold ">Ask Your Mentor</h4>
      <div className=" w-full h-full flex justify-between">
        {/* Left Part */}
        <div className=" w-[60%] ">
          <div className=" w-[725px] h-[60px] mt-2 ml-4 flex gap-[26px] py-2 px-3 items-center">
            <input
              type="text"
              className=" w-full h-full outline-none border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-300"
              placeholder="Ask Your Mentor"
            />
            <button  className="bg-primary px-8 py-2 font-bold rounded text-white ">
              Ask
            </button>
          </div>

          <div className=" mt-20 ml-[150px] border rounded-lg bg-white">
            <div className=" w-[765px] h-full  p-3  flex gap-3">
              <div>
                <Image
                  src="/svg/user.svg"
                  alt="user"
                  className=" aspect-auto"
                  width={31}
                  height={30}
                />
              </div>
              <div className=" w-[684px] flex flex-col gap-4 border-b-2 pb-3">
                <div className=" w-full flex justify-between items-center">
                  <h1 className="font-semibold text-xl">Cody Getchell</h1>
                  <p>May 10 Oct 2021</p>
                </div>
                <p className=" text-wrap text-[20px] leading-7">
                  How can you protect your investment against the rising
                  inflation in the uncertain situation of the animal inst...How
                  can you protect your investment against the rising inflation
                  in the uncertain situation of the animal inst...How can you
                  protect your investment against the rising inflation in the
                  uncertain situation of the animal inst...How can you protect
                  your investment against the rising inflation in the uncertain
                  situation of the animal inst...
                </p>
              </div>
            </div>
            {/* Reply */}
            <div className=" ml-[80px]">
              <div className=" w-[684px] h-full p-3  flex gap-3">
                <div>
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    className=" aspect-auto"
                    width={31}
                    height={30}
                  />
                </div>
                <div className=" w-[684px] flex flex-col gap-4 pb-3">
                  <div className=" w-full flex justify-between items-center">
                    <div>
                      <h1 className="font-semibold text-xl">Cody Getchell</h1>
                      <p>Mentor</p>
                    </div>
                    <p>May 10 Oct 2021</p>
                  </div>
                  <p className=" text-wrap text-[16px] leading-[21.5px]">
                    How can you protect your investment against the rising
                    inflation in the uncertain situation of the animal
                    inst...How can you protect your investment against the
                    rising inflation in the uncertain situation of the animal
                    inst...How can you protect your investment against the
                    rising inflation in the uncertain situation of the animal
                    inst...How can you protect your investment against the
                    rising inflation in the uncertain situation of the animal
                    inst...
                  </p>
                  <div className=" w-full flex justify-between items-center ">
                    <div className=" w-24 h-[36px] flex justify-between">
                      <div className=" flex flex-col gap-2">
                        <Image
                          src="/questions/pin.svg"
                          alt="user"
                          width={13}
                          height={18}
                        />
                        <p className=" text-[12px] leading-[14.4px] ">Pin</p>
                      </div>
                      <div className=" flex flex-col gap-2">
                        <Image
                          src="/questions/question.svg"
                          alt="user"
                          className=" aspect-auto"
                          width={18}
                          height={20}
                        />
                        <p className=" text-[12px] leading-[14.4px] text-center">Question</p>
                      </div>
                    </div>
                    <div className=" w-[94px] h-[36px] flex justify-between text-center">
                      <div className=" flex flex-col gap-2">
                        <Image
                          src="/questions/quote.svg"
                          alt="user"
                          className=" aspect-auto"
                          width={20}
                          height={20}
                        />
                        <p className=" text-[12px] leading-[14.4px] text-center">Quote</p>
                      </div>
                      <div className=" flex flex-col gap-2">
                        <Image
                          src="/questions/share.svg"
                          alt="user"
                          className=" aspect-auto"
                          width={20}
                          height={20}
                        />
                        <p className=" text-[12px] leading-[14.4px] text-center">Reply</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Part  */}
        <div className=" w-[30%] py-6 flex flex-col items-center gap-10">
          <div className="w-[227px] h-[341px] bg-white rounded-lg  object-cover">
            <Image
              src="/mentor-card.png"
              alt="mentor"
              width={227}
              height={341}
              className=" object-fill"
            />
          </div>
          <div className="w-[243px] h-[410px] rounded-lg shadow-md p-5">
            <div className="">
              <h1 className="font-bold">{"Who's is in this channel"}</h1>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full p-[1px] bg-[#2769d9]"
                  />
                  <h1 className="font-bold ml-2">Engelbert Bryughternexter</h1>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full p-[1px] bg-[#2769d9]"
                  />
                  <h1 className="font-bold ml-2">Dunk Gryertyuson</h1>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full p-[1px] bg-[#2769d9]"
                  />
                  <h1 className="font-bold ml-2">Entrand Fretyuingre</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AskYourMentor;
