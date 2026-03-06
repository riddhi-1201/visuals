import { useState } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, ArrowRight } from 'lucide-react';
import { Switch } from './ui/switch';

interface AssignShiftsProps {
  isDarkMode: boolean;
}

interface Employee {
  id: number;
  name: string;
  avatar: string;
  role: string;
  nightShift: boolean;
  sundayShift: boolean;
  status: 'available' | 'recent' | 'overloaded';
}

export function AssignShifts({ isDarkMode }: AssignShiftsProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'John Smith', avatar: 'JS', role: 'Developer', nightShift: false, sundayShift: true, status: 'available' },
    { id: 2, name: 'Sarah Johnson', avatar: 'SJ', role: 'Designer', nightShift: true, sundayShift: false, status: 'recent' },
    { id: 3, name: 'Michael Brown', avatar: 'MB', role: 'Manager', nightShift: false, sundayShift: false, status: 'available' },
    { id: 4, name: 'Emily Davis', avatar: 'ED', role: 'Developer', nightShift: true, sundayShift: true, status: 'overloaded' },
    { id: 5, name: 'David Wilson', avatar: 'DW', role: 'Support', nightShift: false, sundayShift: false, status: 'available' },
    { id: 6, name: 'Lisa Anderson', avatar: 'LA', role: 'Developer', nightShift: true, sundayShift: false, status: 'recent' },
  ]);

  const toggleNightShift = (id: number) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, nightShift: !emp.nightShift } : emp
    ));
  };

  const toggleSundayShift = (id: number) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, sundayShift: !emp.sundayShift } : emp
    ));
  };

  const getStatusColor = (status: string) => {
    if (status === 'available') return '#10B981';
    if (status === 'recent') return '#F59E0B';
    return '#EF4444';
  };

  const filters = [
    { id: 'all', label: 'All Employees' },
    { id: 'available', label: 'Available' },
    { id: 'assigned', label: 'Assigned' },
    { id: 'night', label: 'Night Team' },
  ];

  return (
    <div className="mb-8">
      {/* Quick Filters */}
      <div className="flex gap-3 mb-6">
        {filters.map(filter => (
          <motion.button
            key={filter.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              activeFilter === filter.id
                ? isDarkMode
                  ? 'bg-purple-600 text-white'
                  : 'bg-blue-600 text-white'
                : isDarkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-white text-slate-700 hover:bg-slate-50 shadow-sm'
            }`}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Night Shift Card */}
        <div className={`p-6 rounded-xl shadow-md transition-colors ${
          isDarkMode ? 'bg-[#1E293B] border-2 border-purple-900/30' : 'bg-white border-2 border-purple-100'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isDarkMode ? 'bg-purple-950' : 'bg-purple-50'
            }`}>
              <Moon className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl">Night Shift Assignment</h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Assign employees for night operations
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {employees.map((employee) => (
              <motion.div
                key={`night-${employee.id}`}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`p-4 rounded-lg shadow-sm transition-all ${
                  isDarkMode ? 'bg-slate-700 hover:shadow-lg' : 'bg-slate-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                        isDarkMode ? 'bg-purple-600' : 'bg-purple-600'
                      }`}>
                        {employee.avatar}
                      </div>
                      <div 
                        className="w-3 h-3 rounded-full border-2 border-white absolute -bottom-0.5 -right-0.5"
                        style={{ backgroundColor: getStatusColor(employee.status) }}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {employee.role}
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={employee.nightShift}
                    onCheckedChange={() => toggleNightShift(employee.id)}
                    className="data-[state=checked]:bg-purple-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sunday Shift Card */}
        <div className={`p-6 rounded-xl shadow-md transition-colors ${
          isDarkMode ? 'bg-[#1E293B] border-2 border-orange-900/30' : 'bg-white border-2 border-orange-100'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isDarkMode ? 'bg-orange-950' : 'bg-orange-50'
            }`}>
              <Sun className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl">Sunday Shift Assignment</h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Assign employees for weekend shifts
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {employees.map((employee) => (
              <motion.div
                key={`sunday-${employee.id}`}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`p-4 rounded-lg shadow-sm transition-all ${
                  isDarkMode ? 'bg-slate-700 hover:shadow-lg' : 'bg-slate-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                        isDarkMode ? 'bg-orange-600' : 'bg-orange-600'
                      }`}>
                        {employee.avatar}
                      </div>
                      <div 
                        className="w-3 h-3 rounded-full border-2 border-white absolute -bottom-0.5 -right-0.5"
                        style={{ backgroundColor: getStatusColor(employee.status) }}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {employee.role}
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={employee.sundayShift}
                    onCheckedChange={() => toggleSundayShift(employee.id)}
                    className="data-[state=checked]:bg-orange-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className={`px-10 py-4 rounded-xl text-white font-medium transition-all inline-flex items-center gap-3 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-900/50' 
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/50'
          }`}
          style={{
            boxShadow: isDarkMode 
              ? '0 10px 40px -10px rgba(147, 51, 234, 0.5)' 
              : '0 10px 40px -10px rgba(37, 99, 235, 0.5)'
          }}
        >
          Submit Assignments
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}