import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

export interface ManagerStatCardProps {
  title: string;
  value: number;
  change: number;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  progress: number;
}

export function ManagerStatCard({
  title,
  value,
  change,
  icon: Icon,
  bgColor,
  iconColor,
  progress,
}: ManagerStatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${bgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div className={`flex items-center gap-1 text-sm ${change >= 0 ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
          <span>
            {change >= 0 ? "+" : ""}
            {change}%
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="text-3xl font-bold text-gray-800 dark:text-white">{value}</div>
      </div>

      <div className="mt-4">
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${bgColor} rounded-full`}
          />
        </div>
      </div>
    </motion.div>
  );
}
