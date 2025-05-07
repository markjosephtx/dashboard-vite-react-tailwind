"use client"
import React from 'react'
import { FiUser } from 'react-icons/fi'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';

  const data = [
    {
      name: 'Jan',
      New: 275,
      Returning: 41,
    },
    {
      name: 'Feb',
      New: 620,
      Returning: 96,
    },
    {
      name: 'Mar',
      New: 325,
      Returning: 440,
    },
    {
      name: 'Apr',
      New: 780,
      Returning: 98,
    },
    {
      name: 'May',
      New: 490,
      Returning: 560,
    },
    {
      name: 'Jun',
      New: 290,
      Returning: 80,
    },
    {
      name: 'Jul',
      New: 490,
      Returning: 30,
    },
  ];

function ActivityGraph() {
  return (
    <div className='col-span-12 lg:col-span-8 overflow-hidden rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-white shadow-sm hover:shadow-md transition-all duration-300'>
        <div className='p-4'>
            <h3 className='flex items-center gap-1.5 font-medium'>
                <FiUser /> Activity
            </h3>
        </div>
        <div className='h-64 px-4'>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart 
                width={500} 
                height={400} 
                data={data}
                margin={{ 
                    top: 0, 
                    right: 0, 
                    left: -24, 
                    bottom: 0, 
                }}
            >
            <CartesianGrid stroke="#e4e4e7" />
            <XAxis 
                dataKey="name"
                axisLine={false}
                tickLine={false}
                className='text-xs font-bold' 
                padding={{ right: 4 }} 
                />
            <YAxis 
                className='text-xs font-bold'
                axisLine={false}
                tickLine={false}
            />
            <Tooltip 
                wrapperClassName='text-sm rounded'
                labelClassName='text-xs text-neutral-500'/>
            <Line 
                type="monotone" 
                dataKey="Returning" 
                stroke="#84cc16" 
                fill="#84cc16"
                strokeWidth={3} 
                activeDot={{ r: 8 }} 
            />
            <Line 
                type="monotone" 
                dataKey="New" 
                stroke="#171717" 
                fill="#171717" 
                strokeWidth={3} 
            />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ActivityGraph