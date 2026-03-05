import { Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

interface EmployeeCardProps {
  name: string;
  role: string;
  currentProject: string;
  projectCount: number;
  bgColor: string;
}

export function EmployeeCard({ name, role, currentProject, projectCount, bgColor }: EmployeeCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${bgColor} rounded-xl p-6 shadow-lg min-w-[280px] backdrop-blur-md bg-opacity-50 border border-white dark:border-gray-700`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4F6BED] to-[#6366F1] flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
          {initials}
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>

        <div className="w-full space-y-3">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Current Project</div>
            <div className="text-sm font-medium text-gray-800 dark:text-white">{currentProject}</div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm">{projectCount} Active Projects</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
