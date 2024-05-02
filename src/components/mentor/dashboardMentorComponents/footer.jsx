import Image from "next/image";

function Footer() {
  return (
    <footer>
    <div className="w-full h-[120px] bg-[#0E2245] text-white flex justify-center items-center">
      {/* <h1 className="text-3xl font-semibold">
        MENTOR<span className="font-light">LAND</span>
      </h1> */}
      <Image src="/svg/Vector.svg" width={230} height={37} />
    </div>
  </footer>
  )
}

export default Footer