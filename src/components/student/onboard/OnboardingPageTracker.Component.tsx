import React from "react";

function OnboardingPageTracker(props: { stage: number }) {
  return (
    <div className=" my-5">
      <div className="flex w-fit  mx-auto">
        <p
          className={` h-7 w-7 font-bold text-center rounded-full  ${
            0 >= props.stage ? ` bg-[#c0d6fe] ` : ` bg-[#2769d8] `
          }`}
        >
          1
        </p>
        <div
          className={`w-8 border-2 h-0 my-auto ${
            1 >= props.stage ? ` border-[#c0d6fe] ` : ` border-[#2769d8] `
          }`}
        ></div>
        <p
          className={` h-7 w-7 font-bold text-center rounded-full  ${
            1 >= props.stage ? ` bg-[#c0d6fe] ` : ` bg-[#2769d8] `
          }`}
        >
          2
        </p>
        <div
          className={`w-8 border-2 h-0 my-auto ${
            2 >= props.stage ? ` border-[#c0d6fe] ` : ` border-[#2769d8] `
          }`}
        ></div>
        <p
          className={` h-7 w-7 font-bold text-center rounded-full  ${
            2 >= props.stage ? ` bg-[#c0d6fe] ` : ` bg-[#2769d8] `
          }`}
        >
          3
        </p>
        <div
          className={`w-8 border-2 h-0 my-auto ${
            3 >= props.stage ? ` border-[#c0d6fe] ` : ` border-[#2769d8] `
          }`}
        ></div>
        <p
          className={` h-7 w-7 font-bold text-center rounded-full  ${
            3 >= props.stage ? ` bg-[#c0d6fe] ` : ` bg-[#2769d8] `
          }`}
        >
          4
        </p>
        {/* <div className={`w-8 border-2 h-0 my-auto ${4 >= props.stage ? ` border-[#c0d6fe] ` : ` border-[#2769d8] `}`}></div>
                <p className={` h-7 w-7 font-bold text-center rounded-full  ${4 >= props.stage ? ` bg-[#c0d6fe] ` : ` bg-[#2769d8] `}`}>5</p> */}
      </div>
    </div>
  );
}

export default OnboardingPageTracker;
