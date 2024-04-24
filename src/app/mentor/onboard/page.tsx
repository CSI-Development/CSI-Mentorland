'use client';
import React, { useState } from 'react';
import Logo from '../../../../public/logo.png';
import Image from 'next/image';
import OnboardingPageTracker from '@/components/mentor/onboard/OnboardingPageTracker.Component';
import StageOne from '@/components/mentor/onboard/StageOne.Component';
import { Icon } from '@iconify/react/dist/iconify.js';
import StageTwo from '@/components/mentor/onboard/StageTwo.Component';
import StageThree from '@/components/mentor/onboard/StageThree.Component';
import StageFour from '@/components/mentor/onboard/StageFour.Component';
import StageFive from '@/components/mentor/onboard/StageFive.component';

const MentorOnboarding = () => {
  const [stage, setStage] = useState(1);
  const [onBoardData, setOnBoardData] = useState({});

  const updateStage = () => {
    setStage(stage + 1);
  };

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-screen h-screen  p-5 bg-[#010d27]">
      <Image
        className="mx-auto "
        alt="logo"
        src={Logo.src}
        height={100}
        width={320}
      ></Image>
      <OnboardingPageTracker stage={stage} />
      {stage === 1 && <StageOne />}
      {stage === 2 && <StageTwo />}
      {stage === 3 && <StageThree />}
      {stage === 4 && <StageFour />}
      {stage === 5 && <StageFive />}
      <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
        {stage === 5 ? (
          <button
            className="bg-[#2668d8] py-1.5 px-4 flex text-lg rounded-lg font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => updateStage()}
            className="bg-[#2668d8] py-1.5 px-4 flex text-lg rounded-lg font-semibold"
          >
            <Icon className="w-7 h-7" icon="tabler:arrow-right" />
            Next
          </button>
        )}
        <button
          onClick={() => updateStage()}
          className="text-xl text-[#b9baba] w-20 font-semibold"
        >
          Skip
        </button>
      </div>
      {/* ) : (
        <div className="flex gap-10 mt-6 justify-center bg-[#010d27] ">
          <Link href={"/student/mentorselection"}>
            <button
              onClick={() => updateStage()}
              className="bg-[#2668d8] py-1.5 px-4 flex text-xl rounded-lg"
            >
              <Icon className="text-3xl" icon="tabler:arrow-right" />
              Select Mentor
            </button>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default MentorOnboarding;
