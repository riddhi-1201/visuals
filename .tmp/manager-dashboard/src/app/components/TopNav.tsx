import { Search, Bell, Moon, Sun } from 'lucide-react';

interface TopNavProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function TopNav({ isDarkMode, toggleDarkMode }: TopNavProps) {
  return (
    <div className="h-16 bg-white dark:bg-[#1E293B] border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-opacity-90 dark:bg-opacity-90">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F6BED] to-[#6366F1] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">PM</span>
            </div>
            <span className="font-bold text-xl text-gray-800 dark:text-white">ProjectManager</span>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-96 pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F6BED] dark:text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800 dark:text-white">Sarah Johnson</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Manager</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8F0FF] to-[#F1E8FF] flex items-center justify-center">
              <span className="text-[#4F6BED] font-semibold">SJ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
