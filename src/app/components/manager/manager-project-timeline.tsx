import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Week 1", projects: 12, employees: 28 },
  { name: "Week 2", projects: 19, employees: 35 },
  { name: "Week 3", projects: 15, employees: 30 },
  { name: "Week 4", projects: 22, employees: 42 },
  { name: "Week 5", projects: 18, employees: 38 },
  { name: "Week 6", projects: 25, employees: 45 },
];

export function ManagerProjectTimeline() {
  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Project Timeline Analytics</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Weekly project and employee distribution</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
          <XAxis dataKey="name" stroke="#9ca3af" style={{ fontSize: "12px" }} />
          <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Legend />
          <Bar dataKey="projects" fill="#4F6BED" radius={[8, 8, 0, 0]} name="Projects" />
          <Bar dataKey="employees" fill="#6366F1" radius={[8, 8, 0, 0]} name="Employees" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
