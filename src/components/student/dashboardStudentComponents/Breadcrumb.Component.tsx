import React from 'react'

function Breadcrumb({titel}: {titel: string}) {
  return (
    <div className='text-xl text-black font-bold'>{titel}</div>
  )
}

export default Breadcrumb