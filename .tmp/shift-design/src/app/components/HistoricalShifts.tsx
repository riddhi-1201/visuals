import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HistoricalShiftsProps {
  isDarkMode: boolean;
}

interface HistoricalShift {
  id: number;
  employeeName: string;
  shiftType: 'Night' | 'Sunday';
  date: string;
  status: 'Completed' | 'No Show' | 'Cancelled';
}

export function HistoricalShifts({ isDarkMode }: HistoricalShiftsProps) {
  const [activeTab, setActiveTab] = useState<'Night' | 'Sunday'>('Night');
  const [selectedEmployee, setSelectedEmployee] = useState('All Employees');
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 days');

  const allShifts: HistoricalShift[] = [
    { id: 1, employeeName: 'Sarah Johnson', shiftType: 'Night', date: 'Mar 3, 2026', status: 'Completed' },
    { id: 2, employeeName: 'Emily Davis', shiftType: 'Night', date: 'Mar 2, 2026', status: 'Completed' },
    { id: 3, employeeName: 'Lisa Anderson', shiftType: 'Night', date: 'Mar 1, 2026', status: 'No Show' },
    { id: 4, employeeName: 'David Wilson', shiftType: 'Night', date: 'Feb 28, 2026', status: 'Completed' },
    { id: 5, employeeName: 'Sarah Johnson', shiftType: 'Night', date: 'Feb 27, 2026', status: 'Completed' },
    { id: 6, employeeName: 'John Smith', shiftType: 'Sunday', date: 'Mar 2, 2026', status: 'Completed' },
    { id: 7, employeeName: 'Emily Davis', shiftType: 'Sunday', date: 'Feb 23, 2026', status: 'Completed' },
    { id: 8, employeeName: 'Michael Brown', shiftType: 'Sunday', date: 'Feb 16, 2026', status: 'Cancelled' },
    { id: 9, employeeName: 'John Smith', shiftType: 'Sunday', date: 'Feb 9, 2026', status: 'Completed' },
  ];

  const filteredShifts = allShifts.filter(shift => shift.shiftType === activeTab);

  const getStatusColor = (status: string) => {
    if (status === 'Completed') {
      return isDarkMode ? 'bg-green-950 text-green-400' : 'bg-green-100 text-green-700';
    } else if (status === 'No Show') {
      return isDarkMode ? 'bg-red-950 text-red-400' : 'bg-red-100 text-red-700';
    } else {
      return isDarkMode ? 'bg-yellow-950 text-yellow-400' : 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className={`p-6 rounded-xl shadow-md transition-colors ${
      isDarkMode ? 'bg-[#1E293B]' : 'bg-white'
    }`}>
      <h2 className="text-2xl mb-6">Historical Shifts</h2>
      
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
          onClick={() => setActiveTab('Night')}
          className={`px-6 py-2 rounded-lg transition-all ${
            activeTab === 'Night'
              ? isDarkMode 
                ? 'bg-purple-600 text-white' 
                : 'bg-blue-600 text-white'
              : isDarkMode
                ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Night Shifts
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
          onClick={() => setActiveTab('Sunday')}
          className={`px-6 py-2 rounded-lg transition-all ${
            activeTab === 'Sunday'
              ? isDarkMode 
                ? 'bg-purple-600 text-white' 
                : 'bg-blue-600 text-white'
              : isDarkMode
                ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Sunday Shifts
        </motion.button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative">
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className={`appearance-none px-4 py-2 pr-10 rounded-lg cursor-pointer transition-colors ${
              isDarkMode 
                ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' 
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
            } border`}
          >
            <option>All Employees</option>
            <option>Sarah Johnson</option>
            <option>John Smith</option>
            <option>Emily Davis</option>
            <option>Michael Brown</option>
            <option>David Wilson</option>
            <option>Lisa Anderson</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className={`appearance-none px-4 py-2 pr-10 rounded-lg cursor-pointer transition-colors ${
              isDarkMode 
                ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' 
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
            } border`}
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 6 months</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
              <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Employee Name
              </th>
              <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Shift Type
              </th>
              <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Date
              </th>
              <th className={`text-left py-4 px-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredShifts.map((shift) => (
              <motion.tr
                key={shift.id}
                whileHover={{ backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc' }}
                transition={{ duration: 0.15 }}
                className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
              >
                <td className="py-4 px-4">{shift.employeeName}</td>
                <td className="py-4 px-4">{shift.shiftType} Shift</td>
                <td className="py-4 px-4">{shift.date}</td>
                <td className="py-4 px-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(shift.status)}`}>
                    {shift.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}