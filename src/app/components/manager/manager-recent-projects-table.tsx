import { Users, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { ManagerProjectSummary } from "./manager-types";

interface ManagerRecentProjectsTableProps {
  projects: ManagerProjectSummary[];
}

const statusClass = (status: string) => {
  switch (status) {
    case "Added by Admin":
      return "bg-[#E8F0FF] text-[#4F6BED] border-2 border-[#4F6BED]/30 shadow-lg shadow-[#4F6BED]/20";
    case "In Progress":
      return "bg-[#FFF8E6] text-[#F59E0B] border-2 border-[#F59E0B]/30 shadow-lg shadow-[#F59E0B]/20";
    case "Completed":
      return "bg-[#E9FBEF] text-[#22C55E] border-2 border-[#22C55E]/30 shadow-lg shadow-[#22C55E]/20";
    default:
      return "bg-gray-100 text-gray-600 border-2 border-gray-300";
  }
};

export function ManagerRecentProjectsTable({ projects }: ManagerRecentProjectsTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-white via-[#F7F9FC] to-white dark:from-[#1E293B] dark:via-[#1a2332] dark:to-[#1E293B] rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 backdrop-blur-md overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4F6BED]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#6366F1]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="p-8 border-b-2 border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#4F6BED]/5 to-[#6366F1]/5 dark:from-[#4F6BED]/10 dark:to-[#6366F1]/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-3 bg-gradient-to-br from-[#4F6BED] to-[#6366F1] rounded-2xl shadow-lg"
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                  Recently Created Projects
                  <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <TrendingUp className="h-5 w-5 text-[#22C55E]" />
                  </motion.span>
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track and manage all your projects</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#4F6BED] to-[#6366F1] text-white rounded-xl font-semibold shadow-lg">
              {projects.length} Projects
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/80 dark:to-gray-800/50 border-b-2 border-gray-200 dark:border-gray-700">
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Project ID
                </th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Project Name
                </th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Assigned Employees
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-gray-100 dark:divide-gray-700/50">
              {projects.map((project, index) => (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01, backgroundColor: "rgba(79, 107, 237, 0.05)" }}
                  className="hover:bg-gradient-to-r hover:from-[#4F6BED]/5 hover:to-transparent dark:hover:from-[#4F6BED]/10 dark:hover:to-transparent transition-all cursor-pointer border-l-4 border-transparent hover:border-[#4F6BED]"
                >
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className="font-mono text-sm font-semibold text-[#4F6BED] dark:text-[#6366F1] bg-[#E8F0FF] dark:bg-[#4F6BED]/20 px-3 py-1 rounded-lg">
                      {project.id}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="text-sm font-semibold text-gray-800 dark:text-white">{project.name}</div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{project.startDate}</span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{project.dueDate}</span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <motion.span whileHover={{ scale: 1.1 }} className={`px-4 py-2 rounded-xl text-xs font-bold ${statusClass(project.status)}`}>
                      {project.status}
                    </motion.span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg w-fit">
                      <Users className="h-4 w-4 text-[#4F6BED]" />
                      <span className="text-sm text-gray-800 dark:text-gray-200 font-semibold">{project.employees} Members</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {projects.length === 0 && (
          <div className="py-16 text-center">
            <div className="text-gray-400 dark:text-gray-500 text-lg">No projects created yet</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
