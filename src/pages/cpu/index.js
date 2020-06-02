
import io from 'socket.io-client';
import React from 'react';
import { useEffect, useState } from 'react';
import './styles.scss'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const socket = io('http://localhost:3000', {
  transports: ['websocket', 'polling']
});

const Cpu = ({ }) => {
  const [data, setData] = useState([]);

  // 1. listen for a cpu event and update the state
  useEffect(() => {
    socket.on('cpu', cpuPercent => {
      setData(currentData => [...currentData, cpuPercent]);
    });
  }, []);

  // 2. render the line chart using the state
  return (
    <div>
      <h1 className="chart-title">Real Time CPU Usage</h1>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="2 2" stroke="rgb(105, 102, 102)" />
          <XAxis stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#0AFFB1" fill="#00b57d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Cpu;
