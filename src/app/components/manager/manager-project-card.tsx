import { Eye, Edit, Clock } from "lucide-react";
import { motion } from "motion/react";

export interface ManagerProjectCardProps {
  name: string;
  employees: string[];
  progress: number;
  daysRemaining: number;
  manager: string;
  bgColor: string;
}

export function ManagerProjectCard({
  name,
  employees,
  progress,
  daysRemaining,
  manager,
  bgColor,
}: ManagerProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${bgColor} rounded-xl p-6 shadow-lg min-w-[300px] backdrop-blur-md bg-opacity-40 border border-white dark:border-gray-700`}
    >
      <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">{name}</h3>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Progress</span>
            <span className="font-semibold text-gray-800 dark:text-white">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-white dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4F6BED] to-[#6366F1] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600 dark:text-gray-400">{daysRemaining} days remaining</span>
        </div>

        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Assigned to</div>
          <div className="flex -space-x-2">
            {employees.slice(0, 3).map((emp, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F6BED] to-[#6366F1] flex items-center justify-center text-white text-xs border-2 border-white dark:border-gray-800"
                title={emp}
              >
                {emp.charAt(0)}
              </div>
            ))}
            {employees.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs border-2 border-white dark:border-gray-800">
                +{employees.length - 3}
              </div>
            )}
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Manager: <span className="text-gray-700 dark:text-gray-300">{manager}</span>
        </div>

        <div className="flex gap-2 pt-2">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
            <Eye className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            <span className="text-sm text-gray-600 dark:text-gray-300">View</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#4F6BED] text-white rounded-lg hover:bg-[#3f5bd1] transition-colors">
            <Edit className="h-4 w-4" />
            <span className="text-sm">Edit</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
