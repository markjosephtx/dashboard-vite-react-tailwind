import React from 'react'
import { SidebarItem } from './Components/Sidebar/SidebarExpanded'
import './App.css'    
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import SidebarExpanded from './Components/Sidebar/SidebarExpanded'
import { FiHome, FiBox, FiDollarSign, FiBarChart2, FiBook, FiSettings, FiShoppingBag } from "react-icons/fi";


function App() {

  return (
    <>
    
      <div className='flex flex-col lg:flex-row gap-4 p-4'>
        <SidebarExpanded>
          <SidebarItem icon={<FiHome size={18} />} text="Dashboard" active />
          <SidebarItem icon={<FiBarChart2 size={18} />} text="Statistics" />
          <SidebarItem icon={<FiBox size={18} />} text="Inventory" />
          <SidebarItem icon={<FiShoppingBag size={18} />} text="Orders" alert />
          <SidebarItem icon={<FiDollarSign size={18} />} text="Billings" />
          <hr className='my-3' />
          <SidebarItem icon={<FiSettings size={18} />} text="Settings" />
          <SidebarItem icon={<FiBook size={18} />} text="Resources" />
          <hr className='my-3' />
        </SidebarExpanded>
        <Dashboard/>
      </div>


    </>
  )
}

export default App
