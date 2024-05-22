import React from 'react'

function PaymentConfirm() {
  return (
    <div className="h-screen pt-20 flex flex-col items-center text-center">
        <div className='w-5/12 mt-52'>
            <h1 className='text-5xl font-bold mb-10'>Thanks for your confirming your Identity</h1>
            <p className='text-base mb-10   '>Please proceed to the platform</p>
            <button className='text-white font-bold py-2 px-4 bg-primary rounded-lg'>Access</button>
        </div>
    </div>
  )
}

export default PaymentConfirm