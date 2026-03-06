import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface UpcomingShiftsProps {
  isDarkMode: boolean;
}

interface Shift {
  id: number;
  employeeName: string;
  avatar: string;
  shiftType: 'Night' | 'Sunday';
  date: string;
  status: string;
}

export function UpcomingShifts({ isDarkMode }: UpcomingShiftsProps) {
  const sliderRef = useRef<Slider>(null);
  
  const upcomingShifts: Shift[] = [
    { id: 1, employeeName: 'Sarah Johnson', avatar: 'SJ', shiftType: 'Night', date: 'Mar 8, 2026', status: 'Assigned' },
    { id: 2, employeeName: 'John Smith', avatar: 'JS', shiftType: 'Sunday', date: 'Mar 9, 2026', status: 'Assigned' },
    { id: 3, employeeName: 'Emily Davis', avatar: 'ED', shiftType: 'Night', date: 'Mar 10, 2026', status: 'Assigned' },
    { id: 4, employeeName: 'Lisa Anderson', avatar: 'LA', shiftType: 'Night', date: 'Mar 11, 2026', status: 'Assigned' },
    { id: 5, employeeName: 'Michael Brown', avatar: 'MB', shiftType: 'Sunday', date: 'Mar 16, 2026', status: 'Assigned' },
    { id: 6, employeeName: 'David Wilson', avatar: 'DW', shiftType: 'Night', date: 'Mar 17, 2026', status: 'Assigned' },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const hasShifts = upcomingShifts.length > 0;

  return (
    <div className={`p-6 rounded-xl shadow-md mb-8 transition-colors ${
      isDarkMode ? 'bg-[#1E293B]' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">Upcoming Shifts</h2>
        
        {hasShifts && (
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
              onClick={() => sliderRef.current?.slickPrev()}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-slate-700 hover:bg-slate-600' 
                  : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
              onClick={() => sliderRef.current?.slickNext()}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-slate-700 hover:bg-slate-600' 
                  : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </div>

      {hasShifts ? (
        <Slider ref={sliderRef} {...settings}>
          {upcomingShifts.map((shift) => (
            <div key={shift.id} className="px-2">
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`p-5 rounded-xl transition-all border-l-4 ${
                  shift.shiftType === 'Night'
                    ? 'border-purple-600'
                    : 'border-orange-600'
                } ${
                  isDarkMode ? 'bg-slate-700 hover:shadow-xl' : 'bg-slate-50 hover:shadow-lg'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white mb-3 ${
                  shift.shiftType === 'Night'
                    ? 'bg-purple-600'
                    : 'bg-orange-600'
                }`}>
                  {shift.avatar}
                </div>
                <h3 className="mb-2 font-medium">{shift.employeeName}</h3>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs mb-2 font-medium ${
                  shift.shiftType === 'Night'
                    ? isDarkMode 
                      ? 'bg-purple-950 text-purple-400' 
                      : 'bg-purple-100 text-purple-700'
                    : isDarkMode 
                      ? 'bg-orange-950 text-orange-400' 
                      : 'bg-orange-100 text-orange-700'
                }`}>
                  {shift.shiftType === 'Night' ? (
                    <Moon className="w-3 h-3" />
                  ) : (
                    <Sun className="w-3 h-3" />
                  )}
                  {shift.shiftType} Shift
                </div>
                <div className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {shift.date}
                </div>
                <div className={`text-xs px-2 py-1 rounded inline-block ${
                  isDarkMode 
                    ? 'bg-green-950 text-green-400' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  Status: {shift.status}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center py-12">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
          }`}>
            <CalendarIcon className={`w-8 h-8 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
          </div>
          <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            No upcoming shifts
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2 ${
              isDarkMode 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Plus className="w-4 h-4" />
            Schedule Shift
          </motion.button>
        </div>
      )}
    </div>
  );
}