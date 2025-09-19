// Application constants
export const RISK_LEVELS = {
  HIGH: 'HIGH RISK',
  MEDIUM: 'MEDIUM RISK', 
  LOW: 'LOW RISK'
};

export const RISK_COLORS = {
  [RISK_LEVELS.HIGH]: '#f56565',
  [RISK_LEVELS.MEDIUM]: '#ed8936',
  [RISK_LEVELS.LOW]: '#48bb78'
};

export const USER_ROLES = {
  ADMIN: 'admin',
  MENTOR: 'mentor',
  PARENT: 'parent'
};

export const ALERT_TYPES = {
  ATTENDANCE: 'attendance',
  ACADEMIC: 'academic',
  BEHAVIORAL: 'behavioral'
};

export const ALERT_SEVERITY = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
};

export const GRADES = [
  'All Grades',
  '7th Grade',
  '8th Grade', 
  '9th Grade',
  '10th Grade',
  '11th Grade',
  '12th Grade'
];

export const SUBJECTS = [
  'All Subjects',
  'Math',
  'Science',
  'English',
  'Physics',
  'Chemistry',
  'Biology',
  'History',
  'Geography',
  'Art',
  'Physical Education'
];

export const RISK_LEVELS_FILTER = [
  'All Risk Levels',
  'HIGH RISK',
  'MEDIUM RISK',
  'LOW RISK'
];

export const THRESHOLDS = {
  ATTENDANCE: {
    HIGH_RISK: 60,
    MEDIUM_RISK: 75
  },
  GPA: {
    HIGH_RISK: 2.0,
    MEDIUM_RISK: 2.5
  },
  TEST_SCORES: {
    HIGH_RISK: 50,
    MEDIUM_RISK: 70
  }
};