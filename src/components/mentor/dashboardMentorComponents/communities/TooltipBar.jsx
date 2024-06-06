import Image from "next/image"

export default function TooltipBar() {
  return (
    <div className=" h-fit border border-[#BCBFC6] border-l-0 rounded-r-md flex flex-col gap-8 items-center p-4">
      <Image src="/svg/light.svg" alt="light" width={37} height={65} />
      <Image src="/svg/rocket.svg" alt="light" width={37} height={65} />
      <Image src="/svg/idea.svg" alt="light" width={37} height={65} />
    </div>
  );
}
