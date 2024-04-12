import React from "react";
import Logo from "../../../../public/logoDark.png";
import Image from "next/image";

function VerifyEmail() {
  return (
    <>
      <div className="mt-5 w-full flex justify-center">
        <Image alt="logo" src={Logo} />
      </div>
      <div className="flex justify-center mt-6 text-black">
        <div className="w-5/12  ">
          <p className="text-black text-center text-2xl font-bold mt-6">
            We’ve sent you a verification email
          </p>

          <p className="text-center text-sm mt-12 text-[#90A4B6]">{`Didn't receive it?`}</p>
          <button
            type="submit"
            className={` rounded-lg w-full py-2.5 text-lg my-2 font-semibold text-white bg-[#2668d8] `}
          >
            Resend It
          </button>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
