import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SidebarItem } from './Components/Sidebar/SidebarExpanded';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import SidebarExpanded from './Components/Sidebar/SidebarExpanded';
import { FiHome, FiBox, FiDollarSign, FiBarChart2, FiBook, FiSettings, FiShoppingBag } from "react-icons/fi";

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col lg:flex-row gap-4 p-4'>
        <SidebarExpanded>
          <SidebarItem icon={<FiHome size={18} />} text="Dashboard" to="/dashboard" />
          <SidebarItem icon={<FiBarChart2 size={18} />} text="Statistics" to="/statistics" />
          <SidebarItem icon={<FiBox size={18} />} text="Inventory" to="/inventory" />
          <SidebarItem icon={<FiShoppingBag size={18} />} text="Orders" to="/orders" alert />
          <SidebarItem icon={<FiDollarSign size={18} />} text="Billings" to="/billings" />
          <hr className='my-3' />
          <SidebarItem icon={<FiSettings size={18} />} text="Settings" to="/settings" />
          <SidebarItem icon={<FiBook size={18} />} text="Resources" to="/resources" />
          <hr className='my-3' />
        </SidebarExpanded>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/inventory" element={<div>Inventory page</div>} />
          <Route path="/orders" element={<div>Orders page</div>} />
          <Route path="/billings" element={<div>Billings page</div>} />
          <Route path="/settings" element={<div>Settings page</div>} />
          <Route path="/resources" element={<div>Resources page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
