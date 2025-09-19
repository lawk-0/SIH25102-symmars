// import React from 'react';
// import Header from '../components/shared/Header';
// import StatsCard from '../components/shared/StatsCard';
// import StudentsOverview from '../components/student/StudentsOverview';
// import AlertsPanel from '../components/alerts/AlertsPanel';
// import { useStudents } from '../contexts/StudentContext';

// const MentorDashboard = () => {
//   const { systemStats, updateFilters } = useStudents();

//   const handleRiskFilter = (riskLevel) => {
//     updateFilters({ riskLevel });
//   };

//   return (
//     <div className="dashboard">
//       <Header title="Student Early Warning System" />

//       <div className="dashboard-content">
//         <div className="stats-section">
//           <StatsCard
//             icon="fas fa-users"
//             iconColor="#6B7280"
//             number={systemStats.totalStudents}
//             label="Total Students"
//             className="total-students"
//           />

//           <StatsCard
//             icon="fas fa-exclamation-triangle"
//             iconColor="#EF4444"
//             number={systemStats.highRiskStudents}
//             label="High Risk Students"
//             className="high-risk-card clickable"
//             onClick={() => handleRiskFilter('HIGH RISK')}
//           />

//           <StatsCard
//             icon="fas fa-bolt"
//             iconColor="#F59E0B"
//             number={systemStats.mediumRiskStudents}
//             label="Medium Risk Students"
//             className="medium-risk-card clickable"
//             onClick={() => handleRiskFilter('MEDIUM RISK')}
//           />

//           <StatsCard
//             icon="fas fa-check-circle"
//             iconColor="#22C55E"
//             number={systemStats.lowRiskStudents}
//             label="Low Risk Students"
//             className="low-risk-card clickable"
//             onClick={() => handleRiskFilter('LOW RISK')}
//           />
//         </div>

//         <div className="main-content">
//           <div className="students-section">
//             <StudentsOverview />
//           </div>

//           <div className="alerts-section">
//             <AlertsPanel />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorDashboard;
import React from 'react';
import Header from '../components/shared/Header';
import StatsCard from '../components/shared/StatsCard';
import StudentsOverview from '../components/student/StudentsOverview';
import AlertsPanel from '../components/alerts/AlertsPanel';
import { useStudents } from '../contexts/StudentContext';

const MentorDashboard = () => {
  const { systemStats, updateFilters } = useStudents();

  const handleRiskFilter = (riskLevel) => {
    updateFilters({ riskLevel });
  };

  return (
    <div className="dashboard">
      <Header title="Student Early Warning System" />
      
      <div className="dashboard-content">
        <div className="stats-section">
          <StatsCard
            icon="fas fa-users"
            iconColor="#6B7280"
            number={systemStats.totalStudents}
            label="Total Students"
            className="total-students"
          />
          
          <StatsCard
            icon="fas fa-exclamation-triangle"
            iconColor="#EF4444"
            number={systemStats.highRiskStudents}
            label="High Risk Students"
            className="high-risk-card clickable"
            onClick={() => handleRiskFilter('HIGH RISK')}
          />
          
          <StatsCard
            icon="fas fa-bolt"
            iconColor="#F59E0B"
            number={systemStats.mediumRiskStudents}
            label="Medium Risk Students"
            className="medium-risk-card clickable"
            onClick={() => handleRiskFilter('MEDIUM RISK')}
          />
          
          <StatsCard
            icon="fas fa-check-circle"
            iconColor="#22C55E"
            number={systemStats.lowRiskStudents}
            label="Low Risk Students"
            className="low-risk-card clickable"
            onClick={() => handleRiskFilter('LOW RISK')}
          />
        </div>

        <div className="main-content">
          <div className="students-section">
            <StudentsOverview />
          </div>
          
          <div className="alerts-section">
            <AlertsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
