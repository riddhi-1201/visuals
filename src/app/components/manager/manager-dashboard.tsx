import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FolderKanban, CheckCircle2, Clock, Users } from "lucide-react";
import { ManagerStatCard } from "./manager-stat-card";
import { ManagerProjectTimeline } from "./manager-project-timeline";
import { ManagerActiveProjectsScroll } from "./manager-active-projects-scroll";
import { ManagerRecentProjectsTable } from "./manager-recent-projects-table";
import { ManagerEmployeeCard } from "./manager-employee-card";
import type { ManagerProjectCardProps } from "./manager-project-card";
import type { ManagerProjectSummary } from "./manager-types";
import { CreateProjectForm } from "../create-project-form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ManagerDashboardProps {
  isDark: boolean;
}

export function ManagerDashboard({ isDark }: ManagerDashboardProps) {
  const [projects, setProjects] = useState<ManagerProjectSummary[]>([
    {
      id: "PRJ-A4F2E9",
      name: "Science - Secondary",
      startDate: "Jan 15, 2026",
      dueDate: "Mar 30, 2026",
      status: "In Progress",
      employees: 5,
    },
    {
      id: "PRJ-B8C3D1",
      name: "Mathematics - Primary",
      startDate: "Feb 1, 2026",
      dueDate: "Apr 15, 2026",
      status: "In Progress",
      employees: 4,
    },
    {
      id: "PRJ-C2E7F4",
      name: "English - Higher Secondary",
      startDate: "Jan 20, 2026",
      dueDate: "Mar 10, 2026",
      status: "Completed",
      employees: 3,
    },
  ]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleCreateProject = (newProject: ManagerProjectSummary) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const activeProjects: ManagerProjectCardProps[] = [
    {
      name: "Web Development Platform",
      employees: ["Alice Johnson", "Bob Smith", "Carol Davis", "David Lee"],
      progress: 75,
      daysRemaining: 12,
      manager: "Sarah Johnson",
      bgColor: "bg-[#E8F0FF] dark:bg-[#1E293B]",
    },
    {
      name: "Mobile App Design",
      employees: ["Emma Wilson", "Frank Brown"],
      progress: 45,
      daysRemaining: 25,
      manager: "Sarah Johnson",
      bgColor: "bg-[#F1E8FF] dark:bg-[#1E293B]",
    },
    {
      name: "Data Analytics Dashboard",
      employees: ["Grace Lee", "Henry Clark", "Iris Wang"],
      progress: 90,
      daysRemaining: 5,
      manager: "Sarah Johnson",
      bgColor: "bg-[#E9FBEF] dark:bg-[#1E293B]",
    },
    {
      name: "Marketing Campaign",
      employees: ["Jack Miller", "Kate Adams"],
      progress: 60,
      daysRemaining: 18,
      manager: "Sarah Johnson",
      bgColor: "bg-[#FFF8E6] dark:bg-[#1E293B]",
    },
    {
      name: "CRM System Update",
      employees: ["Laura White", "Mike Green"],
      progress: 35,
      daysRemaining: 30,
      manager: "Sarah Johnson",
      bgColor: "bg-[#FFEFF5] dark:bg-[#1E293B]",
    },
  ];

  const employees = [
    {
      name: "Alice Johnson",
      role: "Senior Developer",
      currentProject: "Web Development",
      projectCount: 3,
      bgColor: "bg-[#E8F0FF] dark:bg-[#1E293B]",
    },
    {
      name: "Bob Smith",
      role: "UI/UX Designer",
      currentProject: "Mobile App Design",
      projectCount: 2,
      bgColor: "bg-[#F1E8FF] dark:bg-[#1E293B]",
    },
    {
      name: "Carol Davis",
      role: "Project Manager",
      currentProject: "Data Analytics",
      projectCount: 4,
      bgColor: "bg-[#E9FBEF] dark:bg-[#1E293B]",
    },
    {
      name: "David Lee",
      role: "Backend Developer",
      currentProject: "API Integration",
      projectCount: 2,
      bgColor: "bg-[#FFF8E6] dark:bg-[#1E293B]",
    },
    {
      name: "Emma Wilson",
      role: "Frontend Developer",
      currentProject: "Dashboard UI",
      projectCount: 3,
      bgColor: "bg-[#FFEFF5] dark:bg-[#1E293B]",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <ManagerStatCard
          title="Total Projects"
          value={48}
          change={12}
          icon={FolderKanban}
          bgColor="bg-[#E8F0FF]"
          iconColor="text-[#4F6BED]"
          progress={85}
        />
        <ManagerStatCard
          title="Active Projects"
          value={32}
          change={8}
          icon={Clock}
          bgColor="bg-[#FFF8E6]"
          iconColor="text-[#F59E0B]"
          progress={70}
        />
        <ManagerStatCard
          title="Completed Projects"
          value={16}
          change={5}
          icon={CheckCircle2}
          bgColor="bg-[#E9FBEF]"
          iconColor="text-[#22C55E]"
          progress={60}
        />
        <ManagerStatCard
          title="Employees Assigned"
          value={42}
          change={-2}
          icon={Users}
          bgColor="bg-[#F1E8FF]"
          iconColor="text-[#6366F1]"
          progress={90}
        />
      </div>

      <CreateProjectForm onCreateProject={handleCreateProject} />

      <ManagerActiveProjectsScroll projects={activeProjects} />

      <ManagerRecentProjectsTable projects={projects} />

      <ManagerProjectTimeline />

      <div className="bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Employee Overview</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Team members and their projects</p>
        </div>
        <div className="carousel-container">
          <Slider {...carouselSettings}>
            {employees.map((employee) => (
              <div key={employee.name} className="px-3">
                <ManagerEmployeeCard {...employee} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .carousel-container .slick-dots {
          bottom: -40px;
        }
        .carousel-container .slick-dots li button:before {
          color: ${isDark ? "#6366F1" : "#4F6BED"};
          font-size: 10px;
        }
        .carousel-container .slick-dots li.slick-active button:before {
          color: ${isDark ? "#6366F1" : "#4F6BED"};
        }
        .carousel-container .slick-prev,
        .carousel-container .slick-next {
          z-index: 10;
        }
        .carousel-container .slick-prev { left: -30px; }
        .carousel-container .slick-next { right: -30px; }
        .carousel-container .slick-prev:before,
        .carousel-container .slick-next:before {
          color: ${isDark ? "#6366F1" : "#4F6BED"};
          font-size: 30px;
        }
      `}</style>
    </div>
  );
}
