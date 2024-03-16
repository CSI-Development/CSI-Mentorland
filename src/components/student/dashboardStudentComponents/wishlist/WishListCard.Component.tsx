'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { Line } from 'rc-progress';
import React from 'react'


interface CommunityCardProps {
    memberName: string;
    memberRole: string;
    memberImage: string;
    courseImg: string;
    courseName: string;
    price: number;
  }

function WishListCard(props: CommunityCardProps) {
  return (
    <div className="flex gap-6  h-40  ">
      <Image
        src={props.courseImg}
        alt="Mentor"
        className="w-40"
        width={100}
        height={100}
      />

      {/* <div className='w-40 bg-black bg-opacity-25 '  style={{ backgroundImage: `url(${props.courseImg})` }}>
      <Icon icon="mdi-light:lock" className='text-white'/>
      </div> */}

      <div>
        <h1 className="font-bold text-lg">{props.courseName}</h1>
        <div className="flex gap-2 mt-3 ">
          <Image
            src={props.memberImage}
            alt="Mentor"
            className="w-14"
            width={100}
            height={100}
          />
          <div className="leading-5 my-auto">
            <p className="font-bold">{props.memberName}</p>
            <p>{props.memberRole}</p>
          </div>
        </div>

        <div className="flex h-fit justify-between ">
          <div className='mt-2'>
            <p className="leading-5">Price</p>
            <p className='font-bold text-xl leading-5'>$3,800</p>

          </div>
          <button className="bg-[#2769D9] font-bold rounded-lg  text-white px-10 py-2 h-fit my-auto">
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishListCard