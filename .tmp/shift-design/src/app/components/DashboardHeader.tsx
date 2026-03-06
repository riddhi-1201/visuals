import { Bell, User, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardHeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function DashboardHeader({ isDarkMode, setIsDarkMode }: DashboardHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        {/* Left side - Title and Subtitle */}
        <div>
          <h1 className="text-4xl mb-2">Shift Management Dashboard</h1>
          <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Manage employee night and Sunday shifts efficiently.
          </p>
        </div>
        
        {/* Right side - Icons and Toggle */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.15 }}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-slate-800' 
                : 'hover:bg-slate-200'
            }`}
          >
            <Bell className="w-5 h-5" />
          </motion.button>
          
          {/* User Profile Avatar */}
          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.15 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              isDarkMode 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <User className="w-5 h-5 text-white" />
          </motion.div>
          
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-slate-800 hover:bg-slate-700' 
                : 'bg-slate-200 hover:bg-slate-300'
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
