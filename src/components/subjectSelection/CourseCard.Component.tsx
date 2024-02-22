'use client'
import React, { useState } from 'react';
import sampleSubject from '../../../public/selectSubject/subjectCoverImg.png';
import Image from 'next/image';

interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

function CourseCard(props: CourseCardProps) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const { title, description, imageUrl, price } = props;

    const truncatedText = expanded ? description : `${description.slice(0, 600)}...`;

    return (
        <div className='w-8/12 mx-auto mt-4'>
            <p className='font-semibold text-xl'>{title}</p>
            <div className='flex gap-8 mt-5'>
                <Image width={100} height={100} src={imageUrl} alt='subject' className='h-44 w-44 rounded-full' />
                <div>
                    <p>{truncatedText}</p>
                    {!expanded && (
                        <button className='text-blue-500' onClick={toggleExpand}>
                            Read More
                        </button>
                    )}
                </div>
                <div className='flex flex-col justify-center gap-2'>
                    <p className='text-3xl font-bold text-center'>
                        {price}
                    </p>
                    <button className='bg-blue-500 text-white py-2 w-28 px-4 rounded-lg mt-4'>
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
