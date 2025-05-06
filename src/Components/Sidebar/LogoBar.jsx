import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaVectorSquare } from "react-icons/fa6";

function LogoBar() {
  return (
    <div className='flex flex-row justify-between border-b mb-4 mt-2 pb-4 border-neutral-300'>
      <div className='flex items-center gap-2'>
        <FaVectorSquare className='text-xl text-neutral-600' />
        <span className='text-lg font-bold block'>SNARE.IO</span>
      </div>
      <button className='flex p-1 text-neutral-500 hover:text-neutral-100  bg-white hover:bg-neutral-600 rounded transition-colors relative items-center'>
        <FiMenu className='text-lg' />
      </button>     
    </div>
  )
}

export default LogoBar