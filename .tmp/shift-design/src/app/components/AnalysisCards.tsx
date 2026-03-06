import { CalendarClock, Moon, Calendar, Users, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

interface AnalysisCardsProps {
  isDarkMode: boolean;
}

export function AnalysisCards({ isDarkMode }: AnalysisCardsProps) {
  const cards = [
    {
      icon: CalendarClock,
      number: '124',
      description: 'Total Shifts This Month',
      color: isDarkMode ? 'text-blue-400' : 'text-blue-600',
      bgColor: isDarkMode ? 'bg-blue-950' : 'bg-blue-50',
      trend: 'up',
      trendValue: '8%',
      progress: 82,
    },
    {
      icon: Moon,
      number: '68',
      description: 'Night Shifts Assigned',
      color: isDarkMode ? 'text-purple-400' : 'text-purple-600',
      bgColor: isDarkMode ? 'bg-purple-950' : 'bg-purple-50',
      trend: 'up',
      trendValue: '12%',
      progress: 68,
    },
    {
      icon: Calendar,
      number: '56',
      description: 'Sunday Shifts Assigned',
      color: isDarkMode ? 'text-orange-400' : 'text-orange-600',
      bgColor: isDarkMode ? 'bg-orange-950' : 'bg-orange-50',
      trend: 'down',
      trendValue: '3%',
      progress: 56,
    },
    {
      icon: Users,
      number: '32',
      description: 'Employees Assigned',
      color: isDarkMode ? 'text-green-400' : 'text-green-600',
      bgColor: isDarkMode ? 'bg-green-950' : 'bg-green-50',
      trend: 'up',
      trendValue: '5%',
      progress: 75,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className={`p-6 rounded-xl shadow-md transition-colors ${
            isDarkMode ? 'bg-[#1E293B]' : 'bg-white'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center mb-4`}>
            <card.icon className={`w-6 h-6 ${card.color}`} />
          </div>
          <div className="text-3xl mb-1">{card.number}</div>
          <div className={`text-sm mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {card.description}
          </div>
          
          {/* Progress Bar */}
          <div className={`w-full h-1.5 rounded-full mb-2 ${
            isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
          }`}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${card.progress}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`h-full rounded-full ${
                card.color.replace('text-', 'bg-')
              }`}
            />
          </div>

          {/* Trend Indicator */}
          <div className={`text-xs flex items-center gap-1 ${
            card.trend === 'up' 
              ? 'text-green-500' 
              : 'text-red-500'
          }`}>
            {card.trend === 'up' ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {card.trendValue} from last month
          </div>
        </motion.div>
      ))}
    </div>
  );
}