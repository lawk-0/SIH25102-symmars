import React, { useState } from 'react';
import Header from '../components/shared/Header';
import RiskBadge from '../components/shared/RiskBadge';
import Modal from '../components/shared/Modal';
import { mockData } from '../data/mockData';

const ParentDashboard = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const childData = mockData.parentChild;

  const getStatusIcon = () => {
    switch(childData.riskStatus) {
      case 'HIGH RISK':
        return { icon: 'fas fa-exclamation-circle', color: '#EF4444' };
      case 'MEDIUM RISK':
        return { icon: 'fas fa-exclamation-triangle', color: '#F59E0B' };
      case 'LOW RISK':
        return { icon: 'fas fa-check-circle', color: '#22C55E' };
      default:
        return { icon: 'fas fa-check-circle', color: '#22C55E' };
    }
  };

  const statusIcon = getStatusIcon();

  return (
    <div className="dashboard">
      <Header title="Parent Dashboard" />

      <div className="dashboard-content">
        <div className="parent-overview">
          <div className="child-card">
            <div className="child-header">
              <div className="child-avatar">
                {childData.childName.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div className="child-info">
                <h2>{childData.childName}</h2>
                <p>{childData.childGrade}</p>
                <p className="mentor-info">
                  <i className="fas fa-user-tie"></i>
                  Mentor: {childData.mentorName}
                </p>
              </div>
              <div className="status-section">
                <div className="status-icon" style={{ color: statusIcon.color }}>
                  <i className={statusIcon.icon}></i>
                </div>
                <RiskBadge level={childData.riskStatus} />
              </div>
            </div>
          </div>
        </div>

        <div className="parent-grid">
          <div className="parent-card">
            <h3>
              <i className="fas fa-calendar-check"></i>
              Attendance Overview
            </h3>

            <div className="attendance-display">
              <div className="attendance-circle">
                <div className="attendance-number">{childData.currentAttendance}%</div>
                <div className="attendance-label">Attendance</div>
              </div>

              <div className="attendance-status">
                {childData.currentAttendance >= 90 ? (
                  <div className="status-good">
                    <i className="fas fa-check-circle"></i>
                    Excellent Attendance
                  </div>
                ) : childData.currentAttendance >= 75 ? (
                  <div className="status-warning">
                    <i className="fas fa-exclamation-triangle"></i>
                    Needs Improvement
                  </div>
                ) : (
                  <div className="status-critical">
                    <i className="fas fa-exclamation-circle"></i>
                    Critical - Immediate Action Required
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="parent-card">
            <h3>
              <i className="fas fa-chart-line"></i>
              Academic Performance
            </h3>

            <div className="gpa-display">
              <div className="gpa-circle">
                <div className="gpa-number">{childData.currentGPA}{" "}{" "} Current GPA</div>

              </div>

              <div className="trend-indicator">
                <i className={`fas ${childData.trend === 'declining' ? 'fa-arrow-down' : 
                                     childData.trend === 'improving' ? 'fa-arrow-up' : 'fa-minus'}`}
                   style={{ color: childData.trend === 'declining' ? '#EF4444' : 
                                   childData.trend === 'improving' ? '#22C55E' : '#6B7280' }}>
                </i>
                <span>Trend: {childData.trend.charAt(0).toUpperCase() + childData.trend.slice(1)}</span>
              </div>
            </div>

            {/* <div className="recent-scores">
              <h4>Recent Test Scores</h4>
              {childData.recentScores.map((score, index) => (
                <div key={index} className="score-item">
                  <span className="score-subject" style= {{ fontWeight:'bold'}}>{score.subject}</span>
                  <span className="score-value"  style={{ marginLeft: '20px' }}>{score.score}%</span>
                  <br/>
                  <span className={`score-status status-${score.status.toLowerCase().replace(' ', '-')}`}>
                    {score.status}
                  </span>
                  <span className="score-date" style={{ marginLeft: '20px' }}>{score.date}</span>
                </div>
              ))}
            </div> */}
            <div className="recent-scores">
  <h4 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Recent Test Scores</h4>
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
    {childData?.recentScores?.map((score, index) => (
      <li key={index} style={{ marginBottom: '8px' }}>
        <span className="score-subject" style={{ fontWeight: 'bold' }}>
          {score.subject}
        </span>
        <span className="score-value" style={{ marginLeft: '20px' }}>
          {score.score}%
        </span>
        <br />
        <span
          className={`score-status status-${score.status.toLowerCase().replace(' ', '-')}`}
        >
          {score.status}
        </span>
        <span className="score-date" style={{ marginLeft: '20px' }}>
          {score.date}
        </span>
      </li>
    ))}
  </ul>
</div>



          </div>

          <div className="parent-card">
            <h3>
              <i className="fas fa-bell"></i>
              Alerts & Messages
            </h3>

            <div className="alerts-list">
              {childData.alerts.map((alert, index) => (
                <div key={index} className="alert-item">
                  <i className="fas fa-exclamation-triangle"></i>
                  <span>{alert}</span>
                </div>
              ))}
            </div>

            <div className="mentor-notes">
              <h4>Messages from Mentor</h4>
              {childData.mentorNotes.map((note, index) => (
                <div key={index} className="mentor-note">
                  <i className="fas fa-comment"></i>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="parent-card">
            <h3>
              <i className="fas fa-calendar-alt"></i>
              Upcoming Assignments
            </h3>

            <div className="assignments-list">
              {childData.upcomingAssignments.map((assignment, index) => (
                <div key={index} className="assignment-item">
                  <div className="assignment-info">
                    <strong>{assignment.assignment}</strong>
                    <span className="assignment-subject">{assignment.subject}</span>
                  </div>
                  <div className="assignment-due">
                    Due: {assignment.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="parent-card">
            <h3>
              <i className="fas fa-comments"></i>
              Communication
            </h3>

            <div className="mentor-contact">
              <div className="mentor-details">
                <strong>{childData.mentorName}</strong>
                <p>{childData.mentorContact}</p>
                <p>{childData.mentorPhone}</p>
              </div>
            </div>

            <div className="communication-actions">
              <button 
                className="btn-primary"
                onClick={() => setShowContactModal(true)}
              >
                <i className="fas fa-envelope"></i>
                Send Message
              </button>

              <button className="btn-secondary">
                <i className="fas fa-phone"></i>
                Request Call
              </button>

              <button className="btn-secondary">
                <i className="fas fa-calendar"></i>
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        mentorName={childData.mentorName}
      />
    </div>
  );
};

const ContactModal = ({ isOpen, onClose, mentorName }) => {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSend = () => {
    console.log('Sending message:', { subject, message });
    alert('Message sent successfully!');
    setMessage('');
    setSubject('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Contact ${mentorName}`}>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="form-control"
          >
            <option value="">Select a subject...</option>
            <option value="attendance">Attendance Concern</option>
            <option value="academic">Academic Performance</option>
            <option value="behavior">Behavioral Issues</option>
            <option value="meeting">Request Meeting</option>
            <option value="general">General Question</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            rows="6"
            placeholder="Type your message here..."
          />
        </div>

        <div className="form-actions">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="btn-primary" 
            onClick={handleSend}
            disabled={!subject || !message}
          >
            <i className="fas fa-paper-plane"></i>
            Send Message
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ParentDashboard;