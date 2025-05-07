import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'

function Dashboard() {
  return (
    <div className='bg-white dark:bg-neutral-900 pb-4 shadow grow'>
      <TopBar />
      <Grid />
        
    </div>
  )
}

export default Dashboard