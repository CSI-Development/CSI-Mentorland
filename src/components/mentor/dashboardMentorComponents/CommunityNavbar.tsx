import Link from "next/link";

function CommunityNavbar({
  stage,
  setStage,
}: {
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <nav className=" w-full bg-[#0E2245]">
      <ul className=" ml-24 flex h-full gap-6 ">
        <li
          onClick={() => setStage(1)}
          className={`cursor-pointer px-4 py-[20px] text-xl font-bold uppercase text-white ${stage === 1 ? "rounded-t-lg bg-[#ff007a]" : "bg-[#0E2245]"}`}
        >
          Community Feed
        </li>
        <li
          onClick={() => setStage(2)}
          className={`cursor-pointer px-4 py-[20px] text-xl font-bold uppercase text-white ${stage === 2 ? "rounded-t-lg bg-[#ff007a]" : "bg-[#0E2245]"}`}
        >
          {" "}
          Courses
        </li>
        <li
          onClick={() => setStage(3)}
          className={`cursor-pointer px-4 py-[20px] text-xl font-bold uppercase text-white ${stage === 3 ? "rounded-t-lg bg-[#ff007a]" : "bg-[#0E2245]"}`}
        >
          Channel
        </li>
        <li
          onClick={() => setStage(4)}
          className={`cursor-pointer px-4 py-[20px] text-xl font-bold uppercase text-white ${stage === 4 ? "rounded-t-lg bg-[#ff007a]" : "bg-[#0E2245]"}`}
        >
          Live Call Schedule
        </li>
        <li
          onClick={() => setStage(5)}
          className={`cursor-pointer px-4 py-[20px] text-xl font-bold uppercase text-white ${stage === 5 ? "rounded-t-lg bg-[#ff007a]" : "bg-[#0E2245]"}`}
        >
          Ask Your Mentor
        </li>
      </ul>
    </nav>
  );
}

export default CommunityNavbar;
