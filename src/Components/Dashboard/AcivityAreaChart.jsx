import React from 'react'
import { FiClock } from 'react-icons/fi'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  const cardinal = curveCardinal.tension(0.2);

function AcivityAreaChart() {
  return (
    <div className='col-span-12 overflow-hidden rounded border border-stone-200'>
            <div className='p-4'>
                <h3 className='flex items-center gap-1.5 font-medium'>
                    <FiClock /> Time on App
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#ad46ff" fill="#ad46ff" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#e2bdff" fill="#e2bdff" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
            </div>
        </div>
  )
}

export default AcivityAreaChart