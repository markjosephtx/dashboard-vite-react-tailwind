import React from 'react'
import DarkModeToggler from '../DarkModeToggler'


function AppearanceSection() {
  return (
    <>
      
      <div>
        <div className='border-b border-neutral-200 dark:border-neutral-700 pb-6'>
          <h2 className='text-2xl font-bold text-neutral-950 dark:text-white'>Appearance</h2>
          <p className='text-neutral-500 dark:text-neutral-300'>Customize the appearance of the app. Automatically switch between day and night themes.</p>
        </div>
        <DarkModeToggler />
      </div>
    
    
    
    </>
  )
}

export default AppearanceSection