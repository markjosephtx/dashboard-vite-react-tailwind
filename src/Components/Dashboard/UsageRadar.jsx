"use client"
import React from 'react'
import { FiEye } from 'react-icons/fi'
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    Legend, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
    ResponsiveContainer,
    Tooltip, 
} from 'recharts';
const data = [
    {
      subject: 'Tracking',
      mobile: 150,
      desktop: 110,
      max: 150,
    },
    {
      subject: 'Builder',
      mobile: 98,
      desktop: 130,
      max: 150,
    },
    {
      subject: 'Schedule',
      mobile: 86,
      desktop: 110,
      max: 150,
    },
    {
      subject: 'AI Train',
      mobile: 80,
      desktop: 40,
      max: 150,
    },
    {
      subject: 'Interval',
      mobile: 50,
      desktop: 120,
      max: 150,
    },
  ];

function UsageRadar() {
  return (
    <div className='col-span-12 lg:col-span-4 overflow-hidden rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-white shadow-sm hover:shadow-md transition-all duration-300'>
            <div className='p-4'>
                <h3 className='flex items-center gap-1.5 font-medium'>
                    <FiEye /> Usage
                </h3>
            </div>
            <div className='h-64 px-4'>
            <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="subject"
            className='text-xs font-bold' 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 150]}
            className='text-xs font-bold' 
        />
          <Radar 
            name="Mobile" 
            dataKey="mobile" 
            stroke="#84cc16" 
            fill="#84cc16"
            fillOpacity={0.2} 
        />
          <Radar 
            name="Desktop" 
            dataKey="desktop" 
            stroke="#171717" 
            fill="#171717" 
            fillOpacity={0.2} 
        />
        <Legend 
            wrapperClassName='text-xs text-stone-500'
            labelClassName='text-xs text-stone-500'
        />
          <Tooltip
            wrapperClassName='text-sm rounded'
            labelClassName='text-xs text-stone-500'
        />
        </RadarChart>
      </ResponsiveContainer>
            </div>
        </div>
  )
}

export default UsageRadar