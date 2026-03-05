import { Plus, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface CreateProjectFormProps {
  onCreateProject: (project: any) => void;
}

export function CreateProjectForm({ onCreateProject }: CreateProjectFormProps) {
  const [formData, setFormData] = useState({
    segment: '',
    class: '',
    board: '',
    subject: '',
    series: '',
    medium: '',
    session: '',
    dueDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.segment || !formData.subject || !formData.dueDate) {
      return;
    }

    const newProject = {
      id: `PRJ-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      name: `${formData.subject} - ${formData.segment}`,
      startDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      dueDate: new Date(formData.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Added by Admin',
      employees: Math.floor(Math.random() * 5) + 2,
      details: formData,
    };

    onCreateProject(newProject);
    handleClear();
  };

  const handleClear = () => {
    setFormData({
      segment: '',
      class: '',
      board: '',
      subject: '',
      series: '',
      medium: '',
      session: '',
      dueDate: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#4F6BED] via-[#6366F1] to-[#7C8DB5] dark:from-[#1E293B] dark:via-[#2D3B56] dark:to-[#1E293B] rounded-2xl p-10 shadow-2xl border-2 border-white/20 dark:border-gray-700/50 backdrop-blur-xl"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="p-4 bg-white/20 dark:bg-gray-800/50 rounded-2xl backdrop-blur-md"
            >
              <Sparkles className="h-8 w-8 text-white dark:text-[#6366F1]" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-white dark:text-white">Create New Project</h2>
              <p className="text-white/80 dark:text-gray-300 mt-1">Add a new project to your dashboard instantly</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-4 gap-5">
            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Segment *</label>
              <select
                value={formData.segment}
                onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
                required
              >
                <option value="">Select Segment</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Higher Secondary">Higher Secondary</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Class / Semester</label>
              <select
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
              >
                <option value="">Select Class</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Board</label>
              <select
                value={formData.board}
                onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
              >
                <option value="">Select Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Subject *</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
                required
              >
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Series / Author</label>
              <input
                type="text"
                value={formData.series}
                onChange={(e) => setFormData({ ...formData, series: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
                placeholder="Enter series"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Medium</label>
              <select
                value={formData.medium}
                onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
              >
                <option value="">Select Medium</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Regional">Regional</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Session</label>
              <select
                value={formData.session}
                onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
              >
                <option value="">Select Session</option>
                <option value="2025-26">2025-26</option>
                <option value="2026-27">2026-27</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold mb-2 text-white dark:text-gray-200">Due Date *</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-4 py-3.5 bg-white/90 dark:bg-gray-800/90 border-2 border-white/30 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:text-white transition-all duration-200 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-gray-800"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleClear}
              className="flex items-center gap-2 px-8 py-4 bg-white/20 dark:bg-gray-800/50 text-white rounded-xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all shadow-lg backdrop-blur-md border border-white/30"
            >
              <X className="h-5 w-5" />
              Clear Form
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center gap-2 px-10 py-4 bg-white dark:bg-[#6366F1] text-[#4F6BED] dark:text-white rounded-xl hover:bg-white/90 dark:hover:bg-[#5558E3] transition-all shadow-2xl font-semibold"
            >
              <Plus className="h-5 w-5" />
              Create Project
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
