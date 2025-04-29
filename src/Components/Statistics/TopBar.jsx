import React from 'react'
import  { FiCalendar, FiUser, FiBell }  from  'react-icons/fi'

function TopBar() {
  return (
    <div className='border-b px-4 mb-4 mt-4 border-stone-200'>
        <div className='flex justify-between p-0.5 flex-col lg:flex-row gap-2'>
          <div className='flex items-start gap-2'>
            <button className='flex w-[32px] h-[32px] text-md items-center justify-center bg-snare-blue-100 transition-colors hover:bg-snare-blue-600 hover:text-snare-blue-100 rounded'>
                <FiCalendar/>
            </button>
            <button className='flex w-[32px] h-[32px] text-md items-center justify-center bg-snare-blue-100 transition-colors hover:bg-snare-blue-600 hover:text-snare-blue-100 rounded'>
              <FiBell />
            </button>
            <button className='flex w-[32px] h-[32px] text-md items-center justify-center bg-snare-blue-100 transition-colors hover:bg-snare-blue-600 hover:text-snare-blue-100 rounded'>
              <FiUser />
            </button>
          </div>
        </div>

    </div>
  )
}

export default TopBar