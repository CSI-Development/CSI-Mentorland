/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

function AskYourMentor({ id }: any) {
  return (
    <div className="w-full text-black">
      <div className="flex h-screen w-full flex-col gap-10 bg-[#F7F9FB] px-20 py-10">
        <h4 className=" text-2xl font-bold ">Ask Your Mentor</h4>
        <div className="flex h-full w-full justify-between gap-10">
          {/* Left Part */}
          <div className=" w-[60%] ">
            <div className="ml-4 mt-2 flex h-[60px] w-full items-center gap-[26px] px-3 py-2">
              <input
                type="text"
                className=" h-full w-[70%] rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-300 focus:outline-none"
                placeholder="Ask Your Mentor"
              />
              <button className="rounded bg-primary px-8 py-2 font-bold text-white ">
                Ask
              </button>
            </div>

            <div className="ml-20 mt-10 w-full rounded-lg border bg-white">
              <div className=" flex h-full  w-full  gap-3 p-5">
                <div>
                  <Image
                    src="/svg/user.svg"
                    alt="user"
                    className=" aspect-auto"
                    width={31}
                    height={30}
                  />
                </div>
                <div className=" flex w-full flex-col gap-4 border-b-2 pb-3">
                  <div className=" flex w-full items-center justify-between">
                    <h1 className="text-xl font-semibold">Cody Getchell</h1>
                    <p>May 10 Oct 2021</p>
                  </div>
                  <p className=" text-wrap text-[20px] leading-7">
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
                </div>
              </div>
              {/* Reply */}
              <div className=" ml-[80px]">
                <div className=" flex h-full w-full  gap-3 p-5">
                  <div>
                    <Image
                      src="/svg/user.svg"
                      alt="user"
                      className=" aspect-auto"
                      width={31}
                      height={30}
                    />
                  </div>
                  <div className=" flex w-full flex-col gap-4 pb-3">
                    <div className=" flex w-full items-center justify-between">
                      <div>
                        <h1 className="text-xl font-semibold">Cody Getchell</h1>
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
                    <div className=" flex w-full items-center justify-between ">
                      <div className=" flex h-[36px] w-24 justify-between">
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
                          <p className=" text-center text-[12px] leading-[14.4px]">
                            Question
                          </p>
                        </div>
                      </div>
                      <div className=" flex h-[36px] w-[94px] justify-between text-center">
                        <div className=" flex flex-col gap-2">
                          <Image
                            src="/questions/quote.svg"
                            alt="user"
                            className=" aspect-auto"
                            width={20}
                            height={20}
                          />
                          <p className=" text-center text-[12px] leading-[14.4px]">
                            Quote
                          </p>
                        </div>
                        <div className=" flex flex-col gap-2">
                          <Image
                            src="/questions/share.svg"
                            alt="user"
                            className=" aspect-auto"
                            width={20}
                            height={20}
                          />
                          <p className=" text-center text-[12px] leading-[14.4px]">
                            Reply
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Part  */}
          <div className="flex w-[40%] items-center flex-col gap-10 py-6">
            <div className="h-[341px] rounded-lg  object-cover">
              <Image
                src="/mentor-card.png"
                alt="mentor"
                width={227} 
                height={341}
                className=" object-fill"
              />
            </div>
            <div className=" h-[410px] rounded-lg p-5">
              <div className="">
                <h1 className="font-bold">{"Who's is in this channel"}</h1>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/svg/user.svg"
                      alt="user"
                      width={50}
                      height={50}
                      className="rounded-full bg-[#2769d9] p-[1px]"
                    />
                    <h1 className="ml-2 font-bold">
                      Engelbert Bryughternexter
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/svg/user.svg"
                      alt="user"
                      width={50}
                      height={50}
                      className="rounded-full bg-[#2769d9] p-[1px]"
                    />
                    <h1 className="ml-2 font-bold">Dunk Gryertyuson</h1>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/svg/user.svg"
                      alt="user"
                      width={50}
                      height={50}
                      className="rounded-full bg-[#2769d9] p-[1px]"
                    />
                    <h1 className="ml-2 font-bold">Entrand Fretyuingre</h1>
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
