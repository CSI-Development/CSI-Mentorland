'use client'
import React, { useState } from 'react'
import mentor1 from '../../../public/sampleMentor/mentor1.png'
import mentor2 from '../../../public/sampleMentor/mentor2.png'
import mentor3 from '../../../public/sampleMentor/mentor3.png'
import mentor4 from '../../../public/sampleMentor/mentor4.png'
import mentor5 from '../../../public/sampleMentor/mentor5.png'
import mentor6 from '../../../public/sampleMentor/mentor6.png'
import mentor7 from '../../../public/sampleMentor/mentor7.png'
import mentor8 from '../../../public/sampleMentor/mentor8.png'
import mentor9 from '../../../public/sampleMentor/mentor9.png'
import mentor10 from '../../../public/sampleMentor/mentor10.png'
import mentor11 from '../../../public/sampleMentor/mentor11.png'
import mentor12 from '../../../public/sampleMentor/mentor12.png'
import Image, { StaticImageData } from 'next/image'


function SelectmentorComponent() {

    const mentorsList: StaticImageData[] = [
        mentor1, mentor2, mentor3, mentor4, mentor5, mentor6,
        mentor7, mentor8, mentor9, mentor10, mentor11, mentor12
    ];

    const [selectedMentors, setSelectedMentors] = useState<StaticImageData[]>([]);

    const toggleSelectMentor = (mentor: StaticImageData) => {
        if (selectedMentors.includes(mentor)) {
            // If mentor is already selected, remove it
            setSelectedMentors(prevSelected => prevSelected.filter(item => item !== mentor));
        } else {
            // If mentor is not selected, add it
            setSelectedMentors(prevSelected => [...prevSelected, mentor]);
        }
    };

    return (
        <div className='w-full h-screen pt-20 overflow-y-scroll pb-5'>
            <p className='text-center font-semibold text-2xl mt-4'>
                We have {mentorsList.length} Mentors that might interest you
            </p>
            <div className='w-7/12 flex mx-auto text-xl mt-3 mb-2'>
                <p className='font-semibold mr-2'>Coaching</p>
                <p>8 Courses</p>
            </div>

            <div className='w-7/12 grid grid-cols-4 gap-4 mx-auto'>
                {mentorsList.map((mentor, index) => (
                    <div key={index} onClick={() => toggleSelectMentor(mentor)} className={`relative cursor-pointer ${selectedMentors.includes(mentor) ? 'border-yellow-500 border-4 rounded-3xl my-auto' : ''}`}>
                        <Image className='rounded-3xl' alt={`mentor-${index}`} src={mentor} />
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default SelectmentorComponent