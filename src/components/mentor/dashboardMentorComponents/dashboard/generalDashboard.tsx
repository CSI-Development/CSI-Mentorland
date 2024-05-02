import { IoMdTime } from "react-icons/io";
import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";
import { RiUserFill } from "react-icons/ri";
import { IoFlag } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

function GeneralDashboard({ timeIntervals }: any) {
  return (
    <div className="w-full pt-20">
      <div className="">
        <h1 className="text-[#151B2B] text-2xl font-bold">General Dashboard</h1>
      </div>
      <div className="mt-5 w-full flex justify-between">
        <div className="w-[60%] h-[475px] bg-white rounded-lg shadow-lg p-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[#151B2B]">Today Schedule</h1>
            <h1 className="text-[#2769D9] font-bold">See complete schedule</h1>
          </div>
          <div className="w-full justify-between flex mt-4">
            {timeIntervals.map(({val, id} : {val:any, id:number}) => (
              <p key={id} className="text-[#B1B1B1]">
                {val}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-col justify-center w-full gap-2">
            <div className="rounded-lg w-[230px] h-[94px] border-l-4 border-[#11B67B] p-2 bg-[#c3f3c1] text-xs text-[#11B67B]">
              <h1 className="font-bold">Live Class With Cody Getchell</h1>
              <p>
                ab viral inferno, nam rick grimes malum cerebro. De carne
                lumbering
              </p>
              <p className="flex items-center mt-2">
                <IoMdTime className="text-lg mr-2" /> 12:00 13:00
              </p>
            </div>
            <div className="rounded-lg w-[230px] h-[94px] border-l-4 border-[#2769D9] p-2 bg-[#C1D7FD] text-xs text-[#2769D9] ml-60">
              <h1 className="font-bold">Live Class With Cody Getchell</h1>
              <p>
                ab viral inferno, nam rick grimes malum cerebro. De carne
                lumbering
              </p>
              <p className="flex items-center mt-2">
                <IoMdTime className="text-lg mr-2" /> 12:00 13:00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[35%] h-[475px] bg-white rounded-lg shadow-lg">
          <div className="h-[212px] w-full">
            <div className="h-[50%] bg-black rounded-t-lg">
              <img
                src="/images/back.jpeg"
                alt="user"
                className="h-full w-full rounded-t rounded-lg"
              />
            </div>
            <div className="w-full items-center flex flex-col justify-center">
              <Image
                src="/svg/user.svg"
                alt="user"
                width={136}
                height={136}
                className="rounded-full p-[1px] bg-white -mt-20"
              />
              <h1 className="text-2xl font-bold text-[#151B2B]">
                Cody Getchell
              </h1>
            </div>
            <div className="mt-5 p-5">
              <h1 className="font-bold text-[#151B2B]">My Communities</h1>
              <div className="flex items-center mt-4">
                <Image
                  src="/svg/user.svg"
                  alt="user"
                  width={80}
                  height={80}
                  className="rounded-full p-[1px] bg-white"
                />
                <h1 className="text-[#151B2B] text-xs font-bold ml-3">
                  Courses Make Millions
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-between">
        <div className="w-[60%] h-[475px] bg-white rounded-lg shadow-lg p-5">
          <div className="">
            <h1 className="font-bold text-[#151B2B]">Ask Your Mentor</h1>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            <div className="flex justify-between border-b border-[#B9BABA] pb-3">
              <p className="text-[#5D6475] font-bold">
                I didn't even know we were calling him Big Bear. We never had
                the chance to?
              </p>
              <TiArrowBack className="font-bold text-2xl text-[#5D6475]" />
            </div>
            <div className="flex justify-between border-b border-[#B9BABA] pb-3">
              <p className="text-[#5D6475] font-bold">
                I didn't even know we were calling him Big Bear. We never had
                the chance to?
              </p>
              <TiArrowBack className="font-bold text-2xl text-[#5D6475]" />
            </div>
            <div className="flex justify-between border-b border-[#B9BABA] pb-3">
              <p className="text-[#5D6475] font-bold">
                I didn't even know we were calling him Big Bear. We never had
                the chance to?
              </p>
              <TiArrowBack className="font-bold text-2xl text-[#5D6475]" />
            </div>
            <div className="flex justify-between border-b border-[#B9BABA] pb-3">
              <p className="text-[#5D6475] font-bold">
                I didn't even know we were calling him Big Bear. We never had
                the chance to?
              </p>
              <TiArrowBack className="font-bold text-2xl text-[#5D6475]" />
            </div>
            <div className="flex justify-between border-b border-[#B9BABA] pb-3">
              <p className="text-[#5D6475] font-bold">
                I didn't even know we were calling him Big Bear. We never had
                the chance to?
              </p>
              <TiArrowBack className="font-bold text-2xl text-[#5D6475]" />
            </div>
          </div>
          <div className="flex justify-center w-full mt-5">
            <button className="flex items-center text-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold">
              <RiUserFill />- Remove
            </button>
            <button className="flex items-center text-[white] bg-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold ml-3">
              <RiUserFill />+ Add
            </button>
          </div>
        </div>
        <div className="w-[35%] h-[475px] text-[#151B2B] bg-white rounded-lg shadow-lg p-5">
          <div className="">
            <h1 className="font-bold text-[#151B2B]">
              Students that marked me as favorite mentor
            </h1>
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
              <div>
                <h1 className="font-bold">25876</h1>
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
              <div>
                <h1 className="font-bold">2123</h1>
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
              <div>
                <h1 className="font-bold">1235</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mt-5">
            <button className="flex items-center text-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold">
              <RiUserFill />- Remove
            </button>
            <button className="flex items-center text-[white] bg-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold ml-3">
              <RiUserFill />+ Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-between text-[#151B2B]">
        <div className="w-[60%] h-[365px] bg-white rounded-lg shadow-lg p-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Events</h1>
            <IoIosAddCircle className="text-[#2769D9] font-bold text-3xl" />
          </div>
          <div className="mt-6">
            <ul className="py-2 grid grid-cols-1 gap-10">
              <li>
                <div className="flex border-b border-[#B9BABA] pb-3">
                  <input
                    type="radio"
                    height={20}
                    width={20}
                    className="border-2 border-[#1A458F] h-[20px] w-[20px]"
                  />
                  <div className="ml-4 text-[#5D6475] font-semibold">
                    <p>
                      Has visitor law attacks pretend you calling own excited
                      painted.
                    </p>
                    <p className="flex m-1 font-normal">March 29 2023</p>
                  </div>
                  <p className="bg-[#FDF2D6] text-[#E2B33A] h-fit p-1 rounded-md flex items-center whitespace-nowrap">
                    Due tomorrow <IoFlag className="ml-2" />
                  </p>
                </div>
                {/* <button
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      onClick={() => console.log("Item 1 clicked")}
                    >
                      Item 1
                    </button> */}
              </li>
              <li>
                <div className="flex border-b border-[#B9BABA] pb-3">
                  <input
                    type="radio"
                    height={20}
                    width={20}
                    className="border-2 border-[#1A458F] h-[20px] w-[20px]"
                  />
                  <div className="ml-4 text-[#5D6475] font-semibold">
                    <p>Venison rump drumstic</p>
                    <p className="flex m-1 font-normal">April 15 2023</p>
                  </div>
                  {/* <p  className="bg-[#FDF2D6] text-[#E2B33A] h-fit p-1 rounded-md flex items-center whitespace-nowrap">Due tomorrow <IoFlag className="ml-2"/></p> */}
                </div>
                {/* <button
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      onClick={() => console.log("Item 1 clicked")}
                    >
                      Item 1
                    </button> */}
              </li>
            </ul>
          </div>
          <div className="flex justify-center w-full mt-5">
            <button className="flex items-center text-[white] bg-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold ml-3">
              Create a New Event
            </button>
          </div>
        </div>
        <div className="w-[35%] h-[365px] bg-white rounded-lg shadow-lg p-5">
          <div className="">
            <h1 className="font-bold">Support Staff</h1>
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
          <div className="flex justify-center w-full mt-5">
            <button className="flex items-center text-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold">
              <RiUserFill />- Remove
            </button>
            <button className="flex items-center text-[white] bg-[#2769D9] border border-[#2769D9] py-[5px] px-[10px] rounded-md font-bold ml-3">
              <RiUserFill />+ Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralDashboard;
