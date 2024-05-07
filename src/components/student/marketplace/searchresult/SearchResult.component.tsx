import React from "react";
import packsThumbnail from "../../../../../public/marketplace/packsThumbnail.png";
import PackCard from "../PacksCard.component";
import Link from "next/link";

function SearchResult() {
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
  ];

  return (
    <div className="h-screen ">
      {/* top thumbnail */}

      <div className="mt-8">
        <div className="container mx-auto px-20 py-6">
          <h1 className="text-black font-bold mb-5 text-2xl">Search Results</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Repeat your Card component for each card you want to display */}
            {latestEnrichedPacks.map((item, index) => (
              <Link key={index} href="/student/marketplace/buypack">
                <PackCard
                  // 0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359
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
          <div className="flex justify-center mt-10">
            <Link href="/student/marketplace">
              <button className="bg-[#2769D9] text-white font-bold rounded-lg pt-1.5 pb-2 px-8 text-xl">
                Back to Marketplace
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
