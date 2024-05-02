function StageOne({ register }: any) {
  return (
    <div className="w-5/12 mx-auto mt-16  h-[25rem] flex flex-col  justify-center">
      <p className="text-center font-semibold text-2xl">
        Let's get to know each other first
      </p>
      <p className="text-center text-[#959595]">Please enter your details</p>

      <p className="mt-8">First, tell us your First and Last names*</p>
      <div className="flex gap-5 mt-1">
        <input
          type="text"
          {...register("firstName")}
          placeholder="First Name"
          className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-1/2"
        ></input>
        <input
          type="text"
          {...register("lastName")}
          placeholder="Last Name"
          className="border rounded-lg border-[#3c4252] bg-[#141b2b] py-3 px-4 w-1/2"
        ></input>
      </div>
    </div>
  );
}

export default StageOne;
