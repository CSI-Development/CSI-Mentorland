import Link from "next/link"

function CommunityNavbar({stage, setStage}: any) {
  return (
    <nav className=" w-full bg-[#0E2245]">
    <ul className=" h-full ml-24 flex gap-6 ">
      <li onClick={() => setStage(1)} className={`uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer ${stage === 1 ? "bg-[#ff007a] rounded-t-lg" : "bg-[#0E2245]" }`}>
        Community Feed
      </li>
      <li onClick={() => setStage(2)} className={`uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer ${stage === 2 ? "bg-[#ff007a] rounded-t-lg" : "bg-[#0E2245]" }`}>
        {" "}
        Courses
      </li>
      <li onClick={() => setStage(3)} className={`uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer ${stage === 3 ? "bg-[#ff007a] rounded-t-lg" : "bg-[#0E2245]" }`}>
        Channel
      </li>
        <li onClick={() => setStage(4)} className={`uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer ${stage === 4 ? "bg-[#ff007a] rounded-t-lg" : "bg-[#0E2245]" }`}>
          Live Call Schedule
        </li>
        <li onClick={() => setStage(5)} className={`uppercase text-white text-xl py-[20px] px-4 font-bold cursor-pointer ${stage === 5 ? "bg-[#ff007a] rounded-t-lg" : "bg-[#0E2245]" }`}>
          Ask Your Mentor
        </li>
    </ul>
  </nav>
  )
}

export default CommunityNavbar