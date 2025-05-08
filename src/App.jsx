import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { SidebarItem } from './Components/Sidebar/SidebarExpanded';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import Settings from './Components/Settings/SettingsLayout';
import SidebarExpanded from './Components/Sidebar/SidebarExpanded';
import { ThemeProvider } from './context/ThemeContext';
import { FiGrid, FiList, FiUsers, FiBarChart2, FiBook, FiSettings, FiFolder, FiSearch, FiHelpCircle } from "react-icons/fi";

function App() {
  return (
    <>
    <ThemeProvider>
    <HashRouter>
      <div className='flex flex-col lg:flex-row gap-4 p-4 lg:p-0 lg:gap-0'>
        <SidebarExpanded>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex-grow'>
              <SidebarItem icon={<FiGrid size={18} />} text="Dashboard" to="/" />
              <SidebarItem icon={<FiBarChart2 size={18} />} text="Statistics" to="/statistics" />
              <SidebarItem icon={<FiList size={18} />} text="Reports" to="/reports" />
              <SidebarItem icon={<FiFolder  size={18} />} text="Documents" to="/documents" alert />
              <SidebarItem icon={<FiUsers size={18} />} text="Messages" to="/messages" />
            </div>
            <hr className='my-3 text-neutral-400' />
            <div className='flex-shrink-0'>
              <SidebarItem icon={<FiSettings size={18} />} text="Settings" to="/settings" />
              <SidebarItem icon={<FiHelpCircle size={18} />} text="Help" to="/help" />
              <SidebarItem icon={<FiBook size={18} />} text="Resources" to="/resources" />
              <SidebarItem icon={<FiSearch size={18} />} text="Search" to="/search"/>
            </div>
          </div>
        </SidebarExpanded>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/reports" element={<div>Reports page</div>} />
          <Route path="/documents" element={<div>Documents page</div>} />
          <Route path="/messages" element={<div>Messages page</div>} />
          <Route path="/settings" element={<Settings />}  />
          <Route path="/help" element={<div>Help page</div>} />
          <Route path="/resources" element={<div>Resources page</div>} />
          <Route path="/search" element={<div>Search page</div>} />
        </Routes>
      </div>
    </HashRouter>
    </ThemeProvider>
    </>
    
  );
}

export default App;
