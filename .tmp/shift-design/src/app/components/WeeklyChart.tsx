import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface WeeklyChartProps {
  isDarkMode: boolean;
}

export function WeeklyChart({ isDarkMode }: WeeklyChartProps) {
  const data = [
    { day: 'Mon', nightShifts: 12, sundayShifts: 0 },
    { day: 'Tue', nightShifts: 10, sundayShifts: 0 },
    { day: 'Wed', nightShifts: 14, sundayShifts: 0 },
    { day: 'Thu', nightShifts: 11, sundayShifts: 0 },
    { day: 'Fri', nightShifts: 13, sundayShifts: 0 },
    { day: 'Sat', nightShifts: 8, sundayShifts: 6 },
    { day: 'Sun', nightShifts: 0, sundayShifts: 18 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-3 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
        }`}>
          <p className="font-medium mb-1">{payload[0].payload.day}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`p-6 rounded-xl shadow-md mb-8 transition-colors ${
      isDarkMode ? 'bg-[#1E293B]' : 'bg-white'
    }`}>
      <h2 className="text-2xl mb-6">Weekly Shift Distribution</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={isDarkMode ? '#334155' : '#e2e8f0'} 
          />
          <XAxis 
            dataKey="day" 
            stroke={isDarkMode ? '#94a3b8' : '#64748b'}
            tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b' }}
          />
          <YAxis 
            stroke={isDarkMode ? '#94a3b8' : '#64748b'}
            tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ 
              color: isDarkMode ? '#94a3b8' : '#64748b',
              paddingTop: '20px'
            }}
          />
          <Bar 
            dataKey="nightShifts" 
            name="Night Shifts" 
            fill="#9333ea" 
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            dataKey="sundayShifts" 
            name="Sunday Shifts" 
            fill="#ea580c" 
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}