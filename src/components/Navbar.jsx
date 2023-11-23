import React from 'react'
import { useState } from 'react';
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

const Navbar = () => {

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <nav className='w-full text-zinc-100 flex justify-end p-4'>
        <div onClick={handleNav}>
          {!nav ? <IoIosMoon size={28} className='hover:-rotate-12 transition-all cursor-pointer' /> : <MdSunny size={28} className='hover:-rotate-12 transition-all cursor-pointer' />}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
