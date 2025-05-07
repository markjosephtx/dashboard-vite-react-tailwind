import React from 'react'
import Search from './TopBar/Search'
import  { FiCalendar, FiUser, FiBell }  from  'react-icons/fi'
import { motion } from "motion/react"

function TopBar() {
  return (
    <div className='border-b px-4 mb-4 mt-4 pb-4 lg:pb-0 border-neutral-200 dark:border-neutral-700'>
        <div className='flex justify-between p-0.5 flex-col lg:flex-row gap-2'>
          <Search />
          <div className='flex items-start gap-2'>
            <button className='flex w-[32px] h-[32px] text-md items-center justify-center bg-neutral-100 text-neutral-950 dark:bg-neutral-700 dark:text-white transition-colors hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 rounded'>
                <FiCalendar/>
            </button>
            <button className='flex w-[32px] h-[32px] text-md items-center justify-center bg-neutral-100 text-neutral-950 dark:bg-neutral-700 dark:text-white transition-colors hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 rounded'>
              <FiBell />
            </button>
            <button className='flex w-[32px] h-[32px] text-md items-center justify-center bg-neutral-100 text-neutral-950 dark:bg-neutral-700 dark:text-white transition-colors hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 rounded'>
              <FiUser />
            </button>
          </div>
        </div>

    </div>
  )
}

export default TopBar