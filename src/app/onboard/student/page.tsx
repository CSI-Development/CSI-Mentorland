"use client"
import React, { useState } from 'react'
import Logo from '../../../../public/logo.png'
import Image from 'next/image'
import OnboardingPageTracker from '@/components/onboard/OnboardingPageTracker'
import StageOne from '@/components/onboard/StageOne'

function studentOnboard() {
    const [stage, setStage]=useState(1);
  return (
    <>
    <div className='w-screen h-screen max-h-screen p-5 bg-[#010d27] '>
        <Image className='mx-auto ' alt='logo' src={Logo.src} height={100} width={320}></Image>
        <OnboardingPageTracker stage={2}/>
        {stage===1&&<StageOne/>}
    </div>
    </>
  )
}

export default studentOnboard