import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css';


export default function Chart() {
    const data = [
        {
          name: 'JAN',
          Total: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'FEB',
          Total: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'MAR',
          Total: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'APR',
          Total: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'MAY',
          Total: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'JUN',
          Total: 2390,
          pv: 3800,
          amt: 2500,
        }
      ];
  return (
    <div className='chart'>
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
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
