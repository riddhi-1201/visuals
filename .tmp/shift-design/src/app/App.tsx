import { useState } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { AnalysisCards } from './components/AnalysisCards';
import { WeeklyChart } from './components/WeeklyChart';
import { AssignShifts } from './components/AssignShifts';
import { UpcomingShifts } from './components/UpcomingShifts';
import { HistoricalShifts } from './components/HistoricalShifts';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-[#0F172A] text-slate-100' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="mx-auto max-w-[1440px] px-8 py-6">
        {/* Header */}
        <DashboardHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        {/* Analysis Cards */}
        <AnalysisCards isDarkMode={isDarkMode} />
        
        {/* Weekly Chart */}
        <WeeklyChart isDarkMode={isDarkMode} />
        
        {/* Assign New Shifts */}
        <AssignShifts isDarkMode={isDarkMode} />
        
        {/* Upcoming Shifts Carousel */}
        <UpcomingShifts isDarkMode={isDarkMode} />
        
        {/* Historical Shifts */}
        <HistoricalShifts isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;