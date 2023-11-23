import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";

const MyInfo = () => {
  return (
    <div className='w-full m-auto flex flex-col justify-center items-center py-10 border-b-2 border-gray-700 lg:flex-row lg:w-full lg:justify-start'>
      <div className='mb-8 lg:mr-8'>
        <img src="src/assets/my.jpg" className='rounded-full w-56'/>
      </div>
      <div className='text-center lg:text-left'>
        <h1 className='text-4xl text-zinc-200 font-bold mb-3'>Santiago Zurbrigk</h1>
        <p className='text-zinc-400 text-lg'>Soy un apasionado desarollador y diseñador web UI/UX</p>
        <div className='flex justify-center mt-5 lg:justify-start'>
            <a className='mr-5 flex justify-center items-center bg-emerald-500 rounded-xl px-4 text-zinc-200 lg:py-2 lg:px-3 cursor-pointer'><FaLinkedin size={20} /></a>
            <a className='flex bg-indigo-500 rounded-xl text-base font-semibold items-center justify-center p-3 text-zinc-200 lg:py-2 cursor-pointer'><IoLinkOutline size={20} className='mr-4 lg:mr-2' />Resume</a>
        </div>
      </div>
    </div>
  )
}

export default MyInfo
