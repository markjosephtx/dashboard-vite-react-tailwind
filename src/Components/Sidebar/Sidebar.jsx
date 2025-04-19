import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import RouteSelect from './RouteSelect'

function Sidebar() {
  return (
    <div className='overflow-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
        <AccountToggle/>
        <Search />
        <RouteSelect />
        
    </div>
    /* TODO: Plan Toggle */
  )
}

export default Sidebar