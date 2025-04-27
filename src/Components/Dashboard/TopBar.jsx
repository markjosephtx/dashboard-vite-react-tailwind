import React from 'react'
import  { FiCalendar }  from  'react-icons/fi'
import { motion } from "motion/react"

function TopBar() {
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
        <div className='flex items-left justify-between p-0.5 flex-col lg:flex-row gap-2'>
            <div>
                <span className='text-sm font-bold block'>Goodmorning, Mark!</span>
                <span className='text-xs block text-stone-500'>Tuesday, April 17th 2025</span>
            </div>
            {/*<button className='flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded'>
                <FiCalendar/><span> Prev 6 Months</span>
            </button>*/}
            <motion.button drag whileDrag={{ scale: 1.05, backgroundColor: "text-violet-700" }}
              className='flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded'
              whileHover={{
                scale: 1.02,
                transition: { duration: .5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              
              <FiCalendar />
              <span>Next 6 Months</span>
             </motion.button>
        </div>

    </div>
  )
}

export default TopBar