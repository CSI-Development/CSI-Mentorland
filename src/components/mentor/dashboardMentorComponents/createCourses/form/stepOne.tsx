/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
function StepOne({handleNextStep, register}: any) {
  return (
    <div className="w-full flex flex-col h-full mt-20">
      <div>
        <div className="w-full text-center">
        <h1 className="text-2xl font-bold font-popins">
          Let’s start by giving your course a name
        </h1>
        </div>
        <div className="mt-12">
          <label htmlFor="course" className="text-[#1A458F] text-base">Course Name</label>
          <br />
          <input
            id="course"
            name="course"
            type="text"
            {...register("name")}
            placeholder="e.g, Gardening 101"
            className="w-[620px] h-[55px] border border-[#B9BABA] pl-[10px] outline-none rounded-md"
          />{" "}
          <br />
        </div>
      </div>
      <div className="flex w-full justify-end mt-10">
        <button type="button" className="bg-[#2769D9] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold" onClick={handleNextStep}>
          Next
        </button>
      </div>
    </div>
  );
} 

export default StepOne;
