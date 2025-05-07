import React from 'react'
import  { FiCalendar, FiUser, FiBell }  from  'react-icons/fi'

function TopBar() {
  return (
    <div className='border-b px-4 mb-4 mt-4 pb-4  border-neutral-200 dark:border-neutral-700'>
        <div className='flex justify-end p-0.5 flex-col lg:flex-row gap-2'>
          <div className='flex gap-2'>
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