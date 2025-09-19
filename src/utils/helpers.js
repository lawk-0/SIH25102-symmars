// Utility helper functions
import { RISK_LEVELS, THRESHOLDS } from './constants';

/**
 * Calculate risk level based on attendance and GPA
 */
export const calculateRiskLevel = (attendance, gpa) => {
  if (attendance < THRESHOLDS.ATTENDANCE.HIGH_RISK || gpa < THRESHOLDS.GPA.HIGH_RISK) {
    return RISK_LEVELS.HIGH;
  }

  if (attendance < THRESHOLDS.ATTENDANCE.MEDIUM_RISK || gpa < THRESHOLDS.GPA.MEDIUM_RISK) {
    return RISK_LEVELS.MEDIUM;
  }

  return RISK_LEVELS.LOW;
};

/**
 * Format timestamp to human-readable string
 */
export const formatTimestamp = (timestamp) => {
  if (typeof timestamp === 'string') {
    return timestamp; // Already formatted for demo
  }

  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffHours < 1) {
    return 'Just now';
  } else if (diffHours < 24) {
    return `${diffHours} hours ago`;
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString();
  }
};

/**
 * Get initials from full name
 */
export const getInitials = (name) => {
  if (!name) return 'N/A';

  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Get risk statistics from students array
 */
export const getRiskStatistics = (students) => {
  const stats = {
    total: students.length,
    high: 0,
    medium: 0,
    low: 0
  };

  students.forEach(student => {
    switch(student.riskLevel) {
      case RISK_LEVELS.HIGH:
        stats.high++;
        break;
      case RISK_LEVELS.MEDIUM:
        stats.medium++;
        break;
      case RISK_LEVELS.LOW:
        stats.low++;
        break;
      default:
        break;
    }
  });

  return stats;
};

/**
 * Filter students based on criteria
 */
export const filterStudents = (students, filters) => {
  return students.filter(student => {
    // Grade filter
    if (filters.grade && filters.grade !== 'All Grades' && student.grade !== filters.grade) {
      return false;
    }

    // Risk level filter
    if (filters.riskLevel && filters.riskLevel !== 'All Risk Levels' && student.riskLevel !== filters.riskLevel) {
      return false;
    }

    // Subject filter
    if (filters.subject && filters.subject !== 'All Subjects' && !student.subjects.includes(filters.subject)) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const nameMatch = student.name.toLowerCase().includes(searchLower);
      const gradeMatch = student.grade.toLowerCase().includes(searchLower);
      const mentorMatch = student.mentor?.toLowerCase().includes(searchLower);

      if (!nameMatch && !gradeMatch && !mentorMatch) {
        return false;
      }
    }

    return true;
  });
};

/**
 * Get academic status based on GPA
 */
export const getAcademicStatus = (gpa) => {
  if (gpa >= 3.5) return { status: 'Excellent', color: '#48bb78' };
  if (gpa >= 3.0) return { status: 'Good', color: '#38b2ac' };
  if (gpa >= 2.5) return { status: 'Average', color: '#ed8936' };
  if (gpa >= 2.0) return { status: 'Below Average', color: '#f56565' };
  return { status: 'Critical', color: '#e53e3e' };
};

/**
 * Get attendance status based on percentage
 */
export const getAttendanceStatus = (attendance) => {
  if (attendance >= 95) return { status: 'Excellent', color: '#48bb78' };
  if (attendance >= 90) return { status: 'Very Good', color: '#38b2ac' };
  if (attendance >= 75) return { status: 'Good', color: '#ed8936' };
  if (attendance >= 60) return { status: 'Needs Improvement', color: '#f56565' };
  return { status: 'Critical', color: '#e53e3e' };
};

/**
 * Sort students by various criteria
 */
export const sortStudents = (students, sortBy, sortOrder = 'asc') => {
  const sorted = [...students].sort((a, b) => {
    let aValue, bValue;

    switch(sortBy) {
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'grade':
        aValue = a.grade;
        bValue = b.grade;
        break;
      case 'attendance':
        aValue = a.attendance;
        bValue = b.attendance;
        break;
      case 'gpa':
        aValue = a.gpa;
        bValue = b.gpa;
        break;
      case 'riskLevel':
        const riskOrder = { 'HIGH RISK': 3, 'MEDIUM RISK': 2, 'LOW RISK': 1 };
        aValue = riskOrder[a.riskLevel];
        bValue = riskOrder[b.riskLevel];
        break;
      default:
        return 0;
    }

    if (sortOrder === 'desc') {
      return bValue > aValue ? 1 : bValue < aValue ? -1 : 0;
    } else {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    }
  });

  return sorted;
};

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Debounce function for search inputs
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Generate random ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};