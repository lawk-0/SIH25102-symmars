import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(mockData.students);
  const [alerts, setAlerts] = useState(mockData.alerts);
  const [systemStats, setSystemStats] = useState(mockData.systemStats);
  const [filters, setFilters] = useState({
    grade: 'All Grades',
    riskLevel: 'All Risk Levels', 
    subject: 'All Subjects',
    search: ''
  });
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filter students based on current filters
  const filteredStudents = students.filter(student => {
    const matchesGrade = filters.grade === 'All Grades' || student.grade === filters.grade;
    const matchesRisk = filters.riskLevel === 'All Risk Levels' || student.riskLevel === filters.riskLevel;
    const matchesSubject = filters.subject === 'All Subjects' || student.subjects.includes(filters.subject);
    const matchesSearch = filters.search === '' || 
      student.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      student.grade.toLowerCase().includes(filters.search.toLowerCase());

    return matchesGrade && matchesRisk && matchesSubject && matchesSearch;
  });

  // Update system stats based on current students
  useEffect(() => {
    const highRisk = students.filter(s => s.riskLevel === 'HIGH RISK').length;
    const mediumRisk = students.filter(s => s.riskLevel === 'MEDIUM RISK').length;
    const lowRisk = students.filter(s => s.riskLevel === 'LOW RISK').length;
    const avgAttendance = students.reduce((sum, s) => sum + s.attendance, 0) / students.length;
    const avgGPA = students.reduce((sum, s) => sum + s.gpa, 0) / students.length;

    setSystemStats({
      ...systemStats,
      totalStudents: students.length,
      highRiskStudents: highRisk,
      mediumRiskStudents: mediumRisk,
      lowRiskStudents: lowRisk,
      averageAttendance: Math.round(avgAttendance * 10) / 10,
      averageGPA: Math.round(avgGPA * 10) / 10
    });
  }, [students]);

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const clearFilters = () => {
    setFilters({
      grade: 'All Grades',
      riskLevel: 'All Risk Levels',
      subject: 'All Subjects', 
      search: ''
    });
  };

  const markAlertAsRead = (alertId) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, isRead: true } : alert
    ));
  };

  const addAlert = (alert) => {
    const newAlert = {
      ...alert,
      id: Math.max(...alerts.map(a => a.id)) + 1,
      timestamp: 'Just now',
      isRead: false
    };
    setAlerts([newAlert, ...alerts]);
  };

  const refreshData = () => {
    // Simulate data refresh
    console.log('Refreshing student data...');
    // In a real app, this would fetch from API
  };

  const value = {
    students,
    filteredStudents,
    alerts,
    systemStats,
    filters,
    viewMode,
    setStudents,
    setAlerts,
    updateFilters,
    clearFilters,
    setViewMode,
    markAlertAsRead,
    addAlert,
    refreshData
  };

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
};