import React from 'react'
import StatCards from './StatCards'
import ActivityGraph from './ActivityGraph'
import UsageRadar from './UsageRadar'
import RecentTransactions from './RecentTransactions'
import AcivityAreaChart from './AcivityAreaChart'

function Grid() {
  return (
    <div className='px-4 grid gap-4 grid-cols-12'>
        <StatCards />
        <ActivityGraph />
        <UsageRadar />
        <RecentTransactions />
        <AcivityAreaChart />
        
    </div>
  )
}

export default Grid