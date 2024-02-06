import Image from 'next/image'
import React from 'react'
import mentor1 from '../../../public/sampleImages/sampleImg1.png'
import mentor2 from '../../../public/sampleImages/sampleImg2.png'
import mentor3 from '../../../public/sampleImages/sampleImg3.png'

function StageFour() {
    return (
        <div className='w-8/12 mx-auto mt-10  h-fit flex flex-col  justify-center'>
            <p className='text-center font-semibold text-2xl'>
                What subjects would you like to learn?
            </p>

            <p className='text-[#fefffe] text-center mt-8 mb-3'>You can choose more than one</p>

            <div className=' w-full   grid grid-cols-3 gap-4'>
                <div className=' bg-[#171a2d] rounded-xl p-5'>
                    <p>Marketing</p>
                    <div className='flex justify-between mt-3'>
                        <Image alt='logo' src={mentor1} />
                        <Image alt='logo' src={mentor2} />
                        <Image alt='logo' src={mentor3} />
                    </div>
                </div>
                <div className=' bg-[#171a2d] rounded-xl p-5'>
                    <p>Marketing</p>
                    <div className='flex justify-between mt-3'>
                        <Image alt='logo' src={mentor1} />
                        <Image alt='logo' src={mentor2} />
                        <Image alt='logo' src={mentor3} />
                    </div>
                </div>
                <div className=' bg-[#171a2d] rounded-xl p-5'>
                    <p>Marketing</p>
                    <div className='flex justify-between mt-3'>
                        <Image alt='logo' src={mentor1} />
                        <Image alt='logo' src={mentor2} />
                        <Image alt='logo' src={mentor3} />
                    </div>
                </div>
                <div className=' bg-[#171a2d] rounded-xl p-5'>
                    <p>Marketing</p>
                    <div className='flex justify-between mt-3'>
                        <Image alt='logo' src={mentor1} />
                        <Image alt='logo' src={mentor2} />
                        <Image alt='logo' src={mentor3} />
                    </div>
                </div>
                <div className=' bg-[#171a2d] rounded-xl p-5'>
                    <p>Marketing</p>
                    <div className='flex justify-between mt-3'>
                        <Image alt='logo' src={mentor1} />
                        <Image alt='logo' src={mentor2} />
                        <Image alt='logo' src={mentor3} />
                    </div>
                </div>
                <div className=' bg-[#171a2d] rounded-xl p-5'>
                    <p>Marketing</p>
                    <div className='flex justify-between mt-3'>
                        <Image alt='logo' src={mentor1} />
                        <Image alt='logo' src={mentor2} />
                        <Image alt='logo' src={mentor3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StageFour