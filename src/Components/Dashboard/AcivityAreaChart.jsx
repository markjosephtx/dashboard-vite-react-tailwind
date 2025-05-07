import React from 'react'
import { FiClock } from 'react-icons/fi'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
    {
      name: 'Jan',
      new: 4000,
      returned: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      new: 3000,
      returned: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      new: 2000,
      returned: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      new: 2780,
      returned: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      new: 1890,
      returned: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      new: 7890,
      returned: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      new: 1490,
      returned: 4300,
      amt: 2100,
    },
  ];
  
  const cardinal = curveCardinal.tension(0.2);

function AcivityAreaChart() {
  return (
    <div className='col-span-12 overflow-hidden rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-white shadow-sm hover:shadow-md transition-all duration-300'>
            <div className='p-4'>
                <h3 className='flex items-center gap-1.5 font-medium'>
                    <FiClock /> Shipping Time
                </h3>
            </div>
            <div className='h-64 px-4'>
            <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" 
            axisLine={false}
            tickLine={false}
            className='text-xs font-bold'
          />
          <YAxis 
            className='text-xs font-bold'
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            wrapperClassName='text-sm rounded'
            labelClassName='text-xs text-stone-500'
          />
          <Area type="monotone" dataKey="new" stroke="#171717" fill="#525252" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="returned" stroke="#171717" fill="#525252" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
            </div>
        </div>
  )
}

export default AcivityAreaChart