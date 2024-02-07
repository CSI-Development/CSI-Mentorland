'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../public/logoDark.png'
import { Icon } from '@iconify/react/dist/iconify.js'

function SignUpForm() {

    const [role, setrole] = useState<string>("")
    return (
        <>
            <div className='mt-5 w-full flex justify-center'>
                <Image alt='logo' src={Logo} />
            </div>
            <div className='flex justify-center mt-6 text-black'>
                <div className='w-5/12  '>
                    <p className='text-black text-center text-2xl font-bold'>Sign Up</p>
                    <div className='flex justify-center  gap-3 mt-4 w-full text-white'>
                        <div
                            className={` py-2 px-7 w-40 rounded-lg ${role === 'student' ? ' bg-[#2668d9] ' : ' bg-[#5d6574] '}`}
                            onClick={() => setrole('student')}
                        >
                            {role === 'student' ? <Icon className='flex justify-center w-full' icon="teenyicons:tick-circle-solid" /> : <Icon className='flex justify-center w-full' icon="material-symbols:circle-outline" />}
                            <Icon className='flex justify-center w-full text-4xl mt-1' icon="iconoir:graduation-cap" />
                            <p className='text-center'>As A Student</p>
                        </div>

                        <div
                            className={` py-2 px-7 w-40 rounded-lg ${role === 'mentor' ? ' bg-[#2668d9] ' : ' bg-[#5d6574] '}`} onClick={() => setrole('mentor')}
                        >
                            {role === 'mentor' ? <Icon className='flex justify-center w-full' icon="teenyicons:tick-circle-solid" /> : <Icon className='flex justify-center w-full' icon="material-symbols:circle-outline" />}
                            <Icon className='flex justify-center w-full text-4xl mt-1' icon="healthicons:register-book-outline" />
                            <p className='text-center'>As A Mentor</p>
                        </div>
                    </div>


                    <button className={`mt-6 flex py-2 justify-center w-8/12 mx-auto  gap-2 border-2 rounded-lg border-[#b9baba] ${role === "" ? ` text-[#b9baba] ` : ` text-black `}`}>
                        {role === "" ? <Icon className='text-2xl' icon="devicon-plain:google" /> : <Icon className='text-2xl' icon="devicon:google" />}
                        Sign up with Google
                    </button>
                    <button className={` mt-2 flex py-2 justify-center w-8/12 mx-auto gap-2 border-2 rounded-lg border-[#b9baba] ${role === "" ? ` text-[#b9baba] ` : ` text-black `}`}>
                        {role === "" ? <Icon className='text-2xl' icon="simple-icons:facebook" /> : <Icon className='text-2xl' icon="logos:facebook" />}
                        Sign up with Facebook
                    </button>


                    <p className='text-black text-center my-2'>- OR -</p>

                    <div>
                        <p className='text-[#1b448f] mb-1 text-lg'>Email Address</p>
                        <input type='email' placeholder='newuser@myemail.com' className='w-full border-2 rounded-lg border-[#b9baba] py-3 px-5'></input>
                    </div>
                    <div className='mt-3'>
                        <p className='text-[#1b448f] mb-1 text-lg'>Email Address</p>
                        <input type='email' placeholder='newuser@myemail.com' className='w-full border-2 rounded-lg border-[#b9baba] py-3 px-5'></input>
                        <div className='text-[#b9baba] text-xs mt-1'>
                            <p>Upper and lower case letters</p>
                            <p>At least one number or special character (%&*_!@)</p>
                            <p>At least 10 characters</p>
                        </div>
                    </div>
                    <button className={` rounded-lg w-full py-2.5 text-lg my-2 ${role === "" ? ` text-white bg-[#b9baba] ` : ` text-black bg-[#2668d8] `}`}>Get Started</button>
                    <div className='flex gap-2'>
                        <p>Already have an accoutn?</p>
                        <button className='text-[#2668d8] '>Login</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUpForm