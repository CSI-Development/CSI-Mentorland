"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Image from "next/image";
import MentorCard from "../../../../../public/sampleImages/MentorCard.svg";

const AskCourseMentor = () => {
  return (
    <div className="w-full px-10 py-5 gap-6 h-screen bg-white text-black flex flex-col overflow-y-auto">
      <h1 className="text-xl font-bold">Ask Your Mentor</h1>
      <div className="w-full flex gap-6 ">
        <div className="w-2/3 0 flex flex-col ">
          <div className="w-[80%] flex gap-6 items-center">
            <input
              type="text"
              placeholder="Ask something"
              className="flex-1 h-full px-4 py-1 border-[1px] border-gray-600 rounded-lg text-xs "
            />
            <button className="w-fit h-fit py-2 px-10 bg-primary text-white font-semibold rounded-lg">
              Ask
            </button>
          </div>
          <div className="w-full flex justify-end mt-12">
            <div className="w-[90%] 0 flex flex-col gap-6 py-5">
              {[...Array(2)].map((item, i) => {
                return (
                  <div
                    key={i}
                    className="w-full bg-white shadow-md rounded-lg p-3 flex flex-col gap-3"
                  >
                    <div className="w-full flex justify-between gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <h1 className="flex-1 text-sm font-bold">
                        Engelbert Bryughternexter
                      </h1>
                      <div className="text-xs text-gray-600 ">
                        May 19 at 11:23 am
                      </div>
                    </div>
                    <div className="ml-12 flex flex-col gap-3">
                      <div className="text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi suscipit saepe velit iste, ullam praesentium vero
                        nisi iusto laboriosam aliquam molestiae ea voluptatibus
                        temporibus culpa dolor nostrum autem. Dolore, iste.
                        Repellendus nihil earum incidunt recusandae dolorum
                        necessitatibus, dolor soluta quod labore nostrum,
                        tempora repellat quia culpa quo aliquam eveniet sunt
                        temporibus corporis. Eius sed possimus commodi, ullam
                        officia natus id?
                      </div>
                      <hr className="h-[3px]" />
                      <div className="w-full flex justify-between gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1 flex flex-col">
                          <h1 className="text-sm font-light text-gray-700">
                            Cody Getchell
                          </h1>
                          <h3 className="text-xs text-gray-500">Mentor</h3>
                        </div>
                        <div className="text-xs text-gray-400 ">
                          May 19 at 11:23 am
                        </div>
                      </div>
                      <div className="ml-10 flex flex-col gap-2">
                        <div className="text-sm ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolor quibusdam doloribus saepe quo qui eum
                          obcaecati adipisci culpa impedit. Error enim nostrum
                          voluptatibus amet similique, voluptate illo. At,
                          placeat autem! Provident exercitationem cumque quidem,
                          laborum voluptatum facilis aliquam eum dolorum vel
                          temporibus inventore aspernatur consectetur tempore
                          numquam voluptas nisi eius. Quaerat dolore voluptas ab
                          id odio. Inventore fuga quisquam quasi.
                        </div>
                        <div className="flex justify-between mt-4">
                          <div className="flex gap-8">
                            <div className="flex flex-col gap-1">
                              <Icon
                                icon="f7:pin"
                                color="#2769D9"
                                className="text-2xl"
                              />
                              <h1 className="text-sm">Pin</h1>
                            </div>
                            <div className="flex flex-col gap-1">
                              <Icon
                                icon="codicon:question"
                                color="#2769D9"
                                className="text-2xl"
                              />
                              <h1 className="text-sm">Question</h1>
                            </div>
                          </div>
                          <div className="flex gap-8">
                            <div className="flex flex-col gap-1">
                              <Icon
                                icon="ph:quotes"
                                color="#2769D9"
                                className="text-2xl"
                              />
                              <h1 className="text-sm">Quote</h1>
                            </div>
                            <div className="flex flex-col gap-1">
                              <Icon
                                icon="bi:reply"
                                color="#2769D9"
                                className="text-2xl "
                              />
                              <h1 className="text-sm">Reply</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1  flex flex-col items-center">
          <Image src={MentorCard} alt="" className="w-full h-[40vh]" />
          <div className="flex flex-col gap-3 mt-6">
            <h1 className="font-semibold">{`Who's in this channel`}</h1>
            {[...Array(6)].map((item, i) => {
              return (
                <div key={i} className="flex gap-3 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h1 className="text-sm font-semibold">Mark Flugell</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskCourseMentor;
