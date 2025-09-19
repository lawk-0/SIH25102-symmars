import React from 'react';

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="view-toggle">
      <button 
        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
        onClick={() => onViewModeChange('grid')}
        title="Grid View"
      >
        <i className="fas fa-th"></i>
        Grid View
      </button>
      <button 
        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => onViewModeChange('list')}
        title="List View"
      >
        <i className="fas fa-list"></i>
        List View
      </button>
    </div>
  );
};

export default ViewToggle;