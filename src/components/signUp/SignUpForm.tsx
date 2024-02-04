'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../public/logoDark.png'
import { Icon } from '@iconify/react/dist/iconify.js'

function SignUpForm() {

    const [role, setrole] = useState<string>()
    return (
        <>
            <div className='mt-5 w-full flex justify-center'>
                <Image alt='logo' src={Logo} />
            </div>
                <div>
                    <p className='text-black'>Sign Up</p>
                    <div className='flex gap-3'>
                        <div className={`${role==='student'? ' bg-[#2668d9]':'bg-[#5d6574] py-3 px-7 w-40 rounded-lg'  }`}>
                            {role === 'student' ? <Icon className='flex justify-center w-full' icon="teenyicons:tick-circle-solid" /> : <Icon className='flex justify-center w-full' icon="material-symbols:circle-outline" />}
                            <Icon className='flex justify-center w-full text-4xl mt-2' icon="iconoir:graduation-cap" />
                            <p className='text-center'>As A Student</p>
                        </div>
                        <div className={`${role==='student'? ' bg-[#2668d9]':'bg-[#5d6574] py-3 px-7 w-40 rounded-lg'  }`}>
                            {role === 'student' ? <Icon className='flex justify-center w-full' icon="teenyicons:tick-circle-solid" /> : <Icon className='flex justify-center w-full' icon="material-symbols:circle-outline" />}
                            <Icon className='flex justify-center w-full text-4xl mt-2' icon="healthicons:register-book-outline" />
                            <p className='text-center'>As A Mentor</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SignUpForm