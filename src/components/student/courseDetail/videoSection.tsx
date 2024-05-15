/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
function VideoSection({ activeLecture }: any) {
  return (
    <div className="grid grid-cols-1 gap-8 py-20 pl-20">
      <div className="">
        <iframe
          title="Video Player"
          width={875}
          height={395}
          src={activeLecture.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="grid w-[70%] grid-cols-1 gap-8">
        {activeLecture?.description}
        <div className="w-full text-center">
          <button className="text-md rounded-xl bg-[#2769D9] px-[15px] py-[5px] text-base font-bold text-white">
            Ask the Community
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
