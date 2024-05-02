function StepTwo({
  handleNextStep,
  handlePrevStep,
  register,
}) {
  return (
    <div className="w-full flex flex-col h-full mt-20">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold font-popins">Add a category</h1>
      </div>
      <div className="mt-12">
        <label htmlFor="category" className="text-[#1A458F] text-base">
          Course Name
        </label>
        <br />
        <select
          id="category"
          name="category"
          className="w-[620px] h-[55px] border bg-white border-[#B9BABA] px-[10px] outline-none rounded-md"
          {...register("category")}
        >
          <option value="">--Please choose an option--</option>
          <option value="English">English</option>
          <option value="Software">Software</option>
          <option value="Maths">Maths</option>
        </select>{" "}
        <br />
        <div className="flex w-full justify-between mt-10">
          <button
            type="button"
            onClick={handlePrevStep}
            className="bg-[#5D6475] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            className="bg-[#2769D9] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
