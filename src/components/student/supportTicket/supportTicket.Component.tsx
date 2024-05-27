import React from 'react'

function TicketHours() {
  return (
    <div className='w-[35%] bg-white p-5 rounded-md shadow'>
        <div className='w-full'>  
            <h1 className='font-semibold text-2xl'>Opening Hours</h1>
            <div className='w-full flex justify-between text-[#5D6475] mt-5'> 
                <div className=''>
                    <p>Mon-Fri</p>
                    <p>09:00 - 18:00</p>
                </div>
                <div>
                    <p>Sunday & Holidays</p>
                    <p >Closed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketHours