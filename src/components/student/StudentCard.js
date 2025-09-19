import React, { useState } from 'react';
import RiskBadge from '../shared/RiskBadge';
import Modal from '../shared/Modal';

const StudentCard = ({ student, viewMode = 'grid' }) => {
  const [showModal, setShowModal] = useState(false);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getGpaChangeIcon = (change) => {
    switch(change) {
      case 'improving':
        return { icon: 'fas fa-arrow-up', color: '#22C55E', text: 'Improving' };
      case 'declining':
        return { icon: 'fas fa-arrow-down', color: '#EF4444', text: 'Declining' };
      default:
        return { icon: 'fas fa-minus', color: '#6B7280', text: 'Stable' };
    }
  };

  const gpaChange = getGpaChangeIcon(student.gpaChange);

  if (viewMode === 'list') {
    return (
      <>
        <div className="student-card-list">
          <div className="student-info">
            <div className="student-avatar">
              {getInitials(student.name)}
            </div>
            <div className="student-details">
              <h3>{student.name}</h3>
              <p>{student.grade}</p>
            </div>
          </div>

          <div className="student-metrics">
            <div className="metric">
              <span className="metric-label">Attendance</span>
              <span className="metric-value">{student.attendance}%</span>
            </div>
            <div className="metric">
              <span className="metric-label">GPA</span>
              <span className="metric-value">{student.gpa}</span>
            </div>
            <div className="metric">
              <span className="metric-label">Recent Score</span>
              <span className="metric-value">{student.recentScore}%</span>
            </div>
          </div>

          <div className="student-status">
            <RiskBadge level={student.riskLevel} />
          </div>

          <div className="student-actions">
            <button className="btn-view-details" onClick={() => setShowModal(true)}>
              View Details
            </button>
          </div>
        </div>

        <StudentDetailModal 
          student={student}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
    );
  }

  return (
    <>
      <div className={`student-card ${student.riskLevel.toLowerCase().replace(' ', '-')}-border`}>
        <div className="student-header">
          <div className="student-avatar">
            {getInitials(student.name)}
          </div>
          <div className="student-info">
            <h3>{student.name}</h3>
            <p>{student.grade}</p>
          </div>
          <RiskBadge level={student.riskLevel} />
        </div>

        <div className="student-stats">
          <div className="stat-row">
            <div className="stat">
              <span className="stat-label">Attendance</span>
              <span className="stat-value">{student.attendance}%</span>
            </div>
            <div className="stat">
              <span className="stat-label">GPA</span>
              <div className="gpa-container">
                <span className="stat-value">{student.gpa}</span>
                <i className={gpaChange.icon} style={{ color: gpaChange.color }}></i>
              </div>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat">
              <span className="stat-label">Recent Score</span>
              <span className="stat-value">{student.recentScore}%</span>
            </div>
          </div>
        </div>

        {/* <div className="student-alerts">
          { <span className="alerts-count">
            {student.activeAlerts} Active Alerts
          </span> }
          <div className="alert-indicators">
            {student.status === 'Declining' && (
              <span className="alert-indicator declining">
                <i className="fas fa-exclamation-triangle"></i>
                Declining
              </span>
            )}
            {student.status === 'Stable' && (
              <span className="alert-indicator stable">
                <i className="fas fa-minus"></i>
                Stable
              </span>
            )}
            {student.status === 'Critical' && (
              <span className="alert-indicator critical">
                <i className="fas fa-exclamation-circle"></i>
                Critical
              </span>
            )}
          </div>
        </div> */}

        <div className="student-actions">
          <button className="btn-view-details" onClick={() => setShowModal(true)}>
            View Details
          </button>
        </div>
      </div>

      <StudentDetailModal 
        student={student}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

const StudentDetailModal = ({ student, isOpen, onClose }) => {
  if (!student) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${student.name} - Details`}>
      <div className="student-detail-content">
        <div className="detail-section">
          <h4>Basic Information</h4>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Grade:</span>
              <span>{student.grade}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Mentor:</span>
              <span>{student.mentor}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Last Active:</span>
              <span>{student.lastActive}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Risk Level:</span>
              <RiskBadge level={student.riskLevel} />
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>Academic Performance</h4>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Current GPA:</span>
              <span>{student.gpa}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Attendance:</span>
              <span>{student.attendance}%</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Recent Test Score:</span>
              <span>{student.recentScore}%</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span>{student.status}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>Subjects</h4>
          <div className="subjects-list">
            {student.subjects.map(subject => (
              <span key={subject} className="subject-tag">{subject}</span>
            ))}
          </div>
        </div>

        <div className="detail-actions">
          <button className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Contact Parent
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-calendar"></i>
            Schedule Meeting
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StudentCard;