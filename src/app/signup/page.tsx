import Image from 'next/image'
import React from 'react'
import sideCoverImage from '../../../public/signupSideImage.png'
import SignUpForm from '@/components/signUp/SignUpForm'
type Props = {}

function signUp({ }: Props) {
    return (
        <>
            <div className='w-full bg-white flex'>
                <img className='h-screen' src={sideCoverImage.src} />
                <div className='w-full overflow-y-scroll h-screen '>
                    <SignUpForm/>
                </div>
            </div>
        </>
    )
}

export default signUp