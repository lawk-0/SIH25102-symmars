import React, { useState } from 'react';

const AlertBanner = ({ alert, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      setTimeout(() => onDismiss(alert.id), 300);
    }
  };

  if (!isVisible) return null;

  const getSeverityClass = () => {
    switch(alert.severity) {
      case 'High':
        return 'alert-banner-high';
      case 'Medium':
        return 'alert-banner-medium';
      case 'Low':
        return 'alert-banner-low';
      default:
        return 'alert-banner-info';
    }
  };

  return (
    <div className={`alert-banner ${getSeverityClass()}`}>
      <div className="alert-banner-content">
        <i className="fas fa-exclamation-triangle alert-banner-icon"></i>
        <div className="alert-banner-text">
          <strong>{alert.studentName}</strong> {alert.message}
        </div>
      </div>
      <button className="alert-banner-close" onClick={handleDismiss}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default AlertBanner;