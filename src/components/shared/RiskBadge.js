import React from 'react';

const RiskBadge = ({ level, className = '' }) => {
  const getRiskClass = () => {
    switch(level) {
      case 'HIGH RISK':
        return 'risk-badge-high';
      case 'MEDIUM RISK':
        return 'risk-badge-medium';
      case 'LOW RISK':
        return 'risk-badge-low';
      default:
        return 'risk-badge-low';
    }
  };

  return (
    <span className={`risk-badge ${getRiskClass()} ${className}`}>
      {level}
    </span>
  );
};

export default RiskBadge;