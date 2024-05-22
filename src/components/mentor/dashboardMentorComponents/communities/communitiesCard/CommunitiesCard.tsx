import { useRouter } from "next/navigation";
import React from "react";

const CommunitiesCard = ({ name, level, index }: any) => {
    const router = useRouter();
    const handleClick=()=>{
        router.push("/mentor/dashboard/community");

    }
  console.log(name, level, "name");
  return (
    <div className="flex h-[120px] w-[370px] items-center gap-3 rounded-xl bg-white p-5 text-black shadow-xl cursor-pointer" onClick={handleClick}>
      <div className="w-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A458F] text-white">
          {index + 1}
        </div>
      </div>
      <div className="flex w-full flex-col items-end justify-end gap-2">
        <h2 className="text-[20px] font-semibold">{name}</h2>
        <p>{level}</p>
      </div>
    </div>
  );
};

export default CommunitiesCard;
