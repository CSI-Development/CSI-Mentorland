import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function StageTwo() {
    return (
        <div className="mt-20 ">
            <p className='text-center font-semibold text-2xl mb-5'>Now, Please ad an avatar</p>
            <div className='mx-auto bg-[#0e2344] border-[4px] border-[#1b448f] w-36 h-36 text-center flex justify-center rounded-full mb-12'>
                <Icon className='my-auto text-6xl text-[#6a9df6]' icon="ei:camera" />
            </div>
        </div>
    )
}

export default StageTwo