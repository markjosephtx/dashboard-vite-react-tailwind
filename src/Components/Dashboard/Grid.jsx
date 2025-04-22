import React from 'react'
import StatCards from './StatCards'
import ActivityGraph from './ActivityGraph'
import UsageRadar from './UsageRadar'

function Grid() {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatCards />
        <ActivityGraph />
        <UsageRadar />
        
    </div>
  )
}

export default Grid