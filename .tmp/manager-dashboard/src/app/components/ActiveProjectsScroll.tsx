import { useEffect, useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { motion } from 'motion/react';

interface Project {
  name: string;
  employees: string[];
  progress: number;
  daysRemaining: number;
  manager: string;
  bgColor: string;
}

interface ActiveProjectsScrollProps {
  projects: Project[];
}

export function ActiveProjectsScroll({ projects }: ActiveProjectsScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const autoScroll = () => {
      if (!container) return;

      scrollPosition += scrollSpeed;
      
      // Reset scroll when reaching halfway (since we duplicated the content)
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 overflow-hidden">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Active Projects</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Auto-scrolling ongoing projects - hover to pause</p>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
