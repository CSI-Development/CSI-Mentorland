"use client"
import React, { useState } from 'react'
import Logo from '../../../../public/logo.png'
import Image from 'next/image'
import OnboardingPageTracker from '@/components/onboard/OnboardingPageTracker'
import StageOne from '@/components/onboard/StageOne'
import { Icon } from '@iconify/react/dist/iconify.js'
import StageTwo from '@/components/onboard/StageTwo'
import StageThree from '@/components/onboard/StageThree'
import StageFour from '@/components/onboard/StageFour'
import Link from 'next/link'

function StudentOnboard() {
  const [stage, setStage] = useState(1);
  const updateStage = () => {
    setStage(stage + 1)
  }
  return (
    <div className='w-screen h-screen  p-5 bg-[#010d27]'>
      <Image className='mx-auto ' alt='logo' src={Logo.src} height={100} width={320}></Image>
      <OnboardingPageTracker stage={stage} />
      {stage === 1 && <StageOne />}
      {stage === 2 && <StageTwo />}
      {stage === 3 && <StageThree />}
      {stage === 4 && <StageFour />}
      {stage < 4 ?
        <div className='flex gap-10 mt-6 justify-center bg-[#010d27] '>
          <button onClick={() => updateStage()} className='bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg'><Icon className='text-3xl' icon="tabler:arrow-right" />Next</button>
          <button onClick={() => updateStage()} className='text-xl text-[#b9baba] w-20'>Skip</button>
        </div>
        :
        <div className='flex gap-10 mt-6 justify-center bg-[#010d27] '>
          <Link href={'/mentorselection'}>
            <button onClick={() => updateStage()} className='bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg'><Icon className='text-3xl' icon="tabler:arrow-right" />Select Mentor</button>
          </Link>
        </div>
      }

    </div>

  )
}

export default StudentOnboard