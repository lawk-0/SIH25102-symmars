import React, { useState } from 'react';
import Header from '../components/shared/Header';
import StatsCard from '../components/shared/StatsCard';
import { useStudents } from '../contexts/StudentContext';
import { mockData } from '../data/mockData';

const AdminDashboard = () => {
  const { systemStats } = useStudents();
  const [thresholds, setThresholds] = useState({
    attendanceWarning: 75,
    attendanceCritical: 60,
    gpaWarning: 2.5,
    gpaCritical: 2.0
  });

  const handleThresholdChange = (key, value) => {
    setThresholds(prev => ({
      ...prev,
      [key]: parseFloat(value)
    }));
  };

  const saveThresholds = () => {
    console.log('Saving thresholds:', thresholds);
    // In real app, would save to backend
    alert('Thresholds saved successfully!');
  };

  return (
    <div className="dashboard">
      <Header title="Admin Dashboard" />

      <div className="dashboard-content">
        <div className="stats-section">
          <StatsCard
            icon="fas fa-users"
            iconColor="#6B7280"
            number={systemStats.totalStudents}
            label="Total Students"
          />

          <StatsCard
            icon="fas fa-exclamation-triangle"
            iconColor="#EF4444"
            number={systemStats.highRiskStudents}
            label="High Risk"
          />

          <StatsCard
            icon="fas fa-bolt"
            iconColor="#F59E0B"
            number={systemStats.mediumRiskStudents}
            label="Medium Risk"
          />

          <StatsCard
            icon="fas fa-check-circle"
            iconColor="#22C55E"
            number={systemStats.lowRiskStudents}
            label="Low Risk"
          />

          <StatsCard
            icon="fas fa-percentage"
            iconColor="#3B82F6"
            number={systemStats.averageAttendance + '%'}
            label="Avg Attendance"
          />

          <StatsCard
            icon="fas fa-chart-line"
            iconColor="#8B5CF6"
            number={systemStats.averageGPA}
            label="Average GPA"
          />
        </div>

        <div className="admin-grid">
          <div className="admin-card">
            <h3>
              <i className="fas fa-sliders-h"></i>
              Risk Thresholds Configuration
            </h3>

            <div className="threshold-section">
              <h4>Attendance Thresholds</h4>
              <div className="threshold-row">
                <label>Warning Level (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={thresholds.attendanceWarning}
                  onChange={(e) => handleThresholdChange('attendanceWarning', e.target.value)}
                />
              </div>
              <div className="threshold-row">
                <label>Critical Level (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={thresholds.attendanceCritical}
                  onChange={(e) => handleThresholdChange('attendanceCritical', e.target.value)}
                />
              </div>
            </div>

            <div className="threshold-section">
              <h4>GPA Thresholds</h4>
              <div className="threshold-row">
                <label>Warning Level</label>
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.1"
                  value={thresholds.gpaWarning}
                  onChange={(e) => handleThresholdChange('gpaWarning', e.target.value)}
                />
              </div>
              <div className="threshold-row">
                <label>Critical Level</label>
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.1"
                  value={thresholds.gpaCritical}
                  onChange={(e) => handleThresholdChange('gpaCritical', e.target.value)}
                />
              </div>
            </div>

            <button className="btn-primary save-btn" onClick={saveThresholds}>
              <i className="fas fa-save"></i>
              Save Configuration
            </button>
          </div>

          <div className="admin-card">
            <h3>
              <i className="fas fa-users-cog"></i>
              User Management
            </h3>

            <div className="user-stats">
              <div className="user-stat">
                <span className="user-count">{mockData.mentors.length}</span>
                <span className="user-label">Active Mentors</span>
              </div>
              <div className="user-stat">
                <span className="user-count">24</span>
                <span className="user-label">Active Parents</span>
              </div>
            </div>

            <div className="mentor-list">
              <h4>Mentors Overview</h4>
              {mockData.mentors.map(mentor => (
                <div key={mentor.id} className="mentor-item">
                  <div className="mentor-info">
                    <strong>{mentor.name}</strong> <br/>
                    <span>{mentor.email}</span>
                  </div>
                  <div className="mentor-students">
                    {mentor.students.length} students
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-secondary">
              <i className="fas fa-user-plus"></i>
              Add New User
            </button>
          </div>

          <div className="admin-card">
            <h3>
              <i className="fas fa-chart-bar"></i>
              System Analytics
            </h3>

            <div className="analytics-grid">
              {/* <div className="analytic-item">
                <span className="analytic-label">Login Activity 24h</span>
              </div> */}
              <div className="analytic-item">
                <span className="analytic-label " style= {{ fontWeight:'bold'}}>Alerts Generated</span>
                
                <span className="analytic-value" style={{ marginLeft: '11px' }}>18</span>
              </div>
              <div className="analytic-item">
                <span className="analytic-label" style= {{ fontWeight:'bold'}}>Parent Contacts</span>
                <span className="analytic-value" style={{ marginLeft: '20px' }}>7</span>
              </div>
              <div className="analytic-item">
                <span className="analytic-label" style= {{ fontWeight:'bold'}}>System Uptime</span>
                <span className="analytic-value" style={{ marginLeft: '25px' }}>99.8%</span>
              </div>
            </div>
<br/>
            <div className="recent-activity">
<h4 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
  Recent System Activity
</h4> <br/>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-time" style= {{ fontWeight:'bold'}}>2 hours ago</span>
                  <span style={{ marginLeft: '25px' }}>High risk alert generated for Emma Johnson</span>
                </div>
                <div className="activity-item">
                  <span className="activity-time" style= {{ fontWeight:'bold'}}>4 hours ago</span>
                  <span style={{ marginLeft: '25px' }}>Mentor Ms. Wilson logged in</span>
                </div>
                <div className="activity-item">
                  <span className="activity-time" style= {{ fontWeight:'bold'}}>1 day ago</span>
                  <span style={{ marginLeft: '43px' }}>System backup completed successfully</span>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h3>
              <i className="fas fa-bell"></i>
              Notification Settings
            </h3>

            <div className="notification-settings">
              <div className="setting-item">
                <label>
                  <input type="checkbox" defaultChecked />
                  Email notifications for high-risk alerts
                </label>
              </div>
              <div className="setting-item">
                <label>
                  <input type="checkbox" defaultChecked />
                  Daily attendance reports
                </label>
              </div>
              <div className="setting-item">
                <label>
                  <input type="checkbox" />
                  Weekly system summaries
                </label>
              </div>
              <div className="setting-item">
                <label>
                  <input type="checkbox" defaultChecked />
                  Parent engagement alerts
                </label>
              </div>
            </div>
<br/><br/>            <button className="btn-secondary">
              <i className="fas fa-cog"></i>
              Configure Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;