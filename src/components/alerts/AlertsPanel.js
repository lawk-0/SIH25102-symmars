// import React, { useState } from 'react';
// import { useStudents } from '../../contexts/StudentContext';

// const AlertsPanel = () => {
//   const { alerts, markAlertAsRead } = useStudents();
//   const [showAll, setShowAll] = useState(false);

//   const unreadAlerts = alerts.filter(alert => !alert.isRead);
//   const displayedAlerts = showAll ? alerts : alerts.slice(0, 5);

//   const getSeverityIcon = (severity) => {
//     switch(severity) {
//       case 'High':
//         return { icon: 'fas fa-exclamation-circle', color: '#EF4444' };
//       case 'Medium':
//         return { icon: 'fas fa-exclamation-triangle', color: '#F59E0B' };
//       case 'Low':
//         return { icon: 'fas fa-info-circle', color: '#3B82F6' };
//       default:
//         return { icon: 'fas fa-bell', color: '#6B7280' };
//     }
//   };

//   const handleAlertClick = (alert) => {
//     if (!alert.isRead) {
//       markAlertAsRead(alert.id);
//     }
//   };

//   return (
//     <div className="alerts-panel">
//       <div className="alerts-header">
//         <h3>
//           <i className="fas fa-bell"></i>
//           Recent Alerts
//         </h3>
//         {unreadAlerts.length > 0 && (
//           <span className="alerts-count">{unreadAlerts.length}</span>
//         )}
//       </div>

//       <div className="alerts-list">
//         {displayedAlerts.length === 0 ? (
//           <div className="no-alerts">
//             <i className="fas fa-check-circle"></i>
//             <p>No recent alerts</p>
//           </div>
//         ) : (
//           displayedAlerts.map(alert => {
//             const severity = getSeverityIcon(alert.severity);
//             return (
//               <div
//                 key={alert.id}
//                 className={`alert-item ${alert.isRead ? 'read' : 'unread'} severity-${alert.severity.toLowerCase()}`}
//                 onClick={() => handleAlertClick(alert)}
//               >
//                 <div className="alert-icon" style={{ color: severity.color }}>
//                   <i className={severity.icon}></i>
//                 </div>

//                 <div className="alert-content">
//                   <div className="alert-student">{alert.studentName}</div>
//                   <div className="alert-message">{alert.message}</div>
//                   <div className="alert-meta">
//                     <span className="alert-time">{alert.timestamp}</span>
//                     <span className={`alert-severity severity-${alert.severity.toLowerCase()}`}>
//                       {alert.severity}
//                     </span>
//                   </div>
//                 </div>

//                 {!alert.isRead && <div className="unread-indicator"></div>}
//               </div>
//             );
//           })
//         )}
//       </div>

//       {alerts.length > 5 && (
//         <button 
//           className="show-all-btn"
//           onClick={() => setShowAll(!showAll)}
//         >
//           {showAll ? 'Show Less' : `Show All (${alerts.length})`}
//         </button>
//       )}

//       <div className="alerts-actions">
//         <button className="btn-secondary">
//           <i className="fas fa-cog"></i>
//           Alert Settings
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AlertsPanel;
import React, { useState } from 'react';
import { useStudents } from '../../contexts/StudentContext';

const AlertsPanel = () => {
  const { alerts, markAlertAsRead } = useStudents();
  const [showAll, setShowAll] = useState(false);
  
  const unreadAlerts = alerts.filter(alert => !alert.isRead);
  const displayedAlerts = showAll ? alerts : alerts.slice(0, 5);

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'High':
        return { icon: 'fas fa-exclamation-circle', color: '#EF4444' };
      case 'Medium':
        return { icon: 'fas fa-exclamation-triangle', color: '#F59E0B' };
      case 'Low':
        return { icon: 'fas fa-info-circle', color: '#3B82F6' };
      default:
        return { icon: 'fas fa-bell', color: '#6B7280' };
    }
  };

  const handleAlertClick = (alert) => {
    if (!alert.isRead) {
      markAlertAsRead(alert.id);
    }
  };

  return (
    <div className="alerts-panel">
      <div className="alerts-header">
        <h3>
          <i className="fas fa-bell"></i>
          Recent Alerts
        </h3>
        {unreadAlerts.length > 0 && (
          <span className="alerts-count">{unreadAlerts.length}</span>
        )}
      </div>

      <div className="alerts-list">
        {displayedAlerts.length === 0 ? (
          <div className="no-alerts">
            <i className="fas fa-check-circle"></i>
            <p>No recent alerts</p>
          </div>
        ) : (
          displayedAlerts.map(alert => {
            const severity = getSeverityIcon(alert.severity);
            return (
              <div
                key={alert.id}
                className={`alert-item ${alert.isRead ? 'read' : 'unread'} severity-${alert.severity.toLowerCase()}`}
                onClick={() => handleAlertClick(alert)}
              >
                <div className="alert-icon" style={{ color: severity.color }}>
                  <i className={severity.icon}></i>
                </div>
                
                <div className="alert-content">
                  <div className="alert-student">{alert.studentName}</div>
                  <div className="alert-message">{alert.message}</div>
                  <div className="alert-meta">
                    <span className="alert-time">{alert.timestamp}</span>
                    <span className={`alert-severity severity-${alert.severity.toLowerCase()}`}>
                      {alert.severity}
                    </span>
                  </div>
                </div>

                {!alert.isRead && <div className="unread-indicator"></div>}
              </div>
            );
          })
        )}
      </div>

      {alerts.length > 5 && (
        <button 
          className="show-all-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : `Show All (${alerts.length})`}
        </button>
      )}

      <div className="alerts-actions">
        <button className="btn-secondary">
          <i className="fas fa-cog"></i>
          Alert Settings
        </button>
      </div>
    </div>
  );
};

export default AlertsPanel;