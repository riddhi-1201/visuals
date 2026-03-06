import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Bell,
  Calendar as CalendarIcon,
  CalendarClock,
  CalendarRange,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Moon,
  Plus,
  Sun,
  TrendingDown,
  TrendingUp,
  User,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch } from "./ui/switch";

interface MarkExtraShiftPageProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

type ShiftType = "Night" | "Sunday";

interface ShiftAssignment {
  id: number;
  name: string;
  initials: string;
  role: string;
  nightShift: boolean;
  sundayShift: boolean;
  status: "available" | "recent" | "overloaded";
}

interface UpcomingShift {
  id: number;
  employeeName: string;
  initials: string;
  shiftType: ShiftType;
  date: string;
  status: string;
}

interface HistoricalShift {
  id: number;
  employeeName: string;
  shiftType: ShiftType;
  date: string;
  status: "Completed" | "No Show" | "Cancelled";
}

const statusColor = (status: HistoricalShift["status"], isDark: boolean) => {
  if (status === "Completed") {
    return isDark ? "bg-green-950 text-green-400" : "bg-green-100 text-green-700";
  }
  if (status === "No Show") {
    return isDark ? "bg-red-950 text-red-400" : "bg-red-100 text-red-700";
  }
  return isDark ? "bg-yellow-950 text-yellow-400" : "bg-yellow-100 text-yellow-700";
};

const loadStatusColor = (status: ShiftAssignment["status"]) => {
  if (status === "available") return "#10B981";
  if (status === "recent") return "#F59E0B";
  return "#EF4444";
};

