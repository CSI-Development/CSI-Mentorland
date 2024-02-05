"use client"
import React, { useState } from 'react'
import Logo from '../../../../public/logo.png'
import Image from 'next/image'
import OnboardingPageTracker from '@/components/onboard/OnboardingPageTracker'
import StageOne from '@/components/onboard/StageOne'
import { Icon } from '@iconify/react/dist/iconify.js'
import StageTwo from '@/components/onboard/StageTwo'
import StageThree from '@/components/onboard/StageThree'

function studentOnboard() {
  const [stage, setStage] = useState(3);
  return (
    <div className='w-screen h-screen  p-5 bg-[#010d27]'>
      <Image className='mx-auto ' alt='logo' src={Logo.src} height={100} width={320}></Image>
      <OnboardingPageTracker stage={2} />
      {stage === 1 && <StageOne />}
      {stage === 2 && <StageTwo/>}
      {stage === 3 && <StageThree/>}
      <div className='flex gap-10 mt-6 justify-center'>
        <button className='bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg'><Icon className='text-3xl' icon="tabler:arrow-right" />Next</button>
        <button className='text-xl text-[#b9baba] w-20'>Skip</button>
      </div>
    </div>

  )
}

export default studentOnboard