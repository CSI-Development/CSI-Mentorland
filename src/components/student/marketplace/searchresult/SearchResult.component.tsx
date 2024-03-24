import React from 'react'
import packsThumbnail from "../../../../../public/marketplace/packsThumbnail.png";
import PackCard from '../PacksCard.component';

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
        }
      ];

  return (
    <div className="h-screen ">
      {/* top thumbnail */}
      

      <div className="mt-8">
        <div className="container mx-auto px-20 py-6">
          <h1 className="text-black font-bold mb-5 text-2xl">
            Search Results
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Repeat your Card component for each card you want to display */}
            {latestEnrichedPacks.map((item, index) => (
              <PackCard
                key={index}
                imagePath={item.imagePath}
                mentorName={item.mentorName}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-[#2769D9] text-white font-bold rounded-lg pt-1.5 pb-2 px-8 text-xl">
              Back to Marketplace
            </button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default SearchResult