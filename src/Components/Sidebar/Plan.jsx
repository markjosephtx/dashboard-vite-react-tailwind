import React from 'react'

function Plan() {
  return (
    <div className='flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-neutral-500 justify-end text-xs'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='font-bold'>Enterprise</p>
                <p className='text-neutral-500'>Pay as you go</p>
            </div>
            <button className='px-2 py-1.5 font-medium bg-neutral-200 hover:bg-neutral-300 rounded transition-colors'>
                Support
            </button>
        </div>
    </div>
  )
}

export default Plan