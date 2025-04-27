import React from 'react'
import Search from './TopBar/Search'
import  { FiCalendar, FiMenu }  from  'react-icons/fi'
import { motion } from "motion/react"

function TopBar() {
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
        <div className='flex items-left justify-between p-0.5 flex-col lg:flex-row gap-2'>
          <Search />
            <button className='flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded'>
                <FiCalendar/><span> Prev 6 Months</span>
            </button>
        </div>

    </div>
  )
}

export default TopBar