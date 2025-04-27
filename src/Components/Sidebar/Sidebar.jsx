import React from 'react'
import RouteSelect from './RouteSelect'
import Plan from './Plan'
import LogoBar from './LogoBar'

function Sidebar() {
  return (
    <div>
      <div className='overflow-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
          <LogoBar />
          <RouteSelect />
          
      </div>
      <Plan />
    </div>
  )
}

export default Sidebar