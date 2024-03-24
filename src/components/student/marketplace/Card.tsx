"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <span>
      {filled ? (
        <Icon className="text-[#FFD600] text-2xl" icon="basil:star-solid" />
      ) : (
        <Icon className="text-gray-300 text-2xl" icon="basil:star-solid" />
      )}
    </span>
  );
};

const Card = ({
  name,
  mentorName,
  price,
  imagePath,
  rating,
}: {
  name: string;
  mentorName: string;
  price: string;
  imagePath: string;
  rating: number;
}) => {
  const filledStars = Array(rating).fill(0);
  const emptyStars = Array(5 - rating).fill(0);

  return (
    <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_5px] overflow-hidden text-black">
      <img
        src={imagePath}
        alt={name}
        className="w-full h-fit object-cover pt-5 px-12"
      />
      <div className="p-4 pt-1 leading-3">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-[#5D6475] text-md">Enriched by:</p>
        <p className="font-bold text-lg">{mentorName}</p>
        <div className="flex items-center">
          {filledStars.map((_, i) => (
            <Star key={i} filled={true} />
          ))}
          {emptyStars.map((_, i) => (
            <Star key={i} filled={false} />
          ))}
        </div>
            <p className="text-xl font-bold text-[#2769D9] mt-1">{price}</p>
      </div>
    </div>
  );
};

export default Card;
