// components/Content.tsx
import React from 'react';

// Import the image from the public folder
import background from '../../../public/landingPage/LandingBg1.png';
import cards from '../../../public/landingPage/CascadingCard.png';
import Image from 'next/image';
import Link from 'next/link';

const Content: React.FC = () => {
  return (
    <div
      className="pt-20 bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className='relative'>
        <Image alt='cards' src={cards} />
        <div className='absolute left-40 top-1/3 w-1/3 pt-5 '>
          <p className='text-4xl font-bold'>LEARN WITH THE BEST, & GET PAID TO DO SO!</p>
          <Link href={"/signup"}>
          <button className='mt-6 bg-[#2769d8] px-3 py-2 text-lg rounded-lg'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
