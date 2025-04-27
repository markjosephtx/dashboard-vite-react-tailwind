import React from 'react'
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import { CgMoreVerticalAlt } from "react-icons/cg";
import { useContext, createContext, useState } from 'react'
import logo  from "./../../assets/logoipsum-custom-logo.svg"

const SidebarContext = createContext()

export default function SidebarExpanded({ children }) {
  const [ expanded, setExpanded ] = useState(true)
  return (
    <aside className='overflow-y-scroll lg:sticky top-4 lg:h-[calc(100vh-32px-48px)] grow-0'>
      <nav className='h-full flex flex-col gap-2'>
        <div className='px-4 pt-2 pb-2 flex justify-between items-center'>
          <img 
            src={logo} 
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button onClick={() => setExpanded(curr =>!curr)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            {expanded ? <FiChevronsLeft /> : <FiChevronsRight />}
          </button>
        </div>
        <div className={` flex flex-col ${
              expanded ? "h-full" : "h-0"
      }`}>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
        <div className='flex p-3'>
          <img 
            src="https://ui-avatars.com/api/?background=3B49DB&color=fff&bold=true" 
            alt="Logo" 
            className='w-10 h-10 rounded-md' 
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className='leading-4'>
              <h4 className='font-semibold text-md'>John Doe</h4>
              <span className='text-xs text-stone-500'>john.doe@gmail.com</span>
            </div>
            <CgMoreVerticalAlt size={20} />
          </div>

        </div>



        </div>
        
      </nav>

    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium text-sm rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-white text-snare-blue-600 font-semibold"
            : "hover:bg-snare-blue-100 text-stone-500"
        }
    `}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
      }`}
      >
      {text}
      </span> 
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-snare-blue-600
          ${expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
          bg-snare-blue-100 text-snare-blue-600 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}

