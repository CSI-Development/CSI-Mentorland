import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logo.png'

function Header() {
  return (
    <nav className='w-full flex bg-[#010d27] py-5 px-10 fixed justify-between'>
      <div>
        <Image alt='logo' src={Logo} />
      </div>
      <div className='flex justify-center gap-5 text-xl'>
        <button>What we do</button>
        <button>Categories</button>
        <button>Search</button>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </nav>
  )
}

export default Header