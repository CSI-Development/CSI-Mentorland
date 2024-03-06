"use client"
import React from 'react'
import sampleSubject2 from '../../../../public/selectSubject/subjectMentor.png'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

interface MentorProfileCardProps {
    mentorName: string;
    mentorProfilePic: string;
    mentorDomain: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
}

function MentorProfileCard(props: MentorProfileCardProps) {
    const { mentorName, mentorDomain, mentorProfilePic, twitter, facebook, instagram } = props;

    return (
        <div className='w-8/12 mx-auto mt-10'>
            <div className='flex gap-5'>
                <Image src={sampleSubject2} alt='mentor' className='rounded-full h-20 w-20' />
                <div>
                    <p className='text-lg h-fit font-bold'>{mentorName}</p>
                    <p className='text-md'>{mentorDomain}</p>
                    <div className='flex gap-2 mt-1 text-[#ffd701]'>
                        <Icon icon="ri:twitter-x-fill" />
                        <Icon icon="streamline:facebook-1" />
                        <Icon icon="teenyicons:instagram-outline" />
                    </div>
                </div>
            </div>
            <p className='text-2xl mt-2 mb-10 font-bold'>Course by Cody Getchell</p>
        </div>
    )
}

export default MentorProfileCard