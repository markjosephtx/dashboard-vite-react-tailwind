import React from 'react'
import { SidebarItem } from './Components/Sidebar/SidebarExpanded'
import './App.css'    
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import SidebarExpanded from './Components/Sidebar/SidebarExpanded'
import { FiHome, FiBox, FiDollarSign, FiBarChart2, FiBook, FiSettings } from "react-icons/fi";


function App() {

  return (
    <>
    
      <div className='grid gap-4 p-4 grid-cols-[200px_minmax(200px,_1fr)]'>
        <SidebarExpanded>
          <SidebarItem icon={<FiHome size={22} />} text="Dashboard" active />
          <SidebarItem icon={<FiBarChart2 size={22} />} text="Statistics" />
          <SidebarItem icon={<FiHome size={22} />} text="Inventory" />
          <SidebarItem icon={<FiBox size={22} />} text="Orders" alert />
          <SidebarItem icon={<FiDollarSign size={22} />} text="Billings" />
          <hr className='my-3' />
          <SidebarItem icon={<FiSettings size={22} />} text="Settings" />
          <SidebarItem icon={<FiBook size={22} />} text="Resources" />

        </SidebarExpanded>
        <Dashboard />
      </div>


    </>
  )
}

export default App
