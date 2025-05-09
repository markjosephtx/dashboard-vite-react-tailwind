import React from 'react'
import DarkModeToggleImage from '../DarkModeToggleImage'


function AppearanceSection() {
  return (
    <>
      
      <div className='w-full flex flex-col gap-6'>
        <div className='border-b border-neutral-200 dark:border-neutral-700 pb-6'>
          <h2 className='text-2xl font-bold text-neutral-950 dark:text-white'>Appearance</h2>
          <p className='text-neutral-500 dark:text-neutral-300'>Customize the appearance of the app. Automatically switch between day and night themes.</p>
        </div>
        <div className=' '>
          <h3 className='text-lg font-semibold text-neutral-950 dark:text-white'>Theme</h3>
          <p className='text-neutral-500 dark:text-neutral-300'>Select the theme for the dashboard.</p>
        </div>
        <DarkModeToggleImage/>
        
      </div>
    
    
    
    </>
  )
}

export default AppearanceSection