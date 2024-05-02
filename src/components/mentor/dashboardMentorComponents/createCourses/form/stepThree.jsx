function StepThree({handlePrevStep, handleNextStep, register}) {
  return (
    <div className="w-full flex flex-col h-full mt-20">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold font-popins">Describe your Course</h1>
      </div>
      <div className="mt-12">
        <label htmlFor="description" className="text-[#1A458F] text-base">Course Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          type="text"
          {...register("description")}
          placeholder="Tell us about your course, be a descriptive as possible."
          className="w-[620px] h-[140px] border bg-white border-[#B9BABA] p-[10px] outline-none rounded-md"
        />{" "}
        <br />
        <div className="flex w-full justify-between mt-10">
          <button type="button" className="bg-[#5D6475] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold" onClick={handlePrevStep}>
            Previous
          </button>
          <button type="submit"  className="bg-[#2769D9] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
