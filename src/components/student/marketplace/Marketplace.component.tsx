import React from "react";
import marketplaceBg from "../../../../public/marketplace/marketplaceBackground.jpeg";
import marketplaceCard from "../../../../public/marketplace/marketplaceCard.png";
import packsThumbnail from "../../../../public/marketplace/packsThumbnail.png";
import Image from "next/image";
import Card from "./PacksCard.component";
import Link from "next/link";

export interface PackCardType {
  name: string;
  mentorName: string;
  price: string;
  imagePath: string;
  rating: number;
}

function Marketplace() {
  const latestEnrichedPacks = [
    {
      name: "Courses Make Millions VIP",
      mentorName: "Engelbert Bryughternexter",
      price: "$350",
      imagePath: packsThumbnail.src,
      rating: 4,
    },
    {
      name: "Courses Make Millions VIP",
      mentorName: "Engelbert Bryughternexter",
      price: "$350",
      imagePath: packsThumbnail.src,
      rating: 3,
    },
    {
      name: "Courses Make Millions VIP",
      mentorName: "Engelbert Bryughternexter",
      price: "$350",
      imagePath: packsThumbnail.src,
      rating: 5,
    },
    {
      name: "Courses Make Millions VIP",
      mentorName: "Engelbert Bryughternexter",
      price: "$350",
      imagePath: packsThumbnail.src,
      rating: 1,
    },
  ];

  return (
    <div className="h-screen ">
      {/* top thumbnail */}
      <div
        className="w-full h-4/6 bg-cover object-cover flex flex-col justify-center"
        style={{ backgroundImage: `url(${marketplaceBg.src})` }}
      >
        <div className="bg-[#163b7a] bg-opacity-[83%] h-full">
          <div className="flex px-48 h-full ">
            <div className="w-1/2 my-auto ">
              <h1 className="text-3xl font-bold mb-5 ">{`Welcome to Mentorland's Marketplace`}</h1>
              <p className="text-lg leading-6 mb-3">
                The old bill driving a mini bloody shambles the black death on
                his bill willy it's cracking flags, doolally wind up doing my
                nut in by 'eck love on a stag do complete mare, a bottle of
                plonk chinwag some mothers do 'ave 'em what a doddle tosser.
              </p>
              <Link href="/student/marketplace/searchresult">
              <button className="bg-[#2769D9] font-bold rounded-lg pt-1.5 pb-2 px-10">
                Search for Access Cards
              </button>
              </Link>
            </div>
            <div className="h-full  flex justify-center items-center ">
              <Image alt="card" src={marketplaceCard} className="w-10/12 " />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="container mx-auto px-20 py-6">
          <h1 className="text-black font-bold mb-5 text-2xl">
            Latest Enriched Packs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Repeat your Card component for each card you want to display */}
            {latestEnrichedPacks.map((item, index) => (
              <Link key={index} href="/student/marketplace/buypack">
                <Card
                  key={index}
                  imagePath={item.imagePath}
                  mentorName={item.mentorName}
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                />
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#2769D9] text-white font-bold rounded-lg pt-1.5 pb-2 px-8 text-xl">
              Search the Marketplace
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto px-20 py-6">
          <h1 className="text-black font-bold mb-5 text-2xl">
            Latest simple Packs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Repeat your Card component for each card you want to display */}
            {latestEnrichedPacks.map((item, index) => (
              <Link key={index} href="/student/marketplace/buypack">
                <Card
                  key={index}
                  imagePath={item.imagePath}
                  mentorName={item.mentorName}
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
