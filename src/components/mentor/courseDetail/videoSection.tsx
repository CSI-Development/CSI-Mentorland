/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
function VideoSection({ activeLecture }: any) {
  console.log(`activeLecture: `, activeLecture);

  return (
    <div className="py-20 pl-20 grid grid-cols-1 gap-8">
      <div className="">
        <iframe
          title="Video Player"
          width={875}
          height={395}
          src={activeLecture[0]?.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-[70%] grid grid-cols-1 gap-8">
        <h1 className="text-[#2769D9] text-2xl font-bold">
          {activeLecture[1]?.title}
        </h1>

        <div className="grid grid-cols-1 gap-5"
          dangerouslySetInnerHTML={{ __html: activeLecture[1]?.description }}></div>

        <div className="">
          <h1 className="text-[#2769D9] text-lg font-bold">{activeLecture[0]?.title} </h1>
          <div className="grid grid-cols-1 gap-5"
            dangerouslySetInnerHTML={{ __html: activeLecture[0]?.description }}
          >

          </div>
        </div>
        {/* <div className="w-full text-center">
          <button className="bg-[#2769D9] text-white text-md px-[15px] py-[5px] rounded-xl text-base font-bold">
            Ask the Community
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default VideoSection;
