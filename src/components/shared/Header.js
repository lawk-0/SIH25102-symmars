import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useStudents } from '../../contexts/StudentContext';

const Header = ({ title = "Student Early Warning System" }) => {
  const { user, logout } = useAuth();
  const { refreshData } = useStudents();

  const handleRefresh = () => {
    refreshData();
    // Show visual feedback
    const btn = document.querySelector('.refresh-btn');
    if (btn) {
      btn.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        btn.style.transform = 'rotate(0deg)';
      }, 500);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <h1 className="header-title">{title}</h1>
      </div>

      <div className="header-right">
        <button className="refresh-btn" onClick={handleRefresh} title="Refresh Data">
          <i className="fas fa-sync-alt"></i>
          Refresh Data
        </button>

        <div className="user-info">
          <span className="user-role">{user?.role?.toUpperCase()}</span>
          <span className="user-name">{user?.fullName}</span>
          <button className="logout-btn" onClick={logout} title="Logout">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;