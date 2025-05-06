import React from 'react'
import { FiMenu, FiSidebar } from "react-icons/fi";

import { CgMoreVerticalAlt } from "react-icons/cg";
import { useContext, createContext, useState } from 'react'
import logo  from "./../../assets/logoipsum-custom-logo-01.svg"
import { Link, useLocation } from 'react-router-dom';

const SidebarContext = createContext()

export default function SidebarExpanded({ children }) {
  const [ expanded, setExpanded ] = useState(false)
  return (
    <aside className={`sticky top-4 lg:h-[calc(100vh-24px)] grow-0 n ${
        expanded ? "h-auto lg:bg-neutral-100 bg-neutral-100/30 backdrop-blur-md  shadow-md z-10 rounded-xs lg:shadow-none lg:rounded-none" : "h-14 lg:bg-neutral-100 bg-neutral-100/30 backdrop-blur-md z-10 shadow-md rounded-xs lg:shadow-none lg:rounded-none "
      }`}>
      <nav className='h-full flex flex-col gap-2'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <img 
            src={logo} 
            className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0,0.33,0,1)]
              ${expanded ? "lg:w-32 lg:h-auto w-32 h-auto" : "lg:w-0 lg:h-0 w-32 h-auto"}
            `}
            alt=""
          />
          <button onClick={() => setExpanded(curr =>!curr)} className='p-2 rounded-lg bg-neutral-50 hover:bg-neutral-950 hover:text-white'>
            {expanded ? <FiSidebar /> : <FiMenu />}
          </button>
        </div>
        
        <SidebarContext.Provider value={{ expanded }}>
          <ul className={`flex-1 px-3 transform transition-all duration-300 ease-[cubic-bezier(0,0.33,0,1)] ${expanded ? "translate-x-0 opacity-100" : "translate-x-[-100%] lg:translate-x-0 opacity-0 lg:opacity-100" }`}>{children}</ul>
        </SidebarContext.Provider>
        <div className={`flex p-3 transform transition-all duration-300 ease-[cubic-bezier(0,0.33,0,1)] ${expanded ? "translate-x-0 opacity-100" : "translate-x-[-100%] lg:translate-x-0 opacity-0 lg:opacity-100" }`}>
          <img 
            src="https://ui-avatars.com/api/?background=0a0a0a&color=fff&bold=true" 
            alt="Logo" 
            className='w-10 h-10 rounded-md' 
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ease-[cubic-bezier(0,0.33,0,1)] ${expanded ? "lg:w-full ml-3 w-full" : "lg:w-0 w-full lg:ml-0 ml-3"}`}>
            <div className='leading-4'>
              <h4 className='font-semibold text-md'>John Doe</h4>
              <span className='text-xs text-neutral-500'>john.doe@gmail.com</span>
            </div>
            <CgMoreVerticalAlt size={20} />
          </div>

        </div>
        
      </nav>

    </aside>
  )
}

export function SidebarItem({ icon, text, alert, to }) {
  const { expanded } = useContext(SidebarContext)
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li
      className={`
        relative flex items-center font-medium text-sm group`}>
      <Link to={to} className={`flex items-center py-2 px-3 my-1 rounded-md cursor-pointer
        transition-colors ${isActive ? 'bg-neutral-950 text-white font-semibold w-full' : 'hover:bg-neutral-300 text-neutral-950'}`}> 
      {icon}
      <span className={`overflow-hidden transition-all ${
              expanded ? "lg:w-52 lg:ml-3 w-52 ml-3" : "lg:w-0 lg:ml-0 ml-3"
      }`}
      >
      {text}
      </span> 
      {alert && (
        <div className={`animate-ping absolute right-2 w-2 h-2 rounded bg-neutral-600
          ${expanded ? "" : "lg:top-2"
          }`}
        />
      )}
      </Link>

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-2
          bg-neutral-500 text-white text-xs invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}