export function MarkExtraShiftPage({ isDark, onToggleTheme }: MarkExtraShiftPageProps) {
  const [assignments, setAssignments] = useState<ShiftAssignment[]>([
    { id: 1, name: "John Smith", initials: "JS", role: "Developer", nightShift: false, sundayShift: true, status: "available" },
    { id: 2, name: "Sarah Johnson", initials: "SJ", role: "Designer", nightShift: true, sundayShift: false, status: "recent" },
    { id: 3, name: "Michael Brown", initials: "MB", role: "Manager", nightShift: false, sundayShift: false, status: "available" },
    { id: 4, name: "Emily Davis", initials: "ED", role: "Developer", nightShift: true, sundayShift: true, status: "overloaded" },
    { id: 5, name: "David Wilson", initials: "DW", role: "Support", nightShift: false, sundayShift: false, status: "available" },
    { id: 6, name: "Lisa Anderson", initials: "LA", role: "Developer", nightShift: true, sundayShift: false, status: "recent" },
  ]);

  const [activeTab, setActiveTab] = useState<ShiftType>("Night");
  const [filterEmployee, setFilterEmployee] = useState("All Employees");
  const [filterRange, setFilterRange] = useState("Last 30 days");

  const sliderRef = useRef<Slider>(null);

  const upcomingShifts: UpcomingShift[] = useMemo(
    () => [
      { id: 1, employeeName: "Sarah Johnson", initials: "SJ", shiftType: "Night", date: "Mar 8, 2026", status: "Assigned" },
      { id: 2, employeeName: "John Smith", initials: "JS", shiftType: "Sunday", date: "Mar 9, 2026", status: "Assigned" },
      { id: 3, employeeName: "Emily Davis", initials: "ED", shiftType: "Night", date: "Mar 10, 2026", status: "Assigned" },
      { id: 4, employeeName: "Lisa Anderson", initials: "LA", shiftType: "Night", date: "Mar 11, 2026", status: "Assigned" },
      { id: 5, employeeName: "Michael Brown", initials: "MB", shiftType: "Sunday", date: "Mar 16, 2026", status: "Assigned" },
      { id: 6, employeeName: "David Wilson", initials: "DW", shiftType: "Night", date: "Mar 17, 2026", status: "Assigned" },
    ],
    [],
  );

  const historicalShifts: HistoricalShift[] = useMemo(
    () => [
      { id: 1, employeeName: "Sarah Johnson", shiftType: "Night", date: "Mar 3, 2026", status: "Completed" },
      { id: 2, employeeName: "Emily Davis", shiftType: "Night", date: "Mar 2, 2026", status: "Completed" },
      { id: 3, employeeName: "Lisa Anderson", shiftType: "Night", date: "Mar 1, 2026", status: "No Show" },
      { id: 4, employeeName: "David Wilson", shiftType: "Night", date: "Feb 28, 2026", status: "Completed" },
      { id: 5, employeeName: "Sarah Johnson", shiftType: "Night", date: "Feb 27, 2026", status: "Completed" },
      { id: 6, employeeName: "John Smith", shiftType: "Sunday", date: "Mar 2, 2026", status: "Completed" },
      { id: 7, employeeName: "Emily Davis", shiftType: "Sunday", date: "Feb 23, 2026", status: "Completed" },
      { id: 8, employeeName: "Michael Brown", shiftType: "Sunday", date: "Feb 16, 2026", status: "Cancelled" },
      { id: 9, employeeName: "John Smith", shiftType: "Sunday", date: "Feb 9, 2026", status: "Completed" },
    ],
    [],
  );

  const cards = useMemo(
    () => [
      {
        icon: CalendarClock,
        number: "124",
        description: "Total Shifts This Month",
        color: isDark ? "text-blue-400" : "text-blue-600",
        bgColor: isDark ? "bg-blue-950" : "bg-blue-50",
        trend: "up" as const,
        trendValue: "8%",
        progress: 82,
      },
      {
        icon: Moon,
        number: "68",
        description: "Night Shifts Assigned",
        color: isDark ? "text-purple-400" : "text-purple-600",
        bgColor: isDark ? "bg-purple-950" : "bg-purple-50",
        trend: "up" as const,
        trendValue: "12%",
        progress: 68,
      },
      {
        icon: CalendarRange,
        number: "56",
        description: "Sunday Shifts Assigned",
        color: isDark ? "text-orange-400" : "text-orange-600",
        bgColor: isDark ? "bg-orange-950" : "bg-orange-50",
        trend: "down" as const,
        trendValue: "3%",
        progress: 56,
      },
      {
        icon: BarChart3,
        number: "32",
        description: "Employees Assigned",
        color: isDark ? "text-green-400" : "text-green-600",
        bgColor: isDark ? "bg-green-950" : "bg-green-50",
        trend: "up" as const,
        trendValue: "5%",
        progress: 75,
      },
    ],
    [isDark],
  );

  const toggleNightShift = (id: number) => {
    setAssignments((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, nightShift: !emp.nightShift } : emp)),
    );
  };

  const toggleSundayShift = (id: number) => {
    setAssignments((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, sundayShift: !emp.sundayShift } : emp)),
    );
  };

  const filteredHistory = historicalShifts.filter((shift) => shift.shiftType === activeTab);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? "bg-[#0F172A] text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-6 space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl mb-2 font-semibold">Mark Extra Shift</h1>
            <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Assign night or Sunday shifts quickly and keep the roster balanced.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ duration: 0.15 }}
              className={`p-2 rounded-lg ${isDark ? "hover:bg-slate-800" : "hover:bg-slate-200"}`}
            >
              <Bell className="w-5 h-5" />
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.15 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isDark ? "bg-purple-600" : "bg-blue-600"
              }`}
            >
              <User className="w-5 h-5 text-white" />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ duration: 0.15 }}
              onClick={onToggleTheme}
              className={`p-2 rounded-lg ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.description}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className={`p-5 rounded-xl shadow-md ${isDark ? "bg-[#1E293B]" : "bg-white"}`}
            >
              <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center mb-3`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <div className="text-3xl font-semibold mb-1">{card.number}</div>
              <div className={`text-sm mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{card.description}</div>
              <div className={`w-full h-1.5 rounded-full mb-2 ${isDark ? "bg-slate-700" : "bg-slate-200"}`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${card.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full rounded-full ${card.color.replace("text-", "bg-")}`}
                />
              </div>
              <div
                className={`text-xs flex items-center gap-1 ${
                  card.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {card.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {card.trendValue} vs last month
              </div>
            </motion.div>
          ))}
        </div>

        <div className={`p-6 rounded-xl shadow-md ${isDark ? "bg-[#1E293B]" : "bg-white"}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Assign Extra Shifts</h2>
            <div className="flex gap-3">
              <span className={`text-sm px-3 py-1 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-100"}`}>
                {assignments.filter((a) => a.nightShift || a.sundayShift).length} assigned
              </span>
              <span className={`text-sm px-3 py-1 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-100"}`}>
                {assignments.length} total
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div
              className={`p-5 rounded-xl border-2 transition-colors ${
                isDark ? "bg-[#111827] border-purple-900/40" : "bg-white border-purple-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? "bg-purple-950" : "bg-purple-50"}`}>
                  <Moon className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Night Shift</h3>
                  <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Toggle night coverage</p>
                </div>
              </div>

              <div className="space-y-3">
                {assignments.map((employee) => (
                  <motion.div
                    key={`night-${employee.id}`}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ duration: 0.15 }}
                    className={`p-4 rounded-lg border ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white ${isDark ? "bg-purple-600" : "bg-purple-600"}`}>
                            {employee.initials}
                          </div>
                          <div
                            className="w-3 h-3 rounded-full border-2 border-white absolute -bottom-0.5 -right-0.5"
                            style={{ backgroundColor: loadStatusColor(employee.status) }}
                          />
                        </div>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>{employee.role}</div>
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

            <div
              className={`p-5 rounded-xl border-2 transition-colors ${
                isDark ? "bg-[#111827] border-orange-900/40" : "bg-white border-orange-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? "bg-orange-950" : "bg-orange-50"}`}>
                  <Sun className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sunday Shift</h3>
                  <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Assign weekend coverage</p>
                </div>
              </div>

              <div className="space-y-3">
                {assignments.map((employee) => (
                  <motion.div
                    key={`sunday-${employee.id}`}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ duration: 0.15 }}
                    className={`p-4 rounded-lg border ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white ${isDark ? "bg-orange-600" : "bg-orange-600"}`}>
                            {employee.initials}
                          </div>
                          <div
                            className="w-3 h-3 rounded-full border-2 border-white absolute -bottom-0.5 -right-0.5"
                            style={{ backgroundColor: loadStatusColor(employee.status) }}
                          />
                        </div>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>{employee.role}</div>
                        </div>
                      </div>
                      <Switch
                        checked={employee.sundayShift}
                        onCheckedChange={() => toggleSundayShift(employee.id)}
                        className="data-[state=checked]:bg-orange-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className={`px-8 py-3 rounded-xl text-white font-medium inline-flex items-center gap-3 ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-900/40"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/40"
              }`}
            >
              Save Assignments
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className={`p-6 rounded-xl shadow-md ${isDark ? "bg-[#1E293B]" : "bg-white"}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Upcoming Extra Shifts</h2>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.15 }}
                onClick={() => sliderRef.current?.slickPrev()}
                className={`p-2 rounded-lg ${isDark ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-100 hover:bg-slate-200"}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.15 }}
                onClick={() => sliderRef.current?.slickNext()}
                className={`p-2 rounded-lg ${isDark ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-100 hover:bg-slate-200"}`}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {upcomingShifts.length > 0 ? (
            <Slider ref={sliderRef} {...sliderSettings}>
              {upcomingShifts.map((shift) => (
                <div key={shift.id} className="px-2">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`p-5 rounded-xl border-l-4 ${
                      shift.shiftType === "Night" ? "border-purple-600" : "border-orange-500"
                    } ${isDark ? "bg-slate-700" : "bg-slate-50"}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-3 ${
                        shift.shiftType === "Night" ? "bg-purple-600" : "bg-orange-500"
                      }`}
                    >
                      {shift.initials}
                    </div>
                    <div className="font-medium mb-1">{shift.employeeName}</div>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium mb-2 ${
                        shift.shiftType === "Night"
                          ? isDark
                            ? "bg-purple-950 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                          : isDark
                            ? "bg-orange-950 text-orange-300"
                            : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {shift.shiftType === "Night" ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                      {shift.shiftType} Shift
                    </div>
                    <div className={`text-sm mb-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{shift.date}</div>
                    <div className={`text-xs px-2 py-1 rounded ${isDark ? "bg-green-950 text-green-400" : "bg-green-100 text-green-700"}`}>
                      Status: {shift.status}
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center py-12">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isDark ? "bg-slate-700" : "bg-slate-100"}`}>
                <CalendarIcon className={`w-8 h-8 ${isDark ? "text-slate-500" : "text-slate-400"}`} />
              </div>
              <p className={`mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>No upcoming shifts</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`px-6 py-2 rounded-lg inline-flex items-center gap-2 ${isDark ? "bg-purple-600 text-white" : "bg-blue-600 text-white"}`}
              >
                <Plus className="w-4 h-4" />
                Schedule Shift
              </motion.button>
            </div>
          )}
        </div>

        <div className={`p-6 rounded-xl shadow-md ${isDark ? "bg-[#1E293B]" : "bg-white"}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl">Historical Shifts</h2>
            <div className="flex flex-wrap gap-3">
              <div className="flex gap-2 bg-slate-100/50 dark:bg-slate-800/60 p-1 rounded-lg">
                {(["Night", "Sunday"] as const).map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm ${
                      activeTab === tab
                        ? isDark
                          ? "bg-purple-600 text-white"
                          : "bg-blue-600 text-white"
                        : isDark
                          ? "text-slate-300"
                          : "text-slate-700"
                    }`}
                  >
                    {tab} Shifts
                  </motion.button>
                ))}
              </div>

              <div className="relative">
                <select
                  value={filterEmployee}
                  onChange={(e) => setFilterEmployee(e.target.value)}
                  className={`appearance-none pl-4 pr-10 py-2 rounded-lg cursor-pointer border ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-800"
                  }`}
                >
                  <option>All Employees</option>
                  {[...new Set(historicalShifts.map((h) => h.employeeName))].map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={filterRange}
                  onChange={(e) => setFilterRange(e.target.value)}
                  className={`appearance-none pl-4 pr-10 py-2 rounded-lg cursor-pointer border ${
                    isDark ? "bg-slate-800 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-800"
                  }`}
                >
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last 6 months</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <span className={`text-xs px-3 py-2 rounded-md ${isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
                Period: {filterRange}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? "border-slate-700" : "border-slate-200"}`}>
                  <th className={`text-left py-4 px-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Employee</th>
                  <th className={`text-left py-4 px-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Shift</th>
                  <th className={`text-left py-4 px-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Date</th>
                  <th className={`text-left py-4 px-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory
                  .filter((shift) => filterEmployee === "All Employees" || shift.employeeName === filterEmployee)
                  .map((shift) => (
                    <motion.tr
                      key={shift.id}
                      whileHover={{ backgroundColor: isDark ? "#111827" : "#f8fafc" }}
                      transition={{ duration: 0.15 }}
                      className={`border-b ${isDark ? "border-slate-800" : "border-slate-200"}`}
                    >
                      <td className="py-4 px-4">{shift.employeeName}</td>
                      <td className="py-4 px-4">{shift.shiftType} Shift</td>
                      <td className="py-4 px-4">{shift.date}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${statusColor(shift.status, isDark)}`}>
                          <Check className="w-3 h-3" />
                          {shift.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
              </tbody>
            </table>

            {filteredHistory.length === 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground py-6">
                <AlertCircle className="w-4 h-4" />
                No shift history for this filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
